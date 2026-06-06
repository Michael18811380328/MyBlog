# 黑马 AI 开发项目
### 合集-AI 项目开发部署（Deepseek +Cursor + devBox）
[https://www.bilibili.com/video/BV1ig9jYUERk/?vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1ig9jYUERk/?vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1ig9jYUERk/?vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

黑马程序员 DeepSeek+Cursor+Devbox+Sealos

带你零代码搞定实战项目开发部署视频教程

基于AI完成项目的**设计、开发、测试、联调、部署**全流程

Sealos：[https://hzh.sealos.run/](https://hzh.sealos.run/ "https://hzh.sealos.run/")

​


### 01. 课程导学
基于 DeepSeek（设计）+ Cursor（AI编码）+ Devbox（环境管理）+ Sealos（云原生部署）

完成项目的设计、开发、测试、联调、部署，全链路交付

零代码搞定实战项目开发部署视频教程，基于AI完成项目的设计、开发、测试、联调、部署全流程

AI 工具有很多

deepseek 也可以使用其他的工具替代（文心一言，ChatGPT，豆包）

cursor 可以被 TREA，copilot, MarsCode, 文心快码等等工具替代


### 02. 准备工作
通过 DeepSeek（网页版）、Cursor（本地APP需要登录）、Devbox（插件） 和 Sealos（云操作系统，可以支持 devbox） 进行实战项目开发与部署的全流程。

1、注册 DeepSeek账号，准备 Devbox 环境，并通过 Sealos（K8s 云端操作系统 ）创建项目。

2、利用 Cursor 进行项目开发，无需担心测试和生产环境的配置问题。

3、如何准备和配置AI代码编辑器Cursor，包括下载安装、注册账号、配置AI语言、安装插件、设置字体和主题。


### 03. 项目设计-数据库设计(DeepSeek)-1
把产品文档和原型图，发送给deepseek，让 deepseek 分析不同具体的业务需要几张数据库表，不同数据库表的关联。

根据 deepseek 分析的结果，不一定符合实际要求，进一步引导AI分析，以及不同的表的关联关系。

用 AI 之前必须懂数据库，如果不懂数据库的基本信息，无法判断 AI 返回的结果是否满足需要。

#### 项目需求

做一个学校管理系统，包括教师管理和学生管理。学生对应不同的班级，教师对应不同的部门。支持对数据的增删改查。

因为教师和学生的逻辑类似，这里实现教师和部门的数据库关系

#### AI 流程

1、用 AI 确定不同的数据对象（部门，教师，教师工作经历），需要多少个表结构实现

```text
根据产品文档和页面原型图，分析部门管理需要几张数据库表，具体是什么数据库表。——说明需求
只需要给出几张表，不需要给出具体的字段和建表语句。——一步一步引导
必须按照页面原型和需求文档。——避免AI乱发挥
```

2、用 AI 给出不同表结构的对应关系（部门和教师一对多，教师和工作经历一对多）

```text
我们已经确定使用三张表，部门表，教师表，工作经历表。分析这三个表的关联关系（一对一，一对多，多对多）。
```

3、用 AI 给出不同表字段（部门 ID name，主键，外键）

AI 可以做到辅助，还需要程序员进行确认，优化，调整

因为产品文档已经给的很细，所以严格限制 AI 不能任意发挥，必须按照产品文档给定的字段限制。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748850113296.jpg)

​


### 04. 项目设计-数据库设计(DeepSeek)-2
如何利用 AI 进行数据库表结构的设计。

1、AI根据需求文档分析每个表的字段类型和约束。

```text
需求：根据部门产品文档和原型图，帮我设计一下部门表结构，并给出 mysql 的建表语句。
注意：
1、只考虑部门表，参考产品文档，需要设置字段类型和约束条件。
2、严格根据页面效果和产品文档。
```

2、开发人员需检查AI的分析是否符合业务需求，并进行调整。

```text
需要调整的部分，一一告诉AI（简化字段名称）。其他信息不变，给出调整后的 SQL 语句
```

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748850926130.jpg)

AI 给出的建表语句中，有一些过时字段，需要手动去掉（这里就需要懂 mysql 语法）

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748851032312.jpg)

通过AI生成了部门、员工和工作经历表的结构，并生成了测试数据。

```text
我的三个表建表语句如下，帮我在每一个表中生成15条测试数据。——增加具体的测试用例，明确数量。
```

​


