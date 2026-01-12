# response-time

HTTP 响应时间 nodejs 和 express 联合使用

Response time header for node.js

node.js的响应时间头

```javascript
var express = require('express')
var responseTime = require('response-time')

var app = express()

app.use(responseTime())

app.get('/', function (req, res) {
  res.send('hello, world!')
})
```

​
