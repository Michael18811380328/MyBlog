## 102-django-skip_common_chunks

<https://www.5axxw.com/wiki/content/jxx937>

[https://django-webpack-loader.readthedocs.io/en/latest/configuration.html#skip-common-chunks](https://django-webpack-loader.readthedocs.io/en/latest/configuration.html#skip-common-chunks "https://django-webpack-loader.readthedocs.io/en/latest/configuration.html#skip-common-chunks")

一个页面中，render\_bundle 如果调用多次，那么会将 common.css 和 common.js 多次插入到页面中

```
{% render_bundle 'viewDataGrid' 'css' %}
{% render_bundle 'baseStatistic' 'css' %}

{% render_bundle 'viewDataGrid' 'js' %}
{% render_bundle 'baseStatistic' 'js' %}

```

`SKIP_COMMON_CHUNKS`是一个标志，用于防止已生成的块再次包含在同一页面中。只有在每个Django模板使用多个入口点（多个`render_bundle`调用）时，才会发生这种情况。通过启用它，您可以获得与HtmlWebpackPlugin相同的默认行为。当在`render_bundle`上使用`skip_common_chunks`时，同样的注意事项也适用，有关更多详细信息，请参阅下面的部分。

```
{% render_bundle 'viewDataGrid' 'css' %}
{% render_bundle 'baseStatistic' 'css' skip_common_chunks=True %}

{% render_bundle 'viewDataGrid' 'js' %}
{% render_bundle 'baseStatistic' 'js' skip_common_chunks=True %}

```

`skip_common_chunks` 是 `django-webpack-loader` 库中的一个设置项。它用于控制是否跳过公共 chunk 的渲染。
