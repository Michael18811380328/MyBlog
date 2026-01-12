# @testing-library/react

简单而完整的 React DOM 测试实用程序，鼓励良好的测试实践。

[https://www.npmjs.com/package/@testing-library/react](https://www.npmjs.com/package/@testing-library/react "https://www.npmjs.com/package/@testing-library/react")

```text
npm install --save-dev @testing-library/react @testing-library/dom
```

具体案例

React 组件（支持类组件或者函数组件）

```javascript
// hidden-message.js
import * as React from 'react'

// NOTE: React Testing Library works well with React Hooks and classes.
// Your tests will be the same regardless of how you write your components.
function HiddenMessage({children}) {
  const [showMessage, setShowMessage] = React.useState(false)
  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={e => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  )
}

export default HiddenMessage
```

测试案例：先把组件渲染出来，然后测试文本是否满足，点击时间是否满足等

这个适合测试简单 UI 组件，复杂组件和交互比较复杂，而且改动代码后容易经常变化

```javascript
// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import HiddenMessage from '../hidden-message'

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(
    <HiddenMessage>{testMessage}</HiddenMessage>
  )

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(screen.getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})
```

​
