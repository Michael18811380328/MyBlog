# @antv/g2

#### 链接

[https://github.com/antvis/g2](https://github.com/antvis/g2 "https://github.com/antvis/g2")

#### 项目介绍

数据驱动的高交互可视化图形语法 AntV - G2

G2 是一套基于可视化编码的图形语法，以数据驱动，具有高度的易用性和扩展性，用户无需关注各种繁琐的实现细节，一条语句即可构建出各种各样的可交互的统计图表。

同时，G2 也是 AntV 最重要的组成，始于《The Grammar of Graphics》一书描述的视觉编码语法系统（这也是 G2 项目命名的由来）。

#### 星标

12K

```javascript
import { Chart } from '@antv/g2';

// A tabular data to be visualized.
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

// Instantiate a new chart.
const chart = new Chart({
  container: 'container',
});

// Specify visualization.
chart
  .interval() // Create an interval mark and add it to the chart.
  .data(data) // Bind data for this mark.
  .encode('x', 'genre') // Assign genre column to x position channel.
  .encode('y', 'sold') // Assign sold column to y position channel.
  .encode('color', 'genre'); // Assign genre column to color channel.

// Render visualization.
chart.render();
```

​
