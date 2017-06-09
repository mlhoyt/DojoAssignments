// -*- javascript -*-

let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let moment = require('moment');

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

mongoose.connect('mongodb://localhost/quoting_redux');

var QuoteSchema = new mongoose.Schema({
  user: { type: String, required: true, minlength: 3 },
  message: { type: String, required: true, minlength: 3 },
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);

var Quote = mongoose.model('Quote');

// ---------- MVC:CONTROLLER (Routing)
app.get('/', function(req, res) {
  res.render( 'index', {} );
});

app.post('/quotes', function(req, res) {
  var quote = new Quote( req.body );
  quote.save(function(err) {
    if( err ) {
      res.render( 'index', { errors: quote.errors } );
    } else {
      res.redirect( '/quotes' );
    }
  })
});

app.get('/quotes', function(req, res) {
  Quote.find({}).sort('-createdAt').exec( function(err, all_quotes) {
    if (err) throw err;
    res.render( 'quotes', { "all_quotes": all_quotes, moment: moment } );
  });
});

// ---------- WEB SERVER
app.listen( WEB_SERVER_PORT, function() {
    console.log( "Server listening on port ", WEB_SERVER_PORT );
});
