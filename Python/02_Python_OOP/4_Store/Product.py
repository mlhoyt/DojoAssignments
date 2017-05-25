# -*- python -*-

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
