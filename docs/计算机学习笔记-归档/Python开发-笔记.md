# Python开发
### 课程介绍
[https://www.bilibili.com/video/BV1wD4y1o7AS/](https://www.bilibili.com/video/BV1wD4y1o7AS/ "https://www.bilibili.com/video/BV1wD4y1o7AS/")

本课程内容基础，老师讲的比较慢

​

学习 Python 是一个循序渐进的过程，以下是一些关键知识点和学习路径，帮助你从入门到进阶：

##### 1. 基础语法

* 变量与数据类型：基本数据类型（整数、浮点数、字符串、布尔值等）以及变量的定义和使用。

* 运算符：算术运算符、比较运算符、逻辑运算符等。

* 输入与输出：input() 和 print() 函数的使用。

* 注释：单行注释 (#) 和多行注释 (''' 或 """)。

##### 2. 控制结构

* 条件语句：if、elif、else 的使用。

* 循环语句：for 循环和 while 循环，以及 break 和 continue 的使用。

##### 3. 数据结构

* 列表（List）：列表的创建、访问、修改、遍历以及常用方法（如 append()、remove()、sort() 等）。

* 元组（Tuple）：元组的创建和不可变性。

* 字典（Dictionary）：字典的创建、访问、修改以及常用方法（如 keys()、values()、items() 等）。

* 集合（Set）：集合的创建、操作（如并集、交集、差集等）。

##### 4. 函数

* 函数的定义与调用：使用 def 关键字定义函数，理解参数和返回值。

* 局部变量与全局变量：理解变量的作用域。

* Lambda 表达式：匿名函数的定义与使用。

##### 5. 模块与包

* 模块的导入：使用 import 导入标准库或自定义模块。

* 常用标准库：如 math、random、datetime 等。

* 包的创建与使用：理解包的层次结构，如何创建和导入包。

##### 6. 文件操作

* 文件的读写：使用 open() 函数打开文件，read()、write() 等方法进行文件操作。

* 文件路径处理：使用 os 和 os.path 模块处理文件路径。

##### 7. 异常处理

* try-except 语句：捕获和处理异常。

* 自定义异常：通过继承 Exception 类创建自定义异常。

##### 8. 面向对象编程（OOP）

* 类与对象：理解类与对象的概念，如何定义类和创建对象。

* 属性与方法：实例属性、类属性、实例方法、类方法、静态方法。

* 继承与多态：理解继承、方法重写和多态的概念。

##### 9. 高级特性

* 生成器与迭代器：理解 yield 关键字和迭代器协议。

* 装饰器：理解装饰器的概念和使用场景。

* 上下文管理器：使用 with 语句管理资源。

##### 10. 常用库与框架

* 数据处理：NumPy、Pandas。

* 数据可视化 plt


### 0.前言相关介绍
第一章 基础环境搭建

重要性：Python 发展迅速，已经进入计算机二级和高中课程中。

作用：整合文件（excel）爬虫，抠图，回复邮件等

本课程是 Python 基础语法和全栈。


### 1.Python解释器的安装和使用
官网上下载最新版本并安装，Windows 系统注意环境变量


### 2.PyCharm的安装和使用
Pycharm 有专业版和社区版（专业版下载链接在页面上面，社区版下载链接在下面）

学习者安装了社区版开发环境即可

新建项目会自动创建虚拟环境

> 安装过程出错：
>
> AttributeError: module 'virtualenv.create.via\_global\_ref.builtin.cpython.mac\_os' has no attribute 'CPython2macOsFramework'
>
> 原因：本地环境已经安装了多个 python3版本，python3.9 和 python3.12 版本，virtualenv 库出错
>
> 解决：卸载 3.9 版本，保留3.12 版本，然后重新创建项目

​


### 3.程序设计语言的分类
第二章 本章目标

* 了解什么是计算机程序

* 了解什么是编程语言

* 了解编程语言的分类

* 了解静态语言与脚本语言的区别

* 掌握IPO程序编写方法

* 熟练应用输出函数print与输入函数input

* 掌握Python中的注释与缩进




### 4.Python语言的简介与开发工具
应用领域

* web 开发：Django Flask

* 数据分析：pandas，numpy，matplotlib

* 机器学习人工智能：pyTorch

* 爬虫：request bs4

* 游戏开发

* 测试运维 Selenium

​


### 5.IPO编程方式
Input-process-output

IPO 编程方式


### 6.print函数的使用
#### print 基本语法

```python
print(value1, value2, value3, sep='&', end = '\n', file = None)
```

sep 表示不同值的分隔符，默认是一个空格

end 表示输入完结束符，默认是一个回车

file 表示输出的文件，默认是 None

```python
# 注意需要打开文件，写入，然后关闭文件
fp = open('./note.txt', 'w')
print('hello', file = fp)
fp.close()

# BUG: 不能直接写入到文件路径中
print('hello', file = './note.txt')
```

#### 字符串和编码

```python
ord('a') # 获取a的Unicode

chr(12345) # 获取12345对应的字符

print(chr(12345), ord('a'), sep = ' & ', end = '\n\n')
```

​


### 7.input函数的使用
input 可以获取键盘输入的内容，返回值是字符串

print 的参数，需要字符串连接

```python
name = input()
print('My name is' + name)
```

对输入输出变量类型进行转换，不能直接拼接

```python
age = int(input())
print('My age is' + str(age))
```

​


### 8.Python中的注释
单行注释，多行注释

中文文档声明注释

```text
# coding=utf-8

# coding=gbk
```

其他格式还有 gbk 等


### 9.Python中的缩进
严格缩进（通常4格），表示逻辑和层级


### 10.章节总结和习题
总结：

程序设计语言又称为编程语言

计算机程序是使用编程语言组织起来的一组计算机指令

计算机指令是指挥机器工作的指示和命令

编程语言可分为机器语言、汇编语言和高级语言

采用编译方式执行的语言称静态语言

采用解释方式执行的语言称为脚本语言

IPO指的是输入、 处理和输出

print 完整的语法格式为 : print(value.,sep= ,end= 'An' ,file=None)

输入函数 input 的语法格式为: variable=input( “提示文字 )

Python中的注释可分为单行注释、多行注释和中文声明注释

Python语言采用严格的“缩进”来表示程序逻辑

​

​


### 11.保留字和标识符
本章目标

掌握Python中的保留字与标识符

理解Python中变量的定义及使用

掌握Python中基本数据类型

掌握数据类型之间的相互转换

掌握eval()函数的使用

了解不同的进制数

掌握Python中常用的运算符及优先级

\---

保留字和标识符（变量名）

保留字：Python 对大小写敏感，True 是保留字，true 不是保留字，但是不适宜做变量名。常用的保留字都类似35个。

```python
# 语法上没问题，但是语义上不建议这样写
true = 1
```

内置库包含了关键字列表

```python
import keyword

print(keyword.kwlist)
print(len(keyword.kwlist))
```

变量命名强制要求（必须遵守）

```text
可以是字符 (英文、中文) 、下划线_, 和数字，并且第一个字符不能是数字

不能使用Python中的保留字

标识符严格区分大小写

以下划线开头的标识符有特殊意义，一般应避免使用相似的标识符

允许使用中文作为标识符，但不建议使用
```

Python标识符的命名规范(变量命名规范)，这部分多看，日常使用遵守

```text
＞ 模块名尽量短小，并且全部使用小写字母，可以使用下划线分隔多个字母。例如：grame_main

＞ 包名尽量短小，并且全部使用小写字母，不推荐使用下划线。例如：com.abpython，不推荐使用com_abpython

> 类名采用单词首字母大写形式（Pascal风格）。例如：MyClass

＞ 模块内部的类采用““+Pascal 风格的类名组成，例如：在MyClass中的内部类_InnerMyClass

＞ 函数、类的属性和方法的命名，全部使用小写字母，多个字母之间使用下划线分隔

> 常量命名时，采用全部大写字母，可以使用下划线

> 使用单下划线“——”开头的模块变量或函数是受保护的，在使用“from xxx import *” 语句从模块中导入时，这些模块变量或函数不能被导入  

> 使用双下划线“__” 开头的实例变量或方法，是类私有的

> 以双下划线开头和结尾的是Python的专用标识，例如: _init_(表示初始化函数）
```

​


### 12.变量与常量
变量

python 中，变量的数据类型可以变化，使用 type() 函数查看变量的数据类型。

```python
name = 'Mike'
name = 20
type(name)
```

类型结果

```text
<class 'str'> 字符串
<class 'int'> 整数
<class 'float'> 浮点数
<class 'complex'> 复数
<class 'dict'> {} 字典
<class 'list'> [] 列表
```

允许多个变量指向一个值（一般不会这样写），内存地址相同

```python
a = b = c = 100
```

可以使用 id() 函数查看变量的内存地址（和对象的 id 无关）

```python
id(a) == id(b)
```

变量名的原则：不能用保留字，应该有意义，慎重使用 I O 做变量名（容易和 0 1 混淆）

常量：默认大写+下划线命名，约定俗成不能修改（实际也能修改）

```python
HELP_LINK = 'https://www.baidu.com'

# 强烈不建议更改常量
HELP_LINK = 123
```

​


### 13.数值类型
整数：不同进制表示，0B 0O, 0X

浮点数: 运算失真（0.1 + 0.2 ！= 0.3），临时可以用 round 函数处理（保留几位精度）

```text
round(0.1 + 0.2, 1)
```

复数：实数部分+虚数部分 123 + 456j， 通过 real imag 属性获取实部和虚部

```python
a = 123 + 456j
a.real
a.imag
```

科学计数法：E

```text
a = 1.001E5
```

​


### 14.字符串类型
#### 字符串的表示

单行字符串，通常使用单引号双引号；多行字符串，通常使用三对引号。

```python
a = 'test'
b = "test"
c = """
this is test string
this is test2 string
"""
```

一个字符串内部表示特殊字符，使用转义符号

```text
\n 换行符
\t 制表符
\"
\'
\\
```

如果字符串前面加上 r 或者 R，内部的转移符号失效（通常不使用）

```python
a = r"abc\n\n"
```

#### 字符串的索引

可以正向索引，从0开始；可以反向索引，从 -1 开始。例如一个长度是10的字符串，0\~9， -10\~-1 都可以表示

```python
a = 'helloBlog'
b = a[0]
c = a[-2]
```

#### 字符串的切片

```python
a = 'helloBlog'
b = a[0:3] # 前开后闭，结果是 hel
c = a[-9:-6] # 效果类似，通常不会这样使用
d = a[2:] # 缺少参数，选择默认值，从开始或者结尾进行截取
e = a[:3]
```

#### 字符串的操作

连接、重复、判断是否包含

```python
a + b # combine two string into one
a * 10
10 * a # repeat string a for 10 times
a in b # check a is substring of b, same as JS b.includes(a), return True or False
```

​


### 15.布尔类型
布尔值 True False

如果直接进行加法运算，转换成 1 和 0 进行运算

使用 bool 函数可以把其他类型变量转换成布尔值，少数的结果是 False

```text
bool(False)

bool(None)

bool(0)

bool(0.0)

空序列（空字符串，空元组，空对象，空列表，空集合）

自定义对象的实例，对象的 __bool__() 函数返回 False，或者 __len__() == 0
```

​


### 16.类型转换函数
类型转换：

* 显式转换（函数）

* 隐式转换（加号）

```python
int()
float()
str()

chr(100) # 整数转换成字符串

# 进制转换
hex(100) # 整数转换成十六进制
oct(100) # 整数转换成八进制
bin(100) # 整数转换成二进制
```

常见的是 int str 函数转换，就是把字符串和数字互相转换

int 将字符串转换成整数，只保留整数，不会四舍五入，例如 3.1 3.9 都是 3

**如果参数不满足转换条件，可能出错，需要注意**

（这里和 JS 区别，JS 不会报错，结果可能舍弃字符串或者是 NaN）

```python
try:
    int('123a')
    int('3.1415')
```

​


### 17.eval函数
eval 函数是内置函数，参数类型是字符串，把字符串的引号去掉，然后直接作为 python 语句进行运行

```python
print(eval('3 + 1.5')) # 4.5
```

如果是用户输入，那么是很危险的行为，实际使用很少


### 18.算术运算符
运算符和其他语言类似，注意有除法（有小数）和整除（没有小数）

```python
10 / 3 # 3.333
10 // 3 # 3
```

如果除数是0会报错

运算优先级：幂运算 > 乘除 > 加减


### 19.赋值运算符
1\. 基本赋值运算符 (=)

2\. 复合赋值运算符(+=, -=)

3\. 多重赋值

```python
a, b, c = 1, 2, 3  # a = 1, b = 2, c = 3
```

4\. 链式赋值

```python
x = y = z = 10  # x, y, z 都赋值为 10
```

5\. 解包赋值

```python
a, b, c = [1, 2, 3]  # a = 1, b = 2, c = 3
```

6\. 交换变量值

```python
x, y = 10, 20
x, y = y, x  # 交换后 x = 20, y = 10
```

7\. 海象运算符 :=

海象运算符（Walrus Operator）允许在表达式中赋值，通常用于简化代码。

海象运算符的核心思想是 **在表达式中完成赋值操作**，并将赋值后的值作为整个表达式的结果。

```python
data = [1, 2, 3, 4]
n = len(data)
if n > 2:
    print(n)

# 简化后，在表达式中赋值
data = [1, 2, 3, 4]
if (n := len(data)) > 2:
    print(n)
```

​


### 20.比较运算符
等于，不等于，大于，小于，大于等于，小于等于，链式比较运算


### 21.逻辑运算符
在 Python 中，逻辑运算符主要用于组合多个条件，从而实现更复杂的条件判断。

Python 提供了三种逻辑运算符，分别是 `and`（逻辑与）、`or`（逻辑或）和 `not`（逻辑非）


### 22.位运算和运算符的优先级
#### 运算符优先级

Python 中运算符的优先级，决定了表达式中不同运算符的计算顺序，优先级高的运算符先进行计算。

常见运算符优先级从高到低的大致顺序：

| 运算符类型       | 运算符                                                       |
| ----------- | --------------------------------------------------------- |
| 括号          | ()                                                        |
| 幂运算         | \*\*                                                      |
| 正负号         | +x, -x                                                    |
| 乘法、除法、取模、整除 | \*, /, %, //                                              |
| 加法、减法       | +, -                                                      |
| 比较运算符       | <, <=, >, >=, !=, ==                                      |
| 逻辑非         | not                                                       |
| 逻辑与         | and                                                       |
| 逻辑或         | or                                                        |
| 赋值运算符       | =, +=, -=, \*=, /=, %=, //=, \*\*=, &=, \|=, ^=, <<=, >>= |

​

位运算符实际使用不多，因为可读性不强，不如普通数值表示的方便，其他语言类似。遇到复杂的位运算符可以直接 AI。

#### 1. 按位与（&）

对两个整数的对应二进制位进行逻辑与操作，只有当两个对应位都为 1 时，结果位才为 1，否则为 0。

```
a = 5  # 二进制: 0101
```

#### 2. 按位或（|）

对两个整数的对应二进制位进行逻辑或操作，只要两个对应位中有一个为 1，结果位就为 1，只有当两个对应位都为 0 时，结果位才为 0。

```
a = 5  # 二进制: 0101
```

#### 3. 按位异或（^）

对两个整数的对应二进制位进行逻辑异或操作，当两个对应位不同时，结果位为 1，相同时结果位为 0。

```
a = 5  # 二进制: 0101
```

#### 4. 按位取反（\~）

对整数的二进制位进行取反操作，即 0 变为 1，1 变为 0。需要注意的是，在 Python 中，按位取反的结果需要根据补码规则来计算。

```
a = 5  # 二进制: 0101
```

#### 5. 左移（<<）

将整数的二进制位向左移动指定的位数，右边空出的位用 0 填充，相当于乘以 2 的指定次幂。

```
a = 5  # 二进制: 0101
```

#### 6. 右移（>>）

将整数的二进制位向右移动指定的位数，左边空出的位根据符号位填充（正数补 0，负数补 1），相当于除以 2 的指定次幂（向下取整）。

```
a = 5  # 二进制: 0101
```

​


### 23.本章总结和章节习题讲解
![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741436234476.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741436240172.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741436245748.jpg)

最佳实践：不建议使用 eval 函数，不常用位运算符，位运算符不能和等号连起来使用（+= 可以 &= 不可以）


### 24.程序的描述方式
#### 1. 注释

注释是在代码中添加的说明性文本，Python 解释器会忽略这些注释内容。

注释可以帮助开发者记录代码的思路、功能、注意事项等。

#### 2. 文档字符串

文档字符串是一种特殊的注释，用于为模块、函数、类或方法提供文档说明。

文档字符串通常使用三引号（单引号 ''' 或双引号 """）来定义，并且应该放在对象定义的第一行。

可以通过对象的 \_\_doc\_\_ 属性来访问文档字符串。

##### 模块文档字符串

```python
"""
这是一个示例模块，用于演示文档字符串的使用。
该模块包含一个简单的加法函数。
"""

def add_numbers(a, b):
    """
    该函数用于计算两个数的和。

    参数:
    a (int): 第一个加数。
    b (int): 第二个加数。

    返回:
    int: 两个数的和。
    """
    return a + b
```

可以通过以下方式访问函数的文档字符串：

```python
print(add_numbers.__doc__)
```

#### 3. 代码结构和命名规范

良好的代码结构和有意义的命名，可以让代码本身具有更好的可读性和可理解性，从而起到描述程序的作用。

合理的代码结构：将代码按照功能进行模块化，使用函数和类来组织代码。

有意义的命名：使用具有描述性的变量名、函数名和类名，避免使用无意义的单字母命名。

#### 4. 流程图和伪代码

在编写实际代码之前，可以使用流程图和伪代码来描述程序的逻辑。

流程图使用图形符号来表示程序的流程和决策，伪代码则是一种类似于编程语言的文本描述，但不遵循严格的语法规则。


### 25.顺序结构
最基本的执行逻辑，按行进行执行。

例如数据处理流程：在处理数据时，通常需要按照一定的步骤进行，比如读取数据、对数据进行清洗、转换，最后存储处理后的数据。

```python
import pandas as pd

# 第一步：读取数据
data = pd.read_csv('data.csv')

# 第二步：数据清洗，去除缺失值
data = data.dropna()

# 第三步：数据转换，对某一列数据进行平方运算
data['new_column'] = data['old_column'] ** 2

# 第四步：保存处理后的数据
data.to_csv('processed_data.csv', index=False)
```

​


### 26.选择结构if
选择结构主要通过 `if` 语句来实现


### 27.双分支结构
if 条件表达式:

&#x20;   条件满足时执行的代码块

else:

&#x20;   条件不满足时执行的代码块


### 28.多分支结构
#### 多个平行层级的分支结构

if 条件表达式1:

&#x20;   条件1满足时执行的代码块

elif 条件表达式2:

&#x20;   条件2满足时执行的代码块

elif 条件表达式3:

&#x20;   条件3满足时执行的代码块

else:

&#x20;   前面所有条件都不满足时执行的代码块

#### 多个嵌套结构的分支结构

if 条件表达式1:

&#x20;   if 条件表达式2:

&#x20;       条件1和条件2都满足时执行的代码块

&#x20;   else:

&#x20;       条件1满足但条件2不满足时执行的代码块

else:

&#x20;   条件1不满足时执行的代码块

注意：Python 使用缩进来表示代码块，因此在 `if`、`elif` 和 `else` 后面的代码块必须保持相同的缩进，通常使用 4 个空格或一个制表符。


### 29.嵌套if的使用
案例

```python
age = 25
gender = "female"

# 外层 if 语句判断年龄是否大于等于 18 岁
if age >= 18:
    print("你已经成年了。")
    # 内层 if 语句判断性别
    if gender == "male":
        print("你是成年男性。")
    elif gender == "female":
        print("你是成年女性。")
    else:
        print("未知性别。")
else:
    print("你还未成年。")
```

​


### 30.多个条件的连接
多个条件连接，使用逻辑运算 and or not 和 if 结合即可

```python
age = 20
is_student = True
has_job = False

if (age >= 18 and is_student) or (not has_job):
    print("你符合特定条件。")
else:
    print("你不符合特定条件。")
```

​


### 30.Python3.11新特性-模式匹配
模式匹配，类似 Switch case 结构

```python
match 表达式:
    case 模式1:
        # 当表达式匹配模式1时执行的代码
        pass
    case 模式2:
        # 当表达式匹配模式2时执行的代码
        pass
    case _:
        # 当表达式不匹配前面任何模式时执行的代码，_ 是通配符
        pass
```

可以匹配字符串或者复杂类型

```python
day = "Monday"

match day:
    case "Monday":
        print("今天是周一，开始新的一周啦！")
    case "Friday":
        print("今天是周五，马上就到周末咯！")
    case _:
        print(f"今天是 {day}，继续加油哦！")
```

匹配元组

```python
point = (2, 3)
match point:
    case (0, 0):
        print("该点是原点。")
    case (x, 0):
        print(f"该点在 x 轴上，x 坐标为 {x}。")
    case (0, y):
        print(f"该点在 y 轴上，y 坐标为 {y}。")
    case (x, y):
        print(f"该点的坐标为 ({x}, {y})。")
```

匹配列表

```python
numbers = [1, 2, 3]

match numbers:
    case []:
        print("这是一个空列表。")
    case [x]:
        print(f"列表中只有一个元素 {x}。")
    case [x, y]:
        print(f"列表中有两个元素 {x} 和 {y}。")
    case [x, *rest]:
        print(f"列表的第一个元素是 {x}，其余元素是 {rest}。")
```

​


### 32.遍历循环for
`for` 循环是一种常用的遍历循环结构，用于迭代遍历可迭代对象（如列表、元组、字符串、字典等）中的元素。

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

numbers = (1, 2, 3, 4, 5)
for num in numbers:
    print(num * 2)

word = "Hello"
for char in word:
    print(char)

for key, value in person.items():
    print(f"{key}: {value}")
```

range  函数

```python
# 打印 0 到 4 的整数
for i in range(5):
    print(i)

# 打印 2 到 6 的整数
for i in range(2, 7):
    print(i)

# 打印 2 到 10 之间的偶数
for i in range(2, 11, 2):
    print(i)
```

​


### 33.无限循环while
有限循环

```python
count = 0
while count < 5:
    print(count)
    count = count + 1
```

无限循环-内部使用 break 终止循环

```python
while True:
    user_input = input("请输入 'q' 退出循环: ")
    if user_input == 'q':
        break
```

​


### 34.使用while循环模拟用户登录
无限循环

```python
# 预设正确的用户名和密码
correct_username = "admin"
correct_password = "123456"

while True:
    # 获取用户输入的用户名和密码
    username = input("请输入用户名: ")
    password = input("请输入密码: ")

    # 检查输入的用户名和密码是否正确
    if username == correct_username and password == correct_password:
        print("登录成功！")
        break
    else:
        print("用户名或密码错误，请重新输入。")
```

​


### 35.嵌套循环打印输出长方形和三角形
长方形

```python
# 定义长方形的行数和列数
rows = 5
columns = 10

# 外层循环控制行数
for i in range(rows):
    # 内层循环控制列数
    for j in range(columns):
        print('*', end=' ')
    # 每一行打印完后换行
    print()
```

直角三角形

```python
# 定义三角形的行数
rows = 5

# 外层循环控制行数
for i in range(rows):
    # 内层循环控制每行打印的星号数量
    for j in range(i + 1):
        print('*', end=' ')
    # 每一行打印完后换行
    print()
```

​


### 36.嵌套循环打印输出菱形和空心菱形
实心菱形

```python
# 菱形的总行数，这里设为 9，可以根据需要调整
n = 9
# 上半部分
for i in range(n // 2 + 1):
    # 打印空格
    for j in range(n // 2 - i):
        print(" ", end="")
    # 打印星号
    for k in range(2 * i + 1):
        print("*", end="")
    print()

# 下半部分
for i in range(n // 2):
    # 打印空格
    for j in range(i + 1):
        print(" ", end="")
    # 打印星号
    for k in range(n - 2 * (i + 1)):
        print("*", end="")
    print()
```

空心菱形

```python
# 菱形的总行数，这里设为 9，可以根据需要调整
n = 9
# 上半部分
for i in range(n // 2 + 1):
    # 打印空格
    for j in range(n // 2 - i):
        print(" ", end="")
    # 打印星号和空格
    for k in range(2 * i + 1):
        if k == 0 or k == 2 * i:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# 下半部分
for i in range(n // 2):
    # 打印空格
    for j in range(i + 1):
        print(" ", end="")
    # 打印星号和空格
    for k in range(n - 2 * (i + 1)):
        if k == 0 or k == n - 2 * (i + 1) - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()
```

​


### 37.break在循环中的使用
三种循环中的 break

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for num in numbers:
    if num == 5:
        break
    print(num)
```

```python
for i in range(3):
    for j in range(3):
        if i == 1 and j == 1:
            break
        print(f"i = {i}, j = {j}")
```

```python
count = 0
while True:
    if count == 5:
        break
    print(count)
    count = count + 1
```

​


### 38.continue在循环中的使用
continue

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for num in numbers:
    if num % 2 == 0:
        continue
    print(num)

count = 0
while count < 10:
    count = count + 1
    if count % 3 == 0:
        continue
    print(count)
```

​


### 39.空语句pass
pass 是占位符

函数中

```python
def future_function():
    # 这里的功能还未实现，先用 pass 占位
    pass

class FutureClass:
    def __init__(self):
        # 初始化方法的具体实现稍后完成
        pass

    def some_method(self):
        # 方法的具体逻辑还未编写
        pass
```

条件语句或者循环中

```python
num = 10
if num < 5:
    print("数字小于 5")
elif num > 15:
    pass  # 暂时不处理数字大于 15 的情况
else:
    print("数字在 5 到 15 之间")
```

```python
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num == 3:
        pass  # 当数字为 3 时，不做任何操作
    else:
        print(num)
```

​


### 40.章节本章总结习题讲解
总结

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741436715877.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741436722828.jpg)

基本的习题，九九乘法表，多层条件或者循环


### 41.序列的索引及切片操作
序列是一种基本的数据结构，像字符串（`str`）、列表（`list`）、元组（`tuple`）都属于序列类型。

索引和切片操作，是对序列进行访问和截取的重要手段，

索引操作

```python
# 字符串示例
string_example = "Hello"
print(string_example[0])  # 输出: H
print(string_example[-1])  # 输出: o

# 列表示例
list_example = [10, 20, 30, 40, 50]
print(list_example[2])  # 输出: 30
print(list_example[-3])  # 输出: 30

# 元组示例
tuple_example = (1, 2, 3, 4, 5)
print(tuple_example[4])  # 输出: 5
print(tuple_example[-2])  # 输出: 4
```

切片操作用于从序列中截取一部分元素，创建一个新的序列。切片操作使用冒号 `:` 来指定切片的起始索引、结束索引和步长，基本语法为 `sequence[start:stop:step]`。其中：

* `start`：切片的起始索引（包含该索引对应的元素），默认为 0。

* `stop`：切片的结束索引（不包含该索引对应的元素），默认为序列的长度。

* `step`：切片的步长，默认为 1，表示依次取元素；若为负数，则表示从后往前取元素。

```python
# 字符串切片
string_example = "HelloWorld"
print(string_example[1:5])  # 输出: ello
print(string_example[:5])  # 输出: Hello
print(string_example[6:])  # 输出: World
print(string_example[::2])  # 输出: Hlool，步长为 2，每隔一个字符取一个，得到 Hlool。
print(string_example[::-1])  # 输出: dlroWolleH，步长为 -1，从后往前取元素，实现字符串反转，
```

​


### 42.序列的相关操作
#### 3. 序列拼接

可以使用 + 运算符将两个相同类型的序列拼接成一个新的序列。

示例代码：

```python
string1 = "Hello"
string2 = " World"
print(string1 + string2)  # 输出: Hello World

list1 = [1, 2, 3]
list2 = [4, 5, 6]
print(list1 + list2)  # 输出: [1, 2, 3, 4, 5, 6]

tuple1 = (10, 20)
tuple2 = (30, 40)
print(tuple1 + tuple2)  # 输出: (10, 20, 30, 40)
```

#### 4. 序列重复

使用 \* 运算符可以将一个序列重复指定的次数，创建一个新的序列。

示例代码：

```python
string_example = "Hi"
print(string_example * 3)  # 输出: HiHiHi

list_example = [1, 2]
print(list_example * 2)  # 输出: [1, 2, 1, 2]

tuple_example = (10,)
print(tuple_example * 3)  # 输出: (10, 10, 10)
```

#### 5. 成员关系操作

使用 in 和 not in 运算符可以检查一个元素是否存在于序列中。

示例代码：

```python
string_example = "Python"
print('y' in string_example)  # 输出: True
print('z' not in string_example)  # 输出: True

list_example = [10, 20, 30]
print(20 in list_example)  # 输出: True
print(40 not in list_example)  # 输出: True

tuple_example = (1, 2, 3)
print(3 in tuple_example)  # 输出: True
print(4 not in tuple_example)  # 输出: True
```

#### 6. 长度、最大值和最小值

* len() 函数用于返回序列的长度。

* max() 函数用于返回序列中的最大值。

* min() 函数用于返回序列中的最小值。

示例代码：

```python
string_example = "Python"
print(len(string_example))  # 输出: 6
print(max(string_example))  # 输出: y
print(min(string_example))  # 输出: P

list_example = [10, 20, 30, 40, 50]
print(len(list_example))  # 输出: 5
print(max(list_example))  # 输出: 50
print(min(list_example))  # 输出: 10

tuple_example = (1, 2, 3, 4, 5)
print(len(tuple_example))  # 输出: 5
print(max(tuple_example))  # 输出: 5
print(min(tuple_example))  # 输出: 1
```

​


### 43.列表的基本操作
列表（list）是一种非常常用且灵活的数据结构，它是可变的、有序的元素集合。

#### 1. 创建列表

可以使用方括号 \[] 来创建一个空列表

#### 2. 访问列表元素

可以使用索引来访问列表中的单个元素，索引从 0 开始，也支持负数索引，负数索引从列表末尾开始计数。

#### 3. 切片操作

切片用于从列表中截取一部分元素，创建一个新的列表，使用 \[start:stop:step] 的语法。

#### 4. 修改列表元素

由于列表是可变的，可以通过索引直接修改列表中的元素。

#### 5. 列表长度

使用 len() 函数可以获取列表的长度。

```python
fruits = ['apple', 'banana', 'cherry']

print(len(fruits))  # 输出: 3
```

#### 6. 成员关系操作

使用 in 和 not in 运算符可以检查一个元素是否存在于列表中。

```python
fruits = ['apple', 'banana', 'cherry']

print('banana' in fruits)  # 输出: True
print('grape' not in fruits)  # 输出: True
```

​


### 44.列表的特有操作
#### 添加元素

* append() 方法：用于在列表末尾添加一个元素。

* extend() 方法：用于将一个可迭代对象的元素添加到列表末尾。

* insert() 方法：用于在指定索引位置插入一个元素。

```python
fruits = ['apple', 'banana']

# append() 方法
fruits.append('cherry')
print(fruits)  # 输出: ['apple', 'banana', 'cherry']

# extend() 方法
more_fruits = ['grape', 'kiwi']
fruits.extend(more_fruits)
print(fruits)  # 输出: ['apple', 'banana', 'cherry', 'grape', 'kiwi']

# insert() 方法
fruits.insert(1, 'lemon')
print(fruits)  # 输出: ['apple', 'lemon', 'banana', 'cherry', 'grape', 'kiwi']
```

#### 删除元素

* del 语句：可以根据索引删除列表中的元素。

* remove() 方法：根据元素的值删除列表中第一个匹配的元素。

* pop() 方法：移除并返回指定索引位置的元素，默认移除并返回最后一个元素。

```python
fruits = ['apple', 'banana', 'cherry', 'grape']
# del 语句
del fruits[1]
print(fruits)  # 输出: ['apple', 'cherry', 'grape']

# remove() 方法
fruits.remove('cherry')
print(fruits)  # 输出: ['apple', 'grape']

# pop() 方法
popped_fruit = fruits.pop()
print(popped_fruit)  # 输出: grape
print(fruits)  # 输出: ['apple']
```

#### 列表排序

* sort() 方法：对列表进行原地排序，会修改原列表。

* sorted() 函数：返回一个新的排序后的列表，原列表不变。

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
# sort() 方法
numbers.sort()
print(numbers)  # 输出: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
# sorted() 函数
sorted_numbers = sorted(numbers)
print(sorted_numbers)  # 输出: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
print(numbers)  # 输出: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
```

#### 列表反转

* reverse() 方法：对列表进行原地反转，会修改原列表。

```python
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)  # 输出: [5, 4, 3, 2, 1]
```

​


### 45.列表生成式及二维列表
#### 列表生成式

列表生成式是 Python 中一种简洁而强大的创建列表的方法，它允许你在一行代码中生成列表，避免使用传统的 for 循环来逐个添加元素，使代码更加简洁易读。

1、简单形式：\[expression for item in iterable]

* expression：对每个 item 进行处理的表达式。

* item：从可迭代对象 iterable 中取出的元素。

* iterable：可以是列表、元组、字符串、集合等可迭代对象。

示例代码：x\*\*2 是表达式，x 是从 range(10) 中取出的元素，最终生成一个包含 0 到 9 的平方的列表。

```python
# 生成一个包含 0 到 9 的平方的列表
squares = [ i**2 for i in range(10) ]
```

2、带条件的形式：\[expression for item in iterable if condition]，condition：一个布尔表达式，用于筛选满足条件的元素。

示例代码：只有当 x 是偶数（即 x % 2 == 0）时，才会将 x 的平方添加到列表中。

```python
# 生成一个包含 0 到 9 中偶数的平方的列表
even_squares = [x**2 for x in range(10) if x % 2 == 0]
```

#### 二维列表

二维列表也称为矩阵，是列表的列表，即列表中的每个元素也是一个列表。可以将其看作是一个表格，有行和列。

* 使用嵌套循环：

```python
# 创建一个 3 行 4 列的二维列表，初始值都为 0
rows = 3
cols = 4
matrix = []
for i in range(rows):
    row = []
    for j in range(cols):
        row.append(0)
    matrix.append(row)
```

* 使用列表生成式：

```python
# 创建一个 3 行 4 列的二维列表，初始值都为 0
rows = 3
cols = 4
matrix = [[0 for j in range(cols)] for i in range(rows)]
print(matrix)
```

代码解释：在使用列表生成式创建二维列表时，外层列表生成式控制行数，内层列表生成式控制列数。


### 46.元组的创建与删除
元组（tuple）是一种不可变的序列类型，它可以包含不同类型的元素。

#### 元组的创建

#### 1. 使用圆括号创建元组

最常见的创建元组的方式是使用圆括号将元素括起来，元素之间用逗号分隔。

```python
# 创建一个包含多个元素的元组
fruits = ('apple', 'banana', 'cherry')
print(fruits)

# 创建只包含一个元素的元组，需要在元素后面加逗号
single_element_tuple = ('apple',)
print(single_element_tuple)

# 创建空元组
empty_tuple = ()
print(empty_tuple)
```

代码解释：

* 对于包含多个元素的元组，直接用逗号分隔元素并用圆括号括起来即可。

* 当创建只包含一个元素的元组时，必须在元素后面加上逗号，否则 Python 会将其视为普通的括号表达式。

* 空元组就是一对空的圆括号。

#### 2. 使用内置函数 tuple() 创建元组

可以使用 tuple() 函数将其他可迭代对象（如列表、字符串等）转换为元组。

```python
# 将列表转换为元组
list_numbers = [1, 2, 3]
tuple_numbers = tuple(list_numbers)
print(tuple_numbers)

# 将字符串转换为元组
string = "hello"
tuple_from_string = tuple(string)
print(tuple_from_string)
```

代码解释：

* tuple() 函数接受一个可迭代对象作为参数，将其元素依次取出并组成一个新的元组。

#### 元组的删除

由于元组是不可变对象，不能对元组的元素进行删除操作，但可以删除整个元组对象。使用 del 语句可以删除元组变量。

```python
# 创建一个元组
animals = ('dog', 'cat', 'bird')
print(animals)

# 删除元组
del animals

# 尝试访问已删除的元组会引发 NameError
try:
    print(animals)
except NameError:
    print("元组已被删除，无法访问。")
```

代码解释：

* del 语句用于删除变量，当删除元组变量后，该变量在当前命名空间中不再存在，再次访问会引发 NameError 异常。


### 47.元组的访问及遍历
元组的访问，类似列表的访问，可以使用索引，或者使用切片

1\. 通过索引访问单个元素：元组的索引从 0 开始，可以使用方括号 \[] 加上索引值来访问元组中的特定元素。

2\. 通过切片访问多个元素：切片操作可以从元组中获取一个子元组，使用 \[start:stop:step] 的形式，其中 start 是起始索引（包含），stop 是结束索引（不包含），step 是步长（可选，默认为 1）。

元组的遍历，类似列表的遍历，可以使用 for 或者 while 循环实现

```python
langs = ('en', 'zh', 'fr')

for lang in range(langs):
    print(lang)
```

​


### 48.元组生成式
不同于列表生成式，元组生成式不能直接使用字面量生成，需要使用 tuple 函数转换

```python
# 创建一个生成器表达式
generator_expression = (i ** 2 for i in range(5))

# 输出 <generator object <genexpr> at 0x...>
print(generator_expression)

# 将生成器表达式转换为元组
tuple_result = tuple(generator_expression)
```

简化的写法

```python
tuple_result = tuple((i ** 2 for i in range(5)))
```

生成器表达式：生成器表达式和列表生成式的语法很相似，只不过它使用圆括号 `()` 而不是方括号 `[]`。生成器表达式返回的是一个生成器对象，而不是一个元组，但可以通过 `tuple()` 函数将其转换为元组。

生成器表达式的主要优势在于它的惰性求值特性。这意味着它不会一次性生成所有元素，而是在需要时才生成，这样可以节省大量的内存，尤其在处理大规模数据时非常有用。

列表生成式会一次性创建大量元素，占用大量内存。元组的生成器表达式不会一次性生成所有元素，只有在通过 `tuple()` 转换或迭代访问时才会逐个生成元素，大大减少了内存占用。


### 49.字典的创建与删除
字典（dict）是一种无序、可变且可迭代的数据类型，它以键值对（key-value）的形式存储数据。

#### 字典的创建

#### 1. 使用花括号 {} 创建空字典或包含键值对的字典

```python
# 创建空字典
empty_dict = {}

# 创建包含键值对的字典
student = {
    'name': 'Alice',
    'age': 20,
    'major': 'Computer Science'
}
```

代码解释：

* 当花括号内没有任何内容时，创建的是一个空字典。

* 要创建包含键值对的字典，键和值之间用冒号 : 分隔，不同的键值对之间用逗号 , 分隔。

#### 2. 使用 dict() 构造函数创建字典

```python
# 从键值对元组的列表创建字典
pairs = [('name', 'Bob'), ('age', 22), ('major', 'Mathematics')]
student_from_pairs = dict(pairs)

# 使用关键字参数创建字典
student_from_kwargs = dict(name='Charlie', age=21, major='Physics')
```

代码解释：

* dict() 函数可以接受一个包含键值对元组的列表作为参数，将其转换为字典。

* 也可以直接使用关键字参数的形式来创建字典，关键字作为键，对应的值作为键的值。

#### 3. 使用字典推导式创建字典

```python
# 创建一个字典，键是 1 到 5 的数字，值是其平方
squares = {i: i ** 2 for i in range(1, 6)}
```

代码解释：

* 字典推导式类似于列表推导式，使用花括号 {}，可以根据一定的规则快速创建字典。

### 字典的删除

#### 1. 删除字典中的特定键值对

可以使用 del 语句或 pop() 方法来删除字典中的特定键值对。

```python
person = {
    'name': 'David',
    'age': 25,
    'city': 'New York'
}

# 使用 del 语句删除键为 'age' 的键值对
del person['age']
print(person)

# 使用 pop() 方法删除键为 'city' 的键值对，并返回该键对应的值
city = person.pop('city')
print(f"被删除的城市是: {city}")
print(person)
```

代码解释：

* del 语句直接删除指定键的键值对，没有返回值。

* pop() 方法会删除指定键的键值对，并返回该键对应的值。如果指定的键不存在，可以提供一个默认值作为第二个参数，避免抛出 KeyError 异常。

#### 2. 清空字典中的所有键值对

可以使用 clear() 方法清空字典中的所有键值对，使字典变为空字典。

```python
book = {
    'title': 'Python Crash Course',
    'author': 'Eric Matthes',
    'year': 2015
}

# 清空字典
book.clear()
print(book)
```

代码解释：

* clear() 方法会移除字典中的所有元素，字典对象仍然存在，但为空。

#### 3. 删除整个字典对象

可以使用 del 语句删除整个字典对象，删除后该字典对象将不再存在。

```python
car = {
    'brand': 'Toyota',
    'model': 'Corolla',
    'year': 2020
}

# 删除字典对象
del car

# 尝试访问已删除的字典会引发 NameError
try:
    print(car)
except NameError:
    print("字典已被删除，无法访问。")
```

代码解释：

* del 语句删除字典对象后，该对象在当前命名空间中不再存在，再次访问会引发 NameError 异常。&#x20;


### 50.字典元素的访问及遍历
字典元素的访问：

1、通过中括号访问，如果不存在，会出错 student\['name']

2、通过 get 方法访问，第一个是键名，第二个参数是备选参数，这样不会出错 student.get('name', '匿名')

```python
student = {
    'name': "mike"
}

student['name']

student.get('name', '匿名')
```

字典元素的遍历：

可以遍历键，遍历值，同时遍历键值对

```python
student = {
    'name': 'Mike',
    'age': 20
}

for key in student.keys():
    print(key)

for value in student.values():
    print(value)

for key, value in student.items():
    print(key, value)
```

​


### 51.字典操作的相关方法
#### 1. 字典元素的添加与修改

* update() 方法：用于将一个字典中的键值对更新到另一个字典中。如果有相同的键，会覆盖原有的值；如果是新的键，则会添加到目标字典中。

```python
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
dict1.update(dict2)
```

* 直接赋值：通过指定键并赋予新的值，可以实现添加或修改操作。如果键不存在，会添加新的键值对；如果键已存在，会更新其对应的值。

```python
my_dict = {'name': 'Alice', 'age': 20}
my_dict['age'] = 21  # 修改已有键的值
my_dict['city'] = 'New York'  # 添加新的键值对
```

* copy() 方法：返回一个字典的浅拷贝。浅拷贝会创建一个新的字典对象，但对于嵌套的可变对象，仍然是引用关系。

```python
original_dict = {'name': 'Henry', 'hobbies': ['reading', 'swimming']}
copied_dict = original_dict.copy()

print(copied_dict)  # 输出: {'name': 'Henry', 'hobbies': ['reading', 'swimming']}
```

​

#### 2. 字典元素的删除

* pop() 方法：根据指定的键删除对应的键值对，并返回该键对应的值。如果键不存在，可以提供一个默认值，避免抛出 KeyError 异常。

```python
my_dict = {'name': 'Bob', 'age': 25, 'city': 'Los Angeles'}
age = my_dict.pop('age')
print(age)  # 输出: 25
print(my_dict)  # 输出: {'name': 'Bob', 'city': 'Los Angeles'}

# 尝试删除不存在的键，提供默认值
result = my_dict.pop('gender', 'unknown')
print(result)  # 输出: unknown
```

* del 语句：可以根据指定的键删除对应的键值对，如果键不存在会抛出 KeyError 异常。也可以使用 del 删除整个字典对象。

```python
my_dict = {'name': 'David', 'age': 35}

# 删除某个键值对
del my_dict['age']

# 删除整个字典
del my_dict
```

* clear() 方法：清空字典中的所有键值对，使字典变为空字典。

```python
my_dict = {'name': 'Eve', 'age': 40}
my_dict.clear()
print(my_dict)  # 输出: {}
```

​


### 52.字典生成式
允许一行代码内根据一定的规则生成字典，类似于列表生成式和集合生成式

```python
squares_dict = { i: i ** 2 for i in range(1, 6) }

print(squares_dict)
```

​


### 53.集合的创建与删除
集合（`set`）是一种无序且唯一的数据结构，它不允许有重复的元素。

#### 集合的创建

#### 1. 使用花括号 {} 创建集合

可以使用花括号将元素括起来创建集合，但要注意创建空集合不能使用 {}，因为 {} 会创建一个空字典。

```python
# 创建包含多个元素的集合
fruits = {'apple', 'banana', 'cherry'}
print(fruits)

# 创建包含重复元素的集合，重复元素会被自动去除
numbers = {1, 2, 2, 3, 4, 4}
print(numbers)

# 不能使用 {} 创建空集合，因为 {} 会创建一个空字典
empty_dict = {}
print(type(empty_dict))  # 输出 <class 'dict'>
```

#### 2. 使用 set() 函数创建集合

set() 函数可以将其他可迭代对象（如列表、元组、字符串等）转换为集合。

```python
# 将列表转换为集合
list_numbers = [1, 2, 3, 3, 4]
set_numbers = set(list_numbers)
print(set_numbers)

# 将字符串转换为集合，字符串中的每个字符会成为集合的一个元素
string = "hello"
set_from_string = set(string)
print(set_from_string)

# 使用 set() 创建空集合
empty_set = set()
print(empty_set)
print(type(empty_set))  # 输出 <class 'set'>
```

​

#### 集合的删除

#### 1. 删除集合中的特定元素

* remove() 方法：用于删除集合中指定的元素。如果元素存在，会将其从集合中移除；如果元素不存在，会抛出 KeyError 异常。

```python
fruits = {'apple', 'banana', 'cherry'}
fruits.remove('banana')
print(fruits)

# 尝试删除不存在的元素，会抛出 KeyError 异常
try:
    fruits.remove('grape')
except KeyError:
    print("指定的元素不存在")
```

* discard() 方法：同样用于删除集合中指定的元素。如果元素存在，会将其从集合中移除；如果元素不存在，不会抛出异常，程序会继续正常执行。

```python
fruits = {'apple', 'cherry'}
fruits.discard('cherry')
print(fruits)

# 尝试删除不存在的元素，不会抛出异常
fruits.discard('grape')
print(fruits)
```

#### 2. 清空集合中的所有元素

可以使用 clear() 方法清空集合中的所有元素，使集合变为空集合。

```python
fruits = {'apple', 'banana', 'cherry'}
fruits.clear()
print(fruits)  # 输出 set()
```

#### 3. 删除整个集合对象

使用 del 语句可以删除整个集合对象，删除后该集合对象将不再存在（访问变量会报错）

```python
numbers = {1, 2, 3}
del numbers

# 尝试访问已删除的集合会引发 NameError
try:
    print(numbers)
except NameError:
    print("集合已被删除，无法访问。")
```

​


### 54.集合的操作符
实际上集合使用不多，数据去重使用集合，其他主要场景还是字典和列表

### 1. 并集操作符（|）

并集操作会返回一个包含两个集合中所有不重复元素的新集合。

```
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1 | set2
print(union_set) 
```

代码解释：set1 和 set2 中都有元素 3，在并集操作中只会保留一个，最终输出 {1, 2, 3, 4, 5}。

### 2. 交集操作符（&）

交集操作会返回一个只包含两个集合中共同元素的新集合。

```
set1 = {1, 2, 3}
set2 = {3, 4, 5}
intersection_set = set1 & set2
print(intersection_set) 
```

代码解释：set1 和 set2 中共同的元素只有 3，所以交集结果为 {3}。

### 3. 差集操作符（-）

差集操作会返回一个包含在第一个集合中但不在第二个集合中的元素的新集合。

```
set1 = {1, 2, 3}
set2 = {3, 4, 5}
difference_set = set1 - set2
print(difference_set)  
```

代码解释：元素 1 和 2 在 set1 中但不在 set2 中，所以差集结果为 {1, 2}。

### 4. 对称差集操作符（^）

对称差集操作会返回一个包含两个集合中不共同拥有的元素的新集合。

```
set1 = {1, 2, 3}
set2 = {3, 4, 5}
symmetric_difference_set = set1 ^ set2
print(symmetric_difference_set)  
```

代码解释：元素 1、2、4、5 是两个集合中不共同拥有的元素，所以对称差集结果为 {1, 2, 4, 5}。

### 5. 子集判断操作符（< 和 <=）

* < 用于判断一个集合是否是另一个集合的真子集（即前者的所有元素都在后者中，且前者的元素数量少于后者）。

* <= 用于判断一个集合是否是另一个集合的子集（即前者的所有元素都在后者中）。

```
set1 = {1, 2}
set2 = {1, 2, 3}
print(set1 < set2)  
print(set1 <= set2) 
```

代码解释：set1 是 set2 的真子集和子集，所以上述代码输出都为 True。

### 6. 超集判断操作符（> 和 >=）

* \> 用于判断一个集合是否是另一个集合的真超集（即前者包含后者的所有元素，且前者的元素数量多于后者）。

* \>= 用于判断一个集合是否是另一个集合的超集（即前者包含后者的所有元素）。

```
set1 = {1, 2, 3}
set2 = {1, 2}
print(set1 > set2)  
print(set1 >= set2)  
```

代码解释：set1 是 set2 的真超集和超集，所以上述代码输出都为 True。

​


### 55.集合的操作方法及集合的遍历
#### 添加元素

* add() 方法：用于向集合中添加一个元素。如果元素已经存在于集合中，不会有任何影响。

```
my_set = {1, 2, 3}
my_set.add(4)
print(my_set)  # 输出: {1, 2, 3, 4}
my_set.add(2)
print(my_set)  # 输出: {1, 2, 3, 4}，因为 2 已存在，集合不会改变
```

* update() 方法：用于将一个可迭代对象（如列表、元组、集合等）中的元素添加到集合中。

```
my_set = {1, 2, 3}
new_elements = [3, 4, 5]
my_set.update(new_elements)
print(my_set)  # 输出: {1, 2, 3, 4, 5}，重复元素 3 只保留一个
```

#### 删除元素

* remove() 方法：用于删除集合中指定的元素。如果元素不存在，会抛出 KeyError 异常。

```
my_set = {1, 2, 3}
my_set.remove(2)
print(my_set)  # 输出: {1, 3}
try:
    my_set.remove(4)
except KeyError:
    print("指定的元素不存在")
```

* discard() 方法：同样用于删除集合中指定的元素。如果元素不存在，不会抛出异常。

```
my_set = {1, 2, 3}
my_set.discard(2)
print(my_set)  # 输出: {1, 3}
my_set.discard(4)
print(my_set)  # 输出: {1, 3}，因为 4 不存在，集合不变
```

#### 集合的遍历

可以使用 for 循环来遍历集合中的元素。由于集合是无序的，遍历顺序是不确定的。

```
my_set = {'apple', 'banana', 'cherry'}
for element in my_set:
    print(element)
```

上述代码会依次输出集合中的每个元素，但顺序可能不同。


### 56.Python3.11新特性
三种新特性：

1、结构模式匹配：

```python
match data:
    case { 'age': 20 }:
        print(1)
    case [1, 2]:
        print(2)
    case (1, 2, 3):
        print(3)
    case _:
        print('相当于通配符，多重条件中的 else')
```

2、字典合并符：

```python
a = { 'name': 10, 'age': 20 }
b = { 'add': 'Beijing' }
c = { 'date': '2025' }
print(a | b | c)
# 可以合并多个字典，如果是重复的键名，取后一个的值，类似 Object.assign()
```

3、同步迭代多个可遍历对象：

```python
fruits = ['apple', 'orange']
counts = [1, 2]

for f, c in zip(fruits, counts):
    match f, c:
        case 'apple', 1:
            print(1)
        case 'orange', 2:
            print(2)

```

这里就是同时遍历多个可遍历对象，然后同时匹配（注意，列表可以实现，因为遍历是有序的。元组是无序的，不支持）


### 57.章节总结及选择题
序列结构：列表，元组，集合，字典，字符串

比较灵活的就是切片操作

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741934841550.jpg)

​

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741934850022.jpg)![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741934835856.jpg)

下面题目，考察的是字典的 key 必须是不可变数据，所以D选项，字典的键是列表，是不正确的。B是正确的。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741934866181.jpg)

下面题目中，reverse 可以取反，但是这个函数没有返回值，是原地函数，所以正确的是 C None

​

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741934871988.jpg)

下面考察的是元组，如果只有一个元素，后面必须增加逗号。如果不加逗号，表示的就是括号的数字，所以类型是 int

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1741934877685.jpg)

​


### 58.实战一-千年虫是什么虫
千年虫，指的是 1900-2000跨越千年很多存储的问题，例如之前存储的出生年份是 1992，1980，存储为 92 80

需求：有一组数据存储的是不完整的年份，\[89, 92, 00, 03] 转换成 完整的年份

```python
ages = [89, 92, 00]

# 循环列表，对元素进行判断，不考虑 02，03 这种情况
for i in range(len(ages)):
    if (str(ages[i])) == '0':
        ages[i] = '200' + str(ages[i])
    else:
        ages[i] = '19' + str(ages[i]) # 注意这里是 str，不是 string
print(ages)
```

也可以使用 API 遍历列表

```python
for i, value in enumerate(ages):
    if (str(value)) == '0':
        ages[i] = '200' + str(value)
    else:
        ages[i] = '19' + str(value)
print(ages)
```

​


### 59.实战二-模拟京东的购物流程
模拟购物网站：

1、商家把不同信息以列表形式存储（或者字典形式）

2、用户查询商品，字典是否匹配？然后把商品放在购物车中

3、当用户输入 q 就是终止查询，此时输出购物车的信息

考点：列表的操作


### 60.实战三-模拟12306车票订票流程
给定一个字典，键名是车次，value 是具体的信息

用户输入一个车次，查询到具体的信息即可。如果用户输入的车次不存在，那么返回提示信息（dict.get(key, defualtValue)）

知识点：获取字典的键值对


### 61.实战四-模拟手机通讯录
通讯录，不需要排列，使用集合实现

```python
s = set()

for i in range(1, 6):
    info = input(f'请输入{i}好友的信息')
    s.add(info)

for i in s:
    print(i)
```

​


### 62.字符串的常用方法1
#### 大小写转换

* upper()：将字符串中的所有小写字母转换为大写字母。

```
s = "hello"
s.upper()
```

* lower()：把字符串中的所有大写字母转换为小写字母。

```
s = "WORLD"
s.lower()
```

* capitalize()：将字符串的第一个字符转换为大写，其余字符转换为小写。

```
s = "hello world"
s.capitalize()
# 输出: Hello world
```

* title()：把字符串中每个单词的首字母转换为大写，其余字母转换为小写。

```
s = "hello world"
print(s.title())  # 输出: Hello World
```

* swapcase()：反转字符串中字母的大小写，即大写字母转换为小写，小写字母转换为大写。

```
s = "HeLlO"
print(s.swapcase())  # 输出: hElLo
```

​

#### &#x20;查找与替换

* find(sub\[, start\[, end]])：在字符串中查找子字符串 sub 第一次出现的位置，如果找到则返回其索引，未找到则返回 -1。start 和 end 是可选参数，用于指定查找的起始和结束位置。

```
s = "hello world"
print(s.find("world"))  # 输出: 6
```

* rfind(sub\[, start\[, end]])：与 find() 类似，但从字符串的右侧开始查找。

```
s = "hello world world"
print(s.rfind("world"))  # 输出: 12
```

* index(sub\[, start\[, end]])：和 find() 功能相同，**但如果未找到子字符串会抛出 ValueError 异常。​**

```python
s = "hello world"
try:
    print(s.index("world"))  # 输出: 6
except ValueError:
    print("未找到子字符串")
```

* rindex(sub\[, start\[, end]])：与 index() 类似，但从字符串的右侧开始查找。

```python
s = "hello world world"
try:
    print(s.rindex("world"))  # 输出: 12
except ValueError:
    print("未找到子字符串")
```

* replace(old, new\[, count])：将字符串中的所有 old 子字符串替换为 new 子字符串。count 是可选参数，用于指定替换的次数。

```python
s = "hello world"
print(s.replace("world", "python"))  # 输出: hello python
```

​

#### 去除空白字符

* strip(\[chars])：去除字符串开头和结尾的指定字符，默认为空白字符（空格、制表符、换行符等）。

* lstrip(\[chars])：仅去除字符串开头的指定字符，默认为空白字符。

* rstrip(\[chars])：仅去除字符串结尾的指定字符，默认为空白字符。

```python
s = "   hello   "
s.strip()  # 输出: hello
s.lstrip()
s.rstrip()
```

​


### 63.字符串常用的方法2
#### 分割与连接

* split(sep=None, maxsplit=-1)：根据指定的分隔符 sep 将字符串分割成一个列表。sep 默认为空白字符，maxsplit 是可选参数，用于指定最大分割次数。

```python
s = "hello world"
print(s.split())  # 输出: ['hello', 'world']
```

* splitlines(\[keepends])：根据换行符将字符串分割成一个列表。keepends 是可选的布尔参数，若为 True 则保留换行符。

```python
s = "hello\nworld"
print(s.splitlines())  # 输出: ['hello', 'world']
```

* join(iterable)：将可迭代对象中的元素用指定的字符串连接成一个新的字符串。

```python
words = ['hello', 'world']
s = " ".join(words)
print(s)  # 输出: hello world
```

​

#### 判断字符串特征

* startswith(prefix\[, start\[, end]])：判断字符串是否以指定的前缀 prefix 开头。start 和 end 是可选参数，用于指定检查的起始和结束位置。

```python
print(s.startswith("hello"))  # 输出: True
```

* endswith(suffix\[, start\[, end]])：判断字符串是否以指定的后缀 suffix 结尾。start 和 end 是可选参数，用于指定检查的起始和结束位置。

```python
print(s.endswith("world"))  # 输出: True
```

* isalpha()：判断字符串是否只包含字母。

* isdigit()：判断字符串是否只包含数字。

* isalnum()：判断字符串是否只包含字母和数字。

* isspace()：判断字符串是否只包含空白字符。

#### 格式化

* format(\*args, \*\*kwargs)：用于格式化字符串，通过 {} 占位符来指定插入的位置。

```
s = "Hello, {}! Your age is {}."
print(s.format("Alice", 25))  # 输出: Hello, Alice! Your age is 25.
```

​


### 64.格式化字符串的三种方式
在 Python 中，有三种常用的格式化字符串的方式，分别是旧式字符串格式化（% 操作符）、str.format() 方法和 f-string（格式化字符串字面值）

#### 1. 旧式字符串格式化（% 操作符）

这是 Python 早期版本中使用的字符串格式化方法，通过 % 操作符和特定的格式化符号来实现。

类似 C 语言的字符串格式化

```
"格式化字符串" % (值1, 值2, ...)
```

格式化字符串中使用 % 后面跟着特定的格式化符号，如 %s 用于字符串，%d 用于整数，%f 用于浮点数等。

```python
# 格式化字符串和整数
name = "Alice"
age = 25
print("My name is %s and I'm %d years old." % (name, age))

# 格式化浮点数
pi = 3.1415926
print("The value of pi is approximately %.2f." % pi)
```

在上述代码中，%s 用于插入字符串 name，%d 用于插入整数 age，%.2f 表示将浮点数 pi 保留两位小数进行格式化。

#### 2. str.format() 方法

这是 Python 2.6 及以后版本引入的一种更灵活、更强大的字符串格式化方法。

```python
"格式化字符串".format(值1, 值2, ...)
```

在格式化字符串中，使用 {} 作为占位符，可以通过位置索引、关键字参数等方式指定要插入的值。

```python
# 使用位置索引
name = "Bob"
age = 30
print("My name is {} and I'm {} years old.".format(name, age))

# 使用关键字参数
print("My name is {name} and I'm {age} years old.".format(name="Charlie", age=35))

# 格式化浮点数
pi = 3.1415926
print("The value of pi is approximately {:.2f}.".format(pi))
```

在上述代码中

第一个 print 语句使用位置索引，按顺序将 name 和 age 插入到占位符中

第二个 print 语句使用关键字参数，通过指定 name 和 age 来插入相应的值

第三个 print 语句使用 {:.2f} 来将浮点数 pi 保留两位小数进行格式化。

#### 3. f-string（格式化字符串字面值）

这是 Python 3.6 及以后版本引入的一种简洁、直观的字符串格式化方式。类似于 JS 的模板字符串。

```python
f"格式化字符串"
```

在格式化字符串前加上 f 或 F，然后在字符串中使用 {} 包裹表达式，表达式的值会被直接插入到字符串中。

```python
name = "David"
age = 40
print(f"My name is {name} and I'm {age} years old.")

# 格式化浮点数
pi = 3.1415926
print(f"The value of pi is approximately {pi:.2f}.")

# 执行表达式
x = 5
y = 3
print(f"The result of {x} + {y} is {x + y}.")
```

在上述代码中，f 字符串中的 {name}、{age}、{pi:.2f} 和 {x + y} 会被相应的值或表达式的结果替换。

#### 三种方式的比较

* 旧式字符串格式化（% 操作符）：语法简单，但功能相对有限，在处理复杂的格式化需求时不够灵活。

* str.format() 方法：功能强大，支持位置索引、关键字参数、格式化选项等多种方式，但语法相对复杂一些。

* f-string（格式化字符串字面值）：语法简洁、直观，支持直接在 {} 中使用表达式，代码可读性高，是 Python 3.6 及以后版本推荐使用的格式化方式。


### 65.format详细格式控制
str.format() 方法是 Python 中用于格式化字符串的一种灵活方式，它提供了丰富的格式控制选项

实际上一般不会这么复杂的格式控制，影响可读性

str.format() 方法的格式控制语法为 {\[索引或关键字]:\[格式说明符]}，格式说明符由多个部分组成，一般形式为 \[\[填充字符]对齐方式]\[符号]\[#]\[0]\[宽度]\[,]\[.精度]\[类型]。

#### 1. 填充与对齐

* 填充字符：用于指定在对齐时使用什么字符进行填充，默认是空格。

* 对齐方式：有三种，< 表示左对齐，> 表示右对齐，^ 表示居中对齐。

```python
# 左对齐，填充字符为 *
print("{:*<10}".format("hello"))  # 输出: hello*****

# 右对齐，填充字符为 -
print("{:-<10}".format("hello"))  # 输出: -----hello

# 居中对齐，填充字符为 =
print("{:=^10}".format("hello"))  # 输出: ==hello===
```

#### 2. 符号

* +：表示正数前显示 + 号，负数前显示 - 号。

* -：表示只在负数前显示 - 号，正数前不显示符号，这是默认情况。

* （空格）：表示正数前显示一个空格，负数前显示 - 号。

```python
# 显示正负号
print("{:+d}".format(10))  # 输出: +10
print("{:+d}".format(-10))  # 输出: -10

# 只显示负号
print("{:d}".format(10))  # 输出: 10
print("{:d}".format(-10))  # 输出: -10

# 正数前显示空格
print("{: d}".format(10))  # 输出:  10
print("{: d}".format(-10))  # 输出: -10
```

#### 3. # 选项

对于整数，# 用于在转换为二进制、八进制、十六进制时添加相应的前缀（0b、0o、0x）。

就相当于替换字符串时顺便进行了进度转换

```python
# 二进制
print("{:#b}".format(10))  # 输出: 0b1010

# 八进制
print("{:#o}".format(10))  # 输出: 0o12

# 十六进制
print("{:#x}".format(10))  # 输出: 0xa
```

#### 4. 宽度

宽度指定了输出的最小字符数，如果值的长度小于宽度，会根据对齐方式进行填充。

```python
# 宽度为 8
print("{:8d}".format(123))  # 输出:     123
```

#### 5. 逗号分隔

逗号 , 用于为数字添加千位分隔符。

```python
# 添加千位分隔符
print("{:,}".format(1234567))  # 输出: 1,234,567
```

#### 6. 精度

精度用于指定浮点数的小数位数，或者字符串的最大长度。

```python
# 浮点数精度
print("{:.2f}".format(3.14159))  # 输出: 3.14
# 字符串最大长度
print("{:.5}".format("abcdefg"))  # 输出: abcde
```

#### 7. 类型

类型指定了数据的转换类型，常见的类型如下：

* s：字符串类型。

* d：十进制整数。

* b：二进制整数。

* o：八进制整数。

* x：十六进制整数（小写）。

* X：十六进制整数（大写）。

* f：浮点数。

* e：科学计数法（小写 e）。

* E：科学计数法（大写 E）。

```python
# 字符串类型
print("{:s}".format("hello"))  # 输出: hello

# 二进制整数
print("{:b}".format(10))  # 输出: 1010

# 浮点数
print("{:f}".format(3.14))  # 输出: 3.140000

# 科学计数法
print("{:e}".format(123456))  # 输出: 1.234560e+05
```

通过组合这些格式控制选项，可以实现各种复杂的字符串格式化需求。&#x20;


### 66.字符串的编码和解码
编码（Encoding）：把字符串（文本）转换为字节序列（二进制数据）的过程。在编码时，需要指定一种编码方式，像 UTF - 8、GBK 等。

解码（Decoding）：将字节序列转换回字符串的过程。解码时使用的编码方式必须和编码时的一致，不然会出现解码错误。

#### 常见编码方式

* UTF - 8：一种可变长度的 Unicode 编码，能表示所有的 Unicode 字符，是互联网上最常用的编码方式。

* GBK：中国国家标准的中文字符集，兼容 ASCII 码，主要用于中文环境。

* ASCII：只能表示 128 个字符，主要用于英语和一些控制字符。

**在实际编程中，要确保编码和解码使用相同的编码方式，避免出现乱码问题。 ——这个很关键**

#### 编码方法：encode()

在 Python 中，字符串对象有一个 encode() 方法，用于将字符串编码为字节序列。

```
str.encode(encoding='utf-8', errors='strict')
```

* encoding：指定编码方式，默认是 'utf-8'。

* errors：指定处理编码错误的方式，默认是 'strict'，表示遇到无法编码的字符时抛出 UnicodeEncodeError 异常。其他常见的值有 'ignore'（忽略无法编码的字符）、'replace'（用 ? 替换无法编码的字符）等。

示例代码：

```python
# 定义一个字符串
s = "你好，世界！"

# 使用 UTF-8 编码
utf8_bytes = s.encode('utf-8')
print(utf8_bytes)  # 输出类似: b'\xe4\xbd\xa0\xe5\xa5\xbd\xef\xbc\x8c\xe4\xb8\x96\xe7\x95\x8c\xef\xbc\x81'

# 使用 GBK 编码
gbk_bytes = s.encode('gbk')
print(gbk_bytes)  # 输出类似: b'\xc4\xe3\xba\xc3\xa3\xac\xca\xc0\xbd\xe7\xa3\xa1'

# 处理编码错误
try:
    s.encode('ascii')
except UnicodeEncodeError:
    print("使用 ASCII 编码时出现错误，因为 ASCII 无法编码中文。")

# 忽略无法编码的字符
ascii_bytes_ignore = s.encode('ascii', errors='ignore')
print(ascii_bytes_ignore)  # 输出: b''

# 用 ? 替换无法编码的字符
ascii_bytes_replace = s.encode('ascii', errors='replace')
print(ascii_bytes_replace)  # 输出: b'??????'
```

#### 解码方法：decode()

字节对象有一个 decode() 方法，用于将字节序列解码为字符串。其基本语法如下：

```
bytes.decode(encoding='utf-8', errors='strict')
```

* encoding：指定解码使用的编码方式，默认是 'utf-8'。

* errors：指定处理解码错误的方式，默认是 'strict'，表示遇到无法解码的字节时抛出 UnicodeDecodeError 异常。其他常见的值有 'ignore'（忽略无法解码的字节）、'replace'（用 � 替换无法解码的字节）等。

示例代码：

```python
# 定义一个 UTF-8 编码的字节序列
utf8_bytes = b'\xe4\xbd\xa0\xe5\xa5\xbd\xef\xbc\x8c\xe4\xb8\x96\xe7\x95\x8c\xef\xbc\x81'

# 使用 UTF-8 解码
utf8_string = utf8_bytes.decode('utf-8')
print(utf8_string)  # 输出: 你好，世界！

# 定义一个 GBK 编码的字节序列
gbk_bytes = b'\xc4\xe3\xba\xc3\xa3\xac\xca\xc0\xbd\xe7\xa3\xa1'

# 使用 GBK 解码
gbk_string = gbk_bytes.decode('gbk')
print(gbk_string)  # 输出: 你好，世界！

# 错误的解码方式
try:
    utf8_bytes.decode('gbk')
except UnicodeDecodeError:
    print("使用错误的编码方式解码会出现错误。")

# 忽略无法解码的字节
wrong_bytes = b'\xff'
decoded_ignore = wrong_bytes.decode('utf-8', errors='ignore')
print(decoded_ignore)  # 输出: ''

# 用 � 替换无法解码的字节
decoded_replace = wrong_bytes.decode('utf-8', errors='replace')
print(decoded_replace)  # 输出: �
```

​


### 67.数据验证的方法
Python中字符串的验证方法。

数据验证是指程序对用户输入数据的合法性进行验证。字符串的验证方法包括

isdigit（所有字符都是阿拉伯数字）

isnumeric（所有字符都是数字，阿拉伯数字，罗马数字，中文数字）

isalpha（所有字符都是字母）

isalnum（所有字符都是数字或字母）

islower（所有字符都是小写字母）

isupper（所有字符都是大写字母）

istitle（首字母大写）

isspace（所有字符都是空白字符）

这些方法返回布尔值，用于判断字符串是否符合特定条件。


### 68.字符串的拼接操作
#### 1. 使用 + 运算符

这是最直观、简单的字符串拼接方式，通过 + 运算符可以将多个字符串连接成一个新的字符串。

注意：如果要拼接的对象不是字符串类型，需要先将其转换为字符串类型，否则会引发 TypeError 异常。

```
num = 123
str3 = "The number is: "
# 正确做法，先将数字转换为字符串
result2 = str3 + str(num)
print(result2)  # 输出: The number is: 123

# 错误示例，会引发 TypeError
# result3 = str3 + num
```

#### 2. 使用 join() 方法

join() 方法用于将一个可迭代对象（如列表、元组等）中的元素以指定的字符串为分隔符进行拼接。这种方法在拼接多个字符串时效率较高，尤其是处理大量字符串拼接的场景。

```
words = ["Hello", "World", "!"]
separator = " "
result = separator.join(words)
print(result)  # 输出: Hello World !
```

如果要拼接的可迭代对象中的元素不是字符串类型，同样需要先将其转换为字符串类型。

```
numbers = [1, 2, 3]
str_numbers = [str(num) for num in numbers]
separator = "-"
result = separator.join(str_numbers)
print(result)  # 输出: 1-2-3
```

#### 3. 使用格式化字符串

#### 4. 使用 += 运算符

#### 不同方法的性能比较

* 拼接少量字符串时，使用 + 运算符简单直接，代码可读性高。

* 拼接大量字符串时，join() 方法的性能通常更好，因为 + 运算符在拼接过程中会创建多个中间字符串对象，而 join() 方法只创建一个最终的字符串对象。

* 不同类型的数据拼接时，格式化字符串（% 操作符、str.format() 和 f-string）主要用于将不同类型的数据插入到字符串中，其中 f-string 语法简洁，执行效率也较高


### 69.字符串的处理-字符串的去重操作
#### 1. 使用集合（set）

集合是一种无序且元素唯一的数据结构，利用这一特性可以快速对字符串去重。

不过集合是无序的，所以去重后字符的顺序可能会改变。

```
string = "hello world"
unique_chars = ''.join(set(string))
print(unique_chars)
```

在上述代码中，set(string) 会将字符串转换为集合，去除重复的字符，然后使用 ''.join() 方法将集合中的字符重新组合成字符串。

#### 2. 遍历字符串并使用条件判断

通过遍历字符串中的每个字符，使用一个空字符串或列表来存储不重复的字符，从而实现去重，并且能保持字符的原始顺序。

```
string = "hello world"
result = ""
for char in string:
    if char not in result:
        result += char
print(result)
```

这里通过遍历字符串中的每个字符，检查其是否已经存在于 result 字符串中，如果不存在则添加到 result 中。

#### 3. 使用 OrderedDict

collections 模块中的 OrderedDict 可以保持元素插入的顺序，同时又能保证元素的唯一性，适合在需要保持顺序的情况下对字符串去重。

```
from collections import OrderedDict

string = "hello world"
unique_chars = ''.join(OrderedDict.fromkeys(string))
print(unique_chars)
```

代码中，OrderedDict.fromkeys(string) 会根据字符串中的字符创建一个有序字典，由于字典的键是唯一的，这样就实现了去重，最后再使用 ''.join() 方法将字典的键组合成字符串。

#### 4. 使用列表推导式和条件判断

借助列表推导式和条件判断可以更简洁地实现去重，并且保持字符顺序。

```
string = "hello world"
seen = set()
result = ''.join([char for char in string if not (char in seen or seen.add(char))])
print(result)
```

这里使用了列表推导式，seen 集合用于记录已经出现过的字符，not (char in seen or seen.add(char)) 会先检查字符是否已经在 seen 集合中，如果不在则添加到集合中并将该字符保留在结果中。

#### 不同方法的比较

* 使用集合（set）：实现简单、速度快，但会打乱字符的原始顺序。

* 遍历字符串并使用条件判断：能保持字符的原始顺序，但代码相对冗长，对于长字符串效率可能较低。

* 使用 OrderedDict：可以保持字符顺序，代码简洁，性能也较好，推荐在需要保持顺序的情况下使用。

* 使用列表推导式和条件判断：代码简洁，但理解起来相对复杂，性能和遍历字符串的方法类似。&#x20;

​


### 70.正则表达式的简介及相关符号
`re` 模块提供了对正则表达式的支持

**模式（Pattern）​**：由一系列字符和特殊字符组成的字符串，用于描述要匹配的文本规则。

**匹配（Match）​**：判断一个字符串是否符合某个模式的过程。

#### 1 字符匹配

* .：匹配除换行符以外的任意单个字符。

* \d：匹配任意一个数字，等价于 \[0-9]。

* \w：匹配任意一个字母、数字或下划线，等价于 \[a-zA-Z0-9\_]。

* \s：匹配任意一个空白字符，包括空格、制表符、换行符等。

#### 2 数量限定

* \*：匹配前面的字符零次或多次。

* +：匹配前面的字符一次或多次。

* ?：匹配前面的字符零次或一次。

* {n}：匹配前面的字符恰好 n 次。

* {n,}：匹配前面的字符至少 n 次。

* {n,m}：匹配前面的字符至少 n 次，最多 m 次。

#### 3 边界匹配

* ^：匹配字符串的开头。

* \$：匹配字符串的结尾。

### 编译正则表达式

为了提高匹配效率，可以使用 re.compile() 函数将正则表达式编译成一个模式对象，然后使用该对象的方法进行匹配操作。

```python
import re

pattern = re.compile(r'\d+')

string = 'There are 12 apples and 3 oranges'

result = pattern.findall(string)

print("匹配结果:", result)
```

​


### 71.re模块中match函数的使用
#### re.match()

* 功能：从字符串的起始位置开始匹配模式，如果匹配成功，**则返回一个匹配对象**；否则返回 None。

* 示例代码：

```python
import re

pattern = r'hello'
string = 'hello world'

result = re.match(pattern, string)

if result:
    print("匹配成功:", result.group())
else:
    print("匹配失败")
```

​


### 72.re模块中search函数和findall函数的使用
#### re.search()

* 功能：在整个字符串中搜索匹配模式的第一个位置，如果找到则返回一个匹配对象；否则返回 None。

* 示例代码：

```python
import re

pattern = r'world'
string = 'hello world'

result = re.search(pattern, string)

if result:
    print("匹配成功:", result.group())
else:
    print("匹配失败")
```

####

#### re.findall()

* 功能：在字符串中搜索所有匹配模式的子串，并以列表的形式返回。

* 示例代码：

```python
import re

pattern = r'\d+'  # 匹配一个或多个数字
string = 'There are 12 apples and 3 oranges'

result = re.findall(pattern, string)

print("匹配结果:", result)
```

​


### 73.re模块中sub函数和split函数的使用
#### re.sub()

* 功能：用于替换字符串中所有匹配模式的子串。

* 示例代码：

```python
import re

pattern = r'apple'
string = 'I like apple, apple is delicious'

new_string = re.sub(pattern, 'banana', string)

print("替换后的字符串:", new_string)
```

#### split

字符串的函数，可以对字符串进行分割，默认使用空格，也可以传入正则表达式

```python
text = "Hello  World!  Python"
result = text.split()
print(result)
```

​


### 74.本章总结
总结：**字符串和正则表达式**

* 字符串的基本操作，包括大小写转换、分割、检索、判断、替换、显示方式等。

* 字符串的格式化方法，包括使用占位符、F格式和format方法。

* 字符串的编码和解码，以及数据验证的方法。

* 正则表达式的使用，包括match、search、findall、sub 和 split 等方法。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742698071287.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742698078431.jpg)


### 75.章节选择题
UNICODE编码计算字符个数、字符串转二进制编码、字符串操作、字符串分割、字符串检索、去除字符串左右空格和特殊字符以及正则表达式匹配等操作。


### 76.实战一-车牌归属地
需求：给定一个车牌列表，返回归属地（遍历列表，字符串剪切）

```python
lists = ['京A77777', '粤A66666']
for item in lists:
    print(item, item[0:1])
```

​


### 77.实战二-统计指定字符出现的次数
字符串大小写转换和计数

```python
name = 'HelloHi'
target = 'H'
print('{0}在{1}中出现了{2}次'.format(target, name, name.upper().count(target)))
```

​


### 78.实战三-格式化输出商品信息
代码

```python
# 需求：有一个商品列表，包括名称，序号，价格等参数，展示这些数据，并将序号补零，价格保留2位小数
goods = [
    [ '01', '美的', 500 ],
    [ '02', '格力', 1000 ],
    [ '03', '海尔', 2000 ],
]

for item in goods:
    item[0] = '0000' + item[0]
    # 数值转换成2为浮点数
    item[2] = '${0:.2f}'.format(item[2])
    for i in item:
        print(str(i), end = '\t\t')
    print('\n')
```

​


### 79.实战四-使用正则表达式提取图片网址
使用正则表达式，从一段 HTML 中获取全部的图片链接

```python
s = 'http://img1.baidu.com/1.jpg,http://img2.baidu.com/1.jpg,http://img3.baidu.com/12231.jpg'

pattern = 'http://img\d{1}.baidu.com//\d*.jpg'

res = re.findall(pattern, s)

for i in res:
    print(i)
```

​


### 80.Bug的由来及分类
Bug 来源：美国一个计算机中进入一只虫子，堵住了电路，造成问题，所以问题都称为 bug。

错误分成下面几种

#### 语法错误（Syntax Errors）

* 说明：这是由于代码不符合Python的语法规则导致的错误。Python 解析器在解析代码时，一旦发现语法错误就会抛出异常，程序无法继续执行。

* 示例：忘记冒号。在Python中，像if语句、for循环、函数定义等结构后都需要有冒号。

```python
# 错误示例
if 1 > 0
    print('Hello')
# 正确示例
if 1 > 0:
    print('Hello')
```

#### 运行时错误（Runtime Errors）

* 说明：这类错误在程序运行时才会出现，尽管代码语法正确，但在执行过程中遇到了无法处理的情况。常见的运行时错误包括除零错误、访问不存在的索引、类型不匹配等。

* 示例：除零错误。

```python
# 错误示例
result = 1 / 0  # 这里会抛出ZeroDivisionError
print(result)

# 捕获异常的正确示例
try:
    result = 1 / 0
    print(result)
except ZeroDivisionError:
    print('不能除以零')
```

#### 逻辑错误（Logical Errors）

* 说明：这类错误不会导致程序崩溃，但会使程序的运行结果与预期不符。逻辑错误通常源于程序设计思路上的问题，例如算法错误、条件判断错误等。

* 示例：计算平均值时错误的公式。

#### 语义错误（Semantic Errors）

* 说明：语义错误与程序的含义或意图有关。代码在语法上是正确的，运行时也不会报错，但却没有实现预期的功能，因为代码的逻辑语义与程序员的本意不符。例如，使用了错误的函数或方法，尽管调用语法正确，但该函数并非实现所需的功能。

* 示例：本意是想使用join方法连接字符串列表，但误用了split方法。

前两种错误在程序解析或者运行时，可以弹出错误；后两种错误是隐藏的错误，需要根据程序逻辑处理。

​


### 81.Python中的异常处理
在Python中，异常处理用于捕获和处理程序运行时发生的错误，以避免程序崩溃。以下是异常处理的主要内容：

### 1. try - except语句

这是最基本的异常处理结构，try块中放置可能会引发异常的代码，except块用于捕获并处理异常。

```
try:
    num1 = 10
    num2 = 0
    result = num1 / num2  # 这里会引发ZeroDivisionError异常
    print(result)
except ZeroDivisionError:
    print("不能除以零")
```

在上述代码中，try块内执行除法运算，当除数为0时会引发ZeroDivisionError异常，程序跳转到except ZeroDivisionError:块执行相应的处理代码。

### 2. 捕获多种异常

可以在一个try - except结构中捕获多种不同类型的异常。

```
try:
    my_list = [1, 2, 3]
    print(my_list[10])  # 会引发IndexError异常
    result = 1 / 0  # 这行不会执行，因为前面已经引发异常
except ZeroDivisionError:
    print("不能除以零")
except IndexError:
    print("索引超出范围")
```

在这个例子中，try块内的代码可能引发IndexError或ZeroDivisionError异常，不同的except块分别处理不同类型的异常。

### 3. 通用异常捕获

使用不带具体异常类型的except语句可以捕获所有类型的异常，但不推荐在大多数情况下这样做，因为它可能隐藏一些难以调试的错误。

```
try:
    num = "abc" + 10  # 会引发TypeError异常
except:
    print("发生了异常")
```

### 4. 获取异常信息

可以在except语句中获取异常的详细信息，通过在except后添加变量来实现。

```
try:
    num1 = 10
    num2 = 0
    result = num1 / num2
except ZeroDivisionError as e:
    logger.error(f"发生了除零错误，错误信息是: {e}")
```

这里e变量保存了ZeroDivisionError异常的详细信息，通过打印e可以让用户了解具体的错误情况。

### 5. else子句

try - except结构可以包含else子句，当try块中没有引发异常时，会执行else块中的代码。

```
try:
    num1 = 10
    num2 = 2
    result = num1 / num2
except ZeroDivisionError:
    print("不能除以零")
else:
    print(f"结果是: {result}")
```

在这个例子中，由于没有发生除零异常，else块中的代码会被执行。

### 6. finally子句

finally子句无论try块中是否发生异常，都会被执行。

```
try:
    num1 = 10
    num2 = 0
    result = num1 / num2
except ZeroDivisionError:
    print("不能除以零")
finally:
    print("无论是否有异常，我都会被执行")
```

finally常用于资源清理，如关闭文件、数据库连接等操作，确保无论程序如何结束，这些资源都能得到正确处理。

实际上使用较多：

1、如果调用第三方模块，不确定是否出错，或者第三方模块可能抛出错误，需要进行捕获

2、网络请求，可能返回 404 或者 500 错误，需要捕获

3、获取对象的属性时，可能对象不存在，需要捕获错误


### 82.raise关键字的使用
在Python中，raise关键字用于手动引发异常。——类似于 JS 中的 throw new Error() 手动抛出异常

这在以下几种场景下非常有用：当程序检测到不满足某种条件，或者需要向调用者表明发生了特定错误情况时。

### 1. 引发内置异常

你可以使用raise引发Python的内置异常。例如，如果你希望在某个条件不满足时引发ValueError异常：

```python
def check_age(age):
    if age < 0:
        raise ValueError("年龄不能为负数")
    print(f"年龄是: {age}")


try:
    check_age(-5)
except ValueError as ve:
    print(f"捕获到异常: {ve}")
```

在上述代码中，check\_age函数检查传入的年龄值。如果年龄小于0，就使用raise引发一个ValueError异常，并附带错误信息。在try - except块中捕获并处理这个异常。

### 2. 引发自定义异常

你也可以创建并引发自己的自定义异常。首先，需要定义一个继承自Exception类（或其他内置异常类）的新类。

```python
class MyCustomError(Exception):
    pass


def process_number(num):
    if num > 100:
        raise MyCustomError("数字大于100")
    print(f"处理数字: {num}")


try:
    process_number(150)
except MyCustomError as mce:
    print(f"捕获到自定义异常: {mce}")
```

这里定义了MyCustomError自定义异常类，它继承自Exception。在process\_number函数中，如果数字大于100，就引发这个自定义异常，并在try - except块中捕获处理。

### 3. 在异常处理中重新引发异常

有时，在捕获异常后，你可能希望在某些情况下重新引发它，以便调用栈中更高层的代码能够处理。

```python
def divide_numbers(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("检测到除零操作，重新引发异常...")
        raise


try:
    result = divide_numbers(10, 0)
except ZeroDivisionError:
    print("最终处理除零异常")
```

在divide\_numbers函数中，捕获到ZeroDivisionError后，打印一条信息，然后使用raise重新引发该异常，使得外层的try - except块能够捕获并处理它。&#x20;


### 83.Python中常见的异常类型
#### 1. 语法相关异常

* SyntaxError：当Python解析器检测到代码不符合语法规则时抛出。通常是因为代码中存在拼写错误、缺少标点符号等。

```
# 示例：缺少冒号
if 1 > 0
    print('错误') 
# 报错：SyntaxError: invalid syntax
```

#### 2. 运行时异常

* ZeroDivisionError：尝试除以零会引发此异常。

```
result = 1 / 0 
# 报错：ZeroDivisionError: division by zero
```

* TypeError：当操作或函数应用于不适当类型的对象时抛出。例如，对字符串和整数进行加法运算。

```
s = "Hello"
num = 10
result = s + num 
# 报错：TypeError: can only concatenate str (not "int") to str
```

* NameError：尝试访问一个未定义的变量时抛出。

```
print(non_existent_variable) 
# 报错：NameError: name 'non_existent_variable' is not defined
```

* IndexError：当使用的索引超出序列（如列表、元组、字符串）的范围时抛出。

```
my_list = [1, 2, 3]
print(my_list[10]) 
# 报错：IndexError: list index out of range
```

* KeyError：当试图访问字典中不存在的键时抛出。

```
my_dict = {'a': 1}
print(my_dict['b']) 
# 报错：KeyError: 'b'
```

* AttributeError：当尝试访问对象不存在的属性或方法时抛出。

```
class MyClass:
    pass

obj = MyClass()
print(obj.non_existent_attribute) 
# 报错：AttributeError: 'MyClass' object has no attribute 'non_existent_attribute'
```

* FileNotFoundError：当试图打开一个不存在的文件时抛出。

```
with open('non_existent_file.txt', 'r') as f:
    pass 
# 报错：FileNotFoundError: [Errno 2] No such file or directory: 'non_existent_file.txt'
```

#### 3. 逻辑相关异常

* ValueError：当函数接收到一个类型正确但值不合适的参数时抛出。例如，将非数字字符串转换为整数。

```
num = int('abc') 
# 报错：ValueError: invalid literal for int() with base 10: 'abc'
```

* OverflowError：当计算结果超出数值类型的最大限制时抛出。在处理极大的整数时可能会遇到（Python的整数通常不会出现此问题，因为它会自动扩展，但在一些特定的数值计算场景下可能发生）。

```
import sys
# 模拟可能导致溢出的操作（在某些特定环境或自定义数值类型下）
x = sys.maxsize * sys.maxsize 
# 在某些有限制的数值环境下可能报错：OverflowError: integer multiplication result too large for a 32-bit int
```

​


### 84.PyCharm的程序调试
如何使用 Python 的调试工具进行代码调试?（用 Pycharm 演示，VScode 是类似的效果）

首先，设置断点，然后进入调试窗口。

调试窗口由四个部分组成：变量查看窗口、调试控制窗口、线程控制窗口和程序控制窗口。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742998619140.png)

通过这四个窗口，可以观察变量值的变化，控制程序的运行。

以死循环为例，通过设置断点，进入调试窗口，使用调试工具，找到死循环的原因并解决。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742998712440.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742998718861.jpg)

最后，取消断点，完成调试。


### 85.本章总结及章节选择题
错误类型及其解决方案。

介绍了五种常见的错误类型：粗心导致的语法错误、知识点不熟练导致的错误、思路不清导致的错误、代码逻辑错误、异常错误。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742999137807.jpg)

如何使用Python的异常处理机制来捕获并处理这些错误，包括 try、except、else 和 finally 的结构。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742999144116.jpg)

​


### 86.实战一-输入成绩如果不正确手动抛出异常
try-expect 中手动抛出异常

raise error

```python
try:
    score = int(input('please input a score'))
    if 0 <= score <= 100:
        print('score is %d' % score)
    else:
        raise Exception('score is out of range')
except Exception as e:
    print(e)
```

​


### 87.实战二-判断是否构成三角形
需求：输入三个边长，判断是否能构成三角形，如果不合适就抛出异常

```python
try:
    a = int(input("请输入a:"))
    b = int(input("请输入b:"))
    c = int(input("请输入c:"))
    if a + b > c and a + c > b and b + c > a:
        print("这三个数可以构成三角形")
    else:
        raise Exception("这三个数不能构成三角形")
except Exception as e:
    print(e)
```

​


### 88.函数的定义及调用
函数的定义：通常函数有参数和返回值

```python
def 函数名(参数列表):
    """函数文档字符串（可选），用于描述函数功能和使用说明"""
    函数体
    return 返回值  # 返回值部分可选
```

函数包含默认参数

```python
# 有参数、有返回值的函数
def add(a, b):
    """计算两个数的和并返回结果"""
    return a + b

# 有默认参数的函数
def power(base, exponent=2):
    """计算一个数的指定次幂，默认计算平方"""
    return base ** exponent
```

​


### 89.函数的参数传递-位置传参和关键字传参
函数的调用分成两种情况：

1、位置传参（默认情况），传入的第一个实参，就是第一个形参

**2、关键字参数——这个和其他语言不一样**

```python
def describe_person(name, age):
    print(f"{name} is {age} years old.")

# 默认情况
describe_person("Alice", 25)

# 调用时，虽然参数顺序和定义时不同，但通过关键字指定了参数对应的关系。
describe_person(age=30, name="Bob")
```

​


### 90.函数的参数传递-默认值参数
有默认参数的函数

```python
def power(base, exponent=2):
    """计算一个数的指定次幂，默认计算平方"""
    return base ** exponent
```

调用时，可以传1-2个参数

```python
a = power(10, 3)
b = power(10)
```

​


### 91.函数的参数传递-可变参数
在 Python 中，可变参数允许你在调用函数时传入不定数量的参数。

这在你不确定会有多少个参数需要传递给函数时非常有用。

Python 提供了两种类型的可变参数：\*args 和 \*\*kwargs。

### \*args（可变位置参数）

#### 概念

\*args 用于接收任意数量的位置参数，它会将这些参数打包成一个元组（tuple）。

args 只是一个习惯用法，你可以使用其他名称，只要前面有一个星号 \* 即可。

#### 示例代码

```python
def sum_numbers(*args):
    total = 0
    for num in args:
        total += num
    return total

# 调用函数
result1 = sum_numbers(1, 2, 3)
result2 = sum_numbers(1, 2, 3, 4, 5)

print(result1)  # 输出: 6
print(result2)  # 输出: 15
```

#### 代码解释

* 在 sum\_numbers 函数中，\*args 接收所有传递给函数的位置参数，并将它们打包成一个元组。

* 在函数内部，使用 for 循环遍历这个元组，将所有元素相加得到总和。

* 调用函数时，可以传递任意数量的参数，函数都能正确处理。

### \*\*kwargs（可变关键字参数）

#### 概念

\*\*kwargs 用于接收任意数量的关键字参数，它会将这些参数打包成一个字典（dict）。同样，kwargs 只是一个习惯用法，你可以使用其他名称，只要前面有两个星号 \*\* 即可。

#### 示例代码

```python
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# 调用函数
print_info(name="Alice", age=25, city="New York")
```

#### 代码解释

* 在 print\_info 函数中，\*\*kwargs 接收所有传递给函数的关键字参数，并将它们打包成一个字典。

* 在函数内部，使用 for 循环遍历这个字典，打印出每个键值对。

* 调用函数时，可以传递任意数量的关键字参数，函数会将它们存储在字典中并进行处理。

### 同时使用 \*args 和 \*\*kwargs

在一个函数中可以同时使用 \*args 和 \*\*kwargs，但 \*args 必须在 \*\*kwargs 之前。

这种一般比较少见。

#### 示例代码

```python
def example_function(*args, **kwargs):
    print("位置参数:", args)
    print("关键字参数:", kwargs)

# 调用函数
example_function(1, 2, 3, name="Bob", age=30)
```

#### 代码解释

* 调用 example\_function 时，前三个参数 1, 2, 3 被打包成元组传递给 \*args，后面的关键字参数 name="Bob", age=30 被打包成字典传递给 \*\*kwargs。

* 在函数内部，分别打印出位置参数和关键字参数。


### 92.函数的返回值
函数的返回值

1、如果没有 return，或者 return 后面是空，那么函数返回 None

2、返回1个参数（各种类型，例如数值，字符串，函数，列表）

3、返回多个参数，那么实际上就是返回多个参数构成的一个元组

```python
def getTwoNumber():
    a = 100
    b = 200
    return a, b

c, d = getTwoNumber()
print(c) # 100
print(d) # 200
```

​


### 93.变量的作用域
> 总结：python 中有四种作用域，实际上类似 JS 的作用域，就是名称不同
>
> 1、内置作用域（没有 window）——类似 JS 的全局作用域（挂载在 window 上）
>
> 2、全局作用域——类似 JS 的模块作用域
>
> 3、封闭作用域 —— 类似 JS 多层嵌套，函数原型和作用域链
>
> 4、局部作用域 —— 类似 JS 的函数作用域
>
> 使用变量时，从内部作用域向外部作用域寻找变量

Python 有四种主要的变量作用域，分别是局部作用域（Local）、封闭作用域（Enclosing）、全局作用域（Global）和内置作用域（Built-in），这四种作用域可以用 LEGB 规则来概括。

### 1. 内置作用域（Built-in）

这是 Python 中最顶层的作用域，它包含了 Python 内置的所有函数和变量，像 print、len、int 等。这些内置的函数和变量在代码的任何地方都能直接使用，无需额外定义。

```
# 直接使用内置函数 print
print("Hello, World!")
```

### 2. 全局作用域（Global）

全局作用域涵盖了在模块级别定义的变量和函数。

这些变量和函数在整个模块文件内都可以被访问。

你可以使用 global 关键字在函数内部修改全局变量的值。

```
# 定义全局变量
global_variable = 10

def print_global_variable():
    # 函数内部访问全局变量
    print(global_variable)

def modify_global_variable():
    global global_variable
    # 修改全局变量的值
    global_variable = 20

print_global_variable()  # 输出: 10
modify_global_variable()
print_global_variable()  # 输出: 20
```

### 3. 封闭作用域（Enclosing）

封闭作用域也被叫做嵌套作用域，它出现在嵌套函数的场景中。

当一个函数内部又定义了另一个函数时，外部函数的变量对于内部函数来说就处于封闭作用域。

你可以使用 nonlocal 关键字在内部函数中修改封闭作用域中的变量。

```
def outer_function():
    # 定义封闭作用域变量
    enclosing_variable = 5

    def inner_function():
        nonlocal enclosing_variable
        # 修改封闭作用域变量的值
        enclosing_variable = 15
        print(enclosing_variable)

    inner_function()
    print(enclosing_variable)

outer_function()
# 输出:
# 15
# 15
```

### 4. 局部作用域（Local）

局部作用域是在函数内部定义的变量所处的作用域。

这些变量只能在定义它们的函数内部被访问，函数执行结束后，这些变量就会被销毁。

```
def local_scope_example():
    # 定义局部变量
    local_variable = 30
    print(local_variable)

# 尝试在函数外部访问局部变量会报错
# print(local_variable)  

local_scope_example()  # 输出: 30
```

### LEGB 规则

当在代码里引用一个变量时，Python 会按照 LEGB 规则依次在这四种作用域中查找该变量：

1. 局部作用域（Local）：首先在当前函数内部查找变量。

2. 封闭作用域（Enclosing）：若在局部作用域中未找到，就在外层嵌套函数的作用域中查找。

3. 全局作用域（Global）：若在封闭作用域中也未找到，就在全局作用域中查找。

4. 内置作用域（Built-in）：若在全局作用域中还是未找到，就在内置作用域中查找。若在内置作用域中仍未找到，就会抛出 NameError 异常。

```
# 全局变量
x = 10

def outer():
    # 封闭作用域变量
    x = 20

    def inner():
        # 局部变量
        x = 30
        print(x)  # 输出: 30，根据 LEGB 规则，先在局部作用域找到变量 x

    inner()
    print(x)  # 输出: 20，在局部作用域未找到，在封闭作用域找到变量 x

outer()
print(x)  # 输出: 10，在局部和封闭作用域未找到，在全局作用域找到变量 x
```

​


### 94.匿名函数的使用
在 Python 中，匿名函数也被称为 lambda 函数，它是一种简洁的、临时定义的小型函数。

与普通函数不同，匿名函数没有具体的函数名，通常用于编写简单的、一次性使用的函数。

### 基本语法

匿名函数使用 lambda 关键字来定义，其基本语法如下：

```
lambda 参数列表: 表达式
```

* lambda：定义匿名函数的关键字。

* 参数列表：函数的参数，可以有零个或多个参数，多个参数之间用逗号分隔。

* 表达式：函数的返回值，匿名函数只能包含一个表达式，该表达式的结果会作为函数的返回值。

### 示例及使用场景

#### 1. 简单的数学运算

```
# 定义一个匿名函数，用于计算两个数的和
add = lambda x, y: x + y

# 调用匿名函数
result = add(3, 5)
print(result)  # 输出: 8
```

在上述代码中，lambda x, y: x + y 定义了一个匿名函数，它接收两个参数 x 和 y，并返回它们的和。将这个匿名函数赋值给变量 add，然后就可以像调用普通函数一样调用它。

#### 2. 作为参数传递给高阶函数

高阶函数是指可以接受函数作为参数或返回函数的函数。

匿名函数经常作为参数传递给高阶函数，如 map()、filter() 和 sorted() 等。

这个类似 JS 中的 reduce，filter 中的使用，参数是函数

##### map() 函数

map(fn, \[]) 函数用于对可迭代对象中的每个元素应用指定的函数，并返回一个迭代器。

```
# 定义一个列表
numbers = [1, 2, 3, 4, 5]

# 使用 map() 函数和匿名函数将列表中的每个元素平方
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(squared_numbers)  # 输出: [1, 4, 9, 16, 25]
```

在这个例子中，lambda x: x \*\* 2 是一个匿名函数，用于计算一个数的平方。map() 函数将这个匿名函数应用到 numbers 列表的每个元素上，最后将结果转换为列表。

##### filter() 函数

filter(fn, \[]) 函数用于过滤可迭代对象中的元素，只保留满足指定条件的元素，并返回一个迭代器。

```
# 定义一个列表
numbers = [1, 2, 3, 4, 5]

# 使用 filter() 函数和匿名函数过滤出列表中的偶数
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # 输出: [2, 4]
```

这里，lambda x: x % 2 == 0 是一个匿名函数，用于判断一个数是否为偶数。filter() 函数使用这个匿名函数过滤 numbers 列表，只保留偶数元素。

##### sorted() 函数

sorted(\[], fn) 函数用于对可迭代对象进行排序，并返回一个新的排序后的列表。可以使用匿名函数指定排序的规则。

```
# 定义一个包含元组的列表
students = [('Alice', 25), ('Bob', 20), ('Charlie', 22)]

# 使用 sorted() 函数和匿名函数按照年龄对学生进行排序
sorted_students = sorted(students, key=lambda student: student[1])
print(sorted_students)  # 输出: [('Bob', 20), ('Charlie', 22), ('Alice', 25)]
```

在这个例子中，lambda student: student\[1] 是一个匿名函数，用于提取每个元组中的第二个元素（即年龄）。sorted() 函数根据这个匿名函数指定的规则对 students 列表进行排序。

### 注意

* 匿名函数只能包含一个表达式，不能包含复杂的语句，如 if、for 等。如果需要实现复杂的逻辑，建议使用普通函数。

* 匿名函数通常用于简单的、一次性的操作，提高代码的简洁性和可读性。但如果匿名函数过于复杂，会使代码难以理解，此时应考虑使用普通函数。

​


### 95.函数的递归操作
#### 递归函数的基本结构

递归函数通常包含两个关键部分：

1. **基本情况（Base Case）​**：这是递归的终止条件，当满足这个条件时，函数将直接返回结果，不再进行递归调用。若没有基本情况，递归函数会陷入无限循环，最终导致栈溢出错误。

2. **递归情况（Recursive Case）​**：在不满足基本情况时，函数会调用自身来解决一个规模更小的子问题。

#### 递归的优缺点

#### 优点

* **代码简洁**：递归可以用较少的代码解决复杂的问题，使代码更具可读性和可维护性。

* **符合问题的自然结构**：对于一些具有递归结构的问题，如树和图的遍历，递归方法能够更自然地表达问题的解决方案。

#### 缺点

* **性能问题**：递归调用会消耗大量的栈空间，因为每次调用都会在栈上创建一个新的函数帧。如果递归深度过大，可能会导致栈溢出错误。

* **效率问题**：递归函数可能会进行大量的重复计算，例如在斐波那契数列的递归实现中，会多次计算相同的子问题，导致效率低下。可以使用记忆化（Memoization）等技术来优化。

案例：计算阶乘：

```python
def factorial(n):
    # 基本情况
    if n == 0 or n == 1:
        return 1
    # 递归情况
    else:
        return n * factorial(n - 1)

# 测试阶乘函数
result = factorial(5)
print(result)  # 输出: 120
```

​


### 96.斐波那契数列
基本实现

```python
def fibonacci(n):
    # 基本情况
    if n == 0:
        return 0
    elif n == 1:
        return 1
    # 递归情况
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

# 测试斐波那契函数
for i in range(10):
    print(fibonacci(i), end=" ")
# 输出: 0 1 1 2 3 5 8 13 21 34
```

记忆化技术进行优化

```python
# 记忆化斐波那契数列
memo = {}
def fibonacci_memo(n):
    if n in memo:
        return memo[n]
    # 基本情况
    if n == 0:
        result = 0
    elif n == 1:
        result = 1
    # 递归情况
    else:
        result = fibonacci_memo(n - 1) + fibonacci_memo(n - 2)
    memo[n] = result
    return result

# 测试记忆化斐波那契函数
for i in range(10):
    print(fibonacci_memo(i), end=" ")
# 输出: 0 1 1 2 3 5 8 13 21 34
```

​


### 97.常用的内置函数-类型转换函数
#### 1. int() - 转换为整数

* 作用：将数字或字符串转换为整数。

* 语法：int(x=0, base=10)

  * x：要转换的数字或字符串，默认为0。

  * base：表示数字的进制，默认为10进制。

```
# 将浮点数转换为整数
num_float = 3.14
num_int = int(num_float)
print(num_int)  

# 将二进制字符串转换为整数
binary_str = '1010'
int_from_binary = int(binary_str, 2)
print(int_from_binary)  
```

#### 2. float() - 转换为浮点数

* 作用：将整数或字符串转换为浮点数。

* 语法：float(x)

  * x：要转换的整数或字符串。

```
# 将整数转换为浮点数
num_int = 5
num_float = float(num_int)
print(num_float)  

# 将字符串转换为浮点数
float_str = '3.14'
float_num = float(float_str)
print(float_num)  
```

#### 3. str() - 转换为字符串

* 作用：将各种数据类型转换为字符串。

* 语法：str(object='')

  * object：要转换的对象，默认为空字符串。

```
num = 123
num_str = str(num)
print(type(num_str))  

bool_value = True
bool_str = str(bool_value)
print(type(bool_str))  
```

#### 4. bool() - 转换为布尔值

* 作用：将各种数据类型转换为布尔值。在Python中，大多数对象都能转换为布尔值，以下这些通常被视为False：False、0（整数）、0.0（浮点数）、空字符串''、空列表\[]、空元组()、空字典{}、空集合set() 以及None。其他对象一般被视为True。

* 语法：bool(x)

  * x：要转换的对象。

```
empty_list = []
bool_empty_list = bool(empty_list)
print(bool_empty_list)  

non_empty_list = [1]
bool_non_empty_list = bool(non_empty_list)
print(bool_non_empty_list)  
```

​

#### 5. list() - 转换为列表

* 作用：将可迭代对象（如字符串、元组、集合等）转换为列表。

* 语法：list(iterable=())

  * iterable：可迭代对象，默认为空元组。

```
my_string = 'hello'
string_to_list = list(my_string)
print(string_to_list)  

my_tuple = (1, 2, 3)
tuple_to_list = list(my_tuple)
print(tuple_to_list)  
```

#### 6. tuple() - 转换为元组

* 作用：将可迭代对象（如字符串、列表、集合等）转换为元组。

* 语法：tuple(iterable=())

  * iterable：可迭代对象，默认为空元组。

```
my_list = [1, 2, 3]
list_to_tuple = tuple(my_list)
print(list_to_tuple)  

my_set = {4, 5, 6}
set_to_tuple = tuple(my_set)
print(set_to_tuple)  
```

#### 7. set() - 转换为集合

* 作用：将可迭代对象（如字符串、列表、元组等）转换为集合。集合具有无序性和元素唯一性。

* 语法：set(iterable=())

  * iterable：可迭代对象，默认为空元组。

```
my_list = [1, 2, 2, 3]
list_to_set = set(my_list)
print(list_to_set)  

my_string = 'abcc'
string_to_set = set(my_string)
print(string_to_set)  
```

#### 8. dict() - 转换为字典

* 作用：创建字典。它可以接受多种形式的输入来构建字典。

* 语法：

  * dict()：创建一个空字典。

  * dict(iterable)：iterable必须是一个可迭代对象，其中的元素是键值对。

  * dict(\*\*kwargs)：使用关键字参数来创建字典。

```
# 创建空字典
empty_dict = dict()
print(empty_dict)  

# 从可迭代对象创建字典
my_list = [(1, 'a'), (2, 'b')]
dict_from_list = dict(my_list)
print(dict_from_list)  

# 使用关键字参数创建字典
new_dict = dict(name='Alice', age=30)
print(new_dict)  
```

​


### 98.常见的内置函数-数学函数
在Python中，有多个内置数学函数，它们主要用于执行基本的数值运算。以下是一些常见的内置数学函数：

#### 1. abs()

返回一个数的绝对值。

#### 2. divmod()

* 功能：接受两个数字参数，返回一个包含商和余数的元组，相当于(a // b, a % b)。

* 示例：

```
a = 10
b = 3
quotient, remainder = divmod(a, b)
print(quotient, remainder)  
```

#### 3. max()

返回可迭代对象中的最大值，或者在多个参数中返回最大的那个值。

* 示例：

```
my_list = [1, 5, 3]
max_value = max(my_list)
print(max_value)  

# 多个参数形式
max_num = max(10, 20, 15)
print(max_num)  
```

#### 4. min()

返回可迭代对象中的最小值，或者在多个参数中返回最小的那个值。

#### 5. pow()

计算底数的指定次幂。

```
# 计算 2 的 3 次幂
result1 = pow(2, 3)
```

#### 6. round()

* 功能：对数字进行四舍五入。可以指定保留的小数位数，默认为0。

* 示例：

```
num1 = 3.14159
rounded1 = round(num1)
print(rounded1)  

rounded2 = round(num1, 2)
print(rounded2)  
```

#### 7. sum()

* 功能：对可迭代对象中的所有元素求和，可指定一个起始值（默认为0）。

* 示例：

```
my_list = [1, 2, 3]
total = sum(my_list)
print(total)  

total_with_start = sum(my_list, 10)
print(total_with_start)  
```

除了这些内置函数，Python还提供了math模块，它包含更多高级的数学函数，后续说明


### 99.常用的内置函数-迭代器操作函数
#### range()

1. 功能：生成一个整数序列，常用于循环中。它返回一个可迭代的range对象。

2. 语法：

   * range(stop)：生成从0开始到stop - 1的整数序列。

   * range(start, stop)：生成从start开始到stop - 1的整数序列。

   * range(start, stop, step)：生成从start开始，以step为步长，到stop - 1的整数序列。

```python
# 生成 0 到 4 的整数序列
for i in range(5):
    print(i)

# 生成 3 到 7 的整数序列
for i in range(3, 8):
    print(i)

# 生成 2 到 10 ，步长为 2 的整数序列
for i in range(2, 11, 2):
    print(i)
```

#### enumerate()

1. 功能：将一个可迭代对象（如列表、元组、字符串）组合为一个索引序列，同时列出数据和数据的索引。返回一个enumerate对象，该对象是可迭代的。

2. 语法：enumerate(iterable, start = 0)，start参数指定索引的起始值，默认为0。

```python
my_list = ['apple', 'banana', 'cherry']
for index, value in enumerate(my_list):
    print(f"Index {index}: {value}")

# 自定义起始索引
for index, value in enumerate(my_list, start = 1):
    print(f"Index {index}: {value}")
```

#### zip()

1. 功能：将多个可迭代对象（如列表、元组等）对应位置的元素打包成一个个元组，然后返回由这些元组组成的可迭代对象（zip对象）。如果各个可迭代对象的长度不一致，则以最短的可迭代对象的长度为准。

2. 语法：zip(\*iterables)，\*iterables表示可以接受多个可迭代对象作为参数。

```
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
zipped = zip(list1, list2)
for pair in zipped:
    print(pair)

# 可以将 zip 对象转换为列表或元组
list_zipped = list(zip(list1, list2))
print(list_zipped)
```

#### filter()

1. 功能：用于过滤序列，根据指定的过滤函数，对可迭代对象中的每个元素进行判断，返回符合条件的元素组成的新的可迭代对象（filter对象）。

2. 语法：filter(function, iterable)，function是用于过滤的函数，如果为None，则默认过滤掉False值的元素；iterable是要过滤的可迭代对象。

```
def is_even(n):
    return n % 2 == 0

my_list = [1, 2, 3, 4, 5, 6]
filtered = filter(is_even, my_list)
for num in filtered:
    print(num)

# 使用 lambda 函数
filtered_with_lambda = filter(lambda n: n % 2 == 0, my_list)
print(list(filtered_with_lambda))
```

#### map()

1. 功能：根据提供的函数对指定序列做映射。对可迭代对象中的每个元素应用给定的函数，并返回一个新的可迭代对象（map对象），其中包含应用函数后的结果。

2. 语法：map(function, iterable, ...)，function是要应用的函数，iterable是要映射的可迭代对象，可以有多个可迭代对象，函数将依次对每个可迭代对象的对应元素进行操作。

```
def square(n):
    return n * n


my_list = [1, 2, 3, 4]
mapped = map(square, my_list)
for num in mapped:
    print(num)

# 使用 lambda 函数
mapped_with_lambda = map(lambda n: n * n, my_list)
print(list(mapped_with_lambda))

# 对多个列表进行操作
list1 = [1, 2, 3]
list2 = [4, 5, 6]
result = map(lambda x, y: x + y, list1, list2)
print(list(result))
```

#### reversed()

1. 功能：返回一个反向的迭代器，用于反向遍历序列。它接受一个序列（如列表、元组、字符串等）作为参数，并返回一个新的可迭代对象，该对象以相反的顺序生成元素。

2. 语法：reversed(seq)，seq是要反向的序列。

3. 示例：

```
my_list = [1, 2, 3, 4]
reversed_list = reversed(my_list)
for num in reversed_list:
    print(num)

my_string = 'hello'
reversed_string = ''.join(list(reversed(my_string)))
print(reversed_string)
```

#### next()

1. 功能：从迭代器中获取下一个元素。如果迭代器耗尽，则引发StopIteration异常。

2. 语法：next(iterator\[, default])，iterator是迭代器对象，default是可选参数，如果提供了default，当迭代器耗尽时，将返回default而不是引发StopIteration异常。示例：

```
my_list = [1, 2, 3]
my_iterator = iter(my_list)
print(next(my_iterator))
print(next(my_iterator))
print(next(my_iterator))
# print(next(my_iterator))  # 这行代码会引发 StopIteration 异常

my_list = [1, 2, 3]
my_iterator = iter(my_list)
print(next(my_iterator, 'No more elements'))
print(next(my_iterator, 'No more elements'))
print(next(my_iterator, 'No more elements'))
print(next(my_iterator, 'No more elements'))
```

​


### 100.常用的内置函数-其它函数
其他函数：format、len、id，type, evil 等函数

format 函数用于格式化输出，支持右对齐、左对齐和居中对齐；

```python
format(a)
# "{'username': 'Mike', 'age': 20}"
```

len 函数用于获取对象的长度，类似列表的 len 函数

```python
a = {}
a['username'] = 'Mike'
a['age'] = 20
len(a)
```

id 函数用于查看对象的内存地址；

```python
a = {}
id(a)
```

evil 函数用于类型转换和符号去除（把字符串当做 Python 代码执行）实际尽量避免使用

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742788074648.jpg)


### 101.本章总结
Python函数的基本概念、分类及使用方法。

```text
函数：将一段实现功能的代码，使用函数名进行封装，通过函数名称进行调用

def my_func(para1, para2):
    # do something
    return;
```

自定义函数的定义、调用、参数类型、变量作用域、递归函数。

函数的调用：自定义函数使用\`def\`关键字定义，通过函数名称调用。如果函数没有返回值，直接调用；如果有返回值，需要将返回值保存到变量中。

```text
my_func()
result = my_func()
```

函数的参数：形参+实参。形参：位置参数，默认值参数，可变参数；实际参数：关键字传参，或者默认位置传参。

匿名函数：只有一句函数体的函数可以使用 lambda 匿名函数代替。

函数的递归调用和终止条件。

内置函数。内置函数包括数据类型转换、数学运算、迭代器操作等。迭代器函数 \`map\`和\`filter\`函数在后续使用也很多。


### 103.实战一-计算列表元素的最大值
计算列表元素最大值

1、使用 max 函数计算

2、遍历列表，获取最大值


### 104.实战二-提取字符串中所有的数字并求和
循环字符串，判断当前的字符是否是数字，如果是数字就累加起来


### 105.实战三-字符串中字母大小写转换
需求：给定一个字符串，把其中的大写转换成小写，小写转换成大写。

遍历字符串，根据 unicode 判断大小写，如果是大写小写就互相转换。


### 106.实战四-实现操作符in的判断功能
判断一个列表中是否包含某个项（就是 js include 的使用）

实现：遍历列表，看当前项是否和目标值相等


### 107.两大编程思想-面向过程和面向对象
Python 中，既支持面向过程编程，也支持面向对象编程。

面向过程编程是一种以过程（函数）为中心的编程范式。它将程序看作一系列的步骤或操作，按照顺序依次执行这些操作来完成任务。数据和操作数据的函数是分离的，重点在于执行的步骤和顺序。

面向对象编程（OOP）将数据（属性）和操作数据的函数（方法）封装在一个称为类的结构中。对象是类的实例，通过创建对象并调用其方法来完成任务。OOP 强调数据的封装、继承和多态性。

* **代码组织和复用性**：**面向过程：​**代码以函数为中心组织，对于复杂系统，函数之间的关系可能变得复杂，复用性相对较低，尤其是当需求发生变化时，修改代码可能影响多个相关函数。**面向对象**：通过封装、继承和多态，代码结构更清晰，复用性更高。可以通过继承现有类来创建新类，避免重复编写代码，并且修改类的内部实现不会影响到使用该类的其他代码（只要接口不变）。

* **数据和操作的关系**：**面向过程**：数据和操作是分离的，函数操作的数据需要作为参数传递给函数。**面向对象**：数据和操作紧密结合在对象中，对象的方法可以直接访问和修改对象的属性。

* **适用场景**：**面向过程**：适用于简单、功能明确且不需要太多代码复用和维护的小型程序，或者对性能要求极高且逻辑较为简单的场景。**面向对象**：适用于大型、复杂的软件系统开发，便于团队协作开发，以及需求经常变化的项目，因为它具有更好的可维护性、可扩展性和代码复用性。


### 108.自定义类和创建自定义类的对象
Python 中面向对象编程的基本概念。

类和对象的概念，类是对象的抽象，是对象的集合。

如何定义自定义类，通过\`class\`关键字，例如\`class Person\`。

```python
class MyClass:
    # 类属性
    class_attribute = "这是类属性"
```

如何创建类的对象，通过类名加小括号的方式，例如\`p = Person()\`。

```python
# 创建 MyClass 的实例
my_instance = MyClass("这是实例属性的值")
```

最后，通过\`type()\`函数展示了对象的数据类型。


### 109.类的组成
Python 类的组成结构，包括**类属性、实例属性、实例方法、静态方法和类方法**。

1、类属性定义在类中方法外，实例属性在\`\_\_init\_\_\`方法中使用\`self\`点定义。

2、实例方法是在类中定义的函数，自带\`self\`参数。

3、静态方法和类方法分别，使用\`@staticmethod\`和\`@classmethod\`装饰器修饰。

4、类方法和静态方法不能访问实例属性或实例方法，但可以通过类名直接调用。

5、实例属性和实例方法，需要通过实例对象来调用。

#### 创建类

```python
class MyClass:
    # 类属性
    class_attribute = "这是类属性"

    # 构造函数，用于初始化实例属性
    def __init__(self, instance_attr):
        self.instance_attribute = instance_attr

    # 实例方法
    def instance_method(self):
        print(f"这是实例方法，实例属性为: {self.instance_attribute}")

    # 类方法，使用 @classmethod 装饰器
    @classmethod
    def class_method(cls):
        print(f"这是类方法，类属性为: {cls.class_attribute}")

    # 静态方法，使用 @staticmethod 装饰器
    @staticmethod
    def static_method():
        print("这是静态方法")
```

* `class MyClass:` 定义了一个名为`MyClass`的类。

* `class_attribute` 是类属性，所有类的实例都可以访问。

* `__init__` 是构造函数，用于在创建实例时初始化实例属性。`self`代表类的实例本身，通过`self`可以访问和设置实例的属性。

* `instance_method` 是实例方法，它需要通过类的实例来调用，并且可以访问实例的属性。

* `class_method` 是类方法，使用`@classmethod`装饰器定义。类方法的第一个参数通常命名为`cls`，代表类本身，它可以访问和修改类属性。

* `static_method` 是静态方法，使用`@staticmethod`装饰器定义。静态方法不需要访问类或实例的属性，它与类的关系更像是一种逻辑上的关联。

#### 类的实例

```python
# 创建 MyClass 的实例
my_instance = MyClass("这是实例属性的值")

# 访问实例属性
print(my_instance.instance_attribute)

# 调用实例方法
my_instance.instance_method()

# 调用类方法
MyClass.class_method()

# 调用静态方法
MyClass.static_method()
```

* `my_instance = MyClass("这是实例属性的值")` 创建了`MyClass`类的一个实例`my_instance`，并传递参数初始化实例属性`instance_attribute`。

* 通过实例`my_instance`可以访问实例属性`instance_attribute`和调用实例方法`instance_method`。

* 类方法和静态方法既可以通过类名（如`MyClass.class_method()`和`MyClass.static_method()`）调用，也可以通过实例调用，但通常使用类名调用。

#### 类方法和静态方法区别

类方法主要用于处理与类相关的操作，能访问和修改类属性；通常用于操作类级别的数据或创建与类相关的工厂方法。

而静态方法更像是独立于类和实例的普通函数，只是在逻辑上与类相关联，不依赖于类或实例的状态。常用于实现一些与类有逻辑关联，但又不需要访问类或实例状态的工具函数。


### 110.使用类模板创建N多个对象
如何通过 Python 编写一个学生类并创建多个学生对象。

首先定义了一个学生类，包括类属性和实例方法。

```python
class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    def display_info(self):
        print(f"姓名: {self.name}, 年龄: {self.age}, 年级: {self.grade}")
```

然后根据需求创建学生对象

```python
# 创建多个学生对象
student1 = Student("Alice", 18, "高三")
student2 = Student("Bob", 17, "高二")
student3 = Student("Charlie", 16, "高一")

# 调用对象的方法显示信息
student1.display_info()
student2.display_info()
student3.display_info()
```

整个过程展示了类的模板特性，对象的实例化过程。

​


### 111.动态绑定属性和方法
类的概念，动态绑定属性和方法的实现。

类是模板，可以创建多个对象，对象属性名称相同，但值可以不同。

支持动态绑定属性，即在创建对象后可以绑定独有的属性。——直接使用 点语法 就可以给实例绑定新的属性

```python
class Person:
    def __init__(self, name):
        self.name = name

# 创建一个 Person 实例
p = Person("Alice")

# 动态绑定一个新的属性
p.age = 25

# 访问动态绑定的属性
print(f"{p.name} 的年龄是 {p.age}")
```

支持动态绑定方法，即在类外定义一个函数，通过赋值方式将其绑定到特定对象的方法上。需要先定义一个方法（函数），然后用 MethodType(fn\_name, obj) 去动态绑定一个方法。

```python
from types import MethodType

class Cat:
    def __init__(self, name):
        self.name = name

# 定义一个方法
def say_meow(self):
    print(f"{self.name} 说：喵~")

# 创建一个 Cat 实例
cat = Cat("Tom")

# 动态绑定方法
cat.say_meow = MethodType(say_meow, cat)

# 调用动态绑定的方法
cat.say_meow()
```

​


### 112.Python中的权限控制
Python中的封装概念及权限控制。

封装是面向对象三大特征之一，旨在隐藏内部细节，通过提供操作方法对外暴露功能。

Python 通过下划线来控制属性和方法的访问权限，包括单下划线、双下划线和首尾双下划线。

1、没有下划线：任何情况都能访问

**2、单下划线表示受保护的成员（外部可以访问，但是不建议访问）​**

**3、双下划线表示私有成员（外部不能直接访问，但是可以通过特殊形式访问 stu.\_Student\_\_age 访问）​**

**4、首尾双下划线表示特殊的方法**

```python
class MyClass:
    def __init__(self):
        self._protected_attr = 10  # 单下划线表示受保护的属性
        self.__private_attr = 20  # 双下划线表示私有属性

    def _protected_method(self):
        print("这是一个受保护的方法")

    def __private_method(self):
        print("这是一个私有方法")

    def public_method(self):
        print(f"可以在公共方法中访问受保护属性: {self._protected_attr}")
        print(f"可以在公共方法中调用私有方法")
        self.__private_method()


# 创建类的实例
obj = MyClass()

# 访问受保护的属性和方法
print(f"外部可以访问受保护属性，但约定不直接访问: {obj._protected_attr}")
obj._protected_method()

# 尝试直接访问私有属性和方法（会报错）
# print(obj.__private_attr)  
# obj.__private_method()  

# 通过公共方法间接访问私有属性和方法
obj.public_method()



# 解释首尾双下划线的特殊方法
# __len__ 是一个特殊方法。特殊方法通常在特定的操作中被自动调用，例如 len() 函数会调用对象的 __len__ 方法。
class AnotherClass:
    def __init__(self):
        pass

    def __len__(self):
        return 5

another_obj = AnotherClass()
print(f"调用特殊方法 __len__: {len(another_obj)}")
```

​


### 113.属性的设置
使用 Python 的装饰器将方法转换为属性，从而实现对属性的访问和设置。

这个实际生产中使用不多（因为设置了方法就是让用户使用）

访问和修改属性值

```python
class Student:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    # 创建一个名为`student`的类，展示了如何使用`@property`装饰器将私有属性转换为可访问的属性。
    @property
    def name(self):
        return self.__name
    
    # 通过设置`setter`方法，实现了对属性的可写操作。
    @name.setter
    def name(self, new_name):
        if isinstance(new_name, str) and new_name:
            self.__name = new_name
        else:
            raise ValueError("名字必须是有效的非空字符串")

    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, new_age):
        if isinstance(new_age, int) and 0 < new_age < 120:
            self.__age = new_age
        else:
            raise ValueError("年龄必须是0到120之间的整数")


# 创建学生对象
student1 = Student("Alice", 20)

# 获取属性
print(f"学生名字: {student1.name}")
print(f"学生年龄: {student1.age}")

# 设置属性
student1.name = "Bob"
student1.age = 21

print(f"修改后的学生名字: {student1.name}")
print(f"修改后的学生年龄: {student1.age}")

# 尝试设置无效的属性值
try:
    student1.name = 123
except ValueError as ve:
    print(f"错误: {ve}")

try:
    student1.age = -5
except ValueError as ve:
    print(f"错误: {ve}")
```

1. `Student`类初始化时定义了两个私有属性`__name`和`__age`。

2. 使用`@property`装饰器定义了`name`和`age`的读取方法，使得可以像访问普通属性一样获取私有属性的值。

3. 使用`@name.setter`和`@age.setter`装饰器分别定义了`name`和`age`的设置方法。在设置方法中添加了数据验证逻辑，确保设置的`name`是有效的非空字符串，`age`是 0 到 120 之间的整数，否则抛出`ValueError`异常。

4. 创建`student1`对象后，展示了获取和设置属性的操作，并在最后尝试设置无效值，以展示异常处理。


### 114.继承的概念
Python面向对象编程中的继承概念。

一个子类可以继承多个父类的特性，以及一个父类可以拥有多个子类的情况。

具体操作包括创建父类\`person\`，以及其子类\`student\`和\`doctor\`，并在子类中调用父类的初始化方法进行实例属性赋值。

```python
# 父类如果省略括号，就是默认继承自 Object 对象
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# 子类括号中写入父类的名字（一个或者多个，那么就拥有了父类的方法和属性）
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id


class Doctor(Person):
    def __init__(self, name, age, department):
        super().__init__(name, age)
        self.department = department


# 创建Student类的实例
student = Student("Alice", 20, "S001")
print(f"学生姓名: {student.name}, 年龄: {student.age}, 学号: {student.student_id}")

# 创建Doctor类的实例
doctor = Doctor("Bob", 35, "内科")
print(f"医生姓名: {doctor.name}, 年龄: {doctor.age}, 科室: {doctor.department}")
```

1. 定义了`Person`类作为父类，它有`__init__`方法，用于初始化`name`和`age`两个实例属性。

2. `Student`类继承自`Person`类，在其`__init__`方法中，通过`super().__init__(name, age)`调用父类的初始化方法来初始化`name`和`age`属性，然后再初始化自己特有的`student_id`属性。

3. `Doctor`类同样继承自`Person`类，类似地调用父类初始化方法，并初始化自己的`department`属性。

4. 分别创建了`Student`和`Doctor`类的实例，并输出它们的属性值，展示了继承关系下的属性初始化和访问。


### 115.Python中的多继承
Python中的多继承机制。

与许多其他编程语言不同，Python允许一个子类继承多个父类，只需用英文逗号分隔。

```python
class C(A, B):
    pass
```

子类将拥有来自多个父类的公有和受保护的成员。

通过示例展示了如何创建父类和子类，并调用多个父类的初始化方法。

创建子类对象并调用了父类的方法，展示了多继承的执行过程。


### 116.方法重写
Python中的方法重写。

使用场景：当父类的方法不能完全满足子类的需求时，子类可以重写父类的方法。

详细描述了方法重写的步骤，包括子类必须继承父类的方法，并且方法名称必须与父类的方法名称相同。

如何调用父类的方法以及如何在子类中重写父类的方法。

强调了在子类中重写父类方法时，程序会首先查找子类中是否有该方法，如果没有才会去父类中查找（类似原型链）。


### 117.Python中的多态
Python中的多态。

多态：在不知道变量所引用的对象具体数据类型的情况下，依然可以通过这个变量去调用对象的方法。

在程序运行过程中，会根据变量所引用对象的数据类型，动态地决定调用哪个对象的方法。

> 笔记：给一个函数传递不同的对象，然后调用不同对象的方法。例如 Cat 和 Dog 都有某个方法。我们外部定义了一个 func 如果参数是 cat 就调用 cat 的方法，如果参数是 dog 就调用 dog 的方法，这样就实现了调用一个函数实现了两个不同的效果（多态）

Python语言中的多态不关心对象的数据类型，也不关心是否具有继承关系，只关心是否有同名的方法。

多态的实现可以提高程序的可扩展性。


### 118.object类
Python 中 object 类

object 类是所有类的直接或间接父类，所有类都继承了它的属性和方法。

通过内置函数 DIR，可以查看指定对象的属性。

如何重写父类的 STR 方法，使其返回对象的描述信息，而不是内存地址（实际不要这样做）

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742783627825.jpg)


### 119.对象的特殊方法
Python中的特殊方法，特别是那些与运算符相关的特殊方法。

这些方法允许我们自定义对象的操作，例如加法、减法、比较运算等。

通过调用这些特殊方法，如\`\_\_add\_\_\`、\`\_\_sub\_\_\`、\`\_\_lt\_\_\`等，我们可以实现自定义对象的运算逻辑。

例如，当我们执行\`A + B\`时，实际上是调用了\`A.\_\_add\_\_(B)\`方法。

这些特殊方法使得Python对象能够灵活地处理各种运算，增强了代码的可扩展性和灵活性。

实际开发不会去重写 object 对象的方法

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742783584687.jpg)


### 120.Python中的特殊属性
Python中的特殊属性和方法。

特殊属性和特殊方法的概念，接着详细说明了字典、类、父类、方法等特殊属性的使用。

通过创建A、B、C三个类，展示了如何获取对象的属性字典、所属的类、父类、层次结构以及子类列表。

最后强调了这些特殊属性和方法的重要性

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742783541695.jpg)


### 121.类的深拷贝与浅拷贝
Python中的类深拷贝与浅拷贝的概念与区别。

解释了变量赋值时指向同一个对象的问题。

通过画内存图的方式，详细解释了浅拷贝和深拷贝的区别。

* 浅拷贝使用 copy 模块的 deep copy 函数，会创建一个新的对象，但其子对象仍然指向原来的对象。

* 深拷贝会递归地拷贝对象中所有的子对象，生成一个全新的对象。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742783669303.jpg)

​


### 122.本章总结
Python编程中的两大思想：面向过程和面向对象。

* 面向过程是功能上的封装，解决问题的思维方式是线性思维（适合简单问题）

* 面向对象是属性和行为的封装，解决问题的思维方式是找参与者，找参与者的互相的关系（适合复杂问题）

Python中一切皆对象，通过内置函数type可以查看对象的数据类型。

类的定义、对象的创建、类属性和方法的使用、访问权限控制、深拷贝和浅拷贝等关键概念。

面向对象编程的三大特征是封装、继承和多态

* 封装隐藏内部细节，提高程序的健壮性；

* 继承可以实现代码的复用性；

* 多态提高程序的可扩展性和可维护性。

Object类是所有类的直接或间接父类，任何类都具有object的属性和方法。


### 124.实战一-计算圆的面积和周长
需求：如何使用面向对象的思想来定义一个圆的类，并计算其面积和周长。

首先，我们定义了一个名为 Circle 的类，并传入一个参数 r 作为半径。

接着，我们定义了两个方法：get\_area 和 get\_circumference，分别用于计算圆的面积和周长。

然后，我们从键盘输入半径，创建圆的对象，并调用这两个方法来计算并输出圆的面积和周长。

最后，我们运行了这个程序，输入了半径为4，计算出了圆的面积和周长。

```python
class Circle():
    def __init__(self, r):
        self.r = r
    def get_area(self):
        return self.r * self.r

    def get_circumference(self):
        return 2 * 3.14 * self.r

c = Circle(4)

print(c.get_area())
print(c.get_circumference())
```

​


### 125.实战二-定义学生类录入5个学生信息存储到列表中
需求：如何使用Python编写一个学生类，并录入五个学生的信息存储到列表中。

首先定义了一个名为student的学生类，包含姓名、年龄、性别和分数四个属性，以及一个用于输出信息的实例方法info。

然后通过循环录入五位学生的信息，使用字符串的split方法将输入的信息分割成各个属性，创建学生对象并添加到列表中，

最后遍历列表并调用每个学生对象的info方法输出学生信息。

这道题考察了面向对象和字符串分割方法的使用。


### 126.实战三-使用面向对象思想实现乐器弹奏
使用 Python 的面向对象思想，去实现乐器演奏的实战案例（继承-多态）。

通过定义一个父类乐器类，及其子类二胡、钢琴和小提琴，重写了父类的 make\_sound 方法，实现了不同乐器的演奏效果。

通过定义一个play函数，传入不同乐器对象，调用其 make\_sound 方法，展示了多态的特性。

```python
class Instrucment():
    def make_sound(self):
        print("default sound")

# 三个子类继承父类，同时改写父类的方法（继承性），方法重写
class Piano(Instrucment):
    def make_sound(self):
        print("piano")

class Guitar(Instrucment):
    def make_sound(self):
        print("guitar")

class Erhu(Instrucment):
    def make_sound(self):
        print("erhu")

# 定义函数
def play(obj):
    obj.make_sound()

# 创建三个实例对象 
piano = Piano()
guitar = Guitar()
erhu = Erhu()

# 通过给函数传递不同对象，执行不同对象的方法（多态性）
play(piano)
play(guitar)
play(erhu)

```

​


### 127.实战四-编写出租车和家用轿车类
需求：包括自定义类描述出租车和家用轿车。

1、定义父类Car，包含车型和车牌

2、分别定义子类Taxi和FlyCar，Taxi包含出租车公司，FlyCar包含车主姓名。

3、通过继承和重写方法，实现了出租车和家用轿车的启动和停止功能。

```python
class Car:
    def __init__(self, type, number):
        self.type = type
        self.number = number

    def start(self):
        print('car start')

    def stop(self):
        print('car stop')

class Taxi(Car):
    def __init__(self, type, number, company):
        super().__init__(type, number)
        self.company = company
    def start(self):
        print('taxi start')
    def stop(self):
        print('taxi stop')

# 家用车类似
```

​


### 128.模块的简介及自定义模块
#### Python基础第十章 模块及常用的第三方模块

<img src="https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742783729684.jpg" alt="" title="" width="434" height="262" />

模块：一个后缀名为.py的 Python 文件就是一个模块。

模块可以定义函数、类等，提高代码的可维护性和可重复调用性。

模块的命名要求全部使用小写字母，多个单词之间使用下划线进行分割。

模块的分类：**系统内置模块、自定义模块、第三方模块**。

通过自定义模块的创建，展示了如何在模块中定义变量和函数。


### 129.模块的导入
模块的导入方式。

1、直接导入模块的方式，即\`import my\_info\`，然后通过别名导入\`import my\_info as A\`。

2、从模块中导入特定变量或函数的方式，如\`from my\_info import name, info\`。

3、使用通配符\`\*\`导入所有内容的方式\`from my\_info import \*\`。

当两个模块包含同名函数时的解决方法，即通过直接导入模块\`import my\_info, introduce\`来避免覆盖。


### 130.Python中的包
Python中的包概念。

包可以避免模块名称冲突，通过 INIT 文件进行管理。

创建包时，需要遵循命名规范。

包中可以包含模块，模块可以是 Python 文件。

导入包中的模块时，可以使用 import 或 from...import 的形式。

INIT文件中的代码，在导入包时会自动执行一次。

此外，还可以使用通配符\*导入模块中的所有内容。


### 131.主程序运行
为什么要引入主程序执行？因为通过 import 引入模块时，会执行内部的全局环境中的代码。设置主程序运行后，判断如果当前模块时执行的主程序，再运行某些代码。如果不是主程序，而是模块依赖程序，那么不执行这部分代码。

module\_a.py

```python
def func():
    print('hello')

# 如果当前模块是主程序，那么执行 func 函数；其他情况下不执行
if __name__ == '__main__':
    func()
```

module\_b.py

```python
import module_a
```

主程序运行的功能及其应用。

通过创建两个模块 model a 和 model b，演示了主程序运行的重要性。

主程序运行，可以将不希望在其他模块中被执行的代码隔离，防止**全局变量**的数据被输出执行。

通过在模块中添加 if 语句判断模块名称，可以实现主程序运行，阻止代码在其他模块中被执行。

这种功能在模块导入时非常有用，可以有效控制代码的执行顺序和范围。


### 132.常用内置模块及random模块
#### Python内置模块

可以从Python解析器的安装位置看到，默认安装了 170 个。

其中 os  和 json 模块在后面章节讲述。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742784416923.jpg)

#### random模块

该模块用于产生随机数，包括随机种子的设置、0-1之间的随机小数、A-B之间的整数、指定范围的随机小数、从序列中随机选择元素以及随机打乱序列。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1743317168825.jpg)


### 133.time模块
Python内置的time模块的使用（类似 JS Date 对象 + dayjs 支持时间对象和时间字符串的转换，格式化等操作）

获取当前时间戳、获取指定时间的本地时间、将时间戳转换为易读的字符串、时间格式化等。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742787430384.jpg)

如何将字符串转换为时间类型（struct time）sleep 函数让程序暂停一定时间。

具体格式化字符串，所有变成语言通用，YYYY-MM-DD HH:mm:ss 实现格式。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1743318372124.jpg)

代码演示

```python
import time

now = time.time() # 获取当前时间（相对于1970年的毫秒数）

time.ctime() # 获取当前时间（转换成已读的字符串，2025-03-30 xxx）

now_date = time.localtime() # 默认不传参，返回当前时间对象，可以进一步获取年月日时分秒，注意拼写

print(now_date.tm_year, now_date.tm_mon, now_date.tm_mday)

some_date = time.localtime(30) # 如果传参，就返回 1970 + 30秒时间对应的时间对象
```

时间对象的转换（对象转换字符串，字符串转换成对象，类似 dayjs.parse dayjs.format 函数） str f-p time

```python
time.strftime(format, time_obj)
time.strptime(time_str, format)
```

​


### 134.datetime模块
问题：有了 date 为什么还要别的模块？因为 date 模块不方便计算时间间隔，所以增加了 datetime 模块

Python中 datetime 类的使用（注意是类，不是方法）

datetime 类结合了日期和时间的特点，表示某个时刻，包含年月日时、分秒及微秒等属性。

通过\`datetime.now()\`方法可获取当前系统时间。

```python
from datetime import datetime

dt = datetime.now()
```

同时，手动创建DTIME对象，传入年月日时分秒等参数，生成特定时间。

```python
dt2 = datetime(2025, 12, 10)
print(dt2, dt2.year, dt2.month, dt2.day)
```

DTIME类支持与字符串的转换，通过\`strftime()\`方法将DTIME类型转换为字符串，反之亦然。

DTIME类支持比较大小，数据类型为\`datetime\`，直接用大于小于比较就行，返回布尔值。

```python
from datetime import datetime

dt1 = datetime(2025, 12, 10)
dt2 = datetime(2025, 12, 20)
print(dt1 > dt2)
```

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742787472198.jpg)

转换时间格式，类似 strdtime, strptime 方法，进行时间对象和字符串的转换

​


### 135. datetime 的 timedelta 方法使用
Python中\`datetime\`模块中的\`timedelta\`类的使用。

该类可以方便地对日期进行小时、分钟、秒、毫秒的加减运算，但不能进行年、月的加减。

通过相减运算得到两个\`datetime\`对象之间的时间差 timedelta，以及如何通过传入参数创建\`timedelta\`对象。

```python
from datetime import datetime
from datetime import timedelta

delta1 = datetime(2025, 05, 01) - datetime(2025, 01, 21)
# delta 就是 timedelta 类型，时间区间

datetime(2025, 01, 01) + delta1
# 获取 2025-01-01 增加一段时间的一个新的 datetime 时间
```

也可以直接使用 timedelta 创建时间段

```python
from datetime import timedelta

# 创建一个10天的时间段
timedelta(10)

# 创建一个10天5秒的时间段
timedelta(10, 5)
```

​


### 136.第三方模块的安装与卸载
Python的第三方模块的安装、卸载以及pip命令的升级。

Python 拥有众多系统内置模块和十几万个第三方模块。

这些模块由全球的Python爱好者、程序员和各行业专家开发和维护。

* 安装第三方模块的语法是\`pip install 模块名称\`

* 卸载模块的语法是\`pip uninstall 模块名称\`

* 升级pip命令的语法是\`python -m pip install --upgrade pip\`。

在安装过程中，如果遇到需要升级pip的情况，可以使用上述语法进行升级。


### 137.requests模块
使用 Python 进行网络爬虫的全过程。

1、使用 request 库进行网络爬虫，包括安装库、获取网页数据、设置编码格式、提取所需数据等。

2、如何爬取天气预报中景区的信息，并使用列表推导式进行数据处理。

3、使用Python编写爬虫程序来获取网页数据，特别是百度的logo图片，包括发送请求、提取信息、保存二进制数据等。

<img src="https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742787633503.jpg" alt="" title="" width="735" height="262" />

实际爬取了静态页面（太极拳排名网站），需要跳转（基金网页）

​


### 138.openpyxl模块
使用Python的 openpyxl 库来处理 Excel 文件

包括安装、使用、打开、创建和保存Excel文件

将爬取的天气数据存储到Excel文件中

并从Excel文件中读取数据

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742787703959.jpg)

​


### 139.pdfplumber模块
如何使用 Python 的第三方模块 Pdf plumber 来读取和处理PDF文件。

1、安装模块，然后通过导入和使用with语句打开PDF文件。

2、通过循环遍历PDF的每一页，使用特定的方法来提取内容。

3、展示了如何从PDF文件中提取指定页的数据。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742787763367.jpg)

​


### 140.Numpy模块
使用 Python 的 Numpy 模块进行图像灰度处理。

1、numpy 模块作为Python数据分析方向的第三方库，用于处理数组和矩阵数据。

2、安装使用 numpy 模块，如何将彩色图片转换为灰度图片。

npmpy 模块在人工智能领域中的重要性。


### 141.Pandas模块与matplotlib模块
使用 Python 的 pandas 和 MATLAB 模块进行数据分析与可视化。

* 通过pandas读取Excel数据，特别是京东手机销售数据。

* 解决中文乱码问题，使用MATLAB绘制饼图，展示北京各手机品牌出库量的占比(数据路径的重要性)

* 数据分析课程的相关内容。


### 142.PyEcharts模块
如何使用 PyEcharts 进行数据可视化，特别是如何绘制饼图。

* 安装 PyEcharts 库，然后导入相关模块。

* 准备数据，数据格式为二维列表。

* 使用ADD函数将数据传入，设置标题和样式，即可生成饼图。

* 选择不同的图表样式。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742787869846.jpg)


### 143.PIL模块图像的处理
如何使用 Python 的 PIL 库进行图像处理，特别是图像颜色的交换。

PIL库用于图像处理的功能，指出与绘图数据可视化的差异。

安装和使用PIL库，通过加载图像并提取颜色通道，展示了如何将RGB图像转换为RBG，最终保存为新图像。

通过颜色交换，展示了图像效果的变化。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742787912546.jpg)

实际案例：使用 pil 模块进行 img 和 png 模块的转换


### 144.jieba模块实现中文分词
如何使用 Python 中的 jieba 模块进行中文分词。

1、导入  jieba 模块并读取文本数据。

2、使用  jieba 进行分词，统计词频并去重。

3、通过字典和列表统计词频，最后对结果进行排序并展示。

可以分析文本中词语的频率。

笔记：实际案例，使用 jieba 统计小说中的高频词，然后进一步机器学习提取内容。


### 145.PyInstaller模块打包源文件
使用 pyinstaller 将Python源文件打包成可执行的EXE文件。

打包的语法为 pyinstaller -F + 文件路径

注：打包的文件夹路径不能有中文

打包完成后，生成的 EXE 文件，需要手动复制到程序运行的文件夹中。通过双击运行EXE文件，可以看到程序的输出结果。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742787979758.jpg)


### 146.本章总结
本章介绍了常用的第三方库，这部分是经常开发遇到的。注意第三方库的版本，避免教程和实际使用的版本不同。

重在实际使用

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-04/image-1743574873190.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-04/image-1743574880111.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-04/image-1743574887401.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-04/image-1743574894415.jpg)

​

​


### 147.实战一-模拟高铁售票系统
Python自定义模块的使用，包括模块命名规则、文件扩展名、模块与标准模块的冲突解决等。

模拟了高铁售票系统的开发，使用了第三方模块\`prettytable\`进行数据的展示和操作。

展示了如何实现座位的初始化显示和购票功能。

prettytable 的基本使用

```python
from prettytable import PrettyTable

table = PrettyTable()

table.field_names = ["水果名称", "价格（元/斤）", "颜色"]

table.add_row(["苹果", 5, "红色"])
table.add_row(["香蕉", 3, "黄色"])
table.add_row(["葡萄", 8, "紫色"])

print(table)

```

效果

```text
+----------+---------------+------+
| 水果名称 | 价格（元/斤） | 颜色 |
+----------+---------------+------+
|   苹果   |       5       | 红色 |
|   香蕉   |       3       | 黄色 |
|   葡萄   |       8       | 紫色 |
+----------+---------------+------+
```

​


### 148.实战二-推算几天后的日期
使用 Python 内置的 datetime 模块编写一个程序，来推算开始日期和间隔天数之后的结束日期。

通过定义一个函数，用户可以输入开始日期和间隔天数，程序将计算并输出结束日期。

具体步骤包括字符串输入、类型转换、日期计算和输出结果。


### 149.实战三-华为笔记本评价词云图
如何使用 Python 的第三方库 jieba 进行中文分词，并使用 Word Cloud 生成词云图。

安装并导入WordCloud库，然后从文本文件读取数据，进行中文分词，排除某些关键词，最后生成词云图并保存为图片。

从数据处理到图形生成的全过程。

```python
# pip install jieba wordcloud matplotlib
import jieba
from wordcloud import WordCloud
import matplotlib.pyplot as plt

try:
    with open('example.txt', 'r', encoding='utf-8') as file:
        text = file.read()
except FileNotFoundError:
    print("未找到指定的文本文件，请检查文件路径和文件名。")
else:
    words = jieba.lcut(text)
    segmented_text = " ".join(words)

    # 创建词云对象
    wordcloud = WordCloud(
        # 指定中文字体，避免中文显示乱码（不同操作系统使用不同的路径）
        # font_path='simhei.ttf',
        font_path='/System/Library/Fonts/STHeiti Medium.ttc',
        # 设置样式
        background_color='white',
        width=800,
        height=600,
    ).generate(segmented_text)

    # 显示词云图
    plt.figure(figsize=(8, 6))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')
    plt.show()

    wordcloud.to_file('wordcloud.png')

```

​


### 150.文件的概述及基本操作步骤
#### Python 文件及IO操作

首先，定义了文件的概念，包括文本文件和二进制文件。

然后，详细讲解了如何使用Python操作文件，包括打开文件、操作文件和关闭文件三个步骤。

通过示例代码，演示了如何向文件中写入数据和读取数据。

* 打开文件，创建或打开，使用 f.open

* 写入文件，关闭文件，使用对象名.close

最后，强调了在操作完文件后，必须关闭文件对象。


### 151.文件的写入操作
文件的基本操作步骤，包括文件的存储状态和占用状态，以及通过open函数打开文件后需要进行关闭操作。

同时，详细解释了文件的打开模式，如只读模式（R）、覆盖写模式（W）和追加模式（A）。

此外，还介绍了文件的读写方法，如read、right、readline等，以及seek函数用于改变文件操作指针的位置。

最后，通过示例代码演示了文件的写入操作，包括将字符串和列表写入文件。


### 152.文件的读取操作及文件复制
Python文件的读取与复制操作。

首先，介绍了如何读取文件内容，包括读取全部、指定字符数和读取一行。

接着，讲解了文件的复制功能，通过边读边写的方式，将一个文件的内容复制到另一个文件中。

最后，通过实例演示了如何使用Python实现文件的复制操作。


### 153.with语句的使用
文件的操作步骤，强调了使用with语句进行文件操作的重要性。

with语句能够自动关闭文件，避免了手动关闭文件可能带来的问题。

通过实例演示了如何使用with语句进行文件的读取、写入和复制操作，展示了其简洁性和高效性。


### 154.一维数据和二维数据的存储与读取
数据的组织维度，包括一维数据、二维数据和高维数据。

其中，一维数据使用Python中的列表、元组或集合进行存储，二维数据则使用二维列表存储，类似于Excel表格。

高维数据使用字典进行存储，并通过JSON模块处理JSON格式的数据。

一维数据和二维数据的存储与读取过程。


### 155.高维数据的存储和读取
高维数据的存储与读取。

通过Python的JSON模块，无需类型转换，即可方便地存储和读取数据。

使用\`json.dumps()\`将Python数据类型转换为JSON格式存储

使用\`json.loads()\`将JSON格式的字符串转换为Python数据类型读取

此外，数据还可以编码到文件中，使用\`json.dump()\`，从文件中解码使用\`json.load()\`。

在示例中，展示了高维数据的存储和读取过程，确保数据的格式和美观。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1743384841127.jpg)


### 156.os模块中常中的函数
Python中OS模块的使用，包括获取当前工作路径、列出指定路径下的文件和目录、创建和删除目录和文件、改变当前工作路径、遍历目录数等常用函数的使用方法。

此外，还介绍了OS模块的高级操作，如递归遍历文件及文件夹、删除文件、重命名文件、获取文件信息以及启动文件等。

通过实例演示了如何使用OS模块进行文件操作，如删除文件、重命名文件、获取文件信息等。

同时，介绍了如何使用time模块将时间戳转换为可读的时间格式。

最后，展示了如何使用OS模块启动文件，如启动计算器、Python解释器等。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1742788219044.jpg)


### 157.os.path子模块中常用的函数
OS 模块的子模块 pass 模块的功能及使用方法。

该模块提供了一系列目录和文件操作的函数，

* 获取绝对路径（abs pass）

* 判断文件或目录是否存在（is this）

* 路径拼接（join）

* 分割文件名和后缀名（split test）

* 提取文件名和路径（base name和dir name）

* 判断路径和文件的有效性（is dir和is file）


### 158.本章总结和章节选择题
Python文件操作的基本概念和操作方法。

首先，介绍了文件的定义和分类，包括文本文件和二进制文件，并详细讲解了文件的打开、读写和关闭操作。

接着，讲解了数据的组织维度，包括一维、二维和高维数据的存储方式。

然后，介绍了OS模块和os.path模块的相关函数，用于进行文件和目录的操作。

最后，通过练习题巩固了所学知识，包括文件的打开模式、读写操作、文件对象的创建和关闭等。


### 159.实战一-批量创建文件
如何使用Python批量创建文件。

通过定义函数，用户可以指定路径和文件名，创建3000个文本文件。

这些文件名由序号、物资类别和随机生成的用户识别码组成。

首先，导入随机数和OS模块，定义函数创建文件名。

然后，使用循环和条件语句生成文件名，并将其添加到文件名列表中。

接着，定义另一个函数创建文件，并在指定的路径下创建文件。

最后，调用函数并运行，成功创建了3000个文本文件。


### 160.实战二-批量创建目录
如何使用Python批量创建文件夹。

首先，导入os模块和其子模块。

然后，定义一个函数mkdir，接受路径和目录数量作为参数。

在创建目录前，先判断指定路径是否存在，如果不存在则创建。

接着，通过input函数获取用户输入的目录数量，调用mkdir函数进行创建。

最后，运行示例并验证创建成功。


### 161.实战三-记录登录日志并查看
如何使用Python编写一个用户登录系统，包括记录和查看登录日志的功能。

通过导入时间模块，定义函数进行用户操作选择，创建日志记录和读取功能。

程序首先判断用户名和密码是否正确，正确后记录登录信息并显示操作选项，用户可以选择查看登录日志或退出。

程序还包含错误提示和循环控制，确保用户输入的合法性。

最后，通过调整写入日志的格式，使得日志记录清晰易读。


### 162.实战四-模块淘宝自动回复
无

​


### 163.网络协议概述
计算机网络，包括七层协议和四层协议。

1、TCP/IP协议和UDP协议，以及如何通过 socket套接字 进行 TCP 和 UDP 编程。

2、介绍了IP地址的概念和类型，以及TCP协议的可靠性和顺序传输特性。

3、通过用户登录的例子，详细解释了数据在 TCP IP 协议四层结构中的传输过程。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-03/image-1743430349392.jpg)


### 164.TCP协议与UDP协议的区别以及Socket套接字
#### TCP 和 UDP

TCP可靠的原理：三次握手四次挥手

TCP和UDP协议的区别与应用。

* TCP协议是面向连接的可靠协议，通过三次握手确保数据传输的可靠性。

* UDP协议是无连接的，传输效率高，但无法保证数据传输的可靠性。

Python中的socket类用于实现网络通信，通过绑定IP地址和端口号，实现TCP和UDP编程。

* TCP编程中，客户端使用connect连接服务器，服务器端使用accept等待连接。

* UDP编程中，使用sendto发送数据，使用receivefrom接收数据。

#### Socket 对象

python 原生语法发送接收 tcp-udp 数据时，需要 socket 对象。

具体发送接收的方法如下

无论是TCP还是UDP，最后都需要关闭套接字。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-04/image-1743467726284.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-04/image-1743467731818.jpg)


### 165.TCP服务器端代码的编写
TCP服务器端编程的基本步骤（用户Python服务器和Python桌面客户端，使用 TCP 通信，不需要HTTP协议通信）。

1、使用socket类创建一个socket对象，然后绑定IP地址和端口，并开始监听。

2、使用accept方法等待客户端的连接，一旦连接成功，就可以进行数据发送和接收。

3、关闭套接字。

整个服务器端程序会一直等待客户端的连接，直到连接成功后才会继续执行。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-04/image-1743817479547.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-04/image-1743817485183.jpg)

具体代码

```python
from socket import socket, AF_INET, SOCK_STREAM

# AF_INET 用于 Internet 之间的进程间通信
# SOCK_STREAM 用于 TCP 连接

# 1、初始化 socket 对象
s = socket(AF_INET, SOCK_STREAM)

# 2、绑定 ip 和 端口
s.connect(("127.0.0.1", 9999))

# 3、开始监听（最大连接数5）
s.listen(5)

# 4、等待客户端连接
client_socket, client_address = s.accept()

# 5、接收数据
data = client_socket.recv(1024)
print(data.decode("utf-8"))

# 6、关闭连接
s.close()

```

​


### 166.TCP客户端代码的编写
TCP编程中，客户端和服务器端的代码编写流程。

1、无论是客户端还是服务器端，都需要创建socket对象。

2、服务器端需要绑定IP地址和端口，并处于监听状态。

3、客户端通过connect方法向服务器发送连接请求

4、建立连接后，双方可以互相发送数据，客户端发送数据请求，服务器端响应数据。

5、双方都需要关闭socket。

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-04/image-1743817564603.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/56be59c8-1d8a-4d56-95f9-653c154660c6/images/2025-04/image-1743817570318.jpg)

具体代码

```python
import socket

# Create a TCP/IP socket
client_socket = socket.socket()

# Connect the socket to the port where the server is listening
client_socket.connect(("127.0.0.1", 9999))

# Send data to server
client_socket.send("Hello from client".encode("utf-8"))

# Receive data
client_socket.close()

```

​


### 167.TCP多次通信服务器端代码编写
如何使用 Python 进行 TCP 客户端与服务器端的多次通信。

与一次通信不同的是结束条件，如果服务器不主动断开，或者客户端不发送断开的消息，那么使用 while 循环一直接收消息

1、服务器端需要创建socket对象并进行绑定、设置最大连接数

2、等待客户端连接

3、接收数据、判断数据内容并回复数据

4、关闭socket对象

```python
import socket

socket_obj = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

socket_obj.bind(("127.0.0.1", 8888))

socket_obj.listen(5)

client_socket, client_address = socket_obj.accept()

# 初始化接收消息
info = socket_obj.recv(1024).decode("utf-8")

while info != 'bye':
    if info != 'bye':
        print(info)
    # 服务器给客户端发送消息
    data = input(">>>请输入发送的数据")
    socket_obj.send(data.encode("utf-8"))
    # 如果发送的消息是关闭，那么跳出循环，中断连接
    if data == 'bye':
        break
    # 再次接收消息，判断循环是否满足
    info = socket_obj.recv(1024).decode("utf-8")

# 关闭socket对象
client_socket.close()
socket_obj.close()

```

​


### 168.TCP多次通信客户端代码编写
如何编写多次通信的客户端代码。

1、导入socket模块并创建socket对象。

2、通过connect方法与服务器建立连接。

3、使用循环发送和接收数据。发送数据时，需要从控制台接收输入，并将其编码后发送。接收数据时，需要从服务器端接收数据，并进行解码。

4、关闭socket对象以结束程序。

通过测试，确保程序能够正常运行并实现多次通信。


### 169.UDP的一次双向通信
UDP编程的基本原理和实现过程。

1、UDP协议的无连接特性，以及如何通过创建socket对象进行UDP的接收方和发送方的通信。

2、一次双向交互通信的实现步骤，包括创建socket对象、绑定IP地址和端口、发送和接收数据以及关闭socket对象。

3、展示了UDP发送方和接收方的通信过程。


### 170.模拟客服咨询小程序
无

​


### 171.本章总结及章节习题
网络编程的基础知识，特别是TCP/IP协议的四层结构以及TCP和UDP协议的特点和应用。

通过Python的socket模块，详细讲解了TCP和UDP的客户端和服务器端的编程步骤。

​


### 172.程序与进程的概念
程序与进程的概念。

程序是指一系列有序的指令的集合，使用编程语言编写，用于实现一定的功能。

进程是指启动后的程序，操作系统会为进程分配内存空间，使其处于运行状态。

通过任务管理器可以查看当前运行的所有进程。


### 173.函数式创建子进程
在Python中创建进程的两种方式。

第一种是使用OS模块中的fork函数，适用于UNIX、LINUX和苹果操作系统。

对于Windows操作系统，则需要使用marty processing中的process类。

通过实例演示了如何使用process类创建进程，并解释了start和join方法的作用，强调了join方法在主进程等待所有子进程执行完毕后才结束的重要性。


### 174.Process类中常用的属性和方法1
详细解析了\`process\`类中的常用属性和方法。

展示了\`start\`、\`join\`、\`is\_alive\`、\`name\`、\`pid\`等方法的使用。

强调了在多进程环境下，进程的执行顺序和状态判断，以及如何通过这些方法来控制和管理进程的执行流程。


### 175.Process类中常用的属性和方法2
Process类及其常用属性和方法。

首先，介绍了run和terminate方法的使用。

接着，通过示例代码展示了如何在Process类中创建子进程，并解释了在未指定target参数时，start方法会调用run方法的原理。

讲解了如何通过指定target参数来执行特定的函数。

通过强制终止子进程（使用terminate方法）来展示其对子进程代码执行的影响。


### 176.继承式创建子进程
如何使用Python的面向对象编程来创建进程。

通过创建一个名为sub\_process的类，该类继承自process类，并重写run方法，可以实现创建子进程的功能。

同时，通过初始化方法可以传递进程的名称，并调用父类初始化方法。

最后，通过在主程序中创建多个紫禁城并启动它们，最终阻塞主进程，确保所有子进程执行完毕后再结束主进程。


### 177.进程池
在Python中，multiprocessing 模块提供了Pool类来实现进程池。

进程池可以帮助你管理一组工作进程，方便地并行执行任务，尤其适用于需要处理大量计算任务的场景。

以下是进程池的使用方法：

1. 导入模块
   首先，需要导入multiprocessing模块。

```python
import multiprocessing
```

1. 定义任务函数
   这个函数就是每个进程要执行的任务。

```python
def task_function(x):
    return x * x
```

1. 使用进程池

   * 创建进程池：可以指定进程池中的进程数量，如果不指定，默认使用机器的CPU核心数。

   * 提交任务：使用apply\_async方法异步提交任务，或者使用map方法同步提交任务。

   * 关闭进程池：任务提交完成后，调用close方法关闭进程池，防止新的任务被提交到进程池。

   * 等待所有任务完成：调用join方法等待进程池中的所有任务执行完毕。

```python
if __name__ == '__main__':
    with multiprocessing.Pool(processes=4) as pool:
        # 使用map方法同步提交任务
        results = pool.map(task_function, range(10))
        print(results)

        # 使用apply_async方法异步提交任务
        async_result = pool.apply_async(task_function, args=(5,))
        print(async_result.get())

        pool.close()
        pool.join()
```

在上述代码中：

* with multiprocessing.Pool(processes = 4) as pool: 创建了一个包含4个进程的进程池，并使用with语句来确保进程池在使用完毕后正确关闭和清理资源。

* pool.map(task\_function, range(10)) 同步地将task\_function应用到range(10)生成的每个元素上，map方法会阻塞主进程，直到所有任务完成，并返回结果列表。

* pool.apply\_async(task\_function, args=(5,)) 异步提交任务，apply\_async方法不会阻塞主进程，立即返回一个AsyncResult对象。通过调用async\_result.get()可以获取任务的返回结果，这个调用会阻塞主进程，直到任务完成。

* pool.close() 关闭进程池，不再接受新的任务。

* pool.join() 等待进程池中的所有任务完成。

需要注意的是，在Windows系统上，包含进程池相关代码的脚本必须放在if \_\_name\_\_ == '\_\_main\_\_':块中，以避免在创建新进程时出现问题。这是因为Windows系统的进程创建机制与Unix - like系统不同。&#x20;


### 178.并发和并行的概念
并发（Concurrency）和并行（Parallelism）是两个重要但容易混淆的概念：

#### 并发（Concurrency）

* 定义：并发是一种程序设计概念，指在一个时间段内，多个任务都在向前推进，但不一定是在同一时刻同时执行。操作系统通过快速切换上下文，让用户感觉多个任务在同时进行。这些任务实际上是交替执行的，在单核处理器环境下，并发编程能充分利用处理器的空闲时间，提高系统整体的资源利用率。

* 实现方式：常见的实现并发的方式有线程（Thread）、进程（Process）和异步编程（如Python中的asyncio库基于协程实现异步） 。

* 示例：想象一个餐厅，只有一个厨师（单核处理器）。多个顾客（多个任务）点餐，厨师先做一会儿A顾客的菜，然后停下来去做B顾客的菜，再回来继续做A顾客的菜，如此交替。虽然同一时刻厨师只能做一道菜，但通过快速切换，顾客感觉多个菜品的制作是同时在进行的。在Python中使用asyncio库实现并发：

```python
import asyncio


async def task1():
    print('Task 1 started')
    await asyncio.sleep(1)
    print('Task 1 finished')


async def task2():
    print('Task 2 started')
    await asyncio.sleep(1)
    print('Task 2 finished')


async def main():
    await asyncio.gather(task1(), task2())


if __name__ == '__main__':
    asyncio.run(main())
```

在这个例子中，task1和task2两个异步任务看似同时执行，但实际上是在事件循环中交替运行。

#### 并行（Parallelism）

* 定义：并行意味着多个任务在同一时刻真正地同时执行。这需要有多个处理器核心（多核处理器）或者多个处理器，每个核心或处理器可以同时处理不同的任务。并行强调的是多个任务在物理上的同时运行，能够显著提高计算密集型任务的处理速度。

* 实现方式：通常通过多进程（在多核系统上）来实现并行计算，每个进程运行在不同的处理器核心上。

* 示例：假设有一个多核处理器的服务器，同时运行多个大数据处理任务。每个任务分配到不同的核心上进行处理，就像有多个厨师（多核处理器），每个厨师同时做不同顾客（不同任务）的菜。在Python中使用multiprocessing库实现并行：

```python
import multiprocessing


def process_task(num):
    print(f'Process {num} started')
    result = 0
    for i in range(1000000):
        result += i
    print(f'Process {num} finished')


if __name__ == '__main__':
    processes = []
    for i in range(2):
        p = multiprocessing.Process(target = process_task, args = (i,))
        processes.append(p)
        p.start()
    for p in processes:
        p.join()
```

在上述代码中，创建了两个进程并行执行process\_task函数。每个进程在不同的处理器核心上独立运行，真正实现了多个任务同时执行。

#### 区别总结

* 并发：主要关注在一个时间段内多个任务的交替执行，适用于I/O密集型任务（如网络请求、文件读写等），即使在单核处理器上也能有效利用资源。

* 并行：侧重于多个任务在同一时刻的同时执行，更适合计算密集型任务，需要多核处理器等硬件支持才能发挥优势。&#x20;


### 179.进程之间数据是否共享
在Python中，多个进程之间数据是不共享的。

父进程和子进程各自拥有独立的全局变量A，子进程操作自己的A值而不影响父进程的A值。

因此，进程之间数据没有共享。在下一节中将探讨如何解决进程之间的共享问题。


### 180.队列的基本使用
Python中进程间数据共享的实现方式——队列。

通过队列可以实现先进先出的机制，类似于生活当中的排队。

Python中的\`queue\`模块提供了队列的实现，包括\`qsize()\`、\`empty()\`、\`full()\`等方法。

视频通过实例演示了队列的基本使用，包括入队、出队、判断队列状态等操作。

同时，视频还介绍了队列的遍历方法，通过\`for\`循环结合\`empty()\`方法实现。

最后，通过实例展示了队列的满、空状态以及消息数量的变化。


### 181.使用队列实现进程之间的通信
使用队列实现进程间通信的方法。

通过创建一个队列，一个进程负责入队，另一个进程负责出队，实现了数据的传递。

具体操作中，入队和出队都是同一个队列，入队时检查队列是否已满，出队时检查队列是否为空。

父进程创建队列并启动子进程，子进程分别执行入队和出队的操作，最终实现了进程间的数据交换。


### 182.函数式创建线程
在Python中创建线程的两种方式，一种是函数式创建线程，另一种是继承式创建线程。

首先介绍了线程的概念，线程是CPU和调度的最小单位，被包含在进程当中，是进程当中实际的运作单位。

接着详细讲解了函数式创建线程的语法和步骤，并通过示例代码展示了如何使用函数式创建线程。

最后，通过一个示例程序，展示了多线程的并发执行和并行执行的任务，以及线程之间的并发执行。


### 183.继承式创建线程
创建线程的两种方式：函数式和继承式。

无论是创建进程还是线程，这两种方式都是相似的。

通过继承threading模块下的thread类并重写run方法，可以创建线程。

作者通过示例展示了如何使用继承式创建线程，并在主程序中启动和执行这些线程。

多个线程在进程中并发执行，交替执行，而不是依次执行。


### 184.线程之间数据共享
进程与线程之间的数据共享问题。

通过实例演示，我们发现进程之间的数据是不能共享的，但如果需要共享，可以使用队列。

而线程之间的数据是可以共享的，例如全局变量A，两个线程分别执行加法和减法操作，最终A的值为80，证明了线程之间共享了全局变量的值。


### 185.多个线程共享数据带来的问题以及Lock锁
多线程操作共享数据时可能出现的安全问题，以及分享数据时的安全性问题。

在第一部分中，通过示例代码展示了多个线程同时操作全局变量可能导致的数据错乱，并引入了锁机制（Lock）来解决这一问题，确保了数据的安全性。

在第二部分中，强调了在分享数据时必须采取安全措施，以保护数据安全和隐私。但在分享数据的过程中，安全性问题不容忽视。


### 186.生产者与消费者问题
Python中的生产者和消费者模式。

该模式是线程模式中的一个经典问题，适用于程序中出现明确有两类任务的情况：一类负责生产数据，一类负责处理数据。

通过使用Python内置模块中的队列，可以实现这一模式。

视频中详细展示了如何使用Python实现生产者和消费者模式，包括创建生产者和消费者类，使用队列作为共享数据，以及启动和阻塞主线程。

最终，程序成功运行了生产者和消费者线程，完成了数据的生产和处理。


### 187.章节总结
Python编程的基础概念和进程、线程的相关知识。

首先介绍了程序和进程的概念，讲解了在Python中创建进程的两种语法。

接着，讲解了并发和并行的概念，强调了进程之间不能共享数据，但可以通过队列实现通信。

然后，介绍了线程的概念，以及在Python中创建线程的两种方式。

最后，讲解了线程共享数据的安全性问题，以及如何使用锁器来解决这一问题。

此外，还介绍了生产者和消费者模式，这是一个在线程中非常经典的问题。


### 188.案例需求描述
如何使用Python实现多人聊天室的项目。

通过第三方库wxPython进行界面绘制，底层代码基于C++封装，界面风格与Windows操作系统相似。

项目特点为多个客户端与单一服务器端，服务器端使用多线程处理多个客户端之间的通信。

主线程负责启动和管理服务，绘画线程独立运行。

通过字典存储每个绘画线程。演示了服务器端和客户端的运行效果，包括启动服务、连接、发送消息、断开连接等操作。

最后，服务器端保存聊天记录。


### 189.使用wxPython绘制客户端界面
使用wxPython进行界面布局的过程。

首先，创建了一个名为CLIENT的Python文件，导入了WX模块，并创建了一个名为杨淑娟clean的类。

接着，通过继承父类frame，初始化了窗体界面，并创建了面板、盒子、可伸缩的网格布局、按钮和多行文本框等控件。

最后，将这些控件按照一定的布局规则放置在窗体中，并实现了界面的显示。

此外，还如何解决Python编程中遇到的编码格式问题，即在代码开头添加编码格式声明，即\`coding: UTF-8\`，成功运行了代码，实现了窗体的连接、断开、重置和发送功能。


### 190.使用wxPython绘制服务器界面
如何编写服务器端的界面。

首先，展示了服务器端界面的布局示意图，然后通过Python代码展示了界面的编写过程。

界面包括一个标题，一个面板，面板内有一个可伸缩的网格布局和一个只读的多行文本框。

可伸缩的网格布局内放置了三个按钮：启动服务、保存聊天记录和停止服务。

最后，展示了界面的运行效果。下一节将进行代码的编写。


### 191.设置启动服务器的必要属性
无

​


### 192.服务器端启动服务
如何实现一个Python全栈开发教程中的服务器端功能。

具体包括：点击启动服务按钮时，控制台打印输出，表示绑定按钮功能已完成；

然后编写start server功能，判断服务器是否已启动；

创建主线程对象，采用函数式编程创建主线程；

设置主线程为守护线程，以便窗体界面关闭时，服务器线程自动结束；

接收客户端连接请求，发送客户端名称作为字典键，存储绘画线程；

创建绘画线程对象，采用继承式编程，重写run方法；

启动绘画线程，进行客户端通信；

当停止服务时，关闭服务器。


### 193.服务器端会话线程代码实现
如何完善服务器端的绘画线程类。

初始化方法中，首先调用父类的初始化方法，然后给实例属性赋值。

接着，设置绘画线程是否启动为true，表示线程已启动。

在run方法中，打印客户端连接成功的信息，并判断服务器是否关闭。

接收客户端数据，存储到data中，判断是否为断开请求。

如果是，则关闭客户端socket，否则显示聊天信息。

代码虽未测试，但逻辑清晰，等待客户端请求进行测试。


### 194.客户端连接服务器功能实现
如何实现客户端与服务器端的连接。

首先，客户端需要绘制界面并绑定连接按钮的事件。

当点击连接按钮时，客户端会尝试连接服务器。

连接之前，客户端需要设置一些必要的属性，如客户端名称、连接状态和socket对象。

连接成功后，客户端会启动一个线程与服务器的绘画线程进行通信。

整个过程中，客户端和服务器端需要进行数据发送和接收，确保信息的正确传递。

通过，观众可以了解客户端与服务器端连接的基本流程。


### 195.服务器端显示聊天信息
如何实现服务器端和客户端之间的信息交互。

具体来说，视频详细讲解了如何在服务器端接收客户端的连接，并在接收到连接后，不仅需要在服务器端的只读文本框中显示连接的提示信息，还要将该信息发送给所有连接的客户端。

视频通过编写方法\`show\_info\_and\_send\_client\`，实现了信息的拼接、显示和发送。

同时，视频还讲解了如何根据客户端的状态，决定是否发送信息。

最后，视频强调了客户端与服务器端配合的重要性，以便实现信息的正确展示。


### 196.客户端显示服务器通知
如何编写一个Python全栈开发教程中的客户端程序。

首先，客户端需要接收并显示来自服务器的聊天信息。

通过编写\`receive\_data\`方法，客户端在连接状态下不断接收服务器发送的数据，并将其显示在只读文本框中。

接着，客户端通过控制台输入名称，实现动态输入。

最后，虽然客户端可以接收服务器消息，但不能发送消息到聊天室，这个问题将在下一节中解决。


### 197.客户端发送信息到聊天室
如何实现客户端向服务器端发送消息并展示聊天内容。

具体步骤包括：给发送按钮绑定事件，判断客户端是否与服务器端建立连接，获取可写文本框中的数据，向服务器端发送数据，清空文本框，以及在客户端和服务器端展示聊天内容。

通过这些步骤，成功实现了客户端向服务器端发送数据并在客户端和服务器端展示聊天内容的功能。


### 198.客户端断开连接
如何实现客户端断开连接的功能。

首先，为断开按钮绑定事件，然后在点击按钮时执行disconnect\_server函数。

该函数发送断开连接的信息到服务器，并在客户端改变连接状态。

同时，服务器发送通知，告知其他客户端该用户已离开。

最后，演示了断开连接后重新连接的过程。


### 199.客户端重置_服务器端保存聊天记录_断开连接
如何实现一个多人聊天室。

首先，介绍了客户端和服务器的功能，包括重置、保存聊天记录和停止服务。

接着，详细讲解了如何实现这些功能，包括重置文本框、保存聊天记录到文件以及停止服务。

最后，通过实际操作展示了聊天室的功能，强调了Python基础语法的重要性。


