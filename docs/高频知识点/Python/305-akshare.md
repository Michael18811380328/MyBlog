## 305-akshare

AKShare is an elegant and simple financial data interface library for Python, built for human beings!&#x20;

[https://github.com/akfamily/akshare](https://github.com/akfamily/akshare "https://github.com/akfamily/akshare")

开源财经数据接口库

一款基于 Python 的开源金融数据接口库。提供了股票、期货、期权、基金、数字货币等金融产品的基本数据、实时和历史行情数据、衍生数据，包含数据采集、数据清洗、到数据落地的一套开源工具。满足了金融数据科学家、数据科学爱好者在金融数据获取方面的需求。示例代码：

```python
import akshare as ak

bond_df = ak.bond_spot_deal()

print(bond_df)
```

结果

```text
   债券简称 成交净价(元) 最新收益率(%)  涨跌(BP) 加权收益率(%) 交易量(亿)
0          19国开15   98.97   3.5750    1.00   3.5826   None
1        19附息国债03   99.82   2.7714    0.14   2.7772   None
2        19附息国债11   99.87   2.8000    0.25   2.7963   None
3        19附息国债04  100.82   2.9832   -1.54   2.9747   None
4        15附息国债05  102.95   3.0359   -1.41   3.0359   None
```

​
