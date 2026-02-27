# CSS笔记 

 2026-2-27

 原始笔记链接：https://cloud.seatable.cn/dtable/external-links/59b453a8639945478de2/

 
## 0052 如何实现一个DIV居中


块级元素三种居中方法

```css
display: flex;
align-itmes: center;
justify-content: center;


position: absolute;
y: 50%
x: 50%;
transform: translate(-50%, -50%);


display: grid
align-itmes: center;
justify-content: center;

```

实现文本居中

```css
height: 20px;
line-height: 20px;
text-align: center;
```

​

   
## 0068 Retina屏幕1像素的问题


**1px 问题**

在一些 `Retina屏幕` 的机型上，移动端页面的 1px 会变得很粗，呈现出不止 1px 的效果。原因很简单——CSS 中的 1px 并不能和移动设备上的 1px 划等号。它们之间的比例关系有一个专门的属性来描述：

window\.devicePixelRatio = 物理像素 / CSS像素

如果这是2，这就意味着设置的 1px CSS 像素，在这个设备上实际会用 2 个物理像素单元来进行渲染，所以实际看到的一定会比 1px 粗一些。

这是 css 兼容性问题

**解决1：伪元素先放大后缩小 transform scale0.5 来解决**

先放大、后缩小：在目标元素的后面追加一个 ::after 伪元素，让这个元素布局为 absolute 之后、整个伸展开铺在目标元素上，然后把它的宽和高都设置为目标元素的两倍，border值设为 1px。接着借助 CSS 动画特效中的放缩能力，把整个伪元素缩小为原来的 50%。此时，伪元素的宽高刚好可以和原有的目标元素对齐，而 border 也缩小为了 1px 的二分之一，间接地实现了 0.5px 的效果。

```css
#container[data-device="2"] {
    position: relative;
}

#container[data-device="2"]::after{
      position:absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      content:"";
      transform: scale(0.5);
      transform-origin: left top;
      box-sizing: border-box;
      border: 1px solid #333;
    }
}

```

**解决2：viewport 缩放来解决**

界面整体改变缩放

```html
<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no"/>

```

这里针对像素比为2的页面，把整个页面缩放为了原来的1/2大小。这样，本来占用2个物理像素的 1px 样式，现在占用的就是标准的一个物理像素。根据像素比的不同，这个缩放比例可以被计算为不同的值，用 js 代码实现如下：

```javascript
const scale = 1 / window.devicePixelRatio;
// 这里 metaEl 指的是 meta 标签对应的 Dom

metaEl.setAttribute('content', `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`);

```

​

   
## 0112 css 中动画有哪些？


1. **渐变（Transition）​**：可以设置元素的样式属性在一定时间内逐渐变化，常用于 hover、点击等效果。

2. **关键帧动画（Keyframes）​**：可以定义一个动画的关键帧，并通过 animation 属性应用到元素上，常用于复杂的动画效果。

3. **动画（Animation）​**：可以定义一个动画的名称、持续时间、迭代次数等属性，并通过 animation 属性应用到元素上。

4. **旋转（Rotate）​**：可以设置元素在 X、Y、Z 轴上的旋转角度，常用于创建 3D 效果。

5. **缩放（Scale）​**：可以设置元素的缩放比例，常用于创建放大、缩小等效果。

6. **移动（Translate）​**：可以设置元素在 X、Y、Z 轴上的移动距离，常用于创建移动、滑动等效果。

7. **倾斜（Skew）​**：可以设置元素在 X、Y 轴上的倾斜角度，常用于创建倾斜、扭曲等效果。

8. **透视（Perspective）​**：可以设置元素的透视效果，常用于创建 3D 效果。

9. **动画延迟（Animation-Delay）​**：可以设置动画的延迟时间，常用于创建延迟动画效果。

10. **动画迭代（Animation-Iteration-Count）​**：可以设置动画的迭代次数，常用于创建循环动画效果。

   
## 0137 css 使用 3D 渲染原理


参考这篇文章：

<https://zhuanlan.zhihu.com/p/404656386?utm_medium=social&utm_oi=27091277971456> 

