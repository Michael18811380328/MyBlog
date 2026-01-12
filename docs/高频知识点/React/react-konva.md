# react-konva

react+canvas 绘图工具

```text
npm install react-konva konva --save
```

使用：在 react-demos 中有介绍

[https://www.npmjs.com/package/react-konva](https://www.npmjs.com/package/react-konva "https://www.npmjs.com/package/react-konva")

[https://github.com/konvajs/react-konva](https://github.com/konvajs/react-konva "https://github.com/konvajs/react-konva")

```javascript
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

const ColoredRect = () => {
  const [color, setColor] = useState('green');

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor());
  };

  return (
    <Rect
      x={20}
      y={20}
      width={50}
      height={50}
      fill={color}
      shadowBlur={5}
      onClick={handleClick}
    />
  );
};

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Try click on rect" />
        <ColoredRect />
      </Layer>
    </Stage>
  );
};

render(<App />, document.getElementById('root'));
```

​
