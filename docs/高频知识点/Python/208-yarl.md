## 208-yarl

* **功能**：提供 URL 的解析、构建等操作，支持 URL 的规范化等。

* **PyPI**：<https://pypi.org/project/yarl/>

* **GitHub**：<https://github.com/aio-libs/yarl>

* **推荐使用**：推荐，URL 处理更专业。

```python
from yarl import URL
url = URL('https://example.com/path?query=1')
print(url.host)  # example.com
print(url.with_query(query='2'))  # https://example.com/path?query=2
```

​
