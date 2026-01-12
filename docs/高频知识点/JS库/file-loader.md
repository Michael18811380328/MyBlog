# file-loader

The file-loader resolves import/require() on a file into a url and emits the file into the output directory.

[https://github.com/webpack-contrib/file-loader](https://github.com/webpack-contrib/file-loader "https://github.com/webpack-contrib/file-loader")

处理前端项目中，文件的 import require

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
```

仓库已经停止维护
