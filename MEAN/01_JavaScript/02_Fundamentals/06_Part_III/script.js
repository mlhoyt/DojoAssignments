// -*- javascript -*-

// JS Fundamentals Part III

// Create a function that takes in one parameter called “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.

function myFunction( name ) {
  myObject = {
    name: name,
    distance_traveled: 0,
    say_name: function() {
      console.log( "Alert: object: say_name:", myObject.name );
    },
    say_something: function( msg ) {
      console.log( "Info: object: say_something:", myObject.name, "says", msg );
    },
    crawl: function() {
      myObject.distance_traveled += 1;
      console.log( "Alert: object: crawl:", myObject.name, "is crawling", "-- distance_traveled:", myObject.distance_traveled );
      return( myObject );
    },
    walk: function() {
      myObject.distance_traveled += 3;
      console.log( "Alert: object: walk:", myObject.name, "is walking", "-- distance_traveled:", myObject.distance_traveled );
      return( myObject );
    },
    run: function() {
      myObject.distance_traveled += 10;
      console.log( "Alert: object: run:", myObject.name, "is running", "-- distance_traveled:", myObject.distance_traveled );
      return( myObject );
    },
  };

  return( myObject );
}

person = myFunction( "Firstname Lastname" );
person.say_name();
person.say_something( "it looks good on you though... (eye-roll)" );
person.crawl();
person.walk().run();
console.log( "Info: person.distance_traveled:", person.distance_traveled );

// Running this in your terminal as you create it can be super helpful since we aren’t manipulating the DOM!

// The returned object should have a name property that is set to the value of the name argument that was passed into the function. Each returned person object should also have the other properties from JS Fundamentals Part II:
// distance_traveled - set this initially as zero say_name - should alert the object’s name property say_something - have it accept a parameter. It should then say for example “Jay says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method. walk - have it alert for example “Jay is walking” and increase distance_traveled by 3 run - have it alert for example “Jay is running” and increase distance_traveled by 10 crawl - have it alert for example “Jay is crawling” and increase distance_traveled by 1
// Note that in all of the above examples “Jay” is the placeholder for the object’s name property.

// Change the function name to “personConstructor”
// We just created a blueprint for creating person objects!

function personConstructor( name ) {
  myObject = {
    name: name,
    distance_traveled: 0,
    say_name: function() {
      console.log( "Alert: object: say_name:", myObject.name );
    },
    say_something: function( msg ) {
      console.log( "Info: object: say_something:", myObject.name, "says", msg );
    },
    crawl: function() {
      myObject.distance_traveled += 1;
      console.log( "Alert: object: crawl:", myObject.name, "is crawling", "-- distance_traveled:", myObject.distance_traveled );
      return( myObject );
    },
    walk: function() {
      myObject.distance_traveled += 3;
      console.log( "Alert: object: walk:", myObject.name, "is walking", "-- distance_traveled:", myObject.distance_traveled );
      return( myObject );
    },
    run: function() {
      myObject.distance_traveled += 10;
      console.log( "Alert: object: run:", myObject.name, "is running", "-- distance_traveled:", myObject.distance_traveled );
      return( myObject );
    },
  };

  return( myObject );
}

// If you have prior exposure to OOP, think about how this “constructor” function is similar to “classes”.

// Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).

function ninjaConstructor( name, cohort ) {
  BeltEnum = {
    Enum: {
      WHITE:  { name: "white",  value: 0, },
      YELLOW: { name: "yellow", value: 1, },
      ORANGE: { name: "orange", value: 2, },
      GREEN:  { name: "green",  value: 3, },
      BLUE:   { name: "blue",   value: 4, },
      BROWN:  { name: "brown",  value: 5, },
      PURPLE: { name: "purple", value: 6, },
      BLACK:  { name: "black",  value: 7, },
    },
    next: function() {
      for( obj in this.Enum ) {
        if( this.Enum[ obj ].value == this.level.value + 1 ) {
          this.level = this.Enum[ obj ];
          break;
        }
      }
    },
    name: function() {
      return( this.level.name );
    }
  };
  BeltEnum.level = BeltEnum.Enum.YELLOW;

  myObject = {
    name: name,
    cohort: cohort,
    belt_level: BeltEnum,
    levelUp: function() {
      myObject.belt_level.next();
    },
    show: function() {
      console.log(
        "Info: object: show:",
        "name:", myObject.name,
        "cohort:", myObject.cohort,
        "belt_level:", myObject.belt_level.name()
      );
    },
  };

  return( myObject );
}

ninja = ninjaConstructor( "CDojo Student", "2017-04" );
ninja2 = ninjaConstructor( "CDojo Student2", "2017-03" );

ninja.show();
ninja2.show();

ninja.levelUp();
ninja2.levelUp();
ninja2.levelUp();

ninja.show();
ninja2.show();

// If you're already familiar with JavaScript, you may know that most developers use a combination of the "this" and "new" keywords to create objects. Avoid those for this assignment -- we'll dig into them soon enough.
