// -*- javascript -*-
let mongoose = require('mongoose');

module.exports = function( globals ) {
  let PersonSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, minlength: 3 },
      birthday: { type: Date, required: true, min: new Date('1955-01-01'), max: new Date('1955-12-31') },
    },
    {
      timestamps: true,
    }
  );

  let Person = mongoose.model( 'Person', PersonSchema );
}
