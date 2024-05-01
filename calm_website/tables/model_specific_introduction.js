model_specific_dicts = {
    "ada (0.35B)":{"description":
        "<b>Organization</b>: OpenAI<br>"+
        "<b>Website</b>: https://github.com/openai/gpt-3<br>"+   
        "<b>Parameters</b>: 0.35B<br>"+
        "<b>Release Time</b>: 2020/5/28<br>"+
        "<b>Model Description</b>: Ada, with a size of 0.35 billion parameters, is part of the GPT-3 family, an original series of autoregressive language models developed by OpenAI in 2020<sup>[1]</sup>. The GPT-3 series includes a variety of models (GPT-3 Small, GPT-3 Medium, GPT-3 Large, GPT-3 XL, GPT-3 2.7B, GPT-3 6.7B, GPT-3 13.0B, GPT-3 175B). Out of these, OpenAI has made several models accessible via its API, namely the medium, XL, 6.7B, and 175B versions. These are known by the names ada, babbage, curie, and davinci, respectively<sup>[2]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model's <i>average scenario-prompt accuracy</i> is 22.9\%, with the average <i>prompt-average rank</i> of 24/28 (the lowest average <i>prompt-average rank</i>). Additionally, it demonstrates a high average robustness score of 96.7\% across various scenarios.",
        "references":"[1] Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al. Language models are few-shot learners. Advances in neural information processing systems, 33:1877–1901, 2020.  <br>[2] “GPT-3,” Wikipedia. Mar. 29, 2024. Accessed: Mar. 31, 2024. [Online]. Available: https://en.wikipedia.org/w/index.php?title=GPT-3&oldid=1216142929"
    },

    "babbage (1.3B)":{"description":
    "<b>Organization</b>: OpenAI<br>"+
    "<b>Website</b>: https://github.com/openai/gpt-3<br>"+   
    "<b>Parameters</b>: 1.3B<br>"+
    "<b>Release Time</b>: 2020/5<br>"+
    "<b>Model Description</b>: Babbage, with a size of 1.3 billion parameters, is part of the GPT-3 family, an original series of autoregressive language models developed by OpenAI in 2020<sup>[1]</sup>. The GPT-3 series includes a variety of models (GPT-3 Small, GPT-3 Medium, GPT-3 Large, GPT-3 XL, GPT-3 2.7B, GPT-3 6.7B, GPT-3 13.0B, GPT-3 175B). Out of these, OpenAI has made several models accessible via its API, namely the medium, XL, 6.7B, and 175B versions. These are known by the names ada, babbage, curie, and davinci, respectively<sup>[2]</sup>.<br>"+
    "<b>Performance Analysis</b>: The model's performance on scenario-based prompts yields an average accuracy rate of 23.4\%. It ranks 23rd out of 28 when considering the average of <i>prompt-average rank</i>. Additionally, the model demonstrates an average robustness score of 94.9\%.",
    "references":"[1] Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al. Language models are few-shot learners. Advances in neural information processing systems, 33:1877–1901, 2020.  <br>[2]  “GPT-3,” Wikipedia. Mar. 29, 2024. Accessed: Mar. 31, 2024. [Online]. Available: https://en.wikipedia.org/w/index.php?title=GPT-3&oldid=1216142929"
},

    "curie (6.7B)":{"description":
    "<b>Organization</b>: OpenAI<br>"+
    "<b>Website</b>: https://github.com/openai/gpt-3<br>"+   
    "<b>Parameters</b>: 6.7B<br>"+
    "<b>Release Time</b>: 2020/5<br>"+
    "<b>Model Description</b>: Curie, with a size of 6.7 billion parameters, is part of the GPT-3 family, an original series of autoregressive language models developed by OpenAI in 2020<sup>[1]</sup>. The GPT-3 series includes a variety of models (GPT-3 Small, GPT-3 Medium, GPT-3 Large, GPT-3 XL, GPT-3 2.7B, GPT-3 6.7B, GPT-3 13.0B, GPT-3 175B). Out of these, OpenAI has made several models accessible via its API, namely the medium, XL, 6.7B, and 175B versions. These are known by the names ada, babbage, curie, and davinci, respectively<sup>[2]</sup>.<br>"+
    "<b>Performance Analysis</b>: The model achieves an <i>average scenario-prompt accuracy</i> of 28.4\%, holds an average <i>prompt-average rank</i> of 18/28, and maintains an average robustness score of 93.5\%.",
    "references":"[1] [1] Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al. Language models are few-shot learners. Advances in neural information processing systems, 33:1877–1901, 2020.  [2] “GPT-3,” Wikipedia. Mar. 29, 2024. Accessed: Mar. 31, 2024. [Online]. Available: https://en.wikipedia.org/w/index.php?title=GPT-3&oldid=1216142929"},

    "davinci (175B)":{"description":
        "<b>Organization</b>: OpenAI<br>"+
        "<b>Website</b>: https://github.com/openai/gpt-3<br>"+   
        "<b>Parameters</b>: 175B<br>"+
        "<b>Release Time</b>: 2020/5<br>"+
        "<b>Model Description</b>: davinci, containing 175 billion parameters, is the most powerful and largest model in the GPT-3 series released by OpenAI in 2020<sup>[1]</sup>. The model demonstrates three key capabilities: language generation, where it follows a given prompt and then generates sentences to complete it; in-context learning, where it follows a few examples of a given task and then generates solutions for new test cases; and world knowledge, which encompasses factual knowledge and commonsense understanding<sup>[1]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model records an <i>average scenario-prompt accuracy</i> of 29.9\%, alongside an average <i>prompt-average rank</i> of 15 out of 28 and an average robustness score of 85.8\%.",
        "references":"[1] Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al. Language models are few-shot learners. Advances in neural information processing systems, 33:1877–1901, 2020.  "},

    "text-ada-001":{"description":
    "<b>Organization</b>: OpenAI<br>"+
    "<b>Website</b>: https://openai.com/research/instruction-following<br>"+   
    "<b>Parameters</b>: N/A<br>"+
    "<b>Release Time</b>: 2022/1<br>"+
    "<b>Model Description</b>: text-ada-001 belongs to the InstructGPT series<sup>[1]</sup>. This series is developed through a training process that incorporates human feedback, specifically through supervised fine-tuning based on demonstrations written by humans. Compared to the GPT-3 series, InstructGPT models excel at following user instructions, delivering more accurate information, and minimizing toxic content<sup>[1]</sup>.<br>"+
    "<b>Performance Analysis</b>: The model showcases an <i>average scenario-prompt accuracy</i> of 25.3\%, achieves an average <i>prompt-average rank</i> of 21 out of 28, and possesses an average robustness score of 84.7\%.",
    "references":"[1] Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., et al. Training language models to follow instructions with human feedback. Advances in Neural Information Processing Systems, 35:27730–27744, 2022  "},

    "text-babbage-001":{"description":
        "<b>Organization</b>: OpenAI<br>"+
        "<b>Website</b>: https://openai.com/research/instruction-following<br>"+   
        "<b>Parameters</b>: N/A<br>"+
        "<b>Release Time</b>: 2022/1<br>"+
        "<b>Model Description</b>: text-babbage-001 is a member of the InstructGPT series<sup>[1]</sup>. This series is developed through a training process that incorporates human feedback, specifically through supervised fine-tuning based on demonstrations written by humans. Compared to the GPT-3 series, InstructGPT models excel at following user instructions, delivering more accurate information, and minimizing toxic content<sup>[1]</sup>.<br>"+
        "<b>Performance Analysis</b>: The <i>average scenario-prompt accuracy</i> of the model stands at 28.3\%, alongside an average <i>prompt-average rank</i> of 19/28 and an average robustness score of 94.3\%.",
        "references":"[1] Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., et al. Training language models to follow instructions with human feedback. Advances in Neural Information Processing Systems, 35:27730–27744, 2022  "},

    "text-curie-001":{"description":
        "<b>Organization</b>: OpenAI<br>"+
        "<b>Website</b>: https://openai.com/research/instruction-following<br>"+   
        "<b>Parameters</b>: N/A<br>"+
        "<b>Release Time</b>: 2022/1<br>"+
        "<b>Model Description</b>: Text-curie-001 is a member of the InstructGPT series<sup>[1]</sup>. This series is developed through a training process that incorporates human feedback, specifically through supervised fine-tuning based on demonstrations written by humans. Compared to the GPT-3 series, InstructGPT models excel at following user instructions, delivering more accurate information, and minimizing toxic content<sup>[1]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model's performance accuracy for scenario prompts averages 31.7\%, with its average <i>prompt-average rank</i> at 15 out of 28 and an average robustness score of 91.6\%.",
        "references":"[1] Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., et al. Training language models to follow instructions with human feedback. Advances in Neural Information Processing Systems, 35:27730–27744, 2022  "},

    "text-davinci-001":{"description":
        "<b>Organization</b>: OpenAI<br>"+
        "<b>Website</b>: https://openai.com/research/instruction-following<br>"+   
        "<b>Parameters</b>: N/A<br>"+
        "<b>Release Time</b>: 2022/1<br>"+
        "<b>Model Description</b>: Text-davinci-001 is a member of the InstructGPT series<sup>[1]</sup>. This series is developed through a training process that incorporates human feedback, specifically through supervised fine-tuning based on demonstrations written by humans. Compared to the GPT-3 series, InstructGPT models excel at following user instructions, delivering more accurate information, and minimizing toxic content<sup>[1]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model exhibits an <i>average scenario-prompt accuracy</i> of 33.3\%, holds an average <i>prompt-average rank</i> of 11 out of 28, and achieves an average robustness score of 76.2\%.",
        "references":"[1] Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., et al. Training language models to follow instructions with human feedback. Advances in Neural Information Processing Systems, 35:27730–27744, 2022  "},
        
    "text-davinci-002":{"description":
        "<b>Organization</b>: OpenAI<br>"+
        "<b>Website</b>: https://openai.com/blog/gpt-3-edit-insert<br>"+   
        "<b>Parameters</b>: N/A<br>"+
        "<b>Release Time</b>: 2022/3<br>"+
        "<b>Model Description</b>: Text-davinci-002 is one of the models in the GPT 3.5 series. Like former InstructGPT models<sup>[1]</sup>, it undergoes a training process that includes supervised fine-tuning using examples crafted by humans. Originating from code-davinci-002, this model possesses the capability to modify or augment existing text with new content, extending beyond mere text completion<sup>[1]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model's <i>average scenario-prompt accuracy</i> is 42.3\%, with the average <i>prompt-average rank</i> of 6/28 and an average robustness score of 70.9\%.",
        "references":"[1] Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., et al. Training language models to follow instructions with human feedback. Advances in Neural Information Processing Systems, 35:27730–27744, 2022  "},

    "text-davinci-003":{"description":
        "<b>Organization</b>: OpenAI<br>"+
        "<b>Website</b>: https://platform.openai.com/docs/deprecations<br>"+   
        "<b>Parameters</b>: N/A<br>"+
        "<b>Release Time</b>: 2022/11<br>"+
        "<b>Model Description</b>: text-davinci-003, a variant within the GPT 3.5 series, builds upon text-davinci-002<sup>[1,2]</sup> and incorporates reinforcement learning (PPO) through reward models. It applies instruction tuning based on reinforcement learning from human feedback<sup>[3]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model achieves a scenario-prompt performance accuracy average of 47.3\%, ranks on average 4th out of 28 in <i>prompt-average rank</i>, and maintains an average robustness score of 68.2\%.",
        "references":"[1] Zhao, W. X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., et al. A survey of large language models. arXiv preprint arXiv:2303.18223, 2023.<br>[2] Fu, Yao; Peng, H. and Khot, T. How does gpt obtain its ability? tracing emergent abilities of language models to their sources. Yao Fu’s Notion, Dec 2022.<br>[3] Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., et al. Training language models to follow instructions with human feedback. Advances in Neural Information Processing Systems, 35:27730–27744, 2022  "},

    "GPT-3.5-Turbo":{"description":
        "<b>Organization</b>: OpenAI<br>"+
        "<b>Website</b>: https://openai.com/blog/chatgpt/<br>"+   
        "<b>Parameters</b>: N/A<br>"+
        "<b>Release Time</b>: 2022/11<br>"+
        "<b>Model Description</b>: Also known as ChatGPT<sup>[1]</sup>, this conversational language model created by OpenAI supports dialogue interactions. It enhances text-davinci-003 by being specifically tailored for chatting. It employs Instruction tuning with Reinforcement Learning from Human Feedback (RLHF)<sup>[2,3]</sup>. The model's dialogue-oriented design enables it to respond to follow-up questions, acknowledge errors, contest incorrect assumptions, and decline unsuitable requests.<br>"+
        "<b>Performance Analysis</b>: The model demonstrates an <i>average scenario-prompt accuracy</i> of 48.2\%, an average <i>prompt-average rank</i> of 3 out of 28, and an average robustness score of 70.1\%.",
        "references":"[1] “Introducing ChatGPT.” Accessed: Mar. 31, 2024. [Online]. Available: https://openai.com/blog/chatgpt<br> [2] Stiennon, Nisan, et al. \"Learning to summarize with human feedback.\" Advances in Neural Information Processing Systems 33 (2020): 3008-3021.<br> [3] Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., et al. Training language models to follow instructions with human feedback. Advances in Neural Information Processing Systems, 35:27730–27744, 2022  "},

    "GPT-4":{"description":
        "<b>Organization</b>: OpenAI<br>"+
        "<b>Website</b>: https://openai.com/product/gpt-4<br>"+
        "<b>Parameters</b>: N/A<br>"+
        "<b>Release Time</b>: 2023/3<br>"+
        "<b>Model Description</b>: At present (2024-3), GPT-4<sup>[1]</sup> stands as OpenAI's most advanced model<sup>[2]</sup>, delivering responses that are both safer and more practical. This iteration marks a significant evolution in the GPT series, with enhancements aimed at closely following human instructions and providing more valuable, safe, and accurate outputs, all achieved through the integration of Reinforcement Learning from Human Feedback (RLHF)<sup>[3,4]</sup>. GPT-4 distinguishes itself from its predecessors by utilizing a greater amount of data and computational resources. Moreover, GPT-4 introduces the ability to interpret visual inputs and is subjected to a thorough post-training alignment process, making it one of the largest models in existence to date<sup>[3]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model boasts an <i>average scenario-prompt accuracy</i> of 56.8\%, achieves an average <i>prompt-average rank</i> of 2 out of 28 (the highest average <i>prompt-average rank</i>), and holds an average robustness score of 83.7\%.",
        "references":"[1] OpenAI. Gpt-4 technical report, 2023  <br>[2] “GPT-4.” Accessed: Mar. 31, 2024. [Online]. Available: https://openai.com/research/gpt-4<br>[3] Stiennon, Nisan, et al. \"Learning to summarize with human feedback.\" Advances in Neural Information Processing Systems 33 (2020): 3008-3021.<br>[4] Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., et al. Training language models to follow instructions with human feedback. Advances in Neural Information Processing Systems, 35:27730–27744, 2022  "},

    "Claude2":{"description":
        "<b>Organization</b>: Anthropic<br>"+
        "<b>Website</b>: https://www.anthropic.com/product<br>"+   
        "<b>Parameters</b>: N/A<br>"+
        "<b>Release Time</b>: 2023/7<br>"+
        "<b>Model Description</b>: Claude2 represents the newest development in the Anthropic series of large language models, emphasizing alignment with human intentions. Utilizing the principles of constitutional AI, Claude achieves a balance of utility and reliability<sup>[1]</sup>. It accepts input prompts as extensive as 100,000 tokens, enabling it to process vast amounts of information, from technical manuals to entire books<sup>[1]</sup>. Additionally, Claude possesses the capability to generate extensive documents, ranging from briefings and correspondence to narratives, spanning several thousand tokens in a single session<sup>[1]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model exhibits an <i>average scenario-prompt accuracy</i> of 45.3\%, secures an average <i>prompt-average rank</i> of 4 out of 28, and attains an average robustness score of 67.5\% across scenarios.",
        "references":"[1] “Claude 2.” Accessed: Mar. 31, 2024. [Online]. Available: https://www.anthropic.com/news/claude-2"},

    "InternLM-chat (7B)":{"description":
        "<b>Organization</b>: Shanghai AI Laboratory<br>"+
        "<b>Website</b>: https://github.com/InternLM/InternLM<br>"+   
        "<b>Parameters</b>: 7B<br>"+
        "<b>Release Time</b>: 2023/8<br>"+
        "<b>Model Description</b>: The InternLM-chat (7B) model is trained on trillions of high-quality tokens<sup>[1]</sup>. With an 8,000-token context window, it allows for extended input sequences, enhancing its ability to reason.<sup>[1]</sup> It also offers a flexible array of tools, empowering users to tailor workflows to their specific needs.<sup>[1]</sup><br>"+
        "<b>Performance Analysis</b>: The model's <i>average scenario-prompt accuracy</i> is 34.2\%. It has an average <i>prompt-average rank</i> of 12/28 and an average robustness score of 74.7\% across various scenarios.",
        "references":"[1] “internlm/internlm-chat-7b · Hugging Face.” Accessed: Mar. 31, 2024. [Online]. Available: https://huggingface.co/internlm/internlm-chat-7b"},

    "InternLM-chat (20B)":{"description":
        "<b>Organization</b>: Shanghai AI Laboratory<br>"+
        "<b>Website</b>: https://github.com/InternLM/InternLM<br>"+   
        "<b>Parameters</b>: 20B<br>"+
        "<b>Release Time</b>: 2023/9<br>"+
        "<b>Model Description</b>: InternLM-20B is published by the Shanghai Artificial Intelligence Laboratory, in partnership with SenseTime Technology, the Chinese University of Hong Kong, and Fudan University<sup>[1]</sup>. \"InternLM-20B was pre-trained on over 2.3T Tokens containing high-quality English, Chinese, and code data. Additionally, the Chat version has undergone SFT and RLHF training, enabling it to better and more securely meet users' needs.\"<sup>[1]</sup><br>"+
        "<b>Performance Analysis</b>: The model achieves an <i>average scenario-prompt accuracy</i> of 36.4\%, holds an average <i>prompt-average rank</i> of 10 out of 28, and maintains an average robustness score of 67.3\% across diverse scenarios.",
        "references":"[1] “internlm/internlm-chat-20b · Hugging Face.” Accessed: Mar. 31, 2024. [Online]. Available: https://huggingface.co/internlm/internlm-chat-20b"},

    "Qwen (7B)":{"description":
        "<b>Organization</b>: Alibaba Cloud<br>"+
        "<b>Website</b>: https://github.com/QwenLM/Qwen<br>"+   
        "<b>Parameters</b>: 7B<br>"+
        "<b>Release Time</b>: 2023/8<br>"+
        "<b>Model Description</b>: Alibaba Cloud introduces Qwen-7B, a component of the Qwen (short for Tongyi Qianwen) series, with 7 billion parameters. This Transformer-based model has been extensively trained on a vast dataset (over 2.4 trillion tokens) comprising web content, literature, programming codes, and more. Through extensive ablation studies, the pre-training corpus's distribution has been finely tuned for optimal performance. In comparison to similar open-source models, Qwen-7B features a comprehensive vocabulary exceeding 150,000 tokens, offering superior multilingual support and allowing for immediate enhancement of specific language capabilities without the need for vocabulary expansion. <sup>[1]</sup><br>"+
        "<b>Performance Analysis</b>: The model records an <i>average scenario-prompt accuracy</i> of 32.9\%, achieves an average <i>prompt-average rank</i> of 12 out of 28, and displays an average robustness score of 56.6\% across multiple scenarios.",
        "references":"[1] “Qwen/Qwen-7B · Hugging Face.” Accessed: Mar. 31, 2024. [Online]. Available: https://huggingface.co/Qwen/Qwen-7B"},

    "Qwen (14B)":{"description":
        "<b>Organization</b>: Alibaba Cloud<br>"+
        "<b>Website</b>: https://github.com/QwenLM/Qwen<br>"+   
        "<b>Parameters</b>: 14B<br>"+
        "<b>Release Time</b>: 2023/9<br>"+
        "<b>Model Description</b>: \"Qwen-14B is the 14B-parameter version of the large language model series, Qwen (abbr. Tongyi Qianwen), proposed by Alibaba Cloud. Qwen-14B is a Transformer-based large language model.\"<sup>[1]</sup> \"It is pretrained on over 3 trillion tokens, including Chinese, English, multilingual texts, code, and mathematics, covering general and professional fields. The distribution of the pre-training corpus has been optimized through a large number of ablation experiments.\"<sup>[1]</sup> \"Compared with other open-source models based on Chinese and English vocabularies, Qwen-14B uses a vocabulary of over 150K tokens. This vocabulary is more friendly to multiple languages, enabling users to directly further enhance the capability for certain languages without expanding the vocabulary.\"<sup>[1]</sup><br>"+
        "<b>Performance Analysis</b>: The model demonstrates an <i>average scenario-prompt accuracy</i> of 34.5\%, holds an average <i>prompt-average rank</i> of 11 out of 28, and shows an average robustness score of 57.3 across different scenarios.",
        "references":"[1] “Qwen/Qwen-14B · Hugging Face.” Accessed: Mar. 31, 2024. [Online]. Available: https://huggingface.co/Qwen/Qwen-14B"},

    "Baichuan1 (7B)":{"description":
        "<b>Organization</b>: Baichuan Inc.<br>"+
        "<b>Website</b>: https://huggingface.co/baichuan-inc/Baichuan-7B<br>"+   
        "<b>Parameters</b>: 7B<br>"+
        "<b>Release Time</b>: 2023/6<br>"+
        "<b>Model Description</b>: “Baichuan-7B is an open-source large-scale pre-trained model developed by Baichuan Intelligent Technology. Based on the Transformer architecture, it is a model with 7 billion parameters trained on approximately 1.2 trillion tokens. It supports both Chinese and English, with a context window length of 4096.” <sup>[1]</sup><br>"+
        "<b>Performance Analysis</b>: The model achieves an <i>average scenario-prompt accuracy</i> of 30.8\%, has an average <i>prompt-average rank</i> of 14 out of 28, and maintains an average robustness score of 83.1\% across different scenarios.",
        "references":"[1] “baichuan-inc/Baichuan-7B · Hugging Face.” Accessed: Mar. 31, 2024. [Online]. Available: https://huggingface.co/baichuan-inc/Baichuan-7B"},

    "Baichuan1-chat (13B)":{"description":
        "<b>Organization</b>: Baichuan Inc.<br>"+
        "<b>Website</b>: https://huggingface.co/baichuan-inc/Baichuan-13B-Chat<br>"+   
        "<b>Parameters</b>: 13B<br>"+
        "<b>Release Time</b>: 2023/7<br>"+
        "<b>Model Description</b>: Baichuan1-chat (13B) is the aligned version of Baichuan-13B for dialogue capabilities. It is trained on 1.4 trillion tokens of high-quality corpora. \"It supports both Chinese and English, uses ALiBi position encoding, and has a context window length of 4096.\" \"Baichuan-13B is not only fully open to academic research, but developers can also use it for free commercially after applying for and receiving official commercial permission via email. \"<sup>[1]</sup><br>"+
        "<b>Performance Analysis</b>: The model records an <i>average scenario-prompt accuracy</i> of 21.7\%, attains an average <i>prompt-average rank</i> of 23 out of 28, and possesses an average robustness score of 75.5\% across multiple scenarios.",
        "references":"[1] “baichuan-inc/Baichuan-13B-Chat · Hugging Face.” Accessed: Mar. 31, 2024. [Online]. Available: https://huggingface.co/baichuan-inc/Baichuan-13B-Chat"},

    "Baichuan2-chat (7B)":{"description":
        "<b>Organization</b>: Baichuan Inc.<br>"+
        "<b>Website</b>: https://github.com/baichuan-inc/Baichuan2<br>"+   
        "<b>Parameters</b>: 7B<br>"+
        "<b>Release Time</b>: 2023/9<br>"+
        "<b>Model Description</b>: Baichuan2-chat (7B) belongs to the baichuan series launched by Baichuan Intelligence inc.. \"It is trained on a high-quality corpus with 2.6 trillion tokens.\"<sup>[1]</sup> \"All versions are fully open to academic research, and developers can also use them for free in commercial applications after obtaining an official commercial license through email request.\"<sup>[1]</sup><br>"+
        "<b>Performance Analysis</b>: The model presents an <i>average scenario-prompt accuracy</i> of 33.9\%, secures an average <i>prompt-average rank</i> of 12 out of 28, and achieves an average robustness score of 63.8\%.",
        "references":"[1] “baichuan-inc/Baichuan2-7B-Chat · Hugging Face.” Accessed: Mar. 31, 2024. [Online]. Available: https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat"},
    
    "Baichuan2-chat (13B)":{"description":
        "<b>Organization</b>: Baichuan Inc.<br>"+
        "<b>Website</b>: https://github.com/baichuan-inc/Baichuan2<br>"+   
        "<b>Parameters</b>: 13B<br>"+
        "<b>Release Time</b>: 2023/9<br>"+
        "<b>Model Description</b>: Baichuan2-chat (13B) belongs to the baichuan series launched by Baichuan Intelligence inc.. \"It is trained on a high-quality corpus with 2.6 trillion tokens.\"<sup>[1]</sup> \"All versions are fully open to academic research, and developers can also use them for free in commercial applications after obtaining an official commercial license through email request.\"<sup>[1]</sup><br>"+
        "<b>Performance Analysis</b>: The model displays an <i>average scenario-prompt accuracy</i> of 30.1\%, achieves an average <i>prompt-average rank</i> of 15 out of 28, and holds an average robustness score of 71.6\% across different scenarios.",
        "references":"[1] “baichuan-inc/Baichuan2-7B-Chat · Hugging Face.” Accessed: Mar. 31, 2024. [Online]. Available: https://huggingface.co/baichuan-inc/Baichuan2-7B-Chat"},

    "Llama2 (7B)":{"description":
        "<b>Organization</b>: Meta<br>"+
        "<b>Website</b>: https://ai.meta.com/resources/models-and-libraries/llama/<br>"+   
        "<b>Parameters</b>: 7B<br>"+
        "<b>Release Time</b>: 2023/7<br>"+
        "<b>Model Description</b>: Llama2 (7B) belongs to the meta Llama 2 series. \"Llama 2 pretrained models are trained on 2 trillion tokens, and have double the context length than Llama 1. Its fine-tuned models have been trained on over 1 million human annotations.\"<sup>[1]</sup> Moreover, the Llama 2 series are open-access models, free for both research and commercial purposes<sup>[2]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model achieves an <i>average scenario-prompt accuracy</i> of 27.6\%, has an average <i>prompt-average rank</i> of 19 out of 28, and maintains an average robustness score of 74.8\% across scenarios.",
        "references":"[1] “Llama 2.” Accessed: Mar. 31, 2024. [Online]. Available: https://llama.meta.com/llama2/ <br>[2] Touvron, H., Martin, L., Stone, K., Albert, P., Almahairi, A., Babaei, Y., Bashlykov, N., Batra, S., Bhargava, P., Bhosale, S., et al. Llama 2: Open foundation and ﬁne-tuned chat models. arXiv preprint arXiv:2307.09288, 2023."},

    "Llama2 (13B)":{"description":
        "<b>Organization</b>: Meta<br>"+
        "<b>Website</b>: https://ai.meta.com/resources/models-and-libraries/llama/<br>"+   
        "<b>Parameters</b>: 13B<br>"+
        "<b>Release Time</b>: 2023/7<br>"+
        "<b>Model Description</b>: Llama2 (13B) belongs to the meta Llama 2 series. \"Llama 2 pretrained models are trained on 2 trillion tokens, and have double the context length than Llama 1. Its fine-tuned models have been trained on over 1 million human annotations.\"<sup>[1]</sup> Moreover, the Llama 2 series are open-access models, free for both research and commercial purposes<sup>[2]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model shows an <i>average scenario-prompt accuracy</i> of 28.6\%, attains an average <i>prompt-average rank</i> of 17 out of 28, and achieves an average robustness score of 81.9\%.",
        "references":"[1] “Llama 2.” Accessed: Mar. 31, 2024. [Online]. Available: https://llama.meta.com/llama2/ <br>[2] Touvron, H., Martin, L., Stone, K., Albert, P., Almahairi, A., Babaei, Y., Bashlykov, N., Batra, S., Bhargava, P., Bhosale, S., et al. Llama 2: Open foundation and ﬁne-tuned chat models. arXiv preprint arXiv:2307.09288, 2023."},

    "Llama2 (70B)":{"description":
        "<b>Organization</b>: Meta<br>"+
        "<b>Website</b>: https://ai.meta.com/resources/models-and-libraries/llama/<br>"+   
        "<b>Parameters</b>: 70B<br>"+
        "<b>Release Time</b>: 2023/7<br>"+
        "<b>Model Description</b>: Llama2 (70B) belongs to the meta Llama 2 series. \"Llama 2 pretrained models are trained on 2 trillion tokens, and have double the context length than Llama 1. Its fine-tuned models have been trained on over 1 million human annotations.\"<sup>[1]</sup> Moreover, the Llama 2 series are open-access models, free for both research and commercial purposes<sup>[2]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model's <i>average scenario-prompt accuracy</i> is 28.1\%, with the average <i>prompt-average rank</i> of 16/28 and an average robustness score of 72.7\%.",
        "references":"[1] “Llama 2.” Accessed: Mar. 31, 2024. [Online]. Available: https://llama.meta.com/llama2/<br>[2] Touvron, H., Martin, L., Stone, K., Albert, P., Almahairi, A., Babaei, Y., Bashlykov, N., Batra, S., Bhargava, P., Bhosale, S., et al. Llama 2: Open foundation and ﬁne-tuned chat models. arXiv preprint arXiv:2307.09288, 2023."},

    "Llama2-chat (70B)":{"description":
        "<b>Organization</b>: Meta<br>"+
        "<b>Website</b>: https://ai.meta.com/resources/models-and-libraries/llama/<br>"+   
        "<b>Parameters</b>: 70B<br>"+
        "<b>Release Time</b>: 2023/7<br>"+
        "<b>Model Description</b>: Llama2-chat (70B) is a pretrained model published by meta, it is optimized for dialogue use cases.<sup>[1]</sup> Moreover, it is a open-access model, free for both research and commercial purposes<sup>[2]</sup>.<br>"+
        "<b>Performance Analysis</b>: The model presents an <i>average scenario-prompt accuracy</i> of 28.6\%, attains an average <i>prompt-average rank</i> of 16 out of 28, and holds an average robustness score of 47.8\%.",
        "references":"[1] “meta-llama/Llama-2-70b-chat-hf · Hugging Face.” Accessed: Mar. 31, 2024. [Online]. Available: https://huggingface.co/meta-llama/Llama-2-70b-chat-hf <br>[2] Touvron, H., Martin, L., Stone, K., Albert, P., Almahairi, A., Babaei, Y., Bashlykov, N., Batra, S., Bhargava, P., Bhosale, S., et al. Llama 2: Open foundation and ﬁne-tuned chat models. arXiv preprint arXiv:2307.09288, 2023."},

    "Wizardcoder (15B)":{"description":
        "<b>Organization</b>: Microsoft<br>"+
        "<b>Website</b>: https://github.com/nlpxucan/WizardLM<br>"+   
        "<b>Parameters</b>: 15B<br>"+
        "<b>Release Time</b>: 2023/6<br>"+
        "<b>Model Description</b>: WizardCoder \"empowers Code LLMs with complex instruction fine-tuning, by adapting the Evol-Instruct method to the domain of code.\"<sup>[1]</sup><br>"+
        "<b>Performance Analysis</b>: The model's <i>average scenario-prompt accuracy</i> is 28.9\%, with an average <i>prompt-average rank</i> of 19/28 and an average robustness score of 89.8\%.",
        "references":"[1] Luo, Z., Xu, C., Zhao, P., Sun, Q., Geng, X., Hu, W., Tao, C., Ma, J., Lin, Q., and Jiang, D. Wizardcoder: Empowering code large language models with evol-instruct, 2023.  ",},

    "Koala (13B)":{"description":
        "<b>Organization</b>: UC Berkeley<br>"+
        "<b>Website</b>: https://bair.berkeley.edu/blog/2023/04/03/koala/<br>"+   
        "<b>Parameters</b>: 13B<br>"+
        "<b>Release Time</b>: 2023/4<br>"+
        "<b>Model Description</b>: \"Koala is fine-tuned on freely available interaction data scraped from the web, but with a specific focus on data that includes interaction with highly capable closed-source models such as ChatGPT. We fine-tune a LLaMA base model on dialogue data scraped from the web and public datasets, which includes high-quality responses to user queries from other large language models, as well as question answering datasets and human feedback datasets. The resulting model, Koala-13B, shows competitive performance to existing models as suggested by our human evaluation on real-world user prompts.\"<sup>[1]</sup><br>"+
        "<b>Performance Analysis</b>: The model's <i>average scenario-prompt accuracy</i> is 28.3\%, with an average <i>prompt-average rank</i> of 19/28 and an average robustness score of 84.5\%.",
        "references":"[1] “Koala: A Dialogue Model for Academic Research – The Berkeley Artificial Intelligence Research Blog.” Accessed: Mar. 31, 2024. [Online]. Available: https://bair.berkeley.edu/blog/2023/04/03/koala/",},

        "Vicuna-v1.3 (33B)":{"description":
        "<b>Organization</b>: Lmsys<br>"+
        "<b>Website</b>: https://lmsys.org/<br>"+   
        "<b>Parameters</b>: 33B<br>"+
        "<b>Release Time</b>: 2023/6<br>"+
        "<b>Model Description</b>: Vicuna-v1.3 (33B) is an open-access model fine-tuned from Llama<sup>[1,2]</sup>. It is trained on corpora from ShareGPT, which are around 70K user-shared conversations. Act as a chatbot and evaluated by GPT-4,  results show that Vicuna-v1.3 (33B) is on par with 90%(*) of Bard/ChatGPT's capability<sup>[1]</sup>. However, its weakness lies in reasoning and math tasks. (*<i>According to a fun and non-scientific evaluation with GPT-4. Further rigorous evaluation is needed.<sup>[1]</sup></i>)<br>"+
        "<b>Performance Analysis</b>: The model demonstrates an <i>average scenario-prompt accuracy</i> of 29.8\%, holds an average <i>prompt-average rank</i> of 16 out of 28, and attains an average robustness score of 44.0\% across scenarios.",
        "references":"[1] Chiang, W.-L., Li, Z., Lin, Z., Sheng, Y., Wu, Z., Zhang, H., Zheng, L., Zhuang, S., Zhuang, Y., Gonzalez, J. E., Stoica, I., and Xing, E. P. Vicuna: An open-source chatbot impressing gpt-4 with 90%* chatgpt quality, March 2023.<br>[2] Zheng, Lianmin, et al. \"Judging llm-as-a-judge with mt-bench and chatbot arena.\" Advances in Neural Information Processing Systems 36 (2024)."},
}