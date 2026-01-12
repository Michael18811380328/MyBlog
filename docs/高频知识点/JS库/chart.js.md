# chart.js

前端 canvas 绘图

Chart.js 是一个轻量级、开源的 JavaScript 图表库，用于在网页上创建交互式数据可视化。以下是核心特点和快速上手：

### 1. 主要特点

* 支持多种图表类型：折线图、柱状图、饼图、雷达图等。

* 响应式设计：自动适应不同屏幕尺寸。

* 交互功能：悬停提示、点击事件、缩放等。

* 动画效果：数据更新时的平滑过渡。

* 简单 API：只需几行代码即可创建复杂图表。

### 2. 快速上手

#### （1）引入 Chart.js

```
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js"></script>
```

#### （2）HTML 中添加 Canvas

```
<canvas id="myChart" width="400" height="200"></canvas>
```

#### （3）JavaScript 初始化图表

```javascript
const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'bar', // 图表类型
  data: {
    labels: ['一月', '二月', '三月'],
    datasets: [{
      label: '销售额',
      data: [65, 59, 80],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true, // 响应式
    scales: {
      y: { beginAtZero: true }
    }
  }
});
```

### 3. 示例图表类型

| 类型  | 描述      | 示例代码 type 值 |
| --- | ------- | ----------- |
| 折线图 | 显示数据趋势  | 'line'      |
| 柱状图 | 比较数据大小  | 'bar'       |
| 饼图  | 显示比例关系  | 'pie'       |
| 环形图 | 类似饼图但中空 | 'doughnut'  |
| 雷达图 | 多维数据比较  | 'radar'     |

### 4. 官网与资源

* 文档：<https://www.chartjs.org/docs/latest/>

* 示例：<https://www.chartjs.org/samples/latest/>

* GitHub：<https://github.com/chartjs/Chart.js>

### 5. 适合场景

* 数据仪表盘、统计报表

* 金融数据分析

* 实时监控系统

* 教育或展示类网站

Chart.js 凭借其简单易用和丰富的功能，成为前端数据可视化的热门选择！
