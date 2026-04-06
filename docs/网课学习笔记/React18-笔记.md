# React18
### 介绍 React入门到实战导学课程
视频来源：黑马程序员 前端React18入门到实战视频教程

[https://www.bilibili.com/video/BV1ZB4y1Z7o8](https://www.bilibili.com/video/BV1ZB4y1Z7o8 "https://www.bilibili.com/video/BV1ZB4y1Z7o8")

全部12天课程，录屏12\*8 = 96小时

目的：学习新语法新功能，已经学会的直接跳过

​

尝试用 AI 整理知识点，多实践


### 第一天 React 简单介绍
React 基本概念，JSX，状态管理，传参


### 第二天 表单 props state hooks
核心是熟练使用 useContext 和 自定义 hooks, 例如手写 useFetch useComments useStations


### Day3-01.Redux快速上手
#### 核心知识点

1. Redux 核心概念：Store（存储状态）、Action（描述行为）、Reducer（处理状态更新）

2. 核心流程：`dispatch(action) → reducer → 更新store → 订阅获取新状态`

3. 三大原则：单一数据源、状态只读、使用纯函数修改

#### 精简代码案例

```javascript
// 1. 定义 reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}


// 2. 创建 store
import { createStore } from 'redux';
const store = createStore(counterReducer);


// 3. 订阅状态变化
store.subscribe(() => console.log('当前状态：', store.getState()));


// 4. 分发 action
store.dispatch({ type: 'INCREMENT' }); // count: 1
store.dispatch({ type: 'DECREMENT' }); // count: 0
```

​


### Day3-02.Redux与React-环境准备
#### 核心知识点

1. 安装依赖：`redux react-redux @reduxjs/toolkit`（简化 Redux 写法）

2. 核心 API：`Provider`（提供 store）、`useSelector`（获取状态）、`useDispatch`（分发 action）

#### 精简代码案例

```text
npm install redux react-redux @reduxjs/toolkit
```

代码

```javascript
// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// 创建 store（RTK 简化版）
export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});



// src/index.js
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

​


### Day3-03.Redux与React-实现counter
#### 核心知识点

1. 用 RTK(redux-toolkit) 创建 slice（整合 action 和 reducer）

2. 组件中通过 `useSelector`/`useDispatch` 操作状态

#### 精简代码案例

```javascript
// src/store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1 },
    decrement: (state) => { state.count -= 1 }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;




// src/App.js
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';

function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

​


### Day3-04.Redux与React-提交action传参
#### 核心知识点

1. Action 传参：reducer 中通过 `action.payload` 获取参数

2. RTK 中直接在 reducer 接收 payload

#### 精简代码案例

```javascript
// src/store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    incrementByAmount: (state, action) => {
      state.count += action.payload; // 接收参数
    }
  }
});

export const { incrementByAmount } = counterSlice.actions;



// src/App.js
function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  );
}
```

​


### Day3-05.Redux与React-异步状态操作
#### 核心知识点

1. RTK `createAsyncThunk` 处理异步逻辑（请求数据）

2. 异步 action 三种状态：pending（加载中）、fulfilled（成功）、rejected（失败）

#### 精简代码案例

```javascript
// src/store/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 异步 action
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return res.json();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => { state.loading = true })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;



// 组件使用
function User() {
  const { data, loading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(fetchUser())}>获取用户</button>
      {loading && <p>加载中...</p>}
      {error && <p>{error}</p>}
      {data && <p>用户名：{data.name}</p>}
    </div>
  );
}
```

​


### Day3-06.Redux调试-devtools
#### 核心知识点

1. Redux DevTools 配置：RTK 已默认集成，无需额外配置

2. 调试功能：查看状态历史、回放 action、修改状态

#### 精简代码案例

```javascript
// src/store/index.js（RTK 自动集成 DevTools）
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: require('./counterSlice').default,
    user: require('./userSlice').default
  }
  // 无需手动配置，RTK 自动启用 DevTools
});

// 使用说明：
// 1. 浏览器安装 Redux DevTools 扩展
// 2. 打开开发者工具 → Redux 面板
// 3. 可查看 action 记录、state 变化、手动 dispatch action
```

​


### Day3-07.美团案例-案例演示和环境准备
#### 核心知识点

1. 案例功能：分类切换、商品列表、购物车、数量统计

2. 环境准备：创建项目、安装依赖、准备模拟数据

#### 精简代码案例

```text
npx create-react-app meituan-demo
cd meituan-demo
npm install react-redux @reduxjs/toolkit classnames
```

基本数据

```javascript
// src/mock/data.js（模拟数据）
export const categories = [
  { id: 1, name: '热销' },
  { id: 2, name: '饮品' },
  { id: 3, name: '主食' },
  { id: 4, name: '小吃' }
];

export const goods = [
  { id: 1, name: '奶茶', price: 18, categoryId: 2, count: 0 },
  { id: 2, name: '炒饭', price: 22, categoryId: 3, count: 0 },
  { id: 3, name: '炸鸡', price: 15, categoryId: 4, count: 0 },
  { id: 4, name: '可乐', price: 5, categoryId: 2, count: 0 }
];
```

​


### Day3-08.美团案例-分类和商品列表渲染
#### 核心知识点

1. Redux 存储分类和商品数据

2. 基础列表渲染：分类导航 + 商品列表

#### 精简代码案例

```javascript
// src/store/meituanSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { categories, goods } from '../mock/data';

export const meituanSlice = createSlice({
  name: 'meituan',
  initialState: {
    categories,
    goods,
    activeCategoryId: 1
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategoryId = action.payload;
    }
  }
});

export const { setActiveCategory } = meituanSlice.actions;
export default meituanSlice.reducer;


// src/components/Category.js
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../store/meituanSlice';

export default function Category() {
  const { categories, activeCategoryId } = useSelector(state => state.meituan);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', padding: '10px', borderBottom: '1px solid #eee' }}>
      {categories.map(item => (
        <button
          key={item.id}
          onClick={() => dispatch(setActiveCategory(item.id))}
          style={{
            padding: '8px 16px',
            marginRight: '10px',
            border: activeCategoryId === item.id ? '1px solid red' : '1px solid #ccc'
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

// src/components/GoodsList.js
import { useSelector } from 'react-redux';

export default function GoodsList() {
  const { goods, activeCategoryId } = useSelector(state => state.meituan);
  const filteredGoods = goods.filter(item => item.categoryId === activeCategoryId);

  return (
    <div style={{ padding: '10px' }}>
      {filteredGoods.map(item => (
        <div key={item.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          <h4>{item.name}</h4>
          <p>¥{item.price}</p>
        </div>
      ))}
    </div>
  );
}
```

​


### Day3-09.美团案例-点击分类激活交互实现
#### 核心知识点

1. 基于 Redux 状态控制分类激活样式

2. 点击分类更新 activeCategoryId

#### 精简代码案例

```javascript
// 核心逻辑已在 Day3-08 的 Category 组件中实现
// 补充样式优化（classnames 简化）
import classNames from 'classnames';

// 修改 Category 组件中按钮样式
<button
  key={item.id}
  onClick={() => dispatch(setActiveCategory(item.id))}
  className={classNames('category-btn', {
    'active': activeCategoryId === item.id
  })}
  style={{
    padding: '8px 16px',
    marginRight: '10px'
  }}
>
  {item.name}
</button>

// 新增样式
<style jsx global>{`
  .category-btn { border: 1px solid #ccc; }
  .category-btn.active { border: 1px solid red; background: #fff0f0; }
`}</style>
```

​


### Day3-10.美团案例-商品列表切换显示
#### 核心知识点

1. 根据 activeCategoryId 过滤商品列表

2. 无数据时显示空提示

#### 精简代码案例

```javascript
// 修改 GoodsList 组件
export default function GoodsList() {
  const { goods, activeCategoryId } = useSelector(state => state.meituan);
  const filteredGoods = goods.filter(item => item.categoryId === activeCategoryId);

  if (filteredGoods.length === 0) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>暂无商品</div>;
  }

  return (
    <div style={{ padding: '10px' }}>
      {filteredGoods.map(item => (
        <div key={item.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          <h4>{item.name}</h4>
          <p>¥{item.price}</p>
          <button>加入购物车</button>
        </div>
      ))}
    </div>
  );
}
```

​


### Day3-11.美团案例-添加购物车实现
#### 核心知识点

1. Redux 中添加购物车相关 reducer

2. 实现商品数量增减逻辑

#### 精简代码案例

```javascript
// src/store/meituanSlice.js 新增 reducer
reducers: {
  setActiveCategory: (state, action) => {
    state.activeCategoryId = action.payload;
  },
  addToCart: (state, action) => {
    const goods = state.goods.find(item => item.id === action.payload);
    if (goods) goods.count += 1;
  },
  minusFromCart: (state, action) => {
    const goods = state.goods.find(item => item.id === action.payload);
    if (goods && goods.count > 0) goods.count -= 1;
  }
}

export const { setActiveCategory, addToCart, minusFromCart } = meituanSlice.actions;

// 修改 GoodsList 组件
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/meituanSlice';

export default function GoodsList() {
  const dispatch = useDispatch();
  // ... 其他逻辑

  return (
    <div style={{ padding: '10px' }}>
      {filteredGoods.map(item => (
        <div key={item.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          <h4>{item.name}</h4>
          <p>¥{item.price}</p>
          <div>
            <button onClick={() => dispatch(minusFromCart(item.id))}>-</button>
            <span>{item.count}</span>
            <button onClick={() => dispatch(addToCart(item.id))}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}
```

​


### Day3-12.美团案例-统计区域功能实现
#### 核心知识点

1. 计算购物车总数量和总金额

2. 基于 Redux 状态派生计算属性

#### 精简代码案例

```javascript
// src/components/Total.js
import { useSelector } from 'react-redux';

export default function Total() {
  const { goods } = useSelector(state => state.meituan);
  // 计算总数量和总金额
  const totalCount = goods.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = goods.reduce((sum, item) => sum + (item.count * item.price), 0);

  return (
    <div style={{ 
      padding: '10px', 
      borderTop: '1px solid #eee',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      background: 'white'
    }}>
      <span>总计：{totalCount}件 ￥{totalPrice.toFixed(2)}</span>
      <button style={{ 
        marginLeft: '20px', 
        padding: '8px 16px', 
        background: 'red', 
        color: 'white',
        border: 'none'
      }}>
        去结算
      </button>
    </div>
  );
}
```

​


### Day3-13.美团案例-购物车列表功能实现
#### 核心知识点

1. 筛选出购物车中有数量的商品

2. 渲染购物车列表，支持数量修改

#### 精简代码案例

```javascript
// src/components/CartList.js
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, minusFromCart } from '../store/meituanSlice';

export default function CartList() {
  const { goods } = useSelector(state => state.meituan);
  const dispatch = useDispatch();
  // 筛选有数量的商品
  const cartGoods = goods.filter(item => item.count > 0);

  if (cartGoods.length === 0) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>购物车为空</div>;
  }

  return (
    <div style={{ padding: '10px' }}>
      {cartGoods.map(item => (
        <div key={item.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          <h4>{item.name} ¥{item.price}</h4>
          <div>
            <button onClick={() => dispatch(minusFromCart(item.id))}>-</button>
            <span>{item.count}</span>
            <button onClick={() => dispatch(addToCart(item.id))}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}
```

​


### Day3-14.美团案例-控制购物车显示和隐藏
#### 核心知识点

1. Redux 新增购物车显隐状态

2. 点击购物车图标切换显隐

#### 精简代码案例

```javascript
// src/store/meituanSlice.js 新增状态和 reducer
initialState: {
  // ... 原有状态
  cartVisible: false
},
reducers: {
  // ... 原有 reducer
  toggleCart: (state) => {
    state.cartVisible = !state.cartVisible;
  }
}

export const { toggleCart } = meituanSlice.actions;

// src/components/CartToggle.js
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/meituanSlice';
import CartList from './CartList';

export default function CartToggle() {
  const { cartVisible } = useSelector(state => state.meituan);
  const dispatch = useDispatch();

  return (
    <div>
      <button 
        onClick={() => dispatch(toggleCart())}
        style={{ 
          position: 'fixed',
          bottom: '60px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'red',
          color: 'white',
          border: 'none'
        }}
      >
        购物车
      </button>
      
      {cartVisible && (
        <div style={{ 
          position: 'fixed',
          bottom: '120px',
          right: '20px',
          width: '300px',
          background: 'white',
          border: '1px solid #eee',
          borderRadius: '8px'
        }}>
          <CartList />
        </div>
      )}
    </div>
  );
}
```

#### 总结

1. **Redux 核心**：RTK 简化 Redux 开发，核心是 slice（整合 action/reducer）、`useSelector`/`useDispatch` 操作状态，异步逻辑用 `createAsyncThunk`；

2. **美团案例**：核心是基于 Redux 管理分类、商品、购物车状态，实现分类切换、商品增减、购物车显隐等交互，状态驱动视图更新；

3. **关键技巧**：通过 reduce 计算购物车总计，利用过滤实现分类商品列表和购物车列表渲染，状态派生属性提升代码复用性。


### Day4-01.ReactRouter-快速开始
#### 核心知识点

1. React Router 6+ 核心依赖：`react-router-dom`

2. 核心组件：`BrowserRouter`、`Routes`、`Route`、`Link`

3. 基础路由配置：路径与组件映射

#### 精简代码案例

npm install react-router-dom

```javascript
// src/App.js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// 页面组件
const Home = () => <div>首页</div>;
const About = () => <div>关于我们</div>;

function App() {
  return (
    <BrowserRouter>
      {/* 导航链接 */}
      <nav>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
      </nav>
      {/* 路由匹配 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

​


### Day4-02.ReactRouter-抽象路由模块
#### 核心知识点

1. 路由模块化：抽离路由配置数组，统一管理

2. 动态生成路由规则，提升可维护性

#### 精简代码案例

```javascript
// src/router/index.js（路由模块）
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';

// 路由配置数组
export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> }
];

// 路由组件
export default function RouterView() {
  return (
    <Routes>
      {routes.map((item, index) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
}




// src/App.js
import { BrowserRouter } from 'react-router-dom';
import RouterView from './router';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
      </nav>
      <RouterView />
    </BrowserRouter>
  );
}
```

​


### Day4-03.ReactRouter-路由导航跳转
#### 核心知识点

1. 声明式导航：`Link`/`NavLink`（带激活样式）

2. 编程式导航：`useNavigate` 钩子实现跳转

#### 精简代码案例

```javascript
// 1. 声明式导航（NavLink 激活样式）
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        首页
      </NavLink>
      <NavLink 
        to="/about" 
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black', marginLeft: '10px' })}
      >
        关于
      </NavLink>
    </nav>
  );
}


// 2. 编程式导航
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>首页</h1>
      <button onClick={() => navigate('/about')}>跳转到关于页</button>
      <button onClick={() => navigate(-1)}>返回上一页</button>
    </div>
  );
}
```

​


### Day4-04.ReactRouter-导航跳转传参
#### 核心知识点

1. 路径参数：配置动态路由 `/:id`，通过 `useParams` 获取

2. 搜索参数：`?id=123`，通过 `useSearchParams` 获取

3. state 参数：隐式传参，存储在历史记录中

#### 精简代码案例

```javascript
// 1. 路径参数
// 路由配置
<Route path="/detail/:id" element={<Detail />} />

// 跳转
<button onClick={() => navigate('/detail/1001')}>查看详情</button>

// 获取参数
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  return <div>详情页 ID：{id}</div>;
}



// 2. 搜索参数
// 跳转
<button onClick={() => navigate('/detail?id=1001&name=测试')}>查看详情</button>

// 获取参数
import { useSearchParams } from 'react-router-dom';

function Detail() {
  const [searchParams] = useSearchParams();
  return (
    <div>
      ID：{searchParams.get('id')}
      名称：{searchParams.get('name')}
    </div>
  );
}



// 3. state 参数
// 跳转
<button onClick={() => navigate('/detail', { 
  state: { id: 1001, name: '测试' } 
})}>查看详情</button>

// 获取参数
import { useLocation } from 'react-router-dom';
function Detail() {
  const location = useLocation();
  const { id, name } = location.state || {};
  return <div>ID：{id} 名称：{name}</div>;
}
```

​


### Day4-05.ReactRouter-嵌套路由配置
#### 核心知识点

1. 嵌套路由：父路由组件中使用 `Outlet` 渲染子路由

2. 路由配置：通过 `children` 配置子路由规则

#### 精简代码案例

```javascript
// 路由配置
const routes = [
  {
    path: '/user',
    element: <UserLayout />,
    children: [
      { path: 'profile', element: <UserProfile /> },
      { path: 'order', element: <UserOrder /> }
    ]
  }
];

// 父布局组件（UserLayout.js）
import { Outlet, Link } from 'react-router-dom';

export default function UserLayout() {
  return (
    <div style={{ display: 'flex' }}>
      {/* 侧边导航 */}
      <div style={{ width: '200px', borderRight: '1px solid #eee' }}>
        <Link to="/user/profile">个人中心</Link>
        <Link to="/user/order" style={{ display: 'block', marginTop: '10px' }}>我的订单</Link>
      </div>
      {/* 子路由出口 */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
}

// 子组件
const UserProfile = () => <div>个人中心</div>;
const UserOrder = () => <div>我的订单</div>;
```

​


### Day4-06.ReactRouter-默认二级路由配置
#### 核心知识点

1. 默认路由：使用 `index` 配置默认子路由

2. 访问父路由时自动渲染默认子路由

#### 精简代码案例

```javascript
// 路由配置
const routes = [
  {
    path: '/user',
    element: <UserLayout />,
    children: [
      { index: true, element: <UserProfile /> }, // 默认路由
      { path: 'order', element: <UserOrder /> }
    ]
  }
];

// 效果：访问 /user 时，自动渲染 UserProfile 组件
// 无需再配置 <Route path="/user" element={<UserProfile />} />
```

​


### Day4-07.ReactRouter-404路由配置
#### 核心知识点

1. 404 路由：使用 `path="*"` 匹配所有未定义的路由

2. 放置在路由配置最后，确保优先匹配精准路由

#### 精简代码案例

```javascript
// 路由配置
const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '*', element: <NotFound /> } // 404 路由
];

// 404 组件
function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 页面不存在</h1>
      <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
        返回首页
      </button>
    </div>
  );
}
```

​


### Day4-08.ReactRouter-2种路由模式
#### 核心知识点

1. Hash 模式：`HashRouter`，路径带 `#`，兼容老浏览器

2. History 模式：`BrowserRouter`，路径无 `#`，需要后端配置

#### 精简代码案例

​

```javascript
// 1. Hash 模式（HashRouter）
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

// 2. History 模式（BrowserRouter，默认）
import { BrowserRouter } from 'react-router-dom';

// 后端配置（Nginx 示例）
// location / {
//   try_files $uri $uri/ /index.html;
// }
```

​


### Day4-09.记账本-功能演示和环境创建
#### 核心知识点

1. 功能：账单列表、添加账单、统计分析、TabBar 切换

2. 环境创建：React 项目 + 依赖安装（antd、react-router-dom、redux 等）

#### 精简代码案例

```text
# 创建项目
npx create-react-app bill-book
cd bill-book

# 安装依赖
npm install antd react-router-dom @reduxjs/toolkit react-redux less less-loader
```

​


### Day4-10.记账本-配置别名路径@
#### 核心知识点

1. 配置 `@` 指向 `src` 目录，简化路径导入

2. 使用 `craco` 覆盖 CRA 配置（无需 eject）

#### 精简代码案例

```text
# 安装 craco
npm install @craco/craco --save-dev
```

```javascript
// craco.config.js（项目根目录）
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  style: {
    less: {
      loaderOptions: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
};

// 修改 package.json 脚本
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}

// 使用示例
import Home from '@/pages/Home'; // 替代 ../../pages/Home
```

​


### Day4-11.记账本-数据Mock实现
#### 核心知识点

1. 模拟账单数据：收入/支出、分类、金额、时间等字段

2. 抽离 Mock 数据模块，方便复用

#### 精简代码案例

```javascript
// src/mock/bill.js
export const billList = [
  {
    id: 1,
    type: 'expense', // expense:支出 income:收入
    category: '餐饮',
    amount: 35.5,
    date: '2026-03-15',
    remark: '午餐'
  },
  {
    id: 2,
    type: 'income',
    category: '工资',
    amount: 5000,
    date: '2026-03-10',
    remark: '3月工资'
  }
];

// 分类数据
export const categoryList = [
  { type: 'expense', list: ['餐饮', '交通', '购物', '娱乐'] },
  { type: 'income', list: ['工资', '兼职', '投资', '礼金'] }
];
```

​


### Day4-12.记账本-整体路由设计
#### 核心知识点

1. 路由结构：首页（账单列表）、添加账单、统计分析

2. 嵌套路由 + TabBar 底部导航

#### 精简代码案例

​

```javascript
// src/router/index.js
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from '@/pages/Home';
import AddBill from '@/pages/AddBill';
import Statistic from '@/pages/Statistic';
import TabBar from '@/components/TabBar';

// 带 TabBar 的布局
const Layout = () => (
  <div>
    <div>
      <Outlet />
    </div>
    <TabBar />
  </div>
);

// 路由配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // 默认首页
      { path: 'add', element: <AddBill /> },
      { path: 'statistic', element: <Statistic /> }
    ]
  },
  { path: '*', element: <div>404</div> }
]);

// src/App.js
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return <RouterProvider router={router} />;
}

```

​


### Day4-13.记账本-antD主题色定制
#### 核心知识点

1. 定制 Ant Design 主题色（主色、辅助色）

2. 通过 less 变量覆盖默认样式

#### 精简代码案例

```javascript
// src/assets/styles/antd.less
@primary-color: #1890ff; // 主色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #f5222d; // 错误色

// 引入 antd 核心样式
@import '~antd/dist/antd.less';

// src/App.js 引入自定义样式
import '@/assets/styles/antd.less';

// craco.config.js 确保 less 配置生效（已在 Day4-10 配置）
```

​


### Day4-14.记账本-Redux管理账目列表
#### 核心知识点

1. RTK 创建账单 slice，管理账单列表、添加/删除账单

2. 组件中通过 `useSelector`/`useDispatch` 操作账单数据

#### 精简代码案例

```javascript
// src/store/billSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { billList } from '@/mock/bill';

export const billSlice = createSlice({
  name: 'bill',
  initialState: {
    list: billList // 初始账单数据
  },
  reducers: {
    // 添加账单
    addBill: (state, action) => {
      state.list.unshift({
        id: Date.now(), // 临时 ID
        ...action.payload
      });
    },
    // 删除账单
    deleteBill: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    }
  }
});

export const { addBill, deleteBill } = billSlice.actions;
export default billSlice.reducer;

// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import billReducer from './billSlice';

export const store = configureStore({
  reducer: {
    bill: billReducer
  }
});

// src/index.js 注入 store
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// 组件使用示例（Home.js）
import { useSelector, useDispatch } from 'react-redux';
import { deleteBill } from '@/store/billSlice';

function Home() {
  const { list } = useSelector(state => state.bill);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>账单列表</h1>
      {list.map(item => (
        <div key={item.id} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
          <div>类型：{item.type === 'expense' ? '支出' : '收入'}</div>
          <div>金额：{item.amount} 元</div>
          <button onClick={() => dispatch(deleteBill(item.id))}>删除</button>
        </div>
      ))}
    </div>
  );
}
```

​


### Day4-15.记账本-TabBar功能实现
#### 核心知识点

1. TabBar 组件：底部导航，配合 `NavLink` 实现路由跳转

2. 激活样式：根据路由自动高亮当前 Tab

#### 精简代码案例

