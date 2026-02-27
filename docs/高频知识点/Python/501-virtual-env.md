## 501-virtual-env

创建隔离的 Python 环境，避免项目间依赖冲突，比内置 `venv` 支持更多 Python 版本。

**默认使用**：适合需要跨 Python 版本兼容的场景，简单场景可用内置 `venv`，推荐。

```python
# 安装
pip install virtualenv

# 创建虚拟环境
virtualenv myenv

# 激活（Linux/macOS）
source myenv/bin/activate
```

按照指定版本创建虚拟环境，先查看 python3 安装路径

```text
which python3.9
#`/opt/homebrew/bin/python3.9`
```

```text
virtualenv -p /usr/bin/python3.9 python39-venv
```

全部配置

```text
$ virtualenv [OPTIONS] DEST_DIR 

-q, –quiet 
不显示详细信息。 

-p PYTHON_EXE, –python=PYTHON_EXE 
指定所用的python解析器的版本，比如 –python=python2.5 就使用2.5版本的解析器创建新的隔离环境。 默认使用的是当前系统安装(/usr/bin/python)的python解析器 

–clear 
清空非root用户的安装，并重头开始创建隔离环境。 

–no-site-packages 
令隔离环境不能访问系统全局的site-packages目录。 

–system-site-packages 
令隔离环境可以访问系统全局的site-packages目录。 

–unzip-setuptools 
安装时解压Setuptools或Distribute 

–relocatable 
重定位某个已存在的隔离环境。使用该选项将修正脚本并令所有.pth文件使用相当路径。 

–distribute 
使用Distribute代替Setuptools，也可设置环境变量VIRTUALENV_DISTRIBUTE达到同样效要。 

–extra-search-dir=SEARCH_DIRS 
用于查找setuptools/distribute/pip发布包的目录。可以添加任意数量的–extra-search-dir路径。 

–never-download 
禁止从网上下载任何数据。此时，如果在本地搜索发布包失败，virtualenv就会报错。 

–prompt==PROMPT 
定义隔离环境的命令行前缀。 
```

官方链接：<https://virtualenv.pypa.io/en/latest/index.html>

官方链接：<https://virtualenv.pypa.io/en/latest/user_guide.html>

中文参考：<https://blog.csdn.net/u012206617/article/details/90294421>
