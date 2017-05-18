# -*- python -*-

# Assignment: Product

# The owner of a store wants a program to track products.
# Create a product class to fill the following requirements:
# - attributes:
#   - Price
#   - Item Name
#   - Weight
#   - Brand
#   - Cost
#   - Status: default "for sale"
# - methods:
#   - Sell: changes status to "sold"
#   - Add tax: takes a parameter tax as a decimal amount and returns the price of the item including sales tax
#   - Return: takes a parameter reason for return and changes status accordingly.
#     - If the item is being returned because it is defective change status to defective and change price to 0.
#     - If it is being returned in the box, like new mark it as for sale.
#     - If the box has been opened set status to used and apply a 20% discount.
#   - Display Info: show all product details.
# Every method that doesn't have to return something should return self so methods can be chained.

from Product import *

print "Testing class Product; instance p1 ..."
p1 = Product( 120.00, "Jiu-Jitsu Gi", 1.5, "Tatami", 75.00, "for sale" )
p1.displayInfo()
p1.add_tax( 0.10 )
p1.sell_item()
p1.displayInfo()
p1.return_item( "opened" )
p1.displayInfo()
print "End testing class Product; instance p1"
