# react-dev-utils

！！！不推荐继续使用

这个库是 craete-react-app 工具提供的开发工具函数（webpack插件），现在 cra 已经弃用，这个库也不建议再使用了。

This package includes some utilities used by Create React App.

<https://www.npmjs.com/package/react-dev-utils>

下面的 API 仅供参考学习，不建议新项目继续使用

#### `new ModuleScopePlugin(appSrc: string | string[], allowedFiles?: string[])`

This webpack plugin ensures that relative imports from app's source directories don't reach outside of it.

```javascript
var path = require('path');
var ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
  // ...
  resolve: {
    // ...
    plugins: [
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
      // ...
    ],
    // ...
  },
  // ...
};
```

​

​
