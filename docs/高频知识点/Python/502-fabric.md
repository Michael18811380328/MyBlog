## 502-fabric

* **分类**：远程部署与自动化工具

* **功能**：通过 SSH 远程执行命令、上传文件，用于自动化部署、服务器管理等。

* **PyPI**：<https://pypi.org/project/fabric/>

* **GitHub**：<https://github.com/fabric/fabric>

* **推荐使用**：适合简单的远程操作自动化，复杂场景可考虑 Ansible，推荐。

* **基本案例**：创建 `fabfile.py`：

```python
from fabric import task
@task
def deploy(c):
    c.run('echo "Deploying..."')  # 远程执行命令
    c.put('local_file.txt', '/remote/path/')  # 上传文件
```

运行：`fab -H user@host deploy`
