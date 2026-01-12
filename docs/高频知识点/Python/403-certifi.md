## 403-certifi

* **分类**：CA 证书集合库

* **功能**：包含 Mozilla 维护的根证书集合，用于 HTTPS 连接时验证 SSL 证书合法性。

* **PyPI**：<https://pypi.org/project/certifi/>

* **GitHub**：<https://github.com/certifi/python-certifi>

* **推荐使用**：网络库（如 `requests`、`urllib3`）的必需依赖，自动生效，推荐。

通常无需手动调用，`requests` 会自动使用：

```text
import requests
requests.get('https://https://www.baidu.com')  # 自动验证 SSL 证书
```

​