```javascript
// src/components/TabBar.js
import { NavLink } from 'react-router-dom';
import { HomeOutlined, PlusOutlined, BarChartOutlined } from '@ant-design/icons';

export default function TabBar() {
  // 导航配置
  const tabs = [
    { path: '/', label: '首页', icon: <HomeOutlined /> },
    { path: '/add', label: '添加', icon: <PlusOutlined /> },
    { path: '/statistic', label: '统计', icon: <BarChartOutlined /> }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      height: '50px', 
      borderTop: '1px solid #eee',
      alignItems: 'center',
      justifyContent: 'space-around',
      background: 'white'
    }}>
      {tabs.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: isActive ? '#1890ff' : '#666'
          })}
        >
          {item.icon}
          <span style={{ fontSize: '12px', marginTop: '4px' }}>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
```

#### 总结

1. **React Router 核心**：6+ 版本用 `Routes`/`Route` 替代旧版 `Switch`，嵌套路由依赖 `Outlet`，导航分声明式（Link/NavLink）和编程式（useNavigate），传参支持路径参数、搜索参数、state 参数；

2. **记账本项目**：核心是路由模块化设计 + Redux 管理账单数据 + AntD 组件定制，TabBar 结合 NavLink 实现底部导航，别名路径简化导入；

3. **关键技巧**：404 路由放最后，默认子路由用 `index` 配置，Hash/History 模式按需选择，Redux 抽离账单增删逻辑提升复用性。


### 第五天 案例-记账本
需求：记账本项目的核心功能完善，包括月度账单统计、账单列表交互、新增账单功能

技术：Ant-design UI 库，react-redux 状态管理库

#### 总结

1. **月度账单统计**：核心是通过 `reduce` 实现账单按月份/日期分组，结合 `dayjs` 处理日期格式化，监听月份切换自动重新计算统计数据，展开/收起状态控制明细显示；

2. **账单列表优化**：封装类型图标组件提升复用性，区分收支样式增强视觉体验，按日期排序保证展示逻辑清晰；

3. **新增账单功能**：基于 AntD Form 实现表单联动（类型→分类），完善校验规则，提交后分发 Redux action 更新数据，添加加载状态、提示信息等优化用户体验；

4. **关键技巧**：工具函数抽离数据处理逻辑，React Hooks 监听状态变化实现自动更新，表单重置和路由跳转提升操作流畅性。


### Day5-01.月度账单-统计区域-功能演示和结构搭建
#### 核心知识点

1. 统计区域功能：展示选中月份的总收入/总支出、收支差额

2. 结构搭建：时间选择区 + 数据统计卡片

#### 精简代码案例

```javascript
// src/pages/Statistic.js
import { useState } from 'react';
import { Card, Row, Col } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

export default function Statistic() {
  // 初始选中时间：当前月份
  const [selectedMonth, setSelectedMonth] = useState('2026-03');
  // 模拟统计数据
  const statData = {
    income: 5000, // 收入
    expense: 1200, // 支出
    balance: 3800 // 差额
  };

  return (
    <div >
      {/* 时间选择区 */}
      <div>
        <CalendarOutlined />
        <span>{selectedMonth}</span>
        <button >选择月份</button>
      </div>

      {/* 统计卡片区域 */}
      <Row gutter={16}>
        <Col span={8}>
          <Card title="总收入" bordered={false}>
            <span>¥{statData.income}</span>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="总支出" bordered={false}>
            <span>¥{statData.expense}</span>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="收支差额" bordered={false}>
            <span >¥{statData.balance}</span>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
```

​


### Day5-02.月度账单-统计区域-点击切换时间选择框
#### 核心知识点

1. 使用 AntD `DatePicker` 组件实现月份选择

2. 控制选择框显隐状态，点击按钮切换

#### 精简代码案例

```javascript
// src/pages/Statistic.js 改造
import { DatePicker } from 'antd';
import { useState } from 'react';
const { MonthPicker } = DatePicker;

export default function Statistic() {
  const [selectedMonth, setSelectedMonth] = useState('2026-03');
  const [showDatePicker, setShowDatePicker] = useState(false); // 选择框显隐

  return (
    <div>
      {/* 时间选择区 */}
      <div>
        <CalendarOutlined  />
        <span>{selectedMonth}</span>
        <button 

          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          选择月份
        </button>
        
        {/* 月份选择框 */}
        {showDatePicker && (
          <MonthPicker
            defaultValue={new Date('2026-03')}
            style={{ marginLeft: '10px' }}
            placeholder="选择月份"
          />
        )}
      </div>
      {/* 统计卡片... */}
    </div>
  );
}
```

​


### Day5-03.月度账单-统计区域-点击确定切换时间显示
#### 核心知识点

1. 监听 DatePicker 选择事件，格式化选中的月份

2. 隐藏选择框，更新显示的月份文本

#### 精简代码案例

```javascript
// src/pages/Statistic.js 改造
import dayjs from 'dayjs';

export default function Statistic() {
  const [selectedMonth, setSelectedMonth] = useState('2026-03');
  const [showDatePicker, setShowDatePicker] = useState(false);

  // 处理月份选择
  const handleMonthChange = (date) => {
    if (date) {
      // 格式化日期为 YYYY-MM
      const monthStr = dayjs(date).format('YYYY-MM');
      setSelectedMonth(monthStr);
      setShowDatePicker(false); // 隐藏选择框
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* 时间选择区 */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <CalendarOutlined style={{ marginRight: '8px' }} />
        <span>{selectedMonth}</span>
        <button 
          style={{ marginLeft: '10px' }}
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          选择月份
        </button>
        
        {showDatePicker && (
          <MonthPicker
            defaultValue={dayjs(selectedMonth)}
            style={{ marginLeft: '10px' }}
            onChange={handleMonthChange}
            onBlur={() => setShowDatePicker(false)} // 失焦隐藏
          />
        )}
      </div>
      {/* 统计卡片... */}
    </div>
  );
}
```

​


### Day5-04.月度账单-统计区域-数据按月分组实现
#### 核心知识点

1. 从 Redux 获取所有账单数据，按月份分组

2. 使用 `reduce` 实现数据分组，key 为 YYYY-MM

#### 精简代码案例

```javascript
// src/utils/billHelper.js（工具函数）
import dayjs from 'dayjs';

// 账单按月分组
export const groupBillByMonth = (billList) => {
  return billList.reduce((group, bill) => {
    // 提取账单日期的月份（YYYY-MM）
    const month = dayjs(bill.date).format('YYYY-MM');
    if (!group[month]) {
      group[month] = [];
    }
    group[month].push(bill);
    return group;
  }, {});
};

// 组件中使用
import { useSelector } from 'react-redux';
import { groupBillByMonth } from '@/utils/billHelper';

export default function Statistic() {
  // 获取所有账单
  const { list } = useSelector(state => state.bill);
  // 按月分组
  const billByMonth = groupBillByMonth(list);
  console.log('按月分组数据：', billByMonth); // { '2026-03': [...], '2026-02': [...] }
  
  // 其他逻辑...
}
```

​


### Day5-05.月度账单-统计区域-计算选择月份之后的统计数据
#### 核心知识点

1. 根据选中月份筛选账单，计算收入/支出/差额

2. 封装统计计算函数，复用逻辑

#### 精简代码案例

```javascript
// src/utils/billHelper.js 新增
// 计算月度统计数据
export const calcMonthStat = (billList, month) => {
  const monthBills = billList.filter(bill => dayjs(bill.date).format('YYYY-MM') === month);
  
  // 计算收入/支出
  const income = monthBills
    .filter(bill => bill.type === 'income')
    .reduce((sum, bill) => sum + bill.amount, 0);
  
  const expense = monthBills
    .filter(bill => bill.type === 'expense')
    .reduce((sum, bill) => sum + bill.amount, 0);
  
  return {
    income,
    expense,
    balance: income - expense
  };
};

// 组件中使用
import { calcMonthStat } from '@/utils/billHelper';

export default function Statistic() {
  const { list } = useSelector(state => state.bill);
  const [selectedMonth, setSelectedMonth] = useState('2026-03');
  
  // 计算选中月份的统计数据
  const statData = calcMonthStat(list, selectedMonth);
  
  // 统计卡片渲染 statData...
}
```

​


### Day5-06.月度账单-统计区域-初始化渲染统计数据
#### 核心知识点

1. 初始化时默认显示当前月份的统计数据

2. 监听 Redux 账单数据变化，自动重新计算

#### 精简代码案例

```javascript
// src/pages/Statistic.js 完整逻辑
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col, DatePicker } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { calcMonthStat } from '@/utils/billHelper';

const { MonthPicker } = DatePicker;

export default function Statistic() {
  // 初始化为当前月份
  const defaultMonth = dayjs().format('YYYY-MM');
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [statData, setStatData] = useState({ income: 0, expense: 0, balance: 0 });
  
  // 获取所有账单
  const { list } = useSelector(state => state.bill);

  // 监听月份/账单变化，重新计算统计数据
  useEffect(() => {
    setStatData(calcMonthStat(list, selectedMonth));
  }, [selectedMonth, list]);

  // 处理月份选择
  const handleMonthChange = (date) => {
    if (date) {
      const monthStr = dayjs(date).format('YYYY-MM');
      setSelectedMonth(monthStr);
      setShowDatePicker(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* 时间选择区 */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <CalendarOutlined style={{ marginRight: '8px' }} />
        <span>{selectedMonth}</span>
        <button 
          style={{ marginLeft: '10px' }}
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          选择月份
        </button>
        
        {showDatePicker && (
          <MonthPicker
            defaultValue={dayjs(selectedMonth)}
            style={{ marginLeft: '10px' }}
            onChange={handleMonthChange}
            onBlur={() => setShowDatePicker(false)}
          />
        )}
      </div>

      {/* 统计卡片 */}
      <Row gutter={16}>
        <Col span={8}>
          <Card title="总收入" bordered={false}>
            <span style={{ color: 'green', fontSize: '24px' }}>¥{statData.income.toFixed(2)}</span>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="总支出" bordered={false}>
            <span style={{ color: 'red', fontSize: '24px' }}>¥{statData.expense.toFixed(2)}</span>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="收支差额" bordered={false}>
            <span style={{ fontSize: '24px' }}>¥{statData.balance.toFixed(2)}</span>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
```

​


### Day5-07.月度账单-列表区域-单日统计列表实现
#### 核心知识点

1. 选中月份的账单按日期（日）分组

2. 计算单日的收入/支出合计

#### 精简代码案例

```javascript
// src/utils/billHelper.js 新增
// 按日期（日）分组
export const groupBillByDay = (billList, month) => {
  // 筛选当月账单
  const monthBills = billList.filter(bill => dayjs(bill.date).format('YYYY-MM') === month);
  
  // 按日分组
  const dayGroup = monthBills.reduce((group, bill) => {
    const day = dayjs(bill.date).format('DD');
    if (!group[day]) {
      group[day] = [];
    }
    group[day].push(bill);
    return group;
  }, {});

  // 计算单日统计
  return Object.entries(dayGroup).map(([day, bills]) => {
    const income = bills.filter(b => b.type === 'income').reduce((s, b) => s + b.amount, 0);
    const expense = bills.filter(b => b.type === 'expense').reduce((s, b) => s + b.amount, 0);
    return {
      day, // 日期（DD）
      bills, // 当日账单列表
      income,
      expense
    };
  }).sort((a, b) => a.day - b.day); // 按日期排序
};

// 组件中使用
import { groupBillByDay } from '@/utils/billHelper';

export default function Statistic() {
  // ... 原有逻辑
  
  const [dayBillList, setDayBillList] = useState([]);

  // 监听月份/账单变化，更新单日列表
  useEffect(() => {
    setStatData(calcMonthStat(list, selectedMonth));
    setDayBillList(groupBillByDay(list, selectedMonth));
  }, [selectedMonth, list]);

  // 渲染单日列表
  return (
    <div style={{ padding: '20px' }}>
      {/* 统计区域... */}
      
      {/* 单日列表区域 */}
      <div style={{ marginTop: '20px' }}>
        <h3>{selectedMonth} 账单明细</h3>
        {dayBillList.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px', border: '1px solid #eee', borderRadius: '8px' }}>
            <div style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
              <span>{selectedMonth}-{item.day}</span>
              <span style={{ marginLeft: '10px', color: 'green' }}>收入：¥{item.income.toFixed(2)}</span>
              <span style={{ marginLeft: '10px', color: 'red' }}>支出：¥{item.expense.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

​


### Day5-08.月度账单-列表区域-单日账单列表渲染显示
#### 核心知识点

1. 渲染单日下的所有账单明细

2. 区分收入/支出样式，展示分类、金额、备注

#### 精简代码案例

```javascript
// src/pages/Statistic.js 单日列表部分改造
<div>
  <h3>{selectedMonth} 账单明细</h3>
  {dayBillList.length === 0 ? (
    <div>本月暂无账单</div>
  ) : (
    dayBillList.map((item, index) => (
      <div key={index}>
        {/* 单日统计 */}
        <div>
          <span>{selectedMonth}-{item.day}</span>
          <span>收入：¥{item.income.toFixed(2)}</span>
          <span>支出：¥{item.expense.toFixed(2)}</span>
        </div>
        
        {/* 单日账单明细 */}
        <div style={{ padding: '10px' }}>
          {item.bills.map((bill) => (
            <div 
              key={bill.id} 
              style={{ 
                padding: '8px 0', 
                borderBottom: '1px dashed #eee',
                color: bill.type === 'income' ? 'green' : 'red'
              }}
            >
              <span>{bill.category}</span>
              <span>¥{bill.amount.toFixed(2)}</span>
              {bill.remark && <span>备注：{bill.remark}</span>}
            </div>
          ))}
        </div>
      </div>
    ))
  )}
</div>
```

​


### Day5-09.月度账单-列表区域-点击切换账单展开和收起
#### 核心知识点

1. 维护展开/收起状态，控制单日账单明细的显示/隐藏

2. 点击单日统计栏切换状态

#### 精简代码案例

```javascript
// src/pages/Statistic.js 改造
import { useState } from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

export default function Statistic() {
  // ... 原有逻辑
  
  // 展开/收起状态：key 为日期，值为是否展开
  const [expandState, setExpandState] = useState({});

  // 切换展开状态
  const toggleExpand = (day) => {
    setExpandState(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  // 单日列表渲染
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>{selectedMonth} 账单明细</h3>
      {dayBillList.length === 0 ? (
        <div>本月暂无账单</div>
      ) : (
        dayBillList.map((item, index) => {
          const isExpand = expandState[item.day] || false;
          return (
            <div key={index}>
              {/* 单日统计（可点击） */}
              <div 
                onClick={() => toggleExpand(item.day)}
              >
                <div>
                  <span>{selectedMonth}-{item.day}</span>
                  <span>收入：¥{item.income.toFixed(2)}</span>
                  <span>支出：¥{item.expense.toFixed(2)}</span>
                </div>
                {isExpand ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </div>
              
              {/* 单日账单明细（根据状态显示/隐藏） */}
              {isExpand && (
                <div style={{ padding: '10px' }}>
                  {item.bills.map((bill) => (
                    <div 
                      key={bill.id} 
                      style={{ 
                        padding: '8px 0', 
                        borderBottom: '1px dashed #eee',
                        color: bill.type === 'income' ? 'green' : 'red'
                      }}
                    >
                      <span>{bill.category}</span>
                      <span>¥{bill.amount.toFixed(2)}</span>
                      {bill.remark && <span>备注：{bill.remark}</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
```

​


### Day5-10.月度账单-账单类型图标组件封装
#### 核心知识点

1. 封装 Icon 组件，根据账单分类/类型显示对应图标

2. 映射关系：分类 → 图标

#### 精简代码案例

```javascript
// src/components/BillIcon.js
import { 
  CoffeeOutlined, 
  CarOutlined, 
  ShoppingOutlined, 
  SmileOutlined,
  WalletOutlined, 
  UserAddOutlined, 
  TrendingUpOutlined, 
  GiftOutlined 
} from '@ant-design/icons';

// 分类-图标映射
const iconMap = {
  // 支出
  餐饮: <CoffeeOutlined />,
  交通: <CarOutlined />,
  购物: <ShoppingOutlined />,
  娱乐: <SmileOutlined />,
  // 收入
  工资: <WalletOutlined />,
  兼职: <UserAddOutlined />,
  投资: <TrendingUpOutlined />,
  礼金: <GiftOutlined />
};

export default function BillIcon({ category }) {
  return iconMap[category] || <CoffeeOutlined />;
}

// 组件中使用（Statistic.js 账单明细部分）
import BillIcon from '@/components/BillIcon';

// 改造账单明细渲染
<div key={bill.id} style={{ padding: '8px 0', borderBottom: '1px dashed #eee', color: bill.type === 'income' ? 'green' : 'red' }}>
  <BillIcon category={bill.category} />
  <span>{bill.category}</span>
  <span>¥{bill.amount.toFixed(2)}</span>
  {bill.remark && <span>备注：{bill.remark}</span>}
</div>
```

​


### Day5-11.新增账单-功能熟悉和结构搭建
#### 核心知识点

1. 新增账单功能：选择类型（收入/支出）、分类、金额、日期、备注

2. 结构搭建：表单布局 + AntD 表单组件

#### 精简代码案例

```javascript
// src/pages/AddBill.js
import { useState } from 'react';
import { Form, Input, Select, Button, DatePicker, InputNumber, Card, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { addBill } from '@/store/billSlice';
import { categoryList } from '@/mock/bill';
import dayjs from 'dayjs';

const { Option } = Select;

export default function AddBill() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  // 账单类型：expense-支出（默认）、income-收入
  const [billType, setBillType] = useState('expense');
  // 获取对应类型的分类列表
  const currentCateList = categoryList.find(item => item.type === billType)?.list || [];

  // 表单提交
  const onFinish = (values) => {
    console.log('表单数据：', values);
    // TODO: 提交到 Redux
  };

  return (
    <div>
      <Card title="新增账单">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            date: dayjs(),
            type: 'expense'
          }}
        >
          {/* 账单类型 */}
          <Form.Item name="type" label="账单类型">
            <Radio.Group value={billType} onChange={(e) => setBillType(e.target.value)}>
              <Radio value="expense">支出</Radio>
              <Radio value="income">收入</Radio>
            </Radio.Group>
          </Form.Item>

          {/* 分类选择 */}
          <Form.Item name="category" label="分类" rules={[{ required: true, message: '请选择分类' }]}>
            <Select placeholder="请选择分类">
              {currentCateList.map(cate => (
                <Option key={cate} value={cate}>{cate}</Option>
              ))}
            </Select>
          </Form.Item>

          {/* 金额 */}
          <Form.Item name="amount" label="金额" rules={[{ required: true, message: '请输入金额' }]}>
            <InputNumber 
              style={{ width: '100%' }} 
              min={0.01} 
              step={0.01} 
              formatter={value => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/¥\s?|(,*)/g, '')}
            />
          </Form.Item>

          {/* 日期 */}
          <Form.Item name="date" label="日期">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          {/* 备注 */}
          <Form.Item name="remark" label="备注">
            <Input.TextArea rows={3} placeholder="请输入备注（可选）" />
          </Form.Item>

          {/* 提交按钮 */}
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              保存账单
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
```

​


### Day5-12.新增账单-支出和收入功能实现
#### 核心知识点

1. 切换账单类型（收入/支出）时，同步更新分类列表

2. 表单联动：类型变化 → 分类选项更新

#### 精简代码案例

```javascript
// src/pages/AddBill.js 改造（核心联动逻辑）
export default function AddBill() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [billType, setBillType] = useState('expense');
  const currentCateList = categoryList.find(item => item.type === billType)?.list || [];

  // 监听账单类型变化，重置分类选择
  useEffect(() => {
    form.setFieldsValue({ category:  });
  }, [billType, form]);

  // 类型切换事件
  const handleTypeChange = (e) => {
    const type = e.target.value;
    setBillType(type);
    form.setFieldsValue({ type });
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card title="新增账单">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            date: dayjs(),
            type: 'expense'
          }}
        >
          {/* 账单类型 */}
          <Form.Item name="type" label="账单类型">
            <Radio.Group value={billType} onChange={handleTypeChange}>
              <Radio value="expense">支出</Radio>
              <Radio value="income">收入</Radio>
            </Radio.Group>
          </Form.Item>

          {/* 分类选择（联动更新） */}
          <Form.Item name="category" label="分类" rules={[{ required: true, message: '请选择分类' }]}>
            <Select placeholder={`请选择${billType === 'expense' ? '支出' : '收入'}分类`}>
              {currentCateList.map(cate => (
                <Option key={cate} value={cate}>{cate}</Option>
              ))}
            </Select>
          </Form.Item>

          {/* 其他表单项... */}
        </Form>
      </Card>
    </div>
  );
}
```

​


### Day5-13.新增账单-新增表单实现
#### 核心知识点

1. 表单提交：格式化数据，分发 Redux action 添加账单

2. 提交成功后重置表单，提示成功信息

#### 精简代码案例

```javascript
// src/pages/AddBill.js 完整提交逻辑
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function AddBill() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [billType, setBillType] = useState('expense');
  const currentCateList = categoryList.find(item => item.type === billType)?.list || [];

  useEffect(() => {
    form.setFieldsValue({ category:  });
  }, [billType, form]);

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setBillType(type);
    form.setFieldsValue({ type });
  };

  // 表单提交
  const onFinish = (values) => {
    // 格式化提交数据
    const newBill = {
      id: Date.now(),
      type: values.type,
      category: values.category,
      amount: values.amount,
      date: dayjs(values.date).format('YYYY-MM-DD'),
      remark: values.remark || ''
    };

    // 分发 action 添加账单
    dispatch(addBill(newBill));
    
    // 提示成功
    message.success('账单添加成功！');
    
    // 重置表单
    form.resetFields();
    
    // 可选：跳转到首页
    // navigate('/');
  };

  return (
    // 原有表单结构...
  );
}
```

​


### Day5-14.新增账单-收尾优化
#### 核心知识点

1. 表单校验：金额必填、最小值限制

2. 样式优化：统一表单布局，按钮样式

3. 体验优化：加载状态、错误处理

#### 精简代码案例

```javascript
// src/pages/AddBill.js 优化版
import { useState } from 'react';
import { Form, Input, Select, Button, DatePicker, InputNumber, Card, Radio, message } from 'antd';
import { useDispatch } from 'react-redux';
import { addBill } from '@/store/billSlice';
import { categoryList } from '@/mock/bill';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

export default function AddBill() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [billType, setBillType] = useState('expense');
  const [loading, setLoading] = useState(false); // 加载状态
  const currentCateList = categoryList.find(item => item.type === billType)?.list || [];

  useEffect(() => {
    form.setFieldsValue({ category:  });
  }, [billType, form]);

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setBillType(type);
    form.setFieldsValue({ type });
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      // 模拟接口延迟
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newBill = {
        id: Date.now(),
        type: values.type,
        category: values.category,
        amount: values.amount,
        date: dayjs(values.date).format('YYYY-MM-DD'),
        remark: values.remark || ''
      };

      dispatch(addBill(newBill));
      message.success('账单添加成功！');
      form.resetFields();
      // 3秒后跳转到首页
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      message.error('账单添加失败，请重试！');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card title="新增账单" bordered={false}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            date: dayjs(),
            type: 'expense'
          }}
          validateMessages={{
            required: '${label}不能为空！',
            number: '${label}必须是数字！'
          }}
        >
          {/* 账单类型 */}
          <Form.Item name="type" label="账单类型">
            <Radio.Group value={billType} onChange={handleTypeChange}>
              <Radio value="expense">支出</Radio>
              <Radio value="income">收入</Radio>
            </Radio.Group>
          </Form.Item>

          {/* 分类选择 */}
          <Form.Item 
            name="category" 
            label="分类" 
            rules={[{ required: true }]}
          >
            <Select 
              placeholder={`请选择${billType === 'expense' ? '支出' : '收入'}分类`}
              showSearch
              optionFilterProp="children"
            >
              {currentCateList.map(cate => (
                <Option key={cate} value={cate}>{cate}</Option>
              ))}
            </Select>
          </Form.Item>

          {/* 金额 */}
          <Form.Item 
            name="amount" 
            label="金额" 
            rules={[
              { required: true },
              { type: 'number', min: 0.01, message: '金额必须大于0！' }
            ]}
          >
            <InputNumber 
              style={{ width: '100%' }} 
              min={0.01} 
              step={0.01} 
              formatter={value => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/¥\s?|(,*)/g, '')}
            />
          </Form.Item>

          {/* 日期 */}
          <Form.Item name="date" label="日期" rules={[{ required: true }]}>
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          {/* 备注 */}
          <Form.Item name="remark" label="备注">
            <Input.TextArea rows={3} placeholder="请输入备注（可选）" maxLength={100} />
          </Form.Item>

          {/* 提交按钮 */}
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              style={{ width: '100%', height: '40px', fontSize: '16px' }}
              loading={loading}
            >
              保存账单
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
```

​


### 第六天
本章节聚焦项目工程化配置和登录功能完整实现

涵盖环境搭建、路由配置、Git 管理、登录表单、请求封装、Redux 管理 Token 及持久化

​

​


### Day6-01.使用CRA初始化项目环境
​

1. CRA（Create React App）快速初始化 React 项目

2. 项目目录结构梳理，启动/打包脚本说明

​


### Day6-02.安装scss包
#### 核心知识点

1. CRA 内置支持 SCSS，只需安装 `sass` 依赖

2. 组件中直接引入 `.scss` 文件使用

#### 精简代码案例

\# 安装 sass（替代 node-sass，更稳定）

npm install sass --save-dev

```css
// src/App.scss 示例
$primary-color: #1890ff;
.login-container {
  padding: 20px;
  background: #f5f5f5;
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  }
}

// 组件中引入
import './App.scss';
```

​


### Day6-03.安装antDesign
#### 核心知识点

1. 安装 Ant Design 最新版，支持按需引入

2. 全局引入样式或配置按需加载

#### 精简代码案例

```text
npm install antd --save
```

```javascript
// src/index.js 全局引入样式（简单方案）
import 'antd/dist/reset.css'; // antd v5+ 样式文件

// 组件中使用 AntD 组件
import { Button, Form, Input } from 'antd';

function Login() {
  return (
    <Form>
      <Form.Item name="username">
        <Input placeholder="用户名" />
      </Form.Item>
      <Button type="primary">登录</Button>
    </Form>
  );
}
```

​


### Day6-04.配置基础路由Router
#### 核心知识点

1. 安装 React Router v6+，配置登录/首页路由

2. 路由守卫基础：未登录拦截跳转到登录页

#### 精简代码案例

```text
# 安装路由依赖
npm install react-router-dom --save
```

```javascript
// src/router/index.js
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from '@/pages/Login';
import Home from '@/pages/Home';

// 简单路由守卫：判断是否登录
const PrivateRoute = ({ children }) => {
  const hasToken = localStorage.getItem('token');
  return hasToken ? children : <Navigate to="/login" />;
};


// 路由配置
const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { 
    path: '/', 
    element: <PrivateRoute><Home /></PrivateRoute> 
  },
  { path: '*', element: <Navigate to="/login" /> }
]);


// src/App.js
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return <RouterProvider router={router} />;
}
```

​


### Day6-05.配置别名路径
#### 核心知识点

1. 使用 `craco` 覆盖 CRA 配置，配置 `@` 指向 `src`

2. 简化组件导入路径，避免多层相对路径

#### 精简代码案例

```text
# 安装 craco
npm install @craco/craco --save-dev
```

```javascript
// 项目根目录创建 craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};

// 修改 package.json 脚本
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}

// 使用示例
import Login from '@/pages/Login'; // 替代 ../../pages/Login
import request from '@/utils/request';
```

​


### Day6-07.登录-准备静态结构
#### 核心知识点

1. 基于 AntD Form 搭建登录表单结构

2. 布局优化：居中显示、样式美化

#### 精简代码案例

```javascript
// src/pages/Login/index.jsx
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';

export default function Login() {
  return (
    <div className="login-page">
      <Card className="login-card" title="系统登录">
        <Form
          name="login_form"
          initialValues={{ remember: true }}
          layout="vertical"
        >
          <Form.Item name="username" label="用户名">
            <Input 
              prefix={<UserOutlined />} 
              placeholder="请输入用户名" 
              size="large"
            />
          </Form.Item>

          <Form.Item name="password" label="密码">
            <Input.Password 
              prefix={<LockOutlined />} 
              placeholder="请输入密码" 
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
```

​


### Day6-08.登录-表单校验实现
#### 核心知识点

1. AntD Form 校验规则：必填、长度限制、格式校验

2. 自定义校验提示文案

#### 精简代码案例

```text
// src/pages/Login/index.jsx 改造 Form.Item
<Form.Item 
  name="username" 
  label="用户名"
  rules={[
    { required: true, message: '请输入用户名！' },
    { min: 3, max: 20, message: '用户名长度为3-20个字符！' }
  ]}
>
  <Input 
    prefix={<UserOutlined />} 
    placeholder="请输入用户名" 
    size="large"
  />
</Form.Item>

<Form.Item 
  name="password" 
  label="密码"
  rules={[
    { required: true, message: '请输入密码！' },
    { min: 6, message: '密码长度不少于6位！' }
  ]}
>
  <Input.Password 
    prefix={<LockOutlined />} 
    placeholder="请输入密码" 
    size="large"
  />
</Form.Item>
```

​


### Day6-09.登录-获取表单数据
#### 核心知识点

1. 使用 `Form.useForm()` 绑定表单实例

2. 监听表单提交事件，获取校验后的表单数据

#### 精简代码案例

```javascript
// src/pages/Login/index.jsx
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';

export default function Login() {
  const [form] = Form.useForm();

  // 表单提交处理
  const handleSubmit = async (values) => {
    try {
      // 获取表单数据
      console.log('登录表单数据：', values); // { username: 'xxx', password: 'xxx' }
      message.success('表单校验通过！');
      // TODO: 调用登录接口
    } catch (error) {
      message.error('登录失败，请重试！');
    }
  };

  return (
    <div className="login-page">
      <Card className="login-card" title="系统登录">
        <Form
          form={form}
          name="login_form"
          initialValues={{ remember: true }}
          layout="vertical"
          onFinish={handleSubmit} // 提交事件
        >
          {/* 表单项... */}
        </Form>
      </Card>
    </div>
  );
}
```

​


### Day6-10.登录-封装request请求模块
#### 核心知识点

1. 基于 Axios 封装请求模块：统一基础路径、拦截器

2. 请求/响应拦截：处理 Token、错误统一提示

#### 精简代码案例

npm install axios --save

```javascript
// src/utils/request.js
import axios from 'axios';
import { message } from 'antd';
import { getToken } from './token'; // 后续实现

// 创建 axios 实例
const request = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '/api', // 接口基础路径
  timeout: 10000, // 超时时间
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器：添加 Token
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器：统一处理错误
request.interceptors.response.use(
  (response) => {
    // 接口返回数据
    const res = response.data;
    // 假设接口约定：code=200 成功
    if (res.code !== 200) {
      message.error(res.message || '请求失败');
      return Promise.reject(res);
    }
    return res;
  },
  (error) => {
    message.error(error.message || '网络异常');
    return Promise.reject(error);
  }
);

export default request;
```

​


### Day6-11.登录-redux管理token-编写样板代码
#### 核心知识点

1. 安装 Redux 相关依赖，创建 Token Slice

2. 初始化 Redux Store，注入到 React 应用

#### 精简代码案例

```text
# 安装 Redux 依赖
npm install @reduxjs/toolkit react-redux --save
```

```javascript
// src/store/tokenSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '@/utils/request';

// 异步登录 action（后续实现）
export const login = createAsyncThunk(
  'token/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const res = await request.post('/auth/login', loginData);
      return res.data; // 返回 Token 数据
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Token Slice
const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '', // 存储 Token
    loading: false, // 登录加载状态
    error: null // 错误信息
  },
  reducers: {
    // 清除 Token
    clearToken: (state) => {
      state.token = '';
    }
  },
  extraReducers: (builder) => {
    // 处理异步 action 状态（后续完善）
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || '登录失败';
      });
  }
});

