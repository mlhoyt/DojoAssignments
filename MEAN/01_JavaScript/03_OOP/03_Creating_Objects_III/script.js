// -*- javascript -*-

// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers

class VehicleConstructor {
  constructor( name, number_of_wheels, number_of_passengers, speed ) {
    // ---------- Private Fields (by convention) ----------
    this._distance_travelled = 0;

    // ---------- Public Fields ----------
    this.name = name;
    this.number_of_wheels = number_of_wheels;
    this.number_of_passengers = number_of_passengers;
    this.speed = speed;

    this.vin = this._generate_vin();
  }

  // ---------- Private Methods (by convention) ----------
  _generate_vin() {
    return( 1 + Math.floor( Math.random() * 1000 ) );
  }

  _updateDistanceTravelled() {
    this._distance_travelled += this.speed;
  }
}

VehicleConstructor.prototype.makeNoise = function() {
  console.log( "Beep!" );
}

VehicleConstructor.prototype.move = function() {
  this._updateDistanceTravelled();
  this.makeNoise();
}

VehicleConstructor.prototype.checkMiles = function() {
  console.log( this._distance_travelled );
}

// Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.

// ######################################################################
// Testing
// ######################################################################

// Using the constructor, create a Bike
bike = new VehicleConstructor( "Bike", 2, 1, 4 );
// Redefine the Bike’s makeNoise method to print “ring ring!”
bike.makeNoise = function() {
  console.log( "ring ring!" );
}
bike.makeNoise();
console.log( "VIN:", bike.vin );

// Create a Sedan
sedan = new VehicleConstructor( "Sedan", 4, 2, 10 );
// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
sedan.makeNoise = function() {
  console.log( "Honk Honk!" );
}
sedan.makeNoise();
console.log( "VIN:", sedan.vin );

// Create a Bus
bus = new VehicleConstructor( "Bus", 4, 2, 6 );
// Add a method that takes in the number of passengers to pick up and adds them to the passenger count​
bus.addPassengers = function( number_of_riders ) {
  this.number_of_passengers += number_of_riders;
  console.log( this.name, "picked up", number_of_riders, "passengers for a total of", this.number_of_passengers );
}
bus.makeNoise();
bus.addPassengers( 2 );
bus.addPassengers( 10 );
bus.addPassengers( 4 );

// console.log( bus.distance_travelled );
// #=> undefined
// console.log( bus.updateDistanceTravelled() );
// #=> TypeError: bus.updateDistanceTravelled is not a function
bus.checkMiles();
bus.move();
bus.checkMiles();
bus.move();
bus.checkMiles();
console.log( "VIN:", bus.vin );
