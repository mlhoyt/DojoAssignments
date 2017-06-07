// -*- javascript -*-

// Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"].
var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
// Log each value.
for( var i = 0; i < x.length; ++i ) {
  console.log( x[i] );
}
// Add a new value (100) in the array x using a push method.
x.push( 100 );
// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x.
x.push( ["hello", "world", "JavaScript is Fun"] );
// Log x in the console and analyze how x looks now.
console.log( x );
// Create a simple for loop that sums all the numbers between 1 to 500.
sum = 0;
for( var i = 1; i <= 500; ++i ) {
  sum += i;
}
// Have console log the final sum.
console.log( "Sum of numbers from 1 to 500:", sum )
// Write a loop that will:
// - go through the array [1, 5, 90, 25, -3, 0],
// - find the minimum value,
// - and then print it
var y = [1, 5, 90, 25, -3, 0];
var min = y[0];
for( var i = 1; i < y.length; ++i ) {
  if ( y[i] < min ) {
    min = y[i];
  }
}
console.log( "min(", y, "):", min );
// Write a loop that will:
// - go through the array [1, 5, 90, 25, -3, 0],
// - find the average of all of the values,
// - and then print it
var sum = 0;
for( var i = 0; i < y.length; ++i ) {
  sum += y[i];
}
avg = sum / y.length;
console.log( "avg(", y, "):", avg );

var newNinja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaScript', //like that's even a question!
  dojo: 'Dallas'
};
for( k in newNinja ) {
  console.log( "key:", k, "value:", newNinja[k] );
}
