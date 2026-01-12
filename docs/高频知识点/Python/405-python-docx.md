## 405-python-docx

* **功能**：读写 Microsoft Word（`.docx`）文件，可创建、修改文档内容、样式等。

* **PyPI**：<https://pypi.org/project/python-docx/>

* **GitHub**：<https://github.com/python-openxml/python-docx>

* **推荐使用**：推荐，是处理 Word 文档的主流库。

python-docx is a Python library for reading, creating, and updating Microsoft Word 2007+ (.docx) files.

[https://pypi.org/project/python-docx/](https://pypi.org/project/python-docx/ "https://pypi.org/project/python-docx/")

```python
from docx import Document

document = Document()

document.add_paragraph("It was a dark and stormy night.")

# docx.text.paragraph.Paragraph object at 0x10f19e760>

document.save("dark-and-stormy.docx")

document = Document("dark-and-stormy.docx")

document.paragraphs[0].text

# 'It was a dark and stormy night.'
```

​
