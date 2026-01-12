## 415-PyPDF2

* **PyPDF2 功能**：读取、分割、合并 PDF 文件，提取文本等。

* **PyPI**：<https://pypi.org/project/PyPDF2/>

* **GitHub**：<https://github.com/py-pdf/PyPDF2>

* **推荐使用**：推荐，PDF 文档处理常用。

```text
from PyPDF2 import PdfReader
reader = PdfReader("example.pdf")
page = reader.pages[0]
print(page.extract_text())
```

​
