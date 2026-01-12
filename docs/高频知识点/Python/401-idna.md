## 401-idna

* **功能**：实现 IDNA 标准（将非 ASCII 域名转换为 ASCII 格式），用于处理国际化网址。

* **PyPI**：<https://pypi.org/project/idna/>

* **GitHub**：<https://github.com/kjd/idna>

* **推荐使用**：网络库（如 `requests`）的底层依赖，无需手动使用，但必须存在，推荐。

```text
import idna
encoded = idna.encode('例子.中国')  # 转换为 ASCII
print(encoded.decode())  # xn--fsqu00a.xn--fiqs8s
```

​
