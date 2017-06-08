// -*- javascript -*-

// ---------- DEPENDENCIES
let express = require( "express" );

// ---------- CONSTANTS
let LOCATIONS = [
  "Seattle",
  "Los Angeles",
  "Silicon Valley",
  "Washington DC",
  "Dallas",
  "Chicago",
  "Tulsa",
];

let LANGUAGES = [
  "JavaScript",
  "Python",
  "Swift",
  "C#",
  "Java",
  "Ruby",
  "PHP",
  "Perl",
  "C/C++",
  "Scala",
];

// ---------- APP
let app = express();

// ---------- STATIC
app.use( express.static( __dirname + "/static" ) );

// ---------- VIEWS
app.set( "views", __dirname + "/views" );
app.set( "view engine", "ejs" );

// ---------- CONTROLLER::ROUTES
app.get( "/", function( req, resp ) {
  resp.render( "index", { all_locations: LOCATIONS, all_languages: LANGUAGES } );
});

// ---------- SERVER
let SERVER_PORT = 8000

let server = app.listen( SERVER_PORT, function() {
  console.log( "Server listening on port 8000" );
});

// ---------- SOCKETS
var io = require( "socket.io" ).listen( server );

io.sockets.on( "connection", function( socket ) {
  console.log( "Server-side socket connected: " + socket.id );

  socket.on( "posting_form", function( data ) {
    console.log( "Server: socket: RECEIVED_EVENT: posting_form" );
    socket.emit( "updated_message", {
      "message": "You emitted the following information to the server:" + JSON.stringify( data )
    });
    console.log( "Server: socket: SENT_EVENT: updated_message" );
    socket.emit( "random_number", {
      "random_number": "Your lucky number emitted by the server is " + String( 1 + Math.floor( Math.random() * 1000 ) )
    });
    console.log( "Server: socket: SENT_EVENT: random_number" );
  });
});
