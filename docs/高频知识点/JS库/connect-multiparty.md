# connect-multiparty

已废弃 2025年停止更新

express 官方出的库

上传文件的中间件

This package has been deprecated

```javascript
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

app.post('/upload', multipartMiddleware, function(req, resp) {
  console.log(req.body, req.files);
  // don't forget to delete all req.files when done
});
```

​
