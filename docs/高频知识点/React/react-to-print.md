# react-to-print

[react-to-print](https://github.com/MatthewHerbst/react-to-print)

Print React components in the browser.

```javascript
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

// 定义要打印的组件
const ComponentToPrint = () => {
    return (
        <div>
            <h1>这是要打印的内容</h1>
            <p>这里可以包含更多详细信息。</p>
        </div>
    );
};

const PrintButton = () => {
    const componentRef = useRef();
    return (
        <div>
            {/* 渲染要打印的组件 */}
            <ComponentToPrint ref={componentRef} />
            {/* 创建打印按钮 */}
            <ReactToPrint
                trigger={() => <button>打印此内容</button>}
                content={() => componentRef.current}
            />
        </div>
    );
};

export default PrintButton;
```

​