1、3D 效果的原理：一个复杂的3D效果，是由很多定点和面组成的。首先在三维空间创建很多点，每三个点可以构成一个平面或者曲面。每一个曲面填充特定的颜色或者图案后，构成一个 3D 模型。普通的3D模型有几万个点和面构成。

2、3D 转换成 2D——光栅化：3D模型如果需要显示在屏幕（平面）上，需要算法转换（光栅化）。个人理解原理是，一个3D模型，发光后通过一个光栅，投影到平面上，就是转换后的效果。这个计算不是很复杂，但是点集很多，需要大量计算（所以使用GPU计算）

3、GPU 和 CPU 计算特点：CPU 适合计算复杂的串行计算，GPU 适合计算简单的大量并行计算（渲染视频，渲染3D效果，加密货币计算哈希值等）所以 3D 栅格化算法使用的 GPU 加速实现。

4、浏览器渲染3D，使用 GPU 加速，具体的 CSS 操作：css 中，如果使用 opacity, transform: translate3D 等属性，会自动触发 GPU 渲染（在原来的基础上，渲染一个新的图层，然后图形栅格化，叠加到原始图层上，实现最终效果）

5、CSS 3D 加速的优缺点：优点是减轻CPU的计算压力；缺点是可能多消耗一些内存，数据的传输也消耗一些时间（从内存读取到显卡的时间）

可以使用 will-change 强制硬件加速，参考下面：

<https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change> 

<https://juejin.cn/post/6844904111842787341> 

硬件加速：硬件加速意味着 GPU 会通过代替 CPU 做一些负荷比较大的事情，来协助浏览器快速渲染页面，当CSS操作使用硬件加速的时候，通常会使页面渲染速度加快。



   
## 0145 flex布局


控制内部元素和控制容器，而flex布局对于容器的控制是基于轴这个概念的，而flex中的轴分为：

父元素：主轴、垂直轴、换行轴；主轴指的就是元素排列的方向轴，reverse控制方向

```css
display: flex;
flex-direction: column | row | column-reverse | row-reverse;
justify-content: center | start | end;
align-items: center | start | end | space-between | space-around;
flex-wrap: nowrap|wrap|wrap-reverse; 是否换行
```

子元素

```css
flex: 1 1 auto;
flex-basis: number|auto| 一个长度单位或者一个百分比，规定灵活项目的初始长度
flex-shrink: number 收缩量
```

说明：

flex 伸缩布局；外部是容器，内部是具体的元素。

容器上设置 display:flex，然后主轴和交叉轴分别设置居中 justify-content: center, align-items: center 实现元素的水平垂直居中。也可以设置 left right flex-start flex-end space-between space-around 等值。轴的方向 flex-direction： column | row。

内部子元素，设置 flex: 0 1 auto。这是缩写（flex-grow, flex-shrink, flex-basic）三个值的缩写，分别表示，是否伸长，是否收缩，初始尺寸。默认是不能伸长，可以收缩，初始宽度自动。

   
## 0197 sticky 是什么样式？


sticky 粘性布局

常用在 nav 顶部吸顶操作

1 如果不满足条件，是相对定位 relative

2 如果满足条件，是固定定位 fixed

当界面滚动位置超过 100px 后，设置 div 固定在界面顶部。如果界面滚动位置不超过100px时，设置定位是 relative。当然 CSS 实现更方便。

MDN: 元素根据正常文档流进行定位，然后相对它的\_最近滚动祖先\_（nearest scrolling ancestor）和 containing block（最近块级祖先 nearest block-level ancestor），包括 table-related 元素，基于 `top`、`right`、`bottom` 和 `left` 的值进行偏移。偏移值不会影响任何其他元素的位置。 该值总是创建一个新的层叠上下文（stacking context）。注意，一个 sticky 元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的 `overflow` 是 `hidden`、`scroll`、`auto` 或 `overlay` 时），即便这个祖先不是最近的真实可滚动祖先。这有效地抑制了任何“sticky”行为.

使用 JS 也可以实现。

