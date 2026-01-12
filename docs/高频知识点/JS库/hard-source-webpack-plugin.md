# hard-source-webpack-plugin

用于提高 Webpack 构建速度的插件

在 Webpack 构建过程中，每次构建都需要重新编译和处理所有模块，这会消耗大量的时间，尤其是在项目规模较大时，构建时间会显著增加。

`hard-source-webpack-plugin` 的主要作用是为 Webpack 构建过程提供缓存机制，它会将编译后的模块信息存储在本地磁盘中，当再次进行构建时，如果模块没有发生变化，就可以直接从缓存中读取，而不需要重新编译，从而大大缩短构建时间。

**首次构建**：第一次使用该插件进行构建时，由于没有缓存，构建时间与不使用该插件时基本相同。但插件会在构建过程中生成缓存文件并存储在指定的缓存目录中。

**后续构建**：从第二次构建开始，如果模块没有发生变化，Webpack 会直接从缓存中读取编译后的模块信息，从而显著缩短构建时间。

```text
npm install --save-dev hard-source-webpack-plugin
```

使用方法

```javascript
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    // 其他 Webpack 配置项
    plugins: [
        // 其他插件
        new HardSourceWebpackPlugin()
    ]
};
```

存在的问题：

**缓存失效**：当 Webpack 配置文件、依赖项或者项目文件发生变化时，缓存可能会失效，需要重新生成缓存。

**兼容性问题**：虽然 `hard-source-webpack-plugin` 可以提高构建速度，但在某些复杂的 Webpack 配置或者特定的插件组合下，**可能会出现兼容性问题**。如果遇到构建问题，可以尝试暂时移除该插件进行排查。

这个项目5年没有更新了，实际项目使用不多，使用需要慎重。
