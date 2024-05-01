# Model Details
## OpenAI Series
OpenAi has deleted some of the model apis. Therefore, only gpt4 and gpt3.5 are available for our code. Before using, you need to copy your api key to the model config `{model}.json`, e.g., `gpt4.json`.
```
{
    "startup":
        {
            "api_key": "TODO: put your api key here"
        },
    "query":
    {
        "default":{
        }
    }
}
```
The following table shows the API version and our evaluation time for our benchmark. The evaluation date is June 2023~December 2023.

<table>
  <tr>
    <th>Model</th>
    <th>API Version</th>
  </tr>
  <tr>
    <td>ada</td>
    <td>ada</td>
  </tr>
  <tr>
    <td>babbage</td>
    <td>babbage</td>
  </tr>
  <tr>
    <td>curie</td>
    <td>curie</td>
  </tr>
  <tr>
    <td>davinci</td>
    <td>davinci</td>
  </tr>
  <tr>
    <td>text-ada-001</td>
    <td>text-ada-001</td>
  </tr>
  <tr>
    <td>text-babbage-001</td>
    <td>text-babbage-001</td>
  </tr>
  <tr>
    <td>text-curie-001</td>
    <td>text-curie-001</td>
  </tr>
  <tr>
    <td>text-davinci-001</td>
    <td>text-davinci-001</td>
  </tr>
  <tr>
    <td>text-davinci-002</td>
    <td>text-davinci-002</td>
  </tr>
  <tr>
    <td>text-davinci-003</td>
    <td>text-davinci-003</td>
  </tr>
  <tr>
    <td>GPT-3.5</td>
    <td>gpt-3.5-turbo</td>
  </tr>
  <tr>
    <td>GPT-4</td>
    <td>gpt-4</td>
  </tr>
</table>


## Claude 2
We use the claude-2 api for evaluation. Similar to OpenAI series, copy your api key to the model config before using.

## InternLM-chat (7B)
Download link:  https://modelscope.cn/models/Shanghai_AI_Laboratory/internlm-chat-7b/summary

## InternLM-chat (20B)
Download link:  https://modelscope.cn/models/Shanghai_AI_Laboratory/internlm-chat-20b/summary

## Qwen (7B)
Download link:  https://huggingface.co/Qwen/Qwen-7B

## Qwen (14B)
Download link:  https://huggingface.co/Qwen/Qwen-14B

## Baichuan1 (7B)
Download link:  https://huggingface.co/baichuan-inc/Baichuan-7B

## Baichuan1-chat (13B)
Download link:  https://huggingface.co/baichuan-inc/Baichuan-13B-Chat

## Baichuan2-chat (7B)
Download link:  https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat

## Baichuan2-chat (13B)
Download link:  https://huggingface.co/baichuan-inc/Baichuan2-13B-Chat

## Llama2 (7B)
Download link:  https://huggingface.co/meta-llama/Llama-2-7b-hf

## Llama2 (13B)
Download link:  https://huggingface.co/meta-llama/Llama-2-13b

## Llama2 (70B)
Download link:  https://huggingface.co/meta-llama/Llama-2-70b

## Llama2-chat (70B)
Download link:  https://huggingface.co/meta-llama/Llama-2-70b-hf

## Wizardcoder (15B)
Download link:  https://github.com/nlpxucan/WizardLM

## Koala (13B)
Download link:  https://huggingface.co/TheBloke/koala-13B-HF

## Vicuna-v1.3 (33B)
Download link:  https://huggingface.co/lmsys/vicuna-33b-v1.3

# Adding your own models
Write your own models api and add it to `calm/models/model_apis`,name your api file the same name as your pass to the `--models` arguments so that our code can load the api file automatically. Your api should contain two parts: a `startup` function which returns the params that is shared along every model queries, and a `query` function that query the model with query text(str) and returns the model response (str).

Take `baichuan1_7b_api` as example:
```
def startup(ROOT_PATH):
    rtpt = RTPT(name_initials='MW', experiment_name='', max_iterations=300)
    rtpt.start()
    model_path =  os.path.join(ROOT_PATH, "baichuan-7B" )
    model = AutoModelForCausalLM.from_pretrained(model_path, device_map="auto", torch_dtype=torch.float16, trust_remote_code=True)
    model.generation_config = GenerationConfig.from_pretrained(model_path, trust_remote_code=True)
    tokenizer = AutoTokenizer.from_pretrained(model_path, use_fast=False, trust_remote_code=True)

    return model, tokenizer


def query(context, query_text, dry_run=False, max_new_tokens=200):
    model, tokenizer = context
    if dry_run:
        return None
    input_ids = tokenizer(query_text, return_tensors="pt").input_ids.cuda()
    generated_ids = model.generate(input_ids, num_return_sequences=1, max_new_tokens=max_new_tokens)

    results = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)
    return results[0][len(query_text):]
```

After sucessfully loaded your own model, you can process to run and evaluate your model. During your evaluation, please note that if your model is not open-sourced, to compute the open-limited gap, ensure to include your new model in the limited model list in evaluation.element_properties.model_info:
```
limited_model_list = ["text-ada-001","text-babbage-001",..., "your new limited model"]
```