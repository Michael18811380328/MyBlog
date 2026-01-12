# Mobx

基于可观察状态的响应式库，简化状态管理。

调研一下 mobx 和 redux 对于状态管理的区别，然后选择一个适合的管理工具

#### redux 和 mobx 的区别

1、redux 进行集中式状态管理，全局维护一个 store; mobx 使用分散式状态管理，全局维护多个 store，可以让不同的组件维护独立的 store

2 redux 类似函数式编程，处理逻辑规范但是复杂，偏向于大型项目状态管理。mobx 类似面向对象编程，代码逻辑相对简单，不需要复杂的 store 处理模式。

3 redux 是不可变状态 immutable，mobx 是可变状态管理

主要的逻辑都是：store 设置初始值，首次渲染 render 组件。用户触发 event，函数调用 actions，触发 store 的变化，然后自动更新 View 层。

<https://www.zhihu.com/question/277530559>

redux for global state：作为全局状态管理

rxjs for redux-middleware：rxjs 管理所有输入的 input -> redux action 的调度过程

mobx for component-state：作为组件局部状态管理器来用。

参考这个小项目：<https://github.com/xqlsq/react-mobx>

把 store 注入到根组件中，然后在子组件中直接使用全部的 store，不同页面使用不同的 store 维护

#### 参考

<https://www.v2think.com/mobx-redux-performance>

<https://blog.csdn.net/zhamaoshu4539/article/details/116769871>

<https://blog.csdn.net/xiapi3/article/details/106901684>