### 05. 项目设计-数据库设计-创建表
如何使用 SALLOS 云操作系统提供的数据库服务，完成数据库的创建和表结构的建立。

这节课程就是使用云数据库，建立链接，创建初始化数据库，和 AI 没有关系。

1、在 SALLOS 中创建 MySQL 云数据库，选择合适的版本和配置，然后获取数据库的连接信息。

左侧根据数据库配置收费，差不多每天1元。右侧默认选择 1核1G即可，实例个数就是1，就是默认单节点。不选择备份。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748853812750.jpg)

2、连接到远程数据库，创建项目所需的数据库。

云数据库设置开启外网地址（单独收费），把用户名密码，公网地址和端口号记好

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748853820752.jpg)

本地数据库连接外网地址和端口号

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748853826415.jpg)

3、将 AI 生成的表结构和测试数据，通过SQL语句导入数据库，成功创建了所需的表并插入了数据。

直接复制粘贴执行即可。


### 06. 项目设计-接口设计(DeepSeek)
基于 AI 工具如何设计接口？

1、把页面原型图，接口文档模板，数据库表，和基本需求给 AI，然后AI可以自动生成。

2、根据实际情况检查调整细节。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748860129179.jpg)

​

例如接口文档包括（可以让 AI 生成的文档，和已有文档的结构内容保持一致）

* 接口名称，接口功能，请求路径

* 请求参数，类型，实例

* 响应参数，类型，实例

​

上传设计图片的要点：

1、设计稿原型图通常比较大，多个组合在一起，尽量压缩图片，减少上传量和分析量，加快识别速度

2、如果一个图片内容复杂，可以剪切成不同的部分上传，这样识别效率更高

<img src="https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748860137517.jpg" alt="" title="" width="581" height="461" />

如果提示词比较多，建议在本地记事本中列好，然后再粘贴上去：

1、可以复用本地提示词

2、避免不小心误回车，然后中途发送 AI 执行

关键提示词

```text
严格根据 xxx 提供的需求说明
严格按照 xxx 示范规范文档的格式
生成 restful 风格的接口文档
避免 AI 乱发挥
```

​


### 07. 项目开发-服务端(Devbox)-项目创建
在云服务器中进行项目开发

服务端技术栈： java springboot myBatis

1、在 sealos 中新建一个云服务器（devBox）实际上是一个云端 docker 容器

2、选择具体的技术栈，2核2G机器，并开启公网访问

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748862411432.jpg)

3、容器启动后，可以看到容器的状态。可以使用本地编辑器打开对应的容器（Cursor）

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748862457875.jpg)

4 Cursor 打开后，右侧打开 AI 面板。可以选择具体的模型，claude-3.5-sonnet 比较适合写代码，优先用这个。

Chat 主要用于聊天，询问常规知识点（用于提问回答）

Composer 用来生成大量代码（主要使用，用于新项目），一定要给上下文和代码片段

Bug finder 用于排查错误（用于老项目）

生成后的代码，类似 copilet 可以插入到内部

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748862598209.jpg)

5、生成代码后进行调试，这里显示访问 localhost，这里实际上是云服务器上开发（代码，开发环境都在云上），所以这里也是服务器上的 localhost，需要服务器上开启远程访问，然后本地进行访问即可。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1748862603404.jpg)

​


### 08. 项目开发-服务端(Cursor)-接口开发(部门管理)
服务器功能：部门管理，教师管理（业务需求），文件上传（上传头像），用户登录注册（所有系统都有的功能），分成四节内容介绍，本节介绍部门管理。

关键提示词

```text
需求：增加5个部门接口

技术栈版本：使用新版本技术（避免AI使用旧版技术栈训练结果）

数据库配置（上游技术栈和配置）

接口信息（下游技术栈和需求）
```

下面是示范提示词

```text
请使用 springBoot, Mybatis, PageHelper 技术，使用 JDK 1.8之后的新语法

操作的数据库的主机地址xxx, 端口号 3306，用户名xxx, 密码xxx, 表是 dept 部门表（表结构如下，或者见上下文）

需求：增加5个部门接口，具体见接口文档（见上下文）
```

然后把上一小节的 mysql 建表信息和接口文档提供一下


### 09. 项目开发-服务端(Cursor)-接口开发(员工管理)
相对于部门管理，用户的增删改查操作中，需要处理对应的用户工作经历数据库，有下面的不同点：

1、增加用户：

先增加用户基本信息到用户表，然后遍历工作信息，增加到用户工作信息表。

2、删除用户：

