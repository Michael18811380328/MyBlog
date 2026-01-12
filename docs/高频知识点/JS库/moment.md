# moment

Moment.js 是一个流行的 JavaScript 日期处理库，用于解析、验证、操作和格式化日期时间。它提供了简洁的 API，支持多语言环境，曾被广泛应用于前端开发中。

不过，随着 JavaScript 原生日期 API 的增强（如 Intl.DateTimeFormat 和 Temporal 提案），Moment.js 逐渐被更现代的库（如 Day.js、date-fns）取代。

以下是关于 Moment.js 的详细介绍：

### 1. GitHub 链接

* 仓库：<https://github.com/moment/moment>

* 官方文档：<https://momentjs.com/>

### 2. 主要功能

#### （1）日期解析

* 支持多种格式解析（ISO 8601、自定义格式）。

  ```
  moment('2023-05-23'); // 解析 ISO 日期
  moment('23/05/2023', 'DD/MM/YYYY'); // 自定义格式解析
  ```

#### （2）日期格式化

* 输出本地化日期字符串（如 YYYY-MM-DD HH:mm:ss）。

  ```
  moment().format('YYYY-MM-DD'); // 输出: 2023-05-23
  moment().format('LL'); // 本地化长格式（如 "2023年5月23日"）
  ```

#### （3）日期操作

* 加减天数、月数、年数等。

  ```
  moment().add(7, 'days'); // 当前日期加7天
  moment().subtract(1, 'month'); // 当前日期减1个月
  ```

#### （4）日期比较

* 判断日期先后、计算时间差。

  ```
  moment('2023-05-23').isBefore('2023-05-24'); // true
  moment('2023-01-01').diff('2023-05-23', 'days'); // 相差142天
  ```

#### （5）相对时间

* 生成人类可读的相对时间（如 "3小时前"）。

  ```
  moment('2023-05-22').fromNow(); // 输出: "a day ago"
  ```

#### （6）本地化支持

* 内置多语言环境（中文、英文、日文等）。

  ```
  moment.locale('zh-cn'); // 设置为中文环境
  ```

### 3. 使用案例

#### （1）显示时间轴

```javascript
const now = moment();
const yesterday = moment().subtract(1, 'day');
const tomorrow = moment().add(1, 'day');

console.log(yesterday.fromNow()); // "昨天"
console.log(now.format('YYYY-MM-DD HH:mm')); // "2023-05-23 14:30"
console.log(tomorrow.calendar()); // "明天 14:30"
```

#### （2）表单日期验证

```
function isValidDate(dateString) {
  return moment(dateString, 'YYYY-MM-DD', true).isValid();
}
```

#### （3）倒计时功能

```
const targetDate = moment('2023-12-31');
const daysLeft = targetDate.diff(moment(), 'days');
console.log(`距离年底还有 ${daysLeft} 天`);
```

### 4. 注意事项

#### （1）性能问题

* Moment.js 体积较大（压缩后约 25KB），且操作会生成新的 Moment 对象，可能影响性能。

#### （2）不可变设计

* 虽然 Moment.js 默认是可变的，但频繁修改同一实例会导致代码难以维护，建议使用 clone() 方法。

  ```
  const date = moment();
  const future = date.clone().add(1, 'year');
  ```

#### （3）时区处理限制

* 原生 Moment.js 不支持完整的时区转换，需额外引入 moment-timezone 插件。

#### （4）现代替代方案

* 推荐使用轻量级库替代：

  * Day.js（API 与 Moment 兼容，体积仅 2KB）

  * date-fns（函数式设计，按需引入）

  * Luxon（IANA 时区支持更好）

### 5. 安装与使用

#### （1）npm 安装

```
npm install moment
```

#### （2）浏览器引入

```
<script src="https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js"></script>
```

#### （3）基本用法

```
// 获取当前时间
const now = moment();

// 格式化日期
console.log(now.format('YYYY-MM-DD')); // 2023-05-23

// 计算相对时间
const past = moment('2020-01-01');
console.log(past.fromNow()); // "3年前"

// 时区转换（需 moment-timezone）
const utcTime = moment().utc();
console.log(utcTime.format()); // UTC 时间
```

### 6. 相关资源

* 官方文档：<https://momentjs.com/docs/>

* Moment Timezone：<https://momentjs.com/timezone/>

* 替代库对比：<https://github.com/you-dont-need/You-Dont-Need-Momentjs>

### 7. 总结

Moment.js 是一个功能全面的日期处理库，但因其体积和性能问题，在现代项目中逐渐被更轻量、更现代的库取代。若需兼容旧项目或偏好其 API 风格，仍可使用；新项目建议考虑 Day.js 或 date-fns。
