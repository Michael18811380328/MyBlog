# css modules

css-模块化

就是类似把 css 当做 js 模块进行导入，使用 JS 类名获取对应的样式的方案

优点：不同的模块不会造成样式冲突干扰，尤其是大型项目不会造成样式类名冲突

缺点：css 需要单独写一份到 JS 中，看起来 JS 内容更多了

webpack 使用：css-loader 已经内置这个功能，可以直接使用

[https://github.com/css-modules/css-modules/blob/master/docs/get-started.md](https://github.com/css-modules/css-modules/blob/master/docs/get-started.md "https://github.com/css-modules/css-modules/blob/master/docs/get-started.md")
