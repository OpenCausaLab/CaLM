scenario_specific_dicts = {'Pairwise Causal Discovery':{
        'description': "Causal discovery focuses on understanding the cause-and-effect relationships among different variables<sup>[3]</sup>. In many scientific disciplines, the primary goal is to uncover causal relationships and elucidate fundamental mechanisms. While randomized experiment is widely regarded as the gold standard for establishing causal relationship<sup>[4]</sup>, it can prove challenging or unfeasible in certain contexts<sup>[5]</sup>. Pairwise causal discovery, which aims to discern underlying pairwise causal relationships solely from observational data, has attracted increasing attention across various domains, such as earth science<sup>[6]</sup>, climate system<sup>[7]</sup> and biology<sup>[8]</sup>. Unlike traditional causal discovery methods that rely on the actual data values of these variables, language models can deduce this causal framework by analyzing metadata related to the variables. This can include the variable's name or the context in which the problem is described using natural language<sup>[9,10]</sup>. "+
        "<h2>Scenario Setting</h2>"+
        "PCD seeks to establish if a causal relationship exists between two given events and to identify which of the two is the cause and which is the effect<sup>[11]</sup>. In PCD, our questions primarily manifest in two ways. (1) <b>Binary classification</b>: We present pairs of events along with associated inquiries (e.g., ''<i>Event A: Lava flowed from the volcano. Event B: The volcano was dormant. Question: Is there a causal relationship between Event A and Event B?</i>''<sup>[12]</sup>. The objective is to accurately discern whether a causal relationship exists between the two events (the correct response being ''No''). (2) <b>Choice selection</b>: Models must select the cause or effect of a given event from two provided options (e.g., ''<i>Input Event: Lava flowed from the volcano. Question: Please select the cause of the input event from the following options. Option 1: The volcano erupted. Option 2: The volcano was dormant.</i>''<sup>[12]</sup>. Here, the causal scenario explicitly outlines the presence and direction of the causal relationship, challenging the model to determine which option is more probable (in this example, ''Option 1'' is correct)."+
        "<h2>Datasets</h2>COPA<sup>[1]</sup>, E-CARE<sup>[2]</sup>"+
        "<h2>Scenario Performance</h2>",
        'others': "",
        'random_guess_dict': {'PCD binary CARE':50., 'PCD binary COPA':50., 'PCD multi CARE':50., 'PCD multi COPA':50.,},
        'img_src':"..\\figures\\scenario-specific\\scenario_PCD.png",
        'img_width': "1100px",
        "reference": "[1] Roemmele, M., Bejan, C. A., and Gordon, A. S. Choice of plausible alternatives: An evaluation of commonsense causal reasoning. In AAAI spring symposium: logical formalizations of commonsense reasoning, pp. 90–95, 2011.<br>"+
        "[2] Du, L., Ding, X., Xiong, K., Liu, T., and Qin, B. e-care: a new dataset for exploring explainable causal reasoning. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 432–446, 2022.<br>"+
        "[3] Peters, J., Janzing, D., and Schölkopf, B. Elements of causal inference: foundations and learning algorithms. The MIT Press, 2017.<br>"+
        "[4] Hariton, E. and Locascio, J. J. Randomised controlled trials—the gold standard for effectiveness research. BJOG: an international journal of obstetrics and gynaecology, 125(13):1716, 2018.<br>"+
        "[5] Spirtes, P. and Zhang, K. Causal discovery and inference: concepts and recent methodological advances. In Applied informatics, volume 3, pp. 1–28. Springer, 2016.<br>"+
        "[6] Melkas, L., Savvides, R., Chandramouli, S. H., Mäkelä, J., Nieminen, T., Mammarella, I., and Puolamäki, K. Interactive causal structure discovery in earth system sciences. In Le, T. D., Li, J., Cooper, G., Triantafyllou, S., Bareinboim, E., Liu, H., and Kiyavash, N. (eds.), Proceedings of The KDD’21 Workshop on Causal Discovery, volume 150 of Proceedings of Machine Learning Research, pp. 3–25. PMLR, 15 Aug 2021.<br>"+
        "[7] Runge, J., Nowack, P., Kretschmer, M., Flaxman, S., and Sejdinovic, D. Detecting and quantifying causal associations in large nonlinear time series datasets. Science advances, 5(11):eaau4996, 2019. <br>"+
        "[8] Amar, D., Sinnott-Armstrong, N., Ashley, E. A., and Rivas, M. A. Graphical analysis for phenome-wide causal discovery in genotyped population-scale biobanks. Nature communications, 12(1):350, 2021. <br>"+
        "[9] Kıcıman, E., Ness, R., Sharma, A., and Tan, C. Causal reasoning and large language models: Opening a new frontier for causality. arXiv preprint arXiv:2305.00050, 2023.<br>"+
        "[10] Willig, M., Zečević, M., Dhami, D. S., and Kersting, K. Can foundation models talk causality? In UAI 2022 Workshop on Causal Representation Learning, 2022.<br>"+
        "[11] Gao, J., Ding, X., Qin, B., and Liu, T. Is chatgpt a good causal reasoner? a comprehensive evaluation. In The 2023 Conference on Empirical Methods in Natural Language Processing, 2023a.<br>"
    },
    'Event Causality Identification':{
        'description':  
        "This causal scenario is designed to pinpoint the events mentioned in a text and understand whether there exists a casual relationship between them. Research on ECI has a long-standing history and it holds a vital position in comprehending text deeply<sup>[4]</sup>. Thus, enhancing the comprehension of event causality can significantly benefit various applications in natural language processing<sup>[5,6]</sup>. Language models tasked with this scenario should be adept at utilizing a broad range of commonsense knowledge and capable of comprehending complex contexts involving multiple entities and events. Ultimately, these models are expected to synthesize all this information to accurately determine causal relationships<sup>[7]</sup>."+

        "<h2>Scenario Setting</h2>"+
        "ECI requires the models to assess whether there is a causal relationship between two events within a given sentence. For instance, consider the sentence: ''<i>State security services also claimed that it had arrested a general who was involved in the coup attempt.</i>''<sup>[8]</sup> An example task would involve examining the events ''<i>involved</i>'' and ''<i>arrested</i>'' to determine if one caused the other. In this case, the correct answer is ''No'', as humans can easily discern these as two separate events without a direct cause-and-effect relationship between them."+

        "<h2>Datasets</h2>CTB<sup>[1]</sup>, ESC<sup>[2]</sup>, MAVEN-ERE<sup>[3]</sup>"+

        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Causal Discovery",
        'random_guess_dict': {'ECI CTB':50., 'ECI ESC':50., 'ECI MAVEN':50.},
        'img_src':"..\\figures\\scenario-specific\\scenario_ECI.png",
        'img_width': "700px",
        "reference": "[1] Pustejovsky, J., Littman, J., Saurí, R., and Verhagen, M. Timebank 1.2 documentation. Event London, no. April, pp. 6–11, 2006.<br>"+
        "[2] Caselli, T. and Vossen, P. The event storyline corpus: A new benchmark for causal and temporal relation extraction. In Proceedings of the Events and Stories in the News Workshop, pp. 77–86, 2017.<br>"+
        "[3] Wang, X., Chen, Y., Ding, N., Peng, H., Wang, Z., Lin, Y., Han, X., Hou, L., Li, J., Liu, Z., et al. Maven-ere: A unified large-scale dataset for event coreference, temporal, causal, and subevent relation extraction. In Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pp. 926–941, 2022a.<br>"+
        "[4] Gao, L., Choubey, P. K., and Huang, R. Modeling document-level causal structures for event causal relation identification. In Burstein, J., Doran, C., and Solorio, T. (eds.), Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers), pp. 1808–1817, Minneapolis, Minnesota, June 2019. Association for Computational Linguistics. doi: 10.18653/v1/N19-1179.<br>"+
        "[5] Liakhovets, D. and Schlarb, S. Zero-shot event causality identification with question answering. In Proceedings of the 5th International Conference on Computational Linguistics in Bulgaria (CLIB 2022), pp. 113–119, 2022.<br>"+
        "[6] Liu, Y., Li, G., and Lin, L. Cross-modal causal relational reasoning for event-level visual question answering. IEEE Transactions on Pattern Analysis and Machine Intelligence, 2023b.<br>"+
        "[7] Gao, J., Ding, X., Qin, B., and Liu, T. Is chatgpt a good causal reasoner? a comprehensive evaluation. In The 2023 Conference on Empirical Methods in Natural Language Processing, 2023a.<br>"+
        "[8] Wang, X., Chen, Y., Ding, N., Peng, H., Wang, Z., Lin, Y., Han, X., Hou, L., Li, J., Liu, Z., et al. Maven-ere: A unified large-scale dataset for event coreference, temporal, causal, and subevent relation extraction. In Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pp. 926–941, 2022.<br>"
    },
    'Abstract Reasoning':{
            'description':  
            "AR investigates the capability of language models to identify and understand causal relationships within symbolic causal graphs<sup>[1]</sup>. This scenario tests how well models can accurately discern potential causal relationships beyond simply memorizing information based on position or sequence. In scenarios where models only memorize such inseparable information, it becomes challenging to integrate these disparate pieces of data into a coherent and consistent causal graph<sup>[2]</sup>. With strong AR capabilities, language models can better predict outcomes, design interventions, and understand the potential implications of changes within the system, thus enhancing decision-making and problem-solving abilities."+
    
            "<h2>Scenario Setting</h2>"+
            "In AR, models are tasked with determining whether there exists a causal relationship between two nodes in a given graph. For example, consider a graph where ''<i>A causes B, B causes C, B causes D, and D causes E.</i>'' The models must assess whether there is a direct causal link between nodes ''<i>C</i>'' and ''<i>D</i>''. In this case, the correct answer is ''No''."+
    
            "<h2>Datasets</h2>CaLM-AR"+
            
            "<h2>Scenario Performance</h2>",
            'others': "Distribution of Causal Discovery",
            'random_guess': 50.,
            'img_src':"..\\figures\\scenario-specific\\scenario_AR.png",
            'img_width': "700px",
            "reference": "[1] Zečević, M., Willig, M., Dhami, D. S., and Kersting, K. Causal parrots: Large language models may talk causality but are not causal. arXiv preprint arXiv:2308.13067, 2023.<br>"+
            "[2] Willig, M., Zečević, M., Dhami, D. S., and Kersting, K. Can foundation models talk causality? In UAI 2022 Workshop on Causal Representation Learning, 2022.<br>"
    },
    'Causal Attribution':{
        'description':  
        "Causal attribution refers to the process of determining which specific factor is responsible for an outcome. Its significance spans across numerous domains, intersecting with research in psychology<sup>[1]</sup>, medical diagnosis<sup>[2]</sup>, and organizational science<sup>[3]</sup>. In this causal scenario, the model needs to accurately recognize causal graphs and uncover the precise causal relationships within them. Assessing the model's capacity for causal attribution aids in comprehending its decision-making abilities, thus establishing a foundation for its practical deployment in real-world contexts."+

        "<h2>Scenario Setting</h2>"+
        "In CA, models are provided with a causal graph (e.g., ''<i>A causes B, B causes D, B causes C, and B causes E</i>'') and face two domains: (1) <b>Find parent</b>: This task requires the model to determine the parent of a specified node, focusing on identifying direct causal relationships. For instance, the question might ask, ''<i>Does D serve as the parent node of E?</i>'' In this case, the correct answer is ''No'', as <i>D</i> does not directly cause <i>E</i> according to the graph provided. (2) <b>Find ancestor</b>: This task involves identifying the ancestor of a given node, which assesses indirect causal relationships. An example question could be, ''<i>Does A serve as the ancestor node of E?</i>'' Here, the correct answer is ''Yes'', since <i>A</i> causes <i>B</i>, which in turn causes <i>E</i>, establishing <i>A</i> as an indirect cause or ancestor of <i>E</i>."+

        "<h2>Datasets</h2>CaLM-CA"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Causal Discovery",
        'random_guess_dict': {'CA ancestor':50., 'CA parent':50.},
        'img_src':"..\\figures\\scenario-specific\\scenario_CA.png",
        'img_width': "700px",
        "reference": "[1] Graham, S. An attributional theory of motivation. Contemporary Educational Psychology, 61:101861, 2020.<br>"+
        "[2] Richens, J. G., Lee, C. M., and Johri, S. Improving the accuracy of medical diagnosis with causal machine learning. Nature communications, 11(1):3923, 2020.<br>"+
        "[3] Harvey, P., Madison, K., Martinko, M., Crook, T. R., and Crook, T. A. Attribution theory in the organizational sciences: The road traveled and the path ahead. Academy of Management Perspectives, 28(2):128–146, 2014.<br>"
    },
    'Correlation':{
        'description':  
        "Correlation indicates a statistical association between two variables, irrespective of causality. Although ''<i>correlation does not imply causation</i>'', identifying a statistical link between variables is a necessary step in the causal inference. It helps further investigation into whether the relationship is indeed causal, guiding researchers in developing hypotheses<sup>[2]</sup>, designing experiments<sup>[3]</sup>, and employing statistical methods to explore the nature and direction of the supposed causal relationship<sup>[4]</sup>. "+

        "<h2>Scenario Setting</h2>"+
        "In CORR, we provide a causal graph (e.g., ''<i>Husband has a direct effect on wife and alarm clock. Wife has a direct effect on alarm clock.</i>'') along with corresponding probabilities (e.g., ''<i>The overall probability of alarm set by husband is 74\%. The probability of alarm not set by husband and ringing alarm is 9\%. The probability of alarm set by husband and ringing alarm is 51\%.</i>''<sup>[1]</sup>). The model needs to answer the question about the correlation between the given variables (e.g., ''<i>Is the chance of ringing alarm smaller when observing alarm set by husband?</i>'')."+

        "<h2>Datasets</h2>CLADDER<sup>[1]</sup>"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Association",
        'random_guess': 50.,
        'img_src':"..\\figures\\scenario-specific\\scenario_CORR.png",
        'img_width': "1100px",
        "reference": "[1] Jin, Z., Chen, Y., Leeb, F., Gresele, L., Kamal, O., Zhiheng, L., Blin, K., Adauto, F. G., Kleiman-Weiner, M., Sachan, M., et al. Cladder: Assessing causal reasoning in language models. In Thirty-seventh Conference on Neural Information Processing Systems, 2023a.<br>"+
        "[2] Rolfe, S., Garnham, L., Godwin, J., Anderson, I., Seaman, P., and Donaldson, C. Housing as a social determinant of health and wellbeing: Developing an empirically-informed realist theoretical framework. BMC Public Health, 20(1):1–19, 2020.<br>"+
        "[3] Duncan, G. J. and Magnuson, K. Socioeconomic status and cognitive functioning: moving from correlation to causation. Wiley Interdisciplinary Reviews: Cognitive Science, 3(3):377–386, 2012.<br>"+
        "[4] Rosato, A., Tenori, L., Cascante, M., De Atauri Carulla, P. R., Martins dos Santos, V. A., and Saccenti, E. From correlation to causation: analysis of metabolomics data using systems biology approaches. Metabolomics, 14:1–20, 2018.<br>"
    },
    'Explaining Away Effect':{
        'description':  
        "EAE describes a causal relationship where two independent causes that produce a common effect become interdependent when that effect is observed. This interdependence arises because having information about one factor alters the probability of the other factor being involved, once it is established that the shared effect has taken place<sup>[2,3]</sup>. This pattern is also known as <i>selection bias</i> or <i>Berkson’s paradox</i> in statistics<sup>[4]</sup>. For example, consider a prestigious art school that requires applicants to excel in either painting or sculpture. In the general population, skill in painting and skill in sculpture might not be correlated. However, within the art school's student, there might be a negative correlation between these two skills. This is because students who are not as skilled in painting are likely those admitted due to their exceptional talent in sculpture, and vice versa. This phenomenon illustrates the explaining away effect: the school's admission criteria create an apparent negative correlation between two skills that are unrelated in the broader population, as each skill ''explains away'' the need for the other in the context of admission. The EAE is crucial in various fields, including psychology<sup>[5]</sup>, artificial intelligence<sup>[6]</sup>, and data analysis<sup>[7]</sup>. It provides insight into how conditional dependencies between variables can lead to misleading correlations. Understanding EAE helps in accurately interpreting data, making informed decisions, and avoiding false conclusions. "+

        "<h2>Scenario Setting</h2>"+
        "In EAE, we provide a causal graph (e.g., ''<i>Appearance has a direct effect on fame. Talent has a direct effect on fame.</i>'') along with corresponding conditional probabilities (e.g., ''<i>The overall probability of attractive appearance is 48\%. For people considered unattractive and are not famous, the probability of talent is 3\%. For people considered unattractive and are famous, the probability of talent is 9\%. For people considered attractive and are not famous, the probability of talent is 2\%. For people considered attractive and are famous, the probability of talent is 6\%.</i>''<sup>[1]</sup>). The model needs to answer the question about the given variables (e.g., ''<i>If we look at people who are famous, does the chance of talent increase when attractive appearance?</i>'')."+

        "<h2>Datasets</h2>CLADDER<sup>[1]</sup>"+

        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Association",
        'random_guess': 50.,
        'img_src':"..\\figures\\scenario-specific\\scenario_EAE.png",
        'img_width': "1100px",
        "reference": "[1] Jin, Z., Chen, Y., Leeb, F., Gresele, L., Kamal, O., Zhiheng, L., Blin, K., Adauto, F. G., Kleiman-Weiner, M., Sachan, M., et al. Cladder: Assessing causal reasoning in language models. In Thirty-seventh Conference on Neural Information Processing Systems, 2023a.<br>"+
        "[2] Kim, J. and Pearl, J. A computational model for causal and diagnostic reasoning in inference systems. In International Joint Conference on Artificial Intelligence, pp. 0–0, 1983.<br>"+
        "[3] Pearl, J. Causality. Cambridge university press, 2009.<br>"+
        "[4] Berkson, J. Limitations of the application of fourfold table analysis to hospital data. Biometrics Bulletin, 2(3): 47–53, 1946.<br>"+
        "[5] Wilson, T. D. and Gilbert, D. T. Explaining away: A model of affective adaptation. Perspectives on Psychological Science, 3(5):370–386, 2008.<br>"+
        "[6] Kenny, E. M., Ford, C., Quinn, M., and Keane, M. T. Explaining black-box classifiers using post-hoc explanations-by-example: The effect of explanations and error-rates in xai user studies. Artificial Intelligence, 294:103459, 2021.<br>"+
        "[7] Linden, A., Mathur, M. B., and VanderWeele, T. J. Conducting sensitivity analysis for unmeasured confounding in observational studies using e-values: the evalue package. The Stata Journal, 20(1):162–175, 2020.<br>"
    },
    'Average Treatment Effect':{
        'description':  
        "ATE is a fundamental concept in causal inference that helps to quantify the impact of a particular intervention. $X$ causes $Y$ if and only if changing $X$ leads to a change in $Y$, keeping everything else constant. Denoting the treatment group by $do(X=1)$ and the control group by $do(X=0)$, the difference between them, $P(Y=1|do(X=1))-P(Y=1|do(X=0))$, is called the ATE<sup>[1]</sup>. Consider a causal scenario where all subjects are unemployed individuals, with some receiving a policy intervention (the treatment group) and others not (the control group). We are interested in determining the causal impact of a job search monitoring policy (the treatment) on the duration of unemployment. Essentially, we want to know, on average, how much shorter one's unemployment period would be if they underwent the intervention. The ATE in this case measures the difference in expected durations of unemployment between the treatment and control groups. A negative ATE would indicate that the job policy extended the length of unemployment, while a positive ATE would suggest a reduction in unemployment duration. Conversely, an ATE estimate of zero would mean that the treatment had no discernible effect on the length of unemployment. By providing a quantitative measure of a treatment's impact on an average, ATE helps in understanding the generalizability of interventions. Moreover, ATE assists in improving policy design and informing stakeholders about the potential benefits or drawbacks of specific actions. Research ranging from economics<sup>[2,3]</sup> to public health<sup>[4]</sup> proves the significance of ATE."+

        "<h2>Scenario Setting</h2>"+
        "In ATE, we provide a causal graph (e.g., ''<i>The amount of exercise a person does per week has a direct effect on the person's physical fitness level. The amount of exercise a person does per week has a direct effect on the person's risk of developing chronic diseases.</i>'') along with corresponding conditional probabilities (e.g., ''<i>For those with the amount of exercise a person does per week being little, the probability of the person's physical fitness level being excellent is 0.2598. For those with the amount of exercise a person does per week being a lot, the probability of the person's physical fitness level being excellent is 0.5314.</i>''). The causal scenario requires determining the ATE between specified variables (e.g., ''<i>If the amount of exercise a person does per week is changed to be little, will the person's physical fitness level be more likely to be excellent?</i>''). The model needs to address two different types of questions: (1) <b>Binary classification</b>: This involves providing a direct answer of ''Yes'' or ''No'' (the correct answer for this example is ''No''); (2) <b>Probability calculation</b>: The model needs to utilize the probabilities provided in the question to calculate the accurate response, preserving precision to four decimal places (the correct answer for this example is ''-0.2716'')."+

        "<h2>Datasets</h2>CaLM-ATE"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Intervention",
        'random_guess_dict': {'ATE basic':0., 'ATE hard':0., 'ATE language':50.},
        'img_src':"..\\figures\\scenario-specific\\scenario_ATE.png",
        'img_width': "1100px",
        "reference": "[1] Pearl, J., Glymour, M., and Jewell, N. P. Causal inference in statistics: A primer. John Wiley & Sons, 2016.<br>"+
        "[2] Abadie, A. and Imbens, G. W. Bias-corrected matching estimators for average treatment effects. Journal of Business & Economic Statistics, 29(1):1–11, 2011.<br>"+
        "[3] Hirano, K., Imbens, G. W., and Ridder, G. Efficient estimation of average treatment effects using the estimated propensity score. Econometrica, 71(4):1161–1189, 2003.<br>"+
        "[4] Feng, P., Zhou, X.-H., Zou, Q.-M., Fan, M.-Y., and Li, X.-S. Generalized propensity score for estimating the average treatment effect of multiple treatments. Statistics in medicine, 31(7):681–697, 2012.<br>"
    },
    'Backdoor Adjustment Set':{
        'description':  
        "When assessing the impact of treatment $X$ on outcome $Y$, we are confronted with the decision to adjust our calculations to account for potential variations in a third party of variables $Z$, which serve as confounders. This adjustment is typically implemented by using the <i>Back-door criterion</i><sup>[2]</sup>. A backdoor adjustment set is such a set of variables $Z$ that, when controlled for, blocks all backdoor paths from the treatment variable to the outcome variable. A backdoor path is a path that leads from the outcome to the treatment through an arrow pointing to the treatment, which can introduce confounding bias if not properly adjusted for. By adjusting for (or controlling for) the variables in a backdoor adjustment set, one aims to eliminate confounding bias, allowing for an unbiased estimation of the causal effect of the treatment on the outcome<sup>[2]</sup>. This modification process involves segregating the population into subsets that share similar characteristics with respect to $Z$, analyzing the influence of $X$ on $Y$ within each of these uniform subsets, and then computing the mean of these observations<sup>[3]</sup>. In a real-word causal scenario as the figure shows, suppose we are interested in the effect of exercise (treatment) on weight (outcome). A backdoor path might be through a variable like diet, where diet affects both exercise and weight. If we do not control for diet, we might incorrectly attribute the effect of diet on weight to exercise. Therefore, diet could be part of a backdoor adjustment set that, when controlled for, allows for an unbiased estimation of the causal effect of exercise on weight. The BAS has important real-world applications across various fields such as healthcare<sup>[4]</sup>, artificial intelligence<sup>[5,6,7,8]</sup>, and social sciences<sup>[9]</sup>, where understanding causal relationships is crucial for informed decision-making and policy development."+

        "<h2>Scenario Setting</h2>"+
        "We design two types of questions in BAS. (1) <b>Binary classification</b>: We provide the model with a causal graph (e.g., ''<i>Husband has a direct effect on wife and alarm clock. Wife has a direct effect on alarm clock.</i>'') and two different methods (e.g., ''<i>Method 1: We look at how husband correlates with alarm clock case by case according to wife. Method 2: We look directly at how husband correlates with alarm clock in general.</i>''<sup>[1]</sup>). And the model is required to decide which method is more correct. (2) <b>Choice selection</b>: The question starts with presenting a causal graph in symbolic form (e.g., ''<i>A causes B, A causes E, A causes C, B causes C, B causes D, B causes E, and D causes E.</i>''). The model needs to apply the <i>Back-door criterion</i> to determine the backdoor variables between an ordered pair of variables (e.g., ''<i>D</i>'' and ''<i>E</i>''). There are three different categories of backdoor variables that need to be assessed: the maximal, the minimal, and a combination of both. Each category plays a specific role in controlling for confounding in causal analysis."+

        "<h2>Datasets</h2>CaLM-AS, CLADDER<sup>[1]</sup>"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Intervention",
        'random_guess_dict': {'BAS cladder':50., 'max backdoor':33.3, 'min backdoor':33.3, 'mix backdoor':33.3},
        'img_src':"..\\figures\\scenario-specific\\scenario_BAS.png",
        'img_width': "1100px",
        "reference": "[1] Jin, Z., Chen, Y., Leeb, F., Gresele, L., Kamal, O., Zhiheng, L., Blin, K., Adauto, F. G., Kleiman-Weiner, M., Sachan, M., et al. Cladder: Assessing causal reasoning in language models. In Thirty-seventh Conference on Neural Information Processing Systems, 2023a.<br>"+
        "[2] Pearl, J. Causal diagrams for empirical research. Biometrika, 82(4):669–688, 1995.<br>"+
        "[3] Pearl, J. Causality. Cambridge university press, 2009.<br>"+
        "[4] Adib, R., Griffin, P., Ahamed, S. I., and Adibuzzaman, M. A causally formulated hazard ratio estimation through backdoor adjustment on structural causal model. In Doshi-Velez, F., Fackler, J., Jung, K., Kale, D., Ranganath, R., Wallace, B., and Wiens, J. (eds.), Proceedings of the 5th Machine Learning for Healthcare Conference, volume 126 of Proceedings of Machine Learning Research, pp. 376–396. PMLR, 07–08 Aug 2020.<br>"+
        "[5] Landeiro, V. and Culotta, A. Robust text classification in the presence of confounding bias. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 30, 2016.<br>"+
        "[6] Correa, J., Tian, J., and Bareinboim, E. Generalized adjustment under confounding and selection biases. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 32, 2018.<br>"+
        "[7] Landeiro, V. and Culotta, A. Robust text classification under confounding shift. Journal of Artificial Intelligence Research, 63:391–419, 2018.<br>"+
        "[8] Dai, L. and Han, M. Robust sentiment classification based on the backdoor adjustment. In Proceedings of the 2023 6th International Conference on Machine Learning and Natural Language Processing, pp. 41–47, 2023.<br>"+
        "[9] Elwert, F. Graphical causal models. In Handbook of causal analysis for social research, pp. 245–273. Springer, 2013.<br>"
    },
    'Frontdoor Adjustment Set':{
        'description':  
        "While the <i>Back-door criterion</i> aims to control for variables that impact both the treatment and the outcome, the <i>Front-door criterion</i> provides a way to estimate the causal effect by exploiting the mediation pathway, even in the presence of unobserved confounding between the treatment and outcome<sup>[1]</sup>. A FAS involves a set of variables that mediate the causal path from the treatment to the outcome.  Consider a study on the effect of education (treatment) on employment (outcome) in the figure. Suppose the skill (mediator) is the way through which education affect employment. The <i>Front-door Criterion</i> would involve first estimating the effect of education on the skill, and then estimating the effect of the skill on employment while controlling for the education. Even if there are unmeasured factors that affect both the decision to participate in education and employment, the frontdoor adjustment allows for an estimation of the causal effect of education on employment through the mediator of skill. The practical real-world significance of the FAS extends across various domains, offering substantial benefits in artificial intelligence<sup>[2,3,4]</sup>, earth and environmental sciences<sup>[5]</sup>, and ecology<sup>[6]</sup>."+

        "<h2>Scenario Setting</h2>"+
        "Similar to BAS, the question in FAS provides the model with a causal graph and requires it to utilize the <i>Front-door criterion</i> to determine the frontdoor variables between an ordered pair of variables (e.g., ''<i>A</i>'' and ''<i>D</i>'')."+

        "<h2>Datasets</h2>CaLM-AS"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Intervention",
        'random_guess': 33.3,
        'img_src':"..\\figures\\scenario-specific\\scenario_FAS.png",
        'img_width': "1100px",
        "reference": "[1] Pearl, J. Causal diagrams for empirical research. Biometrika, 82(4):669–688, 1995.<br>"+
        "[2] Xu, Z., Cheng, D., Li, J., Liu, J., Liu, L., and Yu, K. Causal inference with conditional front-door adjustment and identifiable variational autoencoder. In The Twelfth International Conference on Learning Representations, 2023b.<br>"+
        "[3] Xu, L. and Gretton, A. A neural mean embedding approach for back-door and front-door adjustment. In The Eleventh International Conference on Learning Representations, 2022.<br>"+
        "[4] Xia, Y., Liang, Y., Wen, H., Liu, X., Wang, K., Zhou, Z., and Zimmermann, R. Deciphering spatio-temporal graph forecasting: A causal lens and treatment. Advances in Neural Information Processing Systems, 36, 2024.<br>"+
        "[5] Runge, J., Gerhardus, A., Varando, G., Eyring, V., and Camps-Valls, G. Causal inference for time series. Nature Reviews Earth & Environment, 4(7):487–505, 2023.<br>"+
        "[6] Arif, S. and MacNeil, M. A. Applying the structural causal model framework for observational causal inference in ecology. Ecological Monographs, 93(1):e1554, 2023.<br>"
    },
    'Instrumental Variable':{
        'description':  
        "Relative to a pair $(X,Y)$, an instrumental $Z$ must satisfy two conditions: (1) it is independent from any variables that impact $Y$ not through $X$  (including error terms), and (2) it is dependent on $X$<sup>[1]</sup>. In other words, an instrumental variable influences the treatment but has no direct effect on the outcome, except through the treatment. This characteristic makes it possible to estimate the causal effect of the treatment on the outcome, even in the presence of unobserved confounders that might otherwise bias the estimates. Consider a study aiming to estimate the effect of education (treatment) on income (outcome), as the figure demonstrates. However, an individual's decision to pursue more education might be influenced by unobserved factors like capability or family background, which also affect income. An instrumental variable could be the college proximity, under the assumption that it affects an individual's decision to obtain more education but does not directly affect their income, except through education. By using this instrumental variable, researchers can estimate the causal effect of education on income, controlling for unobserved confounding factors. In summary, IV allows for more reliable and accurate estimation of causal effects, making it an essential tool in fields where controlled experiments are impractical or impossible, and thus, significantly enhances the validity of empirical findings in social sciences<sup>[2]</sup>, human resource management<sup>[3]</sup>, and economics<sup>[4]</sup>."+

        "<h2>Scenario Setting</h2>"+
        "Similar to BAS and FAS setups, given a causal graph, the model needs to determine the instrumental variable between an ordered pair of variables (e.g., ''<i>B</i>'' and ''<i>D</i>'')."+

        "<h2>Datasets</h2>CaLM-IV"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Intervention",
        'random_guess': 33.3,
        'img_src':"..\\figures\\scenario-specific\\scenario_IV.png",
        'img_width': "1100px",
        "reference": "[1] Pearl, J. Causality. Cambridge university press, 2009.<br>"+
        "[2] Bollen, K. A. Instrumental variables in sociology and the social sciences. Annual Review of Sociology, 38:37–72, 2012.<br>"+
        "[3] Saridakis, G., Lai, Y., Muñoz Torres, R. I., and Gourlay, S. Exploring the relationship between job satisfaction and organizational commitment: an instrumental variable approach. The International Journal of Human Resource Management, 31(13):1739–1769, 2020.<br>"+
        "[4] Mogstad, M., Torgovitsky, A., and Walters, C. R. The causal interpretation of two-stage least squares with multiple instrumental variables. American Economic Review, 111(11):3663–3698, 2021."
    },
    'Collider Bias':{
        'description':  
        "CB is a type of selection bias that occurs when an analysis is conditioned upon a common effect of two or more variables. The simplest collider in a causal graph can be illustrated as $X\\rightarrow C \\leftarrow Y$, where $C$ represents the common effect of causes $X$ and $Y$<sup>[2]</sup>. Collider bias occurs when a common effect is controlled. For example, $X$ and $Y$ are independent, while conditions on $Z$ will make them dependent. A famous example illustrating collider bias is the <i>hollywood actors</i> ($talent\\rightarrow celebrity\\leftarrow beauty$)<sup>[3]</sup>. As the figure demonstrates, it is asserted that both talent and beauty affect an actor's success. However, it is important to note that while beauty and talent contribute to success in acting, they are independent of each other in the general population. This bias can lead to incorrect inferences about the relationships between variables<sup>[4,5,6]</sup>. Thus, recognizing and addressing CB is crucial for ensuring the validity and reliability of study findings<sup>[7,8]</sup>, ultimately guiding accurate scientific understanding and informed decision-making."+

        "<h2>Scenario Setting</h2>"+
        "In CB, we provide a causal graph (e.g., ''<i>Respiratory issues has a direct effect on hospitalization status. Broken bones has a direct effect on hospitalization status.</i>'') along with corresponding probabilities (e.g., ''<i>For hospitalized individuals, the correlation between respiratory issues and broken bones is -0.01.</i>''). This causal scenario requires the model to exclude the interference of collider bias and answer the question correctly (e.g., ''<i>If we look at hospitalized individuals, does it mean that respiratory issues does not affect broken bones?</i>''<sup>[1]</sup>)."+

        "<h2>Datasets</h2>CLADDER<sup>[1]</sup>"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Association",
        'random_guess': 50.,
        'img_src':"..\\figures\\scenario-specific\\scenario_CB.png",
        'img_width': "1100px",
        "reference": "[1] Jin, Z., Chen, Y., Leeb, F., Gresele, L., Kamal, O., Zhiheng, L., Blin, K., Adauto, F. G., Kleiman-Weiner, M., Sachan, M., et al. Cladder: Assessing causal reasoning in language models. In Thirty-seventh Conference on Neural Information Processing Systems, 2023a.<br>"+
        "[2] Pearl, J., Glymour, M., and Jewell, N. P. Causal inference in statistics: A primer. John Wiley & Sons, 2016.<br>"+
        "[3] Pearl, J. and Mackenzie, D. The book of why: the new science of cause and effect. Basic books, 2018.<br>"+
        "[4] Cole, S. R., Platt, R. W., Schisterman, E. F., Chu, H., Westreich, D., Richardson, D., and Poole, C. Illustrating bias due to conditioning on a collider. International journal of epidemiology, 39(2):417–420, 2010.<br>"+
        "[5] Elwert, F. and Winship, C. Endogenous selection bias: The problem of conditioning on a collider variable. Annual review of sociology, 40:31–53, 2014.<br>"+
        "[6] Munafò, M. R., Tilling, K., Taylor, A. E., Evans, D. M., and Davey Smith, G. Collider scope: when selection bias can substantially influence observed associations. International journal of epidemiology, 47(1):226–235, 2018.<br>"+
        "[7] Mahmoud, O., Dudbridge, F., Davey Smith, G., Munafo, M., and Tilling, K. A robust method for collider bias correction in conditional genome-wide association studies. Nature Communications, 13(1):619, 2022.<br>"+
        "[8] Shi, C., Veitch, V., and Blei, D. M. Invariant representation learning for treatment effect estimation. In de Campos, C. and Maathuis, M. H. (eds.), Proceedings of the Thirty-Seventh Conference on Uncertainty in Artificial Intelligence, volume 161 of Proceedings of Machine Learning Research, pp. 1546–1555. PMLR, 27–30 Jul 2021.<br>"
    },
    'Causal Effect Identification':{
        'description':  
        "The concept of CEI in causal inference is centered on determining whether the causal effect of a treatment on an outcome can be estimated from observational data<sup>[1]</sup>. Consider two disjoint sets, denoted as $X$ and $Y$, where the causal effect of $X$ on $Y$ is represented as $P(y|do(x))$. Assume that $P(v)$ represents a probability distribution over the variable set $V$. The causal effect of  $X$ on $Y$ is identifiable when the value of $P(y|do(x))$ can be exclusively ascertained from any positive probability distribution of the observed variables within graph $G$. In other words, for any two models $M_a$ and $M_b$ that both conform to graph $G$ and have positive probabilities $P_{M_a}(v)=P_{M_b}(v)>0$, the corresponding $P_{M_a}(y|do(x))=P_{M_b}(y|do(x))$<sup>[2]</sup>. The above figure shows a case to estimate the causal effect of smoking on lung cancer using observational data, doctors employ a causal diagram to control for confounders like age and genetics. They determine if this effect is identifiable—whether they can estimate the incidence of lung cancer if hypothetically a population were assigned to smoke. If identifiable, they can statistically estimate the risk of lung cancer due to smoking, providing evidence to guide public health interventions without the need for unethical randomized trials that would require participants to smoke."+

        "<h2>Scenario Setting</h2>"+
        "In CEI, we start by presenting a causal graph (e.g., ''<i>A causes D, A causes B, A causes C, A causes E, B causes C, C causes E, and C causes D</i>''). We then specify the existence of unobserved confounders between designated nodes at four different rates: 20\%, 40\%, 60\%, and 80\%. For instance, if there are 20\% unobserved confounders, the instruction will indicate ''<i>There exist unobserved confounders between: C and D</i>''. If it increase to 60\%, the instruction will state ''<i>There exist unobserved confounders between: A and B, C and D, B and C, and C and E</i>.'' The causal scenario requires the model to determine if the causal relationship between a pair of treatment and outcome variables (e.g., ''<i>C</i>'' and ''<i>D</i>'') can be identified (the correct answer for this example is ''No'')."+

        "<h2>Datasets</h2>CaLM-CEI"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Intervention",
        'random_guess_dict': {'identification 20UC':50., 'identification 40UC':50., 'identification 60UC':50.,'identification 80UC':50.},
        'img_src':"..\\figures\\scenario-specific\\scenario_CEI.png",
        'img_width': "1100px",
        "reference": "[1] Shpitser, I. and Pearl, J. Complete identification methods for the causal hierarchy. Journal of Machine Learning Research, 9:1941–1979, 2008.<br>"+
        "[2] Tian, J. and Pearl, J. A general identification condition for causal effects. In Proceedings of the AAAI Conference on Artificial Intelligence, pp. 567–573, 2002.<br>"
    },
    'Controlled Direct Effect':{
        'description':  
        "When one variable causes another both directly and indirectly through mediators, the CDE quantifies the direct influence of an intervention on an outcome while maintaining one or more mediators at a predetermined level<sup>[1,2]</sup>. In this way, it disregards the indirect effects that operate through these mediators. Therefore, in the context of three variables $X$, $Y$, and $M$, with $M$ acting as a mediator between treatment $X$ and outcome $Y$, the CDE on $Y$ when altering the value of $X$ from $x$ to $x'$ is formally defined as $CDE=P(Y|do(X=x',M=m))-P(Y|do(X=x,M=m))$<sup>[3,4]</sup>. As the figure shows, imagine we are investigating the direct effect of a novel math teaching strategy (treatment) on student exam scores (outcome), intentionally excluding its indirect effect via enhancing student confidence (mediator). By controlling for students' confidence levels, we aim to measure the direct influence of this new method compared to traditional teaching on exam outcomes. This analysis allows us to distinctly identify the immediate benefits of the teaching approach on performance, separating from its indirect benefits through confidence improvement. This clarity aids educators in precisely assessing the direct effectiveness of the new teaching method. This isolation required by CDE is particularly important in complex systems where multiple pathways and interactions can obscure the mechanisms through which an intervention works<sup>[5]</sup>. By assessing the CDE, decision-makers can more accurately design and refine interventions, targeting the direct mechanisms that produce the desired outcome in various fields such as epidemiology<sup>[6]</sup>, artificial intelligence<sup>[7]</sup>, and biology<sup>[8]</sup>. "+

        "<h2>Scenario Setting</h2>"+
        "Similar to ATE, the problem in CDE gives a causal graph (e.g., ''<i>Weather conditions has a direct effect on amount of rainfall. Weather conditions has a direct effect on crop yield. Amount of rainfall has a direct effect on crop yield.</i>'') along with corresponding conditional probabilities (e.g., ''<i>For those with weather conditions being good and amount of rainfall being small, the probability of crop yield being high is 0.3510. For those with weather conditions being bad and amount of rainfall being small, the probability of crop yield being high is 0.1420.</i>''). The causal scenario requires the model to determine the CDE between variables (e.g., ''<i>Conditioned on amount of rainfall being small, if the weather conditions had been good, would the crop yield have been more likely to be high?</i>''). The model needs to address both binary classification (''Yes'') and probability calculation (''0.2090'') questions."+

        "<h2>Datasets</h2>CaLM-CDE"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Intervention",
        'random_guess_dict': {'CDE basic':0., 'CDE hard':0., 'CDE language':50.},
        'img_src':"..\\figures\\scenario-specific\\scenario_CDE.png",
        'img_width': "1100px",
        "reference": "[1] Pearl, J. and Mackenzie, D. The book of why: the new science of cause and effect. Basic books, 2018.<br>"+
        "[2] Cinelli, C., Forney, A., and Pearl, J. A crash course in good and bad controls. Sociological Methods & Research, pp. 00491241221099552, 2022.<br>"+
        "[3] Kaufman, S., Kaufman, J. S., MacLehose, R. F., Greenland, S., and Poole, C. Improved estimation of controlled direct effects in the presence of unmeasured confounding of intermediate variables. Statistics in medicine, 24(11):1683–1702, 2005.<br>"+
        "[4] Pearl, J. Direct and indirect effects. In Proceedings of the Seventeenth Conference on Uncertainty in Artificial Intelligence, pp. 411–420, 2001.<br>"+
        "[5] Nguyen, T. Q., Schmid, I., and Stuart, E. A. Clarifying causal mediation analysis for the applied researcher: Defining effects based on what we want to learn. Psychological Methods, 26(2):255, 2021.<br>"+
        "[6] Carter, A. R., Sanderson, E., Hammerton, G., Richmond, R. C., Davey Smith, G., Heron, J., Taylor, A. E., Davies, N. M., and Howe, L. D. Mendelian randomisation for mediation analysis: current methods and challenges for implementation. European journal of epidemiology, 36(5):465–478, 2021.<br>"+
        "[7] Tang, K., Huang, J., and Zhang, H. Long-tailed classification by keeping the good and removing the bad momentum causal effect. Advances in neural information processing systems, 33:1513–1524, 2020.<br>"+
        "[8] Howe, L. J., Nivard, M. G., Morris, T. T., Hansen, A. F., Rasheed, H., Cho, Y., Chittoor, G., Ahlskog, R., Lind, P. A., Palviainen, T., et al. Within-sibship genome-wide association analyses decrease bias in estimates of direct genetic effects. Nature genetics, 54(5):581–592, 2022."
    },
    'Actual Causality':{
        'description':  
        "AC deals with attribution and responsibility allocation problems encountered in practical applications like policy-implementing<sup>[2]</sup>, diagnosing causes<sup>[3,4]</sup>, and decision making<sup>[5]</sup>. AC goes beyond the mere identification of correlations in data; it enables language models to grasp the underlying mechanisms that lead to certain outcomes, distinguish between cause and effect, and make predictions that reflect a deeper understanding of how different elements of information are interrelated. This understanding is essential for generating more accurate, relevant, and contextually appropriate responses, especially in complex causal scenarios where multiple factors interact. Formalizing this causal scenario within SCMs is difficult, because in AC, people's assessments of causal relationships are influenced by contextual factors, which are essential for the outcome. Studies have demonstrated that this causal scenario presents considerable challenges for language models<sup>[6,7]</sup>. "+

        "<h2>Scenario Setting</h2>"+
        "In AC, the causal scenario presents an actual story (e.g., ''<i>Jake desperately wants to win the rifle contest. He knows that he will only win the contest if he hits the bull's-eye. He raises the rifle, gets the bull's-eye in the sights, and presses the trigger. But Jake isn't very good at using his rifle. His hand slips on the barrel of the gun, and the shot goes wild... Nonetheless, the bullet lands directly on the bull's-eye. Jake wins the contest. Did Jake intentionally hit the bull's-eye?</i>''<sup>[7]</sup>). Each story ends with a binary classification question (i.e., ''Yes'' or ''No''), aiming to challenge whether model can predict the correct answer (''No'' for this example)."+

        "<h2>Datasets</h2>BBH<sup>[1]</sup>"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Counterfactual",
        'random_guess': 50.,
        'img_src':"..\\figures\\scenario-specific\\scenario_AC.png",
        'img_width': "1100px",
        "reference": "[1] Suzgun, M., Scales, N., Schärli, N., Gehrmann, S., Tay, Y., Chung, H. W., Chowdhery, A., Le, Q. V., Chi, E. H., Zhou, D., , and Wei, J. Challenging big-bench tasks and whether chain-of-thought can solve them. arXiv preprint arXiv:2210.09261, 2022.<br>"+
        "[2] Capano, G. and Howlett, M. Causal logics and mechanisms in policy design: How and why adopting a mechanistic perspective can improve policy design. Public policy and administration, 36(2):141–162, 2021.<br>"+
        "[3] Wang, H., Wu, Z., Jiang, H., Huang, Y., Wang, J., Kopru, S., and Xie, T. Groot: An event-graph-based approach for root cause analysis in industrial settings. In 2021 36th IEEE/ACM International Conference on Automated Software Engineering (ASE), pp. 419–429. IEEE, 2021.<br>"+
        "[4] Albantakis, L., Marshall, W., Hoel, E., and Tononi, G. What caused what? a quantitative account of actual causation using dynamical causal networks. Entropy, 21(5):459, 2019.<br>"+
        "[5] Triantafyllou, S., Singla, A., and Radanovic, G. Actual causality and responsibility attribution in decentralized partially observable markov decision processes. In Proceedings of the 2022 AAAI/ACM Conference on AI, Ethics, and Society, pp. 739–752, 2022.<br>"+
        "[6] Kıcıman, E., Ness, R., Sharma, A., and Tan, C. Causal reasoning and large language models: Opening a new frontier for causality. arXiv preprint arXiv:2305.00050, 2023.<br>"+
        "[7] Suzgun, M., Scales, N., Schärli, N., Gehrmann, S., Tay, Y., Chung, H. W., Chowdhery, A., Le, Q., Chi, E., Zhou, D., and Wei, J. Challenging BIG-bench tasks and whether chain-of-thought can solve them. In Rogers, A., Boyd-Graber, J., and Okazaki, N. (eds.), Findings of the Association for Computational Linguistics: ACL 2023, pp. 13003–13051, Toronto, Canada, July 2023. Association for Computational Linguistics. doi: 10.18653/v1/2023.findings-acl.824.<br>"+
        ""
    },
    'Causal Explanation Generation':
    {
        'description':  
        "The ability to understand and explain causality is a cornerstone for building machines that can reason reliably. This causal scenario aims to examine whether language models can generate comprehensive and logically sound explanations that elucidate the causal relationships between specific events<sup>[2]</sup>. By understanding and articulating the underlying causes behind phenomena, language models can offer more accurate, relevant, and transparent responses, thereby improving user interactions. This capability is particularly important in decision-support contexts, such as healthcare<sup>[3]</sup> and policy-making<sup>[4]</sup>, where understanding causal relationships is essential. Additionally, causal explanations can aid in debugging and refining language models by revealing how they process information, facilitating improvements in model performance and fairness<sup>[5,6,7,8]</sup>."+

        "<h2>Scenario Setting</h2>"+
        "In CEG, the causal scenario begins by presenting a cause-effect pair (e.g., ''<i>Cause: The financial crisis left many people homeless.</i>'' and ''<i>Effect: After the financial crisis, the suicide rate increased significantly.</i>''<sup>[1]</sup>). The model needs to provide a reasonable explanation of why the cause can lead to the effect (e.g., ''<i>Homelessness greatly increases the likelihood of a suicide attempt.</i>'')."+

        "<h2>Datasets</h2>E-CARE<sup>[1]</sup>"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Counterfactual",
        'random_guess': 0.,
        'img_src':"..\\figures\\scenario-specific\\scenario_CEG.png",
        'img_width': "700px",
        "reference": "[1] Du, L., Ding, X., Xiong, K., Liu, T., and Qin, B. e-care: a new dataset for exploring explainable causal reasoning. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pp. 432–446, 2022.<br>"+
        "[2] Gao, J., Ding, X., Qin, B., and Liu, T. Is chatgpt a good causal reasoner? a comprehensive evaluation. In The 2023 Conference on Empirical Methods in Natural Language Processing, 2023a.<br>"+
        "[3] Richens, J. G., Lee, C. M., and Johri, S. Improving the accuracy of medical diagnosis with causal machine learning. Nature communications, 11(1):3923, 2020.<br>"+
        "[4] Swinkels, M. How ideas matter in public policy: a review of concepts, mechanisms, and methods. International Review of Public Policy, 2(2: 3):281–316, 2020.<br>"+
        "[5] Lin, W., Lan, H., and Li, B. Generative causal explanations for graph neural networks. In International Conference on Machine Learning, pp. 6666–6679. PMLR, 2021.<br>"+
        "[6] O’Shaughnessy, M., Canal, G., Connor, M., Rozell, C., and Davenport, M. Generative causal explanations of black-box classifiers. Advances in neural information processing systems, 33:5453–5467, 2020.<br>"+
        "[7] Madumal, P., Miller, T., Sonenberg, L., and Vetere, F. Explainable reinforcement learning through a causal lens. In Proceedings of the AAAI conference on artificial intelligence, volume 34, pp. 2493–2500, 2020.<br>"+
        "[8] Moraffah, R., Karami, M., Guo, R., Raglin, A., and Liu, H. Causal interpretability for machine learning-problems, methods and evaluation. ACM SIGKDD Explorations Newsletter, 22(1):18–33, 2020."
    },
    'Effect of the Treatment on the Treated':{
        'description':  
        "ETT is employed to assess whether individuals who receive treatment are the ones who would derive the greatest advantage from it. In other words, the issue ETT seeks to address is: What differences would there be in outcomes (e.g., health condition, income) for individuals who did receive treatment compared to if they had not undergone treatment? When a policymaker's objective is to determine whether to uphold or discontinue an existing program within its present incentive framework, the key parameter of concern should measure the ETT<sup>[1]</sup>. The appropriate formula is $ETT=E(Y_1-Y_0|X=1)$, where $Y_x$ denotes the value of outcome $Y$ when treatment $X$ is kept constant at $X = x$. As the figure demonstrates, the ETT in a job training program for unemployed individuals assesses the program's specific impact on participants by comparing their employment outcomes before and after participation, against similar non-participants. ETT reveals the direct benefits of the program, aiding in evaluating its effectiveness and guiding policy decisions. As a crucial metric for assessing the effectiveness of voluntary enrollment in programs by those who are eligible, ETT is extensively used in various fields including econometrics<sup>[2,3,4]</sup>, healthcare<sup>[5]</sup>, and psychology<sup>[6]</sup>."+

        "<h2>Scenario Setting</h2>"+
        "Similar to ATE, we provide a causal graph (e.g., ''<i>Parents' income has a direct effect on child's education level. Parents' income has a direct effect on child's health status. Parents' income has a direct effect on child's social skills.</i>'') along with corresponding conditional probabilities (e.g., ''<i>For those with parents' income being high, the probability of child's health status being poor is 0.1112. For those with parents' income being low, the probability of child's health status being poor is 0.2617.</i>''). The causal scenario requires the model to determine the ETT between variables (e.g., ''<i>For those with parents' income being high, if their parents' income had been low, would the child's health status have been more likely to be poor?</i>''). The model needs to address both binary classification (''Yes'') and probability calculation (''-0.1505'') questions."+

        "<h2>Datasets</h2>CaLM-ETT"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Counterfactual",
        'random_guess_dict': {'ETT basic':0., 'ETT hard':0., 'ETT language':50.},
        'img_src':"..\\figures\\scenario-specific\\scenario_ETT.png",
        'img_width': "1100px",
        "reference": "[1] Pearl, J. Causality. Cambridge university press, 2009.<br>"+
        "[2] Roth, J., Sant’Anna, P. H., Bilinski, A., and Poe, J. What’s trending in difference-in-differences? a synthesis of the recent econometrics literature. Journal of Econometrics, 235(2):2218–2244, 2023.<br>"+
        "[3] Baker, A. C., Larcker, D. F., and Wang, C. C. How much should we trust staggered difference-in-differences estimates? Journal of Financial Economics, 144(2):370–395, 2022.<br>"+
        "[4] De Chaisemartin, C. and d’Haultfoeuille, X. Two-way fixed effects and differences-in-differences with heterogeneous treatment effects: A survey. The Econometrics Journal, 26(3):C1–C30, 2023.<br>"+
        "[5] Jastreboff, A. M., Aronne, L. J., Ahmad, N. N., Wharton, S., Connery, L., Alves, B., Kiyosue, A., Zhang, S., Liu, B., Bunck, M. C., et al. Tirzepatide once weekly for the treatment of obesity. New England Journal of Medicine, 387(3):205–216, 2022.<br>"+
        "[6] Gomila, R. Logistic or linear? estimating causal effects of experimental treatments on binary outcomes using regression analysis. Journal of Experimental Psychology: General, 150(4):700, 2021."
    },
    'Natural Direct Effect':{
        'description':  
        "Different from the CDE, the NDE quantifies the anticipated rise in outcome $Y$ when the treatment shifts from $X = x$ to $X = x'$, with the mediator $M$ held at the value it would have naturally taken under the condition $X = x$<sup>[1]</sup>. Thus, $NDE=E[(Y(x',M(x)))-E(Y(x))]$. We can conclude that the most distinct difference between CDE and NDE is that: NDE considers the mediator's natural state when untreated, whereas CDE sets the mediator to one or more predetermined levels. The above figure depicts a causal scenario of studying how smoking (treatment) affects heart disease (outcome), with blood pressure (mediator) acting as a crucial intermediary factor. Here, the NDE represents the direct influence of smoking on heart disease, bypassing the effects mediated by blood pressure. And it seeks to answer: <i>What would be the direct effect of smoking on heart disease if we could keep the blood pressure of smokers at the level it would naturally be if they did not smoke?</i> The NDE allows for isolating and understanding the direct impact of a treatment on an outcome, independent of any mediating pathways. This distinction is crucial in fields like computer vision<sup>[2]</sup>, natural language processing<sup>[3]</sup>, and public health<sup>[4]</sup>, where understanding the specific mechanisms through which interventions affect outcomes can inform the development of more effective strategies."+

        "<h2>Scenario Setting</h2>"+
        "Given a causal graph (e.g., ''<i>Mktt has a direct effect on oroo. Mktt has a direct effect on tlxp. Mktt has a direct effect on enck. Oroo has a direct effect on tlxp.</i>'') along with corresponding conditional probabilities (e.g., ''<i>For those with mktt being high, the probability of oroo being low is 0.8817. For those with mktt being low, the probability of oroo being low is 0.6940.</i>''), the causal scenario requires the model to determine the NDE between variables (e.g., ''<i>Suppose the mediator keeps constant when mktt is changed to be high, would the oroo have been more likely to be low?</i>''). The model needs to address both Binary classification (''Yes'') and probability calculation (''0.1877'') types of questions."+

        "<h2>Datasets</h2>CaLM-NDE"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Counterfactual",
        'random_guess_dict': {'NDE basic':0., 'NDE hard':0., 'NDE language':50.},
        'img_src':"..\\figures\\scenario-specific\\scenario_NDE.png",
        'img_width': "1100px",
        "reference": "[1] Pearl, J. Direct and indirect effects. In Proceedings of the Seventeenth Conference on Uncertainty in Artificial Intelligence, pp. 411–420, 2001.<br>"+
        "[2] Niu, Y., Tang, K., Zhang, H., Lu, Z., Hua, X.-S., and Wen, J.-R. Counterfactual vqa: A cause-effect look at language bias. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pp. 12700–12710, 2021.<br>"+
        "[3] Vig, J., Gehrmann, S., Belinkov, Y., Qian, S., Nevo, D., Singer, Y., and Shieber, S. Investigating gender bias in language models using causal mediation analysis. Advances in neural information processing systems, 33: 12388–12401, 2020.<br>"+
        "[4] Carter, A. R., Sanderson, E., Hammerton, G., Richmond, R. C., Davey Smith, G., Heron, J., Taylor, A. E., Davies, N. M., and Howe, L. D. Mendelian randomisation for mediation analysis: current methods and challenges for implementation. European journal of epidemiology, 36(5):465–478, 2021."
    },
    'Natural Indirect Effect':{
        'description':  
        "NIE measures the extent of change in the outcome through the mediator when the treatment is modified. It excludes the direct effects of treatment on the outcome that does not involve the mediator. This methodology enables us to comprehend the mediator's role and significance within the causal relationship between treatment and outcome. Specifically, the NIE quantifies the anticipated rise in $Y$ when the treatment variable remains fixed at $X = x$, while allowing the mediator $M$ to adjust to the level it would have reached if $X$ had been set to $x'$. In essence, it isolates and accounts for the segment of the effect solely attributable to the mediation process, while neutralizing the ability of $Y$ to react to changes in $X$<sup>[1]</sup>. The quantitative expression is $NIE=E[(Y(x,M(x')))-E(Y(x))]$. As the figure shows, consider a study on examining how job satisfaction (treatment) improves employees' mental health (outcome) by reducing job-related stress (mediator). In this example, the NIE would measure the improvement in employees' mental health resulting solely from the increase in job satisfaction through the pathway of reducing job-related stress."+

        "<h2>Scenario Setting</h2>"+
        "Similar to NDE, we provide a causal graph (e.g., ''<i>Kdns has a direct effect on jazt. Jazt has a direct effect on ftog.</i>'' with corresponding conditional probabilities (e.g., ''<i>For those with jazt being low and kdns being low, the probability of ftog being high is 0.5564. For those with kdns being high, the probability of jazt being low is 0.7767. For those with kdns being low, the probability of jazt being low is 0.9313. For those with jazt being high and kdns being low, the probability of ftog being high is 0.9241.</i>'') The causal scenario requires the model to determine the NIE between variables (e.g., ''<i>Suppose kdns is held constant and the mediator changes to whatever value it would have attained under kdns changing to be high, would ftog have been more likely to be high?</i>''). The model needs to address both binary classification (''Yes'') and probability calculation (''0.0568'') questions."+

        "<h2>Datasets</h2>CaLM-NIE"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Counterfactual",
        'random_guess_dict': {'NIE basic':0., 'NIE hard':0., 'NIE language':50.},
        'img_src':"..\\figures\\scenario-specific\\scenario_NIE.png",
        'img_width': "1100px",
        "reference": "[1] Pearl, J. Direct and indirect effects. In Proceedings of the Seventeenth Conference on Uncertainty in Artificial Intelligence, pp. 411–420, 2001.<br>"+
        ""
    },
    'Probability of Necessity':{
        'description':  
        "PN essentially seeks to address the question: ''<i>In cases where the outcome occurs, could it still happen without the treatment?</i>'' If the absence of the treatment leads to that the outcome would not happen, then it indicates that the treatment is necessary for the occurrence of the outcome<sup>[1]</sup>. In the context of binary events, we denote the treatment as $X = x$ and the outcome as $Y = y$, and their respective negations as $X = x'$ and $Y = y'$. The objective of PN can be determined as: <i>Find the probability that if $X$ had been $x'$, $Y$ would be $y'$, given that, in reality, $X$ is $x$ and $Y$ is $y$</i><sup>[2]</sup>. The formula is $PN(x,y)=P(Y_{x'}=y'|X=x,Y=y)$. PN provides deeper insight into the fundamental principle of legal assessment known as the ''but-for'' test. In practical legal contexts, this guideline directs us: favorable judgments for the plaintiff should only be rendered when the assumption that ''<i>the harm would not have occurred if not for the defendant's actions</i>'' approaches certainty<sup>[3]</sup>. For example, in a traffic accident case where a driver failed to slow down at a yellow light leading to a collision, the court uses the PN to evaluate if slowing down could have prevented the accident. If PN indicates a high likelihood that the accident would have been avoided by slowing down, the driver's action is deemed a necessity cause for the collision, influencing the court's decision on liability. Formalizing and calculating the PN is vital for allocating resources efficiently, prioritizing interventions, and crafting strategies that address the most critical factors contributing in artificial intelligence<sup>[4,5,6,7]</sup>. "+

        "<h2>Scenario Setting</h2>"+
        "Given a causal graph (e.g., ''<i>Temperature has a direct effect on rainfall. Humidity has a direct effect on rainfall.</i>'') and corresponding conditional probabilities (e.g., ''<i>For those with humidity being low, the probability of rainfall being dry is 0.6861. The probability of humidity being low and rainfall being dry is 0.4408. The probability of humidity being high and rainfall being wet is 0.0168.</i>''), the causal scenario requires the model to calculate the upper bound or lower bound of PN (e.g., ''<i>Given that humidity was high and rainfall was wet, what is the upper bound of the probability of the rainfall would have been dry if the humidity had been low?</i>'')."+

        "<h2>Datasets</h2>CaLM-PN"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Counterfactual",
        'random_guess_dict': {'PN basic':0., 'PN hard':0.},
        'img_src':"..\\figures\\scenario-specific\\scenario_PN.png",
        'img_width': "1100px",
        "reference": "[1] Pearl, J. Probabilities of causation: three counterfactual interpretations and their identification. In Probabilistic and Causal Inference: The Works of Judea Pearl, pp. 317–372. 2022.<br>"+
        "[2] Pearl, J., Glymour, M., and Jewell, N. P. Causal inference in statistics: A primer. John Wiley & Sons, 2016.<br>"+
        "[3] Peaslee, R. J. Multiple causation and damage. Harvard Law Review, 47(7):1127–1142, 1934.<br>"+
        "[4] Watson, D. S., Gultchin, L., Taly, A., and Floridi, L. Local explanations via necessity and sufficiency: unifying theory and practice. In de Campos, C. and Maathuis, M. H. (eds.), Proceedings of the Thirty-Seventh Conference on Uncertainty in Artificial Intelligence, volume 161 of Proceedings of Machine Learning Research, pp. 1382–1392. PMLR, 27–30 Jul 2021.<br>"+
        "[5] Tang, K., Huang, J., and Zhang, H. Long-tailed classification by keeping the good and removing the bad momentum causal effect. Advances in neural information processing systems, 33:1513–1524, 2020.<br>"+
        "[6] Tan, J., Xu, S., Ge, Y., Li, Y., Chen, X., and Zhang, Y. Counterfactual explainable recommendation. In Proceedings of the 30th ACM International Conference on Information & Knowledge Management, pp. 1784–1793, 2021.<br>"+
        "[7] Zhang, J., Tian, J., and Bareinboim, E. Partial counterfactual identification from observational and experimental data. In International Conference on Machine Learning, pp. 26548–26558. PMLR, 2022a."
    },
    'Probability of Sufficiency':{
        'description':  
        "Parallel to the concept of PN, the PS addresses: ''<i>In cases where the outcome does not occur, could it happen if a treatment exists?</i>\" If the presence of this treatment leads to the outcome, it implies that this treatment is sufficient to trigger the outcome<sup>[1]</sup>. It provides an estimate of the probability that the intervention of $x$ would result in the occurrence of outcome $y$ when both $x$ and $y$ are not currently present<sup>[2]</sup>, mathematically expressed as: $PS(x,y)=P(Y_{x}=y|X=x',Y=y')$. Consider a workplace injury case where an employee was harmed due to a machine malfunction, the court applies the PS to evaluate if adhering to safety protocols. Considering that regular maintenance $(X=1)$ would have prevented the injury $(Y=1)$, given the protocols were initially not followed $(X=0)$ and the injury occurred $(Y=0)$. A high PS indicates that following the protocols would likely have averted the harm, potentially establishing the employer's liability for the injury by demonstrating negligence in safety measures. This approach is critical in legal judgments involving causality and negligence."+

        "<h2>Scenario Setting</h2>"+
        "Similar to PN, PS also involves providing a causal graph along with corresponding conditional probabilities, requiring the model to calculate the upper bound or lower bound of PS."+

        "<h2>Datasets</h2>CaLM-PS"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Counterfactual",
        'random_guess_dict': {'PS basic':0., 'PS hard':0.},
        'img_src':"..\\figures\\scenario-specific\\scenario_PS.png",
        'img_width': "1100px",
        "reference": "[1] Pearl, J. Probabilities of causation: three counterfactual interpretations and their identification. In Probabilistic and Causal Inference: The Works of Judea Pearl, pp. 317–372. 2022.<br>"+
        "[2] Pearl, J. Causality. Cambridge university press, 2009.<br>"
    },
    'Counterfactual Reasoning':{
        'description':  
        "To ascertain what led to a specific occurrence, it is crucial to imagine ''what-if'' causal scenarios in which the event might not have taken place and then examine the resulting outcomes. Counterfactual reasoning involves contemplating hypothetical causal scenarios or alternative versions of reality by modifying certain factors or conditions present in an actual event or situation<sup>[3,4]</sup>. It is also a valuable skill for language models to provide perspectives and insights that might not be immediately obvious based on the available information."+

        "<h2>Scenario Setting</h2>"+
        "There are two types of questions in CR. (1) <b>Binary classification</b>: We provide the model with a causal graph (e.g., ''<i>Smoking has a direct effect on tar deposit. Tar deposit has a direct effect on lung cancer.</i>''<sup>[1]</sup>) and corresponding relationships (e.g., ''<i>We know that smoking causes high tar deposit, and we know that high tar deposit causes lung cancer.</i>''), and give the model a counterfactual question to answer ''yes'' or ''no'' (e.g., ''<i>Would the person has no lung cancer if smoking instead of nonsmoking?</i>'') (2) <b>Choice selection</b>: An event (e.g., ''<i>A woman sees a fire.</i>'') and a counterfactual question (e.g., ''<i>What would have happened if the woman had touched the fire?</i>''<sup>[2]</sup>) are posed to the model. The model is required to choose the correct option according to the question."+

        "<h2>Datasets</h2>CLADDER<sup>[1]</sup>, CRASS<sup>[2]</sup>"+
        
        "<h2>Scenario Performance</h2>",
        'others': "Distribution of Counterfactual",
        'random_guess_dict': {'DC cladder':50., 'CR':25.},
        'img_src':"..\\figures\\scenario-specific\\scenario_CR.png",
        'img_width': "1100px",
        "reference": "[1] Jin, Z., Chen, Y., Leeb, F., Gresele, L., Kamal, O., Zhiheng, L., Blin, K., Adauto, F. G., Kleiman-Weiner, M., Sachan, M., et al. Cladder: Assessing causal reasoning in language models. In Thirty-seventh Conference on Neural Information Processing Systems, 2023a.<br>"+
        "[2] Frohberg, J. and Binder, F. Crass: A novel data set and benchmark to test counterfactual reasoning of large language models. In Proceedings of the Thirteenth Language Resources and Evaluation Conference, pp. 2126–2140, 2022.<br>"+
        "[3] Kahneman, D. and Miller, D. T. Norm theory: Comparing reality to its alternatives. Psychological review, 93(2): 136, 1986.<br>"+
        "[4] Byrne, R. M. The rational imagination: How people create alternatives to reality. MIT press, 2007.<br>"
    },
}