export const { clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;

// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer
  }
});

// src/index.js 注入 Store
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

​


### Day6-12.登录-redux管理token-实现Token异步获取
#### 核心知识点

1. 完善登录异步 Action，调用登录接口

2. 组件中分发登录 Action，处理加载状态

#### 精简代码案例

```javascript
// src/pages/Login/index.jsx
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/tokenSlice';

export default function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  // 获取 Redux 中的加载状态
  const { loading } = useSelector(state => state.token);

  const handleSubmit = async (values) => {
    try {
      // 分发登录 action
      await dispatch(login(values)).unwrap();
      // 登录成功后续逻辑（跳转首页）
    } catch (error) {
      console.error('登录失败：', error);
    }
  };

  return (
    <div className="login-page">
      <Card className="login-card" title="系统登录">
        <Form form={form} onFinish={handleSubmit}>
          {/* 表单项... */}
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              size="large" 
              block
              loading={loading} // 加载状态
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
```

​


### Day6-13.登录-redux管理token-实现登录后续逻辑
#### 核心知识点

1. 登录成功后跳转到首页

2. 失败时提示错误信息，清空密码框

#### 精简代码案例

```javascript
// src/pages/Login/index.jsx
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '@/store/tokenSlice';
import { message } from 'antd';

export default function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(state => state.token);

  const handleSubmit = async (values) => {
    try {
      // 分发登录 action 并等待结果
      await dispatch(login(values)).unwrap();
      message.success('登录成功！');
      // 跳转到首页
      navigate('/');
    } catch (error) {
      message.error(error?.message || '登录失败，请检查用户名或密码');
      // 清空密码框
      form.setFieldsValue({ password: '' });
    }
  };
  // 其余代码不变...
}
```

​


### Day6-14.登录-Token持久化
#### 核心知识点

1. Token 持久化：登录成功后存入 localStorage

2. 页面刷新后从 localStorage 恢复 Redux 中的 Token

#### 精简代码案例

```javascript
// 修改 src/store/tokenSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '@/utils/request';

// 从 localStorage 获取初始 Token
const initialToken = localStorage.getItem('token') || '';

// Token Slice
const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: initialToken, // 初始值从 localStorage 读取
    loading: false,
    error: null
  },
  reducers: {
    clearToken: (state) => {
      state.token = '';
      localStorage.removeItem('token'); // 清除本地存储
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        // 存入 localStorage
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || '登录失败';
      });
  }
});

// 其余代码不变...
```

​


### Day6-15.登录-封装Token的存取删方法
#### 核心知识点

1. 封装 Token 操作工具函数，统一管理

2. 解耦 Token 存储逻辑，提升可维护性

#### 精简代码案例

```javascript
// src/utils/token.js
// Token 存储的 key
const TOKEN_KEY = 'react_login_token';

/**
 * 获取 Token
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) || '';
};

/**
 * 设置 Token
 * @param {string} token 
 */
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

/**
 * 删除 Token
 */
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// 修改 src/store/tokenSlice.js
import { getToken, setToken, removeToken } from '@/utils/token';

// 初始值从工具函数获取
const initialToken = getToken();

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: initialToken,
    loading: false,
    error: null
  },
  reducers: {
    clearToken: (state) => {
      state.token = '';
      removeToken(); // 调用工具函数
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        setToken(action.payload.token); // 调用工具函数
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || '登录失败';
      });
  }
});

// 修改 src/utils/request.js 中的请求拦截器
import { getToken } from './token';

request.interceptors.request.use(
  (config) => {
    const token = getToken(); // 调用工具函数
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
```

#### 总结

1. **项目工程化**：CRA 初始化项目，配置 SCSS、AntD、别名路径提升开发效率，Gitee 管理代码版本；

2. **登录表单核心**：AntD Form 实现表单结构和校验，Axios 封装请求模块统一处理接口调用、Token 拦截；

3. **Token 管理**：Redux Toolkit 管理 Token 状态，异步 Action 处理登录请求，结合 localStorage 实现 Token 持久化，封装工具函数解耦存储逻辑；

4. **关键技巧**：路由守卫拦截未登录访问，请求/响应拦截器统一处理 Token 和错误，登录状态联动加载提示、页面跳转提升用户体验。


### 第七天
本章节主要内容：登录鉴权完善、Layout 布局实现、Echarts 图表集成及 API 封装


### Day7-01.Axios请求头注入Token
#### 核心知识点

1. 完善 Axios 请求拦截器，统一注入 Token 到请求头

2. 处理 Token 不存在/过期的基础逻辑

#### 精简代码案例

```javascript
// src/utils/request.js
import axios from 'axios';
import { message } from 'antd';
import { getToken, removeToken } from './token';
import { useNavigate } from 'react-router-dom';

// 创建 axios 实例
const request = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});


// 解决拦截器中使用 navigate 的问题
const getNavigate = () => {
  const navigate = useNavigate();
  return navigate;
};


// 请求拦截器：注入 Token
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      // 标准 Bearer Token 格式
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// 响应拦截器：处理 Token 失效
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // 401 表示 Token 失效/未授权
    if (error.response?.status === 401) {
      message.error('登录已过期，请重新登录');
      removeToken(); // 清除本地 Token
      // 跳转到登录页（需确保在 React 组件外可调用）
      window.location.href = '/login';
    } else {
      message.error(error.message || '请求失败');
    }
    return Promise.reject(error);
  }
);

export default request;
```

​


### Day7-02.根据Token控制路由跳转
#### 核心知识点

1. 封装高阶路由守卫组件，全局控制权限

2. 区分公开路由/私有路由，未登录拦截跳转

#### 精简代码案例

```javascript
// src/router/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { getToken } from '@/utils/token';

/**
 * 私有路由守卫：需要登录才能访问
 * @param {*} param0 
 * @returns 
 */
export const ProtectedRoute = ({ children }) => {
  const token = getToken();
  // Token 不存在跳转到登录页，携带来源路径
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

/**
 * 公开路由守卫：已登录自动跳转到首页
 * @param {*} param0 
 * @returns 
 */
export const PublicRoute = ({ children }) => {
  const token = getToken();
  if (token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

// src/router/index.js 应用路由守卫
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute, PublicRoute } from './ProtectedRoute';
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import Layout from '@/layout';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <PublicRoute><Login /></PublicRoute> // 公开路由
  },
  {
    path: '/',
    element: <ProtectedRoute><Layout /></ProtectedRoute>, // 私有路由
    children: [
      { index: true, element: <Home /> },
      // 其他二级路由...
    ]
  },
  { path: '*', element: <Navigate to="/" replace /> }
]);

export default router;
```

​


### Day7-03.Layout-结构创建和样式reset
#### 核心知识点

1. 搭建后台通用 Layout 布局：侧边栏 + 头部 + 内容区

2. 重置默认样式，统一布局风格

#### 精简代码案例

```javascript
// src/layout/index.jsx
import { Layout as AntLayout, Menu, Avatar, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import './index.scss';

const { Header, Sider, Content } = AntLayout;

export default function Layout() {
  // 菜单数据
  const menuItems = [
    { key: '1', label: '首页', path: '/' },
    { key: '2', label: '数据统计', path: '/statistic' },
    { key: '3', label: '系统设置', path: '/setting' }
  ];

  // 个人中心下拉菜单
  const userMenu = [
    { key: 'profile', label: '个人信息' },
    { key: 'logout', label: '退出登录', icon: <LogoutOutlined /> }
  ];

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider width={200} theme="light">
        <div className="logo" style={{ padding: '16px', textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
          管理系统
        </div>
        <Menu 
          mode="inline" 
          items={menuItems}
          style={{ borderRight: 0 }}
        />
      </Sider>
      
      <AntLayout>
        {/* 头部 */}
        <Header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 20px' }}>
          <Dropdown menu={{ items: userMenu }} placement="bottomRight">
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Avatar icon={<UserOutlined />} />
              <span style={{ marginLeft: '8px' }}>管理员</span>
            </div>
          </Dropdown>
        </Header>
        
        {/* 内容区 */}
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          <Outlet /> {/* 二级路由出口 */}
        </Content>
      </AntLayout>
    </AntLayout>
  );
}
```

```text
// src/layout/index.scss
// 样式重置
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// Layout 样式
.ant-layout {
  background: #f5f5f5;
}

.ant-layout-header {
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}

.ant-layout-sider {
  background: #fff;
}

.logo {
  border-bottom: 1px solid #eee;
}
```

​


### Day7-04.Layout-二级路由配置
#### 核心知识点

1. 配置 Layout 下的二级路由，通过 Outlet 渲染

2. 路由模块化管理，分类配置

#### 精简代码案例

```javascript
// src/router/index.js 完善二级路由
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute, PublicRoute } from './ProtectedRoute';
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import Statistic from '@/pages/Statistic';
import Setting from '@/pages/Setting';
import Layout from '@/layout';

// 路由配置
const router = createBrowserRouter([
  {
    path: '/login',
    element: <PublicRoute><Login /></PublicRoute>
  },
  {
    path: '/',
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      { index: true, element: <Home /> }, // 默认首页
      { path: 'statistic', element: <Statistic /> }, // 数据统计
      { path: 'setting', element: <Setting /> } // 系统设置
    ]
  },
  { path: '*', element: <Navigate to="/" replace /> }
]);

export default router;
```

​


### Day7-05.Layout-点击菜单跳转路由
#### 核心知识点

1. 结合 `useNavigate` 实现菜单点击跳转

2. 菜单与路由路径关联，统一配置

#### 精简代码案例

```javascript
// src/layout/index.jsx 改造菜单点击逻辑
import { useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  
  // 菜单数据（path 与路由对应）
  const menuItems = [
    { key: '1', label: '首页', path: '/' },
    { key: '2', label: '数据统计', path: '/statistic' },
    { key: '3', label: '系统设置', path: '/setting' }
  ];

  // 菜单点击事件
  const handleMenuClick = ({ key }) => {
    const item = menuItems.find(item => item.key === key);
    if (item?.path) {
      navigate(item.path);
    }
  };

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <div className="logo">管理系统</div>
        <Menu 
          mode="inline" 
          items={menuItems}
          style={{ borderRight: 0 }}
          onClick={handleMenuClick} // 绑定点击事件
        />
      </Sider>
      {/* 头部和内容区... */}
    </AntLayout>
  );
}
```

​


### Day7-06.Layout-根据当前路由路径高亮菜单
#### 核心知识点

1. 使用 `useLocation` 获取当前路由，匹配菜单高亮

2. 动态设置 Menu 的 selectedKeys

#### 精简代码案例

```javascript
// src/layout/index.jsx 实现菜单高亮
import { useLocation, useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation(); // 获取当前路由
  const currentPath = location.pathname;

  // 菜单数据
  const menuItems = [
    { key: '1', label: '首页', path: '/' },
    { key: '2', label: '数据统计', path: '/statistic' },
    { key: '3', label: '系统设置', path: '/setting' }
  ];

  // 匹配当前路由对应的菜单 key
  const getSelectedKey = () => {
    const item = menuItems.find(item => item.path === currentPath);
    return item?.key || '1';
  };

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="light">
        <div className="logo">管理系统</div>
        <Menu 
          mode="inline" 
          items={menuItems}
          style={{ borderRight: 0 }}
          onClick={handleMenuClick}
          selectedKeys={[getSelectedKey()]} // 高亮当前菜单
        />
      </Sider>
      {/* 其他部分不变... */}
    </AntLayout>
  );
}
```

​


### Day7-07.Layout-展示个人信息
#### 核心知识点

1. 从接口/Redux 获取用户信息，展示到头部

2. 优化头像和用户名展示样式

#### 精简代码案例

```javascript
// src/layout/index.jsx 展示个人信息
import { useSelector } from 'react-redux';
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

export default function Layout() {
  // 从 Redux 获取用户信息（需提前在登录后存储）
  const { userInfo } = useSelector(state => state.user);
  const userName = userInfo?.name || '管理员';

  // 个人中心下拉菜单
  const userMenuItems = [
    { 
      key: 'profile', 
      label: '个人信息',
      onClick: () => navigate('/profile')
    },
    { 
      key: 'logout', 
      label: '退出登录', 
      icon: <LogoutOutlined />,
      onClick: handleLogout // 后续实现退出逻辑
    }
  ];

  return (
    <AntLayout>
      <Sider>{/* 侧边栏 */}</Sider>
      <AntLayout>
        <Header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '0 10px' }}>
              <Avatar icon={<UserOutlined />} src={userInfo?.avatar} />
              <span style={{ marginLeft: '8px' }}>{userName}</span>
            </div>
          </Dropdown>
        </Header>
        <Content>{/* 内容区 */}</Content>
      </AntLayout>
    </AntLayout>
  );
}
```

​


### Day7-08.Layout-退出登录实现
#### 核心知识点

1. 退出登录逻辑：清除 Token、清除用户信息、跳转到登录页

2. 分发 Redux action 重置状态

#### 精简代码案例

```javascript
// src/layout/index.jsx 实现退出登录
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { removeToken } from '@/utils/token';
import { clearUserInfo } from '@/store/userSlice';

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 退出登录处理
  const handleLogout = () => {
    try {
      // 1. 清除本地 Token
      removeToken();
      // 2. 清除 Redux 中的用户信息
      dispatch(clearUserInfo());
      // 3. 提示退出成功
      message.success('退出登录成功');
      // 4. 跳转到登录页
      navigate('/login');
    } catch (error) {
      message.error('退出登录失败，请重试');
    }
  };

  // 个人菜单配置
  const userMenuItems = [
    { key: 'profile', label: '个人信息' },
    { 
      key: 'logout', 
      label: '退出登录', 
      icon: <LogoutOutlined />,
      onClick: handleLogout 
    }
  ];

  // 其余代码不变...
}
```

​


### Day7-09.Layout-处理token失效
#### 核心知识点

1. 全局监听 Token 失效（401 响应），自动退出登录

2. 避免重复跳转，添加防抖处理

#### 精简代码案例

```javascript
// src/utils/request.js 完善 Token 失效处理
import axios from 'axios';
import { message } from 'antd';
import { getToken, removeToken } from './token';

// 防抖标记：避免多次跳转
let isTokenExpired = false;

const request = axios.create({
  baseURL: '/api',
  timeout: 10000
});

// 响应拦截器
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // 处理 401 Token 失效
    if (error.response?.status === 401 && !isTokenExpired) {
      isTokenExpired = true; // 标记已处理
      message.error('登录已过期，请重新登录');
      removeToken(); // 清除 Token
      
      // 延迟跳转，确保提示显示
      setTimeout(() => {
        window.location.href = '/login';
        isTokenExpired = false; // 重置标记
      }, 1500);
    } else if (error.response?.status !== 401) {
      message.error(error.message || '请求失败');
    }
    return Promise.reject(error);
  }
);

export default request;
```

​


### Day7-10.Home-Echarts基础图表渲染
#### 核心知识点

1. 安装 Echarts 及 React 适配包

2. 基础柱状图/折线图渲染，适配容器大小

#### 精简代码案例

```text
# 安装依赖
npm install echarts react-echarts --save
```

