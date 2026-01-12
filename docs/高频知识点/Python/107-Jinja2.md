## 107-Jinja2

<https://github.com/pallets/jinja>

[jinja.palletsprojects.com](jinja.palletsprojects.com "jinja.palletsprojects.com")

Jinja2是一个强大的模板引擎，常用于Python Web开发中，尤其是 Flask 和 Django 等框架。

```python
from jinja2 import Environment, FileSystemLoader

# 创建一个 Jinja2 环境，指定模板文件所在目录
env = Environment(loader=FileSystemLoader('templates'))

# 加载模板文件
template = env.get_template('user_profile.html')

# 准备数据（实际从数据库获取或者计算得出）
user = {
    'name': '张三',
    'age': 30,
    'email': 'zhangsan@example.com',
    'hobbies': ['阅读', '旅行', '摄影']
}

# 渲染模板并传入数据
output = template.render(user=user)

# 打印结果或保存到文件
print(output)
```

模板文件 html

```html
<!DOCTYPE html>
<html>
<head>
    <title>{{ user.name }}的个人资料</title>
</head>
<body>
    <h1>{{ user.name }}</h1>
    <p>年龄: {{ user.age }}</p>
    <p>邮箱: <a href="mailto:{{ user.email }}">{{ user.email }}</a></p>
    
    <h2>爱好</h2>
    <ul>
        {% for hobby in user.hobbies %}
        <li>{{ hobby }}</li>
        {% endfor %}
    </ul>
</body>
</html>
```

在这个案例中：

首先创建了一个 Jinja2 环境，它会从templates文件夹加载模板文件，加载了名为user\_profile.html的模板。

定义了一个包含用户信息的字典，把数据传递给模板进行渲染，最终生成完整的 HTML 内容。

语法规则

```text
{{ variable }}这种形式用于输出变量的值。

{% for item in list %}和{% endfor %}用于创建循环。

模板继承则是通过 {% extends "base.html" %} 和 {% block content %} 这样的标签来实现 html 模板继承。
```

​
