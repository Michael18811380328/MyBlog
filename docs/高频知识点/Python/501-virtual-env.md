## 501-virtual-env

创建隔离的 Python 环境，避免项目间依赖冲突，比内置 `venv` 支持更多 Python 版本。

**推荐使用**：适合需要跨 Python 版本兼容的场景，简单场景可用内置 `venv`，推荐。

```python
# 安装
pip install virtualenv

# 创建虚拟环境
virtualenv myenv

# 激活（Linux/macOS）
source myenv/bin/activate
```

​