```javascript
// src/pages/Home/index.jsx
import { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import { Card, Row, Col } from 'antd';

export default function Home() {
  // 图表容器 Ref
  const barChartRef = useRef(null);
  const lineChartRef = useRef(null);

  // 初始化图表
  useEffect(() => {
    // 1. 柱状图
    const barChart = echarts.init(barChartRef.current);
    barChart.setOption({
      title: { text: '月度收支统计' },
      xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月'] },
      yAxis: { type: 'value' },
      series: [
        { name: '收入', type: 'bar', data: [5000, 6000, 5500, 7000, 6500] },
        { name: '支出', type: 'bar', data: [2000, 1800, 2500, 2200, 1900] }
      ]
    });

    // 2. 折线图
    const lineChart = echarts.init(lineChartRef.current);
    lineChart.setOption({
      title: { text: '收支趋势' },
      xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月'] },
      yAxis: { type: 'value' },
      series: [
        { name: '收入', type: 'line', data: [5000, 6000, 5500, 7000, 6500] },
        { name: '支出', type: 'line', data: [2000, 1800, 2500, 2200, 1900] }
      ]
    });

    // 响应窗口大小变化
    const resizeHandler = () => {
      barChart.resize();
      lineChart.resize();
    };
    window.addEventListener('resize', resizeHandler);

    // 清理函数
    return () => {
      barChart.dispose();
      lineChart.dispose();
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="柱状图统计" style={{ height: '400px' }}>
            <div ref={barChartRef} style={{ width: '100%', height: '350px' }}></div>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="折线图趋势" style={{ height: '400px' }}>
            <div ref={lineChartRef} style={{ width: '100%', height: '350px' }}></div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
```

​


### Day7-11.Home-Echarts组件封装实现
#### 核心知识点

1. 封装通用 Echarts 组件，支持动态配置

2. 接收配置项 props，响应数据变化重新渲染

#### 精简代码案例

```javascript
// src/components/Echarts/index.jsx
import { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import { debounce } from 'lodash';

/**
 * 通用 Echarts 组件
 * @param {Object} props - 配置项
 * @param {Object} props.option - 图表配置
 * @param {string} props.className - 自定义类名
 * @param {number} props.width - 宽度
 * @param {number} props.height - 高度
 * @returns 
 */
export default function Echarts({ 
  option, 
  className = '', 
  width = '100%', 
  height = '300px' 
}) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // 初始化图表
  useEffect(() => {
    // 创建实例
    chartInstance.current = echarts.init(chartRef.current);
    // 设置配置
    chartInstance.current.setOption(option);

    // 防抖 resize
    const resize = debounce(() => {
      chartInstance.current?.resize();
    }, 200);
    window.addEventListener('resize', resize);

    // 清理
    return () => {
      chartInstance.current?.dispose();
      window.removeEventListener('resize', resize);
    };
  }, []);

  // 配置变化时更新
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.setOption(option, true);
    }
  }, [option]);

  return (
    <div
      ref={chartRef}
      className={className}
      style={{ width, height }}
    ></div>
  );
}

// 页面中使用封装的组件
// src/pages/Home/index.jsx
import Echarts from '@/components/Echarts';

export default function Home() {
  // 柱状图配置
  const barOption = {
    title: { text: '月度收支统计' },
    xAxis: { type: 'category', data: ['1月', '2月', '3月', '4月', '5月'] },
    yAxis: { type: 'value' },
    series: [
      { name: '收入', type: 'bar', data: [5000, 6000, 5500, 7000, 6500] },
      { name: '支出', type: 'bar', data: [2000, 1800, 2500, 2200, 1900] }
    ]
  };

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card title="柱状图统计" style={{ height: '400px' }}>
          <Echarts option={barOption} height="350px" />
        </Card>
      </Col>
      {/* 折线图同理 */}
    </Row>
  );
}
```

​


### Day7-12.拓展-API模块封装
#### 核心知识点

1. 按业务模块封装 API 请求，统一管理

2. 解耦请求逻辑与组件，提升可维护性

#### 精简代码案例

```javascript
// src/api/index.js - API 入口
export * from './user';
export * from './bill';

// src/api/user.js - 用户模块 API
import request from '@/utils/request';

/**
 * 用户登录
 * @param {Object} data - 登录参数
 * @param {string} data.username - 用户名
 * @param {string} data.password - 密码
 * @returns 
 */
export const loginAPI = (data) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  });
};

/**
 * 获取用户信息
 * @returns 
 */
export const getUserInfoAPI = () => {
  return request({
    url: '/user/info',
    method: 'get'
  });
};

/**
 * 修改用户信息
 * @param {Object} data - 用户信息
 * @returns 
 */
export const updateUserInfoAPI = (data) => {
  return request({
    url: '/user/info',
    method: 'put',
    data
  });
};

// src/api/bill.js - 账单模块 API
import request from '@/utils/request';

/**
 * 获取账单列表
 * @param {Object} params - 查询参数
 * @param {string} params.month - 月份
 * @returns 
 */
export const getBillListAPI = (params) => {
  return request({
    url: '/bill/list',
    method: 'get',
    params
  });
};

/**
 * 添加账单
 * @param {Object} data - 账单数据
 * @returns 
 */
export const addBillAPI = (data) => {
  return request({
    url: '/bill/add',
    method: 'post',
    data
  });
};

/**
 * 删除账单
 * @param {number} id - 账单ID
 * @returns 
 */
export const deleteBillAPI = (id) => {
  return request({
    url: `/bill/delete/${id}`,
    method: 'delete'
  });
};

// 组件中使用 API
// src/pages/Login/index.jsx
import { loginAPI } from '@/api/user';

// 修改 Redux tokenSlice 中的登录 action
export const login = createAsyncThunk(
  'token/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const res = await loginAPI(loginData); // 调用封装的 API
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
```

#### 总结

1. **鉴权体系完善**：Axios 拦截器统一注入/校验 Token，路由守卫控制页面访问权限，Token 失效自动退出并跳转登录页；

2. **Layout 核心实现**：侧边栏菜单与路由联动，支持高亮和跳转，头部展示用户信息并实现退出登录，整体布局适配后台管理系统；

3. **Echarts 集成**：基础图表渲染结合组件封装，支持动态配置和响应式适配，提升代码复用性；

4. **API 工程化**：按业务模块封装 API 请求，解耦请求逻辑与组件，统一错误处理和参数格式，符合企业级开发规范；

5. **关键技巧**：防抖处理避免重复跳转，Redux 管理全局状态，工具函数封装通用逻辑，提升项目可维护性和扩展性。


### 第八天
文章发布/列表功能实现，涵盖富文本编辑器、封面上传、表单提交、表格渲染


### Day8-01.文章发布-功能演示说明
#### 核心知识点

1. 功能范围：文章标题/内容/频道选择、封面上传（单图/三图/无图）、表单提交

2. 核心技术：富文本编辑器（TinyMCE/UEditor）、AntD Upload 上传、表单校验、接口联调

#### 功能流程梳理

```
1. 进入发布页 → 填写标题 → 选择发布频道
2. 富文本编辑器编辑文章内容
3. 选择封面类型（无图/单图/三图）→ 上传对应数量图片
4. 提交表单 → 接口验证 → 发布成功/失败提示
5. 成功后跳转文章列表页，失败则显示错误信息
```

​


### Day8-02.基础文章发布-准备基础结构
核心知识点

1. 搭建文章发布表单基础布局：标题、频道选择、提交按钮

2. 基于 AntD Form 实现表单骨架，预留富文本/封面区域

#### 精简代码案例

```javascript
// src/pages/Article/Add.jsx
import { Form, Input, Select, Button, Card, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Add.scss';
const { Option } = Select;
export default function ArticleAdd() {
  const [form] = Form.useForm();
  // 表单提交
  const handleSubmit = (values) => {
    console.log('表单数据：', values);
    // TODO: 提交接口
  };
  return (
    <div className="article-add">
      <Card title="发布文章" bordered={false}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ coverType: 0 }} // 默认无图
        >
          {/* 文章标题 */}
          <Form.Item
            name="title"
            label="文章标题"
            rules={[{ required: true, message: '请输入文章标题' }, { max: 50, message: '标题不超过50字' }]}
          >
            <Input placeholder="请输入文章标题" maxLength={50} />
          </Form.Item>
          {/* 频道选择 */}
          <Form.Item
            name="channelId"
            label="发布频道"
            rules={[{ required: true, message: '请选择发布频道' }]}
          >
            <Select placeholder="请选择发布频道">
              {/* 临时占位，后续从接口获取 */}
              <Option value={1}>科技</Option>
              <Option value={2}>娱乐</Option>
              <Option value={3}>体育</Option>
            </Select>
          </Form.Item>
          {/* 富文本编辑器区域（预留） */}
          <Form.Item
            name="content"
            label="文章内容"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            <div className="editor-container" style={{ minHeight: '300px', border: '1px solid #eee', padding: '10px' }}>
              富文本编辑器占位
            </div>
          </Form.Item>
          {/* 封面区域（预留） */}
          <Form.Item label="文章封面">
            <div>封面区域占位</div>
          </Form.Item>
          {/* 提交按钮 */}
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                发布文章
              </Button>
              <Button htmlType="reset">重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
```

```
// src/pages/Article/Add.scss
.article-add {
  padding: 20px;
  
  .editor-container {
    margin-top: 8px;
    background: #fff;
  }
}
```

​


### Day8-03.基础文章发布-准备富文本编辑器
核心知识点

1. 集成 Tinymce 富文本编辑器（React 版）

2. 封装编辑器组件，适配 Form 表单取值

#### 精简代码案例

```
# 安装依赖
npm install @tinymce/tinymce-react tinymce --save
```

```javascript
// src/components/TinymceEditor/index.jsx
import { forwardRef, useEffect } from 'react';

import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce/tinymce';
// 引入 tinymce 核心插件
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/code';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/table';

// 转发 ref 适配 Form 表单
const TinymceEditor = forwardRef(({ value, onChange, ...props }, ref) => {
  // 初始化 tinymce
  useEffect(() => {
    if (!tinymce.baseURL) {
      tinymce.baseURL = '/tinymce'; // 配置静态资源路径
    }
  }, []);
  return (
    <Editor
      ref={ref}
      value={value}
      onEditorChange={onChange}
      init={{
        height: 300,
        menubar: false,
        plugins: [
          'advlist anchor autolink autoresize code lists link image',
          'preview table'
        ],
        toolbar:
          'undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist | link image | code preview',
        branding: false, // 隐藏品牌标识
        autoresize_bottom_margin: 10, // 自动高度
        // 图片上传配置（后续实现）
        images_upload_handler: (blobInfo, success, failure) => {
          // TODO: 图片上传逻辑
          setTimeout(() => {
            success('https://placeholder.pics/svg/300x200/DEDEDE/666666/Tinymce%20Image');
          }, 500);
        }
      }}
      {...props}
    />
  );
});
export default TinymceEditor;

// 改造文章发布页的富文本区域
// src/pages/Article/Add.jsx
import TinymceEditor from '@/components/TinymceEditor';
// 替换 Form.Item 中的编辑器区域

<Form.Item
  name="content"
  label="文章内容"
  rules={[{ required: true, message: '请输入文章内容' }]}
>
  <TinymceEditor />
</Form.Item>
```

​


### Day8-04.基础文章发布-频道列表获取渲染
核心知识点

1. 封装 API 获取频道列表，Redux 管理或自定义 Hook 缓存

2. 渲染频道下拉选项，支持搜索筛选

#### 精简代码案例

```javascript
// src/api/channel.js - 频道 API
import request from '@/utils/request';


/**
 * 获取频道列表
 * @returns 
 */
export const getChannelListAPI = () => {
  return request({
    url: '/channels',
    method: 'get'
  });
};


// src/hooks/useChannelList.js - 自定义 Hook
import { useState, useEffect } from 'react';
import { getChannelListAPI } from '@/api/channel';
import { message } from 'antd';
export const useChannelList = () => {
  const [channelList, setChannelList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchChannelList = async () => {
      try {
        setLoading(true);
        const res = await getChannelListAPI();
        setChannelList(res.data || []);
      } catch (error) {
        message.error('获取频道列表失败');
        setChannelList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchChannelList();
  }, []);
  return { channelList, loading };
};


// 改造文章发布页的频道选择
// src/pages/Article/Add.jsx
import { useChannelList } from '@/hooks/useChannelList';
export default function ArticleAdd() {
  const { channelList, loading } = useChannelList();
  
  // 替换频道 Select 组件
  <Form.Item
    name="channelId"
    label="发布频道"
    rules={[{ required: true, message: '请选择发布频道' }]}
  >
    <Select 
      placeholder="请选择发布频道" 
      showSearch
      optionFilterProp="children"
      loading={loading}
    >
      {channelList.map(channel => (
        <Option key={channel.id} value={channel.id}>
          {channel.name}
        </Option>
      ))}
    </Select>
  </Form.Item>
}
```

​


### Day8-05.基础文章发布-收集表单数据提交表单
核心知识点

1. 完善表单提交逻辑，整合所有字段（标题/频道/内容）

2. 调用发布接口，处理加载/成功/失败状态

#### 精简代码案例

```javascript
// src/api/article.js - 文章 API
import request from '@/utils/request';
/**
 * 发布文章
 * @param {Object} data - 文章数据
 * @returns 
 */
export const publishArticleAPI = (data) => {
  return request({
    url: '/articles',
    method: 'post',
    data
  });
};


// 改造文章发布页提交逻辑
// src/pages/Article/Add.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { publishArticleAPI } from '@/api/article';


export default function ArticleAdd() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { channelList, loading: channelLoading } = useChannelList();
  // 表单提交
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      // 构造提交数据
      const submitData = {
        title: values.title,
        channel_id: values.channelId,
        content: values.content,
        cover: {
          type: values.coverType, // 封面类型：0无图/1单图/3三图
          images: values.coverImages || [] // 封面图片列表
        }
      };
      
      // 调用发布接口
      await publishArticleAPI(submitData);
      message.success('文章发布成功');
      // 重置表单或跳转列表页
      form.resetFields();
      navigate('/article/list');
    } catch (error) {
      message.error('文章发布失败：' + (error.message || '服务器错误'));
    } finally {
      setLoading(false);
    }
  };
  // 改造提交按钮 loading 状态
  <Button 
    type="primary" 
    htmlType="submit" 
    icon={<PlusOutlined />}
    loading={loading}
  >
    发布文章
  </Button>
}
```

​


### Day8-06.文章封面-上传文章封面基础实现
## Day8-06.文章封面-上传文章封面基础实现

#### 核心知识点

1. 基于 AntD Upload 实现图片上传

2. 封装封面上传组件，支持预览/删除

#### 精简代码案例

```
// src/components/UploadImage/index.jsx
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
/**
 * 图片上传组件
 * @param {Object} props 
 * @param {number} props.limit - 上传数量限制
 * @param {Function} props.onChange - 上传回调
 * @param {Array} props.value - 已上传图片列表
 * @returns 
 */
export default function UploadImage({ limit = 1, onChange, value = [] }) {
  const [fileList, setFileList] = useState(
    value.map(url => ({ url, uid: url, status: 'done' }))
  );
  // 上传前校验
  const beforeUpload = (file) => {
    // 类型校验
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('只能上传图片格式！');
      return false;
    }
    // 大小校验
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片大小不能超过 2MB！');
      return false;
    }
    // 数量校验
    if (fileList.length >= limit) {
      message.error(`最多只能上传 ${limit} 张图片！`);
      return false;
    }
    return true;
  };
  // 上传成功处理
  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    // 提取有效图片 URL
    const urls = newFileList
      .filter(file => file.status === 'done')
      .map(file => file.url || file.response?.data?.url);
    onChange?.(urls);
  };
  // 自定义上传接口（替换为实际接口）
  const uploadProps = {
    action: '/api/upload/image', // 图片上传接口
    name: 'file',
    fileList,
    beforeUpload,
    onChange: handleUploadChange,
    listType: 'picture-card',
    maxCount: limit
  };
  return (
    <Upload {...uploadProps}>
      <div>
        <UploadOutlined />
        <div style={{ marginTop: 8 }}>上传图片</div>
      </div>
    </Upload>
  );
}
// 文章发布页集成封面上传
// src/pages/Article/Add.jsx
import UploadImage from '@/components/UploadImage';
import { Form, Radio } from 'antd';
// 封面区域改造
<Form.Item
  label="文章封面"
  required
>
  <Form.Item
    name="coverType"
    noStyle
    rules={[{ required: true, message: '请选择封面类型' }]}
  >
    <Radio.Group>
      <Radio value={0}>无图</Radio>
      <Radio value={1}>单图</Radio>
      <Radio value={3}>三图</Radio>
    </Radio.Group>
  </Form.Item>
  <Form.Item
    name="coverImages"
    noStyle
    dependencies={['coverType']}
    rules={({ getFieldValue }) => {
      const coverType = getFieldValue('coverType');
      // 单图/三图时校验图片数量
      if (coverType === 1) {
        return [{ required: true, message: '请上传1张封面图片' }];
      } else if (coverType === 3) {
        return [{ 
          validator: (_, value) => {
            if (value?.length !== 3) {
              return Promise.reject('请上传3张封面图片');
            }
            return Promise.resolve();
          }
        }];
      }
      return [];
    }}
  >
    {({ field }) => {
      const { coverType } = form.getFieldsValue();
      const limit = coverType === 3 ? 3 : coverType === 1 ? 1 : 0;
      
      return limit > 0 ? (
        <UploadImage 
          limit={limit}
          value={field.value || []}
          onChange={field.onChange}
          style={{ marginTop: '10px' }}
        />
      ) : null;
    }}
  </Form.Item>
</Form.Item>
```

​


### Day8-07.文章封面-实现切换封面类型
## Day8-07.文章封面-实现切换封面类型

#### 核心知识点

1. 监听封面类型切换，动态调整上传组件的数量限制

2. 切换类型时清空原有图片，重置表单校验

#### 精简代码案例

```
// src/pages/Article/Add.jsx 封面类型切换逻辑
import { useEffect } from 'react';
export default function ArticleAdd() {
  const [form] = Form.useForm();
  
  // 监听封面类型变化
  useEffect(() => {
    const unsubscribe = form.getFieldValue('coverType', (coverType) => {
      // 切换类型时清空封面图片
      form.setFieldsValue({ coverImages: [] });
      // 清除封面图片的校验提示
      form.validateFields(['coverImages']);
    });
    return () => unsubscribe();
  }, [form]);
  // 封面区域改造（优化切换逻辑）
  <Form.Item label="文章封面">
    <Form.Item name="coverType" noStyle>
      <Radio.Group onChange={() => {
        // 切换类型时清空图片
        form.setFieldsValue({ coverImages: [] });
      }}>
        <Radio value={0}>无图</Radio>
        <Radio value={1}>单图</Radio>
        <Radio value={3}>三图</Radio>
      </Radio.Group>
    </Form.Item>
    <Form.Item
      name="coverImages"
      noStyle
      dependencies={['coverType']}
    >
      {({ field }) => {
        const coverType = form.getFieldValue('coverType');
        const limit = coverType === 3 ? 3 : coverType === 1 ? 1 : 0;
        
        return limit > 0 ? (
          <div style={{ marginTop: '10px' }}>
            <UploadImage 
              limit={limit}
              value={field.value || []}
              onChange={field.onChange}
            />
            <div style={{ color: '#999', marginTop: '8px' }}>
              请上传 {limit} 张封面图片
            </div>
          </div>
        ) : null;
      }}
    </Form.Item>
  </Form.Item>
}
```

​


### Day8-08.文章封面-控制上传图片的数量
## Day8-08.文章封面-控制上传图片的数量

#### 核心知识点

1. 完善 Upload 组件的数量限制逻辑

2. 适配单图/三图模式的数量校验，提示用户

#### 精简代码案例

```
// 优化 UploadImage 组件的数量控制
// src/components/UploadImage/index.jsx
export default function UploadImage({ limit = 1, onChange, value = [] }) {
  const [fileList, setFileList] = useState(
    value.map(url => ({ url, uid: url, status: 'done' }))
  );
  // 上传前校验增强
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('只能上传图片格式（JPG/PNG/GIF）！');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('单张图片大小不能超过 2MB！');
      return false;
    }
    // 精确数量校验
    const currentCount = fileList.filter(f => f.status === 'done').length;
    if (currentCount >= limit) {
      message.error(`当前最多只能上传 ${limit} 张图片，已上传 ${currentCount} 张`);
      return false;
    }
    return true;
  };
  // 限制显示的上传按钮
  const renderUploadButton = () => {
    const currentCount = fileList.filter(f => f.status === 'done').length;
    if (currentCount >= limit) return null;
    
    return (
      <div>
        <UploadOutlined />
        <div style={{ marginTop: 8 }}>上传图片</div>
      </div>
    );
  };
  return (
    <Upload
      action="/api/upload/image"
      name="file"
      fileList={fileList}
      beforeUpload={beforeUpload}
      onChange={handleUploadChange}
      listType="picture-card"
      maxCount={limit}
    >
      {renderUploadButton()}
    </Upload>
  );
}
```

​


### Day8-09.文章封面-发布带封面的文章
## Day8-09.文章封面-发布带封面的文章

#### 核心知识点

1. 整合封面数据（类型+图片列表）到提交参数

2. 适配接口要求的封面数据格式

#### 精简代码案例

```
// 完善文章发布提交逻辑
// src/pages/Article/Add.jsx
const handleSubmit = async (values) => {
  try {
    setLoading(true);
    
    // 构造封面数据
    const coverData = {
      type: values.coverType,
      images: values.coverType === 0 ? [] : (values.coverImages || [])
    };
    // 构造完整提交数据
    const submitData = {
      title: values.title.trim(),
      channel_id: values.channelId,
      content: values.content,
      cover: coverData
    };
    // 调用发布接口
    const res = await publishArticleAPI(submitData);
    message.success('文章发布成功！');
    
    // 发布成功后处理
    if (res.data?.id) {
      // 可选：跳转到文章详情页
      // navigate(`/article/detail/${res.data.id}`);
      navigate('/article/list');
    } else {
      form.resetFields();
    }
  } catch (error) {
    const errMsg = error?.response?.data?.message || '发布失败，请重试';
    message.error(`文章发布失败：${errMsg}`);
  } finally {
    setLoading(false);
  }
};
```

​


### Day8-10.文章列表-功能描述和结构创建
## Day8-10.文章列表-功能描述和结构创建

#### 核心知识点

1. 文章列表功能：分页展示、频道筛选、状态筛选、编辑/删除操作

2. 搭建列表页基础结构：筛选区 + 表格区 + 分页区

#### 精简代码案例

