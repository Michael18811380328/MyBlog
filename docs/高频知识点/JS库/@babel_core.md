# @babel/core

babel 核心代码（编译es6）

Babel is a compiler for writing next generation JavaScript.

Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.

[https://github.com/babel/babel](https://github.com/babel/babel "https://github.com/babel/babel")

```javascript
// ES2020 nullish coalescing
function greet(input) {
  return input ?? "Hello world";
}
```

会编译成

```javascript
function greet(input) {
  return input != null ? input : "Hello world";
}
```

​
