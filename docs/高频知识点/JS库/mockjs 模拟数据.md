# mockjs 模拟数据

可以用于前后端模拟数据进行调试

```javascript
const Mock = require('mockjs');
const Random = Mock.Random;

const data = Mock.mock(
	{
		id: '',
		title: Random.cparagraph(1, 5),
		time: Random.datetime('yyyy-MM-dd'),
		author: Random.cname(),
	}
);

```


