import importlib

def load_model(model_name, model_args):
    """
    Loads the specified model and returns its context and query function.

    Args:
        model_name (str): The name of the model to load.
        model_args (dict): Arguments required to initialize the model.

    Returns:
        tuple: A tuple containing the model context and query function.
    """
    model_api = importlib.import_module(f"models.model_apis.{model_name}_api")
    model_context = model_api.startup(**model_args)
    model_query_func = model_api.query
    return model_context, model_query_func
