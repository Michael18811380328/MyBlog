# vuecli

官方开发文档：<https://cli.vuejs.org/zh/guide/>

全局安装

```
sudo npm install -g @vue/cli
sudo npm install @vue/cli-service-global
```

创建项目

```
# 初始化项目需要设置配置依赖：typescript、babel、eslint 等
vue create my-project

# 图形化界面开发
vue ui
```

启动项目

```
npm install
npm run serve
npm run build
```

## TODO

配置文件说明，例如如何多入口文件等

[https://cli.vuejs.org/zh/config/#pages](https://cli.vuejs.org/zh/config/#pages "https://cli.vuejs.org/zh/config/#pages")

先确定 vue 是哪个版本，以官方文档为准

需要改动 vue.config.js

```json
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  }
}
```

全部配置：<https://cli.vuejs.org/zh/config/#pages>


