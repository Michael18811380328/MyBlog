# webrtc

移动端调用摄像头扫码

统计信息：字数 4653 阅读10分钟

基本技术和概念

#### webrtc

`WebRTC (Web Real-Time Communications)` 是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（`Peer-to-Peer`）的连接，实现视频流和（或）音频流或者其他任意数据的传输。`WebRTC`包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点（`Peer-to-Peer`）的数据分享和电话会议成为可能。

扫码：使用 webRTC 技术，通过浏览器打开移动端的摄像头，进行扫码，并将扫码结果返回到 JS 中。

视频通话：使用 web-socket 技术和 webRTC 技术，实现视频通话。

本文档使用第一种功能，前端在移动端实现扫码功能。

#### webrtc-adapter

第三方库 webrtc-adapter 是一个垫片，用于处理浏览器 webRTC 兼容性。

WebRTC adapter [https://www.npmjs.com/package/webrtc-adapter](https://www.npmjs.com/package/webrtc-adapter "https://www.npmjs.com/package/webrtc-adapter")

只需要引入这个库，不需要其他的操作，No further action is required.

```
import adapter from 'webrtc-adapter';
```

#### ZXing

ZXing（“斑马线”）是1D/2D条形码图像处理库: [https://github.com/zxing-js/library，官方案例是](https://github.com/zxing-js/library%EF%BC%8C%E5%AE%98%E6%96%B9%E6%A1%88%E4%BE%8B%E6%98%AF "https://github.com/zxing-js/library%EF%BC%8C%E5%AE%98%E6%96%B9%E6%A1%88%E4%BE%8B%E6%98%AF") TS 的

案例见两个 html，qr-camera.html 可以完整使用， bar-image.html 缺少图片

#### React 具体实现

```javascript
import React from 'react';
import 'webrtc-adapter';
import { BrowserMultiFormatReader } from '@zxing/library';
import { Modal } from 'antd-mobile';
export default class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.codeReader = new BrowserMultiFormatReader();
  }
  componentDidMount() {
    this.initCamera();
  }
  initCamera = () => {
    this.codeReader.listVideoInputDevices().then((videoInputDevices) => {
      // 这里使用默认的摄像头 undefined
      this.codeReader.decodeFromVideoDevice(undefined, 'video', (result, err) => {
        // 给扫描对象增加动画效果
        if (!this.scanRef.style.animation) {
          this.scanRef.style.animation = 'scanCode 3s linear infinite';
        }
        // 有结果后，把扫码的结果通过回调函数返回
        if (result) {
          this.props.changeInputValue(result.text);
        }
      });
    }).catch(() => {
      console.log('Failed to turn on camera');
    });
  }
  onCloseCamera = () => {
    this.codeReader.reset();
  }
  render() {
    return(
      <Modal
        onClose={this.props.onClose}
        transparent
        visible={true}
        className="mobile-custom-camera"
      >
        <div className="custom-scan-container">
          {/* 上面显示当前的视频效果，并进行扫码 */}
          <video
            id="video"
            width="300"
            height="200"
          ></video>
          {/* 下面是一个用于扫码的动画效果，一个线上下移动 */}
          <div className="custom-camera-line" ref={ref => this.scanRef = ref}></div>
        </div>
      </Modal>
    );
  }
}
```

对应的 CSS

```
.camera-auto-fill-value {
  position: absolute;
  top: 9px;
  right: 6px;
  cursor: pointer;
  color: #999;
  background: #fff;
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.mobile-custom-camera {
  width: 310px;
}
.mobile-custom-camera .am-modal-content {
  padding-top: 0;
  width: 310px;
}
.mobile-custom-camera .am-modal-content .am-modal-body {
  padding: 0;
  line-height: 1;
  height: 210px;
  overflow: hidden;
}
.mobile-custom-camera .custom-scan-container {
  height: 210px;
  width: 310px;
  background: linear-gradient(#ddd, #ddd) left top,
    linear-gradient(#ddd, #ddd) left top,
    linear-gradient(#ddd, #ddd) right top,
    linear-gradient(#ddd, #ddd) right top,
    linear-gradient(#ddd, #ddd) right bottom,
    linear-gradient(#ddd, #ddd) right bottom,
    linear-gradient(#ddd, #ddd) left bottom,
    linear-gradient(#ddd, #ddd) left bottom;
  background-color: rgba(0,0,0,.4);
  background-repeat: no-repeat;
  background-size: 5px 50px, 50px 5px;
}
.mobile-custom-camera .custom-scan-container>video {
  background: #fff;
  margin-top: 5px;
  object-fit: fill;
}
/* 这是动画线段的样式 */
.mobile-custom-camera .custom-camera-line {
  position: absolute;
  width: 80%;
  left: 10%;
  border: 1px solid #ddd;
  top: -2px;
}
@keyframes scanCode {
  from {
    top: 0;
  }
  to {
    top: 200px;
  }
}
```

#### 参考链接

Vue 移动端实现调用相机扫描二维码 [https://blog.csdn.net/weixin\_41856395/article/details/120597131](https://blog.csdn.net/weixin_41856395/article/details/120597131 "https://blog.csdn.net/weixin_41856395/article/details/120597131")

WebRTC 从实战到未来 [https://juejin.cn/post/7151932832041058340](https://juejin.cn/post/7151932832041058340 "https://juejin.cn/post/7151932832041058340")

#### 官方案例

qr-camera.html

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="ZXing for JS">

  <title>官方案例 |ZXing TypeScript | Decoding from camera stream</title>

  <!-- 引入线上样式库 -->
  <link rel="stylesheet" rel="preload" as="style" onload="this.rel='stylesheet';this.onload=null" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
  <link rel="stylesheet" rel="preload" as="style" onload="this.rel='stylesheet';this.onload=null" href="https://unpkg.com/normalize.css@8.0.0/normalize.css">
  <link rel="stylesheet" rel="preload" as="style" onload="this.rel='stylesheet';this.onload=null" href="https://unpkg.com/milligram@1.3.0/dist/milligram.min.css">

</head>

<body>

  <main class="wrapper" style="padding-top:2em">

    <section class="container" id="demo-content">
      <h1 class="title">Scan QR Code from Video Camera</h1>

      <p>This example shows how to scan a QR code with ZXing javascript library from the device video camera. If more
        than one video input devices are available (for example front and back camera) the example shows how to read
        them and use a select to change the input device.</p>

      <p>此示例显示如何使用ZXing javascript库从设备摄像机扫描二维码。如果有多个视频输入设备可用（例如前置和后置摄像头），该示例将显示如何读取它们并使用选择来更改输入设备。</p>

      <!-- 点击按钮，开始或者重置 -->
      <div>
        <a class="button" id="startButton">Start</a>
        <a class="button" id="resetButton">Reset</a>
      </div>

      <!-- 这里显示视频 -->
      <div>
        <video id="video" width="300" height="200" style="border: 1px solid gray"></video>
      </div>

      <!-- 更改视频来源，如果有多个摄像头 -->
      <div id="sourceSelectPanel" style="display:none">
        <label for="sourceSelect">Change video source 更改视频源</label>
        <select id="sourceSelect" style="max-width:400px">
        </select>
      </div>

      <div style="display: table">
        <label for="decoding-style"> Decoding Style 解码样式</label>
        <select id="decoding-style" size="1">
          <option value="once">Decode once 解码一次</option>
          <option value="continuously">Decode continuously 连续解码</option>
        </select>
      </div>

      <label>Result:</label>
      <pre>
        <code id="result"></code>
      </pre>

      <p>See the <a href="https://github.com/zxing-js/library/tree/master/docs/examples/qr-camera/">source code</a> for
        this example.</p>
    </section>

    <footer class="footer">
      <section class="container">
        <p>ZXing TypeScript Demo.</p>
      </section>
    </footer>

  </main>

  <script type="text/javascript" src="https://unpkg.com/@zxing/library@latest"></script>
  <script type="text/javascript">

    // 解码一次
    function decodeOnce(codeReader, selectedDeviceId) {
      codeReader.decodeFromInputVideoDevice(selectedDeviceId, 'video').then((result) => {
        console.log(result)
        // 捕获到视频中的二维码，解析后返回字符串，例如微信个人名片：https://u.wechat.com/EG_lz_oLmz6PHpvOemd5XMw
        document.getElementById('result').textContent = result.text
      }).catch((err) => {
        console.error(err)
        document.getElementById('result').textContent = err
      })
    }

    // 连续解码
    function decodeContinuously(codeReader, selectedDeviceId) {

      codeReader.decodeFromInputVideoDeviceContinuously(selectedDeviceId, 'video', (result, err) => {

        if (result) {
          // properly decoded qr code 正确解码的二维码
          console.log('Found QR code!', result)
          document.getElementById('result').textContent = result.text
        }
        if (err) {
          // As long as this error belongs into one of the following categories
          // the code reader is going to continue as excepted. Any other error
          // will stop the decoding loop.
          //
          // Excepted Exceptions:
          //  - NotFoundException
          //  - ChecksumException
          //  - FormatException
          if (err instanceof ZXing.NotFoundException) {
            console.log('No QR code found.')
          }
          if (err instanceof ZXing.ChecksumException) {
            console.log('A code was found, but it\'s read value was not valid.')
          }
          if (err instanceof ZXing.FormatException) {
            console.log('A code was found, but it was in a invalid format.')
          }
        }
      })
    }

    window.addEventListener('load', function () {

      // 设置变量保存选中摄像头
      let selectedDeviceId;

      // 初始化对象
      const codeReader = new ZXing.BrowserQRCodeReader()
      console.log('ZXing code reader initialized')

      // 先获取输入设备的信息
      codeReader.getVideoInputDevices()
        .then((videoInputDevices) => {

          // 获取当前设备的摄像头个数 videoInputDevices
          const sourceSelect = document.getElementById('sourceSelect')
          // 默认第一个是选中的设别ID
          selectedDeviceId = videoInputDevices[0].deviceId
          
          // 如果有多个摄像头
          if (videoInputDevices.length >= 1) {
            videoInputDevices.forEach((element) => {
              const sourceOption = document.createElement('option')
              sourceOption.text = element.label
              sourceOption.value = element.deviceId
              sourceSelect.appendChild(sourceOption)
            })

            sourceSelect.onchange = () => {
              selectedDeviceId = sourceSelect.value;
            };

            const sourceSelectPanel = document.getElementById('sourceSelectPanel')
            sourceSelectPanel.style.display = 'block'
          }

          // 点击开始按钮的回调函数
          document.getElementById('startButton').addEventListener('click', () => {
            // 获取渲染的次数，然后执行对应的函数
            const decodingStyle = document.getElementById('decoding-style').value;
            if (decodingStyle == "once") {
              decodeOnce(codeReader, selectedDeviceId);
            } else {
              decodeContinuously(codeReader, selectedDeviceId);
            }
            console.log(`Started decode from camera with id ${selectedDeviceId}`)
          })

          // 点击重置按钮的回调函数
          document.getElementById('resetButton').addEventListener('click', () => {
            // 重置对象
            codeReader.reset()
            document.getElementById('result').textContent = '';
            console.log('Reset.')
          })

        })
        .catch((err) => {
          // 本地使用 http-server 测试时，使用 http 协议，移动端报错 Can't enumerate devices, method not supported. 无法枚举设备，不支持方法。
          // https://stackoverflow.com/questions/63833315/zebra-crossing-javascript-not-detecting-devices
          // It turns out, the script requires a browser SSL connection. Not just on the JS, but the enveloping page as well.
          // 解决方法
          // 首先使用以下命令生成一个证书 ** 对 key.pem 和 cert.pem，它将有效期约10年（准确地说是3650天）
          // openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
          // # 然后便可以起服务了 下面两个命令都可以，后者会自动打开默认浏览器运行页面
          // http-server -S
          // http-server -S -C cert.pem -o
          // 本机直接使用 http-server 即可启动服务
          alert(err)
        })
    })
  </script>

</body>

</html>

```

bar-image.html

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="ZXing for JS">

  <title>ZXing TypeScript | Decoding Barcode from images</title>

  <link rel="stylesheet" rel="preload" as="style" onload="this.rel='stylesheet';this.onload=null"
    href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
  <link rel="stylesheet" rel="preload" as="style" onload="this.rel='stylesheet';this.onload=null"
    href="https://unpkg.com/normalize.css@8.0.0/normalize.css">
  <link rel="stylesheet" rel="preload" as="style" onload="this.rel='stylesheet';this.onload=null"
    href="https://unpkg.com/milligram@1.3.0/dist/milligram.min.css">
</head>

<body>

  <main class="wrapper" style="padding-top:2em">

    <section class="container" id="demo-content">
      <h1 class="title">Scan barcode from <code>&lt;img&gt;</code></h1>

      <p>
        <a class="button-small button-outline" href="../../index.html">HOME 🏡</a>
      </p>

      <p>
        These examples show how to scan a barcode with ZXing javascript library from an image. The examples decode from
        the
        <code>src</code> in
        <code>img</code> tag, however is also possible to decode directly from an url without an
        <code>img</code> tag.
      </p>

      <div id="code-128">
        <h2 class="title">Scan barcode from Code 128</h2>
        <div>
          <a class="button decodeButton">Decode</a>
        </div>
        <div>
          <img class="img" src="../../resources/blackbox/code128-1/1.png" style="border: 1px solid gray" />
        </div>
        <label>Result:</label>
        <blockquote>
          <p class="result"></p>
        </blockquote>
      </div>

      <br />
      <br />

      <div id="ean-13">
        <h2 class="title">Scan barcode from EAN-13</h2>
        <div>
          <a class="button decodeButton">Decode</a>
        </div>
        <div>
          <img class="img" src="../../resources/blackbox/ean13-1/1.png" style="border: 1px solid gray" />
        </div>
        <label>Result:</label>
        <blockquote>
          <p class="result"></p>
        </blockquote>
      </div>

      <br />
      <br />

      <div id="itf">
        <h2 class="title">Scan barcode from ITF</h2>
        <div>
          <a class="button decodeButton">Decode</a>
        </div>
        <div>
          <img class="img" src="../../resources/blackbox/itf/1.png" style="border: 1px solid gray" />
        </div>
        <label>Result:</label>
        <blockquote>
          <p class="result"></p>
        </blockquote>
      </div>

      <p>
        See the
        <a href="https://github.com/zxing-js/library/tree/master/docs/examples/barcode-image/">source code</a>
        for these examples.
      </p>

    </section>

    <footer class="footer">
      <section class="container">
        <p>ZXing TypeScript Demo. Licensed under the <a target="_blank"
            href="https://github.com/zxing-js/library#license" title="MIT">MIT</a>.</p>
      </section>
    </footer>

  </main>

  <script type="text/javascript" src="https://unpkg.com/@zxing/library@latest"></script>
  <script type="text/javascript">
    window.addEventListener('load', () => {

      const codeReader = new ZXing.BrowserBarcodeReader();

      console.log('ZXing code reader initialized');

      const decodeFun = (e) => {

        const parent = e.target.parentNode.parentNode;
        const img = parent.getElementsByClassName('img')[0].cloneNode(true);
        const resultEl = parent.getElementsByClassName('result')[0];

        codeReader.decodeFromImage(img)
          .then(result => {
            console.log(result);
            resultEl.textContent = result.text;
          })
          .catch(err => {
            console.error(err);
            resultEl.textContent = err;
          });

        console.log(`Started decode for image from ${img.src}`)
      };

      for (const element of document.getElementsByClassName('decodeButton')) {
        element.addEventListener('click', decodeFun, false);
      }
    })
  </script>

</body>

</html>

```

​
