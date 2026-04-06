## 601-apscheduler

Task scheduling library for Python 定期运行任务

[https://github.com/agronholm/apscheduler/tree/3.x](https://github.com/agronholm/apscheduler/tree/3.x "https://github.com/agronholm/apscheduler/tree/3.x")

```text
pip install apscheduler
```

Advanced Python Scheduler（APScheduler）是一个Python库，它允许您将Python代码安排在以后执行，无论是一次还是定期执行。您可以随时添加新作业或删除旧作业。如果你将作业存储在数据库中，它们也会在调度程序重启后幸存下来并保持其状态。重新启动调度程序后，它将运行脱机时应该运行的所有作业。

APScheduler 由 4 个核心部分组成，理解它们能快速掌握使用逻辑：

| 组件                   | 作用                                                           |
| -------------------- | ------------------------------------------------------------ |
| **调度器 (Scheduler)​** | 核心控制器，负责管理任务的添加、删除、启动 / 停止，关联触发器和执行器；                        |
| **触发器 (Trigger)​**   | 定义任务的执行时机（如间隔 5 分钟、每天 8 点执行）；                                |
| **执行器 (Executor)​**  | 负责执行任务（如线程池 `ThreadPoolExecutor`、进程池 `ProcessPoolExecutor`）； |
| **任务 (Job)​**        | 被调度的具体任务（函数 / 方法）；                                           |

#### 触发器说明

APScheduler 提供 3 种常用触发器（最常用的是 `CronTrigger`）：

1. **date 触发器**：仅在指定**具体日期时间**执行一次（如 2026-03-25 10:00:00）；

2. **interval 触发器**：按**固定时间间隔**重复执行（如每隔 10 分钟、每小时）；

3. **cron 触发器**：按 CRON 表达式执行（兼容 Linux CRON 语法，支持复杂定时，如每天 8 点、每周一 18 点）。

案例：集成到 Flask 中运行

```python
from flask import Flask
from apscheduler.schedulers.background import BackgroundScheduler
import datetime

app = Flask(__name__)

def flask_job():
    print(f"Flask 定时任务执行 - {datetime.datetime.now()}")

# 创建非阻塞调度器，必须指定 timezone="Asia/Shanghai"，否则默认使用 UTC 时间，会比北京时间晚 8 小时
scheduler = BackgroundScheduler(timezone="Asia/Shanghai")

# 添加任务：每 10 秒执行一次
scheduler.add_job(flask_job, 'interval', seconds=10)

# 启动 Flask 时，启动调度器
@app.before_first_request
def start_scheduler():
    if not scheduler.running:
        scheduler.start()

# 停止 Flask 时关闭调度器
@app.teardown_appcontext
def shutdown_scheduler(exception=None):
    if scheduler.running:
        scheduler.shutdown()

@app.route('/')
def index():
    return "Flask + APScheduler 运行中！"

if __name__ == "__main__":
    app.run(debug=True)
```

​
