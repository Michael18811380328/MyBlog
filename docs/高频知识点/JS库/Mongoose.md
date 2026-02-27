# Mongoose

核心定位：Mongoose 是 Node.js 环境下操作 MongoDB 数据库的**对象文档映射（ODM）库**，相当于 MongoDB 的「ORM 工具」。

MongoDB 的 ODM（对象数据映射）库。

* 主官网：<https://mongoosejs.com/>

* 中文文档（社区维护）：<https://mongoose.nodejs.cn/>

* GitHub 仓库：<https://github.com/Automattic/mongoose>

#### Mongoose 核心概念

| Mongoose 概念  | 对应 MongoDB 概念  | 作用                                                 |
| ------------ | -------------- | -------------------------------------------------- |
| Schema（模式）   | 集合的结构定义        | 定义集合中文档的字段名、类型、校验规则、默认值等                           |
| Model（模型）    | 集合（Collection） | 由 Schema 编译而来，是操作数据库的核心入口（增删改查）                    |
| Document（文档） | 单条文档（Document） | Model 实例化后的对象，对应 MongoDB 中的单条数据                    |
| Query（查询）    | 查询操作           | Mongoose 封装的查询对象，支持链式调用（如 `find().sort().limit()`） |

案例

```javascript
// 1. 引入并连接 MongoDB
const mongoose = require('mongoose');

// 连接本地 MongoDB（test 是数据库名，不存在会自动创建）
async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('MongoDB 连接成功！');
  } catch (err) {
    console.error('MongoDB 连接失败：', err);
    process.exit(1); // 连接失败退出进程
  }
}

// 2. 定义 Schema（用户模式）
const userSchema = new mongoose.Schema({
  name: {
    type: String, // 字段类型
    required: [true, '姓名不能为空'], // 必填 + 自定义错误提示
    trim: true, // 自动去除首尾空格
    maxlength: [20, '姓名长度不能超过 20 个字符'] // 长度限制
  },
  age: {
    type: Number,
    min: [1, '年龄不能小于 1'], // 最小值限制
    max: [120, '年龄不能大于 120'] // 最大值限制
  },
  email: {
    type: String,
    required: true,
    unique: true, // 唯一索引（避免重复邮箱）
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, '请输入正确的邮箱格式'] // 正则校验
  },
  gender: {
    type: String,
    enum: ['男', '女', '其他'], // 枚举值限制
    default: '其他' // 默认值
  },
  createTime: {
    type: Date,
    default: Date.now // 默认当前时间
  }
});

// 3. 定义中间件（钩子函数）：保存前执行
userSchema.pre('save', function (next) {
  // this 指向当前文档实例
  console.log(`准备保存用户：${this.name}`);
  next(); // 必须调用 next() 继续执行
});

// 4. 编译 Schema 为 Model（模型名：User，对应集合名：users）
const User = mongoose.model('User', userSchema);

// 5. 核心 CRUD 操作
async function main() {
  // 先连接数据库
  await connectDB();

  // ========== 新增数据 ==========
  try {
    const newUser = new User({
      name: '张三',
      age: 25,
      email: 'zhangsan@test.com',
      gender: '男'
    });
    const savedUser = await newUser.save(); // 保存到数据库
    console.log('新增用户成功：', savedUser);
  } catch (err) {
    console.error('新增用户失败：', err.message);
  }

  // ========== 查询数据 ==========
  // 1. 查询所有用户
  const allUsers = await User.find();
  console.log('所有用户：', allUsers);

  // 2. 条件查询（年龄 > 20 且性别为男）
  const filterUsers = await User.find({ age: { $gt: 20 }, gender: '男' })
    .select('name age email') // 只返回指定字段
    .sort({ createTime: -1 }); // 按创建时间降序
  console.log('条件查询结果：', filterUsers);

  // 3. 查询单个用户（按 ID）
  // 先取第一个用户的 ID
  const firstUserId = allUsers[0]?._id;
  if (firstUserId) {
    const singleUser = await User.findById(firstUserId);
    console.log('单个用户：', singleUser);
  }

  // ========== 更新数据 ==========
  if (firstUserId) {
    const updatedUser = await User.findByIdAndUpdate(
      firstUserId,
      { age: 26 }, // 要更新的字段
      { new: true, runValidators: true } // new: 返回更新后的数据；runValidators: 执行校验
    );
    console.log('更新后用户：', updatedUser);
  }

  // ========== 删除数据 ==========
  // 示例：删除邮箱为 zhangsan@test.com 的用户（注释掉避免误删）
  // const deleteResult = await User.deleteOne({ email: 'zhangsan@test.com' });
  // console.log('删除结果：', deleteResult);
}

// 执行主函数
main().catch(err => console.error('执行失败：', err));
```

​
