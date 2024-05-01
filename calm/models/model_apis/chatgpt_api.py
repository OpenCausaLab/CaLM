# import openai
from openai import OpenAI
import time
MODEL = "gpt-3.5-turbo"

def startup(api_key):
    return api_key


def query(context, query_text, dry_run=False):
    
    client = OpenAI(api_key = context)

    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "user", "content": query_text}
            ],
        temperature=0,
    )

    return response.choices[0].message.content

