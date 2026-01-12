# case-sensitive-paths-webpack-plugin

大小写敏感检测，能规避一些问题，但构建时性能消耗较大。

上次发布还是2021年

```javascript
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var webpackConfig = {
    plugins: [
        new CaseSensitivePathsPlugin()
        // other plugins ...
    ]
    // other webpack config ...
}
```

​
