
  # Flask
  ### 课程介绍
网易云课堂视频课程：2024 年新的课程链接：<https://study.163.com/course/courseMain.htm?courseId=1004091002>

学习目标：熟悉 python 环境搭建和基本语法，了解 flask 的设计原理，可以做一个简单项目；可以对接一个前后端项目。

练习项目：用户注册、用户登录、搜索文章、发布文章、增加评论。

数据库设计：需要用户表，文章表，评论表，支持不同数据的增删改查。

练习代码链接：[https://github.com/Michael18811380328/HelloPython/tree/master/docs/05-flask/netease](https://github.com/Michael18811380328/HelloPython/tree/master/docs/05-flask/netease "https://github.com/Michael18811380328/HelloPython/tree/master/docs/05-flask/netease")


### 0.1 安装 python
MacOS

自带 python 开发环境，在控制台输入 python，或者 python xxx.py 即可执行

Windows

没有 Python 环境。需要下载安装，配置环境变量（python pip easy-install）这里需要设置 python 的环境变量和 pip 的环境变量，打开计算机-属性-高级属性-设置环境变量-增加环境变量, 名称是 PATH 属性是文件路径 C:/Python27;C:/Python27/Scripts，设置环境变量后，在 cmd 中可以查看 python 和 pip 的版本号，验证安装。


### 0.2 安装虚拟环境 virtualenv
不同项目依赖的 python 版本不同，依赖第三方库不同，所以需要不同的 python 虚拟环境，虚拟环境会避免版本冲突。

不同的虚拟环境中安装不同的 flask 的版本和库，相互独立不会干扰。

安装 virtualenv 虚拟环境（或者直接使用 Python 内置的 venv 工具）

```text
sudo pip3 install virtualenv
mkdir test
cd test
virtualenv flask-env
```

Windows 激活虚拟环境

```text
cd flask-dev/scripts
activate
pip3 install -r requirements.txt
deactivate
```

Mac 激活虚拟环境

```text
source ~/Virtualenv/flask-env/bin/activate
pip3 install -r requirements.txt
deactivate
```

​


### 0.3 安装 flask
flask 版本兼容问题：视频教程的版本和最新的版本不一样，注意兼容（python 和 flask 版本）

```text
source ~/Virtualenv/flask-env/bin/activate
pip3 install flask
```

测试版本号（测试安装正常）

```python
import flask
print flask.__version__
# 1.1.1
```

​


### 0.4 安装 IDE
可以使用 pycharm sublime Vscode 等


### 第一章 URL 和 View
URL 路由

View 视图


### 1.1 hello flask
第一次创建项目的时候，在 pycharm需要添加虚拟环境，选择虚拟环境中的 python 执行文件

基本结构

```python
# coding=utf-8
# python2 需要设置语言字符集 utf-8

from flask import Flask

# 初始化对象，需要传参
app = Flask(__name__)

# 装饰器 @开头，位于函数的上面
# 是URL视图函数的映射
# 127.0.0.1:5000 会映射到下面的函数
@app.route('/')
def hello_world():
    return 'Hello Michael An!'

@app.route('/index')
def index_page():
    return 'Hello Index Page'

# 入口程序：启动一个应用程序，接受用户的请求（event listener）
if __name__ == '__main__':
    app.run()
```

​


### 1.2 debug
app.run(debug=True) 打开调试模式

项目热加载（修改 python 会热加载）；出现问题后，在页面中看到报错详情

外部配置文件：新建配置文件 config.py，加入大写的参数

```python
DEBUG = True

# SECRET_KEY
```

在主文件中引入配置文件，使用配置

main.py

```python
import config

app.config.from_object(config)
```

​


### 1.3 URL 传参
1、可以在 URL 中传参，从路由中获取参数。参数需要放在尖括号中，视图函数中参数和原始参数名称相同。

```python
@app.route('/page/<number>')
def change_page(number):
	return 'change page to %s' % number
```

2、URL 参数前，可以添加转换器，来转换参数类型（默认字符串，可以转换成 int 类型）

```python
@app.route('/user/<int:user_id>')
def get_user(user_id):
    return 'User ID: %d' % user_id
```

| 类型转换器  | 作用         |
| ------ | ---------- |
| 缺省     | 字符型，但不能有斜杠 |
| int:   | 整型         |
| float: | 浮点型        |
| path:  | 字符型，可有斜杠   |

3、多 URL 的路由（一般不用）

```python
@app.route('/')
@app.route('/hello')
@app.route('/hello/<name>')
def hello(name=None):
    if name is None:
        name = 'World'
    return 'Hello %s' % name
```

​


### 1.4  URL 跳转
可以在一个视图函数中，传入其他视图函数，返回对应的 URL

使用 url\_for 内置函数

用途：页面重定向；HTML 中 A 链接

```python
from flask import Flask, url_for
import config

app = Flask(__name__)
app.config.from_object(config)

@app.route('/')
def hello_world():
    print url_for('handle_index')
    print url_for('change_page', number = 20)
    return 'Hello World!'

@app.route('/index')
def handle_index():
    return 'index page'

@app.route('/page/<number>')
def change_page(number):
    return 'this is %s' % number

if __name__ == '__main__':
    app.run()
```

url\_for 方法，第一个参数指向函数名（加过\`@app.route\`注解的函数），后续的参数对应于要构建的URL变量。

```python
url_for('login')    # 返回/login
url_for('login', id='1')    # 将id作为URL参数，返回/login?id=1
url_for('hello', name='man')    # 适配hello函数的name参数，返回/hello/man
url_for('static', filename='style.css')    # 静态文件地址，返回/static/style.css
```

​


### 1.5 页面重定向和跳转
实际使用: 用户未登录时，跳转（重定向）到登录界面

```python
#coding=utf-8
from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route('/')
def hello_world():
    return redirect(url_for('login'))
    # return redirect('/login/')
    # return 'Hello World!'
    # 固定的 URL，当视图函数中的路径更改后，重定向会错误，建议使用 url_for 动态获取视图函数的跳转位置

@app.route('/login/')
def login():
    return 'This is login page, please login'

# we can use cookie to check user login state in the future
@app.route('/question/<id>')
def question(id):
    if id == '1':
        return 'Your question is 1, This is question page'
    else:
        return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
```

案例2：

```python
from flask import session, redirect

@app.route('/')
def index():
    if 'user' in session:
        return 'Hello %s!' % session['user']
    else:
        return redirect(url_for('login'), 302)
```

\`redirect()\`的第二个参数时HTTP状态码，可取的值有301, 302, 303, 305和307，默认即302（为什么没有304？留给大家去思考）。


### 1.6 路由设置 HTTP 请求方法
在路由函数的第二个参数中，加入路由对应的 HTTP 方法。

使用 request.method 获取具体的方法，执行对应的逻辑。

```python
from flask import request

@app.route('/login', methods=['GET', 'POST', 'PUT', 'DELETE'])
def login():
    if request.method == 'GET':
        return 'This is get page'
    elif request.method == 'POST':
        return 'This is post page'
    elif request.method == 'PUT':
        return 'This is put page'
    else:
        return 'This is null page'
```

使用 request.args.get 获取传递的参数

```python
from flask import request

@app.route('/setting', methods=['POST'])
def settting():
    if request.method == 'POST':
        username = request.args.get('username', '')
        password = request.args.get('password', '')
    return 'username is %s \n' % username + 'password is %s' % password
```

​


### 1.7 服务器配置
app.run() 函数中增加配置（主机，端口，调试， 静态文件位置）

```python
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888, debug=True)
```

第一句的意思：

当本文件为程序入口（用 python app.py）时，就会通过\`app.run()\`启动Web服务器。

如果不是程序入口，那么该文件就是一个模块。

​

注意：运行 flask 后，需要点击关闭，才能关闭当前的本地服务器。

否则关闭终端后，本地服务器还在运行，可能影响其他的本地服务器。


### 1.8 静态文件位置
Flask 的风格是将所有静态文件放在 ”static”子目录下。并且在代码或模板中，使用\`url\_for('static')\`来获取静态文件目录。

如果想改变这个静态目录的位置，可以在创建应用时，指定\`static\_folder\`参数。

```python
app = Flask(__name__, static_folder='files')
```

​


### 第二章 Jinja2 模板
Flask 的模板功能，是基于Jinja2模板引擎实现的

官方网站：[http://jinja.pocoo.org/](http://jinja.pocoo.org/ "http://jinja.pocoo.org/")&#x20;

变量或表达式由\`{{ }}\`修饰，而控制语句由\`{% %}\`修饰，其他的代码，就是我们常见的HTML。

django 模板也是类似语法。


### 2.1 模板渲染和传参
模板放在 templates 路径下

导入模板：render\_template 函数；

注意：不需要写 templates 文件夹的路径，直接写入口文件

模板传参：render\_template 函数中第二个参数进行传参；在模板中使用变量需要 {{ 参数 }}


### 2.2 模板中访问属性和字典
访问模型中的属性或者字典。使用点语法或者中括号可以获取值。


### 2.3 条件语句
条件语句

```text
{% if user %}
	<p>{{ user.name }}</p>
	<p>注销</p>
{% else %}
	<p>登录</p>
	<p>注册</p>
{% endif %}
```

and or not 逻辑操作


### 2.4 循环语句
#### 遍历字典

python 中遍历字典和 JS 不同

```python
user = {
    'name': 'Mike',
    'age': 18
}

