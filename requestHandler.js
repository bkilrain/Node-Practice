var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

exports.requestHandler = function(request, response) {
  console.log('serving request type ' + request.method + 'for url ' + request.url);

  var headers = defaultCorsHeaders;
  response.writeHead(200, headers);
  response.end('Hello World');
};

