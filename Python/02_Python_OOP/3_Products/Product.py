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

class Product(object):
    def __init__( self, price, name, weight, brand, cost, status ):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = status

    def sell_item( self ):
        self.status = "sold"

        return( self )

    def add_tax( self, tax_rate ):
        total_price = self.price + (self.price * tax_rate)

        return( total_price )

    def return_item( self, reason ):
        if reason == "defective":
            self.status = reason
            self.price = 0
        elif reason == "unopened":
            self.status = "for sale"
        elif reason == "opened":
            self.status = "used"
            self.price *= 0.80

        return( self )

    def displayInfo( self ):
        print "Price:", "{:.2f}".format( self.price )
        print "Name:", self.name
        print "Weight:", "{}lbs".format( self.weight )
        print "Brand:", self.brand
        print "Cost:", "{:.2f}".format( self.cost )
        print "Status:", self.status

        return( self )
        
