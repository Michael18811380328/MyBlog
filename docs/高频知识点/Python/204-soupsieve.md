## 204-soupsieve

* **分类**：CSS 选择器库

* **功能**：为 `BeautifulSoup` 提供 CSS 选择器支持，允许用类似 CSS 的语法定位 HTML 元素。

* **PyPI**：<https://pypi.org/project/soupsieve/>

* **GitHub**：<https://github.com/facelessuser/soupsieve>

* **推荐使用**：`BeautifulSoup` 的依赖库，用于解析 HTML 时非常方便，推荐。

​

```python
from bs4 import BeautifulSoup

import soupsieve as sv

html = '<div class="content">Hello</div>'

soup = BeautifulSoup(html, 'html.parser')

# 使用 CSS 选择器定位
element = sv.select_one('.content', soup)

print(element.text)  # Hello
```

​
