
  # Rust
  ### 00 介绍
Rust 入门功能学习

因为最近有个第三方的工具是 rust 语言写的，同时这个语言最近也比较火，自己简要了解一下

参考链接：[https://www.runoob.com/rust/rust-basic-syntax.html](https://www.runoob.com/rust/rust-basic-syntax.html "https://www.runoob.com/rust/rust-basic-syntax.html")

Rust 语言可以用于开发：

* 命令行程序： Rust 编译器可以直接生成目标可执行程序，不需要任何解释程序。

* 前端开发：- Rust 可以被编译成 WebAssembly，WebAssembly 是一种 JavaScript 的高效替代品。

* 后端开发：- Rust 用极低的资源消耗做到安全高效，且具备很强的大规模并发处理能力，十分适合开发普通或极端的服务器程序。

* 嵌入式 - Rust 同时具有JavaScript 一般的高效开发语法和 C 语言的执行效率，支持底层平台的开发。

这是一种编译型语言，需要先编译成二进制码，然后才能执行。

目前项目使用不多，这个语言偏底层，暂时了解。


### 01 环境搭建 cargo
安装 Xcode：Rust 的编译工具依赖 C 语言的编译工具，macOS，需要安装 Xcode。

安装编译工具 rustup：[https://www.rust-lang.org/zh-CN/tools/install](https://www.rust-lang.org/zh-CN/tools/install "https://www.rust-lang.org/zh-CN/tools/install")

安装后检测版本

```text
rustc -V
# rustc 1.80.0-nightly (a8a1d3a77 2024-04-29)

cargo -V
cargo 1.80.0-nightly (b60a15551 2024-04-26)
```

安装成功后，新建一个测试项目，然后可以运行这个程序

```text
cargo new greeting # 新建rust工程
cd greeting
cargo build 
cargo run 
```

备注：cargo 类似 npm，是 rust 的包管理工具，同时可以编译项目

[https://github.com/rust-lang/cargo](https://github.com/rust-lang/cargo "https://github.com/rust-lang/cargo")

其他命令

```text
cargo clippy: 类似eslint，lint工具检查代码可以优化的地方

cargo fmt: 类似go fmt，代码格式化

cargo tree: 查看第三方库的版本和依赖关系

cargo bench: 运行benchmark(基准测试,性能测试)

cargo udeps(第三方): 检查项目中未使用的依赖

cargo doc 功能，开发者可以通过这个命令将工程中的说明注释转换成 HTML 格式的说明文档

另外 cargo build/run --release 使用 release 编译会比默认的 debug 编译性能提升 10 倍以上，但是 release 缺点是编译速度较慢，而且不会显示 panic backtrace 的具体行号
```

在 vscode 中调试，需要配置环境，增加插件，详见 [https://www.runoob.com/rust/cargo-tutorial.html](https://www.runoob.com/rust/cargo-tutorial.html "https://www.runoob.com/rust/cargo-tutorial.html") 后面还有 M1 芯片构建成 arm64 架构的配置（本地没有安装完）


### 02 命令行输出
新建一个文件 test.rs

```text
fn main() {
    let a = 10;
    println!("this is {}", a);
}
```

然后编译并执行

```text
rustc ./test.rs

./test.rs
```

​


### 03 定义变量
#### let 声明变量

let 默认声明不可变变量

（声明后不能变化）

```text
let a = 10;

a = 20; // 这样会报错
```

Rust 语言为了高并发安全而做的设计：在语言层面尽量少的让变量的值可以改变。所以 a 的值不可变。但这不意味着 a 不是"变量"（英文中的 variable），官方文档称 a 这种变量为"不可变变量"。

let 也可以声明可变变量，变量的值可以变化，但是数据类型不能变

```text
let mut s = "123";
s = '456';
```

#### const 声明常量

```text
const a: i32 = 123;
```

#### 重影

变量的名称可以被重新使用，重影后变量的类型可以变化

```text
fn main() {
    let x = 5;
    let x = x + 1;
    let x = x * 2;
}
```

​


### 04 数据类型
#### 简单类型

整型

浮点数

布尔

字符串（所以在 Rust 中字符串和字符都必须使用 UTF-8 编码，否则编译器会报错，不能用中文）

Rust 不支持 **++​** 和 **--​**

#### 复杂类型

元组：每一项数据类型不同

```text
let tup: (i32, f64, u8) = (500, 6.4, 1);

// 元组的解构
let (x, y, z) = tup;
// y 等于 6.4
```

数组：每一项数据类型相同

```text
let a = [1, 2, 3, 4, 5];

let b = ["January", "February", "March"];
```

默认声明的数组也是不可变变量，需要使用 mut 声明可变变量，使用下标访问数组。

数组下标超过会出错，index out of bounds: the len is x but the index is x


### 05 函数
rust 定义函数没有先后顺序

可以定义返回值的类型

```text
fn add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

​


### 06 条件语句
支持传统的 if else 块

```text
let a = 12;
let b;
if a > 0 {
    b = 1;
}

// 也支持三目运算(必须有else)
if <condition> { block 1 } else { block 2 } 
```

​


### 07 循环
while

```text
fn main() {
    let mut number = 1;
    while number != 4 {
        number += 1;
    }
}
```

for

循环数组（使用下标，或者使用迭代器遍历）

```text
let a = [1,2,3,4,5]

for i in 0..5 {
    println!(i, a[i])
}

for i in a.iter() {
    println!(i)
}
```

loop-break 循环

```text
fn main() { 
    let s = ['R', 'U', 'N', 'O', 'O', 'B']; 
    let mut i = 0; 
    let location = loop { 
        let ch = s[i];
        if ch == 'O' { 
            break i; 
        } 
        i += 1; 
    }; 
    println!(" \'O\' 的索引为 {}", location); 
}
```

​


### 08 内存管理
#### 内存所有权定义

c 是手动管理内存，java 是自动 gc 管理内存。

所有权，它是 Rust 语言为高效使用内存而设计的语法机制。在编译阶段，更有效地分析内存资源的有用性，实现内存管理。

**这个是 rust 与其他语言不同的地方**

#### 变量作用域

块级作用域

c 语言有手动释放内存的函数 free，Rust 没有手动释放内存的函数，会在变量范围结束的时候，Rust 编译器自动添加了调用释放资源内存的函数。

#### 变量和内存

个人理解：

简单类型默认存放在栈中，复制变量后，两个变量分别存在。

```text
let x = 5;
let y = x;
```

简单变量也可以存在堆中，复制变量后，前一个变量失效，后一个变量存在。

```text
let s1 = String::from("hello");
let s2 = s1; 
println!("{}, world!", s1); // 错误！s1 已经失效
```

存在堆中的数量，可以使用 clone() 进行拷贝，这样两个变量可以分别释放。

```text
let s1 = String::from('Mike');
let s2 = s1.clone();
println!("{0}, {1}", s1, s2)
```

复杂数据类型存在引用（指针）& 符号

```text
let a = String::from('Mike');
let b = &a;
```

例如下面，堆数据到函数中，使用引用作为函数参数

```text
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

​


### 09 切片
[https://www.runoob.com/rust/rust-slice.html](https://www.runoob.com/rust/rust-slice.html "https://www.runoob.com/rust/rust-slice.html")


