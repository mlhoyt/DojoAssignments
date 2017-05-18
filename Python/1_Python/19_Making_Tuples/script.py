# -*- python -*-

# Assignment: Dictionary in, tuples out
# Write a function that takes in a dictionary and returns a list of tuples where
# the first tuple item is the key and the second is the value. Here's an example:

# # function input
my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}
#function output
# [("Speros", "(555) 555-5555"), ("Michael", "(999) 999-9999"), ("Jay", "(777) 777-7777")]

def dict_to_tuples( d ):
    rv = []
    for i in d:
        rv.append( (i, d[i]) )
    return( rv )

print "Testing dict_to_tuples ..."
print dict_to_tuples( my_dict )
print "End testing dict_to_tuples"
