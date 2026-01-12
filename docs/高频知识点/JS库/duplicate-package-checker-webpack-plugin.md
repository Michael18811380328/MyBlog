# duplicate-package-checker-webpack-plugin

检测第三方库重复依赖

duplicate-package-checker-webpack-plugin

基本配置

```javascript
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

module.exports = {
    // 其他 Webpack 配置项
    plugins: [
        // 其他插件
        new DuplicatePackageCheckerPlugin()
    ]
};
```

高级配置

```javascript
new DuplicatePackageCheckerPlugin({
    // 是否在发现重复包时抛出错误而不是仅发出警告，默认为 false
    emitError: true,
    // 是否忽略具有不同版本的重复包，默认为 false
    ignoreDifferentVersions: false,
    // 自定义检查逻辑，过滤掉不需要检查的包
    exclude: (instance) => instance.name === 'package-to-ignore'
})
```

在编译完成后，会提示重复的不同版本的第三方库

```text
rc-util
  Multiple versions of rc-util found:
    4.21.1 ./~/rc-util
    5.44.3 ./~/sea-chart/~/rc-util

react-i18next
  Multiple versions of react-i18next found:
    10.13.2 ./~/react-i18next
    14.1.3 ./~/sea-chart/~/react-i18next

react-is
  Multiple versions of react-is found:
    16.13.1 ./~/@emotion/react/~/react-is
    18.3.1 ./~/sea-chart/~/react-is
```

这个库7年没有更新了
