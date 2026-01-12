## 411-pypinyin

pypinyin：汉字拼音转换工具 Python 版

项目地址：<https://github.com/mozillazg/python-pinyin>

中文博客：<https://mp.weixin.qq.com/s/ByhjX_6ugsfsdQiqkH-FoA>

#### 什么是  pypinyin

pypinyin 是一个非常流行的 Python 库，用于将汉字转换为拼音。它可以根据汉字输出对应的拼音，并支持多音字和调式选项。

pypinyin 已经在许多汉语处理项目中被广泛使用，证明了它的实用性和稳定性。它的出现大大简化了处理中文数据的复杂性，提高了开发者工作的效率。

支持  Python 3.x 版本。

虽然还有其他一些库提供类似的功能，例如 jieba 内嵌有拼音转换功能，但 pypinyin 以其专注高效的特点脱颖而出，并且由于它简单易用而获得青睐。

#### 安装

```
pip install pypinyin
```

#### 基本用法

使用 pypinyin 非常直观，函数调用简单，让我们通过一些示例代码来看看它的基本用法。

导入库：

```
from pypinyin import pinyin, lazy_pinyin
```

将一个汉字字符串转换为拼音列表：

```
hanzi = '汉字转拼音真方便！'
```

执行结果：

```
[['hàn'], ['zì'], ['zhuǎn'], ['pīn'], ['yīn'], ['zhēn'], ['fāng'], ['biàn'], ['！']]
```

每个汉字的拼音被放在一个小列表里，多音字也能得到正确的拼音。

如果你只需要拼音字符串列表，而不是嵌套列表，可以使用 lazy\_pinyin 方法：

```
pinyin_str_list = lazy_pinyin(hanzi)
print(pinyin_str_list)
```

执行结果：

```
['han', 'zi', 'zhuan', 'pin', 'yin', 'zhen', 'fang', 'bian', '！']
```

#### 多音字处理

对于多音字，pypinyin 还可以根据上下文智能识别正确的读音：

```
sentence = '重阳节的重，和重量的重，读音不一样。'
for word in pinyin(sentence, heteronym=True):  # heteronym 参数启用多音字模式 
    print(word)
```

执行结果：

```
['chóng']
['yáng']
['jié', 'jiē']
['de', 'dī', 'dí', 'dì']
['zhòng', 'chóng', 'tóng']
['，']
['hé', 'hè', 'hú', 'huó', 'huò', 'huo']
['zhòng']
['liàng']
['de', 'dī', 'dí', 'dì']
['zhòng', 'chóng', 'tóng']
['，']
['dú']
['yīn']
['bù']
['yí']
['yàng']
['。']
```

#### 拼音风格

pypinyin 支持多种风格的拼音呈现，比如 TONAL（带声调的拼音）， INITIALS（声母）， NORMAL（不带声调的拼音），等等。就像是变化多端的变色龙，以适应你的不同需求。

```
from pypinyin import Style

pinyin_initials = pinyin('拼音', style=Style.INITIALS, strict=False) # 声母
print(pinyin_initials)

pinyin_normal = pinyin('拼音', style=Style.NORMAL) # 无声调
print(pinyin_normal)

pinyin_tone = pinyin('拼音', style=Style.TONE) # 普通声调
print(pinyin_tone)

pinyin_tone2 = pinyin('拼音', style=Style.TONE2) # 数字声调
print(pinyin_tone2)
```

执行结果：

```
[['p'], ['y']]   # 声母
[['pin'], ['yin']]  # 无声调
[['pīn'], ['yīn']]  # 普通声调
[['pi1n'], ['yi1n']]# 数字声调
```

风格为声母 Style.INITIALS 时，不会显示出 y，因为根据 《汉语拼音方案》 ， y，w，ü (yu) 都不是声母，在某些特定韵母无声母时，才加上 y 或 w，而 ü 也有其特定规则。

如果需要显示，就将 strict 设置为 False，如上面例子所示。

#### 定制拼音库

如果你有特殊需求，比如某个汉字转换为特定的拼音，pypinyin 支持定制拼音库。你可以通过提供一个词典来自定义读音。

* 可以通过自定义词组拼音库或者单字拼音库的方式修正拼音结果

  ```
  from pypinyin import load_phrases_dict, load_single_dict

  load_phrases_dict({'桔子': [['jú'], ['zǐ']]})  # 增加 "桔子" 词组

  load_single_dict({ord('还'): 'hái,huán'})  # 调整 "还" 字的拼音顺序或覆盖默认拼音
  ```

* 也可以使用 pypinyin-dict 项目提供的自定义拼音库来纠正结果。

  ```
  # 使用 phrase-pinyin-data 项目中 cc_cedict.txt 文件中的拼音数据优化结果
  from pypinyin_dict.phrase_pinyin_data import cc_cedict
  cc_cedict.load()

  # 使用 pinyin-data 项目中 kXHC1983.txt 文件中的拼音数据优化结果
  from pypinyin_dict.pinyin_data import kxhc1983
  kxhc1983.load()
  ```

#### CLI 命令行工具

除了在 Python 代码中使用，pypinyin 还可以作为命令行工具使用：

```
$ pypinyin 音乐
yīn yuè
$ pypinyin -h
```

#### 实践

现在，来点儿实践环节将更具有学习效果：

1. 尝试用 pypinyin 将一首中文诗歌转换成拼音。

2. 写一个小工具，比如名字生成器，输入中文名字，自动生成对应的拼音。

请在下列代码片段中补充你的实践内容：

```
# 将指定的中文诗歌转换为拼音 
poem = '床前明月光，疑是地上霜。'
poem_pinyin = pinyin(poem)
print(poem_pinyin)

# 名字生成器 
def name_to_pinyin(name):
    # 补充代码，返回姓名的拼音 
    return lazy_pinyin(name)

print(name_to_pinyin('张三'))
```

​

#### 相关项目

* hotoo/pinyin: 汉字拼音转换工具 Node.js/JavaScript 版。[https://github.com/hotoo/pinyin](https://github.com/hotoo/pinyin "https://github.com/hotoo/pinyin")

* mozillazg/go-pinyin: 汉字拼音转换工具 Go 版。[https://github.com/mozillazg/go-pinyin](https://github.com/mozillazg/go-pinyin "https://github.com/mozillazg/go-pinyin")

* mozillazg/rust-pinyin: 汉字拼音转换工具 Rust 版。[https://github.com/mozillazg/rust-pinyin](https://github.com/mozillazg/rust-pinyin "https://github.com/mozillazg/rust-pinyin")
