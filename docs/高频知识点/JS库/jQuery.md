# jQuery

jQuery 是一个快速、简洁的 JavaScript 库，曾是前端开发的“标配”，用于简化 DOM 操作、事件处理、动画效果和 AJAX 请求。

尽管现代框架（如 React、Vue）已逐渐取代其主导地位，但在许多旧项目和小型应用中仍被广泛使用。

### 1. 核心功能

* DOM 操作：通过选择器快速定位和操作元素（如 \$('div').hide()）。

* 事件处理：简化事件绑定（如 \$('button').click()）。

* 动画效果：内置多种动画方法（如 fadeIn()、slideUp()）。

* AJAX：简化异步数据请求（如 \$.ajax()、\$.get()）。

* 跨浏览器兼容：统一处理不同浏览器的 API 差异。

### 2. 基本用法

```javascript
// 引入 jQuery
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>

// DOM 加载完成后执行
$(document).ready(function() {
  // 选择元素并修改样式
  $('p').css('color', 'red');
  
  // 绑定点击事件
  $('button').click(function() {
    $(this).hide();
  });
  
  // 发起 AJAX 请求
  $.get('https://api.example.com/data', function(data) {
    console.log(data);
  });
});
```

### 3. 关键 API

* 选择器：\$('selector')（如 \$('.class')、\$('#id')）。

* DOM 操作：html()、text()、attr()、addClass() 等。

* 事件：on()、click()、hover()、submit() 等。

* 动画：animate()、fadeIn()、slideDown() 等。

* 工具方法：\$.each()、\$.extend()、\$.trim() 等。

### 4. 模块化支持

* AMD/CommonJS：支持模块加载器（如 RequireJS）。

* UMD：兼容浏览器全局变量和模块环境。

### 5. 优缺点

#### 优点

* 学习门槛低：语法简洁，适合快速开发。

* 生态丰富：拥有大量插件（如 jQuery UI、DataTables）。

* 兼容性强：统一处理 IE6+ 等旧浏览器问题。

#### 缺点

* 性能问题：DOM 操作密集时效率低于原生 API。

* 冗余代码：现代浏览器已原生支持许多 jQuery 功能。

* 与现代框架冲突：难以与 React/Vue 等组件化框架集成。

### 6. 适用场景

* 旧项目维护：大量 legacy 代码依赖 jQuery。

* 快速原型：无需复杂架构的小型应用。

* 插件依赖：依赖 jQuery 生态的插件（如表单验证、滑块）。

### 7. 替代方案

* 原生 JavaScript：使用 document.querySelector、addEventListener 等。

* 现代框架：React、Vue、Angular。

* 轻量级库：如 Zepto.js（API 类似但体积更小）。

### 8. 现状

* 活跃度下降：GitHub 贡献减少，但下载量仍高（依赖旧项目）。

* 版本维护：当前稳定版为 3.x，仅修复关键 bug。

### 9. 总结

jQuery 是前端历史上的里程碑式库，极大降低了早期开发门槛。

尽管现代项目更倾向于使用原生 API 或组件化框架，但在需要兼容旧浏览器或依赖其生态的场景中，jQuery 仍有价值。
