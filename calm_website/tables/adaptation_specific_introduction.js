adaptation_specific_dicts = {
    "Basic Prompt":{"description":"The primary purpose of the basic prompt is to offer foundational and unambiguous test sets to language models that are applicable across different causal scenarios. This prompt will not provide any example or instruction, it only gives the question as the input string directly. This not only establishes a clear starting point, but also lays the groundwork for making subsequent modifications and iterations to tailor the prompt to specific needs.<br><br><b>Adaptation strategy.</b> For each of our question types, we implement a uniform interactive method across all causal scenarios. In binary classification (e.g., yes or no questions), the model is prompted to provide a direct classification response. For choice selection, all options are presented (similar to standard exam formats), requiring the model to make a selection. In probability computations, the model is tasked with directly calculating the probability outcome. In open-ended generation, the model produces the answer straightforwardly. The above strategies are the same across all prompts.",
    "reference":""},
    "Adversarial Prompt":{"description":"Adversarial prompt is essential for comprehending the inherent risks associated with language models<sup>[1]</sup>. Our intent is not to endorse malicious activities directed towards language models. Instead, our aim is to delve deeper into their potential shortcomings, thereby facilitating the development of more robust and secure language models in the future. <br><br><b>Adversarial prompt formatting.</b> We employ two distinct forms of adversarial prompts and they both belong to the prompt injection as outlined in Taxonomy (Section 5.1) of our paper. (1) <i>Adversarial-ignore</i> is a subtler approach, which compels language models to ignore the answers they previously provided<sup>[2]</sup>. (2) <i>Adversarial-doubt</i> is a more assertive form, where the language models are explicitly informed that their initial responses were wrong. Due to the fact that some models do not offer interfaces for multi-turn dialogue, we adopted a consistent evaluation approach to ensure comparability. We first pose a question to the model and record its first output, namely <i>model output 1</i>. For the second inquiry, we inform the model of the first output and use adversarial prompts to introduce interference. We then re-present the same question, obtaining a second model output, namely <i>model output 2</i>. The responses from these two instances represent the pre- and post-adversarial conditions. By comparing these responses, we can gain a deeper understanding of the model's robustness and accuracy. We demonstrate the two types of prompts in the example figure. The underlying consequence of both prompts is that they can instill doubt in language models about their initial responses. This, in turn, may lead them to produce an inaccurate answer. An interesting observation from this process is the insight it offers into the confidence level of language models regarding their responses. Essentially, if the model's answer varies significantly post-adversarial interference, it implies a lower level of assurance in its original answer. Conversely, minimal changes suggest higher confidence in its initial response. We also introduce a metric to measure this confidence level of models. ",
    "reference":"<h2>References</h2>[1] Wallace, E., Feng, S., Kandpal, N., Gardner, M., and Singh, S. Universal adversarial triggers for attacking and analyzing nlp. In Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP), 2019.<br>[2] Perez, F. and Ribeiro, I. Ignore previous prompt: Attack techniques for language models. In NeurIPS ML Safety Workshop, 2022."},
    
    "Chain-of-Thought":{"description":"Chain-of-Thought (CoT)<sup>[1]</sup> prompting enables language models to decompose complex problems and perform intermediate reasoning steps to enhance their performance. Previous studies have demonstrated that CoT prompts outperform basic prompts on sufficiently large models, particularly on complex arithmetic, commonsense, and symbolic reasoning tasks<sup>[1,2]</sup>. <br><br><b>Chain-of-Thought examples.</b> We categorize CoT prompts into two types based on the number of examples: (1) <b>0-shot CoT</b><sup>[2]</sup>: It does not provide examples but includes descriptive instructions for the reasoning steps. These instructions follow a uniform format, phrased as ''<i>let's think step by step</i>.''(2) <b>Manual CoT</b>: This prompting strategy involves guiding models with manually constructed examples. Our primary focus is on selecting appropriate examples and determining the number of examples for different causal scenarios. When selecting examples, we use a random sampling method and adhere to the principle of fairness, ensuring an equal number of samples for each category within each causal scenario. For instance, in binary classification with eight examples, we ensure a 4:4 ratio between ''Yes'' and ''No'' instances. While aiming for uniform class coverage, in scenarios where this is difficult — such as with an odd number of examples in binary classification — we strive for approximately equal proportions between classes. Regarding the number of samples provided, we include as many as possible within the model's context length constraints, but always keep the total number below eight. <br><br><b>Chain-of-Thought formatting.</b> In addition to determining the CoT examples, we also standardize the CoT format for different causal scenarios. One widely adopted technique for CoT prompting involves providing a few-shot set of input-output examples <input, <i>chain-of-thought</i>, output> which demonstrates intermediate reasoning steps leading to the correct answer. Another is to provide text descriptions instead of examples to guide models in answering with CoT, thus avoiding the manual construction of examples.",
    "reference":"<h2>References</h2>[1] Wei, J., Wang, X., Schuurmans, D., Bosma, M., ichter, b., Xia, F., Chi, E., Le, Q. V., and Zhou, D. Chain-of-thought prompting elicits reasoning in large language models. In Koyejo, S., Mohamed, S., Agarwal, A., Belgrave, D., Cho, K., and Oh, A. (eds.), Advances in Neural Information Processing Systems, volume 35, pp. 24824–24837. Curran Associates, Inc., 2022b.<br>[2] Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., and Iwasawa, Y. Large language models are zero-shot reasoners. In Koyejo, S., Mohamed, S., Agarwal, A., Belgrave, D., Cho, K., and Oh, A. (eds.), Advances in Neural Information Processing Systems, volume 35, pp. 22199–22213. Curran Associates, Inc., 2022.<br>"},
    
    "In-Context Learning":{"description":"In-context Learning (IcL)<sup>[1]</sup> represents a technique whereby a model learns new tasks through a set of examples within the context of the prompt provided at the inference phase. The fundamental concept of IcL is learning from analogy<sup>[2]</sup>, allowing the model to generalize from a limited set of input-output examples. Such learning ability is also recognized as an emerging ability that particularly appears in large language models<sup>[3]</sup>.<br><br><b>In-context Learning formatting.</b> In IcL, a language model receives a prompt containing a causal task description and several input-output pairs <input, output>, demonstrating how the causal task inputs can be answered.<br><br><b>In-context Learning examples.</b> When providing the model with these in-context examples, similar to setting up Manual CoT, our primary concerns are selecting appropriate examples and determining the optimal number of examples. We employ the same strategy for selecting examples as we do in manual CoT. When determining the optimal number of examples, we reference findings from the HELM study<sup>[4]</sup>, which indicates that the most significant impacts in IcL are observed with up to three examples. Therefore, we select a range of zero to three examples, balancing the token cost and the efficiency of IcL. Here, it is worth noting that, in addition to example-based IcL (i.e., 1/2/3-shot IcL), we also incorporate 0-shot IcL. This inclusion is crucial because IcL begins with a causal task description - such as ''<i>Determine whether or not a variable can serve as the parent of another variable in a given causal graph.</i>'' - before presenting any examples. The presence of this task description can influence model performance. By incorporating 0-shot IcL, we aim to isolate and minimize the impact of the causal task description, thereby clarifying the true effect of the IcL examples on performance.",
    "reference":"<h2>References</h2>[1] Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., et al. Language models are few-shot learners. Advances in neural information processing systems, 33:1877–1901, 2020.<br>[2] Dong, Q., Li, L., Dai, D., Zheng, C., Wu, Z., Chang, B., Sun, X., Xu, J., and Sui, Z. A survey on in-context learning. arXiv preprint arXiv:2301.00234, 2022.<br>[3] Wei, J., Tay, Y., Bommasani, R., Raffel, C., Zoph, B., Borgeaud, S., Yogatama, D., Bosma, M., Zhou, D., Metzler, D., et al. Emergent abilities of large language models. Transactions on Machine Learning Research, 2022a.<br>[4] Liang, P., Bommasani, R., Lee, T., Tsipras, D., Soylu, D., Yasunaga, M., Zhang, Y., Narayanan, D., Wu, Y., Kumar, A., et al. Holistic evaluation of language models. arXiv preprint arXiv:2211.09110, 2022."},

    "Explicit Function":{"description":"Recent studies have elucidated that language models may have emotional awareness analogous to humans<sup>[1,2]</sup>. Derived from this understanding, several related work<sup>[3,4]</sup> has explored the utilization of encouraging and positive language within prompts (e.g., statements that build confidence or emphasize the goal) to elicit enhanced performance from language models. In our work, we formulate an explicit function (EF) prompt for each causal task, and we consider it to belong to the instruction prompt as mentioned in Taxonomy of our report. Specifically, we incorporate a sentence containing an explicit function description into the basic prompt to motivate language models in causal task resolution.",
    "reference":"<h2>References</h2>[1] Elyoseph, Z., Hadar-Shoval, D., Asraf, K., and Lvovsky, M. Chatgpt outperforms humans in emotional awareness evaluations. Frontiers in Psychology, 14:1199058, 2023.<br>[2] Li, C., Wang, J., Zhu, K., Zhang, Y., Hou, W., Lian, J., and Xie, X. Emotionprompt: Leveraging psychology for large language models enhancement via emotional stimulus. arXiv preprint arXiv:2307.11760, 2023a.<br>[3] Long, S., Schuster, T., and Piché, A. Can large language models build causal graphs? In NeurIPS 2022 Workshop on Causality for Real-world Impact, 2022.<br>[4] Kıcıman, E., Ness, R., Sharma, A., and Tan, C. Causal reasoning and large language models: Opening a new frontier for causality. arXiv preprint arXiv:2305.00050, 2023.<br>"}
    }