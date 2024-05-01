from pathlib import Path
import argparse
import json
import os
import datetime
import pandas as pd
from data_processing.task_hiearchy import task_hiearchy_dict
from evaluation.core_metrics import compute_core_metrics, task_to_accuracy_module_map
from evaluation.errors import identify_model_errors
from utils.logger_info import create_adversarial_info, get_logger
from evaluation.element_properties.random_guess import task_random_guess_value
from evaluation.aggregate_metrics import eval_understandability, eval_open_limited_gap, eval_solvability

def parse_args():
    parser = argparse.ArgumentParser(description='Run models and prompts on tasks')

    parser.add_argument('--models', nargs='+', required=True, help='List of models to run. Specify each model name separated by spaces.')
    parser.add_argument('-p','--prompt-styles', nargs='+', choices=['basic','basic-CN', 'adversarial-ignore', 'adversarial-ignore-CN', 'adversarial-doubt','adversarial-doubt-CN','zero-shot-IcL','zero-shot-IcL-CN','one-shot-IcL','one-shot-IcL-CN','two-shot-IcL','two-shot-IcL-CN','three-shot-IcL','three-shot-IcL-CN','zero-shot-CoT','zero-shot-CoT-CN','manual-CoT','manual-CoT-CN','explicit-function','explicit-function-CN'], required=True, help='Choose prompt styles from a predefined list. Options include variations in different languages.')
    parser.add_argument('-t','--tasks', nargs='+', help='List of causal tasks.', required=True)

    parser.add_argument('-cm','--core-metrics', help='whether to compute core metrics, you need to have the ground truth dataset', action='store_true',)
    parser.add_argument('-ea','--error-analysis', help='whether to conduct error analysis', action='store_true',)
    parser.add_argument('-am','--aggregate-metrics', help='whether to compute aggregate metrics, you need to have the data for core-metrics first', action='store_true',)

    parser.add_argument('--check-complete', help='Check whether the task dataset is run completely, raise error if not', action='store_true',)
    parser.add_argument('-d','--dataset-root', help='Dir containing the task dataset, if check-complete is True, the dataset should be given', default="./calm_dataset", type=str)
    parser.add_argument('-gt','--gt-label-root', help='Dir containing the ground truth labels, if core-metrics is True, the ground truth labels should be given', default="./calm_dataset_gt_label", type=str)
    parser.add_argument('-o','--output-root', help='Dir where outputs are saved to and model responses are from here', default="./output", type=str)
    args = parser.parse_args()
    return args

