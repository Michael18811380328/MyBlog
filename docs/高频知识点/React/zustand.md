# zustand

React 一个状态管理工具，使用的比较多，用于全局状态管理

Bear necessities for state management in React

State has to be updated immutably and the `set` function [merges state](https://github.com/pmndrs/zustand/blob/main/docs/guides/immutable-state-and-merging.md) to help it.

```javascript
import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

Use the hook anywhere, no providers are needed. Select your state and the component will re-render on changes.

```javascript
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

​
