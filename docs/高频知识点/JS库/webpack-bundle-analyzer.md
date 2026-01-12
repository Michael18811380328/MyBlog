# webpack-bundle-analyzer

webpack 用于分析 Webpack 打包后的文件大小和模块结构，常用在性能分析和优化。

当打包的内容比较多，可以使用这个工具分析不同的功能占多少空间，减少打包后的内容（例如使用 dayjs 替代 moment 如果仅考虑中文情况，不需要支持复杂的时间格式）。

使用：在 webpack.config.js 中增加插件

```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // 其他 Webpack 配置项
  plugins: [
    // 其他插件
    new BundleAnalyzerPlugin()
  ]
};
```

实际使用比较多
