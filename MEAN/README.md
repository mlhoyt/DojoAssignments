# MEAN Cookbook
* Parameters
  * {{MEAN_PROJECT}}
  * {{TABLE_NAME}}
  * {{FIELD_NAME}}
* [Project Directory](#project-directory)
* [Database](#_): [Prep](#) - [Setup](#) - [Launch](#)
* [Client](#): [Prep](#) - [Setup](#) - [Launch](#)
* [Server](#): [Prep](#) - [Setup](#) - [Launch](#)
* [Development](#): [Prep](#) - [Database](#) - [Server](#) - [Client](#)
* [Shutdown](#): [Prep](#) - [Client](#) - [Server](#) - [Database](#)

---
# Project Directory
- [ ] `mkdir .../{{MEAN_PROJECT}}`
- [ ] `cd .../{{MEAN_PROJECT}}`
- [ ] `mkdir ./logs`
- [ ] Create `.gitignore`:

```
/db
/logs
```

---
# Database (MongoDB) Prep-Setup-Launch

## Database - Prep
- [ ] `cd .../{{MEAN_PROJECT}}`
- [ ] `which mongod`
- [ ] `mongod --version`

## Database - Setup
- [ ] `mkdir -p ./db/data/db`

## Database - Launch
- [ ] `mongod --dbpath ./db/data/db >& logs/mongod.log &`

---
# Client (Angular) Prep-Setup-Launch

## Client - Prep
- [ ] `cd .../{{MEAN_PROJECT}}`
- [ ] `which ng`
- [ ] `ng --version`

## Client - Setup
- [ ] `ng new client >& logs/ng_new.log`

## Client - Launch
- [ ] `cd client`
- [ ] `ng build -w >& ../logs/ng_build.log &`

---
# Server (Node/Express) Prep-Setup-Launch

## Server - Prep
- [ ] `cd .../{{MEAN_PROJECT}}`
- [ ] `which node`
- [ ] `node --version`
- [ ] `which nodemon`
- [ ] `nodemon --version`

## Server - Setup
- [ ] `mkdir -p server/config`
- [ ] `mkdir -p server/controllers`
- [ ] `mkdir -p server/models`
- [ ] `npm init -y >& logs/npm_init.log`
- [ ] `npm install --save express body-parser mongoose >& logs/npm_install.log`
- [ ] `OPTIONAL: npm install --save express-session >& logs/npm_install.express-session.log`
- [ ] `OPTIONAL: npm install --save moment >& logs/npm_install.moment.log`
- [ ] Create template `server.js`:

```javascript
// -*- javascript -*-

// ----------------------------------------------------------------------
// DEPENDENCIES
// ----------------------------------------------------------------------
let express = require('express');

// ----------------------------------------------------------------------
// GLOBALS
// ----------------------------------------------------------------------
let globals = {};

globals.DB_SERVER_PATH = "localhost";
globals.DB_NAME = "{{MEAN_PROJECT}}";

// globals.{{DATA}}_TYPES: Array<string> = [ ... ];

globals.WEB_SERVER_PORT = 8000;

globals.app = express();

// ----------------------------------------------------------------------
// MVC:MODELS
// ----------------------------------------------------------------------
require( "./server/config/models.js" )( globals );

// ----------------------------------------------------------------------
// MVC:VIEWS
// ----------------------------------------------------------------------
require( "./server/config/views.js" )( globals );

// ----------------------------------------------------------------------
// MVC:CONTROLLERS
// ----------------------------------------------------------------------
require( "./server/config/routes.js" )( globals );

// ----------------------------------------------------------------------
// WEB SERVER
// ----------------------------------------------------------------------
globals.app.listen( globals.WEB_SERVER_PORT, function() {
    console.log( "Server listening on port", globals.WEB_SERVER_PORT ); // INFO
});
```

- [ ] Create boiler-place `server/config/models.js`:

```javascript
// -*- javascript -*-

let mongoose = require('mongoose');
let fs = require('fs');
let path = require('path');

module.exports = function( globals ) {
  mongoose.Promise = global.Promise;

  mongoose.connect( 'mongodb://' + globals.DB_SERVER_PATH + '/' + globals.DB_NAME );

  let models_path = path.join( __dirname, './../models' );

  fs.readdirSync( models_path ).forEach( function( file ) {
    if( file.indexOf( '.js' ) >= 0 ) {
      // require the file (this runs the model file which registers the schema)
      require( models_path + '/' + file )( globals );
    }
  });
}
```

- [ ] Create template `server/models/template.README`:

```javascript
// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let {{TABLE_NAME}}Schema = new mongoose.Schema(
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
      // ...

      // Many-to-* Relationship/s
      // _{{FIELD_NAME}}: [{
      //   type: Schema.Types.ObjectId, ref: "{{TABLE_NAME}}",
      // }],
      // ...

      // One-to-* Relationship/s
      // _{{FIELD_NAME}}: {
      //   type: Schema.Types.ObjectId, ref: "{{TABLE_NAME}}",
      // },
      // ...
    },
    {
      timestamps: true,
    }
  );

  let {{TABLE_NAME}} = mongoose.model( '{{TABLE_NAME}}', {{TABLE_NAME}}Schema );
}
```

- [ ] Create template `server/config/views.js`:

```javascript
// -*- javascript -*-

let express = require( 'express' );
let path = require( 'path' );

module.exports = function( globals ) {
  globals.app.use( express.static( path.join( __dirname, '../../client/dist' ) ) );
  globals.app.use( express.static( path.join( __dirname, '../../node_modules' ) ) );
};
```

- [ ] Create template `server/config/routes.js`:

```javascript
// -*- javascript -*-

let bodyParser = require( 'body-parser' );

module.exports = function( globals ) {
  // globals.app.use( bodyParser.urlencoded( { extended: true } ) );
  globals.app.use( bodyParser.json() );

  // let {{TABLE_NAME}}_ctrlr = require( '../controllers/{{TABLE_NAME}}.js' );

  // globals.app.{{HTTP_TYPE}}( '{{URL}}/:{{PARAM}}', ( req, res ) => {
  //   {{TABLE_NAME}}_ctrlr.{{CTRLR_METHOD}}( req, res )
  // });

  // globals.app.post   ( '{{URL}}',     ( req, res ) => {{TABLE_NAME}}_ctrlr.create   ( req, res ) );
  // globals.app.get    ( '{{URL}}',     ( req, res ) => {{TABLE_NAME}}_ctrlr.read_all ( req, res ) );
  // globals.app.get    ( '{{URL}}/:id', ( req, res ) => {{TABLE_NAME}}_ctrlr.read_one ( req, res ) );
  // globals.app.put    ( '{{URL}}/:id', ( req, res ) => {{TABLE_NAME}}_ctrlr.update   ( req, res ) );
  // globals.app.delete ( '{{URL}}/:id', ( req, res ) => {{TABLE_NAME}}_ctrlr.delete   ( req, res ) );
  // // Default (delegate to front-end router)
  globals.app.all( "*", ( req, res ) => res.sendfile( path.resolve( "./client/dist/index.html" ) ) );
}
```

- [ ] Create template `server/controllers/template.README`:

```javascript
// -*- javascript -*-

let mongoose = require('mongoose');

let {{TABLE_NAME}} = mongoose.model( '{{TABLE_NAME}}' );

module.exports = {
  create: function( req, res ) {
    let item = new {{TABLE_NAME}}( req.body );
    item.save()
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  read_all: function( req, res ) {
    {{TABLE_NAME}}.find({})
      // .sort( '{{FIELD_NAME}}|-{{FIELD_NAME}}') // createdAt, -createdAt
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  read_one: function( req, res ) {
    {{TABLE_NAME}}.findOne({ {{PARAM}}: req.params.{{PARAM}} })
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  update: function( req, res ) {
    {{TABLE_NAME}}.updateOne({ {{PARAM}}: req.params.{{PARAM}} }, {$set: req.body})
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  delete: function( req, res ) {
    {{TABLE_NAME}}.remove({ {{PARAM}}: req.params.{{PARAM}} })
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },
}
```

## Server - Launch
- [ ] `nodemon server.js`

## Server - Test
- [ ] `curl http://localhost:8000`

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /</pre>
</body>
</html>
```

---
# Development Prep-Database-Server-Client

## Prep
- [ ] `cd .../{{MEAN_PROJECT}}`
- [ ] `atom .`

## Database/Server API
- [ ] Create `server/models/{{TABLE_NAME}}.js`
  - [ ] `cat server/models/template.README | perl -pe 's/\{\{TABLE_NAME\}\}/NAME/g' > server/models/NAME.js`
  - [ ] Edit `server/models/NAME.js`
- [ ] Create `server/controllers/{{TABLE_NAME}}.js`
  - [ ] `cat server/controllers/template.README | perl -pe 's/\{\{TABLE_NAME\}\}/NAME/g' > server/controllers/NAME.js`
  - [ ] Edit `server/controllers/NAME.js`
- [ ] Update `server/config/routes.js` for {{TABLE_NAME}}, {{URL}}
- [ ] Test API

## Client Database API Service/s
- [ ] `cd .../{{MEAN_PROJECT}}/client/`
- [ ] `ng generate service {{TABLE_NAME}}-api`
- [ ] Edit `src/app/{{TABLE_NAME}}-api.service.ts`
- [ ] Edit `src/app/app.module.ts`: Register {{TABLE_NAME}}-api.service

## Client External API Service/s
- [ ] `cd .../{{MEAN_PROJECT}}/client/`
- [ ] `ng generate service {{EXTERNAL}}-api`
- [ ] Edit `src/app/{{EXTERNAL}}-api.service.ts`
- [ ] Edit `src/app/app.module.ts`: Register {{EXTERNAL}}-api.service

## Client Component/s
- [ ] `cd .../{{MEAN_PROJECT}}/client/`
- [ ] `ng generate component {{NAME}}`
- [ ] `cd ./src/app/{{NAME}}`
- [ ] `ng generate class {{TABLE_NAME}}`
- [ ] Edit `src/app/{{NAME}}/{{TABLE_NAME}}.ts`: Effectively to match `server/models/{{TABLE_NAME}}.js`
- [ ] OPTIONAL: `ng generate component {{SUB_NAME}}`

---
# Shutdown

## Prep
- [ ] `cd .../{{MEAN_PROJECT}}`

## Shutdown - Client
- [ ] `ps -u ${LOGNAME} | grep '@angular/cli' | perl -ne '/^\s*\d+\s+(\d+)\s*tty/ && do { print( "kill -INT ${1}\n" ); exit; }'`

## Shutdown - Server
- [ ] `<ctrl>+c`

## Shutdown - Database
- [ ] `cat logs/mongod.log | perl -ne '/starting\s*:\s*pid=(\d+)/ && system( "kill -INT ${1}" );'`
