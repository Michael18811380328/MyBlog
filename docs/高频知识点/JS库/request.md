# request

废弃 deprecated——Feb 11th 2020, request is fully deprecated

http 网络请求工具

Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

```javascript
const request = require('request');

request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```

​