```
// src/pages/Article/List.jsx
import { Card, Form, Select, Input, Button, Table, Space, Tag, Pagination } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useChannelList } from '@/hooks/useChannelList';
import './List.scss';
const { Option } = Select;
export default function ArticleList() {
  const [form] = Form.useForm();
  const { channelList } = useChannelList();
  
  // 模拟表格数据
  const tableData = [
    {
      id: 1,
      title: 'React 实战教程',
      channel: '科技',
      status: 1, // 1-草稿 2-待审核 3-已发布 4-已驳回
      createTime: '2026-03-15 10:20:30',
      cover: 'https://placeholder.pics/svg/100x60/DEDEDE/666666/Cover'
    },
    {
      id: 2,
      title: '前端性能优化指南',
      channel: '科技',
      status: 3,
      createTime: '2026-03-10 14:00:00',
      cover: 'https://placeholder.pics/svg/100x60/DEDEDE/666666/Cover'
    }
  ];
  // 表格列配置
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
      width: 100,
      render: (url) => <img src={url} alt="封面" style={{ width: '80px', height: '50px', objectFit: 'cover' }} />
    },
    {
      title: '标题',
      dataIndex: 'title',
      ellipsis: true
    },
    {
      title: '频道',
      dataIndex: 'channel',
      width: 100
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      render: (status) => {
        const statusMap = {
          1: { text: '草稿', color: 'default' },
          2: { text: '待审核', color: 'processing' },
          3: { text: '已发布', color: 'success' },
          4: { text: '已驳回', color: 'error' }
        };
        const { text, color } = statusMap[status] || statusMap[1];
        return <Tag color={color}>{text}</Tag>;
      }
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: 180
    },
    {
      title: '操作',
      width: 150,
      render: (_, record) => (
        <Space size="small">
          <Button type="text" icon={<EditOutlined />} onClick={() => handleEdit(record.id)}>
            编辑
          </Button>
          <Button type="text" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)}>
            删除
          </Button>
        </Space>
      )
    }
  ];
  // 筛选查询
  const handleSearch = (values) => {
    console.log('筛选条件：', values);
    // TODO: 调用列表接口
  };
  // 编辑文章
  const handleEdit = (id) => {
    // 跳转到编辑页
    // navigate(`/article/edit/${id}`);
  };
  // 删除文章
  const handleDelete = (id) => {
    // TODO: 调用删除接口
  };
  return (
    <div className="article-list">
      <Card bordered={false}>
        {/* 筛选区 */}
        <Form
          form={form}
          layout="inline"
          onFinish={handleSearch}
          initialValues={{ channelId: '', status: '' }}
        >
          <Form.Item name="title" label="文章标题">
            <Input placeholder="请输入标题关键词" allowClear style={{ width: 200 }} />
          </Form.Item>
          <Form.Item name="channelId" label="发布频道">
            <Select placeholder="请选择频道" allowClear style={{ width: 150 }}>
              {channelList.map(channel => (
                <Option key={channel.id} value={channel.id}>
                  {channel.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="status" label="文章状态">
            <Select placeholder="请选择状态" allowClear style={{ width: 150 }}>
              <Option value={1}>草稿</Option>
              <Option value={2}>待审核</Option>
              <Option value={3}>已发布</Option>
              <Option value={4}>已驳回</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
              查询
            </Button>
            <Button htmlType="reset" style={{ marginLeft: 8 }}>
              重置
            </Button>
          </Form.Item>
        </Form>
        {/* 表格区 */}
        <Table
          columns={columns}
          dataSource={tableData}
          rowKey="id"
          pagination={false}
          style={{ marginTop: 16 }}
        />
        {/* 分页区 */}
        <div style={{ marginTop: 16, textAlign: 'right' }}>
          <Pagination
            current={1}
            pageSize={10}
            total={20}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `共 ${total} 条记录`}
            onChange={(page, pageSize) => console.log(page, pageSize)}
          />
        </div>
      </Card>
    </div>
  );
}
```

```
// src/pages/Article/List.scss
.article-list {
  padding: 20px;
}
```

​


### Day8-11.文章列表-通过自定义hook获取频道列表
## Day8-11.文章列表-通过自定义hook获取频道列表

#### 核心知识点

1. 复用自定义 Hook `useChannelList` 获取频道数据

2. 处理加载状态，优化用户体验

#### 精简代码案例

```
// 完善文章列表页的频道列表获取
// src/pages/Article/List.jsx
import { useChannelList } from '@/hooks/useChannelList';
import { Spin } from 'antd';
export default function ArticleList() {
  const [form] = Form.useForm();
  const { channelList, loading: channelLoading } = useChannelList();
  return (
    <div className="article-list">
      <Card bordered={false}>
        {/* 筛选区 - 频道选择添加加载状态 */}
        <Form form={form} layout="inline" onFinish={handleSearch}>
          {/* 其他筛选项... */}
          <Form.Item name="channelId" label="发布频道">
            <Select 
              placeholder="请选择频道" 
              allowClear 
              style={{ width: 150 }}
              loading={channelLoading}
            >
              {channelList.map(channel => (
                <Option key={channel.id} value={channel.id}>
                  {channel.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {/* 其他筛选项... */}
        </Form>
        {/* 表格区 - 整体加载状态 */}
        <Spin spinning={channelLoading}>
          <Table
            columns={columns}
            dataSource={tableData}
            rowKey="id"
            pagination={false}
            style={{ marginTop: 16 }}
          />
        </Spin>
        {/* 分页区... */}
      </Card>
    </div>
  );
}
```

​


### Day8-12.文章列表-渲染table表格
## Day8-12.文章列表-渲染table表格

#### 核心知识点

1. 封装文章列表数据获取 Hook，支持分页和筛选

2. 动态渲染表格数据，处理加载/空数据状态

#### 精简代码案例

```javascript
// src/hooks/useArticleList.js - 文章列表 Hook
import { useState, useEffect } from 'react';
import { getArticleListAPI } from '@/api/article';
import { message } from 'antd';

export const useArticleList = (params = {}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  });

  // 获取文章列表
  const fetchArticleList = async (currentParams) => {
    try {
      setLoading(true);
      const res = await getArticleListAPI({
        page: currentParams.page || 1,
        per_page: currentParams.pageSize || 10,
        ...currentParams
      });
      
      setList(res.data.results || []);
      setPagination({
        current: res.data.page,
        pageSize: res.data.per_page,
        total: res.data.total_count
      });
    } catch (error) {
      message.error('获取文章列表失败');
      setList([]);
    } finally {
      setLoading(false);
    }
  };
  // 初始加载 & 参数变化重新加载
  useEffect(() => {
    fetchArticleList({
      page: pagination.current,
      pageSize: pagination.pageSize,
      ...params
    });
  }, [params, pagination.current, pagination.pageSize]);
  // 分页切换
  const handlePageChange = (page, pageSize) => {
    setPagination(prev => ({
      ...prev,
      current: page,
      pageSize
    }));
  };
  // 刷新列表
  const refreshList = () => {
    fetchArticleList({
      page: pagination.current,
      pageSize: pagination.pageSize,
      ...params
    });
  };
  return {
    list,
    loading,
    pagination,
    handlePageChange,
    refreshList
  };
};


// 改造文章列表页
// src/pages/Article/List.jsx
import { useArticleList } from '@/hooks/useArticleList';
import { useState } from 'react';
export default function ArticleList() {
  const [form] = Form.useForm();
  const { channelList, loading: channelLoading } = useChannelList();
  const [searchParams, setSearchParams] = useState({});
  
  // 使用自定义 Hook 获取列表数据
  const {
    list,
    loading,
    pagination,
    handlePageChange,
    refreshList
  } = useArticleList(searchParams);
  // 筛选查询
  const handleSearch = (values) => {
    setSearchParams({
      title: values.title,
      channel_id: values.channelId,
      status: values.status
    });
  };
  // 表格列配置不变...
  return (
    <div className="article-list">
      <Card bordered={false}>
        {/* 筛选区... */}
        
        {/* 表格区 - 加载状态 + 空数据处理 */}
        <Spin spinning={loading || channelLoading}>
          <Table
            columns={columns}
            dataSource={list}
            rowKey="id"
            pagination={false}
            style={{ marginTop: 16 }}
            locale={{ emptyText: '暂无文章数据' }}
          />
        </Spin>
        {/* 分页区 - 绑定分页事件 */}
        <div style={{ marginTop: 16, textAlign: 'right' }}>
          <Pagination
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={pagination.total}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `共 ${total} 条记录`}
            onChange={handlePageChange}
            onShowSizeChange={handlePageChange}
          />
        </div>
      </Card>
    </div>
  );
}
```

​


### Day8-13.文章列表-适配文章状态
## Day8-13.文章列表-适配文章状态

#### 核心知识点

1. 完善文章状态的展示和筛选逻辑

2. 状态映射配置化，支持扩展

#### 精简代码案例

```javascript
// src/pages/Article/List.jsx 优化状态处理
export default function ArticleList() {
  // 状态配置（抽离为常量，便于维护）
  const statusConfig = [
    { value: 1, label: '草稿', color: 'default' },
    { value: 2, label: '待审核', color: 'processing' },
    { value: 3, label: '已发布', color: 'success' },
    { value: 4, label: '已驳回', color: 'error' }
  ];
  // 表格列配置 - 状态列优化
  const columns = [
    // 其他列...
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      render: (status) => {
        const config = statusConfig.find(item => item.value === status) || statusConfig[0];
        return <Tag color={config.color}>{config.label}</Tag>;
      }
    },
    // 操作列...
  ];
  return (
    <div className="article-list">
      <Card bordered={false}>
        {/* 筛选区 - 状态选择优化 */}
        <Form form={form} layout="inline" onFinish={handleSearch}>
          {/* 其他筛选项... */}
          <Form.Item name="status" label="文章状态">
            <Select placeholder="请选择状态" allowClear style={{ width: 150 }}>
              {statusConfig.map(item => (
                <Option key={item.value} value={item.value}>
                  {item.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {/* 按钮... */}
        </Form>
        {/* 表格和分页... */}
      </Card>
    </div>
  );
}
```

#### 总结

1. **文章发布核心**：基于 AntD Form 搭建表单骨架，集成 Tinymce 富文本编辑器处理内容，AntD Upload 实现封面上传，支持单图/三图/无图模式，封装 API 完成表单提交；

2. **封面上传关键**：控制上传数量、类型、大小，监听封面类型切换动态调整上传组件，适配接口要求的封面数据格式；

3. **文章列表实现**：自定义 Hook 封装数据获取逻辑，支持分页和多条件筛选，Table 组件渲染列表，状态配置化管理展示样式；

4. **工程化技巧**：接口按模块封装，状态/配置抽离为常量，自定义 Hook 复用数据逻辑，加载/空数据状态优化用户体验，符合企业级内容管理系统开发规范。


### 第九天
文章列表功能完善、编辑文章实现及项目打包优化，覆盖筛选/分页/删除/编辑核心业务，以及生产环境打包的性能优化手段


### Day9-01.文章列表-筛选功能实现
## Day9-01.文章列表-筛选功能实现

#### 核心知识点

1. 整合多条件筛选参数（标题/频道/状态），联动列表接口

2. 筛选重置、查询防抖处理，优化用户体验

#### 精简代码案例

```
// src/hooks/useArticleList.js 增强筛选逻辑
import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import { getArticleListAPI } from '@/api/article';
import { message } from 'antd';
export const useArticleList = (initialParams = {}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  });
  const [searchParams, setSearchParams] = useState(initialParams);
  // 防抖处理列表请求
  const fetchArticleList = useCallback(
    debounce(async (params) => {
      try {
        setLoading(true);
        const res = await getArticleListAPI({
          page: params.page || 1,
          per_page: params.pageSize || 10,
          ...params
        });
        
        setList(res.data.results || []);
        setPagination({
          current: res.data.page,
          pageSize: res.data.per_page,
          total: res.data.total_count
        });
      } catch (error) {
        message.error('获取文章列表失败：' + (error.message || ''));
        setList([]);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );
  // 监听参数变化触发查询
  useEffect(() => {
    fetchArticleList({
      page: pagination.current,
      pageSize: pagination.pageSize,
      ...searchParams
    });
    // 清理防抖
    return () => fetchArticleList.cancel();
  }, [searchParams, pagination.current, pagination.pageSize]);
  // 手动触发筛选
  const handleSearch = (params) => {
    setSearchParams(params);
    // 筛选时重置页码到第一页
    setPagination(prev => ({ ...prev, current: 1 }));
  };
  // 重置筛选条件
  const handleReset = () => {
    setSearchParams(initialParams);
    setPagination(prev => ({ ...prev, current: 1 }));
  };
  return {
    list,
    loading,
    pagination,
    handleSearch,
    handleReset,
    refreshList: () => fetchArticleList({
      page: pagination.current,
      pageSize: pagination.pageSize,
      ...searchParams
    })
  };
};
// 文章列表页使用筛选逻辑
// src/pages/Article/List.jsx
import { useArticleList } from '@/hooks/useArticleList';
export default function ArticleList() {
  const [form] = Form.useForm();
  const { channelList } = useChannelList();
  
  // 初始化列表 Hook
  const {
    list,
    loading,
    pagination,
    handleSearch,
    handleReset,
    handlePageChange
  } = useArticleList();
  // 筛选查询
  const onSearch = (values) => {
    // 构造筛选参数
    const params = {
      title: values.title?.trim() || '',
      channel_id: values.channelId || '',
      status: values.status || ''
    };
    handleSearch(params);
  };
  // 重置筛选
  const onReset = () => {
    form.resetFields();
    handleReset();
  };
  return (
    <div className="article-list">
      <Card bordered={false}>
        {/* 筛选区 - 绑定查询/重置 */}
        <Form
          form={form}
          layout="inline"
          onFinish={onSearch}
          initialValues={{ channelId: '', status: '' }}
        >
          {/* 标题筛选 */}
          <Form.Item name="title" label="文章标题">
            <Input 
              placeholder="请输入标题关键词" 
              allowClear 
              style={{ width: 200 }}
              onPressEnter={() => form.submit()} // 回车查询
            />
          </Form.Item>
          
          {/* 频道/状态筛选... */}
          
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
              查询
            </Button>
            <Button onClick={onReset} style={{ marginLeft: 8 }}>
              重置
            </Button>
          </Form.Item>
        </Form>
        {/* 表格/分页... */}
      </Card>
    </div>
  );
}
```

​


### Day9-02.文章列表-分页功能实现
## Day9-02.文章列表-分页功能实现

#### 核心知识点

1. 完善分页参数传递，支持页码/页大小切换

2. 分页状态与筛选条件联动，保持筛选状态下的分页逻辑

#### 精简代码案例

```
// 完善 useArticleList Hook 的分页逻辑
// src/hooks/useArticleList.js
export const useArticleList = (initialParams = {}) => {
  // ... 原有状态
  // 分页切换
  const handlePageChange = (page, pageSize) => {
    setPagination(prev => ({
      ...prev,
      current: page,
      pageSize: pageSize || prev.pageSize
    }));
  };
  return {
    list,
    loading,
    pagination,
    handleSearch,
    handleReset,
    handlePageChange, // 暴露分页方法
    refreshList
  };
};
// 文章列表页绑定分页事件
// src/pages/Article/List.jsx
export default function ArticleList() {
  // ... 原有逻辑
  return (
    <div className="article-list">
      <Card bordered={false}>
        {/* 筛选区... */}
        
        {/* 表格区 */}
        <Spin spinning={loading || channelLoading}>
          <Table
            columns={columns}
            dataSource={list}
            rowKey="id"
            pagination={false}
            style={{ marginTop: 16 }}
            locale={{ emptyText: '暂无文章数据' }}
          />
        </Spin>
        {/* 分页区 - 绑定分页事件 */}
        <div style={{ marginTop: 16, textAlign: 'right' }}>
          <Pagination
            current={pagination.current}
            pageSize={pagination.pageSize}
            total={pagination.total}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `共 ${total} 条记录`}
            onChange={handlePageChange} // 页码切换
            onShowSizeChange={handlePageChange} // 页大小切换
            disabled={loading} // 加载中禁用分页
          />
        </div>
      </Card>
    </div>
  );
}
```

​


### Day9-03.文章列表-删除功能实现
## Day9-03.文章列表-删除功能实现

#### 核心知识点

1. 封装删除确认弹窗，避免误操作

2. 调用删除接口，成功后刷新列表

#### 精简代码案例

```
// src/api/article.js 新增删除接口
/**
 * 删除文章
 * @param {number} id - 文章ID
 * @returns 
 */
export const deleteArticleAPI = (id) => {
  return request({
    url: `/articles/${id}`,
    method: 'delete'
  });
};
// 文章列表页实现删除逻辑
// src/pages/Article/List.jsx
import { Modal, message } from 'antd';
import { deleteArticleAPI } from '@/api/article';
export default function ArticleList() {
  // ... 原有逻辑
  // 删除确认弹窗
  const [deleteModal, setDeleteModal] = useState({
    visible: false,
    id: null
  });
  // 打开删除确认框
  const showDeleteConfirm = (id) => {
    setDeleteModal({
      visible: true,
      id
    });
  };
  // 关闭删除确认框
  const closeDeleteModal = () => {
    setDeleteModal({
      visible: false,
      id: null
    });
  };
  // 执行删除操作
  const handleDelete = async () => {
    const { id } = deleteModal;
    if (!id) return;
    try {
      await deleteArticleAPI(id);
      message.success('文章删除成功');
      closeDeleteModal();
      // 刷新列表
      refreshList();
    } catch (error) {
      message.error('删除失败：' + (error.message || '服务器错误'));
    }
  };
  // 表格列配置 - 操作列改造
  const columns = [
    // ... 其他列
    {
      title: '操作',
      width: 150,
      render: (_, record) => (
        <Space size="small">
          <Button type="text" icon={<EditOutlined />} onClick={() => handleEdit(record.id)}>
            编辑
          </Button>
          <Button 
            type="text" 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => showDeleteConfirm(record.id)} // 打开确认框
          >
            删除
          </Button>
        </Space>
      )
    }
  ];
  return (
    <div className="article-list">
      {/* 筛选/表格/分页... */}
      
      {/* 删除确认弹窗 */}
      <Modal
        title="删除确认"
        open={deleteModal.visible}
        onOk={handleDelete}
        onCancel={closeDeleteModal}
        okText="确认删除"
        cancelText="取消"
        destroyOnClose
      >
        <p>确定要删除这篇文章吗？删除后将无法恢复！</p>
      </Modal>
    </div>
  );
}
```

​


### Day9-04.文章列表-携带id跳转到编辑页
## Day9-04.文章列表-携带id跳转到编辑页

#### 核心知识点

1. 配置编辑页路由，支持携带文章ID

2. 列表页编辑按钮跳转，传递文章ID参数

#### 精简代码案例

```
// src/router/index.js 配置编辑页路由
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArticleAdd from '@/pages/Article/Add';
import ArticleEdit from '@/pages/Article/Edit'; // 新增编辑页
import ArticleList from '@/pages/Article/List';
const router = createBrowserRouter([
  // ... 其他路由
  {
    path: '/article',
    children: [
      { path: 'list', element: <ArticleList /> },
      { path: 'add', element: <ArticleAdd /> },
      { path: 'edit/:id', element: <ArticleEdit /> } // 编辑页，带ID参数
    ]
  }
]);
// 文章列表页实现编辑跳转
// src/pages/Article/List.jsx
import { useNavigate } from 'react-router-dom';
export default function ArticleList() {
  const navigate = useNavigate();
  
  // 编辑文章跳转
  const handleEdit = (id) => {
    navigate(`/article/edit/${id}`);
  };
  // 表格操作列中调用 handleEdit(record.id)
}
```

​


### Day9-05.编辑文章-回填基础数据
## Day9-05.编辑文章-回填基础数据

#### 核心知识点

1. 从路由获取文章ID，调用详情接口获取数据

2. 表单回填标题/频道/内容等基础字段

#### 精简代码案例

```
// src/api/article.js 新增文章详情接口
/**
 * 获取文章详情
 * @param {number} id - 文章ID
 * @returns 
 */
export const getArticleDetailAPI = (id) => {
  return request({
    url: `/articles/${id}`,
    method: 'get'
  });
};
// 编辑页实现数据回填
// src/pages/Article/Edit.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Input, Select, Button, Card, Space, Spin, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import TinymceEditor from '@/components/TinymceEditor';
import UploadImage from '@/components/UploadImage';
import { useChannelList } from '@/hooks/useChannelList';
import { getArticleDetailAPI } from '@/api/article';
export default function ArticleEdit() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // 获取路由中的文章ID
  const navigate = useNavigate();
  const { channelList, loading: channelLoading } = useChannelList();
  // 获取文章详情并回填
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const res = await getArticleDetailAPI(id);
        const article = res.data;
        
        // 表单回填
        form.setFieldsValue({
          title: article.title,
          channelId: article.channel_id,
          content: article.content,
          coverType: article.cover.type,
          coverImages: article.cover.images
        });
      } catch (error) {
        message.error('获取文章详情失败：' + error.message);
        navigate('/article/list'); // 获取失败跳回列表
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id, form, navigate]);
  // 表单提交（后续实现更新逻辑）
  const handleSubmit = async (values) => {
    // TODO: 调用更新接口
  };
  if (loading || channelLoading) {
    return <Spin size="large" style={{ display: 'block', margin: '100px auto' }} />;
  }
  return (
    <div className="article-edit">
      <Card title="编辑文章" bordered={false}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ coverType: 0 }}
        >
          {/* 标题 */}
          <Form.Item
            name="title"
            label="文章标题"
            rules={[{ required: true, message: '请输入文章标题' }, { max: 50, message: '标题不超过50字' }]}
          >
            <Input placeholder="请输入文章标题" maxLength={50} />
          </Form.Item>
          {/* 频道 */}
          <Form.Item
            name="channelId"
            label="发布频道"
            rules={[{ required: true, message: '请选择发布频道' }]}
          >
            <Select placeholder="请选择发布频道" showSearch optionFilterProp="children">
              {channelList.map(channel => (
                <Option key={channel.id} value={channel.id}>
                  {channel.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          {/* 富文本内容 */}
          <Form.Item
            name="content"
            label="文章内容"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            <TinymceEditor />
          </Form.Item>
          {/* 封面区域（后续完善） */}
          {/* 提交按钮 */}
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" icon={<EditOutlined />}>
                更新文章
              </Button>
              <Button onClick={() => navigate('/article/list')}>返回列表</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
```

​


### Day9-06.编辑文章-回填封面信息
## Day9-06.编辑文章-回填封面信息

#### 核心知识点

1. 适配封面类型（无图/单图/三图），回填已上传的图片列表

2. 保持封面上传组件的交互逻辑与新增页一致

#### 精简代码案例

```
// 编辑页完善封面回填
// src/pages/Article/Edit.jsx
export default function ArticleEdit() {
  // ... 原有逻辑
  return (
    <div className="article-edit">
      <Card title="编辑文章" bordered={false}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          {/* 标题/频道/内容... */}
          {/* 封面区域 */}
          <Form.Item label="文章封面">
            <Form.Item
              name="coverType"
              noStyle
              rules={[{ required: true, message: '请选择封面类型' }]}
            >
              <Radio.Group onChange={() => {
                form.setFieldsValue({ coverImages: [] });
              }}>
                <Radio value={0}>无图</Radio>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="coverImages"
              noStyle
              dependencies={['coverType']}
              rules={({ getFieldValue }) => {
                const coverType = getFieldValue('coverType');
                if (coverType === 1) {
                  return [{ required: true, message: '请上传1张封面图片' }];
                } else if (coverType === 3) {
                  return [{ 
                    validator: (_, value) => {
                      if (value?.length !== 3) {
                        return Promise.reject('请上传3张封面图片');
                      }
                      return Promise.resolve();
                    }
                  }];
                }
                return [];
              }}
            >
              {({ field }) => {
                const coverType = form.getFieldValue('coverType');
                const limit = coverType === 3 ? 3 : coverType === 1 ? 1 : 0;
                
                return limit > 0 ? (
                  <div style={{ marginTop: '10px' }}>
                    <UploadImage 
                      limit={limit}
                      value={field.value || []}
                      onChange={field.onChange}
                    />
                  </div>
                ) : null;
              }}
            </Form.Item>
          </Form.Item>
          {/* 提交按钮... */}
        </Form>
      </Card>
    </div>
  );
}
```

​


### Day9-07.编辑文章-根据id适配编辑和新增状态
## Day9-07.编辑文章-根据id适配编辑和新增状态

#### 核心知识点

1. 复用新增页组件，通过路由ID判断是新增/编辑状态

2. 统一表单逻辑，适配不同状态的标题/按钮文案

#### 精简代码案例

