# ts-pnp

ts-pnp 是一个让 TypeScript 兼容 Yarn Plug’n’Play (PnP) 模式的插件。

当使用 Yarn PnP（依赖不安装到 node\_modules，而是通过虚拟文件系统访问）时，TypeScript 默认无法识别模块路径。

ts-pnp 通过以下方式解决：

安装：

```
yarn add -D ts-pnp
```

配置：

在 tsconfig.json 中添加：

```javascript
{
  "compilerOptions": {
    "plugins": [{ "name": "ts-pnp" }]
  }
}
```

作用：

1. 让 TypeScript 正确解析 PnP 模式下的依赖路径。

2. 确保类型检查能找到依赖的 .d.ts 文件。

适用场景：使用 Yarn PnP 的 TypeScript 项目（如 Webpack、Vite 项目）。
