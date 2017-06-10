// -*- javascript -*-
let mongoose = require('mongoose');

module.exports = function( globals ) {
  let AnimalSchema = new mongoose.Schema(
    {
      type: { type: String, required: true, enum: globals.ANIMAL_TYPES },
      name: { type: String, required: true, minlength: 3 },
      age: { type: Number, required: true, min: 1 },
    },
    { timestamps: true }
  );

  let Animal = mongoose.model( 'Animal', AnimalSchema );
}
