# univer

Univer 是由 DreamNum 公司开发的**开源办公套件引擎**，核心聚焦于电子表格（Spreadsheets）的创建与编辑，同时还在积极开发文档（Doc）、演示文稿（Slide）等能力，旨在为开发者提供可扩展、可嵌入、高性能的办公套件解决方案。

有基础包和其他扩展包，支持不同类型的功能

```text
# 使用 npm
npm install @univerjs/core

# 文档相关
pnpm add @univerjs/docs @univerjs/docs-ui @univerjs/docs-hyper-link

# 绘图能力
pnpm add @univerjs/drawing @univerjs/drawing-ui

# 脚本能力（实验阶段，不建议生产环境使用）
pnpm add @univerjs/uniscript

# 网络请求
pnpm add @univerjs/network

# RPC 能力
pnpm add @univerjs/rpc
```

电子表格案例

```text
# 1. 创建并进入项目目录
mkdir univer-basic-demo && cd univer-basic-demo

# 2. 初始化 package.json
npm init -y

# 3. 安装核心依赖（以 pnpm 为例，npm/yarn 同理）
pnpm add @univerjs/core @univerjs/sheets @univerjs/sheets-ui @univerjs/ui @univerjs/engine-render
```

前端代码

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Univer 基础案例</title>
    <!-- 引入 Univer 样式（核心 + 表格 UI） -->
    <link rel="stylesheet" href="node_modules/@univerjs/core/lib/index.css">
    <link rel="stylesheet" href="node_modules/@univerjs/ui/lib/index.css">
    <link rel="stylesheet" href="node_modules/@univerjs/sheets-ui/lib/index.css">
    <style>
        /* 容器样式 */
        #univer-container {
            width: 100vw;
            height: 100vh;
            border: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div id="univer-container"></div>

    <!-- 引入编译后的 JS（ESModule 方式） -->
    <script type="module" src="./index.js"></script>
</body>
</html>
```

逻辑

```javascript
import { FUniver } from '@univerjs/core/facade';
import { createUniverSheets } from '@univerjs/sheets';
import { UniverSheetsUIPlugin } from '@univerjs/sheets-ui';
import { UniverUIPlugin } from '@univerjs/ui';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';

// 1. 初始化 Univer 实例
const univer = FUniver.newInstance();

// 2. 注册核心插件（渲染引擎 + UI + 表格）
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(createUniverSheets());

// 3. 创建工作簿（参数为空则创建默认空白表格）
const workbook = univer.createWorkbook({});

// 获取激活的工作表
const worksheet = workbook.getActiveSheet();

// 4. 基础操作：单元格赋值 + 公式计算
async function initSheetData() {
    // 4.1 给 A1 单元格赋值（数字）
    const a1 = worksheet.getRange('A1');
    await a1.setValue({ v: 100 });

    // 4.2 给 B1 单元格赋值（文本）
    const b1 = worksheet.getRange('B1');
    await b1.setValue({ v: '基础案例' });

    // 4.3 给 C1 单元格设置公式（SUM(A1 * 2)）
    const c1 = worksheet.getRange('C1');
    await c1.setValue({ f: '=SUM(A1 * 2)' });

    // 4.4 隐藏第 2 行（演示行列隐藏功能）
    worksheet.hideRows([{ startRow: 1, endRow: 1 }]);

    // 4.5 打印 C1 单元格的计算结果（控制台）
    console.log('C1 公式计算结果：', c1.getCellData()?.v); // 输出：200
}

// 5. 将表格挂载到 DOM 容器
univer.renderTo(document.getElementById('univer-container'));

// 6. 执行初始化数据逻辑
initSheetData().catch(err => console.error('初始化失败：', err));
```

​
