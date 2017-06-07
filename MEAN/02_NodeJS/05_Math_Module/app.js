// -*- javascript -*-

var mathlib = require( "./mathlib" )();

console.log( "mathlib.add( 2, 3 ) =", mathlib.add( 2, 3 ) );
console.log( "mathlib.multiply( 2, 3 ) =", mathlib.multiply( 2, 3 ) );
console.log( "mathlib.square( 3 ) =", mathlib.square( 3 ) );
for( let i = 0; i < 10; ++i ) {
  console.log( "mathlib.random( 3, ", (3 + i + 1), " ) =", mathlib.random( 3, (3 + i + 1) ) );
  console.log( "mathlib.random( 3, ", (3 + i + 1), " ) =", mathlib.random( 3, (3 + i + 1) ) );
  console.log( "mathlib.random( 3, ", (3 + i + 1), " ) =", mathlib.random( 3, (3 + i + 1) ) );
}
