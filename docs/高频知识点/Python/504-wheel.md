## 504-wheel

* **功能**：用于创建和安装 Python 二进制包（`.whl` 文件），相比源码包可加速安装过程，避免编译步骤。

* **PyPI**：<https://pypi.org/project/wheel/>

* **GitHub**：<https://github.com/pypa/wheel>

* **推荐使用**：是 Python 包分发的标准格式，强烈推荐用于发布和安装包。

```text
# 创建 wheel 包
pip wheel --wheel-dir=./wheels your-package

# 安装 wheel 包
pip install ./wheels/your-package-1.0.0-py3-none-any.whl
```

​
