# Android笔记 

 2026-1-12

 原始笔记链接：https://cloud.seatable.cn/dtable/external-links/59b453a8639945478de2/

 
## 0766 JS Bridge 调用安卓接口


基本原理：通过全局变量+事件驱动，使得安卓系统和JS可以互相通信，在安卓应用内部可以嵌入 JS 代码或网页

​

1、初始化全局变量链接

```javascript
// 如果是安卓端登录，初始化 JSBridge
if (window.mobileLogin) {
  initWebViewJSBridge();
}

function initWebViewJSBridge() {
  connectWebViewJavascriptBridge(function (bridge) {
    bridge.init();
  });
}

function connectWebViewJavascriptBridge(callback) {
  // 如果JS已经初始化，那么调用回调函数 bridge.init
  if (window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.inited) {
    callback(window.WebViewJavascriptBridge);
  }
  // 如果没有初始化，等待发送消息
  else {
    document.addEventListener('WebViewJavascriptBridgeReady',
      function () {
        callback(window.WebViewJavascriptBridge);
      },
      false);
  }
}
```

​

2、JS给安卓发消息，通过全局变量，给安卓传参（包括消息类型，数据内容）

```javascript
function playAndroidMedia(index, urls) {
    window.WebViewJavascriptBridge.callHandler('playMediaFile',
        JSON.stringify({ index, urls })
    );
}

function openAndroidComment(data) {
  window.WebViewJavascriptBridge.callHandler('callAndroidFunction', JSON.stringify(
    {
      v: 2,
      action: ANDROID_ACTIONS.COMMENT,
      data: JSON.stringify(data),
    }
  ));
}
```

​

3、安卓给 JS 发消息：

```javascript
window.WebViewJavascriptBridge.registerHandler('callJsFunction', (data, responseCallback) => {
  // JS 先解析安卓的数据
  const parsedData = JSON.parse(data);

  // 执行对应的操作
  const execActionSucceed = this.handleAction(parsedData);

  // 如果操作成功，那么回调函数给安卓信息
  if (execActionSucceed) {
    responseCallback(JSON.stringify({ success: true }));
  }
});
```

​

目前的调试办法是前端先完成代码，然后安卓同事集成到安卓开发环境去调试

   
## 0826 flutter 框架构建应用


[https://docs.flutter.cn/get-started/install/macos/web](https://docs.flutter.cn/get-started/install/macos/web "https://docs.flutter.cn/get-started/install/macos/web")

Flutter 类似 react-native，就是一套代码，可以开发出多个终端的 UI 框架。

编程语言：Flutter 使用 Dart 语言 [https://dart.cn/](https://dart.cn/ "https://dart.cn/") 和 JS 差距不大（单独介绍）

Flutter 可以用一套代码，同时编译出 安卓，IOS，网页的效果（需要 Android Studio， Xcode 等开发平台）

* `android` 和 `ios` 目录分别包含了用于 Android 和 iOS 平台的原生项目配置文件，Flutter 在构建应用时会根据这些文件进行相应的适配和打包工作。

* `lib` 目录是存放 Flutter 代码的核心区域，主要的 UI 构建、业务逻辑等代码都在这里编写，其中 `main.dart` 是整个应用的入口文件。

* `test` 目录用于存放应用的测试代码。

* `pubspec.yaml` 是项目的配置文件，用于管理项目的依赖包、指定应用的名称、版本等信息，类似其他语言项目中的 `package.json` 等文件。

```text
my_app/
├── android/
├── ios/
├── lib/
│   └── main.dart
├── test/
├── pubspec.yaml
└── README.md
```

类似的产品还有京东的 taro 用于编译各种小程序

有时间可以直接使用 AI 去完成（关键是还需要安卓平台，IOS 平台，还需要服务器等等各种东西）

具体组件和代码实现

```text
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My Flutter App',
      home: Scaffold(
        appBar: AppBar(
          title: Text('My App'),
        ),
        body: Center(
          child: Text('Hello, World!'),
        ),
      ),
    );
  }
}
```

​

   
## 0767 安卓手机上搭建服务器


参考链接：[https://blog.csdn.net/weixin\_43975684/article/details/105599292](https://blog.csdn.net/weixin_43975684/article/details/105599292 "https://blog.csdn.net/weixin_43975684/article/details/105599292")

0、手机设置中，打开安装任意软件

1、在安卓机上下载 [KSWEB](http://www.kslabs.ru/) 这个软件，类似 lamp 软件（现在下载需要授权）

2、开启 mysql apache nginx php 基本功能的服务器

3、把代码放在对应的目录中，可以实现局域网内部访问

4、内网穿透，外网可以访问服务器（存在安全问题，测试环境没问题）

  