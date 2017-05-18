# -*- python -*-

# Assignment: Compare Arrays
# Write a program that compares two lists and prints a message depending on if the inputs are identical or not.

# Your program should be able to accept and compare two lists: list_one and list_two.
# - If both lists are identical print "The lists are the same".
# - If they are not identical print "The lists are not the same."

# Try the following test cases for lists one and two:

list1_one = [1,2,5,6,2]
list1_two = [1,2,5,6,2]

list2_one = [1,2,5,6,5]
list2_two = [1,2,5,6,5,3]

list3_one = [1,2,5,6,5,16]
list3_two = [1,2,5,6,5]

list4_one = ['celery','carrots','bread','milk']
list4_two = ['celery','carrots','bread','cream']

######################################################################

def compare_lists( l1, l2 ):
    print "Debug: l1 =", l1
    print "Debug: l2 =", l2
    if l1 == l2:
        print "The lists ARE the same."
    else:
        print "The lists are NOT the same."

compare_lists( list1_one, list1_two )
compare_lists( list2_one, list2_two )
compare_lists( list3_one, list3_two )
compare_lists( list4_one, list4_two )
