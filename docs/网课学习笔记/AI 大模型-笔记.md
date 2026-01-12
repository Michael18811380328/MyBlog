
  # AI 大模型
  ### 如何学习入门的 GPT
<https://www.zhihu.com/question/599713780/answer/3055040756>

介绍了如何入门学习 GPT 和 LLM

介绍了 GPT1-4的论文和主要变化，深度学习等概念，论文阅读难度比较大。

整体上需要扎实的 Python 基础，扎实的数据结构和算法基础，扎实的统计概率基础等。

直接学习核心原理比较困难，学习思维以及 python 基本的逻辑是很重要的。

个人目标：AI 如何提升程序员的工作效率？如何在其他场景中使用这个技术？最好应用在自己的项目中（或者自己写一个 AI 聊天项目）


### 使用 Assistant 搭建 AI 助手
这是一个付费课程的体验课，后续系列课程付费，这节课大概了解了 Assistant API 和基础概述

链接：<https://www.zhihu.com/education/training/course-detail/1744009771047370752>

来源：知乎在线视频，简单介绍 GPT assistant 如何搭建一个 AI 助手，概述 + demo

讲师是一个创业失败的产品经理出身，也干过一点技术，这个就是入门介绍

#### 和 AI 大模型相关的四种人

1、底层模型开发工程师：训练基础大模型 GPT4，为大模型提供硬件层面的算力（英伟达），门槛很高

2、AI 开发程序员：编程实现 AI 工具——重点目标

3、AI 产品经理：给用户设计AI程序，或者给自己设计AI程序

4、用户

AI能力的上限是使用者的判断力。AI很强，那么用户需要足够强，才能生效。如果用户能力不强，那么AI发挥效果发挥不出来（AI辅助编程，那么原始用户的编程能力应该需要很强）。

AI 类似智能驾驶和洗衣机，适合做难度不大重复性的基础工作，目前对于复杂工作和特殊场景还存在局限。

#### 大模型应用的知识体系

大模型应用的技术架构如下，从简单，到复杂，分成四种应用。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/auto-upload/image-1708998901968.png)

应用1：应用程序直接输入 prompt 调用基础大模型 API，基础大模型返回 response，可以理解为静态固定的数据（使用市面上已知的开源基础大模型训练的结果）

应用2：在1的基础上，加入了外部第三方 APIs，例如百度地图 API，或者微信 API。那么基础大模型就可以调用特定服务器的 API，然后完成特定的操作（导航，分享朋友圈等）下面做的 demo 就是这个级别的应用。agent 智能体：大模型向 server 发送要求（应用程序应该调用某个API获取某个信息）的部分。大模型是静态的数据，没有直接访问外部API的能力，所以通过应用程序执行这个外部API。例如：明天出门是否带伞？先向API查询明天北京的天气，查询到结果之后才能确定是否带伞。

应用3：进一步增加了 RAG。传统的知识体系是 mysql 关系型数据库，现在很多外部知识库是特定的数据结构（例如实时爬虫爬取的新闻数据），先把这部分知识转换成向量数据库，然后已有大模型调用这部分数据库。

> 检索增强生成（Retrieval-augmented Generation，RAG），是当下最热门的大模型前沿技术之一。如果将“微调（fine tune）”理解成大模型内化吸收知识的过程，那么RAG就相当于给大模型装上了“知识外挂”，基础大模型不用再训练即可随时调用特定领域知识。
>
> 向量数据库是一种特殊的数据库，它具备数据存储和读取的基础能力，同时也有一个特殊的查询操作，即向量检索。类似的是 redis 向量检索。

应用4：加入微调。很多实际行业场景和基础大模型有出入，那么需要对实际行业的参数进行微调和限制。这部分也是提高精度的重要因素，也是现在很多应用岗位实际做的事情。

具体的知识点：Embedding: 相似度计算、聚类分析、词向量、句子向量，这部分比较基础和底层

#### 提供 Assistant API 的框架 streamLit

这个应用可以调用 openai 的接口，使用自定义的 API 对基本功能进行扩展。

框架：streamLit 更方便快速的搭建分享应用，是一个入门简单的 python 框架，直接给配置即可，不需要考虑路由等细节。

Assistant = Thread（界面交互的UI，一串对话） + Run(内部逻辑，包括获取信息，AI 执行，显示返回结果)

AI Client —— Assistant —— Thread —— message  —— server run —— response

每一个类都有很多 API，直接调用即可（实际生产项目使用自己实现）

#### Demo 滴滴打车

config.toml

```
[server]

# 允许访问本地静态资源（图片和 favicon）
enableStaticServing = True

```

utils.py 自定义的 API，AI 可以直接调用

```python
# coding=utf-8
# by Michael An
import time
import streamlit as st

def get_current_time(*arg, **kwargs):
	# API 返回自然语言，不能返回对象，模型不能理解对象
	return f'现在时间是{time.strftime(format: "%H:%M:%S", time.localtime())}'

def random_placeholder_text():
	text_list = [
		'Your message',
		'Say hello',
	]
	return text_list[int(time.time()) % len(text_list)]

# user avatar setting
ICON = 'static/avatar.png'
ICON_USER = 'user'

def append_and_show(role, content):
	"""
	将消息添加到 messages 列表中，并展示
	role: 角色， assistant or user
	content: 消息内容
	"""
	st.session_state.message.append({"role": role, "content": content})
	
	st.chat_message(role, avatar = ICON if role == 'assistant' else ICON_USER).write(content)

if __name__ == '__main__':
	print(random_placeholder_text())

```

第三方给出的 server API 地图

```python
# 高德地图 API
# 获取开始和结束的经纬度和 POI ID 
# 获取开始和结束的驾车时间和距离

import requests

map_key = '123'

def get_poi_id(address):
	params = {
		'key': key,
		'keywords': address
	}
	response = response.get('https://restapi.amap.com/v5', params=params)
	location = response.json()['pois'][0]['location']
	poi_id = response.join()['pois'][0]['id']
	return location, poi_id

def get_distance_time(origin, destination):
	origin_location, origin_id = get_poi_id(origin)
	destination_location, destination_location = get_poi_id(destination)
	params = {
		'key': key,
		'origin': origin_location,
	}
```

主函数：

```python
import json
import logging

from dotenv import load_dotenv
from openai import OpenAI

from tools.utils import *
from tools.amsp import get_distance_time

load_dotenv()

logging.basicConfig(level=logging.INFO)

# 初始化 client
client = OpenAI()

availavle_functions = {     'get_current_time':
get_current_time,     'get_distance_and_duration':
get_distance_time, }

# 获取创建好的 assistant
assistant = client.beta.assistants.retrive('token-xxxxxxxxx')

# streamlit 初始化
st.set_page_config(
	page_title="打车车费估算模型",
	page_icon="icon",
)

# 初始展示
st.caption('使用 open AI Assistant 结合其他技术，实现打车 demo')

if "message" not in st.session_state:
	st.session_state["message"] = [
		{
			"role": "assistant",
			"content": "我是打车助手"
		}
	]
# 
if "thread" not in st.session_state:
	thread = client.beta.threads.create()
	st.session_state['thread'] = thread

for msg in st.session_state.messages:
	st.chat_message(msg["role"], avatar=ICON if msg["role"] == 'assistant' else ICON_USER).write(msg['content'])

# 核心逻辑
if prompt := st.chat_input():
	append_and_show("user", prompt)
	message = client.beta.threads.messages.create(thread_id=st.session_state.thread.id, role="user", content=prompt)
	run = client.beta.threads.runs.create(thread_id=st.session_state.thread_id, assistant_id=assistant.id)

	# 轮训（忽略了处理细节）
	while True:
		try:
			# 轮训等待，更新run状态
			if run.status == 'queued' or run.status == 'in_progress':
				pass
			# 执行本地方法
			elif run.status == 'requires_action':
				pass
			# 完成后，显示最新消息
			elif run.status == 'completed':
				pass

		except Exception, e:
			logger.error(e)
			raise

```

因为这是一个 demo 介绍，代码就忽略了很多技术细节

局限性：没有处理用户恶意调用 API 问题（调用API 费钱）；没有处理安全合规问题等；没有更多的逻辑推断能力，格式不完美等等。所以这里需要高质量的 Prompt 提示词工程；没有处理图片视频音频等问题。

#### AI 对未来职业的影响

1、基本应用：单行代码提示

2、copilot: 提示一个函数或者一个模块

3、交互：支持上下文交互效果

4、社交性：模型不断学习新的数据库，从对话中学习

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/auto-upload/image-1709021517069.png)


### Prompt Engineer + LangChain
### Prompt Engineer 提示词工程

prompt 告诉大模型要做什么

怎样用在代码中（单轮问答，多轮交互）

#### 案例

```python
def example():
  instruction = """帮我写一个课程框架,主题是react.js课程框架,200字."""
  prompt = f"""{instruction}"""
  response = getResponse(prompt)
  print(response)

# 基于 prompt 生成文本
def getResponse(prompt, model='gpt-3.5-turbo-16k-0613'):
  # messages 列表（存放对话信息）
  # 目前支持单轮对话
  messages = [
    {
      'role': 'user',
      'content': prompt,
    }
  ]
  response = openai.ChatCompletion.create(
    model=model,
    messages=messages,
    temperature=0,
  )
  return response.choices[0].message['content']

```

API 中主要的参数和说明：

model: 使用 GPT 的模型，默认是 gpt3.5 模型

messages: 对话数组。role 表示角色，支持 user, assistant, system 三种情况。assistant 表示 GPT 返回来的信息。system 表示环境系统变量，系统预先设置的信息。例如：你现在是一个化学老师，只能解答化学有关的问题。

tempetature: 温度，temperature 表示随机性，0最小，2最大，默认较小值0。如果给到 1.8 那么答案天马行空。

这里还有其他的参数，根据官方文档使用

#### 注意点：

* 内容审核：harassment: true or false 对于不同类型骚扰如何处理

### LangChain 大模型 python 框架

LangChain 是一个面向大模型的开发框架，使用简单配置即可实现复杂的 AI 应用。内部封装了很多组件（网络模块）。可以把大模型和外部数据结合起来，输入自己的知识库，定制化大模型。

