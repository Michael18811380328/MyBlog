# copy-webpack-plugin

复制额外的文件到输出目录（把源文件复制到发布目录）

Copy files and directories with webpack

```javascript
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "source", to: "dest" },
        { from: "other", to: "public" },
      ],
    }),
  ],
};
```

​
