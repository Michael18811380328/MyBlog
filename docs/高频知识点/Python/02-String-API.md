## 02-String-API

[https://docs.python.org/zh-cn/3/library/stdtypes.html#text-sequence-type-str](https://docs.python.org/zh-cn/3/library/stdtypes.html#text-sequence-type-str "https://docs.python.org/zh-cn/3/library/stdtypes.html#text-sequence-type-str")

字符串存储的占位：数值和字符串占用内存空间不同；字符串和数值型变量的类型转换；输入的信息都是字符串；

字符串有30个API

#### 字符串拼接

默认模板字符串，这样可以很好的说明变量的数据类型（类似C语言写法）

```python
name = 'Mike'
age = 20
print("%s is good, he is %d score" % (name, age))
```

还有一个 f 字符串（类似JS模板字符串）

```python
print(f"Hello, {first_name} {last_name}")
```

#### 字符串 strip lstrip rstrip 用法

a.strip()

把字符串左右两侧的某个字符串去掉。不传参，默认去掉的是空格和换行符；传参，去掉的是传递的子字符串。

```python
a = ' Hello Blog Mike!'
a.strip()
a.strip('!')
```

a.lstrip()

a.rstrip()

分别表示从左边和右边去掉特定字符串，加入参数类似效果

```python
a.lstrip()
a.rstrip()
```

#### string.split()

语法：str.split(str="", num=string.count(str))\[n]

参数说明：

str:表示为分隔符，默认为空格，但是不能为空('')。若字符串中没有分隔符，则把整个字符串作为列表的一个元素

num:表示分割次数。如果存在参数num，则仅分隔成 num+1 个子字符串，并且每一个子字符串可以赋给新的变量

\[n]:表示选取第n个分片

注意：当使用空格作为分隔符时，对于中间为空的项会自动忽略

```python
string = "www.gziscas.com.cn"

print(string.split('.'))
# ['www', 'gziscas', 'com', 'cn']

# 分割两次
print(string.split('.'，2))
# ['www', 'gziscas', 'com.cn']

u1, u2, u3 = string.split('.',2)
print(u1)—— www
print(u2)—— gziscas
print(u3) ——com.cn
```

#### string.splitlines()

splitlines() 按照三种换行符(‘\r’, ‘\r\n’, \n’)分隔，返回一个列表，列表中的字符串是每一行的内容。

就是 split 的一个进阶 API

```python
str1 = 'ab c\n\nde fg\rkl\r\n'
print str1.splitlines()
 
str2 = 'ab c\n\nde fg\rkl\r\n'
print str2.splitlines(True)
```

#### repr

将某一类型的变量或者常量，转换为字符串，通常有两种方法，即`str()` 或者 `repr()` 。

* 函数str( )将其转化成为适于人阅读的样式文本

* 函数repr(object)将对象转化为供解释器读取的形式。返回一个对象的 string 格式。

实际上输出看起来差不多

```python
str({ 'a' : 10 })
# "{'a': 10}"

repr({ 'a': 10 })
# "{'a': 10}"
```

#### replace

```python
str = 'Hello Tony! Hello Mike!'
str.replace('Hello', 'Hi', 1)
```

第一个参数是需要替换的字符串

第二个参数是新的字符串

第三个参数（可选）是替换的次数，默认是全部替换
