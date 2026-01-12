# vfile

解析序列化转换数据

Virtual file format for text processing used in [@unifiedjs](https://github.com/unifiedjs)

```javascript
import {VFile} from 'vfile'

const file = new VFile({
  path: '~/example.txt',
  value: 'Alpha *braavo* charlie.'
})

console.log(file.path) // => '~/example.txt'
console.log(file.dirname) // => '~'

file.extname = '.md'

console.log(file.basename) // => 'example.md'

file.basename = 'index.text'

console.log(file.history) // => ['~/example.txt', '~/example.md', '~/index.text']

file.message('Unexpected unknown word `braavo`, did you mean `bravo`?', {
  place: {line: 1, column: 8},
  source: 'spell',
  ruleId: 'typo'
})

console.log(file.messages)
```

​
