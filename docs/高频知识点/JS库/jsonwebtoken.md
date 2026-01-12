# jsonwebtoken

服务端 JWT 登录验证，用于数字签名和 token 验证

1、默认创建 token (HMAC SHA256 算法)

```javascript
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
```

2、本地私钥验证（RS256加密算法）

```javascript
// sign with RSA SHA256
var privateKey = fs.readFileSync('private.key');
var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });
```

3、异步创建

```javascript
jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
  console.log(token);
});
```

​
