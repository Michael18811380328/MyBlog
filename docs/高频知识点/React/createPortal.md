# createPortal

react-dom 提供了 createPortal 这个方法，作用如下：

默认按照 dom 层级渲染组件，createPortal 可以把一个组件渲染到特定的组件下。

实际使用：默认组件渲染到 root 节点，对话框渲染到 modal-protal 节点，插件渲染到 plugins 节点等。

```javascript
import React from 'react';
import { createPortal } from 'react-dom';

class ModalPortal extends React.Component {

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.getElementById('modal-wrapper').appendChild(this.el);
  }

  componentWillUnmount() {
    document.getElementById('modal-wrapper').removeChild(this.el);
  }

  render() {
    return createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default ModalPortal;
```

​
