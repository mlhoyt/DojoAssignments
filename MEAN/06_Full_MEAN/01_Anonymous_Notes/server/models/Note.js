// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let NoteSchema = new mongoose.Schema(
    {
      // Unique Field/s
      // {{FIELD_NAME}}: {
      //   type: {{String, Number, Date}},
      //   [ required: {{true, false}}, ]
      //   [ minlength: {{Number}} }, ]
      //   [ maxlength: {{Number}} }, ]
      //   [ min: {{Number|new Date('YYYY-MM-DD')}} }, ]
      //   [ max: {{Number|new Date('YYYY-MM-DD')}} }, ]
      //   [ enum: globals.{{DATA}}_TYPES, ]
      // },
      text: {
        type: String,
        required: true,
        minlength: 3,
      }
    },
    {
      timestamps: true,
    }
  );

  let Note = mongoose.model( 'Note', NoteSchema );
}
