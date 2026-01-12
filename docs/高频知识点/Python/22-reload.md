## 22-reload

reload 内置模块

作用：重新载入之前载入的模块

[https://docs.python.org/3/library/importlib.html#importlib.reload](https://docs.python.org/3/library/importlib.html#importlib.reload "https://docs.python.org/3/library/importlib.html#importlib.reload")

参考链接：<https://www.runoob.com/python/python-func-reload.html>

在 Python2.x 版本中 **reload()​** 是内置函数，可以直接使用，参见 [Python2.x reload() 函数](https://www.runoob.com/python/python-func-reload.html)。

在 **Python2.x \~ Python3.3** 版本移到 imp 包中(Python2.x 也可以导入 imp 包使用)。

Python3.4 之后到版本移到了 importlib 包中，实际案例

```python
# 重新载入 sys 模块
import sys
import importlib
importlib.reload(sys)
```

为什么会重载模块？

Python 模块重载（通常通过 `importlib.reload()` 函数实现）的需求可能来自几个不同的场景：

1. **开发过程中的调试**：在开发过程中，经常需要修改模块的代码并立即看到修改后的效果。通过重载模块，你可以避免每次修改后都重新启动整个Python解释器或应用程序。

2. **动态配置**：在某些情况下，你可能希望根据运行时条件动态地更改模块的行为。虽然这通常可以通过配置文件、环境变量或类的设计来实现，但模块重载提供了一种更直接的方法来更改模块中的代码。

3. **插件系统**：如果你的应用程序支持插件，并且这些插件是以Python模块的形式提供的，那么你可能需要在运行时加载、卸载和重新加载这些插件。模块重载在这种情况下可能很有用。

4. **交互式环境**：在Jupyter notebook、IDLE等交互式Python环境中，你可能需要在不退出环境的情况下修改和测试代码。模块重载允许你在这些环境中重新加载模块，而无需重启整个环境。

5. **热更新**：虽然这在Python中不常见，但在某些情况下，你可能希望在不中断服务的情况下更新正在运行的代码。虽然这通常涉及到更复杂的技术（如代码热替换或进程间通信），但模块重载可能是这种策略的一部分。

然而，需要注意的是，过度依赖模块重载可能会导致代码难以理解和维护。每次你使用 `importlib.reload()` 时，都应该确保你理解其后果，并考虑是否有更优雅、更可维护的解决方案。

另外，Python 的导入系统，并不是设计来支持频繁的模块重载的。因此，在某些情况下，重载模块可能会导致意外的副作用，如名称空间污染、状态不一致等。因此，在使用模块重载时应该小心。
