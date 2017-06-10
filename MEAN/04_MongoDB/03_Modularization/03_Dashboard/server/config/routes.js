// -*- javascript -*-

let bodyParser = require('body-parser');

module.exports = function( globals ) {
  globals.app.use( bodyParser.urlencoded( { extended: true } ) );

  let animals = require( "../controllers/animals.js" )( globals );

  globals.app.get( '/', function( req, res ) {
    animals.show_all_view( req, res );
  });

  globals.app.get( '/animals/new', function( req, res ) {
    animals.create_view( req, res, globals );
  });

  globals.app.post( '/animals/create', function( req, res ) {
    animals.create_action( req, res );
  });

  globals.app.get( '/animals/:id', function( req, res ) {
    animals.show_one_view( req, res );
  });

  globals.app.get('/animals/edit/:id', function(req, res) {
    animals.edit_view( req, res, globals );
  });

  globals.app.post('/animals/update/:id', function(req, res) {
    animals.edit_action( req, res );
  });

  globals.app.post('/animals/delete/:id', function(req, res) {
    animals.delete_one_action( req, res );
  });
}
