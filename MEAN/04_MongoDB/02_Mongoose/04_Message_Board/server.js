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
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/message_board');

var Schema = mongoose.Schema;

let PostSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    text: { type: String, required: true, minlength: 1 },
    _comments: [{type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

let CommentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3 },
    text: { type: String, required: true, minlength: 1 },
    _post: {type: Schema.Types.ObjectId, ref: "Post" },
  },
  { timestamps: true }
);

mongoose.model( 'Post', PostSchema );
mongoose.model( 'Comment', CommentSchema );

let Post = mongoose.model( 'Post' );
let Comment = mongoose.model( 'Comment' );

// ---------- MVC:CONTROLLER (Routing)
// CRUD:READ -- ALL
app.get( '/', function( req, res ) {
  console.log( "Server: RECEIVED route:", req.method, req.url ); // DEBUG
  Post.find({})
    .populate('_comments')
    .exec( function( err, all_posts ) {
      res.render( 'index', { all_posts: all_posts } );
    });
});

// CRUD:CREATE -- ACTION
app.post('/posts/create', function(req, res) {
  console.log( "Server: RECEIVED route:", req.method, req.url, req.body ); // DEBUG
  let post = new Post( req.body );
  post.save( function( err ) {
    if( err ) {
      res.redirect( '/' );
    }
    else {
      console.log( "Server: ACTION: POST /posts/create:", post._id ); // DEBUG
      res.redirect( "/" );
    }
  });
});

// CRUD:CREATE -- ACTION
app.post('/comments/create/:id', function(req, res) {
  console.log( "Server: RECEIVED route:", req.method, req.url, req.body ); // DEBUG
  Post.findOne( { _id: req.params.id }, function( err, post ) {
    let comment = new Comment( req.body );
    comment._post = post._id;
    comment.save( function( err ) {
      if( err ) throw err;
      console.log( "Server: ACTION: POST /comments/create/", post._id ); // DEBUG
      post._comments.push( comment );
      post.save( function( err ) {
        if( err ) throw err;
        res.redirect( "/" );
      });
    });
  });
});

// // CRUD:READ -- ONE
// app.get('/animals/:id', function(req, res) {
//   console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
//   Animal.find({ _id: req.params.id }, function(err, animal) {
//     res.render( 'view', { animal: animal[0] } );
//   });
// });
//
// // CRUD:UPDATE -- VIEW
// app.get('/animals/edit/:id', function(req, res) {
//   console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
//   Animal.find({ _id: req.params.id }, function(err, animal) {
//     res.render( 'edit', { animal: animal[0], ANIMAL_TYPES: ANIMAL_TYPES } );
//   });
// });
//
// // CRUD:UPDATE -- ACTION
// app.post('/animals/update/:id', function(req, res) {
//   console.log( "Server: RECEIVED route:", req.method, req.url, req.params, req.body ); // DEBUG
//   Animal.find({ _id: req.params.id }, function( err, animal ) {
//     animal[0].type = req.body.type;
//     animal[0].name = req.body.name;
//     animal[0].age = req.body.age;
//     animal[0].save( function( err ) {
//       if( err ) throw err;
//       res.redirect( "/animals/" + animal[0]._id );
//     });
//   });
// });
//
// // CRUD:DELETE -- ONE ACTION
// app.post('/animals/delete/:id', function(req, res) {
//   console.log( "Server: RECEIVED route:", req.method, req.url, req.params ); // DEBUG
//   Animal.remove({ _id: req.params.id }, function( err ) {
//     if( err ) throw err;
//     res.redirect( '/' );
//   });
// });

// ---------- WEB SERVER
app.listen( WEB_SERVER_PORT, function() {
    console.log( "Server listening on port ", WEB_SERVER_PORT ); // INFO
});
