import logging
import os

def create_adversarial_info(prompt_style):
    """
    Creates an informational message about the adversarial prompting style.

    Args:
        prompt_style (str): The style of adversarial prompting.

    Returns:
        str: The informational message corresponding to the specified prompt style.
    """
    info_map = {
        "adversarial-ignore": "\nAdversarial Prompting - Ignore & response:\n",
        "adversarial-doubt": "\nAdversarial Prompting - Doubt & response:\n",
        "adversarial-ignore-CN": "\n对抗性提示 - 忽略 & 模型答复:\n",
        "adversarial-doubt-CN": "\n对抗性提示 - 质疑 & 模型答复:\n"
    }
    
    info = info_map.get(prompt_style,"")
    
    return f"{info}"   

def get_logger(target_file, is_file=True, is_console=True,level=logging.DEBUG, mode="a+"):
    """
    Creates a logger and configures it to log messages to a file and/or console.

    Args:
        target_file (str): The file path where logs will be written.
        is_file (bool): Whether to log messages to a file. Default is True.
        is_console (bool): Whether to log messages to the console. Default is True.
        level (int): The logging level. Default is logging.DEBUG.
        mode (str): The file mode for opening the log file. Default is "a+".

    Returns:
        logging.Logger: The configured logger instance.
    """
    logger = logging.getLogger(target_file)
    logger.setLevel(level=level)
    formatter = logging.Formatter('[%(asctime)s - %(name)s - %(levelname)s] %(message)s')
    if is_file:
        os.makedirs(os.path.dirname(target_file), exist_ok=True)
        handler = logging.FileHandler(target_file, mode=mode, encoding="UTF-8")
        handler.setLevel(level)
        handler.setFormatter(formatter)
        logger.addHandler(handler)
    if is_console:
        console = logging.StreamHandler()
        console.setLevel(level)
        console.setFormatter(formatter)
        logger.addHandler(console)
    return logger