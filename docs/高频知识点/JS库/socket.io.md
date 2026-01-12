# socket.io

socket 服务端程序

[https://github.com/socketio/socket.io](https://github.com/socketio/socket.io "https://github.com/socketio/socket.io")

Socket.IO enables real-time bidirectional event-based communication. It consists of:

* a Node.js server (this repository)

* a [Javascript client library](https://github.com/socketio/socket.io-client) for the browser (or a Node.js client)

```javascript
io.on('connection', socket => {
  socket.emit('request', /* … */); // emit an event to the socket
  io.emit('broadcast', /* … */); // emit an event to all connected sockets
  socket.on('reply', () => { /* … */ }); // listen to the event
});
```

​
