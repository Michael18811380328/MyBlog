# react-codemod

#### 作用

用于 React 旧版本项目向新版本迁移，可以重命名旧版语法

[https://github.com/reactjs/react-codemod](https://github.com/reactjs/react-codemod "https://github.com/reactjs/react-codemod")

[https://www.npmjs.com/package/react-codemod](https://www.npmjs.com/package/react-codemod "https://www.npmjs.com/package/react-codemod")

#### 案例

把函数组件改成类组件，或者把类组件改成函数组件

```text
npm install -g react-codemod

react-codemod class-component-to-functional-component MyComponent.jsx
```

#### 使用情况

这个库星星4K，周下载量1万，下载不多（毕竟迁移次数比较少，和其他开发中使用的库不一样），是 react 社区出品的一个库，[https://github.com/reactjs](https://github.com/reactjs "https://github.com/reactjs")

#### 问题

问题1：class-component-to-functional-component 这个可能废弃了，现在最新版不支持使用了

问题2：某些情况可能内存溢出：FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory

个人玩一下可以，有些代码支持性比较差（例如同时写多个旧版本的语法）不建议项目中使用

#### 更新情况

社区去年更新的，目前可用
