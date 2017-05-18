# -*- python -*-

# (optional) Bubble Sort

# Now, build an algorithm for bubble sort. The gif below demonstrates how bubble sort works.
# - GIVEN an array (list)
# - COMMENT: Each iteration through array moves the largest number to the end
# - ITERATE over array (length - 1) times to sort each value
#   - ITERATE over array (to length - 1)
#     - IF current value GREATER-THAN next value
#       - SWAP current value AND next value

# Here is some advice on how to tackle sorting algorithms as well as any complicated algorithm challenges:
# - Come up with a simple base case (i.e. example input)
# - Write pseudo-code first. Your instructions should be composed only of the following components/statements:
#   - SET _ (variable name)__ to be ______ (where the second blank can be filled with any data type)
#   - GOTO line _(line number)__
#   - PRINT _(variable name or string)__
#   - IF _(variable_or_value)__ is _(comparison_operator)_ _(variable_or_value)__ DO { _____ }
# - Go through your pseudo-code and test whether it solves your base case
# - Test your pseudo-code with other test cases
# - Write your code in Python/Javascript
# - Test your code with different cases/scenarios.

# Avoid the temptation to check the code of other developers.
# Try to implement your own logic without looking for code elsewhere.

def bubble_sort( ary ):
    nr_compares = 0
    nr_changes = 0
    for n in range( len( ary ) ):
        had_changes = 0
        for i in range( len( ary ) - 1 - n ):
            nr_compares += 1
            if ary[i] > ary[i+1]:
                ary[i], ary[i+1] = ary[i+1], ary[i]
                nr_changes += 1
                had_changes += 1
        if nr_changes == 0:
            break
    # print "Debug: bubble_sort: n={} compares={} changes={}".format( len( ary ), nr_compares, nr_changes )
    return( ary )

ary0 = [1, 5, 3, 4, 2]
print "Ary:", ary0
print "BubbleSorted:", bubble_sort( [1, 5, 3, 4, 2] )

ary1 = [5, 4, 3, 2, 1]
print "Ary:", ary1
print "BubbleSorted:", bubble_sort( [5, 4, 3, 2, 1] )

ary2 = [1, 2, 3, 4, 5]
print "Ary:", ary2
print "BubbleSorted:", bubble_sort( [1, 2, 3, 4, 5] )
