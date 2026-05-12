# svg笔记 

 2026-5-10

 原始笔记链接：https://cloud.seatable.cn/dtable/external-links/59b453a8639945478de2/

 
## 0830 svg 是什么


SVG（可缩放矢量图形）是一种基于 XML 语法的图像格式，在网页设计、图标制作等领域应用广泛。

特点：可缩放，不会因为缩放比例变形。

实际案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background-color: #f0f0f0;
    }
    svg {
      margin: 60px 120px;
      border: 1px solid #000;
    }
  </style>
</head>
<body>
  <svg width="1200" height="700" viewBox="0 0 1200 700">
    <!-- 1-3道 -->
    <line x1="100" y1="400" x2="1000" y2="400" stroke="black" stroke-width="2" />
    <line x1="0" y1="350" x2="1200" y2="350" stroke="black" stroke-width="2" />
    <line x1="100" y1="300" x2="1100" y2="300" stroke="black" stroke-width="2" />
    <!-- 4-6道 -->
    <line x1="150" y1="250" x2="1050" y2="250" stroke="black" stroke-width="2" />
    <line x1="150" y1="450" x2="500" y2="450" stroke="black" stroke-width="2" />
    <line x1="200" y1="500" x2="400" y2="500" stroke="black" stroke-width="2" />
    <!-- 岔 -->
    <line x1="50" y1="350" x2="150" y2="250" stroke="black" stroke-width="2" />
    <line x1="50" y1="350" x2="200" y2="500" stroke="black" stroke-width="2" />
    <line x1="1050" y1="250" x2="1150" y2="350" stroke="black" stroke-width="2" />
    <line x1="1000" y1="400" x2="1050" y2="350" stroke="black" stroke-width="2" />
    <line x1="500" y1="450" x2="550" y2="400" stroke="black" stroke-width="2" />
    <!-- 信号 -->
    <g transform="translate(1160, 340)">
      <circle cx="0" cy="0" r="5" fill="red" />
      <circle cx="10" cy="0" r="5" fill="green" />
      <circle cx="20" cy="0" r="5" fill="blue" />
    </g>
    <g transform="translate(20, 340)">
      <circle cx="0" cy="0" r="5" fill="red" />
      <circle cx="10" cy="0" r="5" fill="green" />
      <circle cx="20" cy="0" r="5" fill="blue" />
    </g>
    <!-- 站台 -->
    <rect x="600" y="420" width="300" height="30" rx="10" stroke="black" fill="white"></rect>
    <text x="700" y="445" font-family="Arial" font-size="20" fill="black">Hello, SVG</text>
  </svg>
</body>
</html>
```

​

   
## 0831 svg 标签


svg 它是 SVG 文档的根标签，用来定义一个 SVG 图像区域。可以在其中嵌套其他 SVG 元素，还能设置 SVG 图像的宽度、高度、 viewBox 等属性

```html
<svg width="200" height="200" viewBox="0 0 100 100">
    <!-- 其他 SVG 元素 -->
</svg>
```

`viewBox` 属性是一个非常关键的属性，它主要用于定义 SVG 图形的坐标系统以及缩放和裁剪方式。

`viewBox` 属性的值是一个包含四个数字的列表，格式为 `min-x min-y width height`，各参数含义如下：

* `min-x`：定义了 viewBox 左上角的 X 坐标。

* `min-y`：定义了 viewBox 左上角的 Y 坐标。

* `width`：定义了 viewBox 的宽度。

* `height`：定义了 viewBox 的高度。

viewBox="0 0 100 100" 构建了一个从 `(0, 0)` 开始，宽高均为 100 的虚拟画布（类似视口尺寸）

   
## 0833 text 标签


设置文本的内容、位置、字体、大小、颜色

```html
<text x="50" y="50" font-family="Arial" font-size="20" fill="black">Hello, SVG!</text>
```

​

   
## 0832 svg 常用图形标签


#### rect 矩形

```html
<rect x="10" y="10" width="80" height="80" rx="10" ry="10" fill="blue" />
```

#### circle 圆形

```html
<circle cx="50" cy="50" r="40" fill="red" stroke="black" stroke-width="2" />
```

#### ellipse 椭圆

绘制椭圆。通过 cx 和 cy 属性指定椭圆中心位置，rx 和 ry 属性分别指定椭圆的水平和垂直半径。

```html
<ellipse cx="50" cy="50" rx="30" ry="20" fill="green" />
```

#### line 直线

```html
<line x1="10" y1="10" x2="90" y2="90" stroke="black" stroke-width="2" />
```

#### polyline 折线

通过 points 属性指定一系列的点，SVG 会按顺序连接这些点形成折线。

```html
<polyline points="10,10 20,20 30,10 40,20" stroke="black" stroke-width="2" fill="none" />
```

#### polygon 多边形

```html
<polygon points="10,10 20,20 30,10" fill="yellow" stroke="black" stroke-width="2" />
```

​

   
## 0828 path 标签


path 路径，可以定义一个复杂的 svg 标签，可以绘制直线或者曲线，然后组合成各种复杂图形。

原理：类似贝塞尔曲线，给定一个开始节点和角度，就可以绘制直线或者曲线。

\<path> 标签主要通过 d 属性来定义图形的路径，d 属性的值是一个由一系列命令和参数组成的字符串。常见的命令如下：

* M（Move to）：移动画笔到指定的坐标位置，不绘制线条。例如 M 10 20 表示将画笔移动到坐标 (10, 20) 处。

* L（Line to）：从当前位置绘制一条直线到指定的坐标位置。例如 L 30 40 表示从当前位置绘制一条直线到坐标 (30, 40) 处。

* C（Cubic Bezier curve）：绘制三次贝塞尔曲线。需要指定两个控制点和一个终点的坐标。

* Z（Close path）：闭合路径，即从当前位置绘制一条直线回到路径的起点。

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="orange" stroke="black" stroke-width="2"  />
</svg>
```