```
// 重构文章发布/编辑为一个组件（推荐方案）
// src/pages/Article/Form.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Form, Input, Select, Button, Card, Space, Spin, Radio, message } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import TinymceEditor from '@/components/TinymceEditor';
import UploadImage from '@/components/UploadImage';
import { useChannelList } from '@/hooks/useChannelList';
import { getArticleDetailAPI, publishArticleAPI, updateArticleAPI } from '@/api/article';
export default function ArticleForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const { id } = useParams(); // 编辑页有ID，新增页无
  const navigate = useNavigate();
  const location = useLocation();
  const { channelList, loading: channelLoading } = useChannelList();
  // 判断是否为编辑模式
  const isEdit = !!id;
  // 初始化表单数据
  useEffect(() => {
    if (isEdit) {
      // 编辑模式：加载详情
      const fetchDetail = async () => {
        try {
          setLoading(true);
          const res = await getArticleDetailAPI(id);
          const article = res.data;
          
          form.setFieldsValue({
            title: article.title,
            channelId: article.channel_id,
            content: article.content,
            coverType: article.cover.type,
            coverImages: article.cover.images
          });
        } catch (error) {
          message.error('获取文章详情失败');
          navigate('/article/list');
        } finally {
          setLoading(false);
        }
      };
      fetchDetail();
    } else {
      // 新增模式：初始化默认值
      form.setFieldsValue({ coverType: 0 });
      setLoading(false);
    }
  }, [id, form, navigate]);
  // 表单提交
  const handleSubmit = async (values) => {
    try {
      setSubmitLoading(true);
      // 构造提交数据
      const submitData = {
        title: values.title.trim(),
        channel_id: values.channelId,
        content: values.content,
        cover: {
          type: values.coverType,
          images: values.coverType === 0 ? [] : (values.coverImages || [])
        }
      };
      if (isEdit) {
        // 编辑模式：更新文章
        await updateArticleAPI(id, submitData);
        message.success('文章更新成功');
      } else {
        // 新增模式：发布文章
        await publishArticleAPI(submitData);
        message.success('文章发布成功');
      }
      // 跳转列表页
      navigate('/article/list');
    } catch (error) {
      message.error(isEdit ? '更新失败' : '发布失败' + (error.message || ''));
    } finally {
      setSubmitLoading(false);
    }
  };
  if (loading || channelLoading) {
    return <Spin size="large" style={{ display: 'block', margin: '100px auto' }} />;
  }
  return (
    <div className="article-form">
      <Card title={isEdit ? '编辑文章' : '发布文章'} bordered={false}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          {/* 标题/频道/内容/封面 表单项（同之前） */}
          
          {/* 提交按钮 */}
          <Form.Item>
            <Space>
              <Button 
                type="primary" 
                htmlType="submit" 
                icon={isEdit ? <EditOutlined /> : <PlusOutlined />}
                loading={submitLoading}
              >
                {isEdit ? '更新文章' : '发布文章'}
              </Button>
              <Button onClick={() => navigate('/article/list')}>返回列表</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
// 路由配置调整
// src/router/index.js
const router = createBrowserRouter([
  // ... 其他路由
  {
    path: '/article',
    children: [
      { path: 'list', element: <ArticleList /> },
      { path: 'add', element: <ArticleForm /> }, // 新增
      { path: 'edit/:id', element: <ArticleForm /> } // 编辑
    ]
  }
]);
```

​


### Day9-08.编辑文章-更新文章
## Day9-08.编辑文章-更新文章

#### 核心知识点

1. 封装更新文章接口，区分新增/编辑的提交逻辑

2. 处理更新后的状态提示和页面跳转

#### 精简代码案例

```
// src/api/article.js 新增更新接口
/**
 * 更新文章
 * @param {number} id - 文章ID
 * @param {Object} data - 文章数据
 * @returns 
 */
export const updateArticleAPI = (id, data) => {
  return request({
    url: `/articles/${id}`,
    method: 'put',
    data
  });
};
// ArticleForm 组件中已实现更新逻辑（参考上一节代码）
// 核心区别：
// - 新增：调用 publishArticleAPI，无 ID 参数
// - 编辑：调用 updateArticleAPI，传递 ID 参数
```

​


### Day9-09.项目打包-基础打包和本地预览
## Day9-09.项目打包-基础打包和本地预览

#### 核心知识点

1. CRA 基础打包命令，配置环境变量

2. 使用 `serve` 本地预览打包产物

#### 精简代码案例

```
# 1. 打包前配置环境变量（根目录创建 .env.production）
# .env.production
REACT_APP_API_BASE_URL=https://api.xxx.com
GENERATE_SOURCEMAP=false # 关闭sourcemap，减小包体积

# 2. 执行打包命令
npm run build

# 3. 安装 serve 用于本地预览
npm install -g serve

# 4. 预览打包产物
serve -s build -p 3001
# 访问 http://localhost:3001 即可预览生产环境打包后的项目
```

​


### Day9-10.打包优化-配置路由懒加载
## Day9-10.打包优化-配置路由懒加载

#### 核心知识点

1. 使用 React.lazy + Suspense 实现路由组件懒加载

2. 拆分代码块，减少首屏加载体积

#### 精简代码案例

```javascript
// src/router/index.js 配置路由懒加载
import { createBrowserRouter, RouterProvider, Suspense } from 'react-router-dom';
import { Spin } from 'antd';


// 基础组件正常导入（如 Layout/Login）
import Layout from '@/layout';
import Login from '@/pages/Login';


// 懒加载其他组件
const ArticleList = React.lazy(() => import('@/pages/Article/List'));
const ArticleForm = React.lazy(() => import('@/pages/Article/Form'));
const Home = React.lazy(() => import('@/pages/Home'));


// 加载占位组件
const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Spin size="large" />
  </div>
);
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { 
        index: true, 
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ) 
      },
      { 
        path: 'article/list', 
        element: (
          <Suspense fallback={<Loading />}>
            <ArticleList />
          </Suspense>
        ) 
      },
      { 
        path: 'article/add', 
        element: (
          <Suspense fallback={<Loading />}>
            <ArticleForm />
          </Suspense>
        ) 
      },
      { 
        path: 'article/edit/:id', 
        element: (
          <Suspense fallback={<Loading />}>
            <ArticleForm />
          </Suspense>
        ) 
      }
    ]
  }
]);
export default router;
```

​


### Day9-11.打包优化-包体积可视化分析
## Day9-11.打包优化-包体积可视化分析

#### 核心知识点

1. 使用 `source-map-explorer` 分析打包后的包体积

2. 定位体积过大的依赖，针对性优化

#### 精简代码案例

```
# 1. 安装分析工具
npm install --save-dev source-map-explorer

# 2. 临时开启 sourcemap（修改 .env.production）
# GENERATE_SOURCEMAP=true

# 3. 重新打包
npm run build

# 4. 添加分析脚本（package.json）
"scripts": {
  "analyze": "source-map-explorer 'build/static/js/*.js'"
}

# 5. 执行分析命令
npm run analyze

# 执行后会自动打开浏览器，展示各依赖的体积占比
```

​


### Day9-12.打包优化-CDN配置
## Day9-12.打包优化-CDN配置

#### 核心知识点

1. 配置 `craco` 排除第三方依赖（如 React/AntD/Echarts）

2. 通过 CDN 引入大体积依赖，减小打包体积

#### 精简代码案例

```
// 1. 配置 craco 排除第三方依赖
// craco.config.js
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // 排除不需要打包的依赖
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      antd: 'antd',
      echarts: 'echarts',
      axios: 'axios',
      dayjs: 'dayjs'
    }
  }
};
// 2. 在 public/index.html 中引入 CDN 资源
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <!-- 其他 meta/title -->
    
    <!-- 引入 CDN 资源 -->
    <!-- React -->
    <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    
    <!-- AntD -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@5.12.8/dist/reset.css" />
    <script src="https://cdn.jsdelivr.net/npm/antd@5.12.8/dist/antd.min.js"></script>
    
    <!-- Echarts -->
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
    
    <!-- Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.2/dist/axios.min.js"></script>
    
    <!-- Dayjs -->
    <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.10/dayjs.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
// 3. 重新打包，查看体积优化效果
npm run build
```

#### 总结

1. **文章列表完善**：实现多条件筛选（防抖处理）、分页切换、删除确认弹窗，编辑跳转传递ID参数，核心逻辑封装为自定义Hook，提升复用性；

2. **编辑文章核心**：复用新增页组件，通过路由ID判断编辑/新增状态，适配数据回填（基础信息+封面），区分发布/更新接口调用；

3. **打包优化关键**：

4. **工程化价值**：统一表单/列表逻辑，适配新增/编辑状态，打包优化提升生产环境加载性能，符合企业级项目交付标准。


### 第十天
这份规划聚焦 React 高级 Hooks、类组件核心特性及 Zustand 状态管理，从性能优化 Hooks 到类组件生命周期，再到轻量级状态管理方案，覆盖 React 进阶开发必备知识点，代码示例简洁易懂，突出核心用法。


### Day10-01.useReducer
## Day10-01.useReducer

#### 核心知识点

1. `useReducer` 是 useState 的替代方案，适用于复杂状态逻辑（多状态/关联状态）

2. 核心流程：`state + action → newState`，遵循 Redux 思想但更轻量

#### 精简代码案例

```
import { useReducer } from 'react';
// 1. 定义 reducer 函数：纯函数，处理状态逻辑
const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    case 'SET':
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
function Counter() {
  // 2. 使用 useReducer：参数(reducer, 初始state, 初始化函数)
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div>
      <h2>计数：{state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>重置</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>设置为10</button>
    </div>
  );
}
export default Counter;
```

#### 关键说明

* **reducer 函数**：接收当前 state 和 action，返回新 state，必须是纯函数

* **dispatch 方法**：用于触发 action，更新状态

* **适用场景**：状态逻辑复杂（多个子值/状态依赖前一个状态）、状态更新逻辑需要复用


### Day10-02.useMemo
## Day10-02.useMemo

#### 核心知识点

1. `useMemo` 用于**缓存计算结果**，避免重复计算（性能优化）

2. 依赖数组变化时才重新计算，否则返回缓存值

#### 精简代码案例

```
import { useState, useMemo } from 'react';
// 模拟耗时计算
const calculateTotal = (list) => {
  console.log('执行耗时计算...');
  return list.reduce((sum, item) => sum + item, 0);
};
function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [numbers] = useState([1, 2, 3, 4, 5]);
  // 1. 未使用 useMemo：每次渲染都会执行 calculateTotal
  // const total = calculateTotal(numbers);
  // 2. 使用 useMemo：仅当 numbers 变化时重新计算
  const total = useMemo(() => calculateTotal(numbers), [numbers]);
  return (
    <div>
      <h2>计数：{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>数组总和：{total}</p>
    </div>
  );
}
export default UseMemoDemo;
```

#### 关键说明

* **语法**：`useMemo(() => 计算逻辑, [依赖数组])`

* **返回值**：缓存的计算结果

* **适用场景**：复杂计算（如大数据处理、循环遍历）、避免不必要的渲染

* **注意**：不要滥用，简单计算无需使用（有缓存开销）

​


### Day10-03.React.memo-基础使用
## Day10-03.React.memo-基础使用

#### 核心知识点

1. `React.memo` 是高阶组件（HOC），用于**缓存函数组件**，避免不必要的重渲染

2. 默认浅比较 props，仅当 props 变化时才重新渲染

#### 精简代码案例

```
import { useState } from 'react';
import { memo } from 'react';
// 子组件：使用 memo 包装
const UserCard = memo(({ user }) => {
  console.log('UserCard 渲染...');
  return (
    <div style={{ border: '1px solid #eee', padding: '10px', margin: '10px' }}>
      <h3>{user.name}</h3>
      <p>年龄：{user.age}</p>
    </div>
  );
});
function MemoDemo() {
  const [count, setCount] = useState(0);
  const [user] = useState({ name: '张三', age: 20 });
  return (
    <div>
      <h2>计数：{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {/* 父组件重渲染，但子组件 props 未变，不会重渲染 */}
      <UserCard user={user} />
    </div>
  );
}
export default MemoDemo;
```

#### 关键说明

* **语法**：`memo(函数组件)`

* **默认行为**：浅比较 props 对象的所有属性

* **适用场景**：纯展示组件、父组件频繁重渲染但子组件 props 不变


### Day10-04.React.memo-props比较机制说明
## Day10-04.React.memo-props比较机制说明

#### 核心知识点

1. 默认比较机制：浅比较（Shallow Compare）

2. 自定义比较函数：通过第二个参数自定义 props 比较逻辑

#### 精简代码案例

```
import { useState } from 'react';
import { memo } from 'react';
// 自定义比较函数：仅比较 user.name 和 user.age
const compareProps = (prevProps, nextProps) => {
  return (
    prevProps.user.name === nextProps.user.name &&
    prevProps.user.age === nextProps.user.age
  );
};
// 使用自定义比较函数
const UserCard = memo(({ user }) => {
  console.log('UserCard 渲染...');
  return (
    <div>
      <h3>{user.name}</h3>
      <p>年龄：{user.age}</p>
    </div>
  );
}, compareProps);
function MemoCompareDemo() {
  const [count, setCount] = useState(0);
  // 每次渲染创建新对象（引用地址变化）
  const user = { name: '张三', age: 20 };
  return (
    <div>
      <h2>计数：{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {/* 虽然引用变化，但自定义比较函数认为 props 未变，不重渲染 */}
      <UserCard user={user} />
    </div>
  );
}
export default MemoCompareDemo;
```

#### 关键说明

* **浅比较局限**：引用类型即使内容相同，引用地址变化也会触发重渲染

* **自定义比较函数**：返回 `true` 表示 props 未变（不重渲染），返回 `false` 表示 props 变化（重渲染）

* **性能权衡**：自定义比较函数复杂时，可能抵消缓存带来的性能收益


### Day10-05.useCallback
## Day10-05.useCallback

#### 核心知识点

1. `useCallback` 用于**缓存函数引用**，避免因函数重新创建导致子组件不必要的重渲染

2. 常与 `React.memo` 配合使用

#### 精简代码案例

```
import { useState, memo, useCallback } from 'react';
// 子组件：接收函数 props
const Button = memo(({ onClick, children }) => {
  console.log(`${children} 按钮渲染...`);
  return <button onClick={onClick}>{children}</button>;
});
function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  // 1. 未使用 useCallback：每次渲染创建新函数
  // const increment = () => setCount(count + 1);
  // 2. 使用 useCallback：缓存函数引用，仅当依赖变化时重新创建
  const increment = useCallback(() => {
    setCount(prev => prev + 1); // 推荐使用函数式更新，避免依赖 count
  }, []); // 空依赖：永远返回同一个函数引用
  const changeText = useCallback((value) => {
    setText(value);
  }, []);
  return (
    <div>
      <h2>计数：{count}</h2>
      <h2>文本：{text}</h2>
      <Button onClick={increment}>+1</Button>
      <Button onClick={() => changeText('Hello React')}>设置文本</Button>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => changeText(e.target.value)} 
      />
    </div>
  );
}
export default UseCallbackDemo;
```

#### 关键说明

* **语法**：`useCallback(() => 函数逻辑, [依赖数组])`

* **返回值**：缓存的函数引用

* **核心场景**：传递给 memo 包装的子组件的回调函数

* **最佳实践**：配合函数式更新（`setState(prev => newState)`）减少依赖


### Day10-06.React-forwardRef
## Day10-06.React.forwardRef

#### 核心知识点

1. `forwardRef` 用于**转发 ref**，让父组件能获取到子组件内部的 DOM 元素/组件实例

2. 解决函数组件无法直接接收 ref 的问题

#### 精简代码案例

```
import { useRef, forwardRef } from 'react';
// 1. 子组件：使用 forwardRef 转发 ref
const Input = forwardRef((props, ref) => {
  // 将 ref 绑定到 DOM 元素
  return <input ref={ref} {...props} placeholder="请输入内容" />;
});
function ForwardRefDemo() {
  // 2. 父组件：创建 ref
  const inputRef = useRef(null);
  const focusInput = () => {
    // 3. 访问子组件的 DOM 元素
    inputRef.current.focus();
  };
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={focusInput}>聚焦输入框</button>
    </div>
  );
}
export default ForwardRefDemo;
```

#### 关键说明

* **语法**：`forwardRef((props, ref) => 组件逻辑)`

* **参数**：第二个参数 `ref` 是父组件传递的 ref 对象

* **适用场景**：需要父组件操作子组件 DOM 元素（如聚焦输入框、滚动到指定位置）

​


### Day10-07.useInperativeHandle
## Day10-07.useImperativeHandle

#### 核心知识点

1. `useImperativeHandle` 用于**自定义暴露给父组件的实例值**，避免暴露整个 DOM 元素

2. 配合 `forwardRef` 使用，控制 ref 暴露的接口，增强封装性

#### 精简代码案例

```
import { useRef, forwardRef, useImperativeHandle } from 'react';
// 子组件：自定义暴露的方法
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  
  // 1. 自定义暴露给父组件的方法/属性
  useImperativeHandle(ref, () => ({
    // 只暴露需要的方法，不暴露整个 DOM 元素
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    },
    getValue: () => inputRef.current.value
  }), []); // 空依赖：始终返回同一个对象
  return <input ref={inputRef} {...props} />;
});
function UseImperativeHandleDemo() {
  const customInputRef = useRef(null);
  const handleFocus = () => {
    // 2. 调用子组件暴露的方法
    customInputRef.current.focus();
  };
  const handleClear = () => {
    customInputRef.current.clear();
  };
  const handleGetValue = () => {
    alert('输入值：' + customInputRef.current.getValue());
  };
  return (
    <div>
      <CustomInput placeholder="自定义输入框" />
      <button onClick={handleFocus}>聚焦</button>
      <button onClick={handleClear}>清空</button>
      <button onClick={handleGetValue}>获取值</button>
    </div>
  );
}
export default UseImperativeHandleDemo;
```

#### 关键说明

* **语法**：`useImperativeHandle(ref, () => 暴露的对象, [依赖数组])`

* **核心价值**：封装性 - 只暴露必要的方法，避免父组件直接操作子组件 DOM

* **适用场景**：需要父组件调用子组件的特定方法（而非直接操作 DOM）


### Day10-08.Class类组件-基础结构
## Day10-08.Class类组件-基础结构

#### 核心知识点

1. 类组件是 React 早期的组件形式，基于 ES6 Class 实现

2. 核心特性：继承 `React.Component`、`render` 方法、`this.state` 管理状态

#### 精简代码案例

```
import React from 'react';
// 类组件基础结构
class Counter extends React.Component {
  // 1. 构造函数：初始化状态、绑定方法
  constructor(props) {
    super(props); // 必须调用 super
    // 初始化状态
    this.state = {
      count: 0,
      message: 'Hello Class Component'
    };
    // 绑定 this（方式1：构造函数绑定）
    this.increment = this.increment.bind(this);
  }
  // 2. 自定义方法
  increment() {
    // 更新状态：必须使用 setState
    this.setState({ count: this.state.count + 1 });
  }
  // 方式2：箭头函数方法（无需绑定 this）
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  // 3. 渲染方法（必须实现）
  render() {
    // 访问 props 和 state
    const { title } = this.props;
    const { count, message } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        <h3>{message}</h3>
        <p>计数：{count}</p>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        {/* 方式3：内联箭头函数（每次渲染创建新函数） */}
        <button onClick={() => this.setState({ count: 0 })}>重置</button>
      </div>
    );
  }
}
// 使用类组件
function ClassComponentDemo() {
  return <Counter title="类组件计数器" />;
}
export default ClassComponentDemo;
```

#### 关键说明

* **核心要求**：必须继承 `React.Component`，必须实现 `render` 方法

* **状态管理**：通过 `this.state` 初始化，`this.setState()` 更新（异步更新）

* **this 绑定**：构造函数绑定/箭头函数方法/内联箭头函数（推荐箭头函数方法）


### Day10-09.类组件生命周期函数
## Day10-09.类组件生命周期函数

#### 核心知识点

1. 类组件生命周期分为三个阶段：挂载、更新、卸载

2. 常用生命周期函数：`componentDidMount`、`shouldComponentUpdate`、`componentDidUpdate`、`componentWillUnmount`

#### 精简代码案例

```
import React from 'react';
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. 构造函数：constructor');
  }
  // 挂载阶段
  componentDidMount() {
    console.log('3. 组件挂载完成：componentDidMount');
    // 常用：发起网络请求、订阅事件、操作DOM
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  // 更新阶段
  shouldComponentUpdate(nextProps, nextState) {
    console.log('4. 是否更新：shouldComponentUpdate', nextState);
    // 控制是否重渲染（性能优化）
    return nextState.count % 2 === 0; // 仅当计数为偶数时更新
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('6. 组件更新完成：componentDidUpdate', prevState, this.state);
    // 常用：更新后操作DOM、根据props/state变化发起请求
  }
  // 卸载阶段
  componentWillUnmount() {
    console.log('7. 组件即将卸载：componentWillUnmount');
    // 常用：清除定时器、取消订阅、清理事件监听
    clearInterval(this.timer);
  }
  render() {
    console.log('2/5. 渲染：render');
    return (
      <div>
        <h2>生命周期演示</h2>
        <p>计数：{this.state.count}</p>
      </div>
    );
  }
}
// 父组件控制子组件挂载/卸载
function LifecycleContainer() {
  const [show, setShow] = React.useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? '卸载组件' : '挂载组件'}
      </button>
      {show && <LifecycleDemo />}
    </div>
  );
}
export default LifecycleContainer;
```

#### 生命周期流程图

```
graph TD
    A[constructor] --> B[render]
    B --> C[componentDidMount]
    C --> D[props/state变化]
    D --> E[shouldComponentUpdate]
    E -- 是 --> F[render]
    E -- 否 --> D
    F --> G[componentDidUpdate]
    G --> D
    H[卸载触发] --> I[componentWillUnmount]
```

#### 关键说明

* **挂载阶段**：constructor → render → componentDidMount

* **更新阶段**：shouldComponentUpdate → render → componentDidUpdate

* **卸载阶段**：componentWillUnmount

* **核心用途**：


### Day10-10.类组件的组件通信说明
## Day10-10.类组件的组件通信说明

#### 核心知识点

类组件通信方式与函数组件类似，但语法不同，核心方式：

1. 父传子：props

2. 子传父：回调函数

3. 跨组件：Context/Redux/Zustand

#### 精简代码案例

```
import React from 'react';
// 1. 父传子：通过 props 传递数据
class Child extends React.Component {
  render() {
    const { name, age, onNameChange } = this.props;
    return (
      <div style={{ border: '1px solid #eee', padding: '10px' }}>
        <h3>子组件</h3>
        <p>姓名：{name}</p>
        <p>年龄：{age}</p>
        <button onClick={() => onNameChange('李四')}>修改姓名</button>
      </div>
    );
  }
}
// 2. 子传父：通过回调函数
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '张三',
      age: 20
    };
  }
  handleNameChange = (newName) => {
    // 子组件触发父组件方法，实现子传父
    this.setState({ name: newName });
  };
  render() {
    return (
      <div>
        <h2>父组件</h2>
        <p>姓名：{this.state.name}</p>
        {/* 父传子：传递数据和回调函数 */}
        <Child 
          name={this.state.name} 
          age={this.state.age}
          onNameChange={this.handleNameChange}
        />
      </div>
    );
  }
}
// 3. Context 跨组件通信
// 创建 Context
const UserContext = React.createContext();
// 上层组件：提供 Context
class ContextProvider extends React.Component {
  state = {
    user: { name: 'React', role: 'admin' },
    updateUser: (newUser) => {
      this.setState({ user: newUser });
    }
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
// 深层子组件：消费 Context
class DeepChild extends React.Component {
  // 方式1：static contextType
  static contextType = UserContext;
  render() {
    const { user, updateUser } = this.context;
    return (
      <div style={{ marginTop: '20px', border: '1px solid #eee', padding: '10px' }}>
        <h3>深层子组件（Context）</h3>
        <p>用户名：{user.name}</p>
        <p>角色：{user.role}</p>
        <button onClick={() => updateUser({ name: 'Zustand', role: 'superadmin' })}>
          更新用户信息
        </button>
      </div>
    );
  }
}
// 方式2：Consumer 方式（适用于多个 Context）
// <UserContext.Consumer>
//   {value => (
//     <div>{value.user.name}</div>
//   )}
// </UserContext.Consumer>
function ClassComponentCommunication() {
  return (
    <ContextProvider>
      <Parent />
      <DeepChild />
    </ContextProvider>
  );
}
export default ClassComponentCommunication;
```

#### 关键说明

* **父传子**：类组件通过 `this.props` 接收父组件传递的数据

* **子传父**：父组件传递回调函数给子组件，子组件调用该函数传递数据

