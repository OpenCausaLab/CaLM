import re
def check_standalization(model_response, prompt_style, type):
    if prompt_style == "zero-shot-CoT" or prompt_style == "zero-shot-CoT-CN":
        if model_response.startswith(("no","否","yes","是")) \
            or any(response in model_response for response in ["answer is yes","answer is no","answer: yes","answer is: yes","answer: no","answer is: no","答案是:是","答案是是","答案是:否","答案是否"]):
            return 0
        else:
            return 1
    elif prompt_style == "manual-CoT" or prompt_style == "manual-CoT-CN":
        if model_response.endswith(("the answer is yes","the answer is no","the answer is yes.","the answer is no.","答案为“否”。","答案为“是”。","答案为“否”","答案为“是”","答案是“否”。","答案是“是”。","答案是“否”","答案是“是”")):
            return 0
        else:
            return 1
    
def check_empty(model_response):
    if model_response == "":
        return 1
    else:
        return 0
    
def check_repetition(model_response):
    if any(response in model_response for response in ["answer (yes or no ?)","event a:", "答案（是或否？）", "事件一："]):
        return 1
    else:
        return 0

def contains_chinese(text):
    chinese_pattern = re.compile(r'[\u4e00-\u9fff]+')
    result = 1 if chinese_pattern.search(text) is not None else 0

    return result

def contains_english(text):
    english_pattern = re.compile(r'[A-Za-z]{2,}')
    result = 1 if english_pattern.search(text) is not None else 0

    return result

def check_abnormality(preds):
    abnormalities = "All Yes" if all(pred == 1 for pred in preds) else \
                    "All No" if all(pred == 0 for pred in preds) else 0
    return abnormalities