# webpack-bundle-tracker

将有关 webpack 编译过程的一些统计信息，记录到文件中。（tracker 追踪者）

和 webpack nodejs 存在兼容性问题。

> This project is compatible with NodeJS versions 16 and up.
>
> ⚠️ Starting on version 17, NodeJS uses OpenSSL v3 which has compatibility issues with Webpack\@4.&#x20;
>
> This isn't an issue for Webpack\@5
>
> however if you're using Node >= 17 and Webpack\@4, to properly use this package you must ensure to set the NODE\_OPTIONS=--openssl-legacy-provider environment variable.&#x20;

官方案例

```javascript
var path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: {
    app: ['./app'],
  },
  output: {
    path: path.resolve('./assets/bundles/'),
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:3000/assets/bundles/',
  },

  // 设置统计文件的存储路径和文件名
  plugins: [
    new BundleTracker({
      path: path.join(__dirname, 'assets'),
      filename: 'webpack-stats.json',
    }),
  ],
};
```

实际项目使用，根据不同环境配置了不同的统计文件

```javascript
  new webpackBundleTracker({
    filename: isEnvProduction ? './webpack-stats.pro.json' : './webpack-stats.dev.json',
    publicPath: isEnvProduction ? '' : paths.publicUrlOrPath
  }),
```

统计文件：webpack-stats.pro.json 提供了每一个资源文件的名称和路径，每一个 chunks 引用的资源（通常是 common + others）

```javascript
{
  "status": "done",
  "assets": {
    "static/css/app.58d2e6dd.css": {
      "name": "static/css/app.58d2e6dd.css",
      "path": "/build/frontend/static/css/app.58d2e6dd.css"
    },
    "static/css/commons.d6c420b4.css": {
      "name": "static/css/commons.d6c420b4.css",
      "path": "/build/frontend/static/css/commons.d6c420b4.css"
    },
    "static/css/draft.299cd106.css": {
      "name": "static/css/draft.299cd106.css",
      "path": "/build/frontend/static/css/draft.299cd106.css"
    }
  },
  "chunks": {
    "app": [
      "static/js/runtime.e32c54a5.js",
      "static/css/commons.d6c420b4.css",
      "static/js/commons.e891325f.js",
      "static/css/app.58d2e6dd.css",
      "static/js/app.011a7734.js"
    ],
    "draft": [
      "static/js/runtime.e32c54a5.js",
      "static/css/commons.d6c420b4.css",
      "static/js/commons.e891325f.js",
      "static/css/draft.299cd106.css",
      "static/js/draft.e9f03bdc.js"
    ],
    "wiki": [
      "static/js/runtime.e32c54a5.js",
      "static/css/commons.d6c420b4.css",
      "static/js/commons.e891325f.js",
      "static/css/wiki.30e6b692.css",
      "static/js/wiki.41704f71.js"
    ],
    "wiki2": [
      "static/js/runtime.e32c54a5.js",
      "static/css/commons.d6c420b4.css",
      "static/js/commons.e891325f.js",
      "static/css/wiki2.89e72cc3.css",
      "static/js/wiki2.1aa50e13.js"
    ]
  }
}
```

​
