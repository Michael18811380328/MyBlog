# supertest

HTTP assertions made easy via superagent.&#x20;

Super-agent driven library for testing node.js HTTP servers using a fluent API. Maintained for

[https://github.com/ladjs/supertest](https://github.com/ladjs/supertest "https://github.com/ladjs/supertest")

测试框架

```javascript
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
```

​
