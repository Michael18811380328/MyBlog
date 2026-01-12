# debug.js

[https://debugjs.net/](https://debugjs.net/ "https://debugjs.net/")

这个实际使用不多，主要用于浏览器调试（主要还需要记住不同的功能如何使用），不如浏览器自带的调试工具方便

debug.js is an embeddable JavaScript debugger for web development. It allows you to debug easily without the F12 Tools. The library has useful features such as logging, DOM element inspector, screen measure, file viewer, command-line, original script interpreter for automated testing, etc.

debug.js 是用于Web开发的嵌入式 JavaScript 调试器。它使您无需F12工具即可轻松调试。

该库具有有用的功能，例如日志记录，DOM元素检查器，屏幕尺寸，文件查看器，命令行，用于自动测试的原始脚本解释器等。

```javascript
import Debug from 'debug';
const debug = Debug('Michale:helloWorld');

debug('helloWorld');
```

​
