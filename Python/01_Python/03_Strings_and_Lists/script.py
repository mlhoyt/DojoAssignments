# -*- python -*-

# Find and Replace
# In this string: str = "It's thanksgiving day. It's my birthday,too!"
# 1) Print the position of the first instance of the word "day".
# 2) Create a new string where the word "day" is replaced with the word "month".
str1 = "It's thanksgiving day. It's my birthday,too!"
print str1
###
print str1.find( "day" ) #=> 18
print str1.replace( "day", "month" ) #=> ...

# Min and Max
# 1) Print the min and max values in a list like this one: x = [2,54,-2,7,12,98].
# Note: Your code should work for any list.
list2 = [2,54,-2,7,12,98]
print list2
###
print min(list2) #=> -2
print max(list2) #=> 98

# First and Last
# 1) Print the first and last values in a list like this one: x = ["hello",2,54,-2,7,12,98,"world"].
# 2) Create a new list containing only the first and last values in the original list.
# Note: Your code should work for any list.
list3 = ["hello",2,54,-2,7,12,98,"world"]
print list3
###
print list3[0] #=> "hello"
print list3[len(list3)-1] #=> "world"
list3p1 = [ list3[0], list3[len(list3)-1] ]
print list3p1 #=> [ "hello", "world" ]

# New List
# Start with a list like this one: x = [19,2,54,-2,7,12,98,32,10,-3,6].
# 1) Sort your list first.
# 2) Split your list in half.
# 3) Push the list created from the first half to position 0 of the list created from the second half.
# Note: The output should be: [[-3, -2, 2, 6, 7], 10, 12, 19, 32, 54, 98]. Stick with it, this one is tough!
list4 = [19,2,54,-2,7,12,98,32,10,-3,6]
print list4
###
list4 = sorted(list4)
print list4 #=> ...
list4p1 = list4[0:int(len(list4)/2)]
print list4p1 #=> ...
list4p2 = list4[int(len(list4)/2):]
print list4p2 #=> ...
list4p2.insert( 0, list4p1 )
print list4p2

