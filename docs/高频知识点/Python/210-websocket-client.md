## 210-websocket-client

* **功能**：提供 WebSocket 客户端功能，用于与 WebSocket 服务器进行双向通信。

* **PyPI**：<https://pypi.org/project/websocket-client/>

* **GitHub**：<https://github.com/websocket-client/websocket-client>

* **推荐使用**：推荐，WebSocket 客户端常用。

```python
import websocket
def on_message(ws, message):
    print(message)
ws = websocket.WebSocketApp("ws://echo.websocket.events/", on_message=on_message)
ws.run_forever()
```

​