<https://developer.mozilla.org/zh-CN/docs/Web/CSS/position>

<https://juejin.cn/post/6844903848369192974>

案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    
  </style>
</head>
<body>
  <div class="father">
    <div class="other">这是始终滚动的部分</div>
    <div class="other">这是始终滚动的部分</div>
    <div class="child">这部分吸附在顶部</div>
    <div class="other">这是始终滚动的部分</div>
    <div class="other">这是始终滚动的部分</div>
  </div>
</body>
</html>
```

样式表

```css
/* 外部盒子高度较小，设置可以滚动 */
.father {
    height: 100%;
    overflow: auto;
}

.other,
.child {
    height: 300px;
    width: 300px;
    margin: 0 auto;
    text-align: center;
}

/* 内部的元素按照默认的顺序排列，高度超出外部的盒子，可以上下滚动 */
.other {
    background-color: greenyellow;
}

/* 设置其中一个内部元素 sticky，默认是 relative 相对定位，当滚动到距离顶部 top: 0，然后变成固定定位，吸附在顶部显示 */
.child {
    background-color: aqua;
    /* 关键 */
    position: sticky;
    top: 0px;
}


```

​

   
## 0206 grid 布局


<https://www.runoob.com/cssref/css-pr-grid.html> 

还有个人的博客

<https://michael18811380328.github.io/frontend/site/css/Grid%E5%B8%83%E5%B1%80/> 



   
## 0339 rem 布局是什么


<https://www.runoob.com/w3cnote/px-em-rem-different.html> 

* px是固定的单位长度（像素），一旦设置了就无法随页面的大小而适应改变。
* em是相对长度单位，比px更具灵活性，em的长度是相对于父元素
* rem的长度是相对于根元素，也就是html的字体大小

如果不需要兼容多种分辨率的设备，直接使用 px 固定写法即可。如果兼容多种设备，尺寸都是字体的倍数，那么可以使用 rem 等单位。



   
## 0879 inset: 0; 是什么意思


`inset: 0;` 是一个用于**定位元素**的简写属性

同时设置元素的 `top`（上）、`right`（右）、`bottom`（下）、`left`（左）这四个方位的偏移值

```css
/* 等同于同时设置 top: 0; right: 0; bottom: 0; left: 0; */
inset: 0; 

/* 依次对应 top、right、bottom、left ，即 top: 5px; right: 10px; bottom: 15px; left: 20px; */
inset: 5px 10px 15px 20px; 
```

结合 margin: auto，可以用于设置元素居中显示

```css
.center-box {
  position: absolute;
  inset: 0;
  margin: auto;
}
```

​

   
## 0246 white-space 是什么


white-space 用来处理空格的显示方式，通常用来处理省略号显示，以及多个空格显示问题。

浏览器渲染网页的两个规则：把空格换行符都当做自动换行，会把多个空格渲染成一个空格显示。

* white-space: nowrap; 表示超出的部分不换行，一行内部显示
* white-space: pre-wrap; 正常换行，多个空格保留，不会自动转换成一个空格
* white-space: pre; 多个空格保留，不会自动转换成一个空格; 超出部分不换行

参考链接

<https://www.w3school.com.cn/cssref/pr_text_white-space.asp> 

<https://www.zhangxinxu.com/wordpress/2021/07/css-white-space-nowrap/> 



   
## 0898 Bilibili 模糊虚拟实现效果分析


最近看到 B 站上面首页更新的效果，随着鼠标的移动，界面顶部的 banner 会虚拟化，感觉效果很好，增加了用户的交互。具体的效果如下：

可以使用 CSS 实现 PS 中复杂的效果；然后使用JS获取当前鼠标的位置，动态改变界面效果，达到和用户交互。

详细可以参考官方文档

参考文档：

<https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter>

<https://www.runoob.com/cssref/css3-pr-filter.html>

```css
.blur {
  filter: blur(4px);
}

.brightness {
  filter: brightness(0.30);
}

.contrast {
  filter: contrast(180%);
}

.grayscale {
  filter: grayscale(100%);
}

