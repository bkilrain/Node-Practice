var http = require('http');
var handleRequest = require('./requestHandler');

var port = 3000;
var ip = '127.0.0.1';

var server = http.createServer(handleRequest.requestHandler);
console.log('listening on http://' + ip + ':' + port);
server.listen(port, ip);