for k, v in user.items():
    print(k, v)
```

Jinja2 模板中的使用

其他的遍历和 python 一样， 使用 items() keys() values() iteritems() itrtkeys() itervalues() 迭代器遍历

```text
<dl>
<% for key, value, in my_dict.iteritems() %>
<dt>{{ key|e }}</dt>
<dd>{{ value|e }}</dd>
<% endfor %>
</dl>
```

#### 遍历列表

没有值的情况

```text
<ul>
{% for user in users %}
<li>{{ user.name }}</li>
{% else %}
<li>no users found</li>
{% endfor %}
</ul>
```

​


### 2.5 过滤器
过滤器介绍和语法：过滤器处理原始变量。

default 过滤器：如果第一个参数不传参，那么通过管道符判断，使用默认的值。作用的对象是变量。

```text
{{ avatar|default(默认的参数) }}
```

length过滤器：获取当前的列表的长度并显示（字符串的长度，元组字典的键的长度）

```text
{{ comments|length }}
```

其他遍历器：&#x20;

abs

default

escape

format&#x20;

length 获取参数的长度

last first 获取列表中的第一个值或者最后一个值

join(value, d) 将一个序列使用分隔符拼接成字符串

safe 如果开启全局转义字符，safe 会关闭转义

int float 将值转换成整形或者浮点型数据

lower upper 字符串大小写转换

replace(value, old, new)字符串替代

truncate(value, length, killwords=False)截取某个长度的字符串&#x20;

striptags(value)删除字符串中的全部HTML标签，如果有多个连续空格，使用一个空格取代

trim 删除字符串前后的空白字符串&#x20;

string 将变量转换成字符串

wordcount(string) 计算一个长字符串中单词的个数


### 2.6 模板继承和 block 实现
python 类的继承

```python
class Person(object):
    name = ''
    age = 0

class Student(Person):
    pass
  
class Teacher(Person):
  def hello():
    print "hello"
```

jinja2 继承，子模板使用 extends 继承父模板

父组件中

```html
<!doctype html>
{% block title %}
{% endblock %}
<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='style.css') }}">
{% block header-style %}{% endblock %}
<div class="page">
    {% block body %}{% endblock %}
    {% block main %}{% endblock %}
</div>
```

子组件中，使用 block 语法将子元素的特定代码，插入父组件指定位置

```html
{% extends 'base.html' %}

{% block title %}
这个是界面标题
{% endblock %}

{% block main %}
<h1>这是子界面</h1>
{% endblock %}

{% block header-style %}
<style>
    div { width: 120px; }
</style>
{% endblock %}
```

​


### 2.7 URL链接和加载静态文件
使用 URL\_for 获取对应视图函数的URL，link 标签可以直接获取对应的资源

例如加载静态文件 Url\_for('static', 'filepath')

```html
<link href="{{ url_for('static', 'css/index.css') }}"></a>
```

​


### 2.8 html 自动转义
模板语法中会遇到把变量插入到 HTML 中

在表单中，为了避免注入危险代码，例如:

```python
@app.route('/')
def index():
    return '<div>Hello %s</div>' % '<img src="alert('1')">'
```

可以使用 markup&#x20;

```python
from flask import Flask, Markup

app = Flask(__name__)

@app.route('/')
def index():
    return Markup('<div>Hello %s</div>') % '<em>Flask</em>'
```

这里就是把后面的标签转义成安全的部分后，插入到前面的位置，避免用户输入危险内容造成 XSS

Markup 还有很多方法，比如\`escape()\`呈现HTML标签, \`striptags()\`去除HTML标签。


### 第三章 SQLite3 数据库
SQLite3 是 python3 内置的轻量化数据库，适合小项目，不需要额外配置，所以这里使用 SQLite3 为基本案例。

​


### 3.1 初始化数据库
以基本的用户登录为例：

新建初始化SQL：init.sql&#x20;

```sql
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  password TEXT NOT NULL
);

INSERT INTO users (name, password) VALUES ('visit', '111');
INSERT INTO users (name, password) VALUES ('admin', '123');
```

运行 sqlite3 命令，初始化数据库。

我们的数据库文件就放在”db”子目录下的”user.db”文件中。

```text
sqlite3 db/user.db < init.sql
```

​


### 3.2 配置连接参数
config.py

```python
DATABASE = 'db/user.db'       # 数据库文件位置
SECRET_KEY = 'secret_key_1'   # 会话密钥
```

启动服务

```python
from flask import Flask
import config

app = Flask(__name__)
app.config.from_object('config')
```

​


### 3.3 建立连接
使用上下文装饰器，我们在\`before\_request()\`里建立数据库连接，它会在每次请求开始时被调用；

```python
import sqlite3

@app.before_request
def before_request():
    g.db = sqlite3.connect(app.config['DATABASE'])
```

​


### 3.4 查询数据
通过模板提交表单

```html
{% extends "layout.html" %}

{% block body %}
<form name="login" action="/login" method="post">
    Username: <input type="text" name="user" /><br>
    Password: <input type="password" name="passwd" /><br>
    <input type="submit" value="Submit" />
</form>
{% endblock %}
```

服务器中，login 路由函数，查询数据库，验证客户端输入的用户名和密码是否存在

```python
@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        name = request.form['user']
        pwd = request.form['pwd']
        cursor = g.db.execute('select * from users where name=? and password=?', [name, pwd])
        if cursor.fetchone() is not None:
            session['user'] = name
            flash('Login successfully!')
            return redirect(url_for('index'))
        else:
            flash('No such user!', 'error')
            return redirect(url_for('login'))
    else:
        return render_template('login.html')
```

​


### 3.5 关闭链接
使用上下文编辑器

```python
@app.teardown_request
def teardown_request(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()
```

@app.teardown\_request 会在每次请求关闭前被调用

在\`teardown\_request()\`关闭数据库连接


### 第四章 网络请求
这部分介绍 flask 网络请求相关概念


### 4.1 请求 request
引入 flask 包中的request对象，就可以直接在请求函数中直接使用该对象了。

让我们改进下的`login()`方法：

```python
from flask import request

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        if request.form['user'] == 'admin':
            return 'Admin login successfully!'
        else:
            return 'No such user!'
    title = request.args.get('title', 'Default')
    return render_template('login.html', title=title)
```

templates目录下，添加”login.html”文件

```python
{% extends "layout.html" %}
{% block body %}
<form name="login" action="/login" method="post">
    Hello {{ title }}, please login by:
    <input type="text" name="user" />
</form>
{% endblock %}
```

`request`中`method`变量可以获取当前请求的方法，即”GET”, “POST”, “DELETE”, “PUT”等；

`form`变量是一个字典，可以获取”Post”请求表单中的内容

在上例中，如果提交的表单中不存在`user`项，则会返回一个`KeyError`，你可以不捕获，页面会返回400错误（想避免抛出这`KeyError`，你可以用`request.form.get('user')`来替代）。

而`request.args.get()`方法则可以获取”Get”请求URL中的参数，该函数的第二个参数是默认值，当URL参数不存在时，则返回默认值。


### 4.2 会话 session
会话 session 可以用来在服务器端，保存当前请求的一些状态，以便于在请求之前共享信息。

我们改一下登录验证

```python
from flask import request, session

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        if request.form['user'] == 'admin':
            session['user'] = request.form['user']
            return 'Admin login successfully!'
        else:
            return 'No such user!'
    if 'user' in session:
        return 'Hello %s!' % session['user']
    else:
        title = request.args.get('title', 'Default')
        return render_template('login.html', title=title)
app.secret_key = '123456'
```

你可以看到，”admin”登陆成功后，再打开”login”页面就不会出现表单了。

session对象的操作就跟一个字典一样。

特别提醒，使用session时一定要设置一个密钥`app.secret_key`，如上例。不然你会得到一个运行时错误，内容大致是`RuntimeError: the session is unavailable because no secret key was set`。密钥要尽量复杂，最好使用一个随机数，这样不会有重复，上面的例子不是一个好密钥。

我们顺便写个登出的方法，就是清除字典里的键值：

```python
from flask import request, session, redirect, url_for
@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('login'))
```

​


### 4.3 响应 response
在之前的例子中，请求的响应我们都是直接返回字符串内容，或者通过模板来构建响应内容然后返回。

其实我们也可以先构建响应对象，设置一些参数（比如响应头）后，再将其返回。修改下上例中的”Get”请求部分：

```python
from flask import request, session, make_response

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        ...
    if 'user' in session:
        ...
    else:
        title = request.args.get('title', 'Default')
        response = make_response(render_template('login.html', title=title), 200)
        response.headers['key'] = 'value'
        return response
