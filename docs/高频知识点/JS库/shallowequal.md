# shallowequal

浅比较两个对象是否相等

shallowequal 是一个用于执行浅比较的工具函数，主要用于判断两个对象或数组是否在浅层结构上相等。浅比较只会检查对象的第一层属性是否相等（即引用相同或原始值相等），而不会递归检查嵌套对象的内容。这个工具在 React、Redux 等前端库中被广泛用于性能优化，避免不必要的重新渲染或计算。

### 1. 核心概念

#### （1）浅比较 vs 深比较

* 浅比较：只检查对象的第一层属性引用是否相同，不检查嵌套对象的内容。

  ```
  const a = { x: 1, y: { z: 2 } };
  const b = { x: 1, y: { z: 2 } };
  shallowEqual(a, b); // false，因为 a.y 和 b.y 是不同的对象引用
  ```

* 深比较：递归检查所有嵌套对象的内容是否完全相等。

#### （2）适用场景

* React 性能优化：在 shouldComponentUpdate 或 React.memo 中使用浅比较，避免不必要的重渲染。

* 状态管理：在 Redux 的 connect 高阶组件中，通过浅比较判断 props 是否变化。

### 2. 实现原理

浅比较通常遵循以下逻辑：

1. 严格相等（===）：先检查两个值是否为同一个引用或原始值。

2. null/undefined 检查：若一个为 null 或 undefined，另一个不为，则不相等。

3. 类型检查：若类型不同（如对象与数组），则不相等。

4. 属性数量检查：若对象的属性数量不同，则不相等。

5. 属性值比较：遍历所有属性，检查它们是否严格相等。

以下是一个简化的实现：

```javascript
function shallowEqual(objA, objB) {
  // 检查引用是否相同
  if (Object.is(objA, objB)) return true;

  // 检查是否为对象（排除 null）
  if (
    typeof objA !== 'object' || objA === null ||
    typeof objB !== 'object' || objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // 检查属性数量是否相同
  if (keysA.length !== keysB.length) return false;

  // 检查所有属性值是否相同
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i];
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      !Object.is(objA[key], objB[key])
    ) {
      return false;
    }
  }

  return true;
}
```

### 3. JavaScript 中的常见实现

#### （1）React 内置的 shallowEqual

React 提供了一个用于浅比较的辅助函数：

```javascript
import { shallowEqual } from 'react-redux'; // 或从 react-utils 导入

const areEqual = shallowEqual(objA, objB);
```

#### （2）lodash 的 isEqual（深比较）与 isShallowEqual（浅比较）

```javascript
import { isEqual, isShallowEqual } from 'lodash';

isEqual({ a: { b: 1 } }, { a: { b: 1 } }); // true（深比较）
isShallowEqual({ a: { b: 1 } }, { a: { b: 1 } }); // false（浅比较）
```

​

### 4. 使用案例

#### （1）React 组件性能优化

```javascript
import React, { useMemo } from 'react';

const MyComponent = React.memo(({ data }) => {
  // 只有当 data 浅层结构变化时才会重新渲染
  return <div>{data.value}</div>;
});


// 或在 class 组件中使用
class MyClassComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }
  render() { /* ... */ }
}
```

​

### 5. 注意事项

#### （1）嵌套对象/数组的陷阱

* 浅比较无法检测嵌套对象的变化：

  ```
  const prev = { items: [1, 2] };
  const next = { items: [1, 2] };
  shallowEqual(prev, next); // false（items 是不同的数组引用）
  ```

  此时需使用深比较或确保每次更新时返回新的嵌套对象。

#### （2）函数引用变化

* 若 props 包含内联函数，可能导致浅比较失败：

  ```
  <MyComponent onClick={() => {}} /> // 每次渲染都会生成新的函数引用
  ```

  建议使用 useCallback 缓存函数。

#### （3）性能权衡

* 浅比较的性能通常优于深比较，但遍历大型对象时仍需注意。

### 6. 总结

shallowequal 是一个高效判断对象浅层相等的工具，特别适用于 React 和状态管理库中的性能优化。

使用时需注意其局限性（无法检测嵌套变化），并结合不可变数据模式（如 immer）或深比较工具（如 lodash 的 isEqual）来处理复杂场景。
