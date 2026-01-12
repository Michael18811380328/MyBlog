# sw-precache-webpack-plugin

SWPrecacheWebpackPlugin 是一个 webpack 插件，用于使用 service worker 缓存外部项目依赖项。&#x20;

它将使用 sw-precache 生成一个 Service Worker 文件并将其添加到您的构建目录中。    &#x20;

<https://www.npmjs.com/package/sw-precache-webpack-plugin>

```javascript
  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'my-project-name',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: PUBLIC_PATH + 'index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }
    ),
  ],
```

&#x20;不会继续更新：No longer being updated，建议使用 PWA [https://developer.chrome.com/docs/workbox?hl=zh-cn#generatesw\_plugin](https://developer.chrome.com/docs/workbox?hl=zh-cn#generatesw_plugin "https://developer.chrome.com/docs/workbox?hl=zh-cn#generatesw_plugin")
