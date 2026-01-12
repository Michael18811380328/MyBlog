# @babel/plugin-transform-runtime

Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals

将对辅助函数和内置函数的引用外部化，在不污染全局变量的情况下自动填充代码

```javascript
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
}   
```

​
