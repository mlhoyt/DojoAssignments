# -*- python -*-

# Assignment: Multiples, Sum, Average
# This assignment has several parts. All of your code should be in one file that
# is well commented to indicate what each block of code is doing and which problem
# you are solving. Don't forget to test your code as you go!

# Multiples
# Part I - Write code that prints all the odd numbers from 1 to 1000.
# Note: Use the for loop and don't use a list to do this exercise.
print "# Odd numbers from 1 to 1000"
for i in range( 1, 1000, 2 ):
    print i

# Part II - Create another program that prints all the multiples of 5 from 5 to 1,000,000.
print "# Multiples of 5 from 5 to 1,000,000"
for i in range( 5, 1000000, 5 ):
    print i

# Sum List
# Create a program that prints the sum of all the values in the list: a = [1, 2, 5, 10, 255, 3]
print "# Sum a list of numbers"
list3 = [1, 2, 5, 10, 255, 3]
print sum( list3 )

# Average List
# Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]
print "# Average a list of numbers"
list4 = [1, 2, 5, 10, 255, 3]
print sum( list4 ) / ( len( list4 ) * 1.0 )

