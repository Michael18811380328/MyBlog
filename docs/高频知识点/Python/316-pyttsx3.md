## 316-pyttsx3

**pyttsx3** 是一个功能强大的 Python 文本转语音（TTS）库，支持离线运行。

它无需依赖网络连接，使用系统内置的 TTS 引擎，适合需要语音输出功能的应用开发。

```text
pip install pyttsx3
```

简单案例：文本转换成声音

```python
import pyttsx3

engine = pyttsx3.init()

# 设置要朗读的文本
engine.say("你好，我是Python文本转语音引擎")

# 开始朗读并等待完成
engine.runAndWait()
```

调整语音属性

可以通过以下方法自定义语音属性：

调整语速

```python
rate = engine.getProperty('rate') # 获取当前语速
engine.setProperty('rate', rate - 50) # 降低语速
engine.say("这是调整后的语速")
engine.runAndWait()
```

调整音量

```python
volume = engine.getProperty('volume') # 获取当前音量
engine.setProperty('volume', 0.8) # 设置音量为80%
engine.say("这是调整后的音量")
engine.runAndWait()
```

更改声音

```python
voices = engine.getProperty('voices') # 获取可用声音列表
engine.setProperty('voice', voices[1].id) # 切换到另一种声音
engine.say("这是更改后的声音")
engine.runAndWait()
```

保存语音为文件

pyttsx3 支持将语音保存为音频文件：

```python
engine.save_to_file("这段文本将保存为音频文件", "output.mp3")
engine.runAndWait()
```

​
