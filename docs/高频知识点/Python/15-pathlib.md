## 15-pathlib

**库**：`pathlib`（Python 3.4+ 内置，若需第三方增强可考虑 `pyfilesystem2`）

* **功能**：`pathlib` 提供面向对象的文件系统路径操作，简洁直观；`pyfilesystem2` 则支持多种文件系统（本地、FTP、S3 等）的统一操作接口。这里以 `pathlib` 为例（内置，使用广泛）。

* **PyPI**：（`pathlib` 内置，`pyfilesystem2` 为 <https://pypi.org/project/pyfilesystem2/>）

* **GitHub**：（`pyfilesystem2` 为 <https://github.com/PyFilesystem/pyfilesystem2>）

* **推荐使用**：`pathlib` 推荐，`pyfilesystem2` 按需推荐。

* **案例**（`pathlib`）：

​

```text
from pathlib import Path
p = Path('.')
print(list(p.glob('*.py')))  # 列出当前目录下所有 .py 文件
```

​
