# @babel/plugin-transform-modules-commonjs

This plugin transforms ES2015 modules to CommonJS

This plugin is included in `@babel/preset-env` under the `modules` option

```text
export default 42;
```

编译成

```text
Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = 42;
```

​
