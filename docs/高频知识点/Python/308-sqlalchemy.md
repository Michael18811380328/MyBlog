## 308-sqlalchemy

[https://pypi.org/project/SQLAlchemy/](https://pypi.org/project/SQLAlchemy/ "https://pypi.org/project/SQLAlchemy/")

官方介绍：[https://docs.sqlalchemy.org/en/14/intro.html](https://docs.sqlalchemy.org/en/14/intro.html "https://docs.sqlalchemy.org/en/14/intro.html")

SQLAlchemy 是一个 Python 的 SQL 工具包以及数据库对象映射框架（ORM）。它包含整套企业级持久化模式，专门为高效和高性能的数据库访问。它为高级 SQL 数据库提供了一个高级 SQL 抽象和公共 API。和传统的 SQL 语法不一样。

#### 核心逻辑

第一层：ORM 实现了关系型数据库转换成对象结构，python 层面不需要直接操作 SQL 语句，操作 Object 即可完成。

ORM：对象关系映射（英语：Object Relational Mapping，简称ORM，或O/RM，或O/R mapping）

第二层：核心代码实现了 Schema, Types, SQL 语句，连接池，Dialect(方言，是指用于与特定数据库进行交互的配置选项)

第三层：DB API 操作

![](https://docs.sqlalchemy.org/en/14/_images/sqla_arch_small.png)

​

#### SQLAlchemy 和 SQL 语法的差别

[https://www.sqlalchemy.org/library.html](https://www.sqlalchemy.org/library.html "https://www.sqlalchemy.org/library.html")

1\. 表达式

SQL 使用字符串来表示 SQL 语句。

```sql
SELECT * FROM users WHERE name = 'John'
```

SQLAlchemy 使用 Python 表达式来表示 SQL 语句。

```python
from sqlalchemy import select
from sqlalchemy import Table, MetaData


metadata = MetaData()
users = Table('users', metadata, autoload=True)


stmt = select([users]).where(users.c.name == 'John')
```

​

2\. 查询

SQL

```sql
SELECT * FROM users WHERE age > 18
```

SQLAlchemy使用 \`select()\` 函数和 \`where()\` 方法来查询数据。

```python
from sqlalchemy import select
from sqlalchemy import Table, MetaData

metadata = MetaData()
users = Table('users', metadata, autoload=True)

stmt = select([users]).where(users.c.age > 18)
```

​

3\. 过滤

```sql
SELECT * FROM users WHERE country = 'USA'
```

SQLAlchemy 使用 \`where()\` 方法来过滤数据。

```python
from sqlalchemy import select
from sqlalchemy import Table, MetaData

metadata = MetaData()
users = Table('users', metadata, autoload=True)

stmt = select([users]).where(users.c.country == 'USA')
```

​

4、and 和 & 符号的区别

在 SQLAlchemy 和 SQL 中，`&` 和 `AND` 都用于表示逻辑与运算，但是它们的使用场景和语法有所不同。

在 SQL 中，`AND` 是一个关键字，用于连接多个条件，表示逻辑与运算。例如：

```sql
sqlCopyInsertSELECT * FROM users WHERE age > 18 AND country = 'USA'
```

在 SQLAlchemy 中，`and_()` 是一个函数，用于连接多个条件，表示逻辑与运算。例如：

```python
from sqlalchemy import and_
from sqlalchemy import select
from sqlalchemy import Table, MetaData

metadata = MetaData()
users = Table('users', metadata, autoload=True)

stmt = select([users]).where(and_(users.c.age > 18, users.c.country == 'USA'))
```

在 SQLAlchemy 中，`&` 运算符也可以用于连接多个条件，表示逻辑与运算。例如：

```python
from sqlalchemy import select
from sqlalchemy import Table, MetaData

metadata = MetaData()
users = Table('users', metadata, autoload=True)


stmt = select([users]).where((users.c.age > 18) & (users.c.country == 'USA'))
```

区别

* SQL 中：`AND` 是关键字，用于连接多个条件。`&` 是一个位运算符，用于执行位与运算（实际很少使用）。

* SQLAlchemy 中 `and_()` 用于连接多个条件的函数，`&` 运算符是 SQLAlchemy 中连接多个条件的运算符。

在 SQLAlchemy 中，`and_()` 函数和 `&` 运算符都可以用于连接多个条件，但是 `and_()` 函数更为常用和推荐。

​

其他博客参考：[https://zhuanlan.zhihu.com/p/466056973](https://zhuanlan.zhihu.com/p/466056973 "https://zhuanlan.zhihu.com/p/466056973")

​

​

#### 案例1

```python
from sqlalchemy import Column, DateTime, String, Integer, ForeignKey, func
from sqlalchemy.orm import relationship, backref
from sqlalchemy.ext.declarative import declarative_base
 
Base = declarative_base()
 
class Department(Base):
    __tablename__ = 'department'
    id = Column(Integer, primary_key=True)
    name = Column(String)
 
class Employee(Base):
    __tablename__ = 'employee'
    id = Column(Integer, primary_key=True)
    name = Column(String)

    # Use default=func.now() to set the default hiring time
    # of an Employee to be the current time when an
    # Employee record was created
    hired_on = Column(DateTime, default=func.now())
    department_id = Column(Integer, ForeignKey('department.id'))

    # Use cascade='delete,all' to propagate the deletion of a Department onto its Employees
    department = relationship(
        Department,
        backref=backref('employees',
                         uselist=True,
                         cascade='delete,all'))
 
from sqlalchemy import create_engine
engine = create_engine('sqlite:///orm_in_detail.sqlite')
 
from sqlalchemy.orm import sessionmaker
session = sessionmaker()
session.configure(bind=engine)
Base.metadata.create_all(engine)
```

#### 案例2

```python
# coding: utf-8
import json
import hashlib
from sqlalchemy.orm import mapped_column
from sqlalchemy.sql.sqltypes import Integer, String, DateTime, Text, BigInteger
from sqlalchemy.sql.schema import Index, ForeignKey

class Activity():
    __tablename__ = 'Activity'
    id = mapped_column(BigInteger, primary_key=True, autoincrement=True)
    op_type = mapped_column(String(length=128), nullable=False)
    op_user = mapped_column(String(length=255), nullable=False)
    obj_type = mapped_column(String(length=128), nullable=False)
    timestamp = mapped_column(DateTime, nullable=False, index=True)
    repo_id = mapped_column(String(length=36), nullable=False)
    commit_id = mapped_column(String(length=40))
    path = mapped_column(Text, nullable=False)
    detail = mapped_column(Text, nullable=False)

    def __init__(self, record):
        super().__init__()
        self.op_type = record['op_type']
        self.obj_type = record['obj_type']
        self.repo_id = record['repo_id']
        self.timestamp = record['timestamp']
        self.op_user = record['op_user']
        self.path = record['path']
        self.commit_id = record.get('commit_id', None)
        detail = {}
        detail_keys = ['size', 'old_path', 'days', 'repo_name', 'obj_id', 'old_repo_name']
        for k in detail_keys:
            if k in record and record.get(k, None) is not None:
                detail[k] = record.get(k, None)
        self.detail = json.dumps(detail)

    def __str__(self):
        return 'Activity<id: %s, type: %s, repo_id: %s>' %

```

​
