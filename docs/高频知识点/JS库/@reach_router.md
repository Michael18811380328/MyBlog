# @reach/router

react-router 的增强版，作者建议新项目使用 React Router v6，但现有项目仍可继续使用。

@reach/router 是一个轻量级、功能强大的 React 路由库，由 React 核心团队成员开发，专注于简单性、可访问性和性能。

它提供了声明式路由 API，支持嵌套路由、动态参数、导航和路由过渡动画，适合构建现代化的单页应用（SPA）。

### 1. GitHub 链接

* 仓库：<https://github.com/reach/router>

* 官方文档：<https://reach.tech/router>

### 2. 核心特性

#### （1）简单直观的 API

```javascript
import { Router } from "@reach/router";

function App() {
  return (
    <Router>
      <Home path="/" />
      <User path="/users/:id" />
      <NotFound default />
    </Router>
  );
}
```

#### （2）可访问性优先

* 自动管理焦点和页面标题

* 支持屏幕阅读器和键盘导航

* 符合 WCAG 标准

#### （3）嵌套路由

```javascript
function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Router>
        <Profile path="profile" />
        <Settings path="settings" />
      </Router>
    </div>
  );
}
```

#### （4）动态路由参数

```javascript
function User({ id }) {
  return <h1>User ID: {id}</h1>;
}
```

#### （5）导航与链接

```javascript
import { Link, navigate } from "@reach/router";

// 声明式导航
<Link to="/about">About</Link>

// 编程式导航
<button onClick={() => navigate("/contact")}>Contact</button>
```

#### （6）轻量级

压缩后仅 5KB，无额外依赖

### 3. 与 React Router 的对比

| 特性     | @reach/router | React Router v6 |
| ------ | ------------- | --------------- |
| 体积     | 5KB           | \~12KB          |
| API 风格 | 更简洁，声明式       | 功能丰富，配置式        |
| 可访问性   | 内置支持          | 需要额外配置          |
| 生态系统   | 较小            | 庞大（官方维护）        |
| 适用场景   | 中小型应用、注重可访问性  | 大型应用、复杂路由需求     |

### 4. 核心组件与 Hooks

#### （1）Router

* 路由容器，包裹所有路由组件

#### （2）Link

* 声明式导航链接，替代 \<a> 标签

#### （3）useLocation

* 获取当前 URL 信息

```javascript
const { pathname, search, hash } = useLocation();
```

#### （4）useNavigate

* 编程式导航（替代 navigate 函数）

```javascript
const navigate = useNavigate();
navigate("/dashboard");
```

#### （5）useMatch

* 检查当前 URL 是否匹配特定路径

```javascript
const match = useMatch("/users/:id");
```

### 5. 示例应用

```javascript
import { Router, Link, useParams } from "@reach/router";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Router>
        <Home path="/" />
        <UsersList path="/users" />
        <UserProfile path="/users/:id" />
      </Router>
    </div>
  );
}

function UserProfile() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
```

### 6. 安装与使用

```
npm install @reach/router
```

### 7. 注意事项

1. 不再积极维护：作者建议新项目使用 React Router v6，但现有项目仍可继续使用。

2. 缺少部分高级特性：如路由懒加载、过渡动画需手动实现。

3. 社区支持有限：相比 React Router，插件和教程较少。

### 8. 总结

@reach/router 是一个轻量、易用且专注于可访问性的 React 路由解决方案，适合追求简单性和性能的项目。

如果你需要一个易于上手的路由库，同时重视无障碍功能，@reach/router 是理想选择。

对于大型复杂应用，推荐使用 React Router 以获得更全面的功能支持。
