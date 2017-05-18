# -*- python -*-

class MathDojo2(object):
    def __init__( self ):
        self.result = 0

    def add( self, *args ):
        for i in args:
            if isinstance( i, list ):
                self.result += sum( i )
            else:
                self.result += i
        return( self )

    def subtract( self, *args ):
        for i in args:
            if isinstance( i, list ):
                self.result -= sum( i )
            else:
                self.result -= i
        return( self )
