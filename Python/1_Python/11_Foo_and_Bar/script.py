# -*- python -*-

# Optional Assignment: Foo and Bar
# Write a program that for all numbers between 100 and 100000 prints:
# - all the prime numbers
# - all the perfect squares

# For all numbers between 100 and 100000 test that number:
#   - If it is a prime number print "Foo".
#   - If it is a perfect square print "Bar".
#   - If it is neither print "FooBar".

# Do NOT use the python math library for this exercise.
# For example, if the number you are evaluating is 25,
# you will have to figure out if it is a perfect square.

# This assignment is extra challenging! Try pair programming and pulling up a white board.

######################################################################

def is_prime( n ):
    rv = True
    if n == 0 or n == 1:
        pass
    else:
        for i in range( 2, n ):
            if n % i == 0:
                rv = False
                break

    return( rv )

def is_perfect_square( n ):
    rv = False
    if n == 0 or n == 1:
        rv = False
    else:
        for i in range( 2, n ):
            if i * i == n:
                rv = True
                break
    return( rv )

# for i in range( 0, 30 ):
#     print "i =", i, "is_prime =", str( is_prime( i )), "is_perfect_square =", str( is_perfect_square( i ))

for i in range( 100, 100000 ):
    print i,
    # Track state (0 = neither prime nor perfect square, >0 = prime and/or perfect square)
    s = 0
    if is_prime( i ):
        print "Foo",
        s += 1
    if is_perfect_square( i ):
        print "Bar",
        s += 1
    if s == 0:
        print "FooBar",
    print
