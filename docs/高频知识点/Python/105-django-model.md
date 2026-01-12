## 105-django-model

在 Django 中，`models` 指的是数据模型，它定义了数据在数据库中的结构和组织方式。

换句话说，模型是数据在数据库中存储的蓝图。

在 Django 中，模型通常是通过定义继承自 `django.db.models.Model` 的 Python 类来实现的。每个模型类代表数据库中的一个表，类的属性代表表中的列。

例如：

```python
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    publication_date = models.DateField()
```

在这个例子中，`Book` 模型有三个属性：`title`、`author` 和 `publication_date`，它们分别对应数据库表中的三个列。

​

​

​

​

​

在 React 中，"model"通常指的是一个用于定义数据模型的JavaScript对象或类。这个模型可以包含属性和方法，用于表示和操作应用程序中的数据。

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

const user = new User("John", "john@example.com");
user.greet(); // "Hello, John!"
```

在Django中，"model"指的是一个用于定义数据库表的类。这个类使用Django的模型框架（Model Framework），它提供了一种简单的方式来定义数据库表的结构和关系。Django的模型类通常继承自`django.db.models.Model`类，并定义了数据库表的字段和行为。

```python
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    def greet(self):
        print(f"Hello, {self.name}!")

user = User.objects.create(name="John", email="john@example.com")
user.greet() # "Hello, John!"
```

区别：

这两种模型都用于表示和操作数据，但它们在实现和使用上有一些差异。

React中的模型通常是JavaScript对象或类，而Django中的模型是一个用于定义数据库表的类。

React中的模型通常用于管理应用程序的状态和数据流，而Django中的模型用于定义数据库表的结构和关系。
