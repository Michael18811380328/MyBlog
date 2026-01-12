# immutability-helper

react 中不可变元素复制的库

实际没有使用，5年没有更新，主要用于 React 框架内部

```javascript
import update from 'immutability-helper';
 
const state1 = ['x'];
const state2 = update(state1, {$push: ['y']}); // ['x', 'y']
```

​
