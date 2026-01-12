# babel-loader

This package allows transpiling JavaScript files using Babel and webpack.

[https://github.com/babel/babel-loader](https://github.com/babel/babel-loader "https://github.com/babel/babel-loader")

loader 需要和 webpack 版本匹配

```javascript
module: {
  rules: [
    {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          targets: "defaults",
          presets: [
            ['@babel/preset-env']
          ]
        }
      }
    }
  ]
}
```

​
