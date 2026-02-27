## 323-nltk

人工智能

使用 NLTK 库来提取文本中的高频词（即词频统计中频率最高的词）。

[https://pypi.org/project/nltk/](https://pypi.org/project/nltk/ "https://pypi.org/project/nltk/")

The Natural Language Toolkit (NLTK) is a Python package for natural language processing.&#x20;

```python
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
 
# 加载停用词（或者本地新建一个停用词库）
nltk.download('stopwords')
stop_words = set(stopwords.words('english'))
 
# 示例文本
text = "Python is a high-level, general-purpose, dynamic programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."
 
# 进行词标记
tokens = word_tokenize(text)
 
# 移除停用词
tokens = [token for token in tokens if token not in stop_words]
 
# 计算词频
freq_dist = nltk.FreqDist(tokens)
 
# 提取高频词
high_freq_words = [word for word in freq_dist.keys() if freq_dist[word] > 1]
 
print(high_freq_words)
```

​
