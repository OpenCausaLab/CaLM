from anthropic import Anthropic, HUMAN_PROMPT, AI_PROMPT
import requests


def startup(context):
    return context

def query(context, query_text, dry_run=False):
    anthropic = Anthropic(
    api_key=context,
    max_retries=5,
    )    
    if dry_run:
        return None
    query = f"{HUMAN_PROMPT}" + query_text + f"{AI_PROMPT}"
    response = anthropic.completions.create(
        model="claude-2",
        prompt=query,
        max_tokens_to_sample=200,
        temperature=0,
    )
    return response.completion
