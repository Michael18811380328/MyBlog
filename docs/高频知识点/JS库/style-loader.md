# style-loader

样式加载器

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

[https://github.com/webpack-contrib/style-loader](https://github.com/webpack-contrib/style-loader "https://github.com/webpack-contrib/style-loader")
