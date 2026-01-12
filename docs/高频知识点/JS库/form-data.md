# form-data

A library to create readable "multipart/form-data" streams.&#x20;

Can be used to submit forms and file uploads to other web applications.

<https://www.npmjs.com/package/form-data>

发送网络请求时，使用 multipart/form-data 请求体

```javascript
var FormData = require('form-data');
var fs = require('fs');

var form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));
```

​
