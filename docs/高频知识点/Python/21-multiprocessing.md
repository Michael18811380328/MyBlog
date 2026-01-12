## 21-multiprocessing

[https://docs.python.org/zh-cn/3/library/multiprocessing.html](https://docs.python.org/zh-cn/3/library/multiprocessing.html "https://docs.python.org/zh-cn/3/library/multiprocessing.html")

[multiprocessing](https://docs.python.org/zh-cn/3/library/multiprocessing.html#module-multiprocessing "multiprocessing: Process-based parallelism.") 是一个支持使用与 threading 模块类似的 API 来产生进程的包。 multiprocessing 包同时提供了本地和远程并发操作，通过使用子进程而非线程有效地绕过了 全局解释器锁。 因此，multiprocessing 模块允许程序员充分利用给定机器上的多个处理器。

```python
from multiprocessing import Pool

def f(x):
    return x*x

if __name__ == '__main__':
    with Pool(5) as p:
        print(p.map(f, [1, 2, 3]))
```

​
