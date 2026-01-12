## 04-TupleAPI

[https://docs.python.org/3/library/stdtypes.html#typesseq](https://docs.python.org/3/library/stdtypes.html#typesseq "https://docs.python.org/3/library/stdtypes.html#typesseq")

元组是只读的，可以查询，不可以更改

```python
a = (1, 2, 3)
```

通过索引访问元组的某一项

* `index()`: 返回值的第一个出现位置的索引。

* `count()`: 返回值出现的次数。

```python
my_tuple = (1, 2, 2, 3, 4, 4, 4)

print(my_tuple.index(2))  # 输出 1

print(my_tuple.count(4))  # 输出 3
```

* 连接：`+`

* 重复：`*`

* 成员测试：`in`

* 序列解包：`*`

```python
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

print(tuple1 + tuple2)  # 输出 (1, 2, 3, 4, 5, 6)

print(tuple1 * 2)  # 输出 (1, 2, 3, 1, 2, 3)

print(2 in tuple1)  # 输出 True

a, b, c = tuple1

print(a, b, c)  # 输出 1 2 3
```

​
