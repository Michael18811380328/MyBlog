## 603-arrow

* `arrow` 则提供更简洁、人性化的日期时间操作 API。这里以 `arrow` 为例。

* **PyPI**：<https://pypi.org/project/arrow/>

* **GitHub**：<https://github.com/arrow-py/arrow>

* **推荐使用**：`datetime` 推荐，`arrow` 按需推荐（更易用）。

```text
import arrow
now = arrow.now()
print(now.format('YYYY-MM-DD HH:mm:ss'))
```

​