.huerotate {
  filter: hue-rotate(180deg);
}

.invert {
  filter: invert(100%);
}

.opacity {
  filter: opacity(50%);
}

.saturate {
  filter: saturate(7);
}

.sepia {
  filter: sepia(100%);
}

.shadow {
  filter: drop-shadow(8px 8px 10px green);
}
```

​

   
## 0897 font-smoothing 优化文字抗锯齿


在 css 的 body 里最好加上 font-smoothing 属性，可以使页面上的字体抗锯齿，字体看起来会更清晰舒服，页面清晰。

这个 CSS 直接写在全局通用样式表中，使用一次即可。

MDN：<https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-smooth>

```css
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

​

   
## 0893 CSS 预编译


预编译主要是 less 和 sass 两种语言。

less, 可以本地 npm install less -g 在本地进行编译，可以插入一个 less.js 文件进行编译。

SASS ，可以安装一个 koala 软件进行编译（避免中文路径）。

注意此时的 link 属性中 rel

```html
<link rel="stylesheet/less" href="./css/test.less" />
<script src="./js/less.js"></script>
```

需要在服务器环境下运行，才能正确编译。

编译的实质：通过 JS 获取界面的 DOM， 然后通过正则表达式替换内部的变量，然后删除就页面中的标签，再创建一个新的 css 标签插入界面中。document.createElement(); 这种方法适合于开发环境，实际生产环境中直接插入一个真实的编译后的 CSS 文件，因为编辑过程需要时间。

   
## 0894 不同屏幕分辨率 rem 显示字体


使用 rem 可以实现在不同显示器中，显示适合的字体

页面上根节点 1rem，其他的按照 1.25 rem, 0.75 rem 等进行比例缩放，设置不同层级的文字分级

从设计图到界面实现：一个元素在 UI 图片上的宽度高度比例，和实际上在屏幕上的宽度高度比例相同。屏幕的物理像素可能是 750ppi, 转换成界面像素可能是 375px（屏幕像素比，对应于高清屏幕）。计算比例后（5%），根据不同屏幕像素实际大小，使用 rem 单位 （360 屏幕，1rem = 16px 进行转换）。

```css
@media only screen and (width: 320px) {
  html {
    font-size: 16px;
  }
}

@media only screen and (width: 360px) {
  html {
    font-size: 18px;
  }
}

@media only screen and (width: 375px) {
  html {
    font-size: 18.75px;
  }
}
/* 414px  font-size: 20.75*/
```

​

   
## 0810 SVG 如何避免边缘锯齿


svg 图标较大的情况下边缘平滑，显示较小时候，界面有一些锯齿和模糊。

#### 解决方案

1、UI：制作 svg 时，需要让不同图层或路径，和网格线对齐（可能需要 sketch 和 Adobe Illustrator 导出）

2、前端：更改 svg 渲染模式，在 svg 标签中，加入 shape-rendering 属性

```html
<svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="100"
    height="100"
    shape-rendering="optimizeSpeed 或 crispEdges 或 geometricPrecision"
>
```

#### 具体原因

stackoverflow ：使用 svg 绘制两条线，path 是对应的路径，其中第一条是 1px，边缘显示清晰，第二条显示2px，边缘是虚的。代码中设置的宽度是相同的。原文如下：

> ##### how to handle SVG pixel snapping
>
> I am trying to render two svg lines using path element. The first line has 1px width and it is sharp The second line has 2px width and it is blurred
> The stroke-width is the same for both. How to fix this
>
> ```
> <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
> ```

回答如下

默认情况下，整数坐标映射到像素正方形的交点。 因此，宽度为 1 的水平/垂直线以像素行之间的边界为中心，并延伸到两侧像素的一半。设置了 0.5 的偏移量使线条变得清晰。

修复问题，可以在第二行坐标上添加 0.5，或者使用样式 shape-rendering：crispEdges。 请注意，crisperEdges 可防止抗锯齿，因此水平/垂直线条清晰，但有角度的线条看起来是块状的。

