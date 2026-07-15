# MyBlog

这是我的个人博客，内容仍然与 SeaTable 同步，但站点生成器已经切换为 Hugo。

最近同步时间：2026 年 6 月

层级说明：SeaTable 中表格、子表、行，分别对应 Hugo 里的目录、子目录和文章文件。

## 目录结构

```text
MyBlog/
├─ hugo.toml            # Hugo 站点配置
├─ docs/                # Hugo 内容目录，直接放 markdown
│  ├─ _index.md         # 首页内容
│  ├─ 经济类学习笔记/    # Section 目录
│  ├─ 网课学习笔记/
│  ├─ 计算机学习笔记-归档/
│  └─ 高频知识点/
├─ layouts/             # 自定义主题模板
│  ├─ _default/
│  └─ partials/
├─ static/              # 静态资源目录，当前可选
└─ README.md
```

## 构建

macOS 安装 Hugo：

```bash
brew install hugo
```

安装完成后可检查版本：

```bash
hugo version
```

本地开发预览：

```bash
hugo server
```

生成静态站点：

```bash
hugo
```

构建产物默认输出到 `public/`。

## 部署

Hugo 构建完成后，把 `public/` 目录里的静态文件部署到任意静态站点托管服务即可，例如：

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
- 服务器上的 Nginx / Caddy

如果是手动部署，一般流程是：

1. 执行 `hugo`
2. 将 `public/` 上传到目标服务器或静态托管平台
3. 确保站点根路径与 `hugo.toml` 中的 `baseURL` 保持一致

说明：当前仓库保留原有 markdown 内容结构，Hugo 会直接读取 `docs/` 下的文章并生成静态站点。

导航说明：`高频知识点/` 采用二级导航，首页只展示大类，进入后再查看该类下的具体文章，避免一次性展开过多内容。
