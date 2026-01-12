# pnp-webpack-plugin

Webpack 的即插即用解析器    &#x20;

This plugin is also available for Jest (jest-pnp-resolver), Rollup (rollup-plugin-pnp-resolve), and TypeScript (ts-pnp)

```javascript
const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

module.exports = {
  resolve: {
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
};
```

​
