# -*- python -*-

# Optional Assignment: Store

# Now, let's build a store to contain our products by making a store class and putting our products into an array.

# Store class:
# - Attributes:
#   - products: an array of products objects
#   - location: store address
#   - owner: store owner's name
# - Methods:
#   - add_product: add a product to the store's product list
#   - remove_product: should remove a product according to the product name
#   - inventory: print relevant information about each product in the store
#
# You should be able to test your classes by instantiating new objects of each class
# and using the outlined methods to demonstrate that they work.

from Store import *

print "Testing ..."
print "Testing instantiation ..."
store1 = Store( "Master Yoda", "Dagobah" )
print "Testing add_product ..."
store1.add_product( Product( 120.00, "Jiu-Jitsu Gi", 1.5, "Tatami", 75.00, "for sale" ) )
print "Testing inventory ..."
store1.inventory()
print "Testing add_product ..."
store1.add_product( Product( 40.00, "No-Gi Shorts", 0.25, "Rebels", 15.00, "for sale" ) )
print "Testing add_product ..."
store1.add_product( Product( 50.00, "Training Backpack", 3.75, "Trainees", 20.00, "used" ) )
print "Testing inventory ..."
store1.inventory()
print "Testing remove_product ..."
store1.remove_product( "Jiu-Jitsu Gi" )
print "Testing inventory ..."
store1.inventory()