```

打开浏览器调试，在”Get”请求用户未登录状态下，你会看到响应头中有一个`key`项。`make_response`方法就是用来构建`response`对象的，第二个参数代表响应状态码，缺省就是”200”。


### 4.4 日志 log
错误处理日志。

Flask提供\`logger\`对象，其是一个标准的\`Python Logger\`类。修改上例中的\`exception()\`函数：

```python
@app.route('/exception')
def exception():
    app.logger.debug('Enter exception method')
    app.logger.error('403 error happened')
    raise InvalidUsage('No privilege to access the resource', status_code=403)
```

执行后，你会在控制台看到日志信息。

在debug模式下，日志会默认输出到标准错误stderr中。

你可以添加\`FileHandler\`来使其输出到日志文件中去，也可以修改日志的记录格式，下面演示一个简单的日志配置代码：

```python
server_log = TimedRotatingFileHandler('server.log','D')
server_log.setLevel(logging.DEBUG)
server_log.setFormatter(logging.Formatter('%(asctime)s %(levelname)s: %(message)s'))

error_log = TimedRotatingFileHandler('error.log', 'D')
error_log.setLevel(logging.ERROR)
error_log.setFormatter(logging.Formatter('%(asctime)s: %(message)s [in %(pathname)s:%(lineno)d]'))

app.logger.addHandler(server_log)
app.logger.addHandler(error_log)
```

上例中，我们在本地目录下创建了两个日志文件，分别是”server.log”记录所有级别日志；”error.log”只记录错误日志。我们分别给两个文件不同的内容格式。另外，我们使用了\`TimedRotatingFileHandler\`并给了参数\`D\`，这样日志每天会创建一个新的文件，并将旧文件加日期后缀来归档。

你还可以将错误信息发送邮件。更详细的日志使用可参阅官方。


### 4.5 消息闪现
“Flask Message”是一个很有意思的功能，一般一个操作完成后，我们都希望在页面上闪出一个消息，告诉用户操作的结果。用户看完后，这个消息就不复存在了。Flask提供的\`flash\`功能就是为了这个。（toaster）

我们还是拿用户登录来举例子：

```python
from flask import render_template, request, session, url_for, redirect, flash

@app.route('/')
def index():
    if 'user' in session:
        return render_template('hello.html', name=session['user'])
    else:
        return redirect(url_for('login'), 302)

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        session['user'] = request.form['user']
        flash('Login successfully!')
        return redirect(url_for('index'))
    else:
        return '''

        '''
```

当用户登录成功后，就用\`flash()\`函数闪出一个消息。让我们找回模板代码，在”layout.html”加上消息显示的部分：

```html
<!doctype html>
<title>Hello Sample</title>
<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='style.css') }}">
{% with messages = get_flashed_messages() %}
  {% if messages %}
    <ul class="flash">
    {% for message in messages %}
      <li>{{ message }}</li>
    {% endfor %}
    </ul>
  {% endif %}
{% endwith %}
<div class="page">
    {% block body %}
    {% endblock %}
</div>
```

上例中\`get\_flashed\_messages()\`函数就会获取我们在\`login()\`中通过\`flash()\`闪出的消息。从代码中我们可以看出，闪出的消息可以有多个。模板”hello.html”不用改。运行下试试。登录成功后，是不是出现了一条”Login successfully”文字？再刷新下页面，你会发现文字消失了。你可以通过CSS来控制这个消息的显示方式。

\`flash()\`方法的第二个参数是消息类型，可选择的有”message”, “info”, “warning”, “error”。你可以在获取消息时，同时获取消息类型，还可以过滤特定的消息类型。只需设置\`get\_flashed\_messages()\`方法的\`with\_categories\`和\`category\_filter\`参数即可。比如，Python部分可改为：

```python
@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        session['user'] = request.form['user']
        flash('Login successfully!', 'message')
        flash('Login as user: %s.' % request.form['user'], 'info')
        return redirect(url_for('index'))
```

layout模板部分可改为

```html
{% with messages = get_flashed_messages(with_categories=true, category_filter=["message","error"]) %}
  {% if messages %}
    <ul class="flash">
    {% for category, message in messages %}
        <li class="{{ category }}">{{ category }}: {{ message }}</li>
    {% endfor %}
    </ul>
  {% endif %}
{% endwith %}
```

​


### 4.6 错误处理 error
使用`abort()`函数可以直接退出请求，返回错误代码：

```python
from flask import abort
@app.route('/error')
def error():
    abort(404)
```

上例会显示浏览器的404错误页面。

有时候，我们想要在遇到特定错误代码时做些事情，或者重写错误页面，可以用下面的方法：

```python
@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404
```

此时，当再次遇到404错误时，即会调用`page_not_found()`函数，其返回”404.html”的模板页。第二个参数代表错误代码。

不过，在实际开发过程中，我们并不会经常使用`abort()`来退出，常用的错误处理方法一般都是异常的抛出或捕获。装饰器`@app.errorhandler()`除了可以注册错误代码外，还可以注册指定的异常类型。让我们来自定义一个异常：

```python
class InvalidUsage(Exception):
    status_code = 400

    def __init__(self, message, status_code=400):
        Exception.__init__(self)
        self.message = message
        self.status_code = status_code

@app.errorhandler(InvalidUsage)
def invalid_usage(error):
    response = make_response(error.message)
    response.status_code = error.status_code
    return response
```

我们在上面的代码中定义了一个异常`InvalidUsage`，同时我们通过装饰器`@app.errorhandler()`修饰了函数`invalid_usage()`，装饰器中注册了我们刚定义的异常类。这也就意味着，一但遇到`InvalidUsage`异常被抛出，这个`invalid_usage()`函数就会被调用。

```python
@app.route('/exception')
def exception():
    raise InvalidUsage('No privilege to access the resource', status_code=403)
