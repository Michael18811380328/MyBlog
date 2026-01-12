# React Router

React 路由管理库

[https://reactrouter.com/](https://reactrouter.com/ "https://reactrouter.com/")

[https://github.com/remix-run/react-router](https://github.com/remix-run/react-router "https://github.com/remix-run/react-router")

```javascript
import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("about", "./about.tsx"),

  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("register", "./auth/register.tsx"),
  ]),

  ...prefix("concerts", [
    index("./concerts/home.tsx"),
    route(":city", "./concerts/city.tsx"),
    route("trending", "./concerts/trending.tsx"),
  ]),
] satisfies RouteConfig;

```

​
