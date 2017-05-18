# -*- python -*-

# Assignment: Checkerboard
# Write a program that prints a 'checkerboard' pattern to the console.

# Your program should require no input and produce console output that looks like so:

# * * * *
#  * * * *
# * * * *
#  * * * *
# * * * *
#  * * * *
# * * * *
#  * * * *

# Each star or space represents a square.
# On a traditional checkerboard you'll see alternating squares of red or black.
# In our case we will alternate stars and spaces.
# The goal is to repeat a process several times. This should make you think of looping.

######################################################################

def make_checkerboard():
    s = ""
    for r in range( 0, 8 ):
        if r % 2 == 0:
            for c in range( 0, 4 ):
                s += "* "
        else:
            for c in range( 0, 4 ):
                s += " *"
        s += "\n"
    return( s )

print "Board #1:"
print make_checkerboard()
print "Board #2:"
print make_checkerboard()
