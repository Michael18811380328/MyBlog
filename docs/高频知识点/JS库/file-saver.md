# file-saver

用于文件保存

[https://www.npmjs.com/package/file-saver](https://www.npmjs.com/package/file-saver "https://www.npmjs.com/package/file-saver")

```javascript
var FileSaver = require('file-saver');

// 把文本保存成文件
var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(blob, "hello world.txt");

// 把 URL 另存为图片
FileSaver.saveAs("https://httpbin.org/image", "image.jpg");

// 把 canvas 保存成图片
var canvas = document.getElementById("my-canvas");
canvas.toBlob(function(blob) {
    saveAs(blob, "pretty image.png");
});
```

​
