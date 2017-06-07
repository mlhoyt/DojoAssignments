// -*- javascript -*-

// ---------- DEPENDENCIES
let express = require( "express" );
let bodyParser = require( "body-parser" );

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

// ---------- POST data
app.use( bodyParser.urlencoded( { extended: true } ) );

// ---------- STATIC
app.use( express.static( __dirname + "/static" ) );

// ---------- VIEWS
app.set( "views", __dirname + "/views" );
app.set( "view engine", "ejs" );

// ---------- CONTROLLER::ROUTES
app.get( "/", function( req, resp ) {
  resp.render( "index", { all_locations: LOCATIONS, all_languages: LANGUAGES } );
});

app.post( "/results", function( req, resp ) {
  resp.render( "results", req.body );
});

// ---------- SERVER
let SERVER_PORT = 8000

app.listen( SERVER_PORT, function() {
  console.log( "Server listening on port 8000" );
});
