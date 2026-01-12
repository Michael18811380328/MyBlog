# @babel/plugin-transform-property-literals

Ensure that reserved words are quoted in object property keys

This plugin is included in `@babel/preset-env`&#x20;

```javascript
var foo = {
  // changed
  const: function() {},
  var: function() {},

  // not changed
  "default": 1,
  [a]: 2,
  foo: 1,
};
```

转换后

```javascript
var foo = {
  "const": function() {},
  "var": function() {},

  "default": 1,
  [a]: 2,
  foo: 1,
};
```

​
