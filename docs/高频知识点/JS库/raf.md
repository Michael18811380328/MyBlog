# raf

requestAnimationFrame 的 polyfill（简化操作，处理浏览器兼容性）

```javascript
const raf = require('raf')

function callback() {
  // animation function
}

var handle = raf(callback);
handle();
raf.cancel(handle);

```

​
