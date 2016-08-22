var handleRequest = require('../requestHandler')

exports.handleMovies = function(request, response) {
  var headers = handleRequest.defaultCorsHeaders;
  if (request.method === 'GET') {
    response.writeHead(200, headers);
    response.end('GET: Movies');
  } else if (request.method === 'POST') {
    response.writeHead(201, headers);
    response.end('POST: Movies');
  } else if (request.method === 'OPTIONS') {

  } else {

  }
}