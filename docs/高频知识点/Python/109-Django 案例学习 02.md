## 109-Django 案例学习 02

[https://docs.djangoproject.com/zh-hans/5.1/intro/tutorial02/](https://docs.djangoproject.com/zh-hans/5.1/intro/tutorial02/ "https://docs.djangoproject.com/zh-hans/5.1/intro/tutorial02/")

#### 第二节：数据库配置+后台页面

##### 01 数据库选择

python 内置了 sqlite 所以默认 django 也使用 sqlite 进行演示，这样不需要考虑复杂的情况。实际项目中建议使用 mysql 等大型数据库。

##### 02 项目设置

mysite/settings.py 包含设置部分

* 设置 TIME\_ZONE 时区信息

* INSTALLED\_APPS 设置项。这里包括了会在你项目中启用的所有 Django 应用。应用能在多个项目中使用，你也可以打包并且发布应用，让别人使用它们。内置应用如下：

```text
django.contrib.admin -- 管理员站点

django.contrib.auth -- 认证授权系统。

django.contrib.contenttypes -- 内容类型框架。

django.contrib.sessions -- 会话框架。

django.contrib.messages -- 消息框架。

django.contrib.staticfiles -- 管理静态文件的框架。
```

##### 03 创建数据库

```text
python manage.py migrate
```

这个 migrate 命令查看 INSTALLED\_APPS 配置，并根据 `mysite/settings.py` 文件中的数据库配置，和随应用提供的数据库迁移文件，**创建任何必要的数据库表**。你会看到它应用的每一个迁移都有一个消息。

如果你不需要某个或某些应用，你可以在运行 migrate 前毫无顾虑地从 INSTALLED\_APPS 里注释或者删除掉它们。 migrate 命令只会为在 INSTALLED\_APPS 里声明了的应用进行数据库迁移。

##### 04 创建模型

一个模型 model，就是单个定义你的数据的信息源。模型中包含了不可缺少的数据区域，和你存储数据的行为。（换句话说，就是 sql 语句创建数据库表，在 pyhton 中的写法）。

模型内部每一个变量，就对应数据库的每一个字段

每个 model 都是 models.Model 的实例，每个字段是 models.Field 的实例，对应不同的数据类型。

```python
from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
```

##### 05 将自定义创建的模型加入到数据库中

增加配置

```text
INSTALLED_APPS = [
    "polls.apps.PollsConfig",
    "django.contrib.admin",
]
```

迁移数据库

```text
python manage.py makemigrations polls
```

​
