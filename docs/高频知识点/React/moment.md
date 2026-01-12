# moment

功能：日期时间处理库，用于 JS 时间对象和字符串的转换

> Parse, validate, manipulate, and display dates and times in JavaScript.

优点：JS 中最经典的时间处理工具

不足：考虑了各种时间本地化情况，代码量比较多（dayjs 取代）

现在已经出现了 moment.min.js 和 moment 全部语言的库，适合最小安装和支持各种语言的全部安装。

[https://github.com/moment/moment/](https://github.com/moment/moment/ "https://github.com/moment/moment/")

[https://momentjs.com/](https://momentjs.com/ "https://momentjs.com/")

格式化时间对象

```javascript
moment().format('MMMM Do YYYY, h:mm:ss a');
moment().format('dddd');
moment().format("MMM Do YY");
moment().format('YYYY [escaped] YYYY');
moment().format();
```

计算时间差值

```javascript
moment("20111031", "YYYYMMDD").fromNow();
moment("20120620", "YYYYMMDD").fromNow();
moment().startOf('day').fromNow();
moment().endOf('day').fromNow();
moment().startOf('hour').fromNow();
```

​
