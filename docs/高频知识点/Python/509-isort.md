## 509-isort

`isort` 是专门用来自动整理 Python 导入语句的工具，能让导入顺序规范统一，是开发中提升代码整洁度的常用工具。

```text
pip install isort
```

使用

```text
# 整理单个文件
isort your_file.py

# 整理当前目录及子目录的所有 Python 文件
isort .

# 整理指定目录
isort your_project/

# 检查当前目录所有文件，只输出不符合规范的文件
isort --check .
```

自定义配置

新建 pyproject.toml

```python
[tool.isort]

# 导入分组顺序（可自定义）：标准库 → 第三方库 → 本地项目导入
sections = ["STDLIB", "THIRDPARTY", "FIRSTPARTY"]

# 每行导入的最大长度（超过则自动换行）
line_length = 120

# 导入语句结尾是否加逗号（PEP8 规范）
trailing_comma = true

# 合并相同模块的导入（如 from os import path; from os import walk → from os import path, walk）
combine_as_imports = true

# 忽略特定文件/目录
skip_glob = ["venv/*", "build/*", "*.pyc"]
```

和 black 配合使用

```text
# isort 整理导入后，black 再格式化代码
isort . && black .
```

​
