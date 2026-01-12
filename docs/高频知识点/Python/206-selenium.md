## 206-selenium

**Selenium**: 是一个用于自动化 web 浏览器的 python 工具，可以模拟用户的行为，执行 JavaScript 代码，并获取渲染后的 HTML 内容

[https://github.com/seleniumhq/selenium](https://github.com/seleniumhq/selenium "https://github.com/seleniumhq/selenium")

实际使用：request 只能爬取 html，不能获取 api 加载后的信息，selenium 可以获取这部分信息

这个库功能很强大，目前只用在爬虫后获取信息等操作

```python
from selenium import webdriver

# 创建一个 WebDriver 实例
driver = webdriver.Chrome()

# 访问网页
driver.get("https://www.example.com")

# 获取渲染后的 HTML 内容
html = driver.page_source

# 关闭 WebDriver
driver.quit()
```

复杂测试案例

* launch a new Chrome browser

* load the Selenium documentation page

* find the “Webdriver” link

* click the “WebDriver” link

* close the browser

```python
from selenium import webdriver
from selenium.webdriver.common.by import By


driver = webdriver.Chrome()

driver.get('https://selenium.dev/documentation')
assert 'Selenium' in driver.title

elem = driver.find_element(By.ID, 'm-documentationwebdriver')
elem.click()
assert 'WebDriver' in driver.title

driver.quit()
```

​
