# date-format

nodeJS 日期对象转换成字符串

```javascript
var format = require('date-format');

format.asString(); // defaults to ISO8601 format and current date
format.asString(new Date()); // defaults to ISO8601 format
format.asString('hh:mm:ss.SSS', new Date()); // just the time
format.asString(format.ISO8601_WITH_TZ_OFFSET_FORMAT, new Date()); // in ISO8601 with timezone
```

​
