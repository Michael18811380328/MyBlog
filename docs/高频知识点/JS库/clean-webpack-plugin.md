# clean-webpack-plugin

A webpack plugin to remove/clean your build folder(s).

[https://github.com/johnagan/clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin "https://github.com/johnagan/clean-webpack-plugin")

上次更新4年前

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
    plugins: [
        /**
         * All files inside webpack's output.path directory will be removed once, but the
         * directory itself will not be. If using webpack 4+'s default configuration,
         * everything under <PROJECT_DIR>/dist/ will be removed.
         * Use cleanOnceBeforeBuildPatterns to override this behavior.
         *
         * During rebuilds, all webpack assets that are not used anymore
         * will be removed automatically.
         *
         * See `Options and Defaults` for information
         */
        new CleanWebpackPlugin(),
    ],
};

module.exports = webpackConfig;
```

​