中文文档：<https://www.langchain.com.cn/>

基本介绍：<https://zhuanlan.zhihu.com/p/644500258>

使用 node 开发：<https://js.langchain.com.cn/docs/getting-started/guide-llm>

未来可以把这个放在阅读器中，自己写一个助手

关键申请一个 OPENAI\_API\_KEY 然后直接调用即可

#### IO 模块

这里的 IO 和计算机的 IO 输入设备输出设备无关，指的是向大模型输入和输出的模块，就是应用和大模型的接口。

* prompts：可以直接处理多种模型，不需要考虑不同模型的差异化，减少了程序员处理工作

* outputs: 解析输出的结果，分成普通的 LLM 和对话式的 chat\_model，如下

* language model： 使用哪种语言模型进行解析

```python
# prompts：可以直接处理多种模型
from langchain import PromptTemplate

prompt_template = PromptTemplate.from_template(
	"Tell me a {adj} joke about {content}."
)

prompt_template.format(adj="funny", content="kids")

```

```python
# model = LLM
prompt_template.format(adj="funny", content="kids")

from langchain.llms import OpenAI

llm = OpenAI()

print(llm.predict('Hello, '))

```

```python
# model = chat_models
from langchain.chat_models import ChatOpenAI

chat_model = ChatOpenAI()

print(chat_model.predict('Hello, '))

```

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/auto-upload/image-1709388527210.png)

#### 数据连接模块

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/auto-upload/image-1709388589136.png)

load: 加载数据，支持多种格式 Document loader(cvs, html, file, json, pdf)

```python
from langchain.document_loaders import PyPDFLoader

loader = PyPDFLoader("test.pdf")
pages = loader.load_and_split()

print(pages[0].page_content)
```

transform: split（把数据切成块，就是上面的 split() 函数） + translate(把输入翻译成指定语言)

embed: 数据向量化，模型无法直接阅读文本或者字符串，只能处理数值。所以使用机器学习的方法，从数据中进行特征值提取，变成一个高维的数据（向量或者张量）

store：把向量存储后，和已有的数据集中的向量进行对比，比较相似程度，找到最相似的结果（判别）相似度的计算原理：两个点的距离是欧氏距离，两个向量的距离是余弦距离。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/auto-upload/image-1709389282902.png)

memory 模块：记忆化模块：与多轮对话强相关。使用已有的对话，训练出下一个结果。把下一个结果 message 作为参数（或者处理后的结果），继续询问大模型，就是记忆化模块。类似上下文处理。

```python
from langchain.memory import ConversationBufferMemory

history = ConversationBufferMemory()
history.save_context({'input': 'hello'}, {'output': 'hi'})

# 注意：这里需要传参，是空的字典
print(history.load_memory_viriables({}))

history = ConversationBufferMemory()
history.save_context({'input': 'hi'}, {'output': 'hello'})

# 输出两轮对话
print(history.load_memory_viriables({}))

```

处理特别长的对话，使用另一个方法，增加最大队列长度

```python
from langchain.memory import ConversationBufferWindowMemory

window = ConversationBufferWindowMemory(k=3)

window.save_context({'input': 'hi'}, {'output': 'hi'});
window.save_context({'input': 'hi'}, {'output': 'hi'});
window.save_context({'input': 'hi'}, {'output': 'hi'});
window.save_context({'input': 'hi'}, {'output': 'hi'});
window.save_context({'input': 'hi'}, {'output': 'hi'});

print(window.load_memory_variables({})) #3


# 总结前几轮的对话结果
from langchain.memory import ConversationSummaryMemory
from langchain.llms import OpenAI

memory = ConversationSummaryMemory(
	llm=OpenAI(tempetature=0)
)

memory.save_context(
	{'input': 'hello'},
	{'output': 'hello, I am your AI assistant'}
)

print(memory.load_memory_variables({}))
```

### Fine-tuning 微调

一般人和团队，没有时间和能力去从头训练一个大模型，所以就基于已有大模型进行微调。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/auto-upload/image-1709391223422.png)

```python
from finetune import ModifiedTrainer, data_collator
from transformers import TrainingArguments

training_args = TrainingArguments(
	"output",
	fp16 = True,
	gradient_accumulation_steps = 1,
	seed = 0,
	data_seed = 0,
	group_by_length = False,
)

trainer = ModifiedTrainer(
	model=model,
	train_dataset=dataset,
	args=training_args,
	data_collator=data_collator
)

trainer.train()
```

​


### 大模型概念
大模型 Large-scale Model / Large Model

大模型：LLM 是基于深度学习训练的模型（类似一个函数集）

AI 大模型的价值：已经在艺术创作（文字，图片）获得很多成就，大模型数据集可以出售，也提供了很多新岗位

大模型是指具有大规模、高维度、复杂性强等特点的机器学习模型。随着数据量的增加和计算能力的提升，大模型在自然语言处理、计算机视觉、语音识别等领域得到了广泛应用。大模型的训练需要大量的数据和计算资源，同时也需要对模型进行优化和压缩，以便在实际应用中能够高效地运行。在自然语言处理领域，大模型一般指大规模语言模型。

提示词：Prompt 如何向大模型提问题，或者做出引导，让大模型更好的使用


### 使用说明
集成后文档比较大，加载图片可能服务器返回 503 错误，所以可以点击链接，访问原始网页

<https://cloud.seatable.cn/dtable/external-links/621babd7e22b4ceb88ec/>

​

​


