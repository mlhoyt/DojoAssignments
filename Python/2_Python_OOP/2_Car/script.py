# -*- python -*-

# Assignment: Car

# Create a class called Car.
# In the__init__(), allow the user to specify the following
# - attributes:
#   - price
#   - speed
#   - fuel
#   - mileage
#
# If the price is greater than 10,000, set the tax to be 15%.
# Otherwise, set the tax to be 12%.
#
# Create six different instances of the class Car.
# In the class have a method called display_all() that returns all the information about the car as a string.
# In your __init__(), call this display_all() method to display information about the car once the attributes have been defined.
#
# A sample output would be like this:
#
# Price: 2000
# Speed: 35mph
# Fuel: Full
# Mileage: 15mpg
# Tax: 0.12
# Price: 2000
# Speed: 5mph
# Fuel: Not Full
# Mileage: 105mpg
# Tax: 0.12
# Price: 2000
# Speed: 15mph
# Fuel: Kind of Full
# Mileage: 95mpg
# Tax: 0.12
# Price: 2000
# Speed: 25mph
# Fuel: Full
# Mileage: 25mpg
# Tax: 0.12
# Price: 2000
# Speed: 45mph
# Fuel: Empty
# Mileage: 25mpg
# Tax: 0.12
# Price: 20000000
# Speed: 35mph
# Fuel: Empty
# Mileage: 15mpg
# Tax: 0.15


class Car( object ):
    def __init__( self, price, speed, fuel, mileage ):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 0.12
        if self.price > 10000:
            self.tax = 0.15
        self.display_all()

    def display_all( self ):
        print "Price:", self.price
        print "Speed:", "{}mph".format( self.speed )
        print "Fuel:", self.fuel
        print "Mileage:", "{}mpg".format( self.mileage )
        print "Tax:", self.tax


car1 = Car(  9000,  80, "Full", 70 )
car2 = Car( 10000, 100, "Not Full", 50 )
car3 = Car( 15000, 120, "Kind of Full", 40 )
car4 = Car( 20000, 125, "Full", 30 )
car5 = Car( 30000, 130, "Empty", 25 )
car6 = Car( 50000, 190, "Almost Empty", 20 )