* **Context 通信**：

  * 类组件可通过 `static contextType` 接收单个 Context

  * 多个 Context 需使用 `Context.Consumer`

  * 函数组件使用 `useContext`，类组件无此 Hook

  * ​


### Day10-11.zustand-基础用法
## Day10-11.zustand-基础用法

#### 核心知识点

1. Zustand 是轻量级状态管理库，比 Redux 更简洁，无需 Provider 包裹

2. 核心特性：简单 API、支持中间件、Immutable 状态、React 无关（可用于任何 JS 环境）

#### 精简代码案例

```
# 安装 zustand
npm install zustand --save
```

```
import { create } from 'zustand';
// 1. 创建 store
const useCounterStore = create((set) => ({
  // 状态
  count: 0,
  message: 'Hello Zustand',
  
  // 修改状态的方法（action）
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  updateMessage: (newMsg) => set({ message: newMsg })
}));
// 2. 组件中使用 store
function ZustandBasic() {
  // 方式1：获取整个 store
  // const store = useCounterStore();
  // 方式2：精准获取需要的状态（性能优化）
  const count = useCounterStore((state) => state.count);
  const message = useCounterStore((state) => state.message);
  
  // 获取方法
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const updateMessage = useCounterStore((state) => state.updateMessage);
  return (
    <div>
      <h2>Zustand 基础使用</h2>
      <p>计数：{count}</p>
      <p>消息：{message}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>重置</button>
      <button onClick={() => updateMessage('Zustand 真好用')}>
        修改消息
      </button>
    </div>
  );
}
export default ZustandBasic;
```

#### 关键说明

* **创建 store**：`create((set, get) => ({ 状态, 方法 }))`

* **使用 store**：`useStore(selector)` 选择需要的状态/方法，避免不必要的重渲染

* **核心优势**：无需 Provider、API 简洁、自动优化重渲染


### Day10-12.zustand-异步支持
## Day10-12.zustand-异步支持

#### 核心知识点

1. Zustand 天然支持异步 action，无需中间件

2. 异步操作：在 action 中执行异步逻辑，完成后调用 `set` 更新状态

#### 精简代码案例

```
import { create } from 'zustand';
// 创建带异步 action 的 store
const useUserStore = create((set) => ({
  // 状态
  user: null,
  loading: false,
  error: null,
  // 异步 action：模拟登录
  login: async (username, password) => {
    try {
      set({ loading: true, error: null });
      // 模拟 API 请求
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: 1,
            name: username,
            token: 'fake-token-123456'
          });
        }, 1000);
      });
      // 请求成功：更新状态
      set({ user: res, loading: false });
      return res;
    } catch (error) {
      // 请求失败：更新错误状态
      set({ error: error.message, loading: false });
      throw error;
    }
  },
  // 退出登录
  logout: () => set({ user: null })
}));
// 组件中使用异步 action
function ZustandAsync() {
  const user = useUserStore((state) => state.user);
  const loading = useUserStore((state) => state.loading);
  const error = useUserStore((state) => state.error);
  const login = useUserStore((state) => state.login);
  const logout = useUserStore((state) => state.logout);
  const handleLogin = async () => {
    try {
      await login('admin', '123456');
      alert('登录成功！');
    } catch (err) {
      alert('登录失败：' + err);
    }
  };
  if (loading) return <div>登录中...</div>;
  if (error) return <div style={{ color: 'red' }}>错误：{error}</div>;
  return (
    <div>
      <h2>Zustand 异步支持</h2>
      {user ? (
        <div>
          <p>欢迎，{user.name}！</p>
          <p>Token：{user.token}</p>
          <button onClick={logout}>退出登录</button>
        </div>
      ) : (
        <button onClick={handleLogin} disabled={loading}>
          模拟登录
        </button>
      )}
    </div>
  );
}
export default ZustandAsync;
```

#### 关键说明

* **异步 action**：直接在 action 中使用 `async/await`

* **加载状态管理**：通过 `loading` 状态控制 UI 加载态

* **错误处理**：捕获异步错误，更新 `error` 状态，方便组件展示错误信息

* **返回值**：异步 action 可返回结果，组件中可 await 获取

​


### Day10-13.zustand-切片模式
## Day10-13.zustand-切片模式

#### 核心知识点

1. 切片模式：将大型 store 拆分为多个小切片（slice），便于维护

2. 支持组合多个切片，实现模块化状态管理

#### 精简代码案例

```
import { create } from 'zustand';
// 1. 定义切片
// 计数器切片
const createCounterSlice = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
});
// 用户切片
const createUserSlice = (set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null })
});
// 文章切片
const createArticleSlice = (set) => ({
  articles: [],
  loading: false,
  fetchArticles: async () => {
    set({ loading: true });
    // 模拟请求
    const articles = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Zustand 切片模式' },
          { id: 2, title: 'React 高级 Hooks' }
        ]);
      }, 800);
    });
    set({ articles, loading: false });
  }
});
// 2. 组合切片创建 store
const useAppStore = create((...a) => ({
  ...createCounterSlice(...a),
  ...createUserSlice(...a),
  ...createArticleSlice(...a)
}));
// 3. 组件中使用切片状态
function ZustandSlice() {
  // 计数器切片
  const { count, increment } = useAppStore((state) => ({
    count: state.count,
    increment: state.increment
  }));
  // 用户切片
  const { user, setUser } = useAppStore((state) => ({
    user: state.user,
    setUser: state.setUser
  }));
  // 文章切片
  const { articles, loading, fetchArticles } = useAppStore((state) => ({
    articles: state.articles,
    loading: state.loading,
    fetchArticles: state.fetchArticles
  }));
  return (
    <div>
      <h2>Zustand 切片模式</h2>
      
      {/* 计数器 */}
      <div>
        <h3>计数器：{count}</h3>
        <button onClick={increment}>+1</button>
      </div>
      {/* 用户 */}
      <div style={{ margin: '10px 0' }}>
        <h3>用户：{user ? user.name : '未登录'}</h3>
        <button onClick={() => setUser({ name: '张三', id: 1 })}>
          模拟登录
        </button>
      </div>
      {/* 文章 */}
      <div>
        <h3>文章列表</h3>
        <button onClick={fetchArticles} disabled={loading}>
          {loading ? '加载中...' : '获取文章'}
        </button>
        <ul>
          {articles.map(article => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ZustandSlice;
```

#### 关键说明

* **切片拆分**：按业务模块拆分 store，每个切片负责自己的状态和 action

* **组合切片**：创建 store 时合并所有切片，保持 API 统一

* **优势**：

  * 模块化：便于多人协作和维护

  * 按需引入：组件可只获取需要的切片状态

  * 可复用：切片可在多个项目中复用

* **进阶用法**：可结合 `zustand/middleware` 实现持久化、日志等功能

#### 总结

1. **性能优化 Hooks**：

   1. `useMemo` 缓存计算结果，`useCallback` 缓存函数引用，`React.memo` 缓存组件

   2. 核心目标：减少不必要的计算和重渲染，提升性能

2. **Ref 相关**：

   1. `forwardRef` 转发 ref，`useImperativeHandle` 自定义暴露的接口，增强封装性

3. **类组件核心**：

   1. 基础结构：继承 `React.Component`，`render` 方法必实现，`setState` 更新状态

   2. 生命周期：挂载/更新/卸载三个阶段，重点关注副作用的初始化和清理

   3. 组件通信：props 父传子、回调函数子传父、Context 跨组件通信

4. **Zustand 状态管理**：

   1. 轻量级替代 Redux，无需 Provider，API 简洁

   2. 支持异步 action、切片模式，适合中大型项目的状态管理

   3. 切片模式实现模块化，便于维护和复用


### 第十一天
React 与 TypeScript 结合的核心用法，从环境搭建到 Hooks/Props/Ref 的类型定义，覆盖 TS 在 React 开发中的高频场景，代码示例简洁且贴近实战，帮助你快速掌握类型安全的 React 开发方式


### Day11-01.React+TS基础环境创建
#### 核心知识点

1. 使用 `create-react-app` 快速创建 React + TS 项目

2. 核心依赖：`typescript`、`@types/react`、`@types/react-dom`（类型声明文件）

#### 精简操作步骤

```text
# 1. 创建 React + TS 项目（官方脚手架）
npx create-react-app react-ts-demo --template typescript

# 2. 进入项目目录
cd react-ts-demo

# 3. 启动开发服务器
npm start

# 项目结构说明：
# - .ts/.tsx 文件：TS 代码（TSX 是 React + TS 的文件格式）
# - tsconfig.json：TS 配置文件（控制编译规则）
# - @types/*：第三方库的类型声明文件
```

#### 关键说明

* `--template typescript`：指定使用 TS 模板创建项目

* `.tsx` 文件：必须用于包含 JSX 语法的 React 组件

* `tsconfig.json`：默认配置已满足基础开发，可根据需求调整（如 `strict: true` 开启严格模式）


### Day11-02.useState-自动推导
#### 核心知识点

1. TypeScript 能自动推导 `useState` 的状态类型，无需手动指定

2. 基础类型（string/number/boolean/数组/对象）均可自动推导

#### 精简代码案例

```text
import { useState } from 'react';

function StateAutoInfer() {
  // 1. 基本类型：自动推导为 number 类型
  const [count, setCount] = useState(0);
  // ✅ 正确：count 是 number 类型
  setCount(count + 1);
  // ❌ 错误：TS 会报错，不能将 string 赋值给 number 类型
  // setCount('10');

  // 2. 字符串类型：自动推导为 string
  const [name, setName] = useState('张三');
  setName('李四');

  // 3. 布尔类型：自动推导为 boolean
  const [isShow, setIsShow] = useState(false);
  setIsShow(true);

  // 4. 数组类型：自动推导为 string[]
  const [list, setList] = useState(['React', 'TypeScript']);
  setList([...list, 'Zustand']);

  // 5. 对象类型：自动推导为 { name: string; age: number }
  const [user, setUser] = useState({ name: '张三', age: 20 });
  setUser({ ...user, age: 21 });

  return (
    <div>
      <p>计数：{count}</p>
      <p>姓名：{name}</p>
      <p>是否显示：{isShow ? '是' : '否'}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>用户：{user.name}，{user.age} 岁</p>
    </div>
  );
}

export default StateAutoInfer;
```

#### 关键说明

* TS 自动推导基于 `useState` 的初始值类型

* 推导后的状态/更新函数会有严格的类型校验，避免类型错误

* 开发阶段即可发现类型问题，无需等到运行时


### Day11-03.useState-泛型参数
#### 核心知识点

1. 当自动推导不满足需求时（如初始值为空，后续赋值不同类型），需手动指定泛型参数

2. 语法：`useState<类型>(初始值)`

#### 精简代码案例

```text
import { useState } from 'react';

// 定义接口（推荐：复杂类型抽离为接口/类型别名）
interface User {
  id: number;
  name: string;
  age?: number; // 可选属性
}

function StateGeneric() {
  // 1. 明确指定数组类型（自动推导也能实现，但泛型更清晰）
  const [fruits, setFruits] = useState<string[]>(['苹果', '香蕉']);
  setFruits([...fruits, '橙子']);

  // 2. 联合类型：状态可以是 number 或 string
  const [value, setValue] = useState<number | string>(10);
  setValue('20'); // ✅ 正确：联合类型支持
  setValue(true); // ❌ 错误：boolean 不在联合类型中

  // 3. 对象类型：使用接口指定（推荐）
  const [user, setUser] = useState<User>({ id: 1, name: '张三' });
  setUser({ ...user, age: 25 }); // ✅ 正确：age 是可选属性

  // 4. 函数类型：指定状态为函数
  const [callback, setCallback] = useState<() => void>(() => {
    console.log('初始函数');
  });
  setCallback(() => {
    console.log('更新后的函数');
  });

  return (
    <div>
      <h2>useState 泛型参数</h2>
      <p>水果：{fruits.join(', ')}</p>
      <p>值：{value}</p>
      <p>用户：{user.name}（{user.age || '未知'} 岁）</p>
      <button onClick={callback}>执行回调</button>
    </div>
  );
}

export default StateGeneric;
```

#### 关键说明

* **泛型语法**：`<类型>` 明确指定状态类型，优先级高于自动推导

* **联合类型**：`type1 | type2` 表示状态可以是多种类型之一

* **接口/类型别名**：复杂对象类型推荐抽离为接口，提高复用性和可读性

* **适用场景**：自动推导不准确、需要联合类型、初始值为空但后续有明确类型


### Day11-04.useState-初始值为null
#### 核心知识点

1. 初始值为 `null` 时，TS 无法自动推导后续类型，必须手动指定泛型

2. 常用场景：异步数据加载（初始为 null，加载完成后为具体类型）

#### 精简代码案例

```text
import { useState, useEffect } from 'react';

interface Article {
  id: number;
  title: string;
  content: string;
}

function StateNullInitial() {
  // 1. 初始值为 null，指定泛型为 Article | null
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);

  // 模拟异步加载文章
  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      // 模拟 API 请求
      const res = await new Promise<Article>((resolve) => {
        setTimeout(() => {
          resolve({
            id: 1,
            title: 'React + TS 实战',
            content: 'TypeScript 让 React 开发更安全'
          });
        }, 1000);
      });
      setArticle(res);
      setLoading(false);
    };

    fetchArticle();
  }, []);

  if (loading) return <div>加载中...</div>;

  return (
    <div>
      <h2>初始值为 null 的 useState</h2>
      {/* 2. 可选链操作符：避免 article 为 null 时的报错 */}
      {article ? (
        <div>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ) : (
        <p>暂无文章数据</p>
      )}

      {/* 3. 重置为 null */}
      <button onClick={() => setArticle(null)}>清空文章</button>
    </div>
  );
}

export default StateNullInitial;
```

#### 关键说明

* **泛型指定**：`useState<类型 | null>(null)` 明确状态可以是目标类型或 null

* **可选链操作符**：`article?.title` 避免访问 null/ 属性时报错

* **类型守卫**：`if (article)` 缩小类型范围，TS 会识别 article 此时不为 null

* **常用场景**：异步数据加载、表单重置、条件渲染的状态


### Day11-05.Props与TS-基础使用
#### 核心知识点

1. 为 React 组件 Props 定义类型，实现类型校验

2. 方式：接口（interface）或类型别名（type），推荐接口（更易扩展）

#### 精简代码案例

```text
import React from 'react';

// 1. 定义 Props 接口
interface ButtonProps {
  // 必选属性
  text: string;
  // 可选属性（加 ?）
  size?: 'small' | 'medium' | 'large';
  // 默认值属性
  type?: 'primary' | 'secondary' | 'danger';
  // 数字类型
  count?: number;
}

// 2. 组件接收类型化的 Props
const CustomButton: React.FC<ButtonProps> = (props) => {
  // 3. 设置默认值（两种方式）
  const {
    text,
    size = 'medium',
    type = 'primary',
    count = 0
  } = props;

  // 根据类型设置样式
  const getButtonStyle = () => {
    const baseStyle = {
      padding: size === 'small' ? '4px 8px' : size === 'large' ? '12px 24px' : '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    };

    const colorMap = {
      primary: { backgroundColor: '#1677ff', color: 'white' },
      secondary: { backgroundColor: '#f0f0f0', color: '#333' },
      danger: { backgroundColor: '#ff4d4f', color: 'white' }
    };

    return { ...baseStyle, ...colorMap[type] };
  };

  return (
    <button style={getButtonStyle()}>
      {text} {count > 0 && `(${count})`}
    </button>
  );
};

// 4. 方式2：直接指定默认值（更推荐）
// CustomButton.defaultProps = {
//   size: 'medium',
//   type: 'primary',
//   count: 0
// };

// 使用组件
function PropsBasic() {
  return (
    <div style={{ gap: '10px', display: 'flex' }}>
      {/* ✅ 正确：传递必选属性 */}
      <CustomButton text="主要按钮" />
      {/* ✅ 正确：传递可选属性 */}
      <CustomButton text="危险按钮" type="danger" size="large" count={5} />
      {/* ❌ 错误：TS 报错，缺少必选属性 text */}
      {/* <CustomButton type="secondary" /> */}
      {/* ❌ 错误：TS 报错，size 只能是指定的联合类型 */}
      {/* <CustomButton text="错误按钮" size="big" /> */}
    </div>
  );
}

export default PropsBasic;
```

#### 关键说明

* **React.FC**：`React.FC<PropsType>` 是函数组件的类型，自动包含 children 属性

* **接口定义**：

* 必选属性：直接声明 `name: type`

* 可选属性：`name?: type`

* 联合类型：`name: 'value1' | 'value2'`

* **默认值**：

* 方式1：解构赋值时设置默认值

* 方式2：使用 `defaultProps`（TS 中仍需标记属性为可选）

* **类型校验**：传递不符合类型的 Props 时，TS 会在开发阶段报错，提前发现问题


### Day11-06.Props与TS-特殊的children属性
#### 核心知识点

1. `children` 是 React 组件的特殊 Props，用于接收子元素

2. TS 中 `React.FC` 自动包含 `children?: React.ReactNode`，也可手动定义

#### 精简代码案例

```text
import React from 'react';

// 1. 方式1：使用 React.FC（自动包含 children）
interface CardProps {
  title: string;
  // 可选：手动指定 children 类型（覆盖默认）
  // children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div style={{ border: '1px solid #eee', padding: '20px', width: '300px' }}>
      <h3 style={{ margin: 0, marginBottom: '10px' }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

// 2. 方式2：不使用 React.FC，手动定义 children
interface ButtonProps {
  text: string;
  // 精确指定 children 类型
  children?: React.ReactElement | React.ReactElement[];
  onClick: () => void;
}

// 不使用 React.FC，手动定义函数类型
const Button = ({ text, children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ padding: '8px 16px' }}>
      {children} {text}
    </button>
  );
};

// 3. 限制 children 类型（仅允许字符串）
interface TextProps {
  children: string; // 仅允许字符串子元素
}

const Text = ({ children }: TextProps) => {
  return <span style={{ color: '#666' }}>{children}</span>;
};

function PropsChildren() {
  return (
    <div>
      <h2>Children 属性类型</h2>
      
      {/* 1. React.FC 的 children */}
      <Card title="卡片标题">
        <p>卡片内容</p>
        <button>卡片按钮</button>
      </Card>

      {/* 2. 手动定义的 children */}
      <Button text="点击我" onClick={() => alert('点击了按钮')}>
        <span>🔔</span>
      </Button>

      {/* 3. 限制为字符串的 children */}
      <Text>这是纯文本</Text>
      {/* ❌ 错误：TS 报错，children 必须是字符串 */}
      {/* <Text>
        <p>包含元素的子节点</p>
      </Text> */}
    </div>
  );
}

export default PropsChildren;
```

#### 关键说明

* **React.ReactNode**：最通用的 children 类型，包含所有可能的子元素类型（元素、字符串、数字、数组、null 等）

* **React.ReactElement**：仅允许 React 元素（如 `<div />`、`<Button />`）

* **React.FC 特点**：

* 自动包含 `children?: React.ReactNode`

* 适合大多数场景，简化代码

* **手动定义 children**：

* 场景1：限制 children 类型（如仅允许字符串、仅允许单个元素）

* 场景2：不需要 children（设置 `children?: never` 禁用）

* **常用类型**：

  * `React.ReactNode`：通用类型（推荐）

  * `React.ReactElement`：仅 React 元素

  * `string`/`number`：仅基础类型

  * `JSX.Element`：等同于 `React.ReactElement`

​

​

​


### Day11-07.props与TS-为事件prop添加类型
#### 核心知识点

1. 为事件回调 Props 定义精确的类型，包含事件对象的类型

2. React 提供了内置的事件类型（如 `React.MouseEvent`、`React.ChangeEvent`）

#### 精简代码案例

```text
import React, { useState } from 'react';

// 1. 定义事件相关的 Props 类型
interface InputProps {
  // 输入框变化事件：ChangeEvent<HTMLInputElement>
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // 按钮点击事件：MouseEvent<HTMLButtonElement>
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement>, value: string) => void;
  // 可选：无参数的回调
  onReset?: () => void;
  value: string;
}

const CustomInput: React.FC<InputProps> = ({
  onChange,
  onButtonClick,
  onReset,
  value
}) => {
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <input
        type="text"
        value={value}
        // 传递事件对象给回调
        onChange={onChange}
        style={{ padding: '8px' }}
      />
      <button
        onClick={(e) => onButtonClick(e, value)}
        style={{ padding: '8px 16px' }}
      >
        提交
      </button>
      {onReset && (
        <button onClick={onReset} style={{ padding: '8px 16px' }}>
          重置
        </button>
      )}
    </div>
  );
};

function PropsEvent() {
  const [inputValue, setInputValue] = useState('');

  // 输入框变化回调（精确的事件类型）
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TS 自动推导 e.target 是 HTMLInputElement，可安全访问 value
    setInputValue(e.target.value);
  };

  // 按钮点击回调（带事件和自定义参数）
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, value: string) => {
    // 阻止默认行为
    e.preventDefault();
    alert(`提交的值：${value}`);
  };

  // 重置回调
  const handleReset = () => {
    setInputValue('');
  };

  return (
    <div>
      <h2>事件 Props 类型</h2>
      <CustomInput
        value={inputValue}
        onChange={handleInputChange}
        onButtonClick={handleButtonClick}
        onReset={handleReset}
      />
    </div>
  );
}

export default PropsEvent;
```

#### 关键说明

* **常用事件类型**：

  * 点击事件：`React.MouseEvent<HTMLElement>`

  * 输入变化：`React.ChangeEvent<HTMLInputElement>`

  * 表单提交：`React.FormEvent<HTMLFormElement>`

  * 键盘事件：`React.KeyboardEvent<HTMLElement>`

* **泛型参数**：`<HTMLInputElement>` 指定事件目标的 DOM 元素类型，TS 会提供精确的属性提示

* **事件回调参数**：

  * 可仅传递事件对象

  * 可传递事件对象 + 自定义参数（如当前值）

* **优势**：

  * 事件对象的属性有精确提示（如 `e.target.value`）

  * 避免访问不存在的属性（如 `e.target.val`）

  * 回调函数的参数类型明确，调用时不会传错

​

​

​


### Day11-08.useRef与TS
#### 核心知识点

1. `useRef` 在 TS 中有两种常用场景：

2. 关键：通过泛型指定 ref 的类型，避免 `any` 类型

#### 精简代码案例

```text
import { useState, useRef, useEffect } from 'react';

function UseRefWithTS() {
  // 1. 场景1：绑定 DOM 元素（指定 HTMLInputElement 类型）
  const inputRef = useRef<HTMLInputElement>(null);
  // 2. 场景2：存储可变值（指定 number 类型）
  const timerRef = useRef<number | null>(null);
  const [count, setCount] = useState(0);

  // 聚焦输入框
  const focusInput = () => {
    // 可选链：避免 ref 为 null 时报错
    inputRef.current?.focus();
  };

  // 开始计数
  const startCount = () => {
    // 清除之前的定时器
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    // TS 知道 timerRef.current 是 number 类型（定时器 ID）
    timerRef.current = window.setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  // 停止计数
  const stopCount = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // 组件卸载时清除定时器
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>useRef 与 TypeScript</h2>
      
      {/* 绑定 DOM 元素 */}
      <div style={{ marginBottom: '20px' }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="请输入内容"
          style={{ padding: '8px' }}
        />
        <button onClick={focusInput} style={{ marginLeft: '10px' }}>
          聚焦输入框
        </button>
      </div>

      {/* 存储可变值（定时器 ID） */}
      <div>
        <p>计数：{count}</p>
        <button onClick={startCount} style={{ marginRight: '10px' }}>
          开始计数
        </button>
        <button onClick={stopCount}>停止计数</button>
      </div>
    </div>
  );
}

export default UseRefWithTS;
```

#### 进阶案例：forwardRef + useImperativeHandle

​

