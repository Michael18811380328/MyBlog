## 13-Python 版本管理

##### 版本说明

不同版本的查看和下载，参考：[https://www.python.org/downloads/](https://www.python.org/downloads/ "https://www.python.org/downloads/")

python2 版本太老，不建议再使用。

2024年 最新是 python3.12 版本。python 3.12 版本的更新说明：[https://docs.python.org/zh-cn/3/whatsnew/3.12.html](https://docs.python.org/zh-cn/3/whatsnew/3.12.html "https://docs.python.org/zh-cn/3/whatsnew/3.12.html")

目前 3.13 版本，3.8 版本已经停止维护

每一个中等版本维护5年，2025年最新代码 3.13版本，已经停止维护 3.8 版本。

##### 版本管理

可以使用 brew, conda 等工具，MAC 系统使用 brew 更方便

```text
# 安装不同的 python 版本
brew install python@3.9

# 查看安装的版本（本地安装了 3.9 和 3.12 版本）
which python3.9
cd /opt/homebrew/bin/
ls | grep python
```

注意从 python3.8 升级到 python 3.12 一部分语法不能使用，例如 Fabric3 中的 collection 语法。

##### 最佳实践

个人开发，优先使用最新的稳定版，自己开发建议用虚拟环境，顺便切换环境

使用 conda 管理 python 版本环境，可以使用anaconda或者miniconda工具。

安装好了工具之后查看：

```
conda -V
```

创建虚拟环境：

```
conda create -n deeplearning python=3.6    
```

创建一个名称为deeplearning的虚拟环境，环境中python版本=3.6

切换虚拟环境：

```
source activate deeplearning  / conda activate deeplearning
```

```
python3 -m venv venv
```

​
