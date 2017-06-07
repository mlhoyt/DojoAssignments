// -*- javascript -*-

// // What happens if you do the following?
// // - Will it throw an error?
// // - What will it print, if it doesn't throw an error?
// console.log(a);
// // #=> undefined
// var a = "weird";
// 
// // How about this?
// console.log(typeof(b));
// // #=> undefined
// var b = "weird too";
// console.log(typeof(b));
// // #=> string

var myArray = [ "Hello", ",", "World", "!" ];
console.log( myArray );
// #=> [ 'Hello', ',', 'World', '!' ]
myArray.push( "grok" );
console.log( myArray );
// #=> [ 'Hello', ',', 'World', '!', 'grok' ]
var rv = myArray.pop();
console.log( myArray );
// #=> [ 'Hello', ',', 'World', '!' ]
console.log( rv );
// #=> grok

