# jszip

zip文件压缩编辑解压

在处理文件时，对于大文件或者多个文件上传、下载、编辑，直接使用原文件不方便，最近使用一个可以前端中处理 zip 文件的库，JSzip。

A library for creating, reading and editing .zip files with JavaScript, with a lovely and simple API.

See <https://stuk.github.io/jszip> for all the documentation.

浏览器中使用

```javascript
// 使用ES5引入
var JSZip = require("jszip");
var saveAs = require("file-saver");

// 新建一个zip压缩对象实例
var zip = new JSZip();

// 压缩一个文件
zip.file("Hello.txt", "Hello World\n");

// 压缩一个文件夹，内部包含一个图片
zip.folder("images").file("smile.gif", imgData, { base64: true });

// 异步生成压缩文件
zip.generateAsync({ type: "blob" }).then(function (content) {
  // 保存到本地
  saveAs(content, "example.zip");
});
```

​

```javascript
const zip = new JSZip();

zip.file("Hello.txt", "Hello World\n");

const img = zip.folder("images");
img.file("smile.gif", imgData, {base64: true});

zip.generateAsync({type:"blob"}).then(function(content) {
  // see FileSaver.js
  saveAs(content, "example.zip");
});

/*
    Results in a zip containing
    Hello.txt
    images/
        smile.gif
    */
```

​
