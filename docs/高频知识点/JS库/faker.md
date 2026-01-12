# faker

模拟请求假数据

Faker 是一个用于生成假数据的 JavaScript 库，常用于前端开发、测试或原型设计。

### 1. 主要功能

* 生成各类假数据：姓名、地址、邮箱、电话、公司名、产品信息等。

* 多语言支持：中文、英文、日文等。

* 自定义规则：随机组合数据、生成唯一值。

### 2. 快速上手

#### （1）安装

```
npm install @faker-js/faker
```

#### （2）使用示例

```javascript
import { faker } from '@faker-js/faker';

// 设置中文
faker.locale = 'zh_CN';

// 生成随机数据
console.log(faker.person.fullName()); // "张三"
console.log(faker.internet.email());  // "zhangsan@example.com"
console.log(faker.company.name());    // "恒远科技有限公司"
console.log(faker.commerce.price());  // "899.99"
```

#### （3）生成列表数据

```javascript
const users = Array.from({ length: 5 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));
```

### 3. 适用场景

* 前端开发：模拟 API 返回数据。

* 单元测试：提供随机测试用例。

* 数据库填充：为开发环境生成初始数据。

* 原型设计：创建逼真的示例内容。

### 4. 官网与资源

* 文档：<https://fakerjs.dev/>

* GitHub：<https://github.com/faker-js/faker>

### 5. 注意事项

* 非安全随机数：不适合加密场景。

* 性能：大量生成复杂数据时可能较慢。

Faker 能帮你快速生成逼真的测试数据，提升开发效率！
