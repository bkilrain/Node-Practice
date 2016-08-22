var handleRequest = require('../requestHandler')

exports.handleDirectors = function(request, response) {
  var headers = handleRequest.defaultCorsHeaders;
  if (request.method === 'GET') {
    response.writeHead(200, headers);
    response.end('GET: Directors');
  } else if (request.method === 'POST') {
    response.writeHead(201, headers);
    response.end('POST: Directors');
  } else if (request.method === 'OPTIONS') {

  } else {

  }
}