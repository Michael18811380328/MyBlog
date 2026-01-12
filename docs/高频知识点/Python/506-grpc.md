## 506-grpc

* **功能**：Google 开发的高性能 RPC（远程过程调用）框架，支持多语言，基于 Protocol Buffers。

* **PyPI**：<https://pypi.org/project/grpcio/>

* **GitHub**：<https://github.com/grpc/grpc>

* **推荐使用**：推荐，高性能 RPC 场景必备。

```text
# 服务端示例（简化）
import grpc
from concurrent import futures
import helloworld_pb2
import helloworld_pb2_grpc
class Greeter(helloworld_pb2_grpc.GreeterServicer):
    def SayHello(self, request, context):
        return helloworld_pb2.HelloReply(message=f"Hello, {request.name}!")
server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
helloworld_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
server.add_insecure_port('[::]:50051')
server.start()
```

​
