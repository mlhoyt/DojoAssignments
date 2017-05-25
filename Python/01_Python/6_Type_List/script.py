# -*- python -*-

# Assignment: Type List
# Write a program that takes a list and prints a message for each element in the list,
# based on that element's data type.
# Notes:
# - Your program input will always be a list.
# - For each item in the list, test its data type.
#   - If the item is a string, concatenate it onto a new string.
#   - If it is a number, add it to a running sum.
# - At the end of your program print:
#   - the string
#   - the number
#   - an analysis of what the array contains.
# - If it contains only one type, print that type, otherwise, print 'mixed'.

# Here are a couple of test cases. Think of some of your own, too. What kind of unexpected input could you get?

#input
l1 = ['magical unicorns',19,'hello',98.98,'world']
#output
#=> "The array you entered is of mixed type"
#=> "String: magical unicorns hello world"
#=> "Sum: 117.98"

# input
l2 = [2,3,1,7,4,12]
#output
#=> "The array you entered is of integer type"
#=> "Sum: 29"

# input
l3 = ['magical','unicorns']
#output
#=> "The array you entered is of string type"
#=> "String: magical unicorns"

def analyze_list( l ):
    s = ""
    n = 0
    for i in l:
        if isinstance( i, str ):
            if s == "":
                s = i
            else:
                s += " " + i
        elif isinstance( i, int ):
            n += i
        elif isinstance( i, float ):
            n += i

    # Print results
    print "List analysis results:"
    # Print array contents summary
    if s != "" and n != 0:
        print "The array you entered is of mixed type"
    elif s != "":
        print "The array you entered is of string type"
    else:
        print "The array you entered is of integer type"
    # Print string result (if any)
    if s != "":
        print "String:", s
    # Print number result (if any)
    if n != 0:
        print "Sum:", n

print "Debug: l1=", l1
analyze_list( l1 )
print "Debug: l2=", l2
analyze_list( l2 )
print "Debug: l3=", l3
analyze_list( l3 )