stroke-width=1 也不是有效的 CSS 语法，第一个需要改成 stroke-width: 1

> Mainly it's the 0.5 offset that makes the line sharp. By default, integer coordinates map to the intersections of the pixel squares. So a width-1 horizontal/vertical line is centered on the boundary between pixel rows and extends half way into the pixels on either side.
>
> So to fix the second line either add 0.5 to the co-ordinates or use the style shape-rendering: crispEdges. Note that crispEdges prevents antialiasing so horizonal/vertical lines are crisp but angled lines look blocky.
>
> Also stroke-width=1 is not valid CSS syntax. The first example stroke-width: 1 has it right.

查阅 MDN，svg 渲染模式如下，我也总结了使用场景

* 默认 auto：浏览器自动权衡渲染速度、平滑度、精确度。默认是倾向于精确度，而非平滑度和速度。

* optimizeSpeed：偏向渲染速度，浏览器会关闭反锯齿模式。（速度快，适合界面快速加载，适合低配置）

* crispEdges：偏向更加清晰锐利的边缘的渲染。浏览器在渲染的时候会关闭反锯齿模式，且会让线条的位置和宽度和显示器边缘对齐。（增加锐度，适合棱角分明的图标，例如直线，长方形等）

* geometricPrecision：偏向渲染平滑的曲线。（增加平滑，适合曲线，圆形图标等）

如果一个图标同时有曲线和直线，根据实际效果取舍。

#### 参考资料

* <https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/shape-rendering>

* <https://stackoverflow.com/questions/38618134/svg-is-sharp-and-clear-but-font-is-blurry-even-with-font-smoothing-set-to-none?r=SearchResults>

* <https://stackoverflow.com/questions/19558454/how-to-handle-svg-pixel-snapping?r=SearchResults>

​

   
## 0811 rem em px % 的对比和使用情况


#### 总结

* **px**：适用于需要精确控制元素大小和位置的场景（某个图标图片，精确尺寸，不能变形）。

* **em**：适用于设置与元素字体大小相关的属性，如内边距、外边距等。

* **rem**：适用于整体布局，方便进行全局调整（普通版本 1rem = 14px，关爱版 1rem = 20px）。

* **%​**：适用于响应式布局，使元素的大小随着父元素的大小自动调整。

####  `px`（像素）

* **固定单位**：`px` 是一个固定的长度单位，它代表显示器上的一个物理像素点。在不同的设备和屏幕分辨率下，1px 所代表的实际物理尺寸可能会有所不同，但在同一设备上，它的大小是固定的。

* **精确控制**：使用 `px` 可以精确地控制元素的大小和位置，适合需要精确布局的场景。

####  `%`（百分比）

* **相对父元素**：`%` 是一个相对单位，它的值是相对于其父元素的尺寸。可以用于宽度、高度、内边距、外边距等属性。

* **响应式布局**：使用 `%` 可以实现响应式布局，使元素的大小随着父元素的大小自动调整——例如内部元素宽度始终是外部的 50%。

####  `em`（相对单位）

* **相对父元素**：`em` 是一个相对单位，它的值是相对于其父元素的字体大小。如果父元素的字体大小是 16px，那么 1em 就等于 16px，2em 就等于 32px。

* **可嵌套影响**：由于 `em` 是相对于父元素的，当元素嵌套时，可能会导致尺寸的累积计算，使布局变得复杂。

####  `rem`（相对根元素）

* **相对根元素**：`rem` 也是一个相对单位，但它是相对于根元素（即 `<html>` 元素）的字体大小。无论元素嵌套多深，1rem 始终等于根元素的字体大小。

* **易于控制**：使用 `rem` 可以避免 `em` 在嵌套元素中尺寸累积的问题，使布局更加易于控制。

   
## 0768 tailwind 怎么使用


tailwind 顺风，是一个 UI 框架，类似 reactstrap 部分 css 功能

！！！注意：下面，2025年最新版本是 4.1.11 版本

