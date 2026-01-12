# is-hotkey

工具库，监听键盘事件，兼容不同操作系统

周下载量80万，广泛使用

[https://www.npmjs.com/package/is-hotkey?activeTab=readme](https://www.npmjs.com/package/is-hotkey?activeTab=readme "https://www.npmjs.com/package/is-hotkey?activeTab=readme")

```javascript
import isHotkey from 'is-hotkey'
 
const isSaveHotkey = isHotkey('mod+s')
 
function onKeyDown(e) {
  if (isSaveHotkey(e)) {
    ...
  }
}
```

​
