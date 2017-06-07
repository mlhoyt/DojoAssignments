// -*- javascript -*-

var http = require('http');
var fs = require('fs');

var server = http.createServer( function( request, response ) {
    // Debug
    console.log('client request URL: ', request.url);

    // ------------------------------ HTML ------------------------------
    // HTML - views/cars.html (route = /cars)
    if( request.url === '/cars' ) {
        fs.readFile( 'views/cars.html', 'utf8', function( errors, contents ) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // HTML - views/cats.html (route = /cats)
    else if( request.url === '/cats' ) {
        fs.readFile( 'views/cats.html', 'utf8', function( errors, contents ) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // HTML - views/cars_new.html (route = /cars/new)
    else if( request.url === '/cars/new' ) {
        fs.readFile( 'views/cars_new.html', 'utf8', function( errors, contents ) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // ------------------------------ CSS ------------------------------
    // CSS - /stylesheets/style.css
    else if( request.url === '/stylesheets/style.css' ) {
        fs.readFile( 'stylesheets/style.css', 'utf8', function( errors, contents ) {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    // ------------------------------ IMAGE ------------------------------
    // IMAGE - /images/bumblebee.css
    else if( request.url === '/images/BumbleBee.jpg' ) {
        fs.readFile( './images/BumbleBee.jpg', function( errors, contents ) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    // IMAGE - /images/blur.css
    else if( request.url === '/images/Blurr.jpg' ) {
        fs.readFile( './images/Blurr.jpg', function( errors, contents ) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    // IMAGE - /images/cat1.css
    else if( request.url === '/images/cat1.jpg' ) {
        fs.readFile( './images/cat1.jpg', function( errors, contents ) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    // IMAGE - /images/cat2.css
    else if( request.url === '/images/cat2.jpg' ) {
        fs.readFile( './images/cat2.jpg', function( errors, contents ) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    // ------------------------------ ERROR ------------------------------
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
var server_port = 7077;

server.listen( server_port );

// Debug
console.log( "Running in localhost at port " + server_port );
