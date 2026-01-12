## 09-os-split

[https://docs.python.org/zh-cn/3.10/library/os.html](https://docs.python.org/zh-cn/3.10/library/os.html "https://docs.python.org/zh-cn/3.10/library/os.html")

os.path.split()：按照路径将文件名和路径分割开

如果给出的是一个目录和文件名，则输出路径和文件名

如果给出的是一个目录名，则输出路径和为空文件名

```python
import os

print(os.path.split('/dodo/soft/python/'))
# ('/dodo/soft/python', '')

print(os.path.split('/dodo/soft/python'))
# ('/dodo/soft', 'python') 

a, b = os.path.split('/dodo/soft/python/')
```

​