英文文档：[https://tailwindcss.com/](https://tailwindcss.com/ "https://tailwindcss.com/") 针对不同框架（vite 或者 CDN 提供了不同的安装和编译方式）

中文链接（教程3版本）：[https://www.tailwindcss.cn/docs/installation](https://www.tailwindcss.cn/docs/installation "https://www.tailwindcss.cn/docs/installation")

特点：框架内部预定义了一套 css 类名，程序员可以使用类名操作样式，不需要复杂的组件层级

优点：简单易操作，不需要 webpack 预编译预定义样式，基本的样式就足够美观；

缺点：需要记住具体样式对应的类名；css 简洁了，HTML 中的类名就很长；适合通用样式，不适合具体细节样式（例如设置5px这种）使用 AI 可以很好的写样式

​

   
## 0247 如何实现文本超出显示省略号


使用下面的 css

```
.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

```

overflow: hidden; 表示超出部分隐藏；

text-overflow: ellipsis; 表示文本超出部分，显示省略号；

white-space: nowrap; 段落不换行，一行展示；

这个可以用于文本的内容超出省略号，也能用于 span 元素超出的省略号。如果不显示省略号，看一下父节点的宽度是否合适。如果父节点的宽度大于子节点宽度，那么自然不显示省略号。



   
## 0250 grid 中 gap 怎么使用


gap属性是用来设置网格行与列之间的间隙，该属性是 row-gap() 和 column-gap 的简写形式。

设置网格行与列之间的间隙

使用场景：flex grid 布局中支持，block table 中不支持这个属性。这个属性应该使用在父元素上。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 基本样式 */
    * {
      margin: 0;
      padding: 0;
    }
    .container {
      width: 300px;
      border: 1px solid #ccc;
    }
    .container>div {
      border: 1px solid greenyellow;
    }

    /* grid 布局 */
    .container {
      display: grid;
      gap: 20px;
      grid-template-columns: 50px 50px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</body>
</html>

```

参考

<https://www.runoob.com/cssref/css3-pr-gap.html>﻿

[﻿https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap﻿](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap﻿>) 

<https://developer.mozilla.org/zh-CN/docs/Web/CSS/row-gap> 

<https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap> 



   
## 0320 消除 transition 闪屏


消除 transition 闪屏

```css
.css {
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}

```

过渡动画（在没有启动硬件加速的情况下）会出现抖动的现象， 以上的解决方案只是改变视角来启动硬件加速的一种方式；启动硬件加速的另外一种方式：

```css
.css {
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

```

启动硬件加速最常用的方式：translate3d、translateZ、transform、opacity

属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）

will-change 属性（这个比较偏僻），一般配合opacity与translate使用（而且经测试，除了上述可以引发硬件加速的属性外，其它属性并不会变成复合层）。参考：<https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change> 弊端：硬件加速会导致 CPU 性能占用量过大，电池电量消耗加大 ；因此尽量避免泛滥使用硬件加速。



   
## 0387 打印网页没有颜色怎么处理


CSS属性`print-color-adjust`：设置用户代理可以做什么，以优化该元素在输出设备上的外观。默认情况下，浏览器可以根据输出设备的类型和能力，对元素的外观进行任何必要和审慎的调整。

print-color-adjust: economy; // 经济节省的。表示允许对元素进行它认为适当和谨慎的调整，以便为它被渲染的设备优化输出，在打印时，浏览器可能会选择不使用所有的背景图像，并调整文本颜色，以确保对比度最适合在白纸上阅读，作为默认情况，可能造成无法打印颜色。

print-color-adjust: exact; //准确。该元素的内容是经过特别精心设计的，以重要的方式使用颜色、图像和样式，基本保证原始样式打印。

参考：<https://juejin.cn/post/7244788137410347063> 

```css
@media print{
  *{
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}

```



   
## 0410 background-size 有哪些


background-size 表示背景图片的尺寸：可以使用 px/%/container/cover

* PX 是绝对尺寸

* % 是相对于 div 的尺寸

* container 表示背景铺满 div，但是不够的地方是黑色的，背景图片可以完全显示在 div 上面。

* cover 表示背景铺满 div 并且可能超出，一部分背景图片显示不全。通常使用 cover 属性，适合所有的屏幕。

   
## 0415 sass 和 less 的区别


#### sass

[https://www.sass.hk/guide/](https://www.sass.hk/guide/ "https://www.sass.hk/guide/")

主要在 ui 库中，把 sass 编译成 css 实现

#### less

[https://lesscss.cn/usage/](https://lesscss.cn/usage/ "https://lesscss.cn/usage/")

阅读器项目中，使用了 less 语法，vscode 自动编译成 css 文件进行引入

如果项目需要使用，可以在 loader 中配置 less-loader 进行编译输出

#### 对比功能‌：

Sass‌提供更广泛的功能集，包括通过Partials和imports来组织和重用代码、控制指令（如@if、@for、@each、@while）、内置函数进行颜色操作、字符串操作等‌。‌

LESS‌功能相对简单，支持变量、混合、嵌套规则、运算（如颜色操作），可在样式表中使用函数和运算‌。

#### 社区生态系统‌：

Sass‌拥有庞大且活跃的社区，提供丰富的文档和资源，许多框架和库（如Bootstrap）都是使用Sass构建的‌。‌

LESS‌社区相对较小，尽管有一些支持和社区，但生态系统规模可能较小‌

   
## 0433 常用的动画效果有哪些？


这里有动画效果：[https://enjoycss.com/1npo](https://enjoycss.com/1npo "https://enjoycss.com/1npo")

   
## 0436 如何设置夜间模式


可以直接使用CSS媒体查询 perfers-color-scheme 判断当前用户是否将系统的主体色设置成暗色或者亮色。属性：light dart no-perference 偏好。

```css
@media (perfers-color-scheme: light) {
  body {
    background-color: white;
  }
}
@media (perfers-color-scheme: dark) {
  body {
    background-color: black;
  }
}
@media (perfers-color-scheme: no-perference) {
  body {
    background-color: white;
  }
}
```

也可以使用 JS 进行媒体查询，然后设置全局属性，通过类名更改样式

```javascript
const mode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

if (mode && mode.matches) { 
  document.body.classList.add('dark'); 
}

// 监听主题切换事件 
mode && mode.addEventListener('change', e => { 
  if (e.matches) { 
    document.body.classList.add('dark-bg'); 
  } else { 
    document.body.classList.remove('dark-bg');  
  } 
});
```

有些图标和图片需要根据浅色深色模式调节，此时就需要使用 JS 进行调节

参考：

[https://www.zhihu.com/question/437949548](https://www.zhihu.com/question/437949548 "https://www.zhihu.com/question/437949548")

[https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme "https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme")

[https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia "https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia")

   
## 0483 如何实现显示省略号


<img src="https://cloud.seatable.cn/workspace/32/asset/e82c7317-556e-45c4-8b5d-092331cd8977/images/auto-upload/image-1720493831869.png" alt="undefined" title="undefined" width="627" height="150" />

需求1：如何实现名字很长，1行显示，结尾显示省略号？

```css
.text-ellipsis {
    width: 100px; /* 设置宽度 */
    height: 30px; /* 设置高度 */
    line-height: 30px; /* 设置行高，‌确保文本垂直居中 */
    overflow: hidden; /* 隐藏超出部分 */
    white-space: nowrap; /* 防止换行 */
    text-overflow: ellipsis; /* 显示省略号 */
}
```

需求2：如何实现名字很长，2行显示，结尾显示省略号？

-webkit-line-clamp: 2; 垂直显示2行

```css
.ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word; /* 确保长单词或URL能够正确换行 */
}
```

需求3：如何实现名字很长，中间显示省略号？这里使用 JS 实现效果

```javascript
let text = 'asdfghjkl999999999999999999999999.pdf';
if (text.length > 5) {
    text = text.slice(0, 5) + '...' + text.slice(-5); // 截断字符串，中间添加省略号
}
// 'asdfg...9.pdf'
```

需求4：如何实现文件含有标签，名字较长时，中间显示省略号？

容器总宽度= 文件标签宽度 + 文件名宽度

文件名 = 文件名前半部分 + 省略号 + 文件名后半部分

css 设置显示两行

```css
.container {
  display: inline-block;
  max-width: 100%;
  /* 这里 N 行文本的高度 */
  height: 34px;
}

.tags {
    display: inline-block;
}

.file-name {
  display: inline-block;
  -webkit-box-orient: vertical; /* 内部纵向排列 */
  word-wrap: break-word;
}
```

JS 计算省略号的位置和新名称

```javascript
// 给定文件名和字体字号，计算实际显示的宽度（计算文件名实际的长度，大量使用存在性能问题）  
getTextRenderWidth = (text, font) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font || '14px Arial';
    const metrics = context.measureText(text);
    return metrics.width;
  };

// 给定文件名，计算渲染后的文件名
// 例如：格点模式下文字应该占据两行方案.txt，返回 格点模式下文字...方案.txt
  getRenderedText = (dirent) => {
    // 这里获取容器的宽度 * 2，如果是N行文本，那么就是宽度 * N
    const containerWidth = 230;
    
    // 计算文件标签占用的宽度（每一个是 16px, 左右之间重叠 8px）
    let tagRenderWidth = 0;
    if (dirent.file_tags && dirent.file_tags.length > 0) {
      if (dirent.file_tags.length === 1) {
        tagRenderWidth = 16;
      } else {
        tagRenderWidth = 16 + (dirent.file_tags.length - 1) * 8;
      }
    }
    
    // 计算实际文件名的最大宽度 = 容器宽度 - 标签宽度
    let remainWidth = containerWidth - tagRenderWidth;

    // 计算文件名全部渲染后的长度
    let nameRenderWidth = this.getTextRenderWidth(dirent.name);
    let showName = '';
    
    // 如果文件名实际渲染后的长度，大于容器宽度，那么显示省略号
    if (nameRenderWidth > remainWidth) {
      
      // 需求是：省略号位于中间（后面有两个文字+文件后缀），那么可以计算文件后缀的位置，然后计算后面的名字，和前面的名字
      let dotIndex = dirent.name.lastIndexOf('.');
      let frontName = dirent.name.slice(0, dotIndex - 2);
      let backName = dirent.name.slice(dotIndex - 2);
        
      // 后面的名称是文件后缀名，通常是 2-5个英文，.c .cpp .xmind 很少出现特别长的文件名，所以这里完全显示（不考虑自定义的极端后缀名）

      // 计算后缀前面显示几个字符，如果是英文宽度是1，中文宽度是2，那么这里要求最后的英文数量不超过20，中文数量不超过10，这是经验值
      //（理论上可以循环中计算每一个子字符串的渲染后的长度，但是性能不好）
      let sum = 0;
      for (let i = 0; i < frontName.length; i++) {
        // Use charCodeAt(i) > 127 to check Chinese and English.
        // English and symbols occupy 1 position, Chinese and others occupy 2 positions.
        frontName.charCodeAt(i) > 127 ? (sum = sum + 2 ) : (sum = sum + 1);
        // When sum position exceeds 20, back string will not be displayed.
        if (sum > 20) {
          frontName = frontName.slice(0, i) + '...';
          break;
        }
      }
      // 最后就是 前10个汉字（或者前20个字母）+ 省略号 + 后两个字符 + 文件后缀名
      showName = frontName + backName;
    } else {
      showName = dirent.name;
    }
    return showName;
  };
```

​

   
## 0759 script 属性 integrity 作用


integrity属性：设置 cdn 引入 js 文件的 hash 值，浏览器在下载js文件时候，会对js文件进行hash计算，如果一致则正常加载，否则拒绝加载运行（避免远程的 CDN 被篡改造成安全问题）。

```html
<script
src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
crossorigin="anonymous">
</script>
```

[https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource\_Integrity](https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity "https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity")

[https://www.w3school.com.cn/tags/att\_script\_integrity.asp](https://www.w3school.com.cn/tags/att_script_integrity.asp "https://www.w3school.com.cn/tags/att_script_integrity.asp")

  