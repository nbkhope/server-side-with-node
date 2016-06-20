// Require Modules
var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
    // console.log(req.headers);
    //
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('<h1>Hello World!!</h1>');

    // Log the request URL and method
    console.log('Request for ' + req.url + ' by method ' +req.method);

    // For GET requests, do this
    if (req.method === 'GET') {
      var fileUrl;

      // Home Page redirects to Index
      if (req.url === '/') {
        fileUrl = '/index.html';
      }
      else {
        fileUrl = req.url;
      }

      // Our pages are located inside the /public directory
      var filePath = path.resolve('./public' + fileUrl);
      // Determine the filename extension
      var fileExt = path.extname(filePath);

      // If the request is looking for an HTML file, we can handle it
      if (fileExt === '.html') {

        fs.exists(filePath, function(exists) {
          // If the file does not exist, send back an error
          if (!exists) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>Error 404: ' + fileUrl + ' was not found</h1>');
            return;
          }
          else { // file exists
            res.writeHead(200, { 'Content-Type': 'text/html' });
            // Pipe the HTML file to the response data
            fs.createReadStream(filePath).pipe(res);
          }
        });

      }
      else { // not an HTML file!
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Error 404: ' + fileUrl + ' is not an HTML file!!</h1>');
      }
    }
    else { // Not a GET request!
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Error 404: ' + req.method + ' not supported by our humble server :(</h1>');
    }
});

// Start the server
server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
