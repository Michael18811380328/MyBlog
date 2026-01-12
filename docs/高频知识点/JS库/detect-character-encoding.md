# detect-character-encoding

Detect character encoding using ICU

使用 ICU 检测字符编码，检测不同类型的 txt 文件是什么类型编码（然后使用对应的解析器解析）

```javascript
const fs = require('fs');
const detectCharacterEncoding = require('detect-character-encoding');

const fileBuffer = fs.readFileSync('file.txt');
const charsetMatch = detectCharacterEncoding(fileBuffer);

console.log(charsetMatch);
// {
//   encoding: 'UTF-8',
//   confidence: 60
// }
```

​
