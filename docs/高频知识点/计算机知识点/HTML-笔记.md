# HTML笔记 

 2026-8-17

 原始笔记链接：https://cloud.seatable.cn/dtable/external-links/59b453a8639945478de2/

 
## 0039 BfC是什么？有什么作用？怎么生成？


EMC表示块级上下文

怎样触发，可以使用 position absolute或者overflow hidden来触发

主要的作用。生成的内部元素和外部元素之间的样式互不干扰，可以避免内部元素和外部元素的margin互相重叠

也可以解决元素之间造成副组件的高度塌陷问题



   
## 0063 无缝轮播图怎么实现


基本思路是：设置一个数组存放全部的图片，然后设置定时器，循环获取数组中的元素即可

可以参考 <https://zhuanlan.zhihu.com/p/151897269> 

或者是把全部的图片渲染成一个横轴很长的列表，然后设置 transLateY 改变相对位移（增加动画效果），定时器改变位移。设置最后一张图片和第一张图片一样，然后跳转实现无缝轮播的效果。



   
## 0073 BFC 和其他几个布局方式


常见布局格式 Block Inline Grid Flex Table

1、Block 块级 默认 div 布局，从上到下布局

2、Inline 行内 默认文本 span 布局

3、Flex 栅格布局 用于对齐，每行每列分布多少

4、Grid 网格布局 使用较少，主要是表格内部，可能存在 margin padding 不好调整

5、Table 布局，局限比较多（可能某些 margin padding 不好调试），是默认的表格布局



   
## 0129 pointer-events 和点击穿透


有时候，我们会遇到界面中多个图层重叠的问题，下面图层绑定事件 event，上面的图层显示 UI 效果，希望点击事件，可以穿透上层 DIV 然后触发下层 DIV 的函数。

那么可以设置 `pointer-events: none` ，表示上层的点击事件是无效的。

还可以避免 hover visited 的效果（我们想改变一个链接的显示状况，避免出现 visited 后的蓝色边框）

其他的属性主要用在 svg 上面

详情参考：<https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events>

   
## 0210 canvas 如何使用


HTML 插入 canvas，指定 ID 和整体样式（长度宽度）

```html
<canvas id="can" width="500" height="500"></canvas>
```

具体方法

```javascript
//常用方法
var can = document.getElementById('can');
var cvs = can.ContentText("2d");

cvs.moveTo(0,0);
cvs.lineTo(500,500);
cvs.stroke();
cvs.strokeWidth = 5;
cvs.lineStyle = "red";
cvs.closePath();
cvs.clearPath();

cvs.fillStyle = "blue";
cvs.fill();

cvs.strokeRest(0,0,200,200);
cvs.fillRect(200,200,100,100);
cvs.clearRect(0,0,cvs.width,cvs.height);

//虚线
cvs.setLineDash([x,y,z,p]);
cvs.getLineDash();
cvs.lineDashOffset = 2;
//偏移量

//绘制汉字
strokeText('描边文字');
fillText('填充汉字');
textAlign = "left/right/center";
textBaseline = "top/bottom/middle";
```

在 react 中，可以使用 react-canvas 等第三方库，避免直接操作原生 canvas 的 API

   
## 0176 JS 让页面实现全屏效果


页面全屏：

设置当前的顶层组件，width 100% height 100% 即可

网页全屏：

RequestFullscreen()

ExitFullscreen()

```javascript
document.getElementById("fullScreen").onclick = function () {
  if (document.documentElement.RequestFullScreen) {
    document.documentElement.RequestFullScreen();
  }
  // 兼容火狐
  console.log(document.documentElement.mozRequestFullScreen)
  if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  }
  // 兼容谷歌 webkitRequestFullScreen 也可以 webkitRequestFullscreen
  if (document.documentElement.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen();
  }
  // 兼容 IE,只能写 msRequestFullscreen
  if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

document.getElementById("noFullScreen").onclick = function () {
  if (document.exitFullScreen) {
    document.exitFullscreen()
  }
  // 兼容火狐
  console.log(document.mozExitFullScreen)
  if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  }
  // 兼容谷歌等
  if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
  // 兼容IE
  if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}
```

全屏后，可以使用媒体查询修改样式

```
:-webkit-full-screen { }
:-moz-full-screen { }
:-ms-fullscreen { }
:fullscreen { }
```

​

   
## 0396 HTML 用户体验优化


* 输入框，对话框打开后自动聚焦（如果是原生的输入框，设置ref，点击 tab 聚焦；点击 enter 进行编辑；如果是合成组件，直接使用组件的autofocus聚焦），点击 esc 关闭对话框等

* 表单内部表单项点击 Tab 可以进行跳转到下一个表单项

* 使用 title 属性（解释图标的含义），alt 属性进行标识（解释图片的含义）

   
## 0698 input color 原生 HTML 选择颜色


