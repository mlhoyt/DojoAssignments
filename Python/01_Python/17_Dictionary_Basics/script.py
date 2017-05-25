# -*- python -*-

# Assignment: Making and Reading from Dictionaries
# Create a dictionary containing some information about yourself.
# The keys should include name, age, country of birth, favorite language.

my_info = {
    'name': 'Firstname Lastname',
    'age': 25,
    'country of birth': 'USA',
    'favorite language': 'Many'
}

# Write a function that can take in and print out any dictionary keys and values.
# The output will look something like the following:
#
# My name is Anna
# My age is 101
# My country of birth is The United States
# My favorite language is Python

# There are two steps to this process:
#   - building a dictionary
#   - gathering all the data from it
#
# Note: The majority of data we will manipulate as web developers will be hashed
# in a dictionary using key-value pairs. Repeat this assignment a few times to
# really get the hang of unpacking dictionaries, as it's a very common requirement
# of any web application.

def print_dict( d ):
    for i in d:
        print "My {} is {}".format( i, d[i] )

print "Testing print_dict ..."
print_dict( my_info )
print "End testing print_dict"
