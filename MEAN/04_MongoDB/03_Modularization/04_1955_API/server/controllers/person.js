// -*- javascript -*-

var mongoose = require( 'mongoose' );
var Person = mongoose.model( 'Person' );

module.exports = {
  show_all: function( req, res ) {
    Person.find( {} )
      .exec( function( err, query ) {
        res.json( query );
      });
  },

  show_one: function( req, res ) {
    Person.findOne( { name: req.params.name } )
      .exec( function( err, query ) {
        res.json( query );
      });
  },

  create: function( req, res ) {
    let person = new Person();
    person.name = req.params.name;
    person.birthday = new Date( req.query.birthday );
    person.save( function( err, query ) {
      if( err ) {
        for( let error in person.errors ) {
          console.log( err.message );
        }
        res.json( query );
      }
      else {
        res.json( person );
      }
    });
  },

  remove: function( req, res ) {
    Person.remove( { name: req.params.name }, function( err, query ) {
      if( err ) {
        for( let error in person.errors ) {
          console.log( err.message );
        }
        res.json( null );
      }
      else {
        res.json( query );
      }
    });
  },
};
