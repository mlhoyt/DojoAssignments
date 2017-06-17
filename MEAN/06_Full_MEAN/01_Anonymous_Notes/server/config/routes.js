// -*- javascript -*-

let bodyParser = require( 'body-parser' );

module.exports = function( globals ) {
  // globals.app.use( bodyParser.urlencoded( { extended: true } ) );
  globals.app.use( bodyParser.json() );

  // let mongoose = require( 'mongoose' );
  // let {{TABLE_NAME}} = mongoose.model( '{{TABLE_NAME}}' );
  // let {{TABLE_NAME}}_ctrlr = require( '../controllers/{{TABLE_NAME}}.js' );

  // globals.app.{{HTTP_TYPE}}( '{{URL}}/:{{PARAM}}', function( req, res ) {
  //   // res.json( {{data, true }} )
  //   // {{TABLE_NAME}}_ctrlr.{{CTRLR_METHOD}}( req, res )
  // })
  // ...
}

