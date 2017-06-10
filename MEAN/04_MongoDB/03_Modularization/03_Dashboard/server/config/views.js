// -*- javascript -*-

// let express = require('express');
// let path = require('path');

module.exports = function( app, express, path ) {
  app.use( express.static( path.join( __dirname, '../../client/static' ) ) );
  // app.use( express.static( path.join( __dirname, './node_modules' ) ) );

  app.set( 'views', path.join( __dirname, '../../client/views' ) );
  app.set( 'view engine', 'ejs' );
}
