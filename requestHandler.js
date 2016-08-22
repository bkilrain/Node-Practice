var movies = require('./handlers/handleMovies');
var directors = require('./handlers/handleDirectors')

exports.defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

exports.requestHandler = function(request, response) {
  console.log('serving request type ' + request.method + 'for url ' + request.url);

  console.log(request.url);
  if (request.url === '/movies') {
    movies.handleMovies(request, response);

  } else if (request.url === '/directors') {
    directors.handleDirectors(request, response);
  } else {

  var headers = exports.defaultCorsHeaders;
  response.writeHead(200, headers);
  response.end('Hello World');
    
  }
  








};

