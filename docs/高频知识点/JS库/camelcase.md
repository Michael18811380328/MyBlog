# camelcase

Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: foo-bar → fooBar

[https://github.com/sindresorhus/camelcase](https://github.com/sindresorhus/camelcase "https://github.com/sindresorhus/camelcase")

把给定的下划线分割字符串，都转换成驼峰命名法字符串

```javascript
import camelCase from 'camelcase';

camelCase('foo-bar');
//=> 'fooBar'

camelCase('foo_bar');
//=> 'fooBar'

camelCase('Foo-Bar');
//=> 'fooBar'
```

​

​
