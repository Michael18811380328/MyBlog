## 602-amzqr

**Python 二维码生成器**

****[https://github.com/x-hw/amazing-qr](https://github.com/x-hw/amazing-qr "https://github.com/x-hw/amazing-qr")

可生成普通二维码、带图片的艺术二维码（黑白与彩色）、动态二维码（黑白与彩色）。

```text
pip install amzqr
```

基础案例：生成一个包含文本 / 链接的普通二维码，保存为图片文件。

```python
from amzqr import amzqr

# 核心参数说明：
# words：二维码包含的内容（文本、网址、手机号等）
# save_name：保存的文件名（默认 qrcode.png）
# save_dir：保存路径（默认当前目录）
# version：二维码版本（1-40，数字越大尺寸越大，默认自动适配）
# level：容错率（L/M/Q/H，默认 H，容错率最高）

# 生成普通二维码（内容为百度网址）
qr = amzqr.run(
    words="https://www.baidu.com",  # 二维码内容
    save_name="normal_qrcode.png",  # 保存文件名
    level='H'  # 最高容错率
)

# 输出结果：返回 (版本, 容错率, 二维码图片路径)
print(f"普通二维码生成完成，路径：{qr[2]}")
```

案例：生成带图片背景的静态艺术二维码（使用某个图片作为背景图片）

```python
from amzqr import amzqr

# 生成带背景图片的二维码
# 关键参数：picture 指定背景图片路径
qr = amzqr.run(
    words="https://www.github.com",  # 二维码内容
    picture="background.jpg",        # 背景图片路径（需提前准备）
    colorized=True,                  # 是否彩色（False 为黑白）
    save_name="art_qrcode.png",      # 保存文件名
    contrast=1.0,                    # 对比度（默认1.0，越大对比越强）
    brightness=1.0                   # 亮度（默认1.0，越大越亮）
)

print(f"艺术二维码生成完成，路径：{qr[2]}")
```

​