```

​


### 4.7 全局对象g
`flask.g`是Flask一个全局对象，这里有点容易让人误解，其实`g`的作用范围，就在一个请求（也就是一个线程）里，它不能在多个请求间共享。你可以在`g`对象里保存任何你想保存的内容。

一个最常用的例子，就是在进入请求前，保存数据库连接。


### 4.8 Cookie
提到了Session，当然也要介绍Cookie喽，毕竟没有Cookie，Session就根本没法用。

Flask中使用Cookie也很简单：

```python
from flask import request, session, make_response
import time

@app.route('/login', methods=['POST', 'GET'])
def login():
    response = None
    if request.method == 'POST':
        if request.form['user'] == 'admin':
            session['user'] = request.form['user']
            response = make_response('Admin login successfully!')
            response.set_cookie('login_time', time.strftime('%Y-%m-%d %H:%M:%S'))
        ...
    else:
        if 'user' in session:
            login_time = request.cookies.get('login_time')
            response = make_response('Hello %s, you logged in on %s' % (session['user'], login_time))
        ...
    return response
```

例子越来越长了，这次我们引入了`time`模块来获取当前系统时间。我们在返回响应时，通过`response.set_cookie()`函数，来设置Cookie项，之后这个项值会被保存在浏览器中。这个函数的第三个参数`max_age`可以设置该Cookie项的有效期，单位是秒，不设的话，在浏览器关闭后，该Cookie项即失效。

在请求中，`request.cookies`对象就是一个保存了浏览器Cookie的字典，使用其`get()`函数就可以获取相应的键值。


### 第五章 SQLAlchemy 数据库
之前我们介绍了连接内置数据库的 sqlite3

实际通常需要功能更强大的 mysql 数据库


### 5.1 安装 MYSQL 服务
目的是启动 mysql 服务，安装方式有很多：

* Mac 安装：下载后并安装，需要在控制台初始化并输入密码： mysqladmin -u root password \[password]。

* Windows 安装：需要根据提示安装 MicroSoft C++, .net Framework 开发库，在安装对话框中输入初始密码，具体参考 database-mysql 安装文件

* docker 容器安装


### 5.2 安装 mysql-python 中间件
Python 操作 MySQL 驱动

Flask 想要操作数据库，必须要先安装 Python 操作 MySQL 的驱动。在 Python 中，目前有以下 MySQL 驱动包。

（1）MySQL-python：也就是 MySQLdb。是对 C 语言操作 MySQL 数据库的一个简单封装。遵循了 Python DB API v2。但是只支持 Python2。——特点：C语言比较快，只支持py2

（2）mysqlclient：是 MySQL-python 的另外一个分支。支持 Python3 并且修复了一些 bug。是目前为止执行效率最高的驱动，但是安装的时候容易因为环境问题出错。——特点：C语言比较快，支持PY3，容易出现兼容问题（50%安装问题）

（3）pymysql：纯 Python 实现的一个驱动。因为是纯 Python 编写的，因此执行效率不如 mysqlclient。也正因为是纯 Python 写的，因此可以和 Python 代码无缝衔接。——特点：python写的比较慢，兼容很好。

（4）mysql-connector-python：MySQL 官方推出的纯 Python 连接 MySQL 的驱动，执行效率比 pymysql 还慢。

建议使用第三种：

```
pip install pymysql
```

​


### 5.3 flask-sqlalchemy 介绍
#### SQLAlchemy

我们很少会使用 pymysql 直接写原生 SQL 语句去操作数据库，更多的是通过 SQLAlchemy 提供的 ORM 技术，类似于操作普通 Python 对象一样实现数据库的增删改查操作。

SQLAlchemy 类似于 Jinja2，是可以独立于 Flask 而被使用的，完全可以在任何 Python 程序被使用（Django也支持）

SQLAlchemy 的功能非常强大，可以在学完本章后阅读 SQLAlchemy 的官方文档，链接为：<https://www.sqlalchemy.org/>

#### Flask-SQLAlchemy

Flask-SQLAlchemy 是对 SQLAlchemy 的一个封装，使得在 Flask 中使用 SQLAlchemy 更加方便。

Flask-SQLAlchemy 需要单独安装，因为 Flask-SQLAlchemy 依赖 SQLAlchemy，所以只要安装了 Flask-SQLAlchemy，SQLAlchemy 会自动安装。安装命令如下。

```text
pip install flask-sqlalchemy
```

#### ORM 原理

对象关系映射（Object Relationship Mapping），简称 ORM，是一种可以用 Python 面向对象的方式来操作关系型数据库的技术，具有可以映射到数据库表能力的 Python 类我们称之为 ORM 模型。

一个 ORM 模型与数据库中一个表相对应，ORM 模型中的每个类属性分别对应表的每个字段，ORM 模型的每个实例对象对应表中每条记录。

ORM 技术提供了面向对象与 SQL 交互的桥梁，让开发者用面向对象的方式操作数据库，使用 ORM 模型具有以下优势。&#x20;

（1）开发效率高：几乎不需要写原生 SQL 语句，使用纯 Python 的方式操作数据库，大大的提高了开发效率。&#x20;

（2）安全性高：ORM 模型底层代码对一些常见的安全问题，比如 SQL 注入做了防护，比直接使用 SQL 语句更加安全。&#x20;

（3）灵活性强：Flask-SQLAlchemy 底层支持 SQLite、MySQL、Oracle、PostgreSQL 等关系型数据库，但针对不同的数据库，ORM 模型代码几乎一模一样，只需修改少量代码，即可完成底层数据库的更换。&#x20;

#### 案例

Flask-sqlalchemy 是一个 ORM 的框架（模型关系映射，Object relationship mapping）

把数据库中的一个表当做 python 中的一个类，增加记录就是新建一个类的实例，删除更新数据也可以完成。

假设我们的表结构：

| id(int) | name(string) | comment(text) |
| ------- | ------------ | ------------- |
| 001     | Mike         | This is text. |

我们可以创建对应的类，表示这个表（下面是伪代码）

```python
class Comment(Modal):
  id = Int()
  name = String()
  comment = Text()

