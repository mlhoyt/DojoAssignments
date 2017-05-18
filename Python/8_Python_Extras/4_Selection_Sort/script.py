# -*- python -*-

# Selection Sort

# If you're given a list with a bunch of numbers and you're supposed to sort the numbers (with the smallest number on the left and the largest number on the right), how would you do this? There are numerous sorting algorithms to sort numbers in the list. We'll introduce one of the simplest sorting algorithm called selection sort.

# According to Wikipedia, selection sort

# ... divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

def selection_sort( ary ):
    for n in range( len( ary ) ):
        n_min = n
        for i in range( n, len( ary ) ):
            if ary[i] < ary[n_min]:
                n_min = i
        if n_min > n:
            ary[n], ary[n_min] = ary[n_min], ary[n]
    return( ary )

# Testing
ary0 = [1, 5, 3, 4, 2]
print "Ary:", ary0
print "Sorted:", selection_sort( ary0 )

ary1 = [5, 4, 3, 2, 1]
print "Ary:", ary1
print "Sorted:", selection_sort( ary1 )

ary2 = [1, 2, 3, 4, 5]
print "Ary:", ary2
print "Sorted:", selection_sort( ary2 )
