## 309-urllib3

* **分类**：HTTP 客户端库

* **功能**：提供线程安全的 HTTP 连接池、重试机制、SSL 验证等高级功能，是 `requests` 等库的底层依赖。

* **PyPI**：<https://pypi.org/project/urllib3/>

* **GitHub**：<https://github.com/urllib3/urllib3>

* **推荐使用**：适合需要底层 HTTP 控制的场景，日常开发更推荐 `requests`（基于它封装）。

```python
import urllib3
http = urllib3.PoolManager()
response = http.request('GET', 'https://httpbin.org/get')
print(response.status)  # 200
print(response.data.decode('utf-8'))  # 响应内容
```

​
