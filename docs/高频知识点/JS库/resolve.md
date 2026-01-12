# resolve

实现节点 require.resolve() 算法，以便您可以异步和同步地代表文件 require.resolve()

```javascript
var resolve = require('resolve/async'); // or, require('resolve')

resolve('tap', { basedir: __dirname }, function (err, res) {
    if (err) console.error(err);
    else console.log(res);
});
```

​
