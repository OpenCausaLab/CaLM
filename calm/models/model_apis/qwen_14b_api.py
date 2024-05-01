from modelscope import AutoModelForCausalLM, AutoTokenizer
from modelscope import GenerationConfig
import torch

import os

# import torch
from rtpt import RTPT
import os.path
from os import path


def startup(ROOT_PATH):
    rtpt = RTPT(name_initials='MW', experiment_name='', max_iterations=300)
    rtpt.start()
    model_path =  os.path.join(ROOT_PATH, "Qwen-14B" )
    model = AutoModelForCausalLM.from_pretrained(model_path, device_map="auto", trust_remote_code=True).eval()
    model.generation_config = GenerationConfig.from_pretrained(model_path, trust_remote_code=True)
    tokenizer = AutoTokenizer.from_pretrained(model_path,trust_remote_code=True)

    return model, tokenizer


def query(context, query_text, dry_run=False, max_new_tokens=200):
    model, tokenizer = context
    if dry_run:
        return None
    input_ids = tokenizer(query_text, return_tensors="pt").input_ids.cuda()
    generated_ids = model.generate(input_ids, num_return_sequences=1, max_new_tokens=max_new_tokens)

    results = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)
    return results[0][len(query_text):]