comment1 = Comment(id = '001', name = 'Mike', comment = 'This is text')

# 完成数据库的增删改查
add(comment1)
delete(comment1)
comment1.name = 'John'
update(comment1)
```

我们操作数据库就类似操作对象，很方便；这是一个数据库的映射


### 5.4 flask-sqlalchemy 连接数据库
Flask-SQLAlchemy 连接 MySQL

使用 Flask-SQLAlchemy 操作数据库之前，要先创建一个由 Flask-SQLAlchemy 提供的 SQLAlchemy 类的对象。在创建这个类的时候，要传入当前的 app。然后还需要在 app.config 中设置 `SQLALCHEMY_DATABASE_URI` 来配置数据库的连接

示例代码如下

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

HOSTNAME = "127.0.0.1"
PORT = 3306
USERNAME = "root"
PASSWORD = "xxxxxx"
DATABASE = "database_learn"

app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{USERNAME}:{PASSWORD}@{HOSTNAME}:{PORT}/{DATABASE}?charset=utf8"

db = SQLAlchemy(app)
```

Flask-SQLAlchemy 连接数据库，会从 app.config 中读取 `SQLALCHEMY_DATABASE_URI` 参数

数据库应该提前在 MySQL 中创建好。

`SQLALCHEMY_DATABASE_URI` 不同的数据库有不同的连接方式。MySQL 的链接方式为：

```text
mysql+[driver]://[username]:[password]@[host]:[port]/[database]?charset=utf8
```

其中`[]`中是变量，需要配置的时候填充进去。

```python
with db.engine.connect() as conn:
    rs = conn.execute("select 1")
    print(rs.fetchone())
```

如果单击运行，在 Pycharm 的控制台中打印了`(1,)`，说明已经连接成功。

这里也支持连接其他类型数据库，只需要把配置修改一下。

注：这里第一行表示上下文

> `with db.engine.connect() as conn:`
>
> 1. 这是一个上下文管理器（`with`语句），用于创建数据库连接
>
> 2. `db.engine` 表示数据库引擎对象，是与数据库交互的核心入口
>
> 3. `.connect()` 方法创建一个数据库连接
>
> 4. `as conn` 将创建的连接对象赋值给变量`conn`
>
> 5. 使用`with`语句的好处是会自动管理连接的关闭，即使发生错误，也能确保连接被正确释放


### 5.5 ORM 模型与表的映射
我们用 Flask-SQLAlchemy 来创建一个 User 模型，示例代码如下。

```python
class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer,primary_key=True, autoincrement=True)
    username = db.Column(db.String(100))
    password = db.Column(db.String(100))

db.create_all()
```

我们创建一个类名叫 User，并使得他继承自 db.Model，所有 ORM 模型必须是 db.Model 的直接或者间接子类。

通过 `__tablename__` 属性，指定 User 模型映射到数据库中表的名称。

我们定义了三个 db.Column 类型的类属性，分别是 id、username、password，只有使用 db.Column 定义的类属性，才会被映射到数据库表中成为字段。

在这个 User 模型中：id 是 db.Integer 类型，在数据库中将表现为整形，并且传递 primary\_key=True 参数来指定 id 作为主键，传递 autoincrement=True 来设置 id 为自增长。username 和 password，我们分别指定其类型为 db.String 类型，在数据库中将表现为 varchar 类型，并且指定其最大。

调用`db.create_all()`创建所有定义的数据库表。


### 5.6 ORM 模型的 CRUD 操作
**使用面向对象的方法，实现 SQL 中的增删改查**

使用 ORM 进行 CRUD（Create、Read、Update、Delete）操作，需要先把操作添加到会话中，通过 `db.session` 可以获取到会话对象。

会话对象 `session `只是在内存中，如果想要把会话中的操作提交到数据库中，需要调用 `db.session.commit()` 操作

如果想要把会话中的操作回滚，则可以通过 `db.session.rollback()` 实现。

#### 1. Create 操作

使用 ORM 创建一条数据非常简单，先使用 ORM 模型创建一个对象，然后添加到会话中，再进行 `commit` 操作即可，示例代码如下。

```python
@app.route('/user/add')
def user_add():
    user1 = User(username="张三",password="111111")
    db.session.add(user1)
    db.session.commit()
    return "用户添加成功！"
```

在以上代码中，首先用 `User` 类创建了三个对象，在创建对象的时候，必须要通过关键字参数给字段赋值，否则 SQLAlchemy 将不知道是给哪个字段赋值，从而报错，并且因为 `id` 是作为一个自增长的主键，因此可以不需要赋值。然后再把三个对象添加到 `session` 中，最后再统一进行 `commit` 操作即可把数据添加到数据库中。

#### 2. Query 操作

ORM 模型都是继承自 `db.Model`，`db.Model` 内置的 `query` 属性上有许多方法，可以实现对 ORM 模型的查询操作。`query` 上的方法可以分为两大类，分别是过滤方法以及提取方法。

我们首先来看下提取方法(get)，这个通过 ID进行提取，实际使用不多。

```python
@app.route('/user/fetch')
def user_fetch():
    # 1. 获取 User 中所有数据
    users = User.query.all()

    # 2. 获取主键为 1 的 User 对象
    user = User.query.get(1)

    # 3. 获取第一条数据
    user = User.query.first()

    return "数据提取成功！"
```

在查询数据的时候，我们经常需要做过滤（filter）操作。

过滤最常用两个方法为 `filter` 和 `filter_by`，`filter` 方法传递查询条件，`filter_by` 传递关键字参数。查询的结果是一个 query\_set，是特殊的列表，所以需要使用 .all() 方法转换成可以输出的列表。

