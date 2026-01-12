# html-webpack-plugin

简化创建 HTML 文件以服务于打包的插件，适用于 webpack 45 版本

[https://github.com/jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin "https://github.com/jantimon/html-webpack-plugin")

会生成一个 dist/index.html 的文件，使用如下

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
```

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Webpack App</title>
    <script defer src="index_bundle.js"></script>
  </head>
  <body></body>
</html>
```

​
