# -*- python -*-

# Assignment: MathDojo
#
# HINT: To do this exercise, you will probably have to use 'return self'.
# If the method returns itself (an instance of itself), we can chain methods.
#
# PART I
#
# Create a Python class called MathDojo that has the methods:
#     - add
#     - subtract
# Have these 2 functions take at least 1 parameter.
#
# Then create a new instance called: md
# It should be able to do the following task:
#
#     MathDojo().add(2).add(2, 5).subtract(3, 2).result
#
# Which should perform 0+2+(2+5)-(3+2) and return 4.
#
# PART II
#
# Modify MathDojo to take at least one integer(s) and/or list(s) as a parameter with any number of values
# passed into the list. It should now be able to perform the following tasks:
#
#     MathDojo().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result
#
# Which should perform 0+1+3+4+(3+5+7+8)+(2+4.3+1.25)-2-(2+3)-(1.1+2.3) and return its result.
#
# PART III
#
# Make any needed changes in MathDojo in order to support tuples of values
# (in addition to lists and singletons).

class MathDojo( object ):
    def __init__( self ):
        self.result = 0

    def add( self, *args ):
        for i in args:
            if isinstance( i, int ) or isinstance( i, float ):
                self.result += i
            elif isinstance( i, list ) or isinstance( i, tuple ):
                for j in i:
                    self.add( j )
        return( self )

    def subtract( self, *args ):
        for i in args:
            if isinstance( i, int ) or isinstance( i, float ):
                self.result -= i
            elif isinstance( i, list ) or isinstance( i, tuple ):
                for j in i:
                    self.subtract( j )
        return( self )

# Testing
print MathDojo().add(2).add(2, 5).subtract(3, 2).result, "#=> 4"
print MathDojo().add(4,[1],(3)).add(([3, 5], 7, 8), [2, 4.3, 1.25]).subtract(2, (2,3), [1.1, 2.3]).result, "#=> 28.15"
