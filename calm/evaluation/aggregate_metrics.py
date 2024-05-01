from evaluation.element_properties.model_info import limited_model_list
def eval_understandability(third_quartile, median, random_guess):
    if third_quartile < random_guess:
        understanding = "very hard"
    elif median < random_guess:
        understanding = "hard"
    elif median >= random_guess:
        understanding = "easy"
    else:
        raise ValueError("The understanding is not defined")
    
    return understanding

def eval_solvability(max_value, max_average_value, third_max_average_value, random_guess=0.0):
    if max_value < random_guess:
        solvability = "unsolvable"
    elif max_value >= random_guess and max_value < 80:
        solvability = "challenging"
    elif max_value >= random_guess and  max_value >= 80 and max_average_value <70:
        solvability = "potentially solvable"
    elif max_value >= random_guess and  max_value >= 80 and max_average_value >=70 and third_max_average_value <70:
        solvability = "solvable"
    elif max_value >= random_guess and  max_value >= 80 and max_average_value >=70 and third_max_average_value >=70:
        solvability = "well-solved"
    else:
        raise ValueError("The solvable is not defined")
    
    return solvability

def eval_open_limited_gap(top_5_average_model):
    count_limited = sum([1 for i in top_5_average_model if i in limited_model_list])
    if count_limited <= 3:
        gap = "small"
    elif count_limited == 4:
        gap = "moderate"
    elif count_limited == 5:
        gap = "large"
    else:
        raise ValueError("The gap is not defined")
    return gap