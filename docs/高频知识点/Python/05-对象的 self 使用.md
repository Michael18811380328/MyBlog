## 05-对象的 self 使用

[https://docs.python.org/zh-cn/3/tutorial/classes.html#random-remarks](https://docs.python.org/zh-cn/3/tutorial/classes.html#random-remarks "https://docs.python.org/zh-cn/3/tutorial/classes.html#random-remarks")

self 是在为 class 编写 instance method 的时候，放在变量名第一位的占位词。

在具体编写 instance method 里，可以不使用 self 这个变量。

如果在 method 里面要改变 instance 的属性，可以用 self.xxxx 来指代这个属性进行修改。

所以self， 就是指由这个 class 造出来的 instance。

> 类似 JS 中 class 中的 this，指向类的实例

小结：class 表示类，类中的函数 function 就是方法 method，函数的第一个参数是 self，表示类的实例对象。

获取类的属性和方法

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

p = Person("John", 30)
p.say_hello()
```

实现类的继承

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating.")

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def bark(self):
        print(f"{self.name} the {self.breed} is barking.")

d = Dog("Max", "Golden Retriever")
d.eat()
d.bark()
```

​
