# webpackbar

显示 webpack 打包的进度条，适应于 Webpack 3 , 4 and 5

直接在 webpack.config.js 中增加插件即可

```javascript
plugins: [
  new WebpackBar({
    /* options */
    profile: true,
  }),
]
```

打包过程中，会动态显示打包进度，例如下面打包了多少个文件，正在打包哪一个

● Build █████████████████████████ building (30%) 0/2 entries 12335/12410 dependencies 1851/3237 modules 866 active
&#x20;babel-loader › src/lib/draggable/Draggable.js

打包结束后，统计打包的总耗时

例如这里插件总耗时 29 秒，主要处理 JS 文件一共 5000 个 耗时 27 秒。

> Stats by Ext

| Ext   | Requests | Time  | Time/Request | Description      |
| ----- | -------- | ----- | ------------ | ---------------- |
| js    | 5463     | 27s   | 5ms          | JavaScript files |
| css   | 729      | 2s    | 3ms          | css files        |
| svg   | 67       | 140ms | 2ms          | svg files        |
| mjs   | 10       | 2ms   | 179μs        | mjs files        |
| jsx   | 36       | 162ms | 5ms          | jsx files        |
| css   | 0        |       |              | }}               |
| Total | 6665     | 29s   |              |                  |

> Stats by Loader

| Loader            | Requests | Time  | Time/Request | Description       |
| ----------------- | -------- | ----- | ------------ | ----------------- |
| babel-loader      | 5506     | 26s   | 5ms          | Babel-loader      |
| css-loader        | 1089     | 2s    | 2ms          | Css-loader        |
| postcss-loader    | 1089     | 2s    | 2ms          | Postcss-loader    |
| worker-loader     | 3        | 585ms | 195ms        | Worker-loader     |
| svg-sprite-loader | 67       | 140ms | 2ms          | Svg-sprite-loader |
| svgo-loader       | 67       | 140ms | 2ms          | Svgo-loader       |
| Total             | 7821     | 31s   |              |                   |

loader 耗时总计 31 秒，主要在 babel-loader 解析 JS 文件耗时 26秒。