先遍历用户工作经历表，删除对应的工作经历。然后删除用户表中的数据。

3、更新用户信息：

先更新用户基本信息，然后删除已有的工作经历，新增新输入的工作经历。

4、查询用户信息：

查询两个表的结果，组合在一起后返回给用户。

注意，这些操作都是一个数据库事务中实现（AI 已经实现了）。

调试中遇到的各种问题，基本上可以丢给 AI 去解决。不过个人应该有同等能力，即使不使用 AI 也能够想办法解决问题。


### 10. 项目开发-服务端(Cursor)-接口开发(文件上传)
文件上传需要单独的服务器（OSS对象存储），不能放在MySQL中，可以使用阿里云 OSS 或者这个网站提供的对象存储。

新建服务器后，可以获取 OSS 的访问秘钥，以及内部外部访问链接。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1749088074064.jpg)

具体访问方法，可以参考文档，安装对应的 sdk 进行访问

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1749088101811.jpg)

对应 AI 的提示词可以这样写，关键点

```text
1、需求：完成文件上传的接口

2、接口文档：xxx

3、文件使用的 OSS 配置信息，以及对应的官方文档链接
```

实际上 AI 可能不会访问官方文档链接，给出的代码和官方文档的不一样，此时可以把官方文档相关配置复制下来，直接问AI，逐步寻找答案

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1749088126296.jpg)

​


### 11. 项目开发-服务端(Cursor)-接口开发(登录认证)
登录认证，这是每个项目通用的业务

需要增加 JWT token 验证


### 12. 项目开发-前端(Cursor)-页面布局
vue3 + elementUI

先搭建整体的架构，然后完成不同细节部分

​


### 13. 项目开发-前端(Cursor)-部门管理
注意事项：

1、后端已经实现登录认证，前端这部分先实现页面布局，那么可以把后端登录部分注释掉，先开发功能

2、Cursor 按照次数计费，并不是按照字数计费。所以可以把需求写好 txt 文档中，一共多少个需求，然后统一发送给 cursor 这样开发效率更高。Cursor 每个月免费额度150次。

3、前端的需求，需要给定上下文（API接口文档，服务器接口配置）（设计稿，设计需求和细节）

个人经验，不同功能使用不同的AI工具，兼顾费用和使用。

​

后端调试比较明确，因为需求文档是明确的（接口参数是确定的），可能实现方式 SQL 性能等有差别。

前端调试中，给定一个图片设计稿，然后 AI 自己写代码，不一定 100% 还原效果，需要逐步完善。案例演示过程中，需要调整3-5次才能满足实际效果，除非全部给定具体的值。

提示词尽量精确，精确就可以减少发送的次数。

使用 AI 的前提，就是一定要懂代码。类似开车，会开车，然后使用 AI 辅助工具提升效率，遇到土坑自己能开出来。如果完全不懂开车，直接使用 AI 智驾，那么出问题就比较麻烦。


### 14. 项目开发-前端(Cursor)-员工管理-1
如果使用 AI 创建的前端页面，和实际设计稿需求不完全一致，需要微调效果：

1、调节哪个页面或者组件？

2、给 AI 设计稿，或者具体的尺寸数据；如果没有设计稿，那么尽量做到精确。


### 15. 项目开发-前端(Cursor)-员工管理-2
每一轮对话 composer 都有上下文，如果上下文被删除了，那么需要重新设置预先的环境变量（预先的提示词）

环境变量有

package.json 使用的第三方库和版本

vite.config webpack-config.json 项目编译的配置

api.js 接口代码或接口文档

其他相关的功能文件

​


### 16. 项目开发-前端(Cursor)-登录
jwt token 验证

登录页面前端效果


### 17. 项目发版上线(Devbox)
需要编写启动脚本 entrypoint.sh 然后就可以 docker 容器内部自启动

cursor 已经实现了启动脚本，前端启动脚本需要检查是否满足 npm run start 还是 npm run dev


### 18. 课程完结
本课程总结：使用 AI 工具改进现代项目开发过程

传统开发过程费时费力，现在要求程序员在扎实的基础上，可以脱离底层细节代码，把主要精力用于思考项目架构上

deepseek 或者 豆包，把设计稿或者产品文档，转换成提示词，转换成数据库建表语句

**（需要人工检查，调整，优化）​**

把需求文档+接口示例 转换成接口文档

学习流程也对应变化（对于基础的 JavaScript 语法，框架细节语法等，不需要投入重点）重点是实际项目，以及 AI 和已有项目的结合。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-06/image-1750775477028.jpg)