### AI 开发工具使用-前端篇
视频：[https://www.bilibili.com/video/BV1F8L8zuEaE/](https://www.bilibili.com/video/BV1F8L8zuEaE/ "https://www.bilibili.com/video/BV1F8L8zuEaE/")

主要介绍一个外行人员如何借用 AI 工具完成前端编码，只是工具介绍，没有细节介绍

主要工具：

* Cursor 比较贵 Claude 3.7 Sonnet 模型（适合写代码）或者 GPT-4o 模型；

* TRAE 比较便宜 deepseek 模型，GPT-4o 模型；

注意 TRAE 有2个版本，国外版本功能更强大 [www.trae.ai](http://www.trae.ai)&#x20;

​


### AI 开发工具使用-后端篇
在 idea 编辑器中，安装通义灵码插件后进行后端代码实现

[https://www.bilibili.com/video/BV1T5jPz7EyS?vd\_source=2d5bdee7ea59486ed4aa4a9b10020224\&spm\_id\_from=333.788.player.player\_end\_recommend\_autoplay](https://www.bilibili.com/video/BV1T5jPz7EyS?vd_source=2d5bdee7ea59486ed4aa4a9b10020224\&spm_id_from=333.788.player.player_end_recommend_autoplay "https://www.bilibili.com/video/BV1T5jPz7EyS?vd_source=2d5bdee7ea59486ed4aa4a9b10020224\&spm_id_from=333.788.player.player_end_recommend_autoplay")

讲的比较粗糙浮躁，主要是介绍工具能做什么，不涉及细节内容

具体需要选择哪个模型？不同模型之间的差距？

功能：生成代码（sql java）、解释代码、生成测试，如何搭建一个新项目，对陌生项目进行讲解（先整体讲解，然后分模块进行解释，包括方法中的每一行代码）

​


### AI 实战练习
在个人项目中使用

* [x] 1、AI 优化代码，优化工具函数和 Leetcode 代码（重构）

- [x] 2、AI 单元测试，测试 Leetcode 部分，增加测试覆盖率等

* [x] 3、AI 直接完成功能，逐步提示，增加更多上下文（Cursor 可以直接写一个组件或者多个组件）——自己使用这个完成了 AI-chat 小项目的实现


### 前端破局 AI 应用开发落地
AI 场景落地应用：[https://www.bilibili.com/video/BV1Ez421i7G6/?vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1Ez421i7G6/?vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1Ez421i7G6/?vd_source=2d5bdee7ea59486ed4aa4a9b10020224") 1个小时的概况视频（其他的付费）废话很多，就是一个付费课程的公开课（前端架构师+AI 的课程）

#### 1.前端\&AI，前端人借助 AI 错位竞争

AI不仅是解决技术问题，还能解决产品和个人发展问题

#### 2.AI 开发重难点与成本分析

#### 3.前端AI方向导引

#### 4.LLM落地场景介绍——个人开发者

例如 LLM 做 Prompt 工程师，借助个人在某些专业上的能力，创建对应领域的智能体，创建文案写故事，对接下游短视频自动生成，可以进行大量变现操作。

#### 5.LLM落地场景介绍——小型团队

需求分析，用户调研，字节系AI应用场景与引擎编排流程，针对小型团队及初创公司，推荐利用AI进行需求分析、文档优化、会议纪要提炼、客服机器人（RAG模式）、内容生成工具、数据报告可视化等高效工具开发，强调通过整合企业数据与智能体技术提升业务效率，实现低成本、快速落地。

#### 6.LLM落地场景介绍——大型企业

字节系AI场景落地应用与引擎编排流程，通过飞书文档、Imagic AI、猿辅导等案例，展示AI能力与业务深度融合，利用多维表、Canvas技术实现高效数据可视化与性能优化，并构建AI开发平台，集成网关、实时计算等模块，支持5分钟快速部署，显著提升大型企业AI工程化开发效率。

#### 7.LLM落地场景介绍——跨行业

​

​


### 实用工具
本地的 AI 工具

1、POE：这个账户使用谷歌邮箱登录，效果不错 [https://poe.com/chat/3g5krmx7rie573x6t6h](https://poe.com/chat/3g5krmx7rie573x6t6h "https://poe.com/chat/3g5krmx7rie573x6t6h") 需要翻墙，类似豆包

2、ChatGPT for Google 浏览器插件，需要翻墙+会员才可以

3、Monica 浏览器插件，需要翻墙+会员

4、Cursor 编写代码工具

5、豆包

6、deepseek

​

​


### 中国多模态大模型API聚合平台
付费的 GPT API 聚合平台 [https://www.dmxapi.cn/rmb](https://www.dmxapi.cn/rmb "https://www.dmxapi.cn/rmb")

各种模型的代理商

​

​


### 常用 AI 工具
AI 工具：集成了多个模型，内部可以选择多个模型进行任务处理。

​

#### 开发工具

GPT：核心AI工具，支持全部功能，需要付费

Monica：浏览器插件，国外出品，效果不错

Codeium: 编辑器插件，支持代码编写，功能强大很实用，辅助编程，查询资料（阅读代码，代码 review等）

GitHub Copilot：编辑器插件，支持代码编写

CodeGeex：编辑器插件，支持代码编写

#### 通用助手

* 秘塔搜索：[https://metaso.cn/](https://metaso.cn/ "https://metaso.cn/") 搜索质量较好，适合专业学术搜索（上海秘塔网络科技 AI 公司）

* 文心一言：[https://yiyan.baidu.com/](https://yiyan.baidu.com/ "https://yiyan.baidu.com/") 百度出品问答助手，基于国内百家号等，免费版 3.5 质量一般，付费版 4.0没有尝试。由百度开发，使用文心模型。该模型在中文理解和生成方面表现出色，经过大量中文文本数据的训练，能够生成高质量的中文内容，擅长文学创作、数理逻辑推理、多模态内容生成等，例如可以根据用户的描述生成图文结合的内容。

* 橙篇：[https://cp.baidu.com/](https://cp.baidu.com/ "https://cp.baidu.com/") 百度出品写作助手，中文写作没问题

* 豆包：[https://www.doubao.com/chat/coding](https://www.doubao.com/chat/coding "https://www.doubao.com/chat/coding") 字节跳动，支持问答，搜索，AIGC 图像和文本，编程阅读

* 星火大模型：[https://xinghuo.xfyun.cn/desk](https://xinghuo.xfyun.cn/desk "https://xinghuo.xfyun.cn/desk") 科大讯飞开发，在语音识别与合成、跨平台应用方面表现突出。其模型经过大量语音数据和文本数据的训练，在教育场景中，如生成PPT、医疗健康数据分析、实时语音转文字等方面有较好的应用。界面类似豆包。目前生成图片也不太完美。问答搜索还可以。

* 智谱清言：[https://chatglm.cn/main/alltoolsdetail?lang=zh](https://chatglm.cn/main/alltoolsdetail?lang=zh "https://chatglm.cn/main/alltoolsdetail?lang=zh") 由清华大学开发，使用智谱模型。它在中英双语对话、长文本处理方面能力较强，支持20万字输入，擅长学术翻译、法律分析、API文档解析等，还可进行个性化助手定制。文字和学术搜索没有问题，但是绘图还是不完美。

* 通义千问：[https://bailian.console.aliyun.com/#/home](https://bailian.console.aliyun.com/#/home "https://bailian.console.aliyun.com/#/home") 阿里云自主研发的大模型，基于Qwen系列模型，如Qwen2.5、Qwen - Max等。通义千问具备强大的语言及多模态数据处理能力，可用于文字创作、翻译服务、对话模拟等多种场景。

* 天工AI：[https://www.tiangong.cn/chat/universal/016](https://www.tiangong.cn/chat/universal/016 "https://www.tiangong.cn/chat/universal/016") 能进行全网搜索、代码编程、虚拟社交等。在创意写作方面，如诗歌、故事创作，以及AI绘画与音乐生成、多模态内容整合等领域有一定的能力，具体使用的模型由其开发团队进行训练和优化。——目前在升级中？？？可能未来不能用

#### DeepSeek

* 基本信息：DeepSeek APP是杭州深度求索人工智能基础技术研究有限公司于2025年1月10日推出的AI助手。用户安装后可免费体验与DeepSeek - V3模型互动交流。它支持中国大陆手机号码、微信与Apple ID（仅限iOS）一键登录，同一账号内历史对话记录与网页端同步。

* 技术优势：核心技术优势包括自然语言处理（NLP）、机器学习与深度学习、大数据分析、个性化推荐、智能交互、跨平台整合以及安全性与隐私保护。

* 主要功能：具备强大的逻辑推理和问题解决能力，能处理复杂的查询和任务；可进行高质量的文本分析、翻译、摘要生成等任务；在图像识别、视频内容分析等领域具有高精度；能准确识别和合成语音，支持多语言和方言；可根据用户行为和偏好，提供个性化内容推荐；能高效处理和分析大规模数据，挖掘数据中的模式和趋势；支持文本、图像、语音等多种模态的数据融合和学习；智能助手和聊天机器人可实现实时的自然语言交互，快速响应用户需求，还支持深度思考和搜索同时进行。

#### 豆包

* 基本信息：是字节跳动公司基于云雀模型开发的AI智能体。2023年8月17日，公测版本上架，有网页端、iOS和安卓客户端。2024年5月15日，字节跳动宣布豆包大模型正式开启对外服务。

* 模型构成：豆包大模型包括豆包通用模型pro、豆包通用模型lite、豆包·角色扮演模型、豆包·语音识别模型、豆包·语音合成模型、豆包·声音复刻模型、豆包·文生图模型、豆包·Function Call模型、豆包·向量化模型。

* 主要功能：能回答各种问题并进行对话，帮助用户获取信息。其功能丰富，涵盖智能对话，支持多轮对话，包括生活咨询、知识问答、情感交流等；可进行文本生成，撰写文章、邮件、脚本、诗歌等，并支持风格定制；具备多语言处理能力，可进行中英文互译、多语种基础对话；还能提供代码辅助，生成代码片段、调试建议、技术文档解释等。在办公场景中可用于会议纪要生成、PPT大纲设计、Excel公式编写等；学习方面能进行解题思路分析、知识点总结、论文润色等；创意创作上可实现故事续写、营销文案、短视频脚本策划等，还能根据用户历史交互进行个性化内容推荐。此外，支持图像理解，可上传图片进行描述、内容提取；部分版本支持语音交互，支持语音输入与合成朗读。

#### 图像与设计工具

* 通义万相：[https://tongyi.aliyun.com/wanxiang/creation](https://tongyi.aliyun.com/wanxiang/creation "https://tongyi.aliyun.com/wanxiang/creation") 基于阿里的通义模型开发，是一款文生图、风格化图像生成工具，擅长电商产品图设计、艺术风格迁移，如将图片转换为国风、二次元等风格。这个需要点数（花钱）。目前测试绘制图片，结果不一定正确。测试生成瓦蕾莎图片错误。

* Nolibox画宇宙：[https://creator.nolipix.com/](https://creator.nolipix.com/ "https://creator.nolipix.com/") 主要用于艺术创作辅助，通过其背后的AI模型生成抽象画，激发设计元素灵感。看 SaaS 页面应该是 VUE 做的。主要可以选择不同画家的绘制风格（例如毕加索，张大千）测试生成瓦蕾莎图片错误。

* 佐糖：[https://picwish.cn/](https://picwish.cn/ "https://picwish.cn/") 专注于图像修复与增强，利用相关模型实现老照片修复、低分辨率图片无损放大等功能。类似PS 抠图和修复的功能，创作功能不多。

#### 办公与效率工具

* Boardmix博思AI白板：[https://boardmix.cn/](https://boardmix.cn/ "https://boardmix.cn/") 可实现智能PPT生成、思维导图绘制等功能，通过其内置的AI模型对输入的文本内容进行分析和处理，自动生成结构化的会议纪要、流程图等。——就是一个白板绘图工具，可以使用AI进行优化

* 秘塔写作猫：[https://xiezuocat.com/?](https://xiezuocat.com/? "https://xiezuocat.com/?") 主要用于文本校对、多语言翻译，其模型在学术论文润色、自媒体文案优化方面有较好的表现，能够识别和纠正文本中的语法错误、拼写错误，并对文本的语言表达进行优化。这个是秘塔搜索出的另一个工具。实际测试用户需要排队。

#### 垂直领域工具

* 同花顺问财：[https://www.iwencai.com/unifiedwap/home/index](https://www.iwencai.com/unifiedwap/home/index "https://www.iwencai.com/unifiedwap/home/index") 是金融数据分析工具，利用相关AI模型对金融市场数据进行分析和预测，能够提取财报关键指标，对股票趋势进行预测等。

* 帆软数据：[https://help.fanruan.com/finebi/doc-view-1206.html](https://help.fanruan.com/finebi/doc-view-1206.html "https://help.fanruan.com/finebi/doc-view-1206.html") 面向企业级的BI分析工具，通过AI模型对企业的销售数据、供应链数据等进行分析和可视化处理，帮助企业进行决策和优化。主要是企业分析经营报告等。

* 讯飞听见：[https://www.iflyrec.com/](https://www.iflyrec.com/ "https://www.iflyrec.com/") SaaS 平台，专注于语音转文字，其模型基于科大讯飞的语音识别技术，能够实时转录会议记录，支持多方言识别（支持视频音频提取文字等，主要是音视频分析）。


### 不同大模型的区别
通常是一个公司或者组织，发布很多 AI 模型，适应于不同场景（通用AI，代码编辑，图片制作，逻辑推理等场景）。

一个 AI 工具，会选择使用的模型，例如 github copilot 可以选择下面的模型。

<img src="https://cloud.seatable.cn/workspace/32/asset/e82c7317-556e-45c4-8b5d-092331cd8977/images/2025-05/image-1747288380593.jpg" alt="" title="" width="303" height="446" />

下面是主要的模型对比（Claude 3.5 Sonnet、Gemini 2.0 Flash、GPT 4o、o3-mini 等）大模型的对比

#### 开发公司

* Claude 3.5 Sonnet：由Anthropic公司开发。

* Gemini 2.0 Flash：是美国谷歌公司发布的人工智能大模型。

* GPT 4o：由OpenAI开发。

* o3-mini：属于OpenAI，微软Copilot的“深度思考”功能曾采用o3-mini-high模型。

* 文心一言4.0：是百度公司推出的知识增强大语言模型。

* 通义千问：由阿里云开发，所属公司为阿里巴巴集团。

* 讯飞星火4.0turbo：由科大讯飞公司推出。

* 智谱GLM-Zero：由智谱AI（北京智谱华章科技有限公司）开发。

性能对比和使用情况

| 模型名称              | 性能差异                                                          | 适用情况                                   |
| ----------------- | ------------------------------------------------------------- | -------------------------------------- |
| Claude 3.5 Sonnet | 在多模态方面有不错表现，尤其视觉相关能力较强，研究生水平推理、本科生知识水平等基准测试中多领域表现良好，数学稍弱于部分对手 | 适用于企业复杂任务编排、内容创作，以及零售、物流等领域视觉相关场景      |
| Gemini 2.0 Flash  | 整体性能处于较前列水平，多模态能力使其能应对文本与简单图像等多类型信息处理，在一些困难任务上能达到较强水平         | 通用自然语言处理场景、多模态创作场景，如辅助图文创作等            |
| GPT 4o            | 多模态综合能力出色，能处理多种类型输入，在很多基准测试中速度快，整体智能水平高，数学等方面也有优势             | 教育领域个性化学习、客户服务、多媒体创作、实时交互要求高的场景，如实时翻译等 |
| o3-mini           | 支持函数调用等功能，编码评估性能提升明显，在数学能力测试有较好表现，可按需选择推理强度                   | 编程开发、对推理速度有要求且规模成本受限场景、特定领域简单应用构建      |
| 文心一言4.0           | 中文推理、语言理解能力突出，在数学能力上表现优秀，安全性把控较好                              | 广告营销、内容创作、智能客服等领域，尤其处理中文文化相关内容更具优势     |
| 通义千问              | 语言流畅度佳，在办公文档处理、多语言支持、图片理解等方面有优势                               | 电商、客户服务、企业数字化办公场景，辅助办公文案撰写等            |
| 讯飞星火4.0 turbo     | 多模态交互出色，七大核心能力超GPT-4 turbo，数学和代码能力也超越部分对手，有超拟人的数字人交互          | 教育、医疗、司法、政务等多领域应用，如智能教师、医学影像助手等        |
| 智谱GLM-Zero        | 擅长数理逻辑、代码及深度复杂推理任务，部分评测效果与较强竞品相当                              | 科研、学术研究领域，助力解决复杂数理逻辑及深度推理工作            |

## OpenAI 多个模型

### GPT系列

* GPT-4：2023年3月推出，在文本生成、对话、推理等方面能力很强，是当时的先进模型代表，为后续模型发展奠定基础。但上下文长度和价格方面相对劣势，其能力被后续的GPT-4 Turbo等模型优化和超越，现在OpenAI已将GPT-4 Turbo作为GPT-4的默认实现，原版GPT-4很少单独开放。

* GPT-4 Turbo：是GPT-4的优化版，智能水平非常高，是市面上最强的通用大模型之一。支持图像输入，具备极强的推理、代码生成、多轮对话和图像理解能力，还能调用工具和函数。上下文长度达128K，适合大型文档处理。适用于高智能要求的Agent系统、复杂内容生成、精准代码生成与解释、图文混合分析等场景，推荐给高级开发者、企业用户、产品经理等对质量要求高的人群。

* GPT-3.5 Turbo：是最具性价比的模型，智能水平中等偏上，接近GPT-4早期版。在处理通用对话、基础代码生成、轻量文本任务上表现优秀，成本低，适合大批量调用场景，如客服机器人、智能问答等。上下文长度为16K，能满足大部分应用，适用于轻量级写作、多轮对话的原型测试等，推荐给预算有限的中小型项目团队、训练AI Chatbot的初期探索者。

* GPT-4o：2024年5月推出，“o”代表“omni”即全能，是多模态大模型，可处理50种不同语言，接受文本、音频和图像组合输入，生成文本、音频和图像任意组合输出，在多语言、音频和视觉功能方面表现出色，处理速度比GPT-4提升200%。

* GPT-4o-mini：2024年7月推出，具备文本、图像、音频、视频的多模态推理能力，性能比GPT-4好，取代了GPT-3.5，在处理一些对成本敏感且需要多模态推理的任务中具有优势。

### o系列

* o1-preview：2024年9月12日推出，相对模型规模较大，运算能力强，适合处理科学研究、深度分析和学术论文写作等需要复杂推理的任务。不过运行速度较慢，尤其是面对深层次推理问题时耗时较长，但在高精度需求场景下，能给出精准、逻辑严密的回答。

* o1 - mini：2024年9月12日推出，是o1 - preview的“精简版”，体积小、速度快，适合日常使用和资源受限的任务，如编程、快速文本生成等，在一般性论证和简易分析中表现良好。

* o1：2024年12月5日推出，相比o1 - preview更智能、更快速，思维更简洁，犯错次数约减少三分之一，思考速度提高约50%，在编码、数学和科学写作等方面表现更出色，还支持图像输入等多模态功能。

* o1 - pro：2024年12月5日推出，在数据科学、编程和案例分析等领域能产生更可靠、准确和全面的回应，在数学、科学和编码等领域的挑战性机器学习基准测试中表现优于o1和o1 - preview，具有更强的复杂问题处理能力。

* o3 - mini：2025年1月31日推出，作为o1的后继模型，目前只有这一个版本，继承了o系列擅长复杂推理的特点，在处理数学、物理、化学等复杂问题上有更出色表现。

### 其他类型的模型

* Codex：2021年推出，旨在理解和生成多种编程语言的代码，GitHub Copilot就是由它驱动，能完成自动编程任务、解释编码问题以及自动为用户执行程序等。

* DALL - E：2021年推出的图像生成模型，可根据文本描述生成图像，经过多个版本的发展，如DALL - E 2、DALL - E 3等，图像生成能力不断提升，能生成更复杂、更准确、分辨率更高的图像。

* CLIP：2021年推出，即对比语言 - 图像预训练模型，是一种深度神经网络，在4亿个图像 - 文本对上进行训练，能够执行图像分类、对象检测和从图像生成文本描述等任务，可用于连接图像和文本理解，例如在反向图像搜索中发挥作用。

* Whisper：2022年推出的先进自动语音识别和翻译系统，在68万小时的音频样本及其转录数据上进行训练，能够在不同语言、环境和方言下进行语音转录，在困难环境中也有良好表现。

* Sora：OpenAI近期公布的文本到视频模型，能够将文本提示转换为具有多个对象和角色的逼真视频，但目前还在开发中，在复杂场景的物理效果和空间连续性理解上还存在困难。

## Google AI 多个模型

### Gemini系列

* Gemini Ultra：是Google旗下最大、最强大的模型，用于处理非常复杂的任务。在32项学术和多模态基准测试中，有30项表现出色，是第一个在大规模多任务语言理解测试中超越人类专家的模型。能处理自然图像、音频和视频，在数学推理、编码等方面能力突出，在HumanEval上获得74.4%的得分，在Natural2Code上获得74.9%的分数，优于GPT - 4。主要面向企业和数据中心应用。

* Gemini Pro：是一款中端型号，通用能力强，能在性能和效率之间取得较好平衡，可用于处理多种类型的任务，包括一些较为复杂的任务，如为Bard提供支持。在大规模多任务语言理解测试中的表现优于PaLM 2和GPT - 3.5。

* Gemini Nano：是适合执行设备端任务的高效模型，有1.8亿参数的Nano - 1和3.25亿参数的Nano - 2两个版本。它可以在移动设备等本地设备上运行，无需网络连接，对硬件要求低。在总结、阅读理解、文本补全等任务上表现良好，在推理、STEM、编码、多模态和多语言任务方面也展现出一定能力。

* Gemini 1.5 - Pro - 002：在数学基准测试中表现出色，能够解决需要深度专业知识的高级数学问题，达到了最先进的水平。

* Gemini 1.5 - Flash - 002：在遵循指令方面有很大进步，在速度和效率方面经过专门优化，对于大多数常见任务，能以更低的成本实现与更大模型相媲美的质量。

### PaLM 2

这是一款先进的语言模型，具备更强的多语言、推理和编码能力。在逻辑、常识推理和数学方面有较好表现，语言理解、生成和翻译能力强，能处理习语、诗歌和谜语等复杂文本，还精通多种编程语言，可生成专用代码。不过，与Gemini系列相比，它不是多模态模型，在多模态处理能力上有所欠缺。

## Anthropic AI 多个模型

Anthropic AI的Claude 3系列包含Claude 3 Haiku、Claude 3 Sonnet和Claude 3 Opus三个模型

#### Claude 3 Opus

是最强大的模型，智能水平最高，擅长处理高度复杂的任务，在各种基准测试中表现出色，如在研究生水平的推理测试中得分高达50.4%，而GPT - 4仅为35.7%。它能够以流畅和理解的程度处理开放式提示和未探索的场景，适用于复杂的任务自动化、研发和战略分析等领域。

支持200k tokens上下文窗口，可根据要求为特定用例提供1M tokens功能，能够处理大量信息，对于需要深入了解长时间对话或文档的复杂任务特别有用。

每百万输入代币15美元，每百万个输出代币75美元，是三个模型中最昂贵的。

适用于对智能水平要求极高、处理复杂任务的场景，如科研机构进行深度研究、大型企业进行战略分析等。

#### Claude 3 Sonnet

在速度和智能之间取得了平衡，专为广泛的AI操作而设计，能够快速处理信息，处理速度是Claude 2的两倍，适用于数据处理、销售增强和省时任务等场景，为扩展提供了经济高效的解决方案。

每百万个输入代币3美元，每百万个输出代币15美元，成本相对适中。

适用于企业环境中对速度和智能有一定要求的场景，如电商企业处理大量客户数据、金融机构进行风险评估等。

#### Claude 3 Haiku

是最快的模型，能够在不到三秒的时间内阅读并理解包含图表和图形的密集研究论文，以无与伦比的速度处理简单的查询和请求，非常适合客户交互、内容审核和节省成本的运营等场景。

每百万输入代币0.25美元，每百万个输出代币1.25美元，是最具成本效益的模型。

适用于对成本敏感且需要快速响应的场景，如小型企业的客户服务聊天机器人、内容平台的实时审核等。

## DeepSeek AI 模型对比

### DeepSeek-Coder

* 特点：是DeepSeek公司2023年11月2日推出的代码大模型，面向开发人员，可生成、完成和调试代码，已开源1B、7B、33B全系列模型，包含Base模型和指令调优模型。在国际权威数据集HumanEval编程多语言测试上，各语言表现均领先已有开源模型，70亿参数版本在代码能力上达到CodeLlama 340亿参数水平，指令调优后全面超越GPT3.5 - Turbo。除代码能力外，还展现出极强的数学和推理能力。

* 优势：采用Transformer架构和编码器 - 解码器框架，能有效处理序列数据，捕捉长距离依赖关系，支持多任务学习，具有更高的准确性、更强的泛化能力和更快的训练速度。

* 应用场景：主要用于软件开发中的快速原型开发和自动化测试等领域，帮助开发者提高开发效率。

* DeepSeek - Coder专注于代码相关任务；

### DeepSeek - V3

* 特点：2024年末发布，是混合专家（MoE）架构的模型，有6710亿参数，激活370亿参数，预训练于14.8万亿Token。采用预训练 + 监督微调（SFT）+ 少量强化学习（RL）的训练方法，通过FP8混合精度训练、无辅助损失负载均衡等技术实现高效训练与推理。引入多令牌预测（MTP）功能，可同时预测多个令牌，加速推理。

* 优势：在大规模自然语言处理任务上效率高，成本效益好，在CMath测试中得分90.7%，在中文基准测试如CLUE WSC和C - EVAL中表现出色。

* 应用场景：适用于处理大规模自然语言处理任务，如文本生成、语言理解等一般性的语言相关任务。

* DeepSeek - V3在大规模语言处理任务上注重效率和泛化能力；

### DeepSeek - R1

* 特点：2025年1月发布，基于V3模型，采用监督微调（SFT）+ 多阶段强化学习（RL）+ 混合数据微调的训练方法，通过大规模强化学习和冷启动技术提升推理能力。有从1.5B到671B不同参数规模的版本，如R1 - Distill - Qwen - 32B等蒸馏版本，可提供相近结果但参数更少，更适用于小规模应用。

* 优势：在逻辑推理、数学推理和实时问题解决方面表现出色，在AIME 2024数学测试中成绩为79.8%，在Codeforces Elo测试中达到2029，超过DeepSeek - V3和OpenAI的O1 - mini等。

* 应用场景：适合需要深度逻辑分析的任务，如数学问题解决、代码辅助、科学研究等。

* DeepSeek - R1则在推理方面有突出表现，尤其是逻辑和数学推理。

​

### 海外版

* Claude：由Anthropic公司开发，主要使用Claude 3.5 Sonnet、Claude 3 Opus等模型，2025年2月19日又推出Claude 3.7 Sonnet（Thinking）版本。该工具机器味儿不明显，中文写作能力出色，有处理代码、图像、文档的工作台等功能。

* ChatGPT：OpenAI开发的语言模型，擅长推理的o1 - preview新模型表现出色，主力模型GPT - 4o在各大模型评测榜单中表现优异。ChatGPT综合能力强大，任务理解能力强，电脑和移动端app使用方便，还具备Canvas画布编辑等功能。

* Gemini：谷歌推出的AI模型，有多个版本，如Gemini 1.5 Pro可在aistudio中免费使用，擅长处理长文本和复杂任务；Gemini 1.5 Flash是面向个人用户官网的版本。2024年12月推出了Gemini - Exp - 1206、2.0 Flash及Thinking推理版本等，在中文理解、长文本处理、音视频多模态处理方面能力一流。

* Grok：Elon Musk旗下xAI公司推出的AI模型，Grok3在逻辑推理、信息检索和快速研究等方面表现出色，支持推理和深度研究功能，在信息检索和研究场景中优势明显。

### 国产版

* Qwen Chat：由阿里于2025年1月10日上线，支持全系列Qwen模型，包括Qwen - Max、Qwen2.5 - Plus、QwQ和QVQ等各模态模型。Qwen - Max语言能力在国内领先，2025年2月推出的QwQ - 32b推理模型在2025年3月登顶LiveBench。该平台涵盖日常对话、联网搜索、图像理解与生成、视频生成、逻辑推理及编程生成等功能。

* kimi Chat：长文本上下文能力国内一流，适合办公族、文字工作者和研究者。2025年1月20日发布的K1.5多模态思考模型，性能对标OpenAI o1满血版，可解决复杂数学问题、编程调试、多模态数据分析等深度推理任务，产品界面简约，有聊天框常用语、Kimi +智能体等实用功能。


### 集群智能
集群智能（Swarm Intelligence）

在某群体中，若存在众多无智能的个体，它们通过相互之间的简单合作，所表现出来的智能行为。

(1) 控制是分布式的，不存在中心控制。因而它更能够适应当前网络环境下的工作状态，并且具有较强的鲁棒性， 即不会由于某一个或几个个体出现故障，而影响集群对整个问题的求解。

(2) 集群中的每个个体都能够改变环境，这是个体之间间接通信的一种方式，这种方式被称为激发工作。由于集群智能可以通过非直接通信的方进行信息的传输与合作，因而随着个体数目的增加，通信开销的增幅较小， 因此，它具有较好的可扩充性。

(3) 集群中每个个体的能力或遵循的行为规则非常简单， 因而集群智能的实现比较方便，具有简单性的特点。

(4) 集群表现出来的复杂行为，是通过简单个体的交互过程突现出来的智能(Emergent Intelligence) ， 因此，集群具有自组织性。群集智能可以在适当的进化机制引导下，通过个体交互以某种突现形式发挥作用。这是个体以及可能的个体智能难以做到的。

集群智能主要有两种算法模式，分别是蚁群算法(Ant Colony System, 简称ACS) 和粒子群优化算法( Particle Swarm Optimization, 简称PSO) 。


### 禁忌搜索算法
[https://baike.baidu.com/item/%E7%A6%81%E5%BF%8C%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95/6436980](https://baike.baidu.com/item/%E7%A6%81%E5%BF%8C%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95/6436980 "https://baike.baidu.com/item/%E7%A6%81%E5%BF%8C%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95/6436980")

避免了贪心算法造成了局部最优解

禁忌（Tabu Search）算法是一种元启发式(meta-heuristic)随机搜索算法，它从一个初始可行解出发，选择一系列的特定搜索方向（移动）作为试探，选择实现让特定的目标函数值变化最多的移动。

为了避免陷入局部最优解，TS搜索中采用了一种灵活的“记忆”技术，对已经进行的优化过程进行记录和选择，指导下一步的搜索方向，这就是Tabu表的建立。


### 粒子群优化算法
[https://baike.baidu.com/item/%E7%B2%92%E5%AD%90%E7%BE%A4%E4%BC%98%E5%8C%96/1352052](https://baike.baidu.com/item/%E7%B2%92%E5%AD%90%E7%BE%A4%E4%BC%98%E5%8C%96/1352052 "https://baike.baidu.com/item/%E7%B2%92%E5%AD%90%E7%BE%A4%E4%BC%98%E5%8C%96/1352052")

粒子群优化（Particle Swarm Optimization,PSO），又称微粒群算法

PSO算法最初是为了图形化的模拟鸟群优美而不可预测的运动。而通过对动物社会行为的观察，发现在群体中对信息的社会共享提供一个演化的优势，并以此作为开发算法的基础。


### 模拟退火算法
[https://baike.baidu.com/item/%E6%A8%A1%E6%8B%9F%E9%80%80%E7%81%AB%E7%AE%97%E6%B3%95/355508](https://baike.baidu.com/item/%E6%A8%A1%E6%8B%9F%E9%80%80%E7%81%AB%E7%AE%97%E6%B3%95/355508 "https://baike.baidu.com/item/%E6%A8%A1%E6%8B%9F%E9%80%80%E7%81%AB%E7%AE%97%E6%B3%95/355508")

模拟退火算法来源于固体退火原理，是一种基于概率的算法，将固体加温至充分高，再让其徐徐冷却，加温时，固体内部粒子随温升变为无序状，内能增大，而徐徐冷却时粒子渐趋有序，在每个温度都达到平衡态，最后在常温时达到基态，内能减为最小。

```javascript
// 设定目前状态为s0，其能量E(s0)
s:=s0;
e:=E(s)

//评估次数k
k:=0

//若还有时间（评估次数k还不到kmax）且结果还不够好（能量e不够低）则：
while k<kmax and e>emax
    sn:=neighbour(s)//随机选取一临近状态sn
    en:=E(sn)//sn的能量为E(sn)
    if random()<P(e,en,temp(k/kmax)) then//决定是否移至临近状态sn
    //移至临近状态sn
    s:=sn;
    e:=en
    //评估完成，次数k加一
    k:=k+1
returns//回转状态s
```

​

​


### 向量空间模型
[https://baike.baidu.com/item/%E5%90%91%E9%87%8F%E7%A9%BA%E9%97%B4%E6%A8%A1%E5%9E%8B/4436202](https://baike.baidu.com/item/%E5%90%91%E9%87%8F%E7%A9%BA%E9%97%B4%E6%A8%A1%E5%9E%8B/4436202 "https://baike.baidu.com/item/%E5%90%91%E9%87%8F%E7%A9%BA%E9%97%B4%E6%A8%A1%E5%9E%8B/4436202")

文本检索系统，向量空间模型 （或词组向量模型) 是一个应用于信息过滤，信息撷取，索引 以及评估相关性的代数模型

VSM概念简单，把对文本内容的处理简化为向量空间中的向量运算，并且它以空间上的相似度表达语义的相似度，直观易懂。当文档被表示为文档空间的向量，就可以通过计算向量之间的相似性来度量文档间的相似性。文本处理中最常用的相似性度量方式是余弦距离。就是文本的提取主成分，进一步推荐的算法。

​


### 项目中的 AI 应用
项目使用

项目背景：我们的项目是：智能化表格管理、智能化文件管理，用来管理大量的表格和文件。

项目中 AI 主要是后端实现具体逻辑和算法（包括调用外部大模型），前端目前在 AI 技术上进行集成。

##### 1、AI 助手，赋能传统数据

早期逻辑是：用户需要直接操作表格，输入内容，点击按钮，或者进行复杂操作，统计数据，费时费力。

现在我们增加了 AI 助手，根据用户的自然语言描述，使用开源大模型，然后转换成对应的代码，执行对应的 API 或者功能（统计某人本周的任务，统计表格整体的信息，以统计图形式展现出来），大批量处理表格的数据，实现了传统软件赋能。

技术细节：用户自然语言输入，通过自然语言分析，调用大模型，根据大模型的返回值，调用对应的 API

##### 2、AI 搜索，增强搜索能力

早期：elasticSearch 需要建立索引，Java 内核比较重

现在：在 Go zincsearch 基础上改动，需要的资源更少 [https://github.com/zincsearch/zincsearch](https://github.com/zincsearch/zincsearch "https://github.com/zincsearch/zincsearch")

技术细节：前端调用实现 AI API，文本的分词和分析等，然后计算不同文档的匹配度。

##### 3、AI 识别，智能管理图片

早期：只能上传照片（网盘）

现在：上传图片并进行分析，然后增加元数据，以表格等多种视图管理图片信息

技术细节：识别发票图片，然后进行填写，避免用户手动录入数据。我们内部的技术实现调用了图片识别接口（还有其他身份证，驾照，发票识别等等）。市场上有一些开源的工具，例如前端的 tesseract 可以进行识别，但是准确率不是很高，所以我们基于开源的数据进行了改进。


### 训练 LLM 大模型
需求: 我的某些需求，公开的模型不能免费完成，或者政策法律限制不能完成，需要训练自己的模型

#### 思路1

调用公开的 LLM 接口，给出一定关键词，然后完成润色，然后对接到文档项目中。

局限

* 国内公开的 LLM 接口可能存在限制，根据相关法律，不能满足需求

* 国外公开的大模型，存在登录问题。

#### 思路2

自己训练模型，然后把已有语料喂给模型，然后设置边界值等，这样自由度更高。

局限：

* 个人技术有限，还不熟悉具体的细节；

* 硬件条件有限，训练大模型性能有困难；

* 已有语料欠缺，可能训练后的效果不及预期（类似线性回归方程，样本量较小精度有偏差）。

未来有机会可以尝试


### 遗传算法
[https://baike.baidu.com/item/%E9%81%97%E4%BC%A0%E7%AE%97%E6%B3%95/838140](https://baike.baidu.com/item/%E9%81%97%E4%BC%A0%E7%AE%97%E6%B3%95/838140 "https://baike.baidu.com/item/%E9%81%97%E4%BC%A0%E7%AE%97%E6%B3%95/838140")

一、遗传算法概述

遗传算法（Genetic Algorithm, GA）是一种模拟生物在自然环境中的遗传和进化过程而形成的自适应全局优化搜索算法。由美国计算机科学家John H. Holland提出，并借鉴了达尔文的进化论和孟德尔的遗传学说。遗传算法通过模拟自然界的自然选择、遗传和变异等机制，对问题的解进行迭代更新，从而搜索最优解或近似最优解。

遗传算法的基本思想是将问题的解表示为“染色体”，在算法中通常采用二进制编码或其他编码方式来表示，然后通过选择、交叉（杂交）和变异等操作，模拟生物的进化过程。在每一代中，根据个体在问题域中的适应度值（由适应度函数计算得出）和从自然遗传学中借鉴来的再造方法进行个体选择，产生一个新的近似解。这个过程导致种群中个体的进化，得到的新个体比原个体更能适应环境，最终逼近最优解。

​

二、遗传算法的基本原理包括

适者生存：适应度高的个体更有可能被选择为下一代个体的基础。

优胜劣汰：通过选择操作，适应度低的个体被淘汰，而适应度高的个体则被保留并有机会繁殖后代。

交叉变异：交叉操作是指将两个个体的某些基因进行随机交换，从而产生新的个体；变异操作则是指将个体中的某些基因进行随机改变，以增加种群的多样性。

选择操作：从当前种群中选择一部分个体作为下一代种群的基础。选择操作通常采用轮盘赌选择等方法，使适应度高的个体有更大的概率被选中。

​

三、遗传算法在人工智能中的应用

遗传算法在人工智能领域具有广泛的应用，主要体现在以下几个方面：

优化问题：遗传算法是一种有效的全局优化方法，可以用于求解诸如函数优化、神经网络训练、控制系统优化等非线性、多峰函数优化和多目标优化问题。

机器学习：在机器学习领域，遗传算法被用于分类、回归、聚类等任务。通过模拟生物进化过程中的自然选择、遗传和变异等机制，遗传算法能够在训练数据中发现潜在的规律和特征，提高模型的预测性能。

模式识别：在模式识别领域，遗传算法也有广泛应用，如手写数字识别、图像识别和语音识别等。通过将模式识别问题转化为优化问题，遗传算法可以在搜索空间中找到最优解，提高识别的准确性。

人工生命：遗传算法在人工生命领域中的应用包括模拟生物进化、遗传变异和自然选择等过程，以及研究生物系统的自适应和自组织特性。

组合优化：遗传算法中的遗传编码技术可以用于解决计算机科学中的组合优化问题，如旅行商问题（TSP）、作业调度等。通过将问题转化为遗传编码的形式，遗传算法可以在较短的时间内找到最优解或近似最优解。

并行处理：遗传算法具有较好的并行性能，可以充分利用现代计算机的多核处理器和图形处理器等硬件资源，实现高效的并行计算。

​

案例

遗传算法是一种模拟自然选择和自然遗传学过程的搜索和优化技术。

以下是一个简单的遗传算法实现的例子，用于求解一个简单的函数最大值问题：

```javascript
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
 
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
function fitnessFunction(dna) {
  // 一个简单的目标函数，例如求和
  return dna.reduce((a, b) => a + b, 0);
}
 
function selection(population, fitnessScores) {
  // 选择算法，这里使用比例选择
  let selected = [];
  let sumFitness = fitnessScores.reduce((a, b) => a + b, 0);
  let cumulativeFitness = fitnessScores.reduce((a, b) => {
    return a + (b / sumFitness);
  }, 0);
  for (let i = 0; i < population.length; i++) {
    if (Math.random() < cumulativeFitness) {
      selected.push(population[i]);
    }
  }
  return selected;
}
 
function crossover(parentA, parentB) {
  // 交叉算法，这里使用单点交叉
  let crossoverPoint = randomInt(0, parentA.length - 1);
  return [
    parentA.slice(0, crossoverPoint) + parentB.slice(crossoverPoint),
    parentB.slice(0, crossoverPoint) + parentA.slice(crossoverPoint)
  ];
}
 
function mutation(dna) {
  // 变异算法，简单地随机替换基因
  let dnaCopy = dna.slice();
  let mutationRate = 0.01;
  for (let i = 0; i < dnaCopy.length; i++) {
    if (Math.random() < mutationRate) {
      dnaCopy[i] = randomInt(-100, 100);
    }
  }
  return dnaCopy;
}
 
function generatePopulation(populationSize, dnaLength) {
  let population = [];
  for (let i = 0; i < populationSize; i++) {
    population.push(Array.from({length: dnaLength}, () => randomInt(-100, 100)));
  }
  return population;
}
 
function getFitnessScores(population) {
  return population.map(fitnessFunction);
}
 
function getBestDNA(population, fitnessScores) {
  let bestFitness = Math.max(...fitnessScores);
  return population[fitnessScores.indexOf(bestFitness)];
}
 
function runGA(populationSize, dnaLength, generationCount) {
  let population = generatePopulation(populationSize, dnaLength);
  let fitnessScores;
  for (let i = 0; i < generationCount; i++) {
    fitnessScores = getFitnessScores(population);
    let newPopulation = [];
    while (newPopulation.length < populationSize) {
      let parentA = selection(population, fitnessScores)[0];
      let parentB = selection(population, fitnessScores)[0];
      let children = crossover(parentA, parentB);
      newPopulation.push(mutation(children[0]), mutation(children[1]));
    }
    population = newPopulation;
  }
  return getBestDNA(population, fitnessScores);
}
 
let bestDNA = runGA(100, 100, 1000); // 100个个体，每个个体100个基因，迭代
```

​


### Data Warehouse 数据仓库
数据仓库（Data Warehouse）是一种用于存储和管理数据的系统，旨在支持商业智能（Business Intelligence）和数据分析。它是一个中央存储库，收集来自各种来源的数据，经过清理、转换和整合后，提供给用户进行查询、分析和报告。

​

数据仓库的主要特点包括：

\*   集中存储：数据仓库将来自不同来源的数据集中存储在一个地方。

\*   数据整合：数据仓库将来自不同来源的数据进行整合和清理，以确保数据的一致性和准确性。

\*   数据转换：数据仓库将数据转换为适合分析和报告的格式。

\*   支持商业智能：数据仓库提供了支持商业智能和数据分析的功能，例如数据挖掘、预测分析和数据可视化。

​

数据仓库的常见应用场景包括：

\*   商业智能和数据分析

\*   报表和数据可视化

\*   预测分析和数据挖掘

\*   客户关系管理（CRM）

\*   供应链管理（SCM）

​

数据仓库的好处包括：

\*   提高数据的一致性和准确性

\*   支持商业智能和数据分析

\*   提高决策效率和准确性

\*   降低数据管理成本

​

总之，数据仓库是一种用于存储和管理数据的系统，旨在支持商业智能和数据分析。


### LLM 基本概念
本文介绍了 LLM 的基本概念，通俗易懂

英文原文链接：[https://towardsdatascience.com/understanding-llms-from-scratch-using-middle-school-math-e602d27ec876](https://towardsdatascience.com/understanding-llms-from-scratch-using-middle-school-math-e602d27ec876 "https://towardsdatascience.com/understanding-llms-from-scratch-using-middle-school-math-e602d27ec876")

如何通过简单的加法和乘法来分类对象（如叶子或花朵）并解释了下述的概念——

* 输入数据：叶子和花朵的RGB颜色和体积。

* 神经元、权重和层：节点对应神经元、连接线上的数值即为权重，图中可以清晰看到网络的层结构（输入层、中间层、输出层）。

* 输出解释：使用两个输出神经元分别表示“叶子”和“花朵”，通过比较输出值的大小来进行分类，分类结果。

​

模型的训练方式：

* 训练目标：通过调整权重，使模型能够正确地对输入进行分类。

* 损失函数：说明如何计算损失（loss），以及损失函数在模型训练中的作用。

* 梯度下降：介绍梯度下降算法如何用于优化模型参数，以最小化损失。

* 迭代过程：描述训练过程中的迭代步骤，包括多次遍历训练数据（epochs），以及如何避免过拟合。

生成语言的原理：

* 从字符到句子：讨论如何将神经网络应用于语言生成，通过预测下一个字符来逐步构建句子。

* 输入和输出的表示：提出将字符映射为数字的方法，以及如何解释模型的输出为下一个字符。

* 固定的上下文长度：解释在生成过程中，输入的长度是固定的，这被称为“上下文长度”（context length）。模型只能利用有限的上下文信息进行预测。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XPyJ-V0vbPv6EDwFpk7KYQ.png)

大型语言模型的有效性原因：

* 模型的局限性：指出简单的字符预测模型的局限性，如无法捕捉长距离依赖和复杂的语言结构。

* 改进方法：引入更复杂的技术，如嵌入、子词分词器和自注意力机制，以提升模型的性能。

​

嵌入（Embeddings）：

* 概念：说明嵌入是如何将离散的字符或词映射为连续的向量表示，以捕捉它们之间的语义关系。

* 训练嵌入：在训练过程中，同时优化嵌入向量，使模型能够更好地理解输入数据。

* 向量表示的优势：使用多维向量表示字符或词，可以更丰富地捕捉语言的特征。

![](https://miro.medium.com/v2/resize:fit:842/format:webp/1*lZOR8fNDEWHxUhLCSB-67A.png)

子词分词器（Subword Tokenizers）：

* 动机：直接使用词作为基本单元会导致词汇量过大，模型难以处理。

* 方法：将词分解为更小的子词或字符（如使用SentencePiece分词器），这样可以降低词汇量，同时捕捉词形变化和词缀信息。

* 示例：展示如何将“cats”分解为“cat”和“s”，从而利用“cat”的已有信息，提升模型的泛化能力。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VGNZ1Zighiek1sAMdiZCaw.png)

自注意力机制（Self-Attention）：

* 问题背景：传统的神经网络难以捕捉序列中远距离词之间的依赖关系。

* 解决方案：自注意力机制允许模型根据输入序列中不同位置的词，动态地调整它们的重要性。

* 具体实现：

  * 查询（Query）、键（Key）和值（Value）：引入这三个概念，说明如何计算注意力权重。

  * 计算过程：通过点积计算注意力得分，使用Softmax函数归一化权重，然后加权求和得到输出。

  * 优势：自注意力机制能够高效地捕捉序列中不同位置的依赖关系，无论它们之间的距离多远。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*oETLwMpxy3oH_B9pN-xLcg.png)

Softmax函数：

* 作用：将模型的原始输出转换为概率分布，使得输出的各个元素之和为1。

* 必要性：在多分类问题中，需要将输出映射为概率，以便进行合理的预测和计算损失。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jSyo_owKB-tfTrPXV2giKg.png)

残差连接（Residual Connections）：

* 问题背景：随着网络层数的增加，训练深层神经网络会遇到梯度消失或爆炸的问题。

* 解决方案：残差连接通过在层与层之间添加直接的捷径连接，缓解了梯度消失问题，使得信息能够更直接地传递。

* 效果：这种结构提高了模型的训练稳定性和性能。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*270MXDfslVtvmBjShHL2hQ.png)

层归一化（Layer Normalization）：

* 概念：在每个层对输入进行归一化处理，减去均值，除以标准差，然后应用可训练的缩放和平移参数。

* 作用：加速模型训练，稳定梯度，提高模型的泛化能力。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Zd-PvX2cYslEyrjL6MVnzA.png)

Dropout：

* 概念：在训练过程中，随机丢弃一部分神经元的连接，以防止模型过拟合。

* 原理：通过让模型在训练时学习多个子模型的集成，从而提高模型的鲁棒性。

​

多头注意力（Multi-Head Attention）：

* 概念：在自注意力机制的基础上，引入多个“头”，让模型能够从不同的子空间中学习表示。

* 实现：对输入进行线性变换，生成多个查询、键和值，然后并行地计算注意力，最后将结果拼接起来。

* 优势：增强模型的表达能力，使其能够捕捉更丰富的特征。

​

位置嵌入（Positional Embedding）：

* 问题背景：自注意力机制本身不考虑序列中元素的位置信息。

* 解决方案：通过为每个位置添加一个位置嵌入向量，将位置信息显式地编码到输入中。

* 方法：使用可训练的嵌入向量，或者采用固定的正弦和余弦函数进行位置编码。

​

GPT架构：

* 整体结构：将前面介绍的所有组件组合起来，构建了GPT模型的完整架构。

* 流程：

  * 输入层：将输入的文本通过词嵌入和位置嵌入进行编码。

  * Transformer块：包含多头自注意力、残差连接、层归一化和前馈神经网络等组件。

  * 输出层：通过Softmax函数，预测下一个词或字符的概率分布。

* 特点：GPT模型主要用于文本生成，能够根据给定的上下文，生成连贯的文本。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*U9mQKCWiyakNVwxU)

Transformer架构：

* 背景：Transformer模型最初是为了解决机器翻译等序列到序列的任务。

* 结构：由编码器（Encoder）和解码器（Decoder）组成。

  * 编码器：对输入序列进行编码，捕捉其语义表示。

  * 解码器：根据编码器的输出和已生成的序列，生成目标序列。

* 创新点：完全基于注意力机制，摒弃了传统的循环神经网络（RNN）结构，提高了并行计算效率。

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*psIz3-v2dMfI3SMsFQjRPQ.png)

​


### metadata 元数据
元数据（Metadata）是描述数据的数据。它提供了关于数据的背景信息，帮助用户理解数据的含义、结构和关系。

​

元数据可以包括各种类型的信息，例如：

\*   数据的定义和描述

\*   数据的结构和格式

\*   数据的来源和创建时间

\*   数据的更新和修改记录

\*   数据的访问权限和安全信息

\*   数据的关系和依赖信息

​

元数据的作用包括：

\*   提供数据的上下文信息

\*   帮助用户理解数据的含义

\*   支持数据的搜索和检索

\*   支持数据的管理和维护

\*   支持数据的安全和访问控制

​

元数据的分类包括：

\*   描述性元数据（Descriptive Metadata）：描述数据的内容和结构

\*   管理性元数据（Administrative Metadata）：描述数据的管理和维护信息

\*   结构性元数据（Structural Metadata）：描述数据的结构和格式

\*   关系性元数据（Relational Metadata）：描述数据之间的关系

​

元数据的应用场景包括：

\*   数据仓库和商业智能

\*   数据库管理和维护

\*   数据搜索和检索

\*   数据安全和访问控制

\*   数据科学和机器学习

​

总之，元数据是描述数据的数据，提供了关于数据的背景信息，帮助用户理解数据的含义、结构和关系。


### AI 智能程度划分
弱人工智能：也叫狭义人工智能，它专注于特定的、相对狭窄的任务领域，并且在这些任务上表现出智能行为，比如语音助手只能处理语音交互相关任务、图像识别软件专门进行图像识别等，它们无法像人类一样灵活地应对各种不同类型的任务，智能范围局限在设定好的**特定领域**。目前大部分市场的AI助手是弱人工智能。

强人工智能：具备和人类同等的智能水平，能够理解、学习、思考、推理等，可以像人类一样灵活地处理各种各样的复杂任务，甚至有自我意识，但目前还处于理论探索和研发阶段，尚未完全实现。

超人工智能：这是一种设想中的人工智能阶段，其智能程度远远超过人类，能够在几乎所有领域都展现出远超人类的能力，不过这更多存在于科幻想象中，距离现实还非常遥远。

​


### AI 技术角度怎么划分
#### 机器学习：

* 监督学习：通过给定有标记的训练数据，让模型学习输入特征和输出标签之间的映射关系，例如常见的用于图像分类的卷积神经网络（CNN），在有大量已标注好类别图像数据基础上进行训练，像识别图片中是猫还是狗等；还有用于预测数值的线性回归、决策树等算法，可应用在预测房价等场景中。

* 无监督学习：训练数据没有事先标记，模型要自己去发现数据中的结构和模式，比如聚类算法，能将相似的数据点聚成不同的簇，常用于客户细分、图像分割等方面，通过对用户行为数据聚类了解不同用户群体特点，或者把图像按区域聚类划分。

* 强化学习：智能体在环境中采取一系列行动，根据行动获得的奖励反馈来学习最优策略，典型应用是机器人控制、游戏领域等，像AlphaGo在围棋游戏环境里，通过不断试错和获得奖励反馈（如赢棋得高分等）来学习下棋策略。

应用场景：

* 个性化推荐：电商、新闻资讯、视频流媒体等各类前端应用，通过收集用户的浏览历史、购买行为、收藏偏好等数据，利用机器学习算法训练推荐模型，预测用户可能感兴趣的商品、文章、视频等内容，然后在前端界面的推荐板块精准展示给用户，提高用户的留存率和活跃度。例如，音乐类APP根据用户平时听歌的风格、歌手偏好等，为其推荐相似风格的新歌或相关歌手的其他作品。

* 用户行为预测：对于有交互功能的前端应用，像在线游戏、金融交易平台等，AI可以分析用户过往的操作行为模式，预测用户下一步可能采取的行动，游戏中可以提前准备相应的资源加载或者关卡调整等；金融平台则可以对可能出现的异常交易行为提前预警，保障交易安全，优化用户的使用体验。

#### 深度学习

* 是机器学习的一个分支，它依靠深度神经网络结构，有多个隐藏层，能自动从大量数据中学习复杂的模式和特征，例如深度卷积神经网络，用于图像识别准确率极高，循环神经网络（RNN）及其改进的长短期记忆网络（LSTM）、门控循环单元（GRU）等在处理自然语言序列数据，像机器翻译、语音识别、文本生成等方面表现出色。

#### 自然语言处理（NLP）：

* 语言理解：旨在让机器理解人类语言的含义，像语义分析，分析句子中词语的语义关系，以及情感分析，判断文本表达的是积极、消极还是中性情感，可用于舆情监测、产品评论分析等；还有问答系统，能理解用户问题并给出合理答案，如智能客服机器人。

* 语言生成：包括文本摘要生成，从长篇文章中提炼关键内容生成摘要，以及机器翻译，将一种语言文本转换为另一种语言文本，还有故事、诗歌等创造性文本生成，例如一些写作辅助工具能帮用户生成部分文案内容。

应用场景：

* 智能搜索与过滤：在前端界面中，比如电商网站的搜索栏或者内容平台的筛选功能，借助AI中的自然语言处理技术，用户可以用更自然、口语化的语句来搜索商品或内容。例如，用户输入“适合夏天穿的透气轻薄的白色连衣裙”，系统能准确理解语义，筛选出符合要求的商品展示给用户，而不是局限于简单的关键词匹配，极大提升了搜索体验和精准度。

* 智能客服聊天窗口：前端的在线客服聊天界面嵌入AI驱动的自然语言对话系统，能实时理解用户咨询的问题，像客户询问产品的使用方法、退换货政策等，智能客服可以像真人一样流畅回复，引导用户解决问题，提高客户服务效率，并且可以24小时不间断提供服务。

* 内容生成辅助：对于一些有内容创作需求的前端应用，如写作平台、文案编辑工具等，AI可以基于自然语言处理的文本生成能力，帮助用户生成文章大纲、提供创意灵感，或者对已有的文本进行语法检查、润色优化等，辅助用户更高效地完成写作任务。

#### 计算机视觉：

* 图像识别：识别图像中的物体、场景、人物等，例如人脸识别技术用于门禁系统、安防监控中识别特定人员；物体识别在物流自动化中可分拣不同物品等。

* 图像分割：把图像划分成不同的区域，例如在医学影像中精确分割出病变组织区域，辅助医生诊断病情；自动驾驶领域中对道路、车辆、行人等进行分割定位。

* 视频理解：分析视频内容，包括动作识别，判断视频中人物的行为动作，像在体育赛事分析中识别运动员的动作是否规范、违规等；还有视频内容摘要生成，提取视频关键信息形成简短摘要。

应用场景：

* 图像识别与验证：在前端登录界面、身份验证场景中，除了传统的密码输入等方式，可加入人脸识别、指纹识别等基于计算机视觉的AI技术。例如，用户通过摄像头进行人脸识别，系统快速比对数据库中的人脸特征信息，确认身份后允许登录，提高了安全性和便捷性；在图片分享社交平台，还能自动识别图片中的物体、场景等元素，方便用户添加准确的标签描述，便于后续搜索和分类管理。

* 增强现实（AR）体验：在前端开发的移动端应用或者网页端AR展示中，利用AI计算机视觉算法对现实场景进行分析理解。比如在一款家居购物APP中，用户通过手机摄像头扫描房间，AI能识别房间的空间布局、已有家具等情况，然后将虚拟的家具模型精准地叠加显示在相应位置，让用户可以直观看到购买的家具摆放在家中的实际效果，增强用户的交互体验。

* 视频内容分析：在视频播放类的前端应用中，AI可以分析视频画面，比如自动生成视频内容的文字摘要、识别视频中的人物动作、提取关键帧用于视频预览等，方便用户快速了解视频核心内容，也有助于视频的分类推荐等功能实现。

​


### AI 应用上怎么划分
#### 移动端前端应用：

* 语音助手集成：在手机端的各类APP前端界面中，集成语音助手功能，如地图导航APP，用户可以通过语音指令查询路线、查找周边兴趣点等；生活服务类APP能按照语音指令完成诸如订餐、叫车等操作，背后是AI语音识别和自然语言理解技术在起作用，让移动端操作更加便捷高效，无需手动输入。

* 智能拍照功能：手机相机应用的前端界面，利用AI计算机视觉技术实现自动场景识别、智能美颜、图像优化等功能。比如自动识别拍摄场景是风景、人物还是夜景等，然后相应地调整拍摄参数以达到最佳效果；拍照时根据人物面部特征进行智能美颜，实时在前端屏幕上呈现出美化后的效果，提升用户拍摄体验。

#### 网页端前端应用：

* 智能表单填写：在一些需要用户频繁填写表单信息的网页端，如在线申请贷款、报名考试等场景，AI可以根据用户之前填写的类似表单数据或者已有的用户基本信息，自动预填充部分内容，减少用户手动输入的工作量，并且利用自然语言处理技术对用户填写的内容进行格式、语义等方面的检查，提示错误信息，提高表单填写的准确性和效率。

* 网页内容自适应展示：根据不同用户的设备屏幕尺寸、网络带宽以及浏览习惯等因素，通过AI模型进行分析预测，网页前端动态调整页面布局、内容加载顺序和展示方式等。比如对于网络带宽较低的用户，优先加载关键文字和图片内容，确保基本的浏览体验；针对不同屏幕比例，自适应调整导航栏、图片、文本等元素的位置和大小，提升网页的通用性和用户友好度。

#### 桌面端前端应用：

* 智能办公助手：在办公软件如文档编辑、表格处理等桌面端应用的前端界面，AI可以辅助用户进行文档排版、语法检查、数据自动分析等工作。例如，根据文档内容自动推荐合适的字体、字号、段落格式等排版方案；在表格中快速分析数据，生成图表或者进行数据预测，帮助办公人员更高效地完成工作任务。

* 智能文件管理：在桌面操作系统的文件管理前端界面，AI可以根据文件的类型、内容、创建时间等多维度信息进行分类整理，还能通过对用户使用文件习惯的分析，预测用户可能需要查找的文件，将其在前端界面突出显示或者提供快捷访问方式，提高文件管理的便捷性和效率。


### 提示词注意点
提示词注意事项

* 阶段性：需求分成不同阶段，然后每一个阶段进行过程控制，让 AI 严格按照设计思路一步步来。如果一次性全部写出需求，那么不一定满足需求，中间某一步可能不正确（例如：确定产品需求——确定页面效果——数据库表——接口文档——后端代码——前端代码——联合调试）。

* 精确性：严格按照设计文档，不能让自由发挥。避免乱写。

* 明确技术栈版本：AI 可能基于早期代码和文档进行训练，所以默认使用较早的技术。建议约定和目前项目相匹配的版本。 例如指定 \`React Router v6\`、使用 Tailwind CSS v3 实现响应式布局（可以给定 package.json 指定版本）。

* 提供参考示例：给效果图，或者类似 Notion 的页面切换动画。


### 批量翻译
把选中部分中的 msgid 后面的英文字符串，翻译成希腊语，填入 msgstr "" 中，其他的不要修改，空行不要删除，其他代码不要修改。

按照实际测试，每次选中翻译的部分在100行左右（20句）太多上下文可能造成网络错误等问题，其他用户测试模型不超过1000句上下文。具体还取决于使用什么工具和模型。


### 项目预设-集成第三方库
#### 在 React 项目中集成以下功能（建议增加版本号）

* 使用 React Query 处理 API 请求缓存

* 添加 Tailwind CSS 并配置自定义主题

* 集成 React Hook Form 实现高性能表单

* 使用 Framer Motion 添加页面过渡动画

* 配置 ESLint + Prettier 代码规范

* 使用 Jest + React Testing Library 进行测试

#### 使用 React Router 配置路由

* 实现登录页（/login）、首页（/）、用户详情页（/user/:id）

* 添加路由守卫，未登录用户访问受限路由时跳转登录页

* 配置导航菜单，高亮显示当前激活路由

* 使用 useNavigate 和 useParams 处理路由跳转和参数获取


### 项目开发-基础组件开发
#### 基础组件：使用 React Hooks 创建一个名为 \`TodoList\` 的组件

\- 包含一个输入框和添加按钮，用于添加待办事项

\- 显示待办事项列表，每项可勾选完成状态

\- 已完成的事项显示删除线，未完成的正常显示

\- 添加事项后自动清空输入框

​

#### 表单组件：使用 Formik 和 Yup 创建用户注册表单

\- 包含用户名（必填，长度 4-20）、邮箱（格式验证）、密码（8 位以上，包含数字和字母）

\- 实时表单验证和错误提示

\- 提交时显示加载状态

\- 成功提交后显示提示并重置表单

​

#### 复杂组件：创建一个可拖拽的看板组件（类似 Trello）

\- 使用 React Beautiful DND 实现卡片拖拽功能

\- 包含多个列（待办、进行中、已完成）

\- 卡片可在列之间移动

\- 拖拽结束后更新状态并显示动画反馈

\- 支持添加/删除列和卡片

​

#### 组件测试：为以下 React 组件编写测试用例

\- 测试按钮点击事件

\- 测试状态更新

\- 测试条件渲染

\- 测试异步数据获取

\- 添加覆盖率报告配置


### 项目优化-性能优化
#### 数据获取与处理

写一段 JS 代码，从一个JSON格式的API接口

假设接口地址为 <https://example.com/api/data>

获取数据，解析数据后，将其中的用户名列表展示在页面的一个无序列表（ul）元素中

如果获取数据失败，要有相应的错误提示。

​

#### 可视化：使用 React Chart.js 创建数据仪表盘：

\- 包含折线图（显示月销售额趋势）

\- 柱状图（对比不同产品销量）

\- 饼图（显示用户地区分布）

\- 添加图表交互（悬停提示、点击钻取）

\- 数据使用模拟 JSON 格式

​

#### 优化以下 React 组件的性能

\- 使用 memo 避免不必要的重渲染

\- 使用 useCallback 缓存回调函数

\- 使用 useMemo 优化计算密集型操作

​

#### 状态管理：为 React 应用配置 Redux Toolkit

\- 创建一个 \`authSlice\` 管理用户认证状态（isLoggedIn, userData）

\- 实现异步登录 thunk（模拟 API 请求）

\- 提供登录、登出、更新用户信息的 action

\- 在组件中使用 useSelector 和 useDispatch 连接状态

​

#### 自定义 Hooks

创建一个名为 \`useLocalStorage\` 的自定义 Hook：

\- 实现状态持久化到 localStorage

\- 自动同步多个组件间的状态更新

\- 示例用法：const \[theme, setTheme] = useLocalStorage('theme', 'light')


