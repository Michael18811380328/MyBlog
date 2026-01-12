## 12-difflib

[https://docs.python.org/3/library/difflib.html](https://docs.python.org/3/library/difflib.html "https://docs.python.org/3/library/difflib.html")

difflib 是 Python 的标准库，用于比较序列差异并生成可读报告。它提供差异比较、格式化、序列匹配等功能，适用于文本比较、版本控制等场景。通过Differ、HTMLFormatter等类，可以实现从简单到复杂的差异展示，如HTML差异报告和最长匹配子序列分析。

使用`difflib.Differ()`类，可以比较两个字符串或文件，并生成一个差异对象。这个对象包含了两个序列之间的差异，并且可以方便地转化为人类可读的格式。

`difflib`模块提供了多种格式化差异的方法，如`difflib.HtmlDiff()`用于生成HTML格式的差异报告，`difflib.ndiff()`用于生成简单的文本差异报告。

```python
import difflib

# 定义两个需要比较的字符串
text1 = "我爱吃苹果"
text2 = "我爱吃香蕉"

# 创建Differ对象
differ = difflib.Differ()

# 使用Differ对象生成差异报告
diff = differ.compare(text1.splitlines(keepends=True), text2.splitlines(keepends=True))

# 打印差异报告
print(''.join(diff))
```

```python
import difflib

a = ['apple', 'banana', 'cherry']
b = ['apple', 'blueberry', 'cherry']

for line in difflib.ndiff(a, b):
    print(line, end='')
```

```python
import difflib

a = 'apple'
b = 'apricot'

matcher = difflib.SequenceMatcher(None, a, b)

# 获取匹配块
blocks = matcher.get_matching_blocks()
print('Matching blocks:', blocks)

# 获取操作码
opcodes = matcher.get_opcodes()
print('Opcodes:', opcodes)

```

参考：[https://blog.csdn.net/molangmolang/article/details/138093020](https://blog.csdn.net/molangmolang/article/details/138093020 "https://blog.csdn.net/molangmolang/article/details/138093020")
