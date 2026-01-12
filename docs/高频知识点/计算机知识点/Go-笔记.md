# Go笔记 

 2026-1-12

 原始笔记链接：https://cloud.seatable.cn/dtable/external-links/59b453a8639945478de2/

 
## 0812 go mod tidy


`go mod tidy` 是一个用于整理 Go 项目依赖的命令。它会根据项目中的代码，分析和调整项目的 `go.mod` 和 `go.sum` 文件，确保项目依赖的准确性和一致性。

#### 1. 初始化项目依赖

当你开始一个新的 Go 项目，或者克隆一个已有的项目到本地时，运行 `go mod tidy` 可以快速初始化项目的依赖，确保项目能够正常编译和运行。

#### 2. 代码变更后

当你在项目代码中添加或删除了某些包的导入语句后，运行 `go mod tidy` 可以及时更新项目的依赖信息，避免因依赖不一致而导致的编译错误。

#### 3. 定期维护

定期运行 `go mod tidy` 可以清理项目中不再使用的依赖，减少项目的磁盘占用空间，同时保持项目依赖的整洁和一致性。

   
## 0813 go.mod 文件的作用


类似于项目依赖管理，package.json

#### 定义项目模块

`go.mod` 文件位于项目的根目录下，它定义了当前项目的模块路径。模块路径是一个唯一标识项目的字符串，通常是项目的导入路径，例如：

```
module example.com/myproject

module myproject
```

这行代码表明该项目的模块路径为 `example.com/myproject`，其他项目可以通过这个路径来导入该项目的包。

#### 管理依赖版本

`go.mod` 文件记录了项目所依赖的所有外部包及其版本信息。

当你使用 `go get` 命令添加、更新或删除依赖时，`go.mod` 文件会相应地更新。例如：

```
require (
    github.com/somepackage/somepackage v1.2.3
    golang.org/x/net v0.0.0-20210226172049-e18ecbb05110
)
```

这里列出了项目依赖的两个包及其版本号。

通过明确指定依赖版本，可以确保项目在不同环境中使用相同版本的依赖，避免因依赖版本不一致而导致的兼容性问题。

目前用到这些功能，其他需要再使用

   
## 0814 go get 命令作用


go get 类似 npm install，可以进行安装依赖

#### 1. 下载和更新依赖

在使用 Go Modules 的项目中，`go get` 可以用于下载和更新项目所需的依赖包。例如，在项目根目录下执行

```
go get github.com/someuser/somepackage
```

这会将 `github.com/someuser/somepackage` 包添加到项目的 `go.mod` 文件中，并下载该包及其依赖项到本地的模块缓存中。如果该包已经存在于 `go.mod` 文件中，`go get` 会根据需要更新到最新版本。

#### 2. 指定版本

可以使用 `go get` 指定要下载的包的版本。例如，要下载 `github.com/someuser/somepackage` 的 `v1.2.3` 版本，可以执行

```
go get github.com/someuser/somepackage@v1.2.3
```

这会将 `go.mod` 文件中的该包版本更新为 `v1.2.3`，并下载相应版本的包。

#### 3. 清理未使用的依赖

结合 `go mod tidy` 命令，`go get` 可以帮助清理项目中未使用的依赖。例如，先执行 `go get` 进行依赖更新，然后执行 `go mod tidy` 来移除未使用的依赖：收起sh

```
go get -u
go mod tidy
```

* `-u`：更新包到最新版本。

* `-v`：显示详细的下载和安装信息。

* `-d`：只下载包，不进行安装或编译。

* `-insecure`：允许使用不安全的协议（如 HTTP）进行下载，通常用于内部网络环境。

   
## 0815 go.sum 文件的作用


确保依赖的完整性，类似于 package-lock.json 文件

`go.sum` 文件记录了项目所有依赖的哈希值，用于验证下载的依赖包是否与记录的版本一致。它包含了每个依赖包的不同版本的哈希信息

`go.mod` 主要负责定义项目的模块信息和依赖版本（package.json），而 `go.sum` 则用于验证依赖的完整性和支持版本选择(package-lock.json)。

在开发过程中，通常不需要手动修改 `go.sum` 文件，Go 工具链会自动更新它以保持与 `go.mod` 文件的一致性。

   
## 0816 go 不同版本介绍


截至2024年11月，Go语言的最新稳定版本是Go 1.22。

Go 1.22于2024年8月发布，带来了许多新特性和改进，例如内置的 slices、maps 等标准库函数的优化，以及对错误处理机制的一些改进等。

* 近期版本较受欢迎：较新的版本（如Go 1.20、Go 1.21、Go 1.22）市场占有率呈上升趋势。因为新版本通常会修复旧版本的漏洞、提升性能、增加新特性。许多新启动的项目或者对性能和功能有较高要求的项目会优先选择较新的版本。例如，Go 1.20引入了显著的性能优化和一些新的语言特性，吸引了不少开发者升级。

* 长期支持版本受青睐：Go官方会指定一些长期支持（LTS）版本，像Go 1.20就是LTS版本。企业级项目出于稳定性和维护成本的考虑，会更倾向于使用LTS版本，所以这类版本在企业应用中可能占有一定比例的市场份额。

实际项目，建议考虑支持 1.20 以后版本（Go 1.20 是在 2023 年 2 月 1 日正式发布），避免旧版本问题

本地环境安装的是  go 1.22.5 版本。

   
## 0817 变量声明两种方法


golang 声明变量有两种方法：

显示声明：var 关键字

```text
var num int = 100
```

短变量声明：不使用 var 关键字，使用 := 符号

```text
number := 10
message := "Hello, World!"
```

