## 404-chardet

* **分类**：字符编码检测库（旧版）

* **功能**：检测文本编码，但准确率和性能不如 `charset-normalizer`，已逐步被替代。

* **PyPI**：<https://pypi.org/project/chardet/>

* **GitHub**：<https://github.com/chardet/chardet>

* **推荐使用**：不推荐，建议用 `charset-normalizer` 替代。

```text
import chardet
raw_data = b'\xe4\xb8\xad\xe6\x96\x87'
result = chardet.detect(raw_data)
print(result['encoding'])  # utf-8
```

​
