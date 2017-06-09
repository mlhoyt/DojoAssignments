// -*- javascript -*-

let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
// let moment = require('moment');

let WEB_SERVER_PORT = 8000;

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './static')));
// app.use(express.static(path.join(__dirname, './node_modules')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// ---------- MVC:MODEL (DB (MongoDB) SERVER CONNECTION)
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/animals_dashboard');

var ANIMAL_TYPES = [
  'Wolf',
  'Coyote',
  'Elk',
  'Deer',
  'Antelope',
  'Turkey',
  'Pheasant',
  'Grouse',
];

var AnimalSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, enum: ANIMAL_TYPES },
    name: { type: String, required: true, minlength: 3 },
    age: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

mongoose.model('Animal', AnimalSchema);

var Animal = mongoose.model( 'Animal' );

// ---------- MVC:CONTROLLER (Routing)
// VIEW_ALL
app.get('/', function(req, res) {
  console.log( "Server: RECEIVED route:", req.method, req.url ); // DEBUG
  Animal.find({}).sort('-createdAt').exec( function(err, all_animals) {
    res.render( 'index', {all_animals: all_animals} );
  });
});

// CREATE_VIEW
app.get('/animals/new', function(req, res) {
  console.log( "Server: RECEIVED route:", req.method, req.url ); // DEBUG
  res.render( 'create', { ANIMAL_TYPES: ANIMAL_TYPES } );
});

// CREATE_ACTION
app.post('/animals/create', function(req, res) {
  console.log( "Server: RECEIVED route:", req.method, req.url, req.body ); // DEBUG
  let animal = new Animal( req.body );
  animal.save( function( err ) {
    if( err ) {
      // TODO: Should re-render /animals/create with error messages and previous form data
      for( let error in animal.errors ) {
        console.log( err.message );
      }
      res.redirect( '/' );
    }
    else {
      console.log( "Server: ACTION: POST /animals/create:", animal._id ); // DEBUG
      res.redirect( '/animals/<%= animal._id %>' );
    }
  });
});

// VIEW_ONE
app.get('/animals/:id', function(req, res) {
  console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
  Animal.find({ _id: req.params.id }, function(err, animal) {
    res.render( 'view', { animal: animal[0] } );
  });
});

// app.post('/quotes', function(req, res) {
//   var quote = new Quote( req.body );
//   quote.save(function(err) {
//     if( err ) {
//       res.render( 'index', { errors: quote.errors } );
//     } else {
//       res.redirect( '/quotes' );
//     }
//   })
// });
//
// app.get('/quotes', function(req, res) {
//   Quote.find({}).sort('-createdAt').exec( function(err, all_quotes) {
//     if (err) throw err;
//     res.render( 'quotes', { "all_quotes": all_quotes, moment: moment } );
//   });
// });

// ---------- WEB SERVER
app.listen( WEB_SERVER_PORT, function() {
    console.log( "Server listening on port ", WEB_SERVER_PORT ); // INFO
});
