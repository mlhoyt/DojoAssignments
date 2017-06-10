// -*- javascript -*-

// let bodyParser = require('body-parser');

module.exports = function( globals ) {
  // globals.app.use( bodyParser.urlencoded( { extended: true } ) );
  // globals.app.use( bodyParser.json() );

  let person = require( "../controllers/person.js" );

  globals.app.get( '/', function( req, res ) {
    person.show_all( req, res );
  });

  globals.app.get( '/new/:name', function( req, res ) {
    person.create( req, res );
  });

  globals.app.get( '/remove/:name', function( req, res ) {
    person.remove( req, res );
  });

  globals.app.get( '/:name', function( req, res ) {
    person.show_one( req, res );
  });
};
