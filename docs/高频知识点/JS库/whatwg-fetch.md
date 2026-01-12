# whatwg-fetch

兼容旧版本代码

whatwg-fetch 是一个用于在浏览器和 Node.js 中实现 Fetch API 的 polyfill 库。Fetch API 是现代 JavaScript 中用于发起 HTTP 请求的标准接口（替代传统的 XMLHttpRequest），但旧版浏览器（如 IE）不支持该 API，whatwg-fetch 可以在这些环境中模拟实现相同的功能。

### 1. 核心功能

* 提供 fetch() 方法：在不支持原生 Fetch API 的浏览器中添加 window\.fetch。

* Promise 接口：使用 Promise 处理请求和响应，避免回调地狱。

* 浏览器兼容性：支持 IE 10+、Chrome、Firefox 等主流浏览器。

### 2. 基本用法

```
// 引入 polyfill（仅在需要的环境中）
import 'whatwg-fetch';

// 发起请求
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('请求失败:', error));
```

### 3. 安装与使用

#### （1）浏览器环境

```
npm install whatwg-fetch
```

```
<!-- 通过 CDN 引入 -->
<script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@3.6.2/dist/fetch.umd.min.js"></script>
```

#### （2）Node.js 环境（需结合 abort-controller）

```
npm install whatwg-fetch abort-controller
```

```
globalThis.AbortController = require('abort-controller');
require('whatwg-fetch');
```

### 4. 注意事项

* 仅实现基础 Fetch API：不包含 fetch 的所有实验性扩展（如 stream）。

* 兼容性：在现代浏览器中无需引入（除非需要兼容旧版）。

* 依赖处理：在 Node.js 中使用时需额外引入 abort-controller。

### 5. 替代方案

* Axios：功能更全面的 HTTP 客户端，自带 Promise 支持。

* 原生 Fetch API：现代浏览器（如 Chrome 42+、Firefox 39+）已内置。

### 6. 总结

whatwg-fetch 是一个轻量级的 polyfill，用于在不支持原生 Fetch API 的环境中提供一致的请求接口。

如果你需要兼容旧版浏览器或在 Node.js 中使用 Fetch API，可以选择引入它。