```text
import { forwardRef, useRef, useImperativeHandle } from 'react';

// 定义暴露给父组件的方法类型
interface CustomInputRef {
  focus: () => void;
  clear: () => void;
  getValue: () => string;
}

// 子组件：forwardRef + useImperativeHandle
const CustomInput = forwardRef<CustomInputRef, { placeholder?: string }>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // 自定义暴露的方法
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      clear: () => {
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      },
      getValue: () => {
        return inputRef.current?.value || '';
      }
    }), []);

    return (
      <input
        ref={inputRef}
        placeholder={props.placeholder}
        style={{ padding: '8px' }}
      />
    );
  }
);

// 父组件使用
function RefAdvanced() {
  // 指定 ref 类型为 CustomInputRef
  const customInputRef = useRef<CustomInputRef>(null);

  const handleFocus = () => {
    customInputRef.current?.focus();
  };

  const handleClear = () => {
    customInputRef.current?.clear();
  };

  const handleGetValue = () => {
    const value = customInputRef.current?.getValue();
    alert(`输入值：${value}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>forwardRef + useImperativeHandle + TS</h2>
      <CustomInput ref={customInputRef} placeholder="自定义输入框" />
      <div style={{ marginTop: '10px', gap: '10px', display: 'flex' }}>
        <button onClick={handleFocus}>聚焦</button>
        <button onClick={handleClear}>清空</button>
        <button onClick={handleGetValue}>获取值</button>
      </div>
    </div>
  );
}

export default RefAdvanced;

```

​

#### 关键说明

* **DOM 元素 ref**：

  * 泛型：`useRef<HTMLInputElement>(null)`

  * 初始值：必须为 `null`（DOM 元素挂载前 ref 为空）

  * 访问：使用可选链 `ref.current?.method()` 避免 null 报错

* **存储可变值 ref**：

  * 泛型：`useRef<number | null>(null)`（根据存储值类型指定）

  * 常用场景：定时器 ID、上一次的状态值、无需触发重渲染的可变值

* **forwardRef 泛型**：

  * 语法：`forwardRef<RefType, PropsType>((props, ref) => {})`

  * 第一个泛型：ref 的类型

  * 第二个泛型：Props 的类型

* **useImperativeHandle**：

  * 泛型：自动推导暴露的方法类型

  * 优势：精确控制暴露给父组件的方法，避免暴露整个 DOM 元素

#### 总结

1. **useState 与 TS**：

   1. 基础类型自动推导，复杂类型/联合类型/初始值为 null 需手动指定泛型

   2. 初始值为 null 时，使用 `类型 | null` 泛型，配合可选链/类型守卫使用

2. **Props 与 TS**：

   1. 使用接口/类型别名定义 Props 类型，`React.FC<PropsType>` 简化组件类型

   2. children 属性：`React.FC` 自动包含 `React.ReactNode`，可手动限制类型

   3. 事件 Props：使用 React 内置事件类型（如 `React.ChangeEvent`），指定目标元素类型

3. **useRef 与 TS**：

   1. DOM 元素 ref：指定具体的 DOM 元素类型（如 `HTMLInputElement`）

   2. 可变值 ref：指定存储值的类型，用于定时器 ID/上一次状态等

   3. forwardRef + useImperativeHandle：精确控制暴露给父组件的 ref 接口

4. **核心优势**：

   1. 开发阶段发现类型错误，减少运行时 bug

   2. 代码提示更精确，提升开发效率

   3. 类型文档化，便于团队协作和维护


### 第十二天
React 移动端实战项目开发全流程，从环境搭建到功能实现，结合 TypeScript、Ant Design Mobile、Axios 等核心技术，完成一个具备频道切换、列表无限加载、详情页跳转的移动端新闻/内容类应用，帮助你打通 React 实战开发的最后一公里。

* **技术栈**：React + TypeScript + Vite（替代 CRA，更快） + Ant Design Mobile + Axios

* **核心功能**：频道切换、文章列表无限加载、文章详情页

* **项目结构**：

```text
src/
├── api/          # API 请求封装
├── assets/       # 静态资源
├── components/   # 通用组件
├── hooks/        # 自定义 Hooks
├── pages/        # 页面组件
│   ├── Home/     # 首页（频道+列表）
│   └── Detail/   # 详情页
├── router/       # 路由配置
├── types/        # 类型定义
├── utils/        # 工具函数
├── App.tsx
└── main.tsx
```

​


### Day12-01.项目环境创建
#### 核心知识点

使用 Vite 创建 React + TypeScript 项目（比 CRA 更高效，打包更快）

#### 操作步骤

```text
# 1. 创建 Vite + React + TS 项目
npm create vite@latest react-mobile-demo -- --template react-ts

# 2. 进入项目目录
cd react-mobile-demo

# 3. 安装依赖
npm install

# 4. 启动开发服务器
npm run dev

# 访问 http://localhost:5173 即可看到初始页面
```

#### 关键说明

* Vite 优势：冷启动快、热更新快、打包效率高，适合现代前端开发

* 项目配置文件：`vite.config.ts`（替代 CRA 的 `craco.config.js`）

* TypeScript 配置：`tsconfig.json`（Vite 已默认配置好基础规则）


### Day12-02.安装antDesignMobile
#### 核心知识点

安装并配置 Ant Design Mobile（移动端 UI 组件库），适配移动端开发

#### 操作步骤

```text
# 1. 安装 Ant Design Mobile
npm install antd-mobile --save

# 2. 安装按需导入插件（可选，减小包体积）
npm install unplugin-vue-components unplugin-auto-import --save-dev
```

#### 配置按需导入（vite.config.ts）

```text
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntdMobileResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 自动导入 API
    AutoImport({
      resolvers: [AntdMobileResolver()],
    }),
    // 自动导入组件
    Components({
      resolvers: [AntdMobileResolver()],
    }),
  ],
})
```

#### 使用（App.tsx）

```text
import { Button } from 'antd-mobile'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Button color="primary">Ant Design Mobile 测试</Button>
    </div>
  )
}

export default App
```

​


### Day12-03.配置基础路由
#### 核心知识点

使用 React Router v6 配置移动端路由，实现首页和详情页的路由管理

#### 操作步骤

\# 安装 React Router

npm install react-router-dom --save

#### 1. 创建路由配置文件（src/router/index.tsx）

```text
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Loading } from 'antd-mobile'

// 懒加载页面组件
const Home = lazy(() => import('@/pages/Home'))
const Detail = lazy(() => import('@/pages/Detail'))

// 加载占位组件
const LoadingComponent = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Loading size="large" />
  </div>
)

// 创建路由
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/detail/:id', // 详情页，携带文章ID
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <Detail />
      </Suspense>
    ),
  },
])

// 路由提供者组件
export const AppRouter = () => <RouterProvider router={router} />
```

#### 2. 配置入口文件（src/main.tsx）

```text
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router'
import 'antd-mobile/es/global.css' // 导入 AntD Mobile 全局样式

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
```

#### 3. 创建基础页面

* `src/pages/Home/index.tsx`（首页）

* `src/pages/Detail/index.tsx`（详情页）


### Day12-04.配置路径别名
#### 核心知识点

配置 `@` 别名指向 `src` 目录，简化模块导入路径

#### 配置步骤（vite.config.ts）

```text
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 需要安装 @types/node：npm install @types/node --save-dev

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 配置 @ 别名
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

#### 配置 tsconfig.json（让 TS 识别别名）

```text
{
  "compilerOptions": {
    // ... 其他配置
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

#### 使用示例

```text
// 之前：import Home from './src/pages/Home'
// 之后：import Home from '@/pages/Home'
import { getChannels } from '@/api/channel'
import { useHomeData } from '@/hooks/useHomeData'
```

​


### Day12-05.axios插件安装配置
#### 核心知识点

安装并配置 Axios，实现请求拦截、响应拦截、错误处理

#### 操作步骤

```text
# 安装 Axios
npm install axios --save

# 安装类型声明
npm install @types/axios --save-dev
```

#### 创建 Axios 实例（src/utils/request.ts）

```text
import axios from 'axios'
import { Toast } from 'antd-mobile'

// 创建 Axios 实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 环境变量
  timeout: 10000, // 超时时间
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 可添加 token 等请求头
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 统一处理响应数据
    return response.data
  },
  (error) => {
    // 统一错误处理
    const message = error.response?.data?.message || '请求失败，请稍后重试'
    Toast.show({
      content: message,
      type: 'fail',
    })
    return Promise.reject(error)
  }
)

export default request
```

#### 配置环境变量（.env.development）

```text
# 开发环境 API 地址
VITE_API_BASE_URL = 'https://api.example.com'
```

​


### Day12-06.API模块封装-axios配合ts使用
#### 核心知识点

结合 TypeScript 封装 API 模块，定义请求/响应类型，实现类型安全的接口调用

#### 1. 创建类型定义（src/types/channel.ts）

```text
// 频道类型
export interface Channel {
  id: number
  name: string
}

// 频道列表响应类型
export interface ChannelListResponse {
  code: number
  data: Channel[]
  message: string
}
```

#### 2. 创建文章类型（src/types/article.ts）

```text
// 文章项类型
export interface Article {
  id: number
  title: string
  cover: string[]
  author: string
  publishTime: string
  readCount: number
  content: string
}

// 文章列表请求参数
export interface ArticleListParams {
  channelId: number
  page: number
  size: number
}

// 文章列表响应类型
export interface ArticleListResponse {
  code: number
  data: {
    list: Article[]
    hasMore: boolean
  }
  message: string
}

// 文章详情响应类型
export interface ArticleDetailResponse {
  code: number
  data: Article
  message: string
}
```

#### 3. 封装频道 API（src/api/channel.ts）

```text
import request from '@/utils/request'
import type { ChannelListResponse } from '@/types/channel'

/**
 * 获取频道列表
 */
export const getChannels = () => {
  return request.get<ChannelListResponse>('/channels')
}
```

#### 4. 封装文章 API（src/api/article.ts）

```text
import request from '@/utils/request'
import type { ArticleListParams, ArticleListResponse, ArticleDetailResponse } from '@/types/article'

/**
 * 获取文章列表
 * @param params 请求参数
 */
export const getArticleList = (params: ArticleListParams) => {
  return request.get<ArticleListResponse>('/articles', { params })
}

/**
 * 获取文章详情
 * @param id 文章ID
 */
export const getArticleDetail = (id: number) => {
  return request.get<ArticleDetailResponse>(`/articles/${id}`)
}
```

​


### Day12-07.Home模块-channels基础数据渲染
#### 核心知识点

实现首页频道列表的获取和渲染，使用 AntD Mobile 的 Tab 组件实现频道切换

#### 首页实现（src/pages/Home/index.tsx）

```text
import { useState, useEffect } from 'react'
import { Tabs, List, InfiniteScroll, Toast } from 'antd-mobile'
import { getChannels } from '@/api/channel'
import { getArticleList } from '@/api/article'
import type { Channel } from '@/types/channel'
import type { Article, ArticleListParams } from '@/types/article'

const Home = () => {
  // 频道状态
  const [channels, setChannels] = useState<Channel[]>([])
  const [loading, setLoading] = useState(true)
  // 当前选中频道
  const [activeChannelId, setActiveChannelId] = useState<number>(0)

  // 获取频道列表
  useEffect(() => {
    const fetchChannels = async () => {
      try {
        setLoading(true)
        const res = await getChannels()
        if (res.code === 200) {
          setChannels(res.data)
          // 默认选中第一个频道
          if (res.data.length > 0) {
            setActiveChannelId(res.data[0].id)
          }
        }
      } catch (error) {
        Toast.show({ content: '获取频道失败', type: 'fail' })
      } finally {
        setLoading(false)
      }
    }

    fetchChannels()
  }, [])

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>加载中...</div>
  }

  return (
    <div style={{ height: '100vh' }}>
      {/* 频道 Tab */}
      <Tabs
        activeKey={activeChannelId.toString()}
        onChange={(key) => setActiveChannelId(Number(key))}
        scrollable
      >
        {channels.map((channel) => (
          <Tabs.Tab key={channel.id} title={channel.name}>
            {/* 文章列表（后续实现） */}
            <div>
              <h3 style={{ padding: '10px' }}>{channel.name} 频道的文章列表</h3>
            </div>
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  )
}

export default Home
```

​


### Day12-08.Home模块-channels-hooks优化
#### 核心知识点

将频道数据获取逻辑抽离为自定义 Hook，提高代码复用性和可维护性

#### 创建自定义 Hook（src/hooks/useChannels.ts）

```text
import { useState, useEffect } from 'react'
import { getChannels } from '@/api/channel'
import type { Channel } from '@/types/channel'
import { Toast } from 'antd-mobile'

/**
 * 频道数据 Hook
 */
export const useChannels = () => {
  const [channels, setChannels] = useState<Channel[]>([])
  const [loading, setLoading] = useState(true)
  const [activeChannelId, setActiveChannelId] = useState<number>(0)

  // 获取频道列表
  const fetchChannels = async () => {
    try {
      setLoading(true)
      const res = await getChannels()
      if (res.code === 200) {
        setChannels(res.data)
        if (res.data.length > 0) {
          setActiveChannelId(res.data[0].id)
        }
      }
    } catch (error) {
      Toast.show({ content: '获取频道失败', type: 'fail' })
    } finally {
      setLoading(false)
    }
  }

  // 切换频道
  const changeChannel = (id: number) => {
    setActiveChannelId(id)
  }

  useEffect(() => {
    fetchChannels()
  }, [])

  return {
    channels,
    loading,
    activeChannelId,
    changeChannel,
    refetchChannels: fetchChannels,
  }
}
```

#### 优化首页组件（src/pages/Home/index.tsx）

```text
import { useChannels } from '@/hooks/useChannels'
import { Tabs } from 'antd-mobile'

const Home = () => {
  // 使用自定义 Hook
  const { channels, loading, activeChannelId, changeChannel } = useChannels()

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>加载中...</div>
  }

  return (
    <div style={{ height: '100vh' }}>
      <Tabs
        activeKey={activeChannelId.toString()}
        onChange={(key) => changeChannel(Number(key))}
        scrollable
      >
        {channels.map((channel) => (
          <Tabs.Tab key={channel.id} title={channel.name}>
            {/* 文章列表容器 */}
            <ArticleList channelId={activeChannelId} />
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  )
}

// 文章列表子组件（后续完善）
const ArticleList = ({ channelId }: { channelId: number }) => {
  return (
    <div style={{ padding: '10px' }}>
      <h3>{channelId} 频道的文章列表</h3>
    </div>
  )
}

export default Home
```

​


### Day12-09.Home模块-List-列表数据获取渲染
#### 核心知识点

实现文章列表数据的获取和渲染，结合 AntD Mobile 的 List 组件展示列表项

#### 创建文章列表 Hook（src/hooks/useArticleList.ts）

```text
import { useState, useEffect } from 'react'
import { getArticleList } from '@/api/article'
import type { Article, ArticleListParams } from '@/types/article'
import { Toast } from 'antd-mobile'

/**
 * 文章列表 Hook
 * @param channelId 频道ID
 */
export const useArticleList = (channelId: number) => {
  // 列表状态
  const [list, setList] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [size] = useState(10)
  const [hasMore, setHasMore] = useState(true)

  // 获取文章列表
  const fetchArticleList = async (reset = false) => {
    if (!channelId) return
    if (reset) {
      setPage(1)
      setHasMore(true)
    }

    try {
      setLoading(true)
      const params: ArticleListParams = {
        channelId,
        page: reset ? 1 : page,
        size,
      }
      const res = await getArticleList(params)
      if (res.code === 200) {
        const { list: newList, hasMore: newHasMore } = res.data
        setList(prev => reset ? newList : [...prev, ...newList])
        setHasMore(newHasMore)
        if (!reset) {
          setPage(prev => prev + 1)
        }
      }
    } catch (error) {
      Toast.show({ content: '获取文章列表失败', type: 'fail' })
    } finally {
      setLoading(false)
    }
  }

  // 重置列表（切换频道时）
  const resetList = () => {
    fetchArticleList(true)
  }

  // 加载更多
  const loadMore = () => {
    if (loading || !hasMore) return
    fetchArticleList(false)
  }

  // 频道变化时重置列表
  useEffect(() => {
    resetList()
  }, [channelId])

  return {
    list,
    loading,
    hasMore,
    loadMore,
    resetList,
  }
}
```

#### 实现文章列表组件（src/pages/Home/ArticleList.tsx）

```text
import { useArticleList } from '@/hooks/useArticleList'
import { List, InfiniteScroll, Skeleton } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import type { Article } from '@/types/article'

interface ArticleListProps {
  channelId: number
}

const ArticleList = ({ channelId }: ArticleListProps) => {
  const { list, loading, hasMore, loadMore } = useArticleList(channelId)
  const navigate = useNavigate()

  // 跳转到详情页
  const goToDetail = (id: number) => {
    navigate(`/detail/${id}`)
  }

  if (loading && list.length === 0) {
    return (
      <div style={{ padding: '10px' }}>
        {Array(5).fill(0).map((_, index) => (
          <Skeleton key={index} style={{ marginBottom: '10px' }} />
        ))}
      </div>
    )
  }

  if (list.length === 0 && !loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>暂无文章</div>
  }

  return (
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={hasMore}
      isLoading={loading}
      threshold={200}
    >
      <List>
        {list.map((item: Article) => (
          <List.Item
            key={item.id}
            onClick={() => goToDetail(item.id)}
            prefix={
              item.cover.length > 0 ? (
                <img
                  src={item.cover[0]}
                  alt={item.title}
                  style={{ width: '80px', height: '60px', borderRadius: '4px' }}
                />
              ) : null
            }
            description={
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#999', fontSize: '12px' }}>
                <span>{item.author}</span>
                <span>{item.readCount} 阅读</span>
              </div>
            }
          >
            <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
              {item.title}
            </div>
            <div style={{ fontSize: '12px', color: '#666' }}>
              {item.publishTime}
            </div>
          </List.Item>
        ))}
      </List>
    </InfiniteScroll>
  )
}

export default ArticleList
```

#### 更新首页组件（src/pages/Home/index.tsx）

```text
import { useChannels } from '@/hooks/useChannels'
import { Tabs } from 'antd-mobile'
import ArticleList from './ArticleList'

const Home = () => {
  const { channels, loading, activeChannelId, changeChannel } = useChannels()

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>加载中...</div>
  }

  return (
    <div style={{ height: '100vh' }}>
      <Tabs
        activeKey={activeChannelId.toString()}
        onChange={(key) => changeChannel(Number(key))}
        scrollable
      >
        {channels.map((channel) => (
          <Tabs.Tab key={channel.id} title={channel.name}>
            <ArticleList channelId={channel.id} />
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  )
}

export default Home
```

​


### Day12-10.Home模块-List无限加载实现
#### 核心知识点

基于 AntD Mobile 的 `InfiniteScroll` 组件实现列表无限加载，处理加载状态、无更多数据状态

#### 关键实现（已包含在上述 ArticleList.tsx 中）

核心逻辑说明：

1. **InfiniteScroll 组件属性**：

   * `loadMore`：滚动到底部时触发的加载更多方法

   * `hasMore`：是否还有更多数据

   * `isLoading`：是否正在加载

   * `threshold`：触发加载的距离底部的阈值（像素）

2. **加载逻辑**：

   * 初始加载：页面加载时获取第一页数据

   * 加载更多：滚动到底部时获取下一页数据，拼接到现有列表

   * 切换频道：重置页码和列表，重新获取第一页数据

   * 状态控制：加载中禁用重复请求，无更多数据时停止加载

3. **优化点**：

   * 骨架屏：加载时展示占位符，提升用户体验

   * 节流：避免频繁触发加载更多

   * 空状态：无数据时展示友好提示


### Day12-11.详情模块-路由跳转&数据渲染
#### 核心知识点

实现从列表页跳转到详情页，获取并渲染文章详情数据

#### 详情页实现（src/pages/Detail/index.tsx）

```text
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getArticleDetail } from '@/api/article'
import type { Article } from '@/types/article'
import { Button, Skeleton, Space } from 'antd-mobile'
import { ArrowLeft } from 'antd-mobile-icons'

const Detail = () => {
  const { id } = useParams<{ id: string }>() // 获取路由参数
  const navigate = useNavigate()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  // 获取文章详情
  const fetchArticleDetail = async () => {
    if (!id) return
    try {
      setLoading(true)
      const res = await getArticleDetail(Number(id))
      if (res.code === 200) {
        setArticle(res.data)
      }
    } catch (error) {
      console.error('获取文章详情失败：', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchArticleDetail()
  }, [id])

  // 返回上一页
  const goBack = () => {
    navigate(-1)
  }

  if (loading) {
    return (
      <div style={{ padding: '10px' }}>
        <Skeleton title style={{ marginBottom: '20px' }} />
        <Skeleton paragraph={{ rows: 10 }} />
      </div>
    )
  }

  if (!article) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>文章不存在或已删除</p>
        <Button onClick={goBack} color="primary">返回</Button>
      </div>
    )
  }

  return (
    <div style={{ padding: '10px', maxWidth: '750px', margin: '0 auto' }}>
      {/* 头部导航 */}
      <Space style={{ marginBottom: '20px' }}>
        <Button onClick={goBack} icon={<ArrowLeft />} fill="none">
          返回
        </Button>
      </Space>

      {/* 文章标题 */}
      <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
        {article.title}
      </h1>

      {/* 文章信息 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#999', fontSize: '14px', marginBottom: '20px' }}>
        <span>作者：{article.author}</span>
        <span>发布时间：{article.publishTime}</span>
        <span>阅读：{article.readCount}</span>
      </div>

      {/* 文章封面 */}
      {article.cover.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <img
            src={article.cover[0]}
            alt={article.title}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>
      )}

      {/* 文章内容 */}
      <div
        style={{ fontSize: '16px', lineHeight: '1.8' }}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  )
}

export default Detail
```

#### 关键说明

1. **路由参数**：使用 `useParams` 获取详情页的文章 ID，指定泛型 `{ id: string }` 实现类型安全

2. **数据渲染**：

   1. 加载中展示骨架屏

   2. 数据为空时展示友好提示

   3. 文章内容使用 `dangerouslySetInnerHTML` 渲染 HTML 内容

3. **导航**：使用 `useNavigate` 实现返回上一页功能


### React入门到实战完结篇
## 总结

#### 核心知识点回顾

1. **项目工程化**：

   1. Vite + React + TS 环境搭建，配置路径别名、环境变量

   2. 路由懒加载、按需导入组件，优化性能

2. **网络请求**：

   1. Axios 封装，请求/响应拦截器，统一错误处理

   2. TS 类型定义，实现类型安全的 API 调用

3. **核心功能实现**：

   1. 自定义 Hooks 抽离业务逻辑（频道 Hook、列表 Hook）

   2. 频道 Tab 切换、文章列表无限加载

   3. 路由跳转、详情页数据渲染

4. **移动端适配**：

   1. 使用 Ant Design Mobile 组件库，快速搭建移动端 UI

   2. 骨架屏、空状态、加载状态优化用户体验

#### 实战价值

1. 掌握 React 项目从 0 到 1 的完整开发流程

2. 理解 TypeScript 在 React 项目中的实际应用，实现类型安全

3. 学会封装可复用的自定义 Hooks，提高代码质量

4. 掌握移动端常见功能（Tab 切换、无限加载、详情页）的实现方式

5. 了解前端工程化最佳实践（环境配置、API 封装、代码拆分）

#### 进阶方向

1. 状态管理：集成 Zustand/Redux 管理全局状态

2. 性能优化：图片懒加载、列表虚拟滚动、缓存策略

3. 功能扩展：登录认证、收藏/点赞、评论功能

4. 打包部署：配置 CDN、Gzip 压缩、CI/CD 流程

5. 跨端开发：结合 React Native 实现跨平台应用

至此，React 入门到实战的核心内容已全部完成，你已具备独立开发 React 前端项目的能力，可基于此项目模板扩展更多功能，或尝试开发自己的实战项目。


