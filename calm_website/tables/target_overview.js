target_overview_dict = [{'Index': "task", 'scenario name': 'Pairwise Causal Discovery', 'Level': 'Causal Discovery', 'TaskNum': "4 Tasks", 'Average': 57.1, 'Basic': 56.4, '0-shot IcL': 59.9, '1-shot IcL': 63.4, '3-shot IcL': 65.4, 'EF': 59.8, 'Manual CoT': 50.7, 'Ignore': 52.9, 'Doubt': 52.2, 'top_1_combination': '(GPT-4, EF)', 'top_1_combination_value': 83.0, 'top_1_average_model': 'GPT-4', 'top_1_average': 79.1, 'median': 54.1, 'third_quartile': 68.8},
{'Index': "task", 'scenario name': 'Causal Attribution', 'Level': 'Causal Discovery', 'TaskNum': "2 Tasks", 'Average': 55.8, 'Basic': 57.4, '0-shot IcL': 58.1, '1-shot IcL': 58.4, '3-shot IcL': 55.7, 'EF': 55.6, 'Manual CoT': 55.9, 'Ignore': 54.1, 'Doubt': 53.0, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 94.8, 'top_1_average_model': 'GPT-4', 'top_1_average': 91.8, 'median': 55.9, 'third_quartile': 61.8},
{'Index': "task", 'scenario name': 'Abstract Reasoning', 'Level': 'Causal Discovery', 'TaskNum': "1 Task", 'Average': 52.9, 'Basic': 55.1, '0-shot IcL': 56.6, '1-shot IcL': 56.6, '3-shot IcL': 55.7, 'EF': 56.1, 'Manual CoT': 42.9, 'Ignore': 49.8, 'Doubt': 50.7, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 92.6, 'top_1_average_model': 'GPT-4', 'top_1_average': 88.3, 'median': 53.1, 'third_quartile': 62.6},
{'Index': "task", 'scenario name': 'Event Causality Identification', 'Level': 'Causal Discovery', 'TaskNum': "3 Tasks", 'Average': 48.9, 'Basic': 50.5, '0-shot IcL': 50.3, '1-shot IcL': 53.6, '3-shot IcL': 52.6, 'EF': 50.3, 'Manual CoT': 47.1, 'Ignore': 46.8, 'Doubt': 47.2, 'top_1_combination': '(GPT-4, adversarial doubt)', 'top_1_combination_value': 67.0, 'top_1_average_model': 'GPT-4', 'top_1_average': 65.6, 'median': 51.4, 'third_quartile': 54.9},
{'Index': "task", 'scenario name': 'Correlation', 'Level': 'Association', 'TaskNum': "1 Task", 'Average': 46.0, 'Basic': 45.2, '0-shot IcL': 44.9, '1-shot IcL': 50.9, '3-shot IcL': 51.3, 'EF': 46.1, 'Manual CoT': 43.7, 'Ignore': 43.7, 'Doubt': 44.7, 'top_1_combination': '(Claude2, EF)', 'top_1_combination_value': 68.0, 'top_1_average_model': 'GPT-4', 'top_1_average': 59.1, 'median': 49.9, 'third_quartile': 51.5},
{'Index': "task", 'scenario name': 'Explaining Away Effect', 'Level': 'Association', 'TaskNum': "1 Task", 'Average': 45.5, 'Basic': 45.7, '0-shot IcL': 45.0, '1-shot IcL': 49.6, '3-shot IcL': 51.3, 'EF': 47.5, 'Manual CoT': 38.7, 'Ignore': 43.9, 'Doubt': 44.2, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 90.5, 'top_1_average_model': 'GPT-4', 'top_1_average': 67.9, 'median': 48.8, 'third_quartile': 50.7},

{'Index': "task", 'scenario name': 'Causal Effect Identification', 'Level': 'Intervention', 'TaskNum': "4 Tasks", 'Average': 43.3, 'Basic': 42.3, '0-shot IcL': 43.2, '1-shot IcL': 48.9, '3-shot IcL': 47.7, 'EF': 43.8, 'Manual CoT': 39.4, 'Ignore': 41.3, 'Doubt': 42.3, 'top_1_combination': '(GPT-4, 3-shot IcL)', 'top_1_combination_value': 59.0, 'top_1_average_model': 'GPT-3.5-Turbo', 'top_1_average': 49.9, 'median': 46.6, 'third_quartile': 49.3},
{'Index': "task", 'scenario name': 'Collider Bias', 'Level': 'Intervention', 'TaskNum': "1 Task", 'Average': 42.0, 'Basic': 38.1, '0-shot IcL': 36.1, '1-shot IcL': 47.8, '3-shot IcL': 51.8, 'EF': 37.9, 'Manual CoT': 53.6, 'Ignore': 38.8, 'Doubt': 37.9, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 97.8, 'top_1_average_model': 'GPT-4', 'top_1_average': 62.7, 'median': 43.0, 'third_quartile': 50.6},
{'Index': "task", 'scenario name': 'Backdoor Adjustment Set', 'Level': 'Intervention', 'TaskNum': "4 Tasks", 'Average': 33.1, 'Basic': 29.2, '0-shot IcL': 37.3, '1-shot IcL': 39.1, '3-shot IcL': 41.3, 'EF': 28.3, 'Manual CoT': 37.4, 'Ignore': 27.1, 'Doubt': 26.9, 'top_1_combination': '(GPT-4, 3-shot IcL)', 'top_1_combination_value': 75.1, 'top_1_average_model': 'GPT-4', 'top_1_average': 71.6, 'median': 34.0, 'third_quartile': 40.0},
{'Index': "task", 'scenario name': 'Instrumental Variable', 'Level': 'Intervention', 'TaskNum': "1 Task", 'Average': 30.3, 'Basic': 24.7, '0-shot IcL': 33.1, '1-shot IcL': 36.2, '3-shot IcL': 38.0, 'EF': 26.2, 'Manual CoT': 39.9, 'Ignore': 23.2, 'Doubt': 23.0, 'top_1_combination': '(GPT-4, 3-shot IcL)', 'top_1_combination_value': 78.9, 'top_1_average_model': 'GPT-4', 'top_1_average': 74.8, 'median': 30.7, 'third_quartile': 37.9},
{'Index': "task", 'scenario name': 'Frontdoor Adjustment Set', 'Level': 'Intervention', 'TaskNum': "1 Task", 'Average': 28.7, 'Basic': 25.2, '0-shot IcL': 33.2, '1-shot IcL': 35.9, '3-shot IcL': 38.5, 'EF': 27.3, 'Manual CoT': 25.3, 'Ignore': 24.0, 'Doubt': 24.5, 'top_1_combination': '(GPT-4, 3-shot IcL)', 'top_1_combination_value': 95.2, 'top_1_average_model': 'GPT-4', 'top_1_average': 77.2, 'median': 29.0, 'third_quartile': 35.6},
{'Index': "task", 'scenario name': 'Average Treatment Effect', 'Level': 'Intervention', 'TaskNum': "3 Tasks", 'Average': 19.1, 'Basic': 13.5, '0-shot IcL': 11.6, '1-shot IcL': 16.3, '3-shot IcL': 38.5, 'EF': '-', 'Manual CoT': 35.9, 'Ignore': 12.9, 'Doubt': 12.5, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 92.8, 'top_1_average_model': 'GPT-4', 'top_1_average': 54.8, 'median': 9.4, 'third_quartile': 28.6},
{'Index': "task", 'scenario name': 'Controlled Direct Effect', 'Level': 'Intervention', 'TaskNum': "3 Tasks", 'Average': 17.1, 'Basic': 12.0, '0-shot IcL': 11.0, '1-shot IcL': 16.0, '3-shot IcL': 33.7, 'EF': '-', 'Manual CoT': 32.9, 'Ignore': 11.6, 'Doubt': 11.6, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 90.8, 'top_1_average_model': 'GPT-3.5-Turbo', 'top_1_average': 47.6, 'median': 9.3, 'third_quartile': 24.7},

{'Index': "task", 'scenario name': 'Counterfactual Reasoning', 'Level': 'Counterfactual', 'TaskNum': "2 Tasks", 'Average': 43.8, 'Basic': 42.3, '0-shot IcL': 43.7, '1-shot IcL': 47.8, '3-shot IcL': 48.3, 'EF': 43.0, 'Manual CoT': 49.6, 'Ignore': 40.0, 'Doubt': 39.7, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 83.2, 'top_1_average_model': 'GPT-4', 'top_1_average': 76.9, 'median': 38.8, 'third_quartile': 54.3},
{'Index': "task", 'scenario name': 'Actual Causality', 'Level': 'Counterfactual', 'TaskNum': "1 Task", 'Average': 38.1, 'Basic': 34.8, '0-shot IcL': 41.4, '1-shot IcL': 50.5, '3-shot IcL': 48.6, 'EF': 33.5, 'Manual CoT': 33.6, 'Ignore': 33.3, 'Doubt': 33.8, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 68.2, 'top_1_average_model': 'GPT-4', 'top_1_average': 65.6, 'median': 45.0, 'third_quartile': 51.9},
{'Index': "task", 'scenario name': 'Causal Explanation Generation', 'Level': 'Counterfactual', 'TaskNum': "1 Task", 'Average': 35.7, 'Basic': 38.2, '0-shot IcL': 36.1, '1-shot IcL': 33.6, '3-shot IcL': 32.0, 'EF': 35.0, 'Manual CoT': 36.8, 'Ignore': 34.3, 'Doubt': 39.7, 'top_1_combination': '(Claude2, EF)', 'top_1_combination_value': 63.4, 'top_1_average_model': 'Claude2', 'top_1_average': 59.1, 'median': 35.0, 'third_quartile': 40.8},
{'Index': "task", 'scenario name': 'Effect of the Treatment on the Treated', 'Level': 'Counterfactual', 'TaskNum': "3 Tasks", 'Average': 18.2, 'Basic': 11.6, '0-shot IcL': 10.0, '1-shot IcL': 23.0, '3-shot IcL': 28.4, 'EF': '-', 'Manual CoT': 42.0, 'Ignore': 11.3, 'Doubt': 11.2, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 89.9, 'top_1_average_model': 'GPT-4', 'top_1_average': 40.9, 'median': 12.5, 'third_quartile': 25.2},
{'Index': "task", 'scenario name': 'Natural Direct Effect', 'Level': 'Counterfactual', 'TaskNum': "3 Tasks", 'Average': 17.0, 'Basic': 13.2, '0-shot IcL': 12.1, '1-shot IcL': 21.1, '3-shot IcL': 23.1, 'EF': '-', 'Manual CoT': 32.3, 'Ignore': 12.5, 'Doubt': 12.8, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 80.1, 'top_1_average_model': 'GPT-4', 'top_1_average': 42.6, 'median': 14.0, 'third_quartile': 19.9},
{'Index': "task", 'scenario name': 'Natural Indirect Effect', 'Level': 'Counterfactual', 'TaskNum': "3 Tasks", 'Average': 15.4, 'Basic': 9.4, '0-shot IcL': 8.0, '1-shot IcL': 12.8, '3-shot IcL': 38.7, 'EF': '-', 'Manual CoT': 28.8, 'Ignore': 9.4, 'Doubt': 9.7, 'top_1_combination': '(Koala (13B), 3-shot IcL)', 'top_1_combination_value': 73.3, 'top_1_average_model': 'GPT-3.5-Turbo', 'top_1_average': 43.0, 'median': 6.7, 'third_quartile': 19.0},
{'Index': "task", 'scenario name': 'Probability of Necessity', 'Level': 'Counterfactual', 'TaskNum': "2 Tasks", 'Average': 2.6, 'Basic': 0.9, '0-shot IcL': 0.7, '1-shot IcL': 1.0, '3-shot IcL': 8.1, 'EF': '-', 'Manual CoT': 7.0, 'Ignore': 1.1, 'Doubt': 1.1, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 50.2, 'top_1_average_model': 'GPT-4', 'top_1_average': 14.5, 'median': 0.3, 'third_quartile': 1.6},
{'Index': "task", 'scenario name': 'Probability of Sufficiency', 'Level': 'Counterfactual', 'TaskNum': "2 Tasks", 'Average': 1.5, 'Basic': 0.7, '0-shot IcL': 0.8, '1-shot IcL': 0.3, '3-shot IcL': 0.1, 'EF': '-', 'Manual CoT': 7.7, 'Ignore': 1.0, 'Doubt': 0.9, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 46.8, 'top_1_average_model': 'GPT-4', 'top_1_average': 12.6, 'median': 0.0, 'third_quartile': 0.4},
{'Index': "mode", 'scenario name': 'Natural', 'Level': ' ', 'TaskNum': "20 Tasks", 'Average': 42.6, 'Basic': 24.7, '0-shot IcL': 33.1, '1-shot IcL': 36.2, '3-shot IcL': 38.0, 'EF': 26.2, 'Manual CoT': 39.9, 'Ignore': 23.2, 'Doubt': 23.0, 'top_1_combination': '(GPT-4, 3-shot IcL)', 'top_1_combination_value': 78.9, 'top_1_average_model': 'GPT-4', 'top_1_average': 74.8, 'median': 30.7, 'third_quartile': 37.9},
{'Index': "mode", 'scenario name': 'Symbolic', 'Level': ' ', 'TaskNum': "12 Tasks", 'Average': 40.1, 'Basic': 34.8, '0-shot IcL': 41.4, '1-shot IcL': 50.5, '3-shot IcL': 48.6, 'EF': 33.5, 'Manual CoT': 33.6, 'Ignore': 33.3, 'Doubt': 33.8, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 68.2, 'top_1_average_model': 'GPT-4', 'top_1_average': 65.6, 'median': 45.0, 'third_quartile': 51.9},
{'Index': "mode", 'scenario name': 'Mathematical', 'Level': ' ', 'TaskNum': "14 Tasks", 'Average': 5.9, 'Basic': 38.2, '0-shot IcL': 36.1, '1-shot IcL': 33.6, '3-shot IcL': 32.0, 'EF': 35.0, 'Manual CoT': 36.8, 'Ignore': 34.3, 'Doubt': 39.7, 'top_1_combination': '(Claude2, EF)', 'top_1_combination_value': 63.4, 'top_1_average_model': 'Claude2', 'top_1_average': 59.1, 'median': 35.0, 'third_quartile': 40.8},
{'Index': "language", 'scenario name': 'English', 'Level': ' ', 'TaskNum': "46 Tasks", 'Average': 32.3, 'Basic': 34.8, '0-shot IcL': 41.4, '1-shot IcL': 50.5, '3-shot IcL': 48.6, 'EF': 33.5, 'Manual CoT': 33.6, 'Ignore': 33.3, 'Doubt': 33.8, 'top_1_combination': '(GPT-4, manual CoT)', 'top_1_combination_value': 68.2, 'top_1_average_model': 'GPT-4', 'top_1_average': 65.6, 'median': 45.0, 'third_quartile': 51.9},
{'Index': "language", 'scenario name': 'Chinese', 'Level': ' ', 'TaskNum': "46 Tasks", 'Average': 28.9, 'Basic': 38.2, '0-shot IcL': 36.1, '1-shot IcL': 33.6, '3-shot IcL': 32.0, 'EF': 35.0, 'Manual CoT': 36.8, 'Ignore': 34.3, 'Doubt': 39.7, 'top_1_combination': '(Claude2, EF)', 'top_1_combination_value': 63.4, 'top_1_average_model': 'Claude2', 'top_1_average': 59.1, 'median': 35.0, 'third_quartile': 40.8},
]