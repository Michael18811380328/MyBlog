## 20-greenlet

[https://pypi.org/project/greenlet/](https://pypi.org/project/greenlet/ "https://pypi.org/project/greenlet/")

Greenlet 库是 Python 中的一个轻量级的协程库，用于实现异步编程和并发执行。它的主要作用是：

* **协程**: Greenlet 库提供了一个协程框架，允许开发者编写异步代码。

* **轻量级**: Greenlet 库非常轻量级，相比于其他异步编程框架，它的内存占用和 CPU 消耗都非常低。

* **高性能**: Greenlet 库提供了高性能的协程调度，允许开发者编写高并发的应用程序。

```python
import greenlet

def foo():
    print("foo 开始执行")
    gr2.switch()  # 切换到协程 gr2
    print("foo 继续执行")

def bar():
    print("bar 开始执行")
    gr1.switch()  # 切换到协程 gr1
    print("bar 继续执行")

gr1 = greenlet.greenlet(foo)
gr2 = greenlet.greenlet(bar)

gr1.switch()  # 开始执行协程 gr1
```

在这个示例中，我们定义了两个函数 `foo` 和 `bar`，它们分别代表两个协程。

我们使用 `greenlet.greenlet()` 函数创建了两个协程对象 `gr1` 和 `gr2`。

然后，我们使用 `gr1.switch()` 函数开始执行协程 `gr1`。

在协程 `gr1` 中，我们使用 `gr2.switch()` 函数切换到协程 `gr2`。

在协程 `gr2` 中，我们使用 `gr1.switch()` 函数切换回协程 `gr1`。

这样，我们就实现了两个协程之间的切换。

请注意，Greenlet 库的协程是通过手动切换来实现的，而不是通过事件驱动或线程池来实现的。这意味着开发者需要手动控制协程的切换，这可能会增加代码的复杂性。
