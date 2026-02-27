## 509-mkdocs

功能：mkdocs 是常用的静态页面生成器

英文文档：[https://www.mkdocs.org/](https://www.mkdocs.org/ "https://www.mkdocs.org/")

中文文档：[https://markdown-docs-zh.readthedocs.io/zh-cn/latest/](https://markdown-docs-zh.readthedocs.io/zh-cn/latest/ "https://markdown-docs-zh.readthedocs.io/zh-cn/latest/")

注意 python 版本和 mkdocs 版本匹配，以及各种插件版本匹配

#### 基本使用

在项目内部新建 mkdocs.yml 配置文件，然后使用 mkdocs serve 和 mkdocs build 生成静态网页

#### 常用配置

英文配置：<https://www.mkdocs.org/user-guide/configuration/>

中文配置：<https://markdown-docs-zh.readthedocs.io/zh_CN/latest/user-guide/configuration/>

```text
site_name: Michale An Blog
site_author: Michael An
docs_dir: ./docs
copyright: Copyright &copy; TEST
site_url: https://michael18811380328.github.io/blog/
repo_name: blog
repo_url: https://github.com/Michael18811380328/blog

pages:
  - 首页: index.md
  - 进程与线程: 1.md

nav:
  - Home: "index.md"
  - User Guide:
      - "原地算法": "in-place.md"
      - "二分算法": "part-two.md"
  - Learn:
      - "双指针": "double-pointer.md"
      - "分治算法": "diverce.md"
      - "聚类算法": "K-means.md"
  - About:
      - "License": "process-and-thread.md"
      - "Release Notes": "uuid.md"

extra_css：
extra_javascript：
```

#### 插件

```text
plugins:
  - search
  - awesome-pages
```

#### 主题

常用主题：material、readthedocs、mkdocs

其他的主题参考 <https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes>

```text
theme:
  name: material
  logo: assets/logo32_32.png
  features:
    - tabs
  palette:
    primary: deep orange
    accent:
```

#### 扩展

```python
# Extensions
markdown_extensions:
  - markdown.extensions.admonition
  - markdown.extensions.attr_list
  - markdown.extensions.codehilite:
      guess_lang: true
  - markdown.extensions.def_list
  - markdown.extensions.footnotes
  - markdown.extensions.meta
  - markdown.extensions.toc:
      permalink: true
      toc_depth: "1-4"
```

​

​
