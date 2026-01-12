## 406-html2text

HTML转换成 MarkDown 格式的工具

[https://pypi.org/project/html2text/](https://pypi.org/project/html2text/ "https://pypi.org/project/html2text/")

html2text is a Python script that converts a page of HTML into clean, easy-to-read plain ASCII text.

Better yet, that ASCII also happens to be valid Markdown (a text-to-HTML format).

`html2text`库可能无法完美转换所有HTML标签。实际测试，普通 div span 转换正常，复杂的代码块和扩展语法等不支持。

```python
import html2text

print(html2text.html2text("<p><strong>Zed's</strong> dead baby, <em>Zed's</em> dead.</p>"))

# **Zed's** dead baby, _Zed's_ dead.
```

复杂案例

```python
import html2text

h = html2text.HTML2Text()

# Ignore converting links from HTML
h.ignore_links = True

print h.handle("<p>Hello, <a href='https://www.google.com/earth/'>world</a>!")
# Hello, world!

# Don't Ignore links anymore, I like links
h.ignore_links = False

print(h.handle("<p>Hello, <a href='https://www.google.com/earth/'>world</a>!"))
# Hello, [world](https://www.google.com/earth/)!
```

详细使用：

[https://github.com/Alir3z4/html2text/blob/master/docs/usage.md](https://github.com/Alir3z4/html2text/blob/master/docs/usage.md "https://github.com/Alir3z4/html2text/blob/master/docs/usage.md")
