## 03-List-API

[https://docs.python.org/3/library/stdtypes.html#typesseq](https://docs.python.org/3/library/stdtypes.html#typesseq "https://docs.python.org/3/library/stdtypes.html#typesseq")

### 列表

列表类似 JS 中的数组。C 语言中的数组只能存储固定类型的数据，Python 和 JS 中的列表数组可以存储不同类型的数据。列表的增删改查功能对应的不同的方法（参考数组的方法）。数组的方法 append 对应的增删改查。

python 中列表长度不能自动扩展，注意！声明是需要考虑长度

```python
#增加
append()
insert()
extend()

#删除
pop() 删除最后一个元素
remove() 根据内容删除
del array[0] 根据下标删除

#修改
array[1] = 10

#查询
in
not in
```

### 列表 API

```python
# coding=utf-8

# append extend 都是给一个列表增加元素
# append 的参数是单个元素
# extend 参数是另一个列表，会把另一个列表的每一项获取并加入到第一个列表中，另一个列表内容不改变

nums1 = [1, 2, 3]
nums2 = [4, 5]
nums1.extend(nums2)

print(nums1, nums2)

# nums1.extend(4); 报错：TypeError: 'int' object is not iterable
# print(nums1);

# append 只能增加一个元素，多个参数会报错
# nums1.append(6, 7) TypeError: append() takes exactly one argument (2 given)
nums1.append(6)

# 注意 append 会改变原列表，返回值是 None
b = nums1.append(2)
# print(b) None
```

​
