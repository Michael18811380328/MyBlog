## 103-django-render_bundle

render\_bundle 是一个 Django 模板标签，用于在模板中引入Webpack打包的静态资源文件。它是通过webpack\_loader库提供的功能来实现的。

[https://django-webpack-loader.readthedocs.io/en/latest/usage.html#render-bundle](https://django-webpack-loader.readthedocs.io/en/latest/usage.html#render-bundle "https://django-webpack-loader.readthedocs.io/en/latest/usage.html#render-bundle")

在给定的引用中，render\_bundle被用来引入名为’main’的Webpack打包文件。它接受三个参数：**bundle名称、文件后缀和位置**。在这个例子中，'main’是bundle名称，'head.js’和’body.js’是文件后缀，'DEFAULT’是位置。

在模板中，render\_bundle标签被用在\<head>和\<body>标签中，分别引入了’main.head.js’和’main.body.js’这两个Webpack打包的文件。

下面是一个示例，演示了如何使用render\_bundle标签引入Webpack打包的静态资源文件：

```html
{% load render_bundle from webpack_loader %}

<html>
<head>
    {% render_bundle 'main' 'head.js' 'DEFAULT' %}
</head>
<body>
    ...
    {% render_bundle 'main' 'body.js' 'DEFAULT' %}
</body>
</html>

```

`render_bundle` 不是 Django 内置的模板标签或函数。

`django-webpack-loader` 是一个 Django 库，用于集成 Webpack 和 Django。它提供了一个 `render_bundle` 函数，用于在 Django 模板中渲染 Webpack bundle。
