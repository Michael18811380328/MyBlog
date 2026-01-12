# debug

<https://www.npmjs.com/package/debug> 

A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers.

```javascript
var debug = require('debug')('http');
var http = require('http');
var name = 'My App';

debug('booting %o', name);

http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, function(){
  debug('listening');
});

// fake worker of some kind

require('./worker');

```


