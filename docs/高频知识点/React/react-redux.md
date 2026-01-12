# react-redux

状态管理工具 redux 的 React 封装

Official React bindings for [Redux](https://github.com/reduxjs/redux). Performant and flexible.

[https://www.npmjs.com/package/react-redux](https://www.npmjs.com/package/react-redux "https://www.npmjs.com/package/react-redux")

[https://github.com/reduxjs/react-redux](https://github.com/reduxjs/react-redux "https://github.com/reduxjs/react-redux")

根节点，增加 Provider&#x20;

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```

内部组件

```javascript
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}
```

​
