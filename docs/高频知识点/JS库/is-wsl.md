# is-wsl

如果您需要解决 WSL 中未实现或有问题的功能，这会很有用。 支持 WSL 1 和 WSL 2

<https://www.npmjs.com/package/is-wsl>

#### version

3.1.0 &#x20;

#### downloads

38,383,822&#x20;

#### repository

github.com/sindresorhus/is-wsl&#x20;

#### homepage

github.com/sindresorhus/is-wsl#readme&#x20;

Check if the process is running inside Windows Subsystem for Linux (Bash on Windows)

Can be useful if you need to work around unimplemented or buggy features in WSL. Supports both WSL 1 and WSL 2.

```javascript
import isWsl from 'is-wsl';

// When running inside Windows Subsystem for Linux
console.log(isWsl);
//=> true
```

​
