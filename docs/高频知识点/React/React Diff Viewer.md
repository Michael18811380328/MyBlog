# React Diff Viewer

[https://github.com/praneshr/react-diff-viewer#install](https://github.com/praneshr/react-diff-viewer#install "https://github.com/praneshr/react-diff-viewer#install")

[https://praneshravi.in/react-diff-viewer/](https://praneshravi.in/react-diff-viewer/ "https://praneshravi.in/react-diff-viewer/")

一个 diffViewer 组件，1.3K，可以比较多个代码块的差异

未来可以用在文档编辑器中

```javascript
import React, { PureComponent } from 'react';
import ReactDiffViewer from 'react-diff-viewer';

const oldCode = `
const a = 10
`;

const newCode = `
const a = 10
const boo = 10
`;

class Diff extends PureComponent {
  render = () => {
    return (
      <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} />
    );
  };
}
```

配置还支持语法高亮和自定义样式等
