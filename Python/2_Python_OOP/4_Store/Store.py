# -*- python -*-

from Product import *

class Store(object):
    def __init__( self, owner, location ):
        self.owner = owner
        self.location = location
        self.products = []

    def add_product( self, product ):
        self.products.append( product )

        return( self )

    def remove_product( self, product_name ):
        # self.products.remove( product )
        for i in self.products:
            if i.name == product_name:
                self.products.remove( i )

        return( self )

    def inventory( self ):
        for i in self.products:
            i.displayInfo()

        return( self )
