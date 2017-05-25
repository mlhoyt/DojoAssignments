# -*- python -*-

# Assignment: Stars
# Write the following functions.

# Part I
# Create a function called draw_stars() that takes a list of numbers and prints out *.
#
# For example:
#   x = [4, 6, 1, 3, 5, 7, 25]
#   draw_stars(x)
# Should print the following:
#   ****
#   ******
#   *
#   ***
#   *****
#   *******
#   *************************

def draw_stars( l ):
    for i in l:
        print '*' * i

print "Testing draw_stars ..."
draw_stars( [4, 6, 1, 3, 5, 7, 25] )
print "End testing draw_stars"


# Part II
# Modify the function above. Allow a list containing integers and strings to be
# passed to the draw_stars() function.
# When a string is passed, instead of displaying *, display the first letter of
# the string according to the example below.
# You may use the .lower() string method for this part.
#
# For example:
#   x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
#   draw_stars(x)
# Should print the following:
#   ****
#   ttt
#   *
#   mmmmmmm
#   *****
#   *******
#   jjjjjjjjjjj

def draw_stars_and_letters( l ):
    for i in l:
        if type( i ) == int:
            print '*' * i
        elif type( i ) == str:
            print i[0].lower() * len( i )

print "Testing draw_stars_and_letters ..."
draw_stars_and_letters( [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"] )
print "End testing draw_stars_and_letters"
