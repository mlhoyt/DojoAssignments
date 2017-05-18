# -*- python -*-

# Create an instance of the Dragon, have it:
# - walk() three times,
# - run() twice,
# - fly() twice,
# - displayHealth().
# When the Dragon's displayHealth() function is called, it should say 'this is a dragon!' before it displays the default information.
# You can achieve this by calling the parent's displayHealth() function.

import Animal

class Dragon(Animal.Animal):
    def __init__( self, name ):
        super( Dragon, self ).__init__( name )
        self.health = 170

    def fly( self ):
        self.health -= 10

    def displayHealth( self ):
        print "This is a dragon!",
        super( Dragon, self ).displayHealth()
