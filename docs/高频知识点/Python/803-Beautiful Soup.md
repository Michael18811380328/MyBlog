## 803-Beautiful Soup

实际使用:

[https://beautifulsoup.readthedocs.io/zh-cn/v4.4.0/#](https://beautifulsoup.readthedocs.io/zh-cn/v4.4.0/# "https://beautifulsoup.readthedocs.io/zh-cn/v4.4.0/#")

[https://github.com/Michael18811380328/HelloPython/tree/master/src/spider](https://github.com/Michael18811380328/HelloPython/tree/master/src/spider "https://github.com/Michael18811380328/HelloPython/tree/master/src/spider")

把HTML字符串转换成DOM节点的工具，主要用于爬虫

```python
import requests
from bs4 import BeautifulSoup
import io
import sys

reload(sys)
sys.setdefaultencoding('utf8')


r= requests.get("http://jsqg.sports.cn/index.php?s=/home/index/index/p/1.html")
r.encoding='utf-8'
r.encoding=None
result = r.text

bs = BeautifulSoup(result,'html.parser')

data=bs.find_all('script')
data1=bs.find_all('li')

```

​
