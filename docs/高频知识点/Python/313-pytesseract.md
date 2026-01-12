## 313-pytesseract

* **功能**：封装 Google Tesseract OCR 引擎，用于从图像中识别文本。

* **PyPI**：<https://pypi.org/project/pytesseract/>

* **GitHub**：<https://github.com/madmaze/pytesseract>

* **推荐使用**：推荐，开源 OCR 常用方案。

```text
from PIL import Image

import pytesseract

img = Image.open('text_image.jpg')
text = pytesseract.image_to_string(img)
print(text)
```

​
