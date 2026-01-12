## 402-charset-normalizer

* **分类**：字符编码检测库

* **功能**：自动检测文本的字符编码（如 UTF-8、GBK），替代旧版 `chardet`，准确率更高。

* **PyPI**：<https://pypi.org/project/charset-normalizer/>

* **GitHub**：<https://github.com/Ousret/charset-normalizer>

* **推荐使用**：比 `chardet` 更优，是 `requests` 等库的默认依赖，推荐使用。

```text
from charset_normalizer import from_bytes
raw_data = b'\xe4\xb8\xad\xe6\x96\x87'  # UTF-8 编码的“中文”
result = from_bytes(raw_data).best()
print(result.encoding)  # utf-8
```

​
