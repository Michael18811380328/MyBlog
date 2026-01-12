# webpack-node-externals

Easily exclude node modules in Webpack

忽略 node modules 文件夹

```javascript
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};
```

​
