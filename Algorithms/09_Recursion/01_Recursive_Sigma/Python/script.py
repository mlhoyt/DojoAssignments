# -*- python -*-

from math import trunc

def rSigma( n ):
    # Case: if type( n ) is float
    n = trunc( n )

    if n <= 0:
        return( 0 )
    elif n == 1:
        return( 1 )
    else:
        return( n + rSigma( n - 1 ) )

# Testing
print "rSigma( 5 )",   " =", rSigma( 5 ),   "## Expect =", 15
print "rSigma( 2.5 )", " =", rSigma( 2.5 ), "## Expect =", 3
print "rSigma( -1 )",  " =", rSigma( -1 ),  "## Expect =", 0
