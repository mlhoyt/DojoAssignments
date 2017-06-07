// -*- javascript -*-

// JS Fundamentals Part II

// #1 - Turn the following problems from JS Fundamentals Part I into functions that take variable inputs
// - Create a simple for loop that sums all the integers between x and y (inclusive).
//   - Have it console log the final sum.
// - Write a loop that will go through an array, find the minimum value, and then return it
// - Write a loop that will go through an array, find the average of all of the values, and then return it

function sigma_n1_to_n2( n1, n2 ) {
  sigma = 0;

  if( n1 < n2 ) {
    for( var i = n1; i <= n2; ++i ) {
      sigma += i;
    }
  }
  else {
    for( var i = n2; i <= n1; ++i ) {
      sigma += i;
    }
  }

  console.log( "Info: sigma_n1_to_n2(", n1, ",", n2, "):", sigma );
}

function Array_min( arr ) {
  var min = arr[0];

  for( var i = 1; i < arr.length; ++i ) {
    if ( arr[i] < min ) {
      min = arr[i];
    }
  }

  return( min );
}

function Array_avg( arr ) {
  var sum = 0;
  for( var i = 0; i < arr.length; ++i ) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return( avg );
}

sigma_n1_to_n2( 1, 10 ); // #=> 55
arr1 = [1, 5, 90, 25, -3, 0];
console.log( "Info: Array_min(", arr1, "):", Array_min( arr1 ) ); // #=> -3
console.log( "Info: Array_avg(", arr1, "):", Array_avg( arr1 ) ); // #=>19.666...

// #2 - Rewrite these 3 as anonymous functions assigned to variables.

var f_sigma = sigma_n1_to_n2;
var f_Array_min = Array_min;
var f_Array_avg = Array_avg;

f_sigma( 1, 10 );
console.log( "Info: f_Array_min(", arr1, "):", f_Array_min( arr1 ) ); // #=> -3
console.log( "Info: f_Array_avg(", arr1, "):", f_Array_avg( arr1 ) ); // #=>19.666...

// #3 - Rewrite these as methods of an object

myObject = {
  f_sigma: sigma_n1_to_n2,
  f_Array_min: Array_min,
  f_Array_avg: Array_avg,
};

myObject.f_sigma( 1, 10 );
console.log( "Info: myObject.f_Array_min(", arr1, "):", myObject.f_Array_min( arr1 ) ); // #=> -3
console.log( "Info: myObject.f_Array_avg(", arr1, "):", myObject.f_Array_avg( arr1 ) ); // #=>19.666...

// #4 - Create a JavaScript object called person with the following properties/methods
// - Properties
//   - name - set this as your own name
//   - distance_traveled - set this initially as zero
// - Methods
//   - say_name:
//     - Alert the object’s name property
//   - say_something: one parameter.
//     - Say “{{name}} says {{parameter}}”
//   - walk
//     - Alert “{{name}} is walking”
//     - Increase distance_traveled by 3
//   - run
//     - Alert “{{name}} is running”
//     - Increase distance_traveled by 10
//   - crawl
//     - Alert “{{name}} is crawling”
//     - Increase distance_traveled by 1

person = {
  name: "Firstname Lastname",
  distance_traveled: 0,
  say_name: function() {
    console.log( "Alert: object:person: say_name:", person.name );
  },
  say_something: function( msg ) {
    console.log( "Info: object:person: say_something:", person.name, "says", msg );
  },
  crawl: function() {
    person.distance_traveled += 1;
    console.log( "Alert: object:person: crawl:", person.name, "is crawling", "-- distance_traveled:", person.distance_traveled );
    return( person );
  },
  walk: function() {
    person.distance_traveled += 3;
    console.log( "Alert: object:person: walk:", person.name, "is walking", "-- distance_traveled:", person.distance_traveled );
    return( person );
  },
  run: function() {
    person.distance_traveled += 10;
    console.log( "Alert: object:person: run:", person.name, "is running", "-- distance_traveled:", person.distance_traveled );
    return( person );
  },
};

person.say_name();
person.say_something( "it looks good on you though... (eye-roll)" );
person.crawl();
person.walk().run();
console.log( "Info: person.distance_traveled:", person.distance_traveled );

// What should your methods return?

// Answer: In this case, probably distance traveled.  Eventually we will move on to classes where we can
// return "this" and chain the methods.
// Answer (updated): I did not previously realize that we could/would use "this" with objects as well.
