# css-loader

css 加载器

[https://github.com/webpack-contrib/css-loader](https://github.com/webpack-contrib/css-loader "https://github.com/webpack-contrib/css-loader")

```css
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

​