总之，就是类似汽车的辅助驾驶：对于新手司机，啥也不会，完全依赖辅助驾驶，不切实际；如果是老司机，可以依赖辅助驾驶完成大部分脏活累活（驾驶工作），专注于驾驶山区的弯路（目前AI还不支持的情况）

​


### 01.Deepseek 介绍+提示词工程
黑马程序员出品

[https://www.bilibili.com/video/BV1SoQuYjE2u/](https://www.bilibili.com/video/BV1SoQuYjE2u/ "https://www.bilibili.com/video/BV1SoQuYjE2u/")

Deepseek 主要分成三部分：

1、提示词工程（本课程）

2、Deepseek 本地部署模型（另一门课）

3、Deepseek +Cursor + devBox 零代码搞定项目开发和部署（已学习）

本课程主要讲提示词工程+AIGC 创作文字图片


### 02 deepseek 注册和使用全攻略
deepseek 图形化界面的主要功能+基本使用：

1、多轮对话：每一个对话可以发送多个语句，实现精确回答

2、新对话：不同对话设置不同的主题

3、选择思考模型（深度回答，还是简单回答）

4、联网搜索（可能是虚假信息，可能结果不正确）

5、上传附件（文字，图片）

6、问答历史

7、设置，个人账户，下载 APP


### 03-解决服务器繁忙难题
蒸馏版：轻量版，数据量少，思考快，准确率可能不高。

满血版：重量级，数据量大，准确率可能高。

智能体：可能预先封装了不同的功能，可以直接问（PPT，程序员，中国历史）比默认的助手更专注于某个行业。

其他套壳工具：比官方网站排队少，模型选择更多样化（腾讯元宝，问小白）。


### 04-提示词-明确性—让DeepSeek秒懂你的需求
提示词特征：明确性，具体性，创造性。

（实际上就和写任务类似，5W 分析，提出明确的产品需求）

明确性，明确三个要点：

1、明确主要需求：写一个小说，主要内容是神里绫华和旅行者的爱情故事。

2、明确产出格式：以小说形式产出，文字1000字。

3、明确受众和方式：以中学生的口吻，还是以科学家的口吻，还是以人物对话的口吻。


### 05-提示词-具体性—让DeepSeek给你要的结果
细化提示词，得到更精确的结果（提供背景信息，设置回答的语气和风格，设置回答的格式和结构）

1、背景信息：上下文内容，环境预设，目标受众

2、设置回答语气和风格：回答的风格（可爱，正式，毒蛇），回答的语气（积极，消极，中立）

3、设置回答的结构和格式：字数限制，分几段，每一段的主要内容

​

最终：根据自己的实际需求，写出合适的提示词库。


### 06-提示词-创造性—激发DeepSeek的无限潜能
明确性对应精度较高的工作，创造性对应 AIGC 生成式 AI 的工作。

用户可以引导 AI 生成更有创意和独特性的内容。

1、开放式问题：爱诺创造了伊涅夫机器人，这个机器人可以干什么呢？（科幻文章）

2、引入比喻：伊涅芙就像勤劳的清洁工

3、设置特殊场景：有一天旅行者带着伊涅芙旅行，描述旅行中遇到的各种奇闻轶事

​

总结：提示词的综合使用，结合明确性，具体性，创造性三个原则。

1、确定具体回答什么（明确问题内容）

2、具体回答的方式：回答字数，语气，态度，风格，段落，每一段主题和内容

3、回答是否有创造性：设置AI创造性，看个人是否有明确的规划和思路

案例

```text
模拟高中生写小说，字数1000字

标题：描述爱诺和伊涅芙的生活，风趣幽默
内容：
第一段：爱诺创造了伊涅夫，很辛苦。。。
第二段：伊涅芙进行大改造。。。
第三段：爱诺很开心。。。
要求：语言幽默，结构合理，每一段内容过渡自然，使用人物对话的形式进行描写。
```

提示词要写好（或者使用预设的工具），各种模型和工具要选择好（不同模型适合解决不同的问题）


### 07- 提示词万能模板，轻松掌控DeepSeek
提示词万能模板：

1、通用提示词

需求描述——背景介绍——问题和顾虑——输出要求

```text
需求：我要策划一个公司周末团建活动。
背景：老板和员工一共200人，很喜欢自然风光
顾虑和不足：但是体力有限，不可能去太远的地方；预算10000元
输出：请给出3个备选方案。
```

2、解决问题提示词：

核心问题——已尝试情况——预期效果——限制条件

```text
问题：我的电脑无法发出声音
已经尝试：重启电脑后还是无法发出声音，音量可以调节但是无法发声
预期：希望电脑可以正常发出声音
限制：是内网环境，无法链接互联网
```

3、创意生成

创作类型——核心要素——风格参考——排除元素（撰写文案）

4、学习提升

知识要点——理解程度——应用场景——认知层面

例如：我想学习 Python，之前只是简单写过脚本，现在需要做Python爬虫开发工程师，用清晰简洁的方法教我如何学。


### 08-DeepSeek 打造完美简历的秘籍
什么样的简历更好？

你具体做了什么事情，具体的产出量是什么（粉丝增长了，数量增加了，提高效率了）？

简历的提示词模板：

```text
我是一名Python开发，具有5年开发经验，想找一份服务器开发设计师的工作。
我精通 Python 基本语法，熟练使用 Django Flask 等服务器框架，熟练使用 sklearn 等数据处理工具，熟练使用 black isort 等代码规范工具，做过多个服务器后台设计工作。

需要突出我的全栈特点，曾经完成某个服务器项目，达到线上用户并发量多大

帮我写一份个人简历，不超过2页内容。
```

AI 优化简历：

```text
简历信息明确——熟练使用Python框架——熟练使用Django Flask 框架，制作可视化效果和数据分析
数据结果——负责后台服务器开发——独立负责后台服务器开发，后续带其他成员进行开发
项目经验——我工作5年经验——5年时间内，完成了xxx项目，实现了xxx的效果
```

​


### 09-DeepSeek 应对超级面试官
如何应对面试？

1、AI 根据求职者情况，自动生成100道高频面试题（夯实基础）。

2、AI 实际模拟面试场景，进行一对一面试和提问（培养胆量和表达），可以纠正回答的正确性。


### 10-DeepSeek+Kimi：PPT制作的终极神器
PPT 标准结构：封面（美观新颖，吸引眼球）——目录（结构清晰）——正文内容（文字+排版+图片）——总结（结论）

分别使用 AI 进行优化

AI 可以自动匹配色彩和板式，整理报告逻辑，自动排版，自动总结核心内容

deepseek 创建架构和内容

```text
请生成一个 PPT 的结构，页面20页，要求如下：
1、封面页：主题是基金介绍
2、目录：基金介绍，基金分类，基金收益，基金风险，如何选择基金
3、正文：每一个章节对应内容和文本
4、总结：吸引用户购买基金
```

kimi 完成 PPT 的制作和导出&#x20;

```text
先把每一页面的内容使用文字写出来
```

然后导入 Kimi 可以自动生成 PPT，并选择配色，选择主题，导出 PPT。

什么 PPT 是好的 PPT？

```text
1、内容充分：主题明确，逻辑清晰，信息准确，简洁精炼（deepseek 文案）
2、设计：整体风格统一，视觉效果美观，动画和翻页恰到好处（Kimi 选择设置主题）
3、演示：演讲流畅，与观众合理互动（软实力）
```

​


### 11-deepseek 打造爆款文案
爆款文案，可以让简单的内容生产，变成账号运营者。

运营策略：

FABE 模型：Feature + Advantages + Benefits + Evidence 特征+优点+利益+证据，传统的模型适合线下运营，例如推销一个健身房的会员，我们健身房特点就是小区楼下方便，全市连锁店100家，随时都可以。符合你的利益，你健身之后，减少疾病，就是最大的收益。同小区很多会员都体验了这个活动，大家减重20斤，非常好，非常欢迎你前来体验。

FABE 加强版——适合线上运营：你有病（Fear 痛点）——我有药——药有效——都说好（Emotion 情感互通）

爆款文案提示词：

```text
生成一个高钙口服液广告文案：
- 目标：中老年人群
- 痛点：老年容易骨折，原因是骨质疏松
- 解决：多补充钙质
- 利益：每天1元补钙是享受，去医院10万手术费是遭罪
- 情感：我亲戚骨折了，全家老小陪着，病人痛苦，还要误工费
- 视觉：展示腰酸背痛的图片，吃药之后站起来舒服的锻炼的图片
```

爆款文案注意事项：

```text
平均停留时间：3秒钟，前三秒的文本和内容必须抓住用户吸引力（关键词，避免模糊的语法）
例如稻妻追思和守候——就不如神里绫华和旅行者的契约与调教（突出任务和敏感词，更抓住吸引力）

黄金阅读时段：20:00 —— 22:00 黄金时间发送（大家吃过晚饭，很多人耍手机）

互动转化率：UGC 的转化率更容易转化
UGC：user generate content 用户生产的内容（大家用了都说好），适合帖子，短视频
PGC：专业生产内容（新闻，电影，办公）
```

操作流程：

```text
找热点——微博热搜，百度搜索词，新榜，选择切入点引流

文案生成——deepseek

违禁词查询——零克查词

配图设计——Canvas可画

视频创作——剪映

内容发布——多平台发布
```

发布过程：检查 ABE 完整度，勾选对应状态，标注问题点，未达标项需限期整改

1. **属性拆解**：根据具体内容类型，增删二级属性项（如短视频需加 “背景音乐版权”“字幕完整性”）

2. **逐条校验**：对照达标标准，逐项检查，避免遗漏

3. **问题整改**：针对 ×/△项，明确整改责任人及完成时间

4. **复核归档**：整改后二次检查，达标则归档，未达标重新优化

| 一级属性维度     | 二级属性项      | 预设达标标准                           |
| ---------- | ---------- | -------------------------------- |
| **基础信息属性** | 内容标题       | 包含核心关键词，简洁明确（≤20 字）              |
|            | 内容 ID / 编号 | 按团队规范命名（如渠道 - 类型 - 日期）           |
|            | 发布渠道       | 明确对应投放平台（如公众号 / 小红书 / 抖音）        |
|            | 目标受众       | 标注核心人群（如 25-35 岁职场人 / 宝妈群体）      |
| **核心内容属性** | 核心主题       | 主题清晰，与标题强关联，无偏离                  |
|            | 核心信息点      | 至少覆盖 3 个关键信息，逻辑连贯                |
|            | 数据 / 案例支撑  | 涉及观点需配数据 / 案例，来源可追溯              |
|            | 结尾引导       | 包含明确行动指令（如点击购买 / 关注收藏 / 留言互动）    |
| **格式规范属性** | 排版结构       | 分段合理，有小标题 / 项目符号，易读性强            |
|            | 图文配比       | 符合渠道要求（如公众号 1 图 / 300 字，小红书多图优先） |
|            | 字体 / 字号    | 统一品牌规范，无乱码 / 错字                  |
|            | 链接 / 附件    | 所有链接可正常跳转，附件可下载                  |
| **合规风险属性** | 禁用词排查      | 无极限词（最 / 第一 / 顶级）、虚假宣传词          |
|            | 版权声明       | 引用内容标注来源，图片 / 素材无侵权风险            |
|            | 隐私合规       | 不泄露用户 / 企业敏感信息                   |
|            | 政策匹配       | 符合平台规则及行业监管要求                    |
| **效果适配属性** | 关键词埋点      | 包含预设 SEO/SEM 关键词（≥2 个）           |
|            | 转化入口       | 转化按钮 / 二维码位置显眼，无遮挡               |
|            | 渠道适配性      | 内容风格、长度匹配投放渠道特性                  |

​


### 12-小白的设计平台-可画
可画-canvas 是一个在线轻量级图片编辑器

1、可以选择从模板市场选择，然后进行微调

2、可以上传本地图片和素材，然后进行拼接和调节

类似的就是及时设计


### 13-总结
有时候AI可以多生成几次，然后选择最合适的。

使用 AIGC 时，人的思维不能完全被AI带着走。


### 01-DeepSeek诞生背景介绍
2025年各种 AI 已经完全成熟

程序员需要熟练使用 AI 完成辅助性工作，AI 可以取代初级程序员的操作，但是不会取代架构师，也不会取代产品经理（能把一个细节做的很好，全局架构思考和产品规划等功能还是不完全）

程序员+AI 开创编程新趋势

课程是deepseek本地部署的公开课，简单介绍，分成三部分：

1、deepseek 是什么？ollama 本地部署 deepseek（2-3节课）

2、dify + deepseek 构建AI助手：安装 dify, 本地 rag 知识库的构建，集成转述 AI 助手（4-5节课）

3、简单介绍 deepseek 底层技术：模型结构，训练方式，构建一个邮件智能体（6-7节课）

这个课程是公开课，不介绍细节和注意事项，算引流课程，实际需要自己去操作。


### 02-DeepSeek概念及初步使用
deepseek 发展过程：2023年创始，2025年春节开源 R1 模型

Deepseek 创建的多个开源模型

* deepseek coder-代码逻辑

* LLM

* V2

* V3（对标GPT4o模型）617B参数的大型混合专家模型

* R1 模型（对标 openAI o1 版本）-通用逻辑，开源，深度思考

deepseek 平台使用：网页版本和APP版本，操作类似其他的 AI 助手


### 03-DeepSeek本地私有化部署（基于Ollama）
#### 本地私有化部署

#### 目的

1、不需要联网也可以使用 deepseek，不用担心网络不稳定等问题

2、可以进行蒸馏，调整参数，做出适合自己的大模型

#### 部署过程

1、进入 ollama 官网下载 ollama (选择对应的操作系统的版本) ollama.com

**ollama 是一个开源框架，作用是在本地机器上部署和运行大语言模型（LLM）​**

2、在 ollama 的官网中，选择根据硬件配置，选择合适的模型（7b）。

> 实际测试先试用 1.5b 看一下性能 deepseek-r1:1.5b

3、在终端安装 deepseek: 直接复制安装命令，ollama run deepseek-r1:8b 即可

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769519848874.jpg)

