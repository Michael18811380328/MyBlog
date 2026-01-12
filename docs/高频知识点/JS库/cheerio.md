# cheerio

一个为服务器特别定制的，快速、灵活、实施的 jQuery 核心实现

[https://www.npmjs.com/package/cheerio](https://www.npmjs.com/package/cheerio "https://www.npmjs.com/package/cheerio")

[https://github.com/cheeriojs/cheerio](https://github.com/cheeriojs/cheerio "https://github.com/cheeriojs/cheerio")

[https://github.com/cheeriojs/cheerio/wiki/Chinese-README](https://github.com/cheeriojs/cheerio/wiki/Chinese-README "https://github.com/cheeriojs/cheerio/wiki/Chinese-README")

28K stars 周下载量900万，看起来还是很火，已经发布 1.0 版本，很多项目使用

把HTML告诉你的服务器

```javascript
const cheerio = require('cheerio');
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();
//=> <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>
```

jquery 比较重，cheerio实现了核心jQuery的子集。

cheerio会从jQuery库中删除所有DOM矛盾和浏览器的尴尬部分,展示她真正华丽的API。

中文教程：[https://www.cheeriojs.cn/docs/intro](https://www.cheeriojs.cn/docs/intro "https://www.cheeriojs.cn/docs/intro")

目前实际项目不会使用，看起来这个主要用于服务器向客户端返回内容使用，或者服务器转换 HTML 使用。
