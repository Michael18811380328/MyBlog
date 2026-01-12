# Tailwind CSS

[https://tailwindcss.com/](https://tailwindcss.com/ "https://tailwindcss.com/")

[https://github.com/tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss "https://github.com/tailwindlabs/tailwindcss")

实用优先的 CSS 框架，可自定义组件。

通过 thousands 个原子化工具类（如 `flex`、`text-red-500`、`p-4`），让开发者直接在 HTML 中组合类名快速构建自定义界面，无需编写大量自定义 CSS。

```text
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p  # 生成 tailwind.config.js 和 postcss.config.js
```

配置 tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // 扫描所有 src 下的文件
  theme: {
    extend: {}, // 扩展主题（如加自定义颜色、字体）
  },
  plugins: [],
};
```

适合 AI 批量处理的样式表，不适合对细节要求特别多的样式（5px等特殊值）
