# -*- python -*-

class MathDojo1(object):
    def __init__( self ):
        self.result = 0

    def add( self, *args ):
        self.result += sum( args )
        return( self )

    def subtract( self, *args ):
        self.result -= sum( args )
        return( self )
