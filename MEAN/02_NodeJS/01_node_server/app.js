// -*- javascript -*-

// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');

// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);


    // File type:	Headers:
    // HTML	        => {'Content-Type': 'text/html'}
    // CSS	        => {'Content-Type': 'text/css'}
    // Javascript	  => {'Content-Type': 'text/javascript'}
    // png/jpeg/gif	=> {'Content-Type': 'image/<TYPE>'}

    // this is how we do routing:
    if( request.url === '/' ) {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if( request.url === '/style.css' ) {
        fs.readFile('style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if( request.url === '/action.js' ) {
        fs.readFile('action.js', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            response.write(contents);
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

// tell your server which port to run on
server.listen(6789);

// print to terminal window
console.log("Running in localhost at port 6789");
