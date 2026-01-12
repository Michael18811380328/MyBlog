## 209-Scrapy

* **功能**：功能强大的网络爬虫框架，支持大规模数据爬取、数据提取、异步请求等。

* **PyPI**：<https://pypi.org/project/Scrapy/>

* **GitHub**：<https://github.com/scrapy/scrapy>

* **推荐使用**：强烈推荐，大型爬虫项目必备。

* **案例**（简单示例，实际需创建 Scrapy 项目）：

```python
# 示例 Spider 代码（需在 Scrapy 项目中）
import scrapy
class ExampleSpider(scrapy.Spider):
    name = 'example'
    start_urls = ['https://example.com']
    def parse(self, response):
        yield {'title': response.css('title::text').get()}
```

​