绘制了一个正方形。

d 属性的值描述了路径的绘制过程：首先将画笔移动到 (10, 10) 点，然后依次绘制直线到 (90, 10)、(90, 90) 和 (10, 90) 点，最后闭合路径形成一个正方形。

​

   
## 0829 use 标签


use 使用，表示使用已有 svg 进行组合，用于复用已经定义好的 SVG 元素（path, rect, circle）

#### 属性

* xlink:href：指定要复用的 SVG 元素的引用，通常是一个 SVG 元素的 id。在 SVG 2.0 后，也可以直接使用 href 属性。

* x 和 y：指定复用元素在 SVG 坐标系中的偏移位置。

* width 和 height：指定复用元素的宽度和高度。

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100">
    <path id="myPath" d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="blue" />
    <use href="#myPath" x="110" y="0" />
</svg>
```

首先定义了一个 \<path> 元素并为其设置了 id 为 myPath，

然后使用 \<use> 标签引用这个 myPath 元素，并将其复制到 x 坐标为 110、y 坐标为 0 的位置。

这样就实现了\<use> 对 \<path> 元素的复用。

​

   
## 0892 id 冲突问题


svg 早期的版本中，可能内部有 id 和对应的元素。如果多个 svg 存在相同的 ID，就可能造成页面中某些 svg 显示不正常。

解决方案：使用 path 转换一下旧版 svg，避免使用 id 进行绘图（进行多个路径组合）。

   
## 0834 g 标签


用于对 SVG 元素进行分组。可以将多个元素组合在一起，方便对它们进行统一的变换（如平移、旋转、缩放等）或样式设置，或者复用。

```html
<g transform="translate(20, 20)">
    <circle cx="0" cy="0" r="10" fill="purple" />
    <rect x="-10" y="-10" width="20" height="20" fill="pink" />
</g>
```

​

   
## 0835 defs 标签


用于定义可复用的 SVG 元素，如渐变、图案、符号等。定义在 \<defs> 中的元素不会直接显示，而是可以在其他地方引用。

```html
<defs>
    <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="red" />
        <stop offset="100%" stop-color="blue" />
    </linearGradient>
</defs>

<rect x="10" y="10" width="80" height="80" fill="url(#myGradient)" />
```

​

   
## 0836 svg 如何创建动画效果


简单动画，直接使用内部动画标签；复杂动画，使用 js 改变属性渲染

简单动画

1、蓝色矩形，借助 `<animate>` 标签让矩形的 `x` 属性在 2 秒内从 50 变为 150，并且无限循环

```html
<svg width="200" height="200" viewBox="0 0 200 200">
    <rect x="50" y="50" width="50" height="50" fill="blue">
        <animate attributeName="x" from="50" to="150" dur="2s" repeatCount="indefinite" />
    </rect>
</svg>
```

2、红色圆形会以圆心 `(100, 100)` 为中心，在 3 秒内完成 360 度的旋转，并且无限循环。

```html
<svg width="200" height="200" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="20" fill="red">
        <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="3s"
            repeatCount="indefinite"
        />
    </circle>
</svg>
```

3、将填充颜色从红色变为蓝色，并且无限循环。

```html
<svg width="200" height="200" viewBox="0 0 200 200">
    <rect x="50" y="50" width="50" height="50" fill="red">
        <animateColor
            attributeName="fill"
            from="red"
            to="blue"
            dur="2s"
            repeatCount="indefinite"
        />
    </rect>
</svg>
```

复杂动画，使用JS（不断改变矩形的 `x` 属性，让矩形在水平方向上移动）

```html
<svg id="mySvg" width="200" height="200" viewBox="0 0 200 200">
    <rect id="myRect" x="50" y="50" width="50" height="50" fill="green" />
</svg>

<script>
    const rect = document.getElementById('myRect');
    let x = 50;
    function animate() {
        x += 1;
        rect.setAttribute('x', x);
        if (x < 150) {
            requestAnimationFrame(animate);
        }
    }
    animate();
</script>
```

​

  