先下载模型，然后就可以在终端中进行问答，就证明安装成功了（对电脑硬件性能要求比较高）。

最新版本的 Ollama 也支持直接可视化的选择模型，下载模型，并进行基础的对话，历史管理（虽然不支持更多智能体）

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769519859985.jpg)

​


### 04-基于Dify➕DeepSeek构建AI聊天机器人
上一节课程中，使用终端进行交互，页面内容不是很友好。

使用 dify 框架就可以做出可视化的 AI 助手。

dify 是开源大语言模型（LLM）应用的开发平台。融合了后端即服务（Baas Backend as a service）等理念，帮助开发者快速搭建和部署生成式 AI 应用程序。技术层面，Dify 内部集成了很多技术栈，可以支持数百个模型，Prompt 直观，内置 RAG 引擎，稳健的 Agent 框架。

#### dify 的安装

1、安装 docker

2、git clone dify

3、docker compse up 构建镜像（需要科学上网，这个很关键）

#### dify 链接 ollama

在 dify 可视化页面中，选择模型名称，选择本地 ollama 的URL，设置合适的参数（token 长度等）。

然后在浏览器窗口中，可以调用 ollama 的接口，然后以可视化的形式展现出来的 AI 助手。


### 05-基于Dify搭建RAG本地知识库
实现 rag，可以使用 dify 或者 langchain 等工具实现，这节课程是 dify 课程。

#### RAG 原理

RAG: 搜索增强生成，是一种信息处理技术。通过检索相关知识，给 LLM 提供必要的上下文，融入 LLM 生成内容过程，提高大模型回答问题的准确性和专业度。主要用于处理上传内部文档或者某行业专业资料，比通用 AI 可以提供更有针对性的解答。通俗的，就是把本地知识库嵌入大模型中（embedding）

embedding 具体技术架构如下，支持的知识类型支持各种文本文件和网页内容，具体操作分成

* 知识注入（知识解析和转换）。把文档转换成字符串格式

* 知识切片（切片模板，切片管理）。按照一定的规则，把字符串切成段落的数组，每一个数组提取关键词。

* 知识检索（相似度匹配）：多个段落进行聚类分析

* 提示词管理（提示词模板，变量引用，参数调整）：构建高频提示词

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769646844362.jpg)

#### 创建 rag 知识库的过程

见图示

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769647077896.jpg)

具体操作：

1、选择数据源：选择本地文本文件上传，选择 Notion，选择网页

2、数据分段和清洗：数据分选可以设置为换行符，设置最大段落长度，设置文本内容预处理。索引方式可以选择经济或者高质量，检索设置可以设置 Top K（前面的多少个高频词）。

3、创建知识库：可以选择已经嵌入的文本。

