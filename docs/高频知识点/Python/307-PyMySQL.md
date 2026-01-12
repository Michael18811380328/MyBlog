## 307-PyMySQL

[https://pypi.org/project/PyMySQL/](https://pypi.org/project/PyMySQL/ "https://pypi.org/project/PyMySQL/")

* **连接 MySQL 数据库**: pymysql 库提供了一个连接 MySQL 数据库的接口，允许开发者使用 Python 代码连接和操作 MySQL 数据库。

* **执行 SQL 语句**: pymysql 库提供了一个执行 SQL 语句的接口，允许开发者使用 Python 代码执行 SQL 语句，例如创建表、插入数据、更新数据、删除数据等。

* **获取数据**: pymysql 库提供了一个获取数据的接口，允许开发者使用 Python 代码获取 MySQL 数据库中的数据。

新建数据库表

```sql
CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) COLLATE utf8_bin NOT NULL,
    `password` varchar(255) COLLATE utf8_bin NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin 
```

```python
import pymysql.cursors

connection = pymysql.connect(host='localhost',
                             user='user',
                             password='passwd',
                             database='db',
                             cursorclass=pymysql.cursors.DictCursor)

with connection:
    with connection.cursor() as cursor:
        # Create a new record
        sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
        cursor.execute(sql, ('webmaster@python.org', 'very-secret'))

    # connection is not auto commit by default. So you must commit to save your change
    connection.commit()

    with connection.cursor() as cursor:
        # Read a single record
        sql = "SELECT `id`, `password` FROM `users` WHERE `email`=%s"
        cursor.execute(sql, ('webmaster@python.org',))
        result = cursor.fetchone()
        print(result)
```

案例2

```python
import pymysql

# 连接 MySQL 数据库
conn = pymysql.connect(
    host='localhost',
    port=3306,
    user='root',
    password='password',
    database='mydb'
)

# 获取游标对象
cur = conn.cursor()

# 执行 SQL 语句
cur.execute("SELECT * FROM mytable")

# 获取数据
data = cur.fetchall()

# 打印数据
for row in data:
    print(row)

# 关闭游标对象
cur.close()

# 关闭连接
conn.close()
```

​
