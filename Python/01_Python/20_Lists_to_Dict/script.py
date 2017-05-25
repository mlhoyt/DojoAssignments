# -*- python -*-

# Assignment: Making Dictionaries
# Create a function that takes in two lists and creates a single dictionary where
#   - the first list contains keys
#   - the second values
# Assume the lists will be of equal length.

# Your first function will take in two lists containing some strings. Here are two example lists:

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

# Here's some help starting your function.
#
# def make_dict(arr1, arr2):
#   new_dict = {}
#   # your code here
#   return new_dict

def make_dict( l1, l2 ):
    rv = {}
    for i in range( 0, len( l1 ) ):
        rv[ l1[i] ] = l2[i]
    return( rv )

print "Testing make_dict ..."
print make_dict( name, favorite_animal )
print "End testing make_dict"


# Hacker Challenge:
# If the lists are of unequal length, the longer list should be used for the keys, the shorter for the values.

def make_dict_hacker( l1, l2 ):
    keys = l1
    vals = l2
    if len( l2 ) > len( l1 ):
        keys = l2
        vals = l1
    rv = {}
    for i in range( 0, len( vals ) ):
        rv[ keys[i] ] = vals[i]
    for i in range( len( vals ), len( keys ) ):
        rv[ keys[i] ] = 'undefined'
    return( rv )

print "Testing make_dict_hacker ..."
print make_dict_hacker( ['name1', 'name2', 'name3'], ['val1', 'val2'] )
print "End testing make_dict_hacker"

print "Testing make_dict_hacker ..."
print make_dict_hacker( ['name1', 'name2'], ['val1', 'val2', 'val3'] )
print "End testing make_dict_hacker"

print "Testing make_dict_hacker ..."
print make_dict_hacker( ['name1', 'name2', 'name3'], ['val1', 'val2', 'val3'] )
print "End testing make_dict_hacker"