#### 集成 ds 专属的 AI 助手

在 DS 的助手对话窗口中，选择引用上下文，然后选择刚才本地上传的文件，可以根据本地内部文件，增强 AI 助手的能力。

回答的参考文献中，就可以显示本地对应文件段落和位置。

召回测试：根据给定的查询文本，测试知识的召回效果。


### 06-DeepSeek核心架构及训练方式介绍
本节课程涉及底层原理比较多，简单理解

#### deepseek 模型结构

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769654376287.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769654382532.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769654392841.jpg)

​

#### deepseek 训练方式

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769654403472.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769654411084.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769654455122.jpg)

​


### 07-基于DeepSeek构建邮件发送智能体Agent
基本结构

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769647392705.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769647399867.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769647407774.jpg)

#### 实际项目

环境搭建：Python 3.10 以上，安装 langchain crewai 库，本地 ollama 部署 deepseek 模型。

项目目标：开发一个 AI agent，可以自动写书信发送邮件。

代码介绍：

* main.py：设计 AI agent 以及对应任务，完成整个任务的主体功能。

* custom\_tools.py 自定义 tools，以供 agent 使用。定义把AI生成的内容保存到本地文件的函数，定义把文本发送到邮箱的函数（辅助函数）。

下面是代码的具体实现，主要就是一步一步引导 AI 完成发送邮件的工作（使用代码逻辑引导，不是人使用语言引导，下面是 AI 辅助完成）

