from modelscope import AutoModelForCausalLM, AutoTokenizer
import torch
import os

# import torch
from rtpt import RTPT
import os.path
from os import path


def startup(ROOT_PATH):
    rtpt = RTPT(name_initials='MW', experiment_name='', max_iterations=300)
    rtpt.start()
    model_path =  os.path.join(ROOT_PATH, "internlm-chat-20b" )
    model = AutoModelForCausalLM.from_pretrained(model_path, device_map="auto", trust_remote_code=True).eval()
    model = model.eval()
    tokenizer = AutoTokenizer.from_pretrained(model_path,trust_remote_code=True)

    return model, tokenizer


def query(context, query_text, dry_run=False):
    model, tokenizer = context
    if dry_run:
        return None
    
    output, history = model.chat(tokenizer, query_text)
    return output