```python
@app.route('/user/filter')
def user_filter():
    # 1. filter 方法：
    users = User.query.filter(User.username=="张三").all()
    # 2. filter_by 方法：
    users = User.query.filter_by(username="张三").all()
    return "数据过滤成功！"
```

除了 `filter` 和 `filter_by` 以外，Flask - SQLAlchemy 还提供了以下过滤方法

| 方法名                       | 描述                       |
| ------------------------- | ------------------------ |
| `query.filter()`          | 根据查询条件过滤。                |
| `query.filter_by()`       | 根据关键字参数过滤。               |
| `query.slice(start,stop)` | 对结果进行切片操作。               |
| `query.limit(limit)`      | 对结果数量进行限制。               |
| `query.offset(offset)`    | 在查询的时候跳过前面 `offset` 条数据。 |
| `query.order_by()`        | 根据给定字段进行排序。              |
| `query.group_by()`        | 根据给定字段进行分组。              |

其中 `slice`、`limit`、`offset` 使用比较简单，这里不再做过多讲解。

#### 3. update 操作

先使用 query 方法查询到对应的数据，然后更新对应的字段，然后进行提交

```python
@app.route('/user/update')
def update_user():
    user = User.query.filter_by(username = 'Mike').first()
    user.age = 18
    db.session.commit()
```

#### 4. delete 操作

先试用 query 方法查询到对应的数据，然后从会话中删除，然后进行提交

```python
@app.route('/user/delete')
def delete_user():
    user = User.query.filter_by(username = 'Mike').first()
    db.session.delete(user)
    db.session.commit()
```

​


### 5.7 ORM 外键与表关系
MySQL 关系型数据库一个强大的功能，就是多个表之间可以建立关系。比如文章表中，通常需要保存作者数据，但是我们不需要直接把作者数据放到文章表中，而是通过外键引用用户表。这种强大的表关系，可以存储非常复杂的数据，并且可以让查询非常迅速。

在 Flask - SQLAlchemy 中，同样也支持表关系的建立。表关系建立的前提，是通过数据库层面的外键实现的。

表关系总体来讲可以分为三种，分别是：一对多（多对一）、一对一、多对多。

#### 外键

外键是数据库层面的技术，在 Flask - SQLAlchemy 中支持创建 ORM 模型的时候就指定外键，创建外键是通过 `db.ForeignKey` 实现的。比如这里我们创建一个 `Article` 表，这个表有一个 `author_id` 字段，通过外键引用 `user` 表的 `id` 字段，用来保存文章是由谁编写的，那么 `Article` 的模型代码如下。

```python
class Article(db.Model):
    __tablename__ = "article"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)

    author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
```

以上代码，除了添加常规 `title`、`content` 属性外，还增加了一个 `author_id`，`author_id` 通过 `db.ForeignKey("user.id")` 引用了之前我们创建的 `user` 表的 `id` 字段。

这里有个细节需要注意，`author_id` 因为引用 `user` 表的 `id` 字段，所以他的类型必须跟 `user` 表的 `id` 字段一致。

#### 一对多

以上通过外键，实际上已经建立起一对多的关系，一篇文章只能引用一个作者，但是一个作者可以被多篇文章引用。但是以上只是建立了一个外键，通过 `Article` 的对象，还是无法直接获取到 `author_id` 引用的那个 `User` 对象。为了达到操作 ORM 对象就跟操作普通 Python 对象一样，Flask-SQLAlchemy 提供了 `db.relationship` 来引用外键所指向的那个 ORM 模型。在以上的 `Article` 模型中，我们添加 `db.relationship`，示例代码如下。

```python
class Article(db.Model):
    __tablename__ = "article"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)

    # 创建外键
    author_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    
    # 建立关联关系，直接使用对象的语法，可以获取链接的字段
    author = db.relationship("User")
```

我们添加了一个 `author` 属性，这个属性通过 `db.relationship` 与 `User` 模型建立了联系，以后通过 `Article` 的实例对象访问 `author` 的时候，比如 `article.author`，那么 Flask-SQLAlchemy 会自动根据外键 `author_id` 从 `user` 表中寻找数据，并形成 `User` 模型实例对象。

以下我们通过创建 `Article` 对象，并通过访问 `Article` 实例对象上的 `author` 属性来关联 `User` 对象，示例代码如下。

```python
@app.route('/article/add')
def article_add():
    user = User.query.first()
    article = Article(title="aa", content="bb", author=user)
    db.session.add(article)
    db.session.commit()
```

#### 双向获取

通过上面的操作，我们建立了一个表和另一个表的关联关系，可以使用 article.author 获取对应的作者。

那么如何通过 author 获取全部的文章呢？

方案1：使用 back\_populates = 'xxx' 进行双向映射

```python
class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    username = db.Column(db.String(100), nullable = False)
    password = db.Column(db.String(100), nullable = False)
    # 建立反向关联关系
    article = db.relationship("Article", back_populates = 'author')

class Article(db.Model):
    __tablename__ = 'article'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    title = db.Column(db.String(200), nullable = False)
    content = db.Column(db.Text, nullable = False)
    # 建立外键
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    # 建立关联关系
    author = db.relationship('User', back_populates="articles")
```

方案2：使用 back\_ref = 'xxx' 进行双向映射

在 Article 表中，增加 back\_ref="articles"，这样不需要在 User 表中增加关联关系。这个好处是简单，只需要一行代码。缺点是：如果表很多，关联关系很复杂，容易找不到另一个关联的表（User.article 找不到）。


### 5.8 flask-migrate 迁移ORM模型
之前使用 db.create\_all() 适合日常测试，当 SQL 语句需要更改（字段增减），这种方式不合适后续更新。

我们使用 flask-migrate 处理

```text
pip install flask-migrate
```

代码中增加

```python
from flask-migrate import Migrate

db = SQLAlchemy(app)

migrate = Migrate(app, db)
```

然后当 SQL 更改后，可以进行自动迁移操作，具体分成三步：

