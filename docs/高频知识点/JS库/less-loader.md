# less-loader

less 加载器

[https://github.com/webpack-contrib/less-loader](https://github.com/webpack-contrib/less-loader "https://github.com/webpack-contrib/less-loader")

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
};
```

​