def main():
    args = parse_args()
    date = datetime.datetime.now().strftime("%Y-%m-%d-%H-%M-%S")
    logger = get_logger(os.path.join(args.output_root, "analysis_loggers",f"evaluate_log_{date}"), is_console=True)
    overall_acc = {}
    models_robustness = {}

    # evaluate core metrics and errors
    for task in args.tasks:
        relative_task_path = task_hiearchy_dict[task]+task
        overall_acc[relative_task_path] = {}
        models_robustness[relative_task_path] = {}
        for model in args.models:
            error_dict = {}
            overall_acc[relative_task_path][model] = {}
            for prompt_style in args.prompt_styles:
                overall_acc[relative_task_path][model][prompt_style] = {}

                model_response_path = Path(args.output_root) / relative_task_path / model / prompt_style / "responses.json"

                model_response_items = [json.loads(line) for line in open(model_response_path, 'r', encoding="utf-8").readlines()]

                # Compute core metrics
                if args.core_metrics:
                    gt_label_path = Path(args.gt_label_root) / (relative_task_path+".json")
                    gt_items = [json.loads(line) for line in open(gt_label_path, 'r', encoding="utf-8").readlines()]
                    if args.check_complete:
                        assert len(gt_items) == len(model_response_items), f"Length of ground truth items and model response items do not match for task {task}"
                    metrics, pred_list = compute_core_metrics(model_response_items, task=task, prompt_style=prompt_style, gt_items=gt_items)
                    overall_acc[relative_task_path][model][prompt_style] = metrics["Accuracy"]*100
                    # save pred_list to csv
                    save_path = os.path.join(args.output_root, relative_task_path, f"{model}_{prompt_style}_pred_list.csv")
                    pd.DataFrame(pred_list).to_csv(save_path)
                    if "Robustness" in metrics:
                        models_robustness[relative_task_path][model] = metrics["Robustness"]
                
                # Conduct error analysis
                if args.error_analysis: 
                    if prompt_style.startswith("explicit-function") or task.startswith("CEG-O_E-CARE"):
                        raise NotImplementedError("Error analysis for explicit function prompt style and CEG-O_E-CARE task is not implemented yet.")
                    if args.check_complete:
                        dataset_path = Path(args.dataset_root)  / (relative_task_path+".json")
                        data_items = [json.loads(line) for line in open(dataset_path, 'r', encoding="utf-8").readlines()]
                        assert len(data_items) == len(model_response_items), f"Length of data items and model response items do not match for task {task}"
                    errors = identify_model_errors(model_response_items, task=task, prompt_style=prompt_style)  # Define specific criteria
                    error_dict[prompt_style] = errors

            if args.error_analysis:
                # save error to csv
                error_df = pd.DataFrame.from_dict(error_dict)
                save_path = os.path.join(args.output_root, relative_task_path, f"{model}_errors.csv")
                error_df.to_csv(save_path)
                logger.info(f"error analysis saved to {save_path}")
        if args.core_metrics:
            # save acc to csv
            model_prompt_acc = pd.DataFrame.from_dict(overall_acc[relative_task_path]).T
            save_path = os.path.join(args.output_root, f"{relative_task_path}_models_acc.csv")
            model_prompt_acc.to_csv(save_path)
            logger.info(f"accuracy saved to {save_path}")
    # save robustness to csv
    if args.core_metrics: 
        save_path = os.path.join(args.output_root, "models_robustness.csv")
        pd.DataFrame.from_dict(models_robustness).T.to_csv(save_path)
        logger.info(f"robustness saved to {save_path}")

    # aggregate metrics
    # If you already have the core metric results, you can directly compute the aggregate metrics without running "-cm" again
    if args.aggregate_metrics:
        task_performance = {}
        models_volatility = pd.DataFrame()
        prompts_volatility = pd.DataFrame()
        for task in args.tasks:
            relative_task_path = task_hiearchy_dict[task]+task
            model_prompt_acc = pd.read_csv(os.path.join(args.output_root, f"{relative_task_path}_models_acc.csv"), index_col=0)

            # model/prompt volatility statistics
            models_volatility[relative_task_path] = model_prompt_acc.std(axis=1)
            prompts_volatility[relative_task_path] = model_prompt_acc.T.std(axis=1)

            # understandability statistics
            flattened_data = model_prompt_acc.values.flatten()
            median = pd.Series(flattened_data).median()
            third_quartile = pd.Series(flattened_data).quantile(0.75)
            # open-limited-gap statistics
            top_5_model = model_prompt_acc.mean(axis=1).nlargest(5).index.tolist()
            # solvability statistics
            df_melted = model_prompt_acc.melt(var_name='prompt', value_name='value')
            max_index = df_melted['value'].idxmax()
            max_row = df_melted.loc[max_index]
            max_value = max_row['value']
            max_average_value = model_prompt_acc.mean(axis=1).max()
            third_max_average_value = model_prompt_acc.mean(axis=1).nlargest(3).iloc[-1]
            # open-ended tasks are defined manually
            if task_to_accuracy_module_map.get(task) != "choice":
                print(f"Task {task} is an open-ended or probability counting task, the understandability is defined manually instead of by the metrics.")
                task_performance[relative_task_path] = {
                    "understandability": "see-manual-definition",
                    "open_limited_gap": eval_open_limited_gap(top_5_model),
                    "solvability": eval_solvability(max_value, max_average_value, third_max_average_value),
                    "median": median, 
                    "third_quartile": third_quartile, 
                    "top_5_model": top_5_model, 
                    "max_value": max_value, 
                    "max_average_value": max_average_value, 
                    "third_max_average_value": third_max_average_value,}
            else:
                task_performance[relative_task_path] = {
                    "understandability": eval_understandability(third_quartile, median, task_random_guess_value[task]),
                    "open_limited_gap": eval_open_limited_gap(top_5_model),
                    "solvability": eval_solvability(max_value, max_average_value, third_max_average_value, task_random_guess_value[task]),
                    "median": median, 
                    "third_quartile": third_quartile, 
                    "top_5_model": top_5_model, 
                    "max_value": max_value, 
                    "max_average_value": max_average_value, 
                    "third_max_average_value": third_max_average_value,}
            
        task_performance_df = pd.DataFrame.from_dict(task_performance)
        # save to csv
        models_volatility.to_csv(os.path.join(args.output_root, "models_volatility.csv"))
        prompts_volatility.to_csv(os.path.join(args.output_root, "prompts_volatility.csv"))
        task_performance_df.to_csv(os.path.join(args.output_root, "task_metrics.csv"))  
        logger.info(f"aggregate metrics save to models_volatility.csv, prompts_volatility.csv, task_metrics.csv in {args.output_root}")


if __name__ == '__main__':
    main()

