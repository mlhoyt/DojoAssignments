// -*- javascript -*-

var mongoose = require( 'mongoose' );
var Animal = mongoose.model( 'Animal' );

module.exports = function( globals ) {
  return {
    show_all_view: function( req, res ) {
      console.log( "Server: RECEIVED route:", req.method, req.url ); // DEBUG
      Animal.find( {} )
        .sort( '-createdAt' )
        .exec( function( err, query ) {
          res.render( 'index', { all_animals: query } );
        });
    },

    show_one_view: function( req, res ) {
      console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
      Animal.findOne({ _id: req.params.id }, function( err, query ) {
        res.render( 'view', { animal: query } );
      });
    },

    create_view: function( req, res, globals ) {
      console.log( "Server: RECEIVED route:", req.method, req.url ); // DEBUG
      res.render( 'create', globals );
    },

    create_action: function( req, res ) {
      console.log( "Server: RECEIVED route:", req.method, req.url, req.body ); // DEBUG
      let animal = new Animal( req.body );
      animal.save( function( err ) {
        if( err ) {
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
    },

    edit_view: function( req, res, globals ) {
      console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
      Animal.findOne({ _id: req.params.id }, function( err, query ) {
        res.render( 'edit', { animal: query, ANIMAL_TYPES: globals.ANIMAL_TYPES } );
      });
    },

    edit_action: function( req, res ) {
      console.log( "Server: RECEIVED route:", req.method, req.url, req.params, req.body ); // DEBUG
      Animal.findOne({ _id: req.params.id }, function( err, query ) {
        query.type = req.body.type;
        query.name = req.body.name;
        query.age = req.body.age;
        query.save( function( err ) {
          if( err ) throw err;
          res.redirect( "/animals/" + query._id );
        });
      });
    },

    delete_one_action: function( req, res ) {
      console.log( "Server: RECEIVED route:", req.method, req.url, req.params, req.body ); // DEBUG
      Animal.remove({ _id: req.params.id }, function( err ) {
        if( err ) throw err;
        res.redirect( '/' );
      });
    },
  };
};
