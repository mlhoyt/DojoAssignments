// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
require( './server/config/models.js' );
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./client/static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
require( './server/config/routes.js' )( app );
// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
