# promise

文件上传异步转换成同步操作

[https://www.npmjs.com/package/promise](https://www.npmjs.com/package/promise "https://www.npmjs.com/package/promise")

[https://github.com/then/promise](https://github.com/then/promise "https://github.com/then/promise")

```javascript
var Promise = require('promise');

var promise = new Promise(function (resolve, reject) {
  get('http://www.google.com', function (err, res) {
    if (err) reject(err);
    else resolve(res);
  });
});
```

这是Promises的一个简单实现。它是一组超级ES6 Promise，旨在提供可读、高性能的代码，并仅提供当今使用promise绝对必要的扩展。
