## 505-setuptools

* **功能**：用于构建、打包和分发 Python 项目，支持自动处理依赖、生成可执行脚本等，是 `distutils` 的增强版。

* **PyPI**：<https://pypi.org/project/setuptools/>

* **GitHub**：<https://github.com/pypa/setuptools>

* **推荐使用**：Python 项目打包的必备工具，几乎所有项目都依赖它，强烈推荐。

​

在项目根目录创建 `setup.py`：

```text
from setuptools import setup, find_packages
setup(
    name="myproject",
    version="1.0",
    packages=find_packages(),
    install_requires=["requests"],
)
```

构建包：`python setup.py sdist bdist_wheel`
