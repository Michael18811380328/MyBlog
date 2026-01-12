# autoprefixer

自动增加 css 前缀，兼容不同版本浏览器

autoprefixer 是一个流行的 CSS 后处理器，用于自动为 CSS 添加浏览器前缀（如 -webkit-、-moz-、-ms-），解决不同浏览器对 CSS 新特性支持不一致的问题。

### 1. 核心功能

* 自动添加前缀：根据 Can I Use 数据，自动为需要兼容的浏览器添加对应前缀。

```css
/* 输入 */
.example {
  display: flex;
  transition: all 0.5s;
}

/* 输出 */
.example {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
```

自定义浏览器范围：通过 .browserslistrc 文件指定需要兼容的浏览器版本。

```
# 示例配置：兼容最近 2 个版本 + 市场份额 > 1% + IE 10+
last 2 versions
> 1%
ie >= 10
```

### 2. 集成方式

* Webpack：通过 postcss-loader 集成。

* Gulp：使用 gulp-postcss 插件。

* CLI：直接作为命令行工具使用。

* CSS-in-JS：部分库（如 styled-components）支持内置集成。

### 3. 安装与使用

#### （1）安装

```
npm install autoprefixer postcss
```

#### （2）配置（示例：Webpack）

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          }
        ]
      }
    ]
  }
};
```

### 4. 优势

* 减少手动工作：无需手动编写或查找浏览器前缀。

* 精准控制：根据目标浏览器动态调整前缀。

* 体积优化：只添加必要的前缀，避免冗余代码。

### 5. 注意事项

* 与 CSS 预处理器配合：需在 Sass/Less 编译后、CSS 压缩前执行。

* 及时更新：定期更新 browserslist 和 autoprefixer 以获取最新浏览器数据。

### 6. 替代方案

* CSS 预处理器：如 Sass 的 @mixin 手动管理前缀（但维护成本高）。

* 在线工具：如 Autoprefixer CSS（适合临时处理）。

### 7. 总结

autoprefixer 是现代前端工作流中不可或缺的工具，通过自动化处理浏览器前缀，提升开发效率并确保 CSS 在各浏览器中的一致性。推荐所有项目集成使用。
