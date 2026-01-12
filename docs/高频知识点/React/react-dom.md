# react-dom

最新版的 react-dom 分成三部分：react-dom, client, server 分别对应客户端渲染和服务器渲染

最新版本 19.x 项目中使用 18.x 主要版本号

[https://react.dev/reference/react-dom](https://react.dev/reference/react-dom "https://react.dev/reference/react-dom")

> 此包充当React的DOM和服务器呈现器的入口点。它旨在与通用的React包配对，后者作为对npm的反应发布。

浏览器中使用：

[https://react.dev/reference/react-dom/client](https://react.dev/reference/react-dom/client "https://react.dev/reference/react-dom/client")

```javascript
import { createRoot } from 'react-dom/client';

function App() {
  return <div>Hello World</div>;
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

服务器中使用：

[https://react.dev/reference/react-dom/server](https://react.dev/reference/react-dom/server "https://react.dev/reference/react-dom/server")

```javascript
import { renderToPipeableStream } from 'react-dom/server';

function App() {
  return <div>Hello World</div>;
}

function handleRequest(res) {
  // ... in your server handler ...
  const stream = renderToPipeableStream(<App />, {
    onShellReady() {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      stream.pipe(res);
    },
    // ...
  });
}
```

react-dom 和 HTML 元素操作工具
