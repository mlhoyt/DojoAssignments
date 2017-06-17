// -*- javascript -*-

let mongoose = require('mongoose');

let Note = mongoose.model( 'Note' );

module.exports = {
  create: function( req, res, globals ) {
    let item = new Note( req.body );
    item.save()
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  read_all: function( req, res ) {
    Note.find({})
      .sort( '-createdAt')
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  read_one: function( req, res ) {
    Note.findOne({ _id: req.params.id })
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  update: function( req, res ) {
    Note.updateOne({ _id: req.params.id }, {$set: req.body})
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  delete: function( req, res ) {
    Note.remove({ _id: req.params.id })
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },
}
