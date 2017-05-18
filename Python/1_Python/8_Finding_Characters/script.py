# -*- python -*-

# Assignment: Find Characters
# Write a program that:
#   Takes:
#     - a list of strings
#     - a string containing a single character
#   Produces:
#     - prints a new list of all the strings containing that character.

# Here's an example:
# input
l1 = ['hello','world','my','name','is','Anna']
char1 = 'o'
# output
# n = ['hello','world']

# Hint: how many loops will you need to complete this task?

######################################################################

def find_chars( l, c ):
    n = []
    for i in l:
        if i.find( c ) >= 0:
            n.append( i )

    print "Debug: l =", l
    print "Debug: c =", c
    print "Debug: n =", n

find_chars( l1, char1 )
