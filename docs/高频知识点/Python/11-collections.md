## 11-collections

[https://docs.python.org/3/library/collections.html](https://docs.python.org/3/library/collections.html "https://docs.python.org/3/library/collections.html")

python3 内置模块

提供了许多有用的数据结构和函数，用于处理和操作数据。它的主要作用是：

* **提供高性能的数据结构**: collections 模块提供了许多高性能的数据结构，例如 defaultdict、Counter、OrderedDict 等，这些数据结构可以帮助开发者更高效地处理和操作数据。

* **简化数据处理**: collections 模块提供了许多函数和类，用于简化数据处理，例如 namedtuple、deque 等，这些函数和类可以帮助开发者更方便地处理和操作数据。

* **提供数据统计功能**: collections 模块提供了 Counter 类，用于统计数据的频率，这可以帮助开发者更方便地分析和处理数据。

以下是 collections 模块中的一些常用数据结构和函数：

* **defaultdict**: defaultdict 是一个字典的子类，它可以提供一个默认值，当字典中没有某个键时，它会返回这个默认值。

* **Counter**: Counter 是一个字典的子类，它可以统计数据的频率。

* **OrderedDict**: OrderedDict 是一个字典的子类，它可以保持键值对的顺序。

* **namedtuple**: namedtuple 是一个函数，它可以创建一个命名元组。

* **deque**: deque 是一个双端队列，它可以从两端添加和删除元素。

实际上主要用于统计和计数 NLP

```python
import jieba
from collections import Counter
 
text = "这里是一段中文文本，用于演示如何提取高频词。这里是一段中文文本，用于演示如何提取高频词。这里是一段中文文本，用于演示如何提取高频词。这里是一段中文文本，用于演示如何提取高频词。这里是一段中文文本，用于演示如何提取高频词。这里是一段中文文本，用于演示如何提取高频词。"
 
# 使用 jieba 进行分词
words = jieba.cut(text)
 
# 转换为列表
words = list(words)
 
# 停用词列表
stopwords = ['用于', '的', '是', '一段', '演示', '如何']
 
# 移除停用词
words = [word for word in words if word not in stopwords]
 
# 统计词频
word_counts = Counter(words)
 
# 设定高频词阈值，例如出现超过2次
threshold = 2
 
# 提取高频词
high_frequency_words = [word for word, count in word_counts.items() if count > threshold]
 
print(high_frequency_words)
```

其他博客：

[https://blog.csdn.net/peng78585/article/details/125387640](https://blog.csdn.net/peng78585/article/details/125387640 "https://blog.csdn.net/peng78585/article/details/125387640")

[https://docs.python.org/zh-cn/3/library/collections.html#module-collections](https://docs.python.org/zh-cn/3/library/collections.html#module-collections "https://docs.python.org/zh-cn/3/library/collections.html#module-collections")
