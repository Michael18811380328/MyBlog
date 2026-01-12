# @babel/plugin-proposal-class-properties

This plugin is included in `@babel/preset-env`, in [ES2022](https://github.com/tc39/proposals/blob/master/finished-proposals.md)

Below is a class with four class properties which will be transformed.

```javascript
class Bork {
  //Property initializer syntax
  instanceProperty = "bork";
  boundFunction = () => {
    return this.instanceProperty;
  };

  //Static class properties
  static staticProperty = "babelIsCool";
  static staticFunction = function() {
    return Bork.staticProperty;
  };
}
```

​
