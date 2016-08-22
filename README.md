# Node-Practice
Practice with node and express

# Server Practice

## Level 0 - Bare Node
* Make a server in bare node (meaning no express) that responds to all requests with 'hello world'
* Ensure you can start your server and receive a response 

## Level 1 - Bare Node
* Add a route called `/movies` that accepts both get and post requests and responds with 'POST: movies' or 'GET: movies'
* Add a route called `/directors` that accepts both get and post requests and responds with 'POST: directors' or 'GET: directors'
* Ensure you can start your server and recieve the appropriate responses 

## Level 2 - Express
* Refactor your server to respond in the exact same way, but with express
* Ensure you can start your server and recieve the appropriate responses 

## Level 3 - Express
* Refactor the `/movies` route to accept an object in the body of a POST request to that route and store it in an memory array
  - The object should look like this: 
  ```
  {
    title: 'Hackers',
    director: 'Ian Softley',
    year: 1996
  }
  ```
* Refactor the `/directors` route to accept an object in the body of a POST request to that route and store it in an memory array
  - The object should look like this: 
  ```
  {
    name: 'Ian Softley'
    hometown: 'London, England'
  }
  ```

## Level 4 - Express
* Refactor the `/directors` route to return a list of previously added directors in response to a GET request to that route
* Refactor the `/movies` route to return a list of previously added movies in response to a GET request to that route

## Level 5 - Express
* Refactor the `/directors` and `/movies` routes to accept a key word search parameter in a GET request, and only return directors or movies matching that specific search
* Refactor the `/movies` routes to accept a year parameter, and only return movies newer than that year

## Level 6 - Express
* Create a basic front end and connect it to your server - to do this, you'll need to get your server to serve static files
