## 108-Django 案例学习 01

近期正在重新看，下面记录不会的点

[https://docs.djangoproject.com/zh-hans/5.1/intro/tutorial01/](https://docs.djangoproject.com/zh-hans/5.1/intro/tutorial01/ "https://docs.djangoproject.com/zh-hans/5.1/intro/tutorial01/")

注意：django 中的 model 模型，和 react 中的 model 模型，是完全不同的概念，作用也不同，不要被带入。

#### 第一节：创建项目

##### 00 环境安装

教程建议 3.10 以上，4.x 5.x 均可以。项目和实际安装的版本是 python 3.8 或者 3.12，Django 是 4.x 版本，单独在干净的虚拟环境安装（如果存在已有的其他依赖，建议先卸载或者重新创建虚拟环境）

##### 01 项目需求

项目是一个投票系统（HTML投票表单，URL 路由，views 视图函数，modals 数据库模板）

##### 02 使用脚手架新建项目

```text
django-admin startproject mysite 目录名
```

这里的 mysite 就是项目名

新建后的基本架构

```text
djangotutorial/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

* manage.py: 这是 django 内置模块，用户可以调用这个模块中的函数，和 django 交互（例如创建用户，操作数据库，迁移数据库）功能很多，详细参考：[https://docs.djangoproject.com/en/5.1/ref/django-admin/](https://docs.djangoproject.com/en/5.1/ref/django-admin/ "https://docs.djangoproject.com/en/5.1/ref/django-admin/")

* mysite: 项目名称，可以从这个目录中导入导出模块 mysite.urls, mysite.settings 导入

* mysite/\_\_init\_\_.py 一个空文件，表示这是 python 模块：具体参考：[https://docs.python.org/3/tutorial/modules.html#tut-packages](https://docs.python.org/3/tutorial/modules.html#tut-packages "https://docs.python.org/3/tutorial/modules.html#tut-packages")

* mysite/settings.py: 这个 django 项目的设置文件，具体参考：[https://docs.djangoproject.com/en/5.1/topics/settings/](https://docs.djangoproject.com/en/5.1/topics/settings/ "https://docs.djangoproject.com/en/5.1/topics/settings/") 可以设置时区，设置语言（服务器基本信息等）

* mysite/urls: 路由文件

* mysite/asgi.py：asgi 兼容web服务器为您的项目提供服务的入口点。目前没用到&#x20;

* mysite/wsgi.py：wsgi兼容web服务器为您的项目提供服务的入口点。目前没用到&#x20;

##### 03 开启服务器

```text
python manage.py runserver
```

默认在 8000 端口，可以先忽略数据库迁移警告，打开浏览器页面检测服务器是否正常

注意：设置一个轻量级的开发服务器，不能生产环境下使用。Django 是一个Python框架，不是服务器。

开发服务器的热更新：如果更改了Python文件，服务器会自动重启。如果只增加文件，不会重启服务器，需要手动重启。

##### 04 创建应用

Projects vs. apps：An app is a web application that does something – e.g., a blog system, a database of public records or a small poll app. A project is a collection of configuration and apps for a particular website. A project can contain multiple apps.  An app can be in multiple projects. 项目 project 是从代码层面，是开发环境相同的应用的组合。应用 app 是产品层面，一个应用可以出现在多个开发环境中。例如淘宝和天猫是不同的项目，都有用户登录应用页面，都有购物车应用页面，都有用户评价应用页面。&#x20;

使用内置函数创建应用 polls 投票

```text
python manage.py startapp polls
```

应用的目录结构为：

```text
polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
    urls.py
```

在 urls 路由函数处理路由，然后 views 指定对应渲染的视图

```python
# 路由
from django.contrib import admin
from django.urls import include, path

from . import views

urlpatterns = [
    # 这是自定义的视图函数
    path("polls/", include("polls.urls")),
    # 这是内置的视图函数（不需要专门写管理页面）
    path("admin/", admin.site.urls),
]
```

```python
# 视图
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
```

path 函数的两个参数，第一个是 URL，第二个是渲染的页面。

admin.site.urls 是内置的可以直接使用，自己写的 polls.urls 需要使用 include 引用，也方便复用。
