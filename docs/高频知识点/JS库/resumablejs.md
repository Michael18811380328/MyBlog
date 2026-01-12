# resumablejs

大文件分块上传下载

Resumable.js 是一个 JavaScript 库，用于实现大文件的断点续传功能，以下是简单介绍

### 主要特点

* 断点续传：上传大文件时若遇网络问题等中断情况，能从上次中断处接着上传，无需从头再来。

* 分块上传：把大文件分成一个个小块分别上传，比如默认每块1MB大小，方便管理和传输。

* 多文件支持：可以同时对多个文件进行上传操作，而且每个文件的上传进度等情况能独立跟踪。

* 兼容性较好：能在常见的现代浏览器（像Chrome、Firefox、Safari、Edge）以及IE10及以上版本浏览器中使用。

### 基本使用

一般先引入Resumable.js库，然后通过配置相关参数，比如文件块大小、并发上传数量等，接着关联上传的目标地址等信息，就能让它开始处理大文件上传工作了，并且它还会触发各种事件，像文件上传进度变化、上传成功、出现错误等，方便开发者根据这些事件做相应处理。

### 适用场景

特别适合在网页端有大文件（如大型视频、音频、压缩包等）上传需求的情况，能提升上传过程的稳定性以及用户体验。&#x20;

### 完整案例

包含前端页面和简单的 Node.js 服务端代码：

#### 1. 前端页面 (index.html)

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Resumable.js 断点续传示例</title>
  <script src="https://cdn.jsdelivr.net/npm/resumablejs@1.1.0/resumable.min.js"></script>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .container { max-width: 600px; margin: 0 auto; }
    .drop-area {
      border: 2px dashed #ccc;
      padding: 30px;
      text-align: center;
      cursor: pointer;
      margin-bottom: 20px;
    }
    .file-list { margin-top: 20px; }
    .file-item { margin-bottom: 10px; padding: 10px; border: 1px solid #eee; }
    .progress-bar { height: 20px; background: #eee; margin-top: 5px; }
    .progress { height: 100%; background: #4CAF50; width: 0%; }
  </style>
</head>
<body>
  <div class="container">
    <h3>Resumable.js 断点续传示例</h3>
    
    <div class="drop-area" id="dropArea">
      <p>点击或拖拽文件到此处上传</p>
      <button id="browseBtn">选择文件</button>
    </div>
    
    <div class="file-list" id="fileList"></div>
  </div>

  <script>
    // 初始化 Resumable.js 实例
    const r = new Resumable({
      target: '/upload', // 服务端上传接口
      chunkSize: 1 * 1024 * 1024, // 1MB 每块
      testChunks: true, // 检查服务器上已存在的块
      throttleProgressCallbacks: 1, // 限制进度回调频率
      query: { folder: 'uploads' } // 传递额外参数
    });

    // 检查浏览器支持
    if (!r.support) {
      document.getElementById('dropArea').innerHTML = 
        '<p>您的浏览器不支持 HTML5 文件上传，请使用现代浏览器！</p>';
    } else {
      // 设置拖拽区域
      r.assignDrop(document.getElementById('dropArea'));
      
      // 设置选择文件按钮
      r.assignBrowse(document.getElementById('browseBtn'));
      
      // 文件添加时创建进度条
      r.on('fileAdded', function(file) {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.id = 'file-' + file.uniqueIdentifier;
        fileItem.innerHTML = `
          <div>${file.fileName} (${formatSize(file.size)})</div>
          <div class="progress-bar">
            <div class="progress" id="progress-${file.uniqueIdentifier}"></div>
          </div>
          <button onclick="r.upload()">开始上传</button>
          <button onclick="r.pauseFile('${file.uniqueIdentifier}')">暂停</button>
          <button onclick="r.removeFile('${file.uniqueIdentifier}')">删除</button>
          <div id="status-${file.uniqueIdentifier}"></div>
        `;
        document.getElementById('fileList').appendChild(fileItem);
        
        // 立即开始上传
        r.upload();
      });
      
      // 文件上传进度更新
      r.on('fileProgress', function(file) {
        const progressEl = document.getElementById(`progress-${file.uniqueIdentifier}`);
        progressEl.style.width = Math.floor(file.progress() * 100) + '%';
        document.getElementById(`status-${file.uniqueIdentifier}`).textContent = 
          `上传中: ${Math.floor(file.progress() * 100)}%`;
      });
      
      // 文件上传成功
      r.on('fileSuccess', function(file, message) {
        document.getElementById(`status-${file.uniqueIdentifier}`).textContent = 
          '上传完成!';
      });
      
      // 文件上传错误
      r.on('fileError', function(file, message) {
        document.getElementById(`status-${file.uniqueIdentifier}`).textContent = 
          `错误: ${message}`;
      });
    }
    
    // 工具函数：格式化文件大小
    function formatSize(bytes) {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
  </script>
</body>
</html>
```

​

#### 2. Node.js 服务端 (server.js)

```javascript
const express = require('express');
const resumable = require('resumable-node');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// 配置上传目录
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// 初始化 Resumable.js 服务端
const r = resumable(uploadDir);

// 处理分块上传请求
app.post('/upload', (req, res) => {
  r.post(req, (status, filename, originalFilename, identifier) => {
    console.log('POST', status, originalFilename, identifier);
    res.send(status);
  });
});

// 检查分块是否已存在
app.get('/upload', (req, res) => {
  r.get(req, (status, filename, originalFilename, identifier) => {
    console.log('GET', status);
    res.send((status === 'found' ? 200 : 404));
  });
});

// 合并文件块
app.get('/merge', (req, res) => {
  const identifier = req.query.identifier;
  const folder = path.join(uploadDir, identifier);
  
  r.write(identifier, (filename) => {
    console.log('合并完成:', filename);
    // 合并后删除临时文件夹
    fs.rmdirSync(folder, { recursive: true });
    res.send('合并成功');
  }, (err) => {
    console.error('合并失败:', err);
    res.status(500).send('合并失败');
  });
});

// 静态文件服务
app.use(express.static(__dirname));

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
```

#### 3. 运行步骤

1. 安装依赖：

   ```
   npm install express resumable-node
   ```

2. 启动服务端：

   ```
   node server.js
   ```

3. 访问页面：
   打开浏览器访问 http\://localhost:3000，即可看到上传界面。

#### 4. 关键功能说明

* 断点续传：自动检测已上传的文件块，支持暂停/恢复。

* 进度显示：实时更新每个文件的上传进度。

* 错误处理：捕获并显示上传过程中的错误。

* 文件合并：服务端自动合并分块文件。

#### 5. 注意事项

* 服务端需安装 resumable-node 处理分块上传。

* 生产环境需添加安全验证和错误处理。

* 大文件上传建议增加超时设置。
