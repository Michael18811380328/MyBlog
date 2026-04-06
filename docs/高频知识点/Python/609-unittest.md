## 609-unittest

[https://docs.python.org/zh-cn/3/library/unittest.html](https://docs.python.org/zh-cn/3/library/unittest.html "https://docs.python.org/zh-cn/3/library/unittest.html")

unittest 是 python 内置的的单元测试框架

#### 简介

unittest原名为PyUnit，是由java的JUnit衍生而来。对于单元测试，需要设置预先条件，对比预期结果和实际结果

整体结构：unittest库提供了test\_cases, test\_fixtures, test\_suites, test\_runner

* test\_case：通过继承TestCase类，我们可以创建一个test，或者一组tests

* test\_fixtures： setup + test\_case + teardown结构

* test\_suites： 测试套件

* test\_runner: 测试运行

其他与unittest类似的单元测试库: nose, pytest

#### 简单示例

```python
import unittest
from math_func import *

class TestMathFunc(unittest.TestCase):
    def test_add(self):
        self.assertEqual(3, add(1, 2))

    def test_minus(self):
        self.assertEqual(10, minus(20, 10))

    def test_multi(self):
        self.assertEqual(4, multi(2, 2))

    def test_divide(self):
        self.assertEqual(3, divide(7, 2))

if __name__ == "__main__":
    unittest.main(verbosity=2)
```

#### 命令行

从命令行中可以运行单元测试的模块，类，甚至单独的测试方法

> 测试单个测试类
> python -m unittest test\_module

```python
# python -m unittest -v test_math_func.TestMathFunc
test_add (test_math_func.TestMathFunc) ... ok
test_divide (test_math_func.TestMathFunc) ... ok
test_minus (test_math_func.TestMathFunc) ... ok
test_multi (test_math_func.TestMathFunc) ... ok

----------------------------------------------------------------------
Ran 4 tests in 0.000s
OK
```

> 测试多个测试类
> python -m unittest test\_module.test\_class test\_module2.test\_class2

```python
# python -m unittest -v test_math_func test_math_func2
test_add (test_math_func.TestMathFunc) ... ok
test_divide (test_math_func.TestMathFunc) ... ok
test_minus (test_math_func.TestMathFunc) ... ok
test_multi (test_math_func.TestMathFunc) ... ok
test_add (test_math_func2.TestMathFunc2) ... ok
test_divide (test_math_func2.TestMathFunc2) ... ok
test_minus (test_math_func2.TestMathFunc2) ... ok
test_multi (test_math_func2.TestMathFunc2) ... ok

----------------------------------------------------------------------
Ran 8 tests in 0.001s

OK 
```

> 显示更详细的测试结果的说明使用\[-v]：

```
python -m unittest -v test_module
```

查看所有的命令行选项使用命令

```
python -m unittest -h
```

#### 常用断言方法

> unittest库提供了很多实用方法来检测程序运行的结果和预期, 包括三种类型的方法，每一种都覆盖了典型的类型，比如：

* 检查值相等

* 逻辑比较

* 异常

> 如果给定的assertion通过了，那么测试会执行下一行代码。如果给定的assertion没有通过，测试会暂停并且生成错误信息。unittest库提供所有标准的xUnit assert方法。下面列出较重要方法的一部分：

#### 检测元素是否(不)相等

```
# 检测 a == b
assertEqual(a,b [,msg]):

# 常用语检测元素属性等
assertEqual(element.text, "10")

# 检测 a! == b
assertNotEqual(a,b [,smg]):
```

#### 检测表达式是否为True或者False

```
# 检测bool(x) is True
assertTrue(x [,msg])

# 检测某个元素是否在页面上
assertTrue(element.is_dispalyed())
```

#### 检测异常

```
assertRaises(exc, fun, *args, **kwds)
assertRaiseRegexp(exc, r, fun, *args, **kwds)
最有可能使用这些方法的是NoSuchElementFoundexception
```

#### 检测数字

```
先四舍五入到指定的小数位数后再进行比较

# 检测round(a-b,7)==0
assertAlmostEqual(a, b) 

# 检测round(a-b,7)!=0
assertNotAlmostEqual(a, b) 
```

#### 逻辑运算

```
# 检测a > b
assertGreater(a, b) 

# 检测a >= b
assertGreaterEqual(a ,b) 

#检测 a < b
assertLess(a, b) 

# 检测 a <= b
assertLessEqual(a, b) 
```

​

#### 检测字符串

```
# 检测string
assertMultiLineEqual(a, b) 
```

#### 检测lists之间是否相等

```
# 检测lists
assertListEqual(a, b) 
```

​
