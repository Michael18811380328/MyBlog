# react-testing-library

react 测试工具，使用 19k

[react-testing-library](https://github.com/testing-library/react-testing-library)

主要用于镜像测试

```javascript
// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup


import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import HiddenMessage from '../hidden-message'

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(
    <HiddenMessage>
        {testMessage}
    </HiddenMessage>
  )

  expect(screen.queryByText(testMessage)).toBeNull()

  fireEvent.click(screen.getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})
```

