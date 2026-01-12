## 19-gevent

[https://pypi.org/project/gevent/](https://pypi.org/project/gevent/ "https://pypi.org/project/gevent/")

Gevent 是一个 Python 库，用于实现异步编程和并发执行。

它的主要功能是提供一个高性能、轻量级的异步 I/O 框架，允许开发者编写高并发的网络应用程序。

Gevent 的主要特点包括：

* **协程（Coroutine）​**: Gevent 使用协程来实现异步编程。协程是一种特殊的函数，可以在执行过程中暂停和恢复执行。

* **异步 I/O**: Gevent 提供了异步 I/O 的支持，允许开发者编写高并发的网络应用程序。

* **轻量级**: Gevent 的实现非常轻量级，相比于其他异步编程框架，它的内存占用和 CPU 消耗都非常低。

使用 Gevent 的基本步骤如下：

1. **安装 Gevent**: 可以使用 pip 安装 Gevent：`pip install gevent`

2. **导入 Gevent**: 在 Python 脚本中导入 Gevent：`import gevent`

3. **定义协程**: 使用 `gevent.spawn()` 函数定义一个协程，协程函数会在后台执行。

4. **使用异步 I/O**: 使用 Gevent 提供的异步 I/O 函数，例如 `gevent.socket`、`gevent.http` 等。

```python
import gevent

def my_function():
    print("函数开始执行")
    gevent.sleep(1)  # 模拟 I/O 操作
    print("函数执行完成")

# 创建函数
function = gevent.spawn(my_function)

# 等待函数执行完成
gevent.joinall([function])
```

在这个示例中，我们定义了一个函数 `my_function`，它会在后台执行。我们使用 `gevent.spawn()` 函数创建函数，并使用 `gevent.joinall()` 函数等待函数执行完成。
