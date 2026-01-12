# dotenv-expand

Dotenv-expand adds variable expansion on top of dotenv.&#x20;

If you find yourself needing to expand environment variables already existing on your machine, then dotenv-expand is your tool.&#x20;

Dotenv expand 在 Dotenv 的基础上添加了变量扩展。&#x20;

如果你发现自己需要扩展计算机上已有的环境变量，那么dotenv expand就是你的工具。    &#x20;

[https://github.com/motdotla/dotenv-expand](https://github.com/motdotla/dotenv-expand "https://github.com/motdotla/dotenv-expand")

.env 创建环境变量&#x20;

```text
PASSWORD="s1mpl3"
DB_PASS=$PASSWORD
```

读取环境变量

```javascript
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

dotenvExpand.expand(dotenv.config())

console.log(process.env) // remove this after you've confirmed it is expanding
```

​
