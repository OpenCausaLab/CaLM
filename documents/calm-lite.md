# CaLM Lite
**CaLM Lite** is a lightweight version of CaLM. 

## Quick Start
First, get model responses, for example:
```
python calm/run.py --models vicuna_33b -p zero-shot-IcL -t PCD-B_E-CARE_EN  -mcfg ./model_configs -o ./output -l
```
Then run evaluation script to get evaluation metrics and errors:
```
python calm/evaluate.py --models vicuna_33b -p zero-shot-IcL -t PCD-B_E-CARE_EN -cm -ea -am -o ./output -l
```

## Available Causal Tasks
We provide 92 tasks for causal evaluation, stored in the `calm_lite_dataset` folder. For more information about our causal tasks, refer to [tasks](tasks.md).
The directory structure is:

```
├── calm
| ├── association
| ├── causal_discovery # Rung of the causal ladder
| │ ├── abstract_reasoning # Causal scenario
| │ │ ├── AR-B_CaLM-AR_CN.json # Causal task
| │ | └── AR-B_CaLM-AR_EN.json # Causal task
| │ └── ...
| └── ...
└── ...
```

## Dataset
- **Dataset size**: CaLM Lite leverages a light dataset of **9200**, while CaLM uses a significantly larger dataset of 126,334. The table below details the English dataset composition, with the Chinese version structured identically.
- **Dataset configuration**: We prioritize balance in our dataset for **binary classification** and **choice selection** questions. By ensuring an equal number of each GT label, we minimize the risk of introducing bias into the model's testing. For **probability calculation**, CaLM-Lite takes extra attention to balance the number of problems across different causal reasoning processes. (For more details on how causal reasoning process is defined, please refer to Section 9.1.6 of the [paper](https://arxiv.org/abs/2405.00622).)

| Causal ladder | Causal scenario | Subset | Question type | Mode | CaLM Lite | CaLM |
|---------------|-----------------|--------|---------------|------|-----------|------|
| Causal discovery | PCD | E-CARE | Binary classification | Natural | 100 | 2000 |
| Causal discovery | PCD | E-CARE | Choice selection | Natural | 100 | 1000 |
| Causal discovery | PCD | COPA | Binary classification | Natural | 100 | 2000 |
| Causal discovery | PCD | COPA | Choice selection | Natural | 100 | 1000 |
| Causal discovery | ECI | CTB | Binary classification | Natural | 100 | 596 |
| Causal discovery | ECI | ESC | Binary classification | Natural | 100 | 1000 |
| Causal discovery | ECI | MAVEN-ERE | Binary classification | Natural | 100 | 1000 |
| Causal discovery | AR | CaLM-AR | Binary classification | Symbolic | 100 | 1600 |
| Causal discovery | CA | FP | Binary classification | Symbolic | 100 | 1600 |
| Causal discovery | CA | FA | Binary classification | Symbolic | 100 | 1600 |
| Association | CORR | correlation | Binary classification | Natural | 100 | 1476 |
| Association | EAE | exp-away | Binary classification | Natural | 100 | 168 |
| Intervention | CB | collider-bias | Binary classification | Natural | 100 | 163 |
| Intervention | ATE | ATE-natural | Binary classification | Natural | 100 | 1600 |
| Intervention | ATE | ATE-basic | Probability calculation | Mathematical | 100 | 1600 |
| Intervention | ATE | ATE-hard | Probability calculation | Mathematical | 100 | 1600 |
| Intervention | CDE | CDE-natural | Binary classification | Natural | 100 | 1600 |
| Intervention | CDE | CDE-basic | Probability calculation | Mathematical | 100 | 1600 |
| Intervention | CDE | CDE-hard | Probability calculation | Mathematical | 100 | 1600 |
| Intervention | BAS | backadj | Binary classification | Natural | 100 | 227 |
| Intervention | BAS | max-BAS | Choice selection | Symbolic | 100 | 1600 |
| Intervention | BAS | min-BAS | Choice selection | Symbolic | 100 | 1600 |
| Intervention | BAS | mix-BAS | Choice selection | Symbolic | 100 | 1600 |
| Intervention | FAS | FAS | Choice selection | Symbolic | 100 | 1600 |
| Intervention | IV | CaLM-IV | Choice selection | Symbolic | 100 | 1600 |
| Intervention | CEI | 0.2-UC | Binary classification | Symbolic | 100 | 1600 |
| Intervention | CEI | 0.4-UC | Binary classification | Symbolic | 100 | 1600 |
| Intervention | CEI | 0.6-UC | Binary classification | Symbolic | 100 | 1600 |
| Intervention | CEI | 0.8-UC | Binary classification | Symbolic | 100 | 1600 |
| Counterfactuals | ETT | ETT-natural | Binary classification | Natural | 100 | 1600 |
| Counterfactuals | ETT | ETT-basic | Probability calculation | Mathematical | 100 | 1600 |
| Counterfactuals | ETT | ETT-hard | Probability calculation | Mathematical | 100 | 1600 |
| Counterfactuals | NDE | NDE-natural | Binary classification | Natural | 100 | 1600 |
| Counterfactuals | NDE | NDE-basic | Probability calculation | Mathematical | 100 | 1600 |
| Counterfactuals | NDE | NDE-hard | Probability calculation | Mathematical | 100 | 1600 |
| Counterfactuals | NIE | NIE-natural | Binary classification | Natural | 100 | 1600 |
| Counterfactuals | NIE | NIE-basic | Probability calculation | Mathematical | 100 | 1600 |
| Counterfactuals | NIE | NIE-hard | Probability calculation | Mathematical | 100 | 1600 |
| Counterfactuals | PN | PN-basic | Probability calculation | Mathematical | 100 | 1600 |
| Counterfactuals | PN | PN-hard | Probability calculation | Mathematical | 100 | 1600 |
| Counterfactuals | PS | PS-basic | Probability calculation | Mathematical | 100 | 1600 |
| Counterfactuals | PS | PS-hard | Probability calculation | Mathematical | 100 | 1600 |
| Counterfactuals | AC | causal judgement | Binary classification | Natural | 100 | 187 |
| Counterfactuals | CR | CRASS | Choice selection | Natural | 100 | 274 |
| Counterfactuals | CR | det-counterfactual | Binary classification | Natural | 100 | 1476 |
| Counterfactuals | CEG | E-CARE | Open-ended generation | Natural | 100 | 1000 |
| **Total** | | | | | 4600 | 63167 |

