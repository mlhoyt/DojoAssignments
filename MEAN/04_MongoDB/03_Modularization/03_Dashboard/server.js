// -*- javascript -*-

// ----------------------------------------------------------------------
// DEPENDENCIES
// ----------------------------------------------------------------------
let express = require('express');

// ----------------------------------------------------------------------
// GLOBALS
// ----------------------------------------------------------------------
let globals = {};

globals.WEB_SERVER_PORT = 8000;

const ANIMAL_TYPES = [
  'Wolf',
  'Coyote',
  'Elk',
  'Deer',
  'Antelope',
  'Turkey',
  'Pheasant',
  'Grouse',
];

let app = express();

// ----------------------------------------------------------------------
// MVC:MODELS
// ----------------------------------------------------------------------
require( "./server/config/models.js" )( { ANIMAL_TYPES: ANIMAL_TYPES } );

// ----------------------------------------------------------------------
// MVC:VIEWS
// ----------------------------------------------------------------------
require( "./server/config/views.js" )( app );

// ----------------------------------------------------------------------
// MVC:CONTROLLERS
// ----------------------------------------------------------------------
require( "./server/config/controllers.js" )( app, ANIMAL_TYPES );

// ----------------------------------------------------------------------
// WEB SERVER
// ----------------------------------------------------------------------
app.listen( globals.WEB_SERVER_PORT, function() {
    console.log( "Server listening on port", globals.WEB_SERVER_PORT ); // INFO
});
