## 805-playwright

Playwright 是微软开源的**自动化浏览器库**，支持 Python/JS/.NET/Java 多语言，专门用来做网页自动化、爬虫、UI 自动化测试。


相比 Selenium 它最大优势：**开箱即用、自动装浏览器、稳定无环境坑、支持多浏览器、自带等待、拦截网络、模拟移动端**。

例如下面爬取不同页面

```python
from playwright.sync_api import sync_playwright, expect

# 测试用例：登录 SeaTicket 官网页面

BASE_URL = "https://seaticket.ai/"

def log_info(msg):
    from datetime import datetime
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{now}] {msg}")


def run_seafile_test():
    with sync_playwright() as p:
        # 启动浏览器，headless=True 无头静默运行
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(viewport={'width': 1280, 'height': 720})
        page = context.new_page()

        try:
            log_info("开始访问 SeaTicket 官网")

            # 1. 校验页面正常访问 - 使用循环遍历所有页面路径
            pages_to_test = [
                "",  # 首页
                "integrations/",
                "pricing/",
                "about/",
                "terms-of-service/",
                "privacy/",
                "solutions/github-issues-resolving/",
                "solutions/discourse-forum-issues-resolving/",
                "solutions/software-user-community-support/",
                "solutions/support-emails-resolving/",
            ]

            errors = []
            page.on("pageerror", lambda err: errors.append(str(err)))

            for path in pages_to_test:
                url = BASE_URL + path
                log_info(f"开始测试页面 {url}")
                try:
                    # 增加超时时间到15秒，并等待网络空闲
                    page.goto(url, timeout=10000)
                    page.wait_for_load_state("networkidle", timeout=10000)
                    
                    expect(page).not_to_have_title("404")
                    expect(page).not_to_have_title("500")
                    log_info(f"✅ 页面 {url} 访问正常，无404/500错误")
                    page.wait_for_timeout(1000)
                    
                    # 检查当前页面是否有JS错误
                    if errors:
                        log_info(f"⚠️ 页面 {url} 存在JS错误：{errors}")
                        errors.clear()  # 清空错误列表，准备下一页
                    else:
                        log_info(f"✅ 页面 {url} 无JS控制台异常")
                        
                except Exception as e:
                    log_info(f"❌ 页面 {url} 访问失败：{str(e)}")
                    continue  # 继续测试下一个页面

            log_info("===== 所有基础功能测试完成 =====")

        except Exception as e:
            log_info(f"❌ 测试异常中断：{str(e)}")
        finally:
            browser.close()

if __name__ == "__main__":
    run_seafile_test()
```

​
