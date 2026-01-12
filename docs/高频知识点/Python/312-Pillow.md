## 312-Pillow

* **功能**：Python 图像处理标准库，支持图像的打开、编辑（裁剪、旋转、滤波等）、保存等操作。

* **PyPI**：<https://pypi.org/project/Pillow/>

* **GitHub**：<https://github.com/python-pillow/Pillow>

* **推荐使用**：强烈推荐，图像处理必备。

```text
from PIL import Image

img = Image.open('input.jpg')

img_resized = img.resize((300, 200))

img_resized.save('resized.jpg')
```

​
