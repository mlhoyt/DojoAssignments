// -*- javascript -*-

// Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers

function VehicleConstructor( name, number_of_wheels, number_of_passengers ) {
  var vehicle = {};

  vehicle.name = name;
  vehicle.number_of_wheels = number_of_wheels;
  vehicle.number_of_passengers = number_of_passengers;

  // Each vehicle should have a makeNoise method
  vehicle.makeNoise = function() {
    console.log( "Beep!" );
  }

  return vehicle;
}

// Using the constructor, create a Bike
bike = VehicleConstructor( "Bike", 2, 1 );
// Redefine the Bike’s makeNoise method to print “ring ring!”
bike.makeNoise = function() {
  console.log( "ring ring!" );
}
bike.makeNoise();

// Create a Sedan
sedan = VehicleConstructor( "Sedan", 4, 2 );
// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
sedan.makeNoise = function() {
  console.log( "Honk Honk!" );
}
sedan.makeNoise();

// Create a Bus
bus = VehicleConstructor( "Bus", 4, 2 );
// Add a method that takes in the number of passengers to pick up and adds them to the passenger count​
bus.addPassengers = function( number_of_riders ) {
  this.number_of_passengers += number_of_riders;
  console.log( this.name, "picked up", number_of_riders, "passengers for a total of", this.number_of_passengers );
}
bus.makeNoise();
bus.addPassengers( 2 );
bus.addPassengers( 10 );
bus.addPassengers( 4 );
