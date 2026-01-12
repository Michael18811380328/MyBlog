# @testing-library/jest-dom

您想使用 jest 编写测试来断言有关 DOM 状态的各种事情。&#x20;

作为该目标的一部分，您希望避免这样做时出现的所有重复模式。

检查一个元素的属性，它的文本内容，它的 css 类，你可以命名它。    &#x20;

```javascript
// In your own jest-setup.js (or any other name)
import '@testing-library/jest-dom'

// In jest.config.js add (if you haven't already)
setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
```

​
