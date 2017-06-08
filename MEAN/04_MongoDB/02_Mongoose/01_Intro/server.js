// -*- javascript -*-

let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let WEB_SERVER_PORT = 8000;

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// ---------- MVC:MODEL (DB (MongoDB) SERVER CONNECTION)
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mongoose_intro');

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

mongoose.model('User', UserSchema);

var User = mongoose.model('User');

// ---------- MVC:CONTROLLER (Routing)
app.get('/', function(req, res) {
  User.find({}, function(err, all_users) {
    if (err) throw err;
    res.render( 'index', { "all_users": all_users } );
  });
});

app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);
  var user = new User({name: req.body.name, age: req.body.age});
  user.save(function(err) {
    if( err ) {
      console.log('Server: something went wrong adding form data to database');
    } else {
      console.log('Server: successfully added user to database');
    }
  })
  res.redirect('/');
});

// ---------- WEB SERVER
app.listen( WEB_SERVER_PORT, function() {
    console.log( "Server listening on port ", WEB_SERVER_PORT );
});
