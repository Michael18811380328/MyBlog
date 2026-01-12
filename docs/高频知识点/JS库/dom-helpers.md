# dom-helpers

兼容 ie9 的 DOM 操作方法

早期代码

```javascript
if (document.addEventListener)
  return (node, eventName, handler, capture) =>
    node.addEventListener(eventName, handler, capture || false)
else if (document.attachEvent)
  return (node, eventName, handler) =>
    node.attachEvent('on' + eventName, handler)
```

改进后代码

```javascript
var helpers = require('dom-helpers')
var offset = require('dom-helpers/offset')

// style is a function
require('dom-helpers/css')(node, { width: '40px' })
```

主要使用浏览器兼容性，实际使用不多