custom\_tools.py 辅助函数

```python
from langchain.tools import tool
import datetime
import os
# 用于连接邮箱服务器
import smtplib
# 用于构建邮件内容（txt 或则 html）
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
# 用于格式化邮件地址
from email.utils import formataddr


class CustomTools:
    def __init__(self):
        pass
    def store_poesy_to_txt(content: str) -> str:
        "将编辑后的书信内容保存到 txt 文件中"
        try:
            filename = f"./LLM/poie.txt"
            with open(filename, "w", encoding="utf-8") as file:
                file.write(content)
            return f"内容已成功保存到 {filename}"
        except Exception as e:
            return f"保存内容时出错: {e}"

    def send_message(self):
      "读取本地文件中的 txt 文件内容，并以邮件形式发送"
      from_name = "LLM"
      from_email = "13212345678@qq.com"
      from_password = "123456"
      to_addr = "13212345678@qq.com"
      subject = "LLM 生成的书信"
      my_title = "LLM 生成的书信"
      filename = "./LLM/poie.txt"
      with open(filename, "r", encoding="utf-8") as file:
          content = file.read()
          msg = MIMEMultipart()
          msg["From"] = formataddr((from_name, from_email))
          msg["To"] = formataddr((to_addr, to_addr))
          msg["Subject"] = subject
          msg.attach(MIMEText(content, "plain", "utf-8"))
      smtp_srv = smtplib.SMTP_SSL("smtp.qq.com", 465)
      try:
          smtp_srv.login(from_email, from_password)
          smtp_srv.sendmail(from_email, to_addr, msg.as_string())
          smtp_srv.quit()
          return "邮件发送成功"
      except Exception as e:
          return f"发送邮件时出错: {e}"
      finally:
          smtp_srv.quit()

```

主函数，包括三个智能体，三个任务对象，具体任务执行

```python
import os
from crewai import Agent, Task, Crew, Process
from tools.custom_tools import CustomTools
from dotenv import load_dotenv, find_dotenv
from langchain_community.chat_models import ChatOpenAI

# 初始化模型
client = ChatOllama(model="deepseek-r1:8b")

# 创建3个智能体
poet = Agent(
  role='专业诗人',
  goal='创作专业的诗词',
  backstory="""你是一个专业的诗人，擅长创作专业的诗词。""",
  verbose=True,
  llm=client,
)

letter_writter = Agent(
  role='专业信函 writer',
  goal='创作专业的信函',
  backstory="""你是一个专业的信函 writer，擅长创作专业的信函。""",
  verbose=True,
  llm=client,
)

sender = Agent(
  role='专业信函 sender',
  goal='发送专业的信函',
  backstory="""你是一个专业的信函 sender，擅长发送专业的信函。""",
  verbose=True,
  llm=client,
)

# 创建3个任务，对应上面三个智能体
task1 = Task(
  description="""创作一首专业的诗词。""",
  agent=poet,
)

task2 = Task(
  description="""创作一首专业的信函。""",
  agent=letter_writter,
)

task3 = Task(
  description="""发送专业的信函。""",
  agent=sender,
)

# 创建 Crew 实例
crew = Crew(
  agents=[poet, letter_writter, sender],
  tasks=[task1, task2, task3],
  verbose=True,
  # 任务执行顺序，上一个任务的结果作为下一个任务的输入
  process=Process.sequential,
)

# 执行任务
result = crew.kickoff()
print(result)

```

​


### 08-手把手教学DeepSeek本地部署
这是3小时直播课的全部，上面分节课程是精华内容，AI 总结的内容如下

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769647265954.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769647275831.jpg)

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2026-01/image-1769647284047.jpg)

​