在网页中，可能会让用户选择颜色，进行自定义（文字颜色、背景色），有两种方案实现

1、react-color 第三方库实现

2、HTML input type=color 颜色选择器实现：这个依靠浏览器内置的颜色选择器实现的效果，最新版谷歌，火狐，Safari 都支持这个功能（选择组件的样式不一样）。好处是简单已操作，缺点是不同的浏览器实现组件效果不一样。

参考：[https://www.w3school.com.cn/jsref/dom\_obj\_color.asp](https://www.w3school.com.cn/jsref/dom_obj_color.asp "https://www.w3school.com.cn/jsref/dom_obj_color.asp")

```html
<input type="color" id="myColor" onchange="onChange()"/>
```

可以主动获取，或者被动获取颜色的值 input.value

```javascript
    function myFunction() {
      // click button to trigger this fn
      var x = document.getElementById("myColor").value;
    }

    function onChange(e) {
      var x = document.getElementById("myColor").value;
    }
```

​

   
## 0699 input range 原生 HTML 选择范围


[https://www.w3school.com.cn/jsref/dom\_obj\_range.asp](https://www.w3school.com.cn/jsref/dom_obj_range.asp "https://www.w3school.com.cn/jsref/dom_obj_range.asp")

这是 H5 新加的属性

HTML，这里注意 min max step 值，拖动后，可以改变 value，监听 onChange 可以获取实时的 value

```html
<input type="range" id="myInput" onchange="onChange()" min="0" max="100" step="10" value="20"/>
```

方法 stepUp stepDown，设置 dom 的 value

```javascript
document.getElementById("myInput").stepDown(50);
document.getElementById("myInput").stepUp(100);
```

自定义背景色和样式

```css
    input[type="range"]::-webkit-slider-runnable-track {
      background: yellow;
    }
    input[type="range"]::-webkit-slider-thumb {
      background: blue;
    }
```

​

   
## 0701 input week 原生 HTML 选择周


[https://www.w3school.com.cn/jsref/dom\_obj\_week.asp](https://www.w3school.com.cn/jsref/dom_obj_week.asp "https://www.w3school.com.cn/jsref/dom_obj_week.asp")

可以获取选择的周，例如  2024-W40

周实际使用的不多

```html
<input type="week" id="myInput" onchange="onChange()" />
```

```javascript
    function onChange(e) {
      var x = document.getElementById("myInput").value;
      console.log(x);
    }
```

​

   
## 0703 input time 原生 HTML 选择时间


可以选择时间，唯一不足就是视觉上不太好看

```html
<input type="time" id="myInput" onchange="onChange()" />
```

<img src="https://cloud.seatable.cn/workspace/32/asset/e82c7317-556e-45c4-8b5d-092331cd8977/images/auto-upload/image-1725610838357.png" alt="undefined" title="undefined" width="281" height="394" />

   
## 0705 原生 AbortController 中断请求


需求：在一个单页面中，存在多个图库视图，点击第一个加载很多图片，点击第二个，需要取消第一个的全部加载，然后直接加载第二个的图片。如果使用 img 标签，请求会直接发出去，然后无法直接通过 JS 阻止请求发出。

解决：

**AbortController** 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求。你可以使用 [AbortController()](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController/AbortController "AbortController()") 构造函数创建一个新的 `AbortController` 对象。使用 [AbortSignal](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortSignal) 对象可以完成与异步操作的通信。

[https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController "https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController")

```javascript
// 有两个按钮，下载和取消。点击下载后，发出请求；点击取消，如果还在下载中，那么就取消请求

// 1、点击下载按钮，开始下载中断控制器对象，就终止下载
downloadBtn.addEventListener("click", fetchVideo);

// 2、点击取消按钮，如果存在 
abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("中止下载");
  }
});

// 下载函数
function fetchVideo() {
  // 新建一个控制器对象，然后放在全局属性中
  controller = new AbortController();
  const signal = controller.signal;
  // 下载时，第二个参数传递控制器对象（便于中断控制）
  fetch(url, { signal })
    .then((response) => {
      console.log("下载完成", response);
    })
    .catch((err) => {
      console.error(`下载错误：${err.message}`);
    });
}
```

​

   
## 0316 改变 placeholder 的字体颜色大小


这个方法也就在 PC 端可以，移动端兼容性不太好

```css
input::-webkit-input-placeholder { 
    font-size:14px;
    color: #333;
}

input::-moz-placeholder { 
    font-size:14px;
    color: #333;
}

input:-ms-input-placeholder { 
    font-size:14px;
    color: #333;
}

```



   
## 0317 audio 和 video 在 ios 和 andriod 中无法自动播放


原因：因为各大浏览器都为了节省流量，做出了优化，在用户没有行为动作时（交互）不予许自动播放；

```html
/* 音频，写法一 */
<audio src="music/bg.mp3" autoplay loop controls>你的浏览器还不支持哦</audio>

/* 音频，写法二 */
<audio controls="controls"> 
    <source src="music/bg.ogg" type="audio/ogg"></source>
    <source src="music/bg.mp3" type="audio/mpeg"></source>
    优先播放音乐bg.ogg，不支持在播放bg.mp3
</audio>

```

js

```javascript
// JS绑定自动播放（监听点击事件，播放音乐）
$(window).one('touchstart', function(){
    music.play();
})

// 微信兼容处理
document.addEventListener("WeixinJSBridgeReady", function () {
    music.play();
}, false);

//小结
//1.audio元素的autoplay属性在IOS及Android上无法使用，在PC端正常；
//2.audio元素没有设置controls时，在IOS及Android会占据空间大小，而在PC端Chrome是不会占据任何空间；
//3.注意不要遗漏微信的兼容处理，需要引用微信JS；

```

这个问题实际没有遇到过



   
## 0323 有哪些 meta 标签


常用

```html
<!-- 设置缩放 -->
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />

<!-- 可隐藏地址栏，仅针对IOS的Safari（注：IOS7.0版本以后，safari上已看不到效果） -->
<meta name="apple-mobile-web-app-capable" content="yes" />

<!-- 仅针对IOS的Safari顶端状态条的样式（可选default/black/black-translucent ） -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />

<!-- IOS中禁用将数字识别为电话号码/忽略Android平台中对邮箱地址的识别 -->
<meta name="format-detection"content="telephone=no, email=no" />

```

其他

```html
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">

<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">

<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">

<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">

<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">

<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">

<!-- UC应用模式 -->
<meta name="browsermode" content="application">

<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">

<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">

```



   
## 0409 如何通过 JS 控制 CSS 动画停止


设置一个界面动画的暂停和继续（JS 点击按钮，动画暂停或者显示）

```css
div {
  animation-play-state: paused;
  animation-play-state: running;
  -webkit-animation-play-state: paused; /* Safari 和 Chrome */
}
```

```javascript
openAnimation = () => {
  this.inputRef.current.style.animationPlayState = "running";
};

closeAnimation = () => {
  this.inputRef.current.style.animationPlayState = "paused";
};
```


   
## 0431 浏览器如何获取当前地址信息


BOM 中有一个地理位置的 API

navigator.geolocation.getCurrentPosition(onSuccess, onError, options) 可以获取当前的位置

参考 MDN：[https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation "https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation")

可以实时监听当前设备的位置，watchPosition() clearWatch() 对应的回调函数获取实时的位置

原理：浏览器获取设备的 GPS 定位信息，或者获取网络供应商 ISP 的位置。因为获取地理位置需要一定时间，所以函数是异步执行的，在回调函数中获取位置。

在《JavaScript权威指南》犀牛书 22章第一节中有详细使用介绍

```javascript
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

// 返回当前的经度纬度，定位精度（有些设别还有海拔和速度）
function success(pos) {
  var crd = pos.coords;
  console.log("Your current position is:");
  console.log("Latitude : " + crd.latitude);
  console.log("Longitude: " + crd.longitude);
  console.log("More or less " + crd.accuracy + " meters.");
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

实际问题：

某些设备无法获取位置：某些浏览器可能不支持，或者设置了不允许地理位置定位，那么需要改动浏览器配置信息才能获取到。通常手机上换几个浏览器，点击允许访问位置，可以获取到上面的信息。

这个在特定的功能会使用（例如根据当前位置，模拟打卡，或者地图选点）。

   
## 0451 textarea 的高度自动变化


* 默认加载时，设置高度是固定的（100px）然后溢出不显示

* 点击编辑后，根据内容设置高度，然后设置溢出显示滚动条，这样方便编辑

缺陷：点击编辑后，外部整体的高度会被撑开，可能有其他的问题

这里也可以参考 react-textarea 这个库，实现一部分样式

​

   
## 0796 自定义网页字体


可以加载自定义字体，使用 \`FontFace\`，一个用于定义自定义字体的 Web API。下面是一个基本的例子：

```javascript
// 创建一个新的 FontFace 对象
const fontFace = new FontFace('My Font', 'url(https://example.com/myfont.woff2)', {
  weight: 'normal',
  style: 'normal',
});


// 将字体添加到文档中
document.fonts.add(fontFace);


// 等待字体加载完成
fontFace.load().then(() => {
  // 使用自定义字体
  document.body.style.fontFamily = 'My Font';
});
```

在这个例子中，我们首先创建一个新的 \`FontFace\` 对象，指定字体名称、字体文件 URL 和其他属性（如字体粗细和样式）。然后，我们将字体添加到文档中，并等待字体加载完成。最后，我们可以使用自定义字体来设置文档的字体。

注意：在生产环境中，需要确保字体文件是正确的格式（如woff2）和正确的路径，并且字体文件是可访问的。

  