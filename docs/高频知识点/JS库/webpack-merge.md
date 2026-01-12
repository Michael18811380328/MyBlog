# webpack-merge

webpack-merge - Merge designed for Webpack   &#x20;

[https://github.com/survivejs/webpack-merge](https://github.com/survivejs/webpack-merge "https://github.com/survivejs/webpack-merge")&#x20;

就是把多个 webpack 配置合并到一起（合并对象）

```javascript
const { merge } = require('webpack-merge');

// Default API
const output = merge(object1, object2, object3, ...);



// You can pass an array of objects directly.
// This works with all available functions.
const output = merge([object1, object2, object3]);



// Keys matching to the right take precedence:
const output = merge(
  { fruit: "apple", color: "red" },
  { fruit: "strawberries" }
);


console.log(output);
// { color: "red", fruit: "strawberries"}
```

​
