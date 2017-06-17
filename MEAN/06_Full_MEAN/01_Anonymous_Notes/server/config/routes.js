// -*- javascript -*-

let bodyParser = require( 'body-parser' );

module.exports = function( globals ) {
  // globals.app.use( bodyParser.urlencoded( { extended: true } ) );
  globals.app.use( bodyParser.json() );

  let Note_ctrlr = require( '../controllers/Note.js' );

  globals.app.post   ( '/notes',     ( req, res ) => Note_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/notes',     ( req, res ) => Note_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/notes/:id', ( req, res ) => Note_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/notes/:id', ( req, res ) => Note_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/notes/:id', ( req, res ) => Note_ctrlr.delete   ( req, res ) );
  // Default (delegate to front-end router)
  globals.app.all( "*", ( req, res ) => res.sendfile( path.resolve( "./public/dist/index.html" ) ) );
}
