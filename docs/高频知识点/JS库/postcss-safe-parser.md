# postcss-safe-parser

PostCSS 的容错 CSS 解析器，它将发现和修复语法错误，能够解析任何输入。&#x20;

```javascript
const safe = require('postcss-safe-parser')

const badCss = 'a {'

postcss(plugins).process(badCss, { parser: safe }).then(result => {
  result.css //= 'a {}'
})    
```

​
