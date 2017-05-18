# -*- python -*-

# Animal Class
# Create a class called Animal:
# - attributes:
#   - name
#   - health
#     - Give a new Animal 100 health when it gets created.
# - methods:
#   - walk
#     - When the walk() method is invoked, have the health decrease by 1.
#   - run
#     - When the run() method is invoked, have the health decrease by 5.
#   - displayHealth
#     - When the displayHealth() method is invoked, display on screen the name of the Animal and the health.

class Animal(object):
    def __init__( self, name ):
        self.name = name
        self.health = 100

    def walk( self ):
        self.health -= 1

    def run( self ):
        self.health -= 5

    def displayHealth( self ):
        print "The health of {} {} is {}".format( "Animal", self.name, self.health )
