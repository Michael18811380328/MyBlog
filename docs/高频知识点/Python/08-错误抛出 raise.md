## 08-错误抛出 raise

> [https://docs.python.org/zh-cn/3.10/reference/simple\_stmts.html#the-raise-statement](https://docs.python.org/zh-cn/3.10/reference/simple_stmts.html#the-raise-statement "https://docs.python.org/zh-cn/3.10/reference/simple_stmts.html#the-raise-statement")
>
> `raise` 语句用于抛出异常，异常是指程序执行过程中出现的错误或异常情况。

raise 处理错误信息，类似 JS 中的 throw，可以主动抛出一个错误（可以定义错误的类型和信息）

[https://www.runoob.com/python/python-exceptions.html](https://www.runoob.com/python/python-exceptions.html "https://www.runoob.com/python/python-exceptions.html")

[https://blog.csdn.net/weixin\_45353453/article/details/120412064](https://blog.csdn.net/weixin_45353453/article/details/120412064 "https://blog.csdn.net/weixin_45353453/article/details/120412064")

```python
def divideNum(num):
    try:
        100 / num
    except Exception as res:
        print("finish")
        print(res)

        raise ZeroDivisionError

        print("----can not print this code-----")
    else:
        print("no error")

divideNum(100)
```

​
