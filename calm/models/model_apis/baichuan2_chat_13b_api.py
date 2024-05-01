from transformers import AutoTokenizer, AutoModelForCausalLM
from transformers.generation.utils import GenerationConfig
import torch

import os

# import torch
from rtpt import RTPT
import os.path
from os import path



def startup(ROOT_PATH):
    rtpt = RTPT(name_initials='MW', experiment_name='', max_iterations=300)
    rtpt.start()
    model_path =  os.path.join(ROOT_PATH, "Baichuan2-13B-Chat" )
    model = AutoModelForCausalLM.from_pretrained(model_path, device_map="auto", torch_dtype=torch.float16, trust_remote_code=True)
    model.generation_config = GenerationConfig.from_pretrained(model_path, trust_remote_code=True)
    tokenizer = AutoTokenizer.from_pretrained(model_path, use_fast=False, trust_remote_code=True)

    return model, tokenizer


def query(context, query_text, dry_run=False):
    model, tokenizer = context
    if dry_run:
        return None
    messages = []
    messages.append({"role": "user", "content": query_text})
    response = model.chat(tokenizer, messages)
    return response