`var` 关键字用于显式声明变量，可以在声明时不进行初始化，需要显式指定变量类型；

而 `:=` 用于隐式声明变量，必须在声明时进行初始化，编译器会自动推断变量类型。

   
## 0818 切片是什么


在 Go 语言中，切片（Slice）是一种动态数组，它是对数组的抽象和扩展，为处理数据序列提供了更方便、灵活的方式。

切片本身并不是数组，它是一个引用类型，底层引用一个数组。切片由三个部分组成：

* **指针**：指向底层数组中切片第一个元素的地址。

* **长度**：表示切片中元素的个数，通过 `len()` 函数获取。

* **容量**：表示切片底层数组从切片第一个元素开始到数组末尾的元素个数，通过 `cap()` 函数获取。

```text
// 创建一个长度为 3，容量为 5 的整型切片
slice := make([]int, 3, 5)

// 创建一个包含 3 个元素的切片
slice := []int{1, 2, 3}

// 截取索引从 1 到 3（不包含 3）的元素
newSlice := slice[1:3]

// 追加一个元素 4
newSlice := append(slice, 4)
```

切片的优点

* **动态大小**：切片的长度可以根据需要动态增长，不需要像数组那样在创建时指定固定大小。

* **引用类型**：切片是引用类型，传递切片时只需要传递引用，而不需要复制整个底层数组，提高了性能和内存使用效率。

   
## 0477 go build 安装依赖443


下载 github 上的依赖无效，需要换成国内的源

```text
go env -w GOPROXY=https://goproxy.cn,direct
```

​

   
## 0478 linux 或者 docker 安装 go 环境


执行下面的命令安装

如果需要安装指定版本，改一下版本号 1.22.5 尽量装新版，旧版可能有各种问题

```text
# 下载Go二进制文件
wget https://dl.google.com/go/go1.22.5.linux-amd64.tar.gz
 
# 解压文件到/usr/local目录
sudo tar -C /usr/local -xzf go1.22.5.linux-amd64.tar.gz
 
# 设置环境变量
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.profile
source ~/.profile
 
# 验证安装
go version
```

如果已经装了旧版，例如 1.17，一定要先卸载旧版，然后再安装新版，不能直接安装，否则会出错

如果使用 tar 包安装，直接删除安装目录即可

```text
which go
# /usr/local/go/bin/go
sudo rm -rf /usr/local/go
```

如果使用 brew 安装，则使用 brew 卸载

```text
brew uninstall go
```

​

   
## 0895 Beego 框架


beego 是一个快速开发 Go 应用的 HTTP 框架，他可以用来快速开发 API、Web 及后端服务等各种应用，是一个 RESTful 的框架，主要设计灵感来源于 tornado、sinatra 和 flask 这三个框架，但是结合了 Go 本身的一些特性（interface、struct 嵌入等）而设计的一个框架。

官网文档：<https://beego.me/docs/intro/>

其他参考链接：<http://www.topgoer.cn/docs/beegozhongwenwendang/beegozhongwenwendang-1c5087bb5qpst>

一般的 beego 项目的目录如下所示：

```text
├── conf
│   └── app.conf
├── controllers
│   ├── admin
│   └── default.go
├── main.go
├── models
│   └── models.go
├── static
│   ├── css
│   ├── ico
│   ├── img
│   └── js
└── views
    ├── admin
    └── index.tpl
```

从上面的目录结构我们可以看出来 M（models 目录）、V（views 目录）和 C（controllers 目录）的结构， main.go 是入口文件。

默认设备中安装了 golang 开发环境，可以通过如下的方式安装 bee 工具：

```text
go get -u github.com/beego/bee/v2
```

​

   
## 0825 := 短变量声明运算符


`:=` 是短变量声明运算符，它可以在声明变量的同时进行赋值操作，而且不需要提前使用 `var` 关键字声明变量。

不过，`:=` 只能在函数内部使用。

```text
package main

import "fmt"

func main() {
    // 使用 := 声明并赋值一个整数类型的变量 num
    num := 10
    fmt.Println(num) 
}
```

相当于 js 中的 var a = 10;&#x20;

   
## 0704 go 常用 web server 框架


常用的服务器框架：

|        | gin                                                                                                                                       | beego                                                                                             | echo                                                                                                    | martini                                                                                                                |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| github | [https://github.com/gin-gonic/gin](https://github.com/gin-gonic/gin "https://github.com/gin-gonic/gin")                                   | [https://github.com/beego/beego](https://github.com/beego/beego "https://github.com/beego/beego") | [https://github.com/labstack/echo](https://github.com/labstack/echo "https://github.com/labstack/echo") | [https://github.com/go-martini/martini](https://github.com/go-martini/martini "https://github.com/go-martini/martini") |
| stars  | 77                                                                                                                                        | 30                                                                                                | 29                                                                                                      | 11                                                                                                                     |
| 介绍     | Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. | beego is an open-source, high-performance web framework for the Go programming language.          | High performance, minimalist Go web framework                                                           | Classy web framework for Go                                                                                            |
|        | Gin是一个用Go（Golang）编写的HTTP web框架。它采用了类似Martini的API，性能更好，速度快40倍。                                                                             | beego是Go编程语言的开源、高性能web框架。                                                                         | 高性能、极简主义的Go web框架                                                                                       | Go的经典web框架，现在废弃不建议使用，改成 Gin 框架                                                                                         |

这里仅了解主要框架，不具体使用和学习

学习和使用这些的基础，需要熟悉 golang 语法，同时熟悉服务器知识，目前暂时不具备

PS：martini 马提尼酒，gin 金酒

  