
  # Go
  ### 0 介绍
Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。

对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。

主要参考链接

GoLang 中文文档：<http://www.topgoer.com/>

菜鸟教程：<https://www.runoob.com/go/go-tutorial.html>

Go 第三方库相关文档：<http://www.topgoer.cn/>


### 1 Mac 下安装环境配置
安装包下载地址 https\://golang.google.cn/dl/

下载pkg安装包后直接双击安装即可

运行测试文件

```text
package main
import "fmt"

func main() {
   fmt.Println("Hello, World!")
}
```

在文件目录中运行 go run test.go 即可在 terminal 运行代码

运行 go build 可以编译成二进制文件 直接运行 ./test 既可运行编译后的代码（速度很快）


### 2 语言结构
基本的变量、函数、表达式、注释、包声明、包引入，和其他语言类似

```text
package main
/* 定义了一个可执行的程序 main，每一个go程序必须包含一个main的包 */

import "fmt"
/* 引入包 */

func main() {
   fmt.Println("Hello, World!")
  /* 注意：这里需要使用双引号，不能用单引号 */
}
```

​


### 3 基础语法
每一行可以不加逗号

不同语句最好换行

保留字和其他语言类似


### 4 数据类型
大类：布尔值、字符串、数值（整形 int，浮点型 float）、派生类型

派生类型：指针；数组；结构体；函数；切片；接口；Map(对象)；Channel&#x20;

bool string int float 是值类型（栈内存），可以用过 \&a 获取对应的内存地址；

数组是引用类型（堆内存），变量存放的是内存地址；更改值类型和引用类型需要注意；


### 5 变量
var + 变量名 + 数据类型

```text
package main

import 'fmt'

func main() {
  var a string = 'Michael'
  var b string = 'An'
  var c, d int = 10, 20
  fmt.printLn(a, b, c, d)
}
```

变量声明时，如果不带数据类型，可以通过变量的具体值，确定变量的数据类型

变量声明时，如果没有具体的值，那么根据变量数据类型，初始化零值（int 默认 0 bool 默认 false string 默认为 ""）

特殊的是 nil

```text
var a *int
var a []int
var a map[string] int
var a chan int
var a func(string) int
var a error // error 是接口
```

​


### 6 常量
const + 常量名 + 数据类型


### 7 运算符
和其他语言类似（位运算符不介绍）

```text
package main
import "fmt"

func main() {
  var a bool = true
  var b bool = false
  a = false
  b = true
  if (a && b) {
    fmt.printLn("test\n")
  }
  if (a || b) {
    fmt.printLn("test2\n")
  }
}
```

特殊运算符

& 返回变量的实际内存地址

\* 指针变量

```text
package main
import "fmt"

func main() {
  var a int = 10
  pointer = &a
  fmt.printLn("%d, %d", a, *pointer)
}
```

​


### 8 条件语句
if else select switch 支持，不支持三目运算符


### 9 循环语句
for 语法类似 C 语言

Break continue goto

```text
for init; condition; post {
  var a float = 1.2
}
```

```text
package main
import "fmt"

func main() {
  sum := 0
  for i := 0; i <= 10; i++ {
    sum += i
  }
  fmt.printLn(sum)
}
```

​


### 10 函数
声明函数：求两个数的最大值

```text
func max(a, b int) int {
  var result int
  if (a > b) {
    result = a
  } else {
    result = b
  }
  return result
}
```

调用函数

```text
func main() int {
  var a int = 10
  var b int = 20
  var c int
  c = max(a, b)
  return c
}
```

函数返回多个值

```text
func swap(x, y string) (string, string) {
  return y, x
}

func main() {
  a, b := swap("Michael", "An")
}
```

函数的参数可以是值类型，或者是引用类型；函数可以作为另一个函数的参数传值


