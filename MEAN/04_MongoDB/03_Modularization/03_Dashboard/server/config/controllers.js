// -*- javascript -*-

let bodyParser = require('body-parser');

var mongoose = require( 'mongoose' );
var Animal = mongoose.model( 'Animal' );

module.exports = function( app, ANIMAL_TYPES ) {
  app.use(bodyParser.urlencoded({ extended: true }));

  // CRUD:READ -- ALL
  app.get('/', function(req, res) {
    console.log( "Server: RECEIVED route:", req.method, req.url ); // DEBUG
    Animal.find({}).sort('-createdAt').exec( function(err, all_animals) {
      res.render( 'index', {all_animals: all_animals} );
    });
  });

  // CRUD:CREATE -- VIEW
  app.get('/animals/new', function(req, res) {
    console.log( "Server: RECEIVED route:", req.method, req.url ); // DEBUG
    res.render( 'create', { ANIMAL_TYPES: ANIMAL_TYPES } );
  });

  // CRUD:CREATE -- ACTION
  app.post('/animals/create', function(req, res) {
    console.log( "Server: RECEIVED route:", req.method, req.url, req.body ); // DEBUG
    let animal = new Animal( req.body );
    animal.save( function( err ) {
      if( err ) {
        // TODO: Should re-render /animals/create with error messages and previous form data
        // Example: res.render( '<VIEW>', { ..., errors: quote.errors } );
        for( let error in animal.errors ) {
          console.log( err.message );
        }
        res.redirect( '/' );
      }
      else {
        console.log( "Server: ACTION: POST /animals/create:", animal._id ); // DEBUG
        res.redirect( "/animals/" + animal._id );
      }
    });
  });

  // CRUD:READ -- ONE
  app.get('/animals/:id', function(req, res) {
    console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
    Animal.find({ _id: req.params.id }, function(err, animal) {
      res.render( 'view', { animal: animal[0] } );
    });
  });

  // CRUD:UPDATE -- VIEW
  app.get('/animals/edit/:id', function(req, res) {
    console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
    Animal.find({ _id: req.params.id }, function(err, animal) {
      res.render( 'edit', { animal: animal[0], ANIMAL_TYPES: ANIMAL_TYPES } );
    });
  });

  // CRUD:UPDATE -- ACTION
  app.post('/animals/update/:id', function(req, res) {
    console.log( "Server: RECEIVED route:", req.method, req.url, req.params, req.body ); // DEBUG
    Animal.find({ _id: req.params.id }, function( err, animal ) {
      animal[0].type = req.body.type;
      animal[0].name = req.body.name;
      animal[0].age = req.body.age;
      animal[0].save( function( err ) {
        if( err ) throw err;
        res.redirect( "/animals/" + animal[0]._id );
      });
    });
  });

  // CRUD:DELETE -- ONE ACTION
  app.post('/animals/delete/:id', function(req, res) {
    console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
    Animal.remove({ _id: req.params.id }, function( err ) {
      if( err ) throw err;
      res.redirect( '/' );
    });
  });
}
