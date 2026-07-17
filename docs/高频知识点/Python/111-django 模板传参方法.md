## 111-django 模板传参方法

一种是通过 views 直接传参，适合某个模板需要的参数(user.html)，例如 PROJECT\_ID

一种是通过中间件 context 进行全局传参，适合全局模板需要的参数（base.html），例如 SITE\_ROOT，USERNAME

HTML 模板继承的语法，不影响参数，也就是 views 给子模板的参数，父模板也可以访问到。

​
