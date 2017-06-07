// -*- javascript -*-

var _ = {
   map: function( arr, cb ) {
     rv = [];

     for( var i in arr ) {
       rv.push( cb( arr[i] ) );
     }

     return( rv );
   },
   reduce: function( arr, cb, memo = null ) {
     let rv;
     let s_idx;

     if( memo == null ) {
       rv = arr[0];
       s_idx = 1;
     }
     else {
       rv = memo;
       s_idx = 0;
     }

     for( var i = s_idx; i < arr.length; ++i ) {
       rv = cb( arr[i], rv );
     }
     
     return( rv );
   },
   find: function( arr, cb ) {
     for( var i in arr ) {
       if( cb( arr[i] ) ) {
         return( arr[i] );
       }
     }
     return( undefined );
   },
   filter: function( arr, cb ) {
     rv = [];

     for( var i in arr ) {
       if( cb( arr[i] ) ) {
         rv.push( arr[i] );
       }
     }

     return( rv );
   },
   reject: function( arr, cb ) {
     rv = [];

     for( var i in arr ) {
       if( ! cb( arr[i] ) ) {
         rv.push( arr[i] );
       }
     }

     return( rv );
   }
 }
// you just created a library with 5 methods!

// filter
var evens = _.filter( [1, 2, 3, 4, 5, 6], num => num % 2 == 0 );
console.log( evens ); // #=> [2, 4, 6]
// map
var multBy5 = _.map( [1, 2, 3, 4, 5, 6], num => num * 5 );
console.log( multBy5 ); // #=> [5, 10, 15, 20, 15, 30]
// find
var find4 = _.find( [1, 2, 3, 4, 5, 6], num => num === 4 );
console.log( find4 ); // #=> 4
var find9 = _.find( [1, 2, 3, 4, 5, 6], num => num === 9 );
console.log( find9 ); // #=> undefined
// reject
var odds = _.reject( [1, 2, 3, 4, 5, 6], num => num % 2 == 0 );
console.log( odds ); // #=> [1, 3, 5]
// reduce
var sum = _.reduce( [1, 2, 3, 4, 5, 6], (num, sum) => num + sum );
console.log( sum ); // #=> 21
var sum = _.reduce( [1, 2, 3, 4, 5, 6], (num, sum) => num + sum, 10 );
console.log( sum ); // #=> 31
