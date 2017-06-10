// -*- javascript -*-

let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

let WEB_SERVER_PORT = 8000;

let app = express();

// MVC:MODELS
require( './server/config/models.js' );

// MVC:VIEWS
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
// MVC:VIEWS -- STATIC content configration
app.use(express.static(path.join(__dirname, "./client/static")));

// MVC:CONTROLLERS -- POST-data processing configuration
app.use(bodyParser.urlencoded({ extended: true }));
// MVC:CONTROLLERS
require( './server/config/routes.js' )( app );

// SERVER
app.listen( WEB_SERVER_PORT, function() {
  console.log( "Server: listening on port", WEB_SERVER_PORT );
});
