// -*- javascript -*-

var express = require( "express" );
var bodyParser = require('body-parser');

var app = express();

app.use( express.static( __dirname + "/static" ) );
app.use( bodyParser.urlencoded( {extended: true} ) );

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( "/", function( request, response ) {
  response.send( "<h1>Hello Express</h1>" );
});

app.get( "/users", function( req, resp ) {
  // hard-coded user data
  var users_array = [
    {name: "Michael", email: "michael@codingdojo.com"},
    {name: "Jay", email: "jay@codingdojo.com"},
    {name: "Brendan", email: "brendan@codingdojo.com"},
    {name: "Andrew", email: "andrew@codingdojo.com"}
  ];
  resp.render( 'users', {users: users_array} );
});

app.get( "/users/:id", function( req, resp ) {
  resp.send( "<h1>Requested user id: " + req.params.id + "</h1>" );
});

app.get( "/form", function( req, resp ) {
  resp.render( 'form' );
});

app.post( "/show_form", function( req, resp ) {
  console.log( "POST data:", req.body );
  resp.redirect( "/users" );
});

app.listen( 8000, function() {
  console.log( "Server listening on port 8000" );
});
