## 414-markdown-it-py

进行 markdown 语法转换，转换成富文本实现

Markdown parser, done right. 100% CommonMark support, extensions, syntax plugins & high speed. Now in Python!

[https://github.com/executablebooks/markdown-it-py](https://github.com/executablebooks/markdown-it-py "https://github.com/executablebooks/markdown-it-py")

```text
pip install markdown-it-py[plugins]
```

```python
from markdown_it import MarkdownIt
from mdit_py_plugins.front_matter import front_matter_plugin
from mdit_py_plugins.footnote import footnote_plugin

md = (
    MarkdownIt('commonmark' ,{'breaks':True,'html':True})
    .use(front_matter_plugin)
    .use(footnote_plugin)
    .enable('table')
)

text = ("""
---
a: 1
---

a | b
- | -
1 | 2

A footnote [^1]

[^1]: some details
""")

tokens = md.parse(text)
html_text = md.render(text)

## To export the html to a file, uncomment the lines below:
# from pathlib import Path
# Path("output.html").write_text(html_text)
```

​
