# url-parse

Url 对象转换工具

url-parse 是一个轻量级的 JavaScript 库，用于解析和操作 URL 字符串。它将 URL 分解为各个组成部分（协议、主机、路径、查询参数等），并提供方法修改这些部分，兼容浏览器和 Node.js 环境。

### 1. 核心功能

* 解析 URL：将 URL 字符串分解为结构化对象。

* 修改 URL：支持修改协议、主机、路径等部分。

* 处理查询参数：自动解析和序列化查询字符串（如 ?a=1\&b=2）。

* 相对路径解析：支持基于基准 URL 解析相对路径。

### 2. 基本用法

```javascript
const parse = require('url-parse');

// 解析 URL
const url = parse('https://example.com/path?query=1#hash');

console.log(url.protocol); // 'https:'
console.log(url.hostname); // 'example.com'
console.log(url.pathname); // '/path'
console.log(url.query);    // '?query=1' (原始字符串)
console.log(url.hash);     // '#hash'

// 修改 URL
url.set('hostname', 'new.example.com');
url.set('query', { page: 2, filter: 'active' });
console.log(url.toString()); // 'https://new.example.com/path?page=2&filter=active#hash'
```

### 3. 主要 API

* parse(url, \[parseQueryString], \[slashesDenoteHost])：

  * parseQueryString：是否解析查询参数为对象（默认 false）。

  * slashesDenoteHost：是否将 // 后的内容视为主机（默认 true）。

* 属性：protocol、hostname、port、pathname、query、hash、auth 等。

* 方法：

  * set(component, value)：修改 URL 组件。

  * toString()：序列化回 URL 字符串。

### 4. 与原生 API 的对比

| 功能     | url-parse    | 原生 URL 对象             |
| ------ | ------------ | --------------------- |
| 浏览器兼容性 | IE 10+       | IE 不支持，现代浏览器支持        |
| 查询参数解析 | 自动解析为对象      | 需手动使用 URLSearchParams |
| 相对路径解析 | 支持（通过基准 URL） | 需手动拼接                 |
| 修改 URL | 提供便捷的 set 方法 | 直接修改属性                |

### 5. 安装与使用

```
npm install url-parse
```

```javascript
// Node.js
const parse = require('url-parse');

// 浏览器（通过 CDN）
<script src="https://cdn.jsdelivr.net/npm/url-parse@1.5.10/dist/url-parse.min.js"></script>
```

### 6. 适用场景

* 前端开发：处理 URL 参数、构建动态链接。

* 服务端开发：解析请求 URL、生成重定向地址。

* 工具库：需要解析和操作 URL 的基础库。

### 7. 注意事项

* 兼容性：若需支持 IE，推荐使用 url-parse（原生 URL 对象不支持）。

* 查询参数：解析为对象时需注意参数名冲突（如 ?a=1\&a=2）。

### 8. 替代方案

* Node.js 内置：require('url').parse（仅 Node.js）。

* 原生 URL 对象：现代浏览器支持（无 IE）。

* query-string 库：专注于查询参数解析。

​
