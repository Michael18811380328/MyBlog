## 410-jieba

[https://github.com/fxsjy/jieba](https://github.com/fxsjy/jieba "https://github.com/fxsjy/jieba")

提取高频词，可以使用`jieba`库进行中文分词，并使用`collections`库中的`Counter`类来统计词频。

自然语言处理

```python
import jieba
from collections import Counter
 
# 输入文本
text = "这里是一段中文文本，用于演示如何提取高频词。"
 
# 使用jieba进行分词
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

​
