## 801-requests

**分类**：HTTP 客户端库（高层封装）

**功能**：简化 HTTP 请求操作，支持 GET/POST、会话保持、文件上传、JSON 解析等，API 简洁易用。

**PyPI**：<https://pypi.org/project/requests/>

**GitHub**：<https://github.com/psf/requests>

**推荐使用**：Python 网络请求的事实标准，几乎所有项目首选，强烈推荐。

```python
import requests

response = requests.get('https://api.github.com')

print(response.status_code)  # 200
print(response.json())  # 解析 JSON 响应
```

​
