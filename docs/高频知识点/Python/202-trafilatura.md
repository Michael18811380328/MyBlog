## 202-trafilatura

* **分类**：网页内容提取工具

* **功能**：从 HTML 页面中提取结构化文本（如文章内容、标题、作者），自动清理广告、导航等无关内容。

* **PyPI**：<https://pypi.org/project/trafilatura/>

* **GitHub**：<https://github.com/adbar/trafilatura>

* **推荐使用**：适合网页爬虫中提取核心内容，效果优于传统正则，推荐使用。

```python
import trafilatura

url = 'https://example.org/article'

downloaded = trafilatura.fetch_url(url)

if downloaded:
    result = trafilatura.extract(downloaded)  # 提取正文
    print(result)
```

​
