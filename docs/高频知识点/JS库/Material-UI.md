# Material-UI

基于 Google Material Design 的 React **组件库**。

* 主官网：<https://mui.com/>（最新版，原 Material-UI v5+ 统一品牌为 MUI）

* 中文文档（社区维护，更易上手）：<https://mui.com/zh/>

* GitHub 仓库：<https://github.com/mui/material-ui>

安装

```text
# 安装 MUI 核心包 + 图标包 + 字体（按需）
npm install @mui/material @emotion/react @emotion/styled

# 可选：安装 MUI 图标（Material Icons）
npm install @mui/icons-material

# 可选：安装 Roboto 字体（Material Design 推荐字体）
npm install @fontsource/roboto
```

​

#### 关键组件解析

| 组件                   | 作用                                                |
| -------------------- | ------------------------------------------------- |
| `ThemeProvider`      | 主题提供者，包裹整个应用以生效自定义主题                              |
| `createTheme`        | 创建自定义主题，可覆盖调色板、字体、间距等                             |
| `Container`          | 响应式容器，自动适配屏幕宽度，支持 `maxWidth` 配置                   |
| `Card`/`CardContent` | 卡片组件，用于分组内容，提升视觉层次                                |
| `TextField`          | 表单输入框，支持 `variant`（轮廓 / 填充 / 标准）、校验等              |
| `Button`             | 按钮组件，支持 `variant`（contained/outlined/text）、图标、禁用等 |
| `Grid`               | 网格布局，基于 Flex 实现，`xs/sm/md` 适配不同屏幕                 |
| `Typography`         | 排版组件，提供 h1-h6、body 等预设样式，统一文字规范                   |

使用

```javascript
import React, { useState } from 'react';
// 引入 MUI 核心组件

import { 
  Button, Card, CardContent, Container, 
  TextField, Typography, Box, ThemeProvider, 
  createTheme, Grid, Alert 
} from '@mui/material';

// 引入 MUI 图标
import AddCircleIcon from '@mui/icons-material/AddCircle';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// 1. 自定义主题（覆盖默认颜色）
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // 主色调
    },
    secondary: {
      main: '#dc004e', // 次要色调
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // 字体
  },
});

function App() {
  // 2. 状态管理（表单输入）
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  // 3. 按钮点击事件
  const handleSubmit = () => {
    if (inputValue) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    // 4. 应用自定义主题
    <ThemeProvider theme={customTheme}>
      {/* 容器：居中 + 内边距 */}
      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        {/* 标题 */}
        <Typography variant="h4" align="center" gutterBottom>
          MUI 基础案例
        </Typography>

        {/* 卡片组件 */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            {/* 网格布局：一行两列 */}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={8}>
                {/* 文本输入框 */}
                <TextField
                  label="输入内容"
                  variant="outlined"
                  fullWidth
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="请输入任意内容"
                />
              </Grid>
              <Grid item xs={4}>
                {/* 按钮（带图标） */}
                <Button
                  variant="contained" // 填充样式
                  color="primary" // 主色调
                  fullWidth
                  startIcon={<AddCircleIcon />} // 左侧图标
                  onClick={handleSubmit}
                >
                  提交
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* 提示框（条件显示） */}
        {showAlert && (
          <Alert severity="success" sx={{ mb: 2 }}>
            提交成功！你输入的内容是：{inputValue}
          </Alert>
        )}

        {/* 不同样式的按钮示例 */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button variant="outlined" color="secondary">
            轮廓按钮
          </Button>
          <Button variant="text">文本按钮</Button>
          <Button disabled>禁用按钮</Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
```

​
