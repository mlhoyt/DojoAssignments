# -*- python -*-

# Dog Class
# Create a class called Dog that inherits everything that the Animal does:
# - the Dog class should have a default health of 150
# - a new method called pet(), which increases the health by 5.

import Animal

class Dog(Animal.Animal):
    def __init__( self, name ):
        super( Dog, self ).__init__( name )
        self.health = 150

    def pet( self ):
        self.health += 5
