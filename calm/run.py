from pathlib import Path
import argparse
import json
import os
from data_processing.generate_questions import generate_question_list, create_adversarial_prompt
from data_processing.task_hiearchy import task_hiearchy_dict
from models.model_loader import load_model
from utils.logger_info import create_adversarial_info, get_logger
from utils.load_items import load_query_instances
import time

def parse_args():
    parser = argparse.ArgumentParser(description='Run models and prompts on tasks')

    parser.add_argument('-m','--models', nargs='+', required=True, help='List of models to run. Specify each model name separated by spaces.')
    parser.add_argument('-p','--prompt-styles', nargs='+', choices=['basic','basic-CN', 'adversarial-ignore', 'adversarial-ignore-CN', 'adversarial-doubt','adversarial-doubt-CN','zero-shot-IcL','zero-shot-IcL-CN','one-shot-IcL','one-shot-IcL-CN','two-shot-IcL','two-shot-IcL-CN','three-shot-IcL','three-shot-IcL-CN','zero-shot-CoT','zero-shot-CoT-CN','manual-CoT','manual-CoT-CN','explicit-function','explicit-function-CN'], required=True, help='Choose prompt styles from a predefined list. Options include variations in different languages.')
    parser.add_argument('-t','--tasks', nargs='+', help='List of causal tasks.', required=True)

    parser.add_argument('-mcfg','--model-configs-root', help='put you model config file with name {model}.config here', default="./model_configs")
    parser.add_argument('-d','--dataset-root', help='Dir containing the task dataset', default="./calm_dataset", type=str)
    parser.add_argument('-o','--output-root',
                        help='Dir where model response outputs are saved to',
                        default="./output",
                        type=str)
    parser.add_argument('-r','--resume', action='store_true',
                        help='Resume from the last uncompleted output model response file')
    args = parser.parse_args()
    return args

def run_and_store(question_list, model_context, model_query_func, evaluate_json_path, prompt_style, model_query_args=None, resume=False, logger=None):
    """
    Runs the model on a list of questions and stores the responses in a JSON file.

    Args:
        question_list (list): List of question dictionaries to be processed.
        model_context (object): The context or environment of the model.
        model_query_func (function): The function to call for querying the model with a question.
        evaluate_json_path (str): Path to the JSON file where responses will be stored.
        prompt_style (str): The style of the prompts, affecting how questions are processed.
        model_query_args (dict): Additional arguments for the query function.
        resume (bool): Whether to resume processing from the last incomplete output file.
        logger (logging.Logger): Logger object for logging status and errors.

    Processes each question by querying the model and stores the responses in the specified JSON file.
    If resume is enabled and the output file exists, resumes from the last incomplete output.
    """
    if resume and os.path.exists(evaluate_json_path):
        logger.info("Resuming from last uncompleted output model response file")
        output_file_len = len(load_query_instances(evaluate_json_path))
        question_list = question_list[output_file_len:]

        with open(evaluate_json_path, 'a+') as f:
            run_model_and_store_responses(question_list, model_context, model_query_func, f, prompt_style, model_query_args=model_query_args, logger=logger)
    else:
        if not os.path.exists(Path(evaluate_json_path).parent):
            os.makedirs(Path(evaluate_json_path).parent)

        with open(evaluate_json_path, 'w') as f:
            run_model_and_store_responses(question_list, model_context, model_query_func, f, prompt_style, model_query_args=model_query_args, logger=logger)
    
def run_model_and_store_responses(question_list, model_context, model_query_func, file_opened, prompt_style, model_query_args=None, logger=None):
    """
    Processes a list of questions using a specified model and stores the responses in an open file.

    Args:
        question_list (list): A list of question dictionaries to be processed.
        model_context (object): The context or environment of the model, used in the query function.
        model_query_func (function): The function to call for querying the model with a question.
        file_opened (file): An open file object where responses are to be written.
        prompt_style (str): The style of the prompts.
        model_query_args (dict): Additional arguments for the query function.
        logger (logging.Logger): Logger object for logging status and errors.

    Processes each question by querying the model, handles exceptions by retrying, and logs the response details.
    """
    index = 0
    answer_count = 0 # Counter to track the number of questions answered

    # Iterate through the list of questions
    while index < len(question_list):
        assert index >= 0 # Ensure that the index is never negative
        item = question_list[index]
        try:
            # Call the model query function to get the response for the current question
            item["model_response"] = model_query_func(model_context, item["question"], **model_query_args)

            # Check if prompt style is adversarial, if so, query the model with the adversarial prompt
            if prompt_style in ["adversarial-ignore","adversarial-doubt","adversarial-ignore-CN","adversarial-doubt-CN"]:
                adversarial_prompt = create_adversarial_prompt(prompt_style, item["model_response"], item["question"])
                item["model_response_AP"] = model_query_func(model_context, adversarial_prompt, **model_query_args)

                info = create_adversarial_info(prompt_style)
                logger.info("\nPrompt & response of item "  + str(item["index"]) + ":\n"+ item["question"] + item["model_response"] + info + adversarial_prompt + item["model_response_AP"])
            else:
                logger.info("\nPrompt & response of item "  + str(item["index"]) + ":\n" + item["question"] + item["model_response"])
            index += 1
        except Exception as e:
            # Log connection issues and retry the same question after a delay
            print('Try to reconnect',e)
            index -= 1
            time.sleep(5)    
        # Remove the question from the item for storage to save space
        del item["question"]
        # Write the processed item to the file
        file_opened.write(json.dumps(item, ensure_ascii=False) + '\n')
        answer_count += 1

    logger.info(f"Answered {answer_count} questions")
    logger.info(f"Finished running model on {len(question_list)} questions")
        
def main():
    # Parse command line arguments
    args = parse_args()

    # Process each task
    for task in args.tasks:
        relative_task_path = task_hiearchy_dict[task]+task
        print(f"Running models on task: {relative_task_path}")
        for prompt_style in args.prompt_styles:
            for model in args.models:
                dataset_path = Path(args.dataset_root)  / (relative_task_path + ".json")
                model_response_path = Path(args.output_root) / relative_task_path / model / prompt_style / "responses.json"
                logger_dir = Path("./loggers") / relative_task_path / model / prompt_style

                # Initialize logger for model and prompt
                logger = get_logger(os.path.join(logger_dir, "log"), is_console=True)

                # Load model configuration
                model_config_path = Path(args.model_configs_root) / f"{model}.json" 
                if not os.path.exists(model_config_path):
                    logger.info(f"Model config file {model_config_path} not found, use default model config file")
                    model_config_path = Path(args.model_configs_root) / f"default.json"
                with open(model_config_path, 'r') as f:
                    config = json.load(f)
                model_startup_args = config["startup"]
                if not task in config["query"] or not prompt_style in config["query"][task]:
                    logger.info(f"Task {task} and prompt {prompt_style} not found in model config file {model_config_path}, use default query args")
                    model_query_args = config["query"]["default"]
                else:
                    model_query_args = config["query"][task][prompt_style]

                # Generate questions and load model
                question_list = generate_question_list(dataset_path=dataset_path, prompt_style=prompt_style)
                model_context, model_query_func = load_model(model_name=model, model_args=model_startup_args)

                # Run model and store responses
                logger.info(f"Start running model {model} on task {task} with prompt style {prompt_style}")
                run_and_store(question_list, model_context, model_query_func, model_response_path, prompt_style, model_query_args=model_query_args, resume=args.resume, logger=logger)

    print("Done :p")

if __name__ == '__main__':
    main()

