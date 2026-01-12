## 314-Pyglet

* **分类**：GUI 与游戏开发（图形、多媒体处理）

* **基本功能介绍**：Pyglet 是一个纯 Python 的跨平台库，用于开发游戏和多媒体应用程序。它可以处理窗口创建、OpenGL 图形渲染、音频播放、键盘和鼠标输入等，无需依赖其他外部库（如 PyGame 有时需要 SDL 支持），对 OpenGL 的封装较为直接，适合需要底层图形控制或轻量级多媒体开发的场景。

* **PyPI 官方网站**：<https://pypi.org/project/pyglet/>

* **GitHub 链接**：<https://github.com/pyglet/pyglet>

* **是否推荐使用**：推荐。如果是开发 2D/3D 游戏、多媒体演示程序，或者需要直接使用 OpenGL 进行图形编程，Pyglet 是一个不错的选择，它轻量且 API 简洁，文档也比较完善。

```python
import pyglet

# 创建窗口
window = pyglet.window.Window(width=640, height=480, caption="Pyglet Demo")

# 加载图片
image = pyglet.resource.image("example.png")  # 需确保有 example.png 文件在资源路径

@window.event
def on_draw():
    window.clear()
    # 绘制图片
    image.blit(0, 0)

# 运行应用
pyglet.app.run()
```

上述代码创建了一个窗口，加载并在窗口中绘制了一张图片。`@window.event` 装饰器用于注册事件处理函数，`on_draw` 函数在窗口需要重绘时被调用。`pyglet.app.run()` 启动应用的事件循环，处理用户输入、窗口更新等操作。

复杂案例，创建一个 MC 游戏

Simple Minecraft-inspired program using Python and Pyglet

<https://github.com/fogleman/Minecraft>

<https://blog.csdn.net/Python_old_man/article/details/121198061>