1、flask db init 在项目初始化执行一次即可，会生成一个 migrates 文件夹，里面存放相关迁移脚本文件

2、每次改动后，执行 flask db migrate: 识别模型的改变，生成迁移脚本，放在 migrates 文件夹中

3、flask db upgrade: 执行迁移脚本，将 ORM 中的更改应用到 MySQL数据库中


### 产品需求分析
需求分析——一个基础的用户注册、登录、发帖、评论的站点

1. **论坛列表页面​**：展示已有的问答内容列表，用户可以浏览不同的问答标题及相关信息，了解论坛中的讨论话题，也可通过搜索框根据关键字查找特定内容。

2. **用户注册页面​**：提供注册入口，用户需要填写邮箱、验证码、用户名、密码、确认密码等信息，完成注册流程，从而获得网站的用户身份，以便进行后续如登录、发布问答等操作。

3. **用户登录页面​**：供已注册用户输入邮箱和密码，验证身份后登录网站，登录成功后可享受如发布问答等更多权限的操作。

4. **发布问答页面​**：登录后的用户可以在此页面输入问答标题和内容，点击 “发布” 按钮，将自己的问题或分享的知识发布到论坛中，与其他用户交流。


### 问答平台项目结构搭建
不同框架的架构对比：

* Flask 比较灵活，需要很多外部配置，不同人配置的项目架构千差万别。

* Django 功能整合，基本上各种功能都固定配置，搭建的架构是固定的。

#### Flask 目录架构

（AI给出的架构比较全面，比视频给出的全面）

```text

├── app/                           # 应用核心目录（MVT 架构实现）
│   ├── __init__.py                # 应用初始化（创建 Flask 实例、注册蓝图等）
│   ├── config.py                  # 应用配置（开发/生产环境、数据库连接等）


│   ├── models/                    # 数据层（Model）：数据库模型定义
│   │   ├── __init__.py
│   │   ├── user.py                # 用户模型
│   │   └── product.py             # 商品模型


│   ├── views/                     # 表现层（View）：视图函数/蓝图
│   │   ├── __init__.py
│   │   ├── auth_bp.py             # 认证蓝图（登录/注册路由，@auth_bp.route）
│   │   └── user_bp.py


│   ├── services/                  # 业务逻辑层（Service）：核心业务处理
│   │   ├── __init__.py
│   │   ├── auth_service.py        # 认证业务（密码加密、登录校验等）


│   ├── templates/                 # 表现层（Template）：HTML 模板
│   │   ├── base.html              # 基础模板（公共导航、页脚）
│   │   ├── auth/                  # 认证相关模板
│   │   │   ├── login.html
│   │   │   └── register.html
│   │   └── product/               # 商品相关模板
│   │       ├── list.html
│   │       └── detail.html



│   ├── static/                    # 静态资源（CSS/JS/图片等）
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── script.js
│   │   └── img/



│   └── utils/                     # 工具函数（通用功能封装）
│       ├── __init__.py
│       ├── validator.py           # 数据校验工具（如手机号格式验证）
│       └── logger.py              # 日志工具（统一日志输出）


├── migrations/                    # 数据库迁移文件（由 Flask-Migrate 生成）


├── tests/                         # 单元测试目录
│   ├── __init__.py
│   ├── test_auth.py               # 认证模块测试
│   └── test_product.py            # 商品模块测试


├── .env                           # 环境变量（敏感配置，如数据库密码，不提交到 Git）
├── .gitignore                     # Git 忽略文件（如 .env、__pycache__）
├── requirements.txt               # 项目依赖（如 flask==2.0.1, flask-sqlalchemy==2.5.1）
├── run.py                         # 应用启动入口（如 `python run.py` 启动服务）
└── README.md                      # 项目说明（安装步骤、接口文档等）
```

1. **app/​**：整个应用的核心代码，按 MVT 架构拆分，职责清晰：

   * `models/`：通过 ORM 定义数据模型，与数据库交互。

   * `views/`：用蓝图（Blueprint）拆分路由，避免单文件路由过多。

   * `services/`：隔离业务逻辑，避免视图函数直接操作数据库（解耦）。

   * `templates/` 和 `static/`：分别存放模板和静态资源，按模块分类（如 `auth/`、`product/`）。

2. **migrations/​**：通过 `Flask-Migrate` 管理数据库版本（如新增字段、表结构变更），支持版本回滚。

3. **tests/​**：单元测试目录，确保代码功能正确性，可配合 `pytest` 运行。

4. **配置相关**：`config.py` 存放公开配置，`.env` 存放敏感信息（需在 `.gitignore` 中排除）。

5. **启动入口**：`run.py` 中通常包含创建 app 实例、启动开发服务器的逻辑（如 `app.run(debug=True)`）。

#### 避免循环引用

app.py 和 models.py 和 exts.py 中避免循环引用，可以把数据库相关操作单独拿出来 exts.py 中，其他模块  from exts import db 引入模块。

```python
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
```

app.py 中

```python
from exts import db

db.init(app)
```

#### 配置文件

全部配置文件放在 config.py 中，避免 app.py 中配置和代码逻辑混合在一起

```python
from config import config

app.config.from_config(config)
```

#### 蓝图

蓝图 blueprint 作用是拆分多级路由，避免 /api/v1/user 这样的路由层级很深不便于管理。

具体使用 views 还是 blueprints 都可以（教程是 blueprints，AI 是 views）

```python
from flask import Blueprint

bp = Blueprint('user', __name__, url_prefix = '/user')

@bp.route('/add')
def add_ser():
    pass

@bp.route('/delete')
def delete_ser():
    pass

# 实际访问的路径是 /user/add 和 /user/delete
```

在 App.py 中使用蓝图，可以把路由模块和入口模块解耦。

```python
from blueprints.qa import bp as qa_bp
from blueprints.user import bp as user_bp

app.register_blueprint(qa_bp)
app.register_blueprint(user_bp)
```

使用 AI 帮助可以自己尝试搭建基本功能。


