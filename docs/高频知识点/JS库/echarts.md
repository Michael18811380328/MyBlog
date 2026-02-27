# echarts

[https://github.com/apache/echarts](https://github.com/apache/echarts "https://github.com/apache/echarts")

#### 引入文件和根节点

```html
<!-- 引入 ECharts 5.x 版本 -->
<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>

<!-- 准备一个有宽高的 DOM 容器 -->
<div id="chart-container" style="width: 800px; height: 500px;"></div>
```

#### 常用的几个类型

（柱状图、条形图、折线图、饼图、散点图）

```javascript
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>ECharts 常用图表 DEMO</title>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <style>
        .chart-item { width: 800px; height: 400px; margin: 20px 0; }
    </style>
</head>
<body>
    <!-- 1. 柱状图 -->
    <div id="bar-chart" class="chart-item"></div>
    <!-- 2. 条形图 -->
    <div id="bar-horizontal-chart" class="chart-item"></div>
    <!-- 3. 折线图 -->
    <div id="line-chart" class="chart-item"></div>
    <!-- 4. 饼图 -->
    <div id="pie-chart" class="chart-item"></div>
    <!-- 5. 散点图 -->
    <div id="scatter-chart" class="chart-item"></div>

    <script>
        // 通用初始化函数
        function initChart(id, option) {
            const chart = echarts.init(document.getElementById(id));
            chart.setOption(option);
            // 自适应窗口大小
            window.addEventListener('resize', () => chart.resize());
            return chart;
        }

        // 1. 柱状图
        initChart('bar-chart', {
            title: { text: '月度销售额柱状图' },
            xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月'] },
            yAxis: { type: 'value' },
            series: [{
                name: '销售额',
                type: 'bar',
                data: [120, 200, 150, 80, 250],
                label: { show: true, position: 'top' } // 显示数值标签
            }]
        });

        // 2. 条形图（柱状图的横向版本）
        initChart('bar-horizontal-chart', {
            title: { text: '产品销量条形图' },
            xAxis: { type: 'value' },
            yAxis: { type: 'category', data: ['产品A', '产品B', '产品C', '产品D'] },
            series: [{
                name: '销量',
                type: 'bar',
                data: [350, 280, 420, 190],
                label: { show: true, position: 'right' }
            }]
        });

        // 3. 折线图
        initChart('line-chart', {
            title: { text: '日访问量折线图' },
            xAxis: { type: 'category', data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'] },
            yAxis: { type: 'value' },
            tooltip: { trigger: 'axis' }, // 坐标轴触发提示
            series: [{
                name: '访问量',
                type: 'line',
                data: [150, 230, 180, 290, 220, 300, 270],
                smooth: true, // 平滑曲线
                label: { show: true, position: 'top' }
            }]
        });

        // 4. 饼图
        initChart('pie-chart', {
            title: { text: '用户来源占比饼图' },
            tooltip: { trigger: 'item' },
            legend: { orient: 'vertical', left: 'left', data: ['微信', '抖音', '百度', '小红书'] },
            series: [{
                name: '来源占比',
                type: 'pie',
                radius: ['40%', '70%'], // 环形饼图（内半径/外半径）
                data: [
                    { value: 35, name: '微信' },
                    { value: 25, name: '抖音' },
                    { value: 20, name: '百度' },
                    { value: 20, name: '小红书' }
                ],
                label: {
                    show: true,
                    formatter: '{b}: {c}% ({d}%)' // 格式：名称: 数值(百分比)
                }
            }]
        });

        // 5. 散点图
        initChart('scatter-chart', {
            title: { text: '身高体重散点图' },
            xAxis: { type: 'value', name: '身高(cm)', min: 150, max: 190 },
            yAxis: { type: 'value', name: '体重(kg)', min: 40, max: 90 },
            series: [{
                name: '成人数据',
                type: 'scatter',
                data: [
                    [160, 50], [165, 55], [170, 60], [175, 65],
                    [180, 75], [185, 80], [172, 62], [168, 58]
                ],
                symbolSize: 10 // 散点大小
            }]
        });
    </script>
</body>
</html>
```

#### 基本的配置

（两个轴，数据，标签，图例等）

ECharts 的配置遵循 `option` 结构化设计，核心配置项如下（对应上述 DEMO 中的关键部分）：

​

| 配置项             | 作用                 | 常用属性                                                                 |
| --------------- | ------------------ | -------------------------------------------------------------------- |
| `title`         | 图表标题               | `text`（标题文本）、`left`/`top`（位置）、`textStyle`（字体样式）                      |
| `xAxis`/`yAxis` | 坐标轴（直角坐标系必备）       | `type`（类型：`category`分类 /`value`数值 /`time`时间）、`data`（轴数据）、`name`（轴名称） |
| `series`        | 数据系列（核心，定义图表类型和数据） | `type`（图表类型：`bar`/`line`/`pie`/`scatter`）、`name`（系列名）、`data`（数据）     |
| `label`         | 数据标签（显示数值）         | `show`（是否显示）、`position`（位置：`top`/`right`/`center`）、`formatter`（格式化）  |
| `legend`        | 图例（多系列时区分不同数据）     | `data`（图例项，需和 series.name 一致）、`orient`（排列方向）、`left`/`top`（位置）        |
| `tooltip`       | 提示框（鼠标悬浮显示详情）      | `trigger`（触发方式：`axis`坐标轴 /`item`数据项）、`formatter`（格式化）                |
| `grid`          | 直角坐标系的网格（调整图表位置）   | `left`/`right`/`top`/`bottom`（内边距）                                   |

#### 复杂案例：股票蜡烛图（K 线图）

蜡烛图是 ECharts 中较复杂的图表，需要结合 `candlestick` 类型、双轴、均线等配置，以下是完整实战案例：

以蜡烛图为例，设置一个比较复杂的应用实例

```javascript
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>股票蜡烛图（K线图）</title>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    <style>
        #kline-chart { width: 1000px; height: 600px; margin: 20px auto; }
    </style>
</head>
<body>
    <div id="kline-chart"></div>

    <script>
        // 1. 模拟股票数据（格式：[日期, 开盘, 最高, 最低, 收盘, 成交量]）
        const stockData = [
            ['2026-01-01', 3200, 3250, 3180, 3220, 120000],
            ['2026-01-02', 3220, 3280, 3200, 3260, 150000],
            ['2026-01-03', 3260, 3300, 3240, 3280, 180000],
            ['2026-01-04', 3280, 3320, 3250, 3290, 160000],
            ['2026-01-05', 3290, 3350, 3280, 3330, 200000],
            ['2026-01-06', 3330, 3380, 3300, 3360, 220000],
            ['2026-01-07', 3360, 3400, 3320, 3380, 250000],
            ['2026-01-08', 3380, 3420, 3350, 3400, 190000],
            ['2026-01-09', 3400, 3450, 3380, 3430, 210000],
            ['2026-01-10', 3430, 3480, 3400, 3450, 230000]
        ];

        // 2. 计算5日均线（示例）
        function calculateMA(data, dayCount) {
            const result = [];
            for (let i = 0, len = data.length; i < len; i++) {
                if (i < dayCount - 1) {
                    result.push('-'); // 不足天数时显示空
                    continue;
                }
                let sum = 0;
                for (let j = 0; j < dayCount; j++) {
                    sum += +data[i - j][4]; // 收盘价求和
                }
                result.push((sum / dayCount).toFixed(2)); // 平均值保留2位小数
            }
            return result;
        }
        const ma5 = calculateMA(stockData, 5);

        // 3. 初始化蜡烛图
        const chart = echarts.init(document.getElementById('kline-chart'));
        const option = {
            // 标题和提示框
            title: { text: '上证指数K线图', left: 'center' },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'cross' }, // 十字准星指针
                formatter: function (params) {
                    // 自定义提示框格式
                    const kline = params.find(p => p.seriesType === 'candlestick');
                    const volume = params.find(p => p.seriesName === '成交量');
                    return `
                        <div>日期：${kline.name}</div>
                        <div>开盘：${kline.data[1]}</div>
                        <div>最高：${kline.data[2]}</div>
                        <div>最低：${kline.data[3]}</div>
                        <div>收盘：${kline.data[4]}</div>
                        <div>成交量：${volume.data}</div>
                    `;
                }
            },

            // 图例
            legend: {
                data: ['K线', 'MA5', '成交量'],
                top: 40
            },

            // 网格（分上下两个区域：K线区 + 成交量区）
            grid: [
                { left: '10%', right: '8%', height: '60%' }, // K线区
                { left: '10%', right: '8%', top: '70%', height: '20%' } // 成交量区
            ],

            // x轴（共用一个时间轴）
            xAxis: [
                { type: 'category', data: stockData.map(d => d[0]), scale: true, gridIndex: 0 },
                { type: 'category', data: stockData.map(d => d[0]), scale: true, gridIndex: 1 }
            ],

            // y轴（双轴：K线价格轴 + 成交量轴）
            yAxis: [
                { type: 'value', scale: true, gridIndex: 0, name: '价格' }, // K线价格轴
                { type: 'value', scale: true, gridIndex: 1, name: '成交量', max: '150%', min: 0 } // 成交量轴
            ],

            // 数据系列
            series: [
                // 蜡烛图（K线）
                {
                    name: 'K线',
                    type: 'candlestick',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    data: stockData.map(d => [d[0], d[1], d[2], d[3], d[4]]), // [日期, 开, 高, 低, 收]
                    itemStyle: {
                        // 涨（红）跌（绿）样式
                        color: '#ef232a', // 收盘价 >= 开盘价（涨）
                        color0: '#14b143', // 收盘价 < 开盘价（跌）
                        borderColor: '#ef232a',
                        borderColor0: '#14b143'
                    }
                },
                // 5日均线
                {
                    name: 'MA5',
                    type: 'line',
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    data: ma5,
                    lineStyle: { color: '#ff7300' },
                    smooth: true
                },
                // 成交量柱状图
                {
                    name: '成交量',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: stockData.map(d => d[5]),
                    itemStyle: {
                        color: function (params) {
                            // 成交量颜色跟随K线涨跌
                            const val = stockData[params.dataIndex];
                            return val[4] >= val[1] ? '#ef232a' : '#14b143';
                        }
                    }
                }
            ]
        };

        // 4. 设置配置并自适应
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    </script>
</body>
</html>
```

​
