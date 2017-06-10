// -*- javascript -*-

let express = require('express');
let path = require('path');
// let moment = require('moment');

module.exports = function( globals ) {
  globals.app.use( express.static( path.join( __dirname, '../../client/static' ) ) );
  // globals.app.use( express.static( path.join( __dirname, './node_modules' ) ) );

  globals.app.set( 'views', path.join( __dirname, '../../client/views' ) );
  globals.app.set( 'view engine', 'ejs' );
}
