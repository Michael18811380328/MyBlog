## 23-pip freeze

导出当前环境的所有包到 requirements.txt，便于换另一个环境重新安装依赖

```text
pip freeze > requirements.txt
```

和 pip list 的区别

`pip list`（手动查看当前环境的依赖）和 `pip freeze`（包括版本号，格式满足导出依赖到 requirements.txt）
