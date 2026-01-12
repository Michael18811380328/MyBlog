# resolve-url-loader

[https://github.com/bholloway/resolve-url-loader](https://github.com/bholloway/resolve-url-loader "https://github.com/bholloway/resolve-url-loader")

Webpack loader that resolves relative paths in url() statements based on the original source file

Webpack加载器，根据原始源文件解析 url 语句中的相对路径

```javascript
rules: [
  {
    test: /\.scss$/,
    use: [
      ...
      {
        loader: 'css-loader',
        options: {...}
      }, {
        loader: 'resolve-url-loader',
        options: {...}
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true, // <-- !!IMPORTANT!!
        }
      }
    ]
  },
  ...
]
```

​
