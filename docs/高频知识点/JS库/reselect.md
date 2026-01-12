# reselect

基于 redux 的选择器组件

Reselect 是一个专为 Redux 设计的记忆化（Memoized）选择器库，用于高效提取和转换 store 中的数据。

它通过缓存计算结果避免重复计算，显著提升复杂应用的性能，尤其适用于需要频繁处理数据的场景。

以下是关于 Reselect 的核心介绍：

### 1. GitHub 链接

* 仓库：<https://github.com/reduxjs/reselect>

* 官方文档：<https://github.com/reduxjs/reselect/tree/master/docs>

### 2. 核心概念

#### （1）选择器（Selector）

* 从 Redux store 中提取特定数据的纯函数。

  ```
  // 普通选择器：无记忆化
  const selectTodos = state => state.todos;
  ```

#### （2）记忆化选择器（Memoized Selector）

Reselect 的核心功能，仅在输入变化时重新计算结果。

```javascript
import { createSelector } from 'reselect';

// 记忆化选择器：仅当 state.todos 变化时重新计算
const selectCompletedTodos = createSelector(
  [selectTodos], // 输入选择器
  (todos) => todos.filter(todo => todo.completed) // 结果函数
);
```

### 3. 主要功能

#### （1）避免重复计算

若输入相同，直接返回缓存结果，无需重新执行计算逻辑。

#### （2）组合选择器

支持嵌套使用多个选择器，构建复杂的数据转换逻辑。

```javascript
const selectUncompletedTodos = createSelector(
  [selectCompletedTodos, selectTodos],
  (completedTodos, allTodos) => allTodos.length - completedTodos.length
);
```

#### （3）参数化选择器

支持传入参数，动态筛选数据。

```javascript
const selectTodoById = createSelector(
  [selectTodos, (state, todoId) => todoId],
  (todos, todoId) => todos.find(todo => todo.id === todoId)
);
```

#### （4）自定义相等比较

* 通过 createSelectorCreator 自定义缓存比较逻辑。

### 4. 使用案例

#### （1）复杂数据转换

从 store 中筛选、排序或格式化数据：

```javascript
const selectVisibleTodos = createSelector(
  [selectTodos, selectVisibilityFilter],
  (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
);
```

#### （2）性能优化

在 React 组件中使用记忆化选择器，避免不必要的重渲染：

```javascript
import { useSelector } from 'react-redux';

const TodoList = () => {
  const visibleTodos = useSelector(selectVisibleTodos);
  // ...
};
```

### 5. 注意事项

#### （1）纯函数要求

* 选择器必须是纯函数（相同输入始终返回相同输出）。

#### （2）避免过度使用

* 简单选择器（如直接返回 state 字段）无需记忆化，可能反而降低性能。

#### （3）不可变数据

* 若使用 mutable 方式修改 state，可能导致记忆化失效。

### 6. 替代方案

* Redux Toolkit 的 createSelector：内置 Reselect，推荐使用。

* Immer.js：结合 Reselect 处理复杂状态更新。

* React 的 useMemo：组件内局部记忆化。

### 7. 总结

Reselect 是 Redux 应用中优化数据处理性能的必备工具，通过记忆化缓存避免重复计算，尤其适合处理大型数据集或复杂计算逻辑。合理使用 Reselect 可显著提升应用响应速度，同时保持代码的可维护性。
