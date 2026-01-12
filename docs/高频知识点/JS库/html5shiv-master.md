# html5shiv-master

**html5shiv** 是一个用于在 **IE9 及以下版本浏览器** 中支持 HTML5 新元素的 JavaScript 补丁库。由于旧版 IE 不识别 HTML5 新增的语义化标签（如 `<header>`、`<nav>`、`<section>` 等），导致这些元素无法正确渲染样式。html5shiv 通过动态创建并注册这些元素，使其能被浏览器正确解析和样式化。

```html
<!--[if lt IE 9]>
	<script src="bower_components/html5shiv/dist/html5shiv.js"></script>
<![endif]-->
```

​
