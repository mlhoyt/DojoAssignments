# -*- python -*-

# Assignment: MathDojo
# HINT: To do this exercise, you will probably have to use 'return self'.
# If the method returns itself (an instance of itself), we can chain methods.

# PART I
# Create a Python class called MathDojo:
# - methods
#   - add
#     - takes at least 1 parameter
#   - subtract
#     - takes at least 1 parameter

# Create a MathDojo instance called md.
# - It should be able to do the following task:
#   - MathDojo().add(2).add(2, 5).subtract(3, 2).result
#     - Which performs 0+2+(2+5)-(3+2) and return 4.

# PART II
# Modify MathDojo to take at least one integer(s) and/or list(s) as a parameter
# with any number of values passed into the list.
# It should now be able to perform the following tasks:
# - MathDojo().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result
#   - Which performs 0+1+3+4+(3+5+7+8)+(2+4.3+1.25)-2-(2+3)-(1.1+2.3) and return its result.

# PART III
# Make any needed changes in MathDojo in order to support tuples of values in addition to lists and singletons.

import MathDojo1
print MathDojo1.MathDojo1().add(2).add(2, 5).subtract(3, 2).result  #=> 4

import MathDojo2
print MathDojo2.MathDojo2().add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result  #=> 28.15

import MathDojo3
print MathDojo3.MathDojo3().add([1],3,4).add((3, 5, 7, 8), [2, 4.3, 1.25]).subtract(2, (2,3), [1.1, 2.3]).result  #=> 28.15
