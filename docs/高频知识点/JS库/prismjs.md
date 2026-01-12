# prismjs

PrismJS 是一个轻量级、高性能的代码语法高亮 JavaScript 库，专为现代 web 设计。

它通过简单的标记为各种编程语言的代码块提供美观的高亮显示，支持自定义主题、插件扩展，并具有良好的浏览器兼容性。

### 1. GitHub 链接

* 仓库：<https://github.com/PrismJS/prism>

* 官方网站：<https://prismjs.com/>

### 2. 主要功能

#### （1）多语言支持

* 内置支持超过 100 种编程语言（JavaScript、Python、Java、HTML、CSS 等）。

* 示例：

  ```
  <pre><code class="language-javascript">
  const greeting = "Hello, World!";
  console.log(greeting);
  </code></pre>
  ```

#### （2）主题系统

* 提供多种内置主题（如 Okaidia、Tomorrow Night、Solarized）。

* 支持自定义 CSS 主题扩展。

#### （3）插件扩展

* 行号（Line Numbers）：为代码添加行号。

* 高亮特定行（Line Highlight）：突出显示指定行。

* 复制到剪贴板（Copy to Clipboard）：添加复制按钮。

* 自动加载语言（Autoloader）：按需加载语言语法文件。

#### （4）性能优化

* 基于令牌（token）的解析器，高效处理大型代码块。

* 支持懒加载未使用的语言语法。

#### （5）可访问性

* 生成语义化 HTML 结构，支持键盘导航。

* 高对比度颜色方案，符合 WCAG 标准。

### 3. 使用案例

#### （1）技术博客/文档

* 在博客文章中高亮代码示例：

  ```
  <pre><code class="language-python">
  def fibonacci(n):
      a, b = 0, 1
      for _ in range(n):
          yield a
          a, b = b, a + b
  </code></pre>
  ```

#### （2）代码编辑器预览

* 在在线代码编辑器中实时显示语法高亮。

#### （3）学习平台

* 在编程教学网站中展示示例代码。

### 4. 快速上手

#### （1）引入 PrismJS

```
<head>
  <!-- 引入 CSS 主题 -->
  <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
  <!-- 引入核心 JS -->
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
  <!-- 可选：引入语言扩展（如 Python） -->
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-python.min.js"></script>
</head>
<body>
  <pre><code class="language-javascript">
  // 代码内容
  </code></pre>
</body>
```

#### （2）使用插件

* 添加行号：

  ```
  <pre class="line-numbers"><code class="language-css">
  .selector {
      color: #333;
  }
  </code></pre>
  ```

  需额外引入插件 CSS 和 JS：

  ```
  <link href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
  ```

### 5. 自定义配置

#### （1）创建自定义构建

* 通过 PrismJS 下载页面 选择需要的语言和插件，生成最小化版本。

#### （2）扩展语法

* 添加自定义语言规则：

  ```
  Prism.languages.my-custom-language = {
      'comment': /\/\/.*/,
      'string': /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      'keyword': /\b(if|else|function|return)\b/
  };
  ```

### 6. 注意事项

#### （1）性能考虑

* 避免在大型页面中加载所有语言语法，可使用懒加载插件。

#### （2）动态内容

* 对于动态加载的代码块，需手动调用 Prism.highlightAll() 触发高亮。

#### （3）浏览器兼容性

* 支持现代浏览器（Chrome、Firefox、Safari、Edge）及 IE 10+。

### 7. 替代方案

* highlight.js：更全面的语言支持，自动检测语言。

* Shiki：基于 VS Code 语法高亮引擎，支持深色/浅色主题切换。

* CodeMirror：功能强大的代码编辑器，包含语法高亮功能。

### 8. 总结

PrismJS 是一个轻量级、美观且易于集成的代码高亮库，适合需要展示代码示例的网站和应用。其丰富的插件生态和简洁的 API 使其成为开发者的首选，但在处理大量动态内容或复杂语言时，可能需要考虑性能优化或其他替代方案。
