# -*- python -*-

# Insertion Sort
#
# Build an algorithm for insertion sort. Please watch the video here to understand how insertion sort works and implement the code. The following gif also shows how insertion sort is done.
#
# Again, write the pseudo-code first and test your base cases before you build your code next.
#
# Please refrain from checking other people's code. If your code does NOT work as intended make sure (1) that you're writing pseudo-code first, (2) that your pseudo-code solves your base case, and (3) that your pseudo-code solves other base cases you have specified.
#
# Sometimes, if you are stuck for too long, you need to just start all over as this can be more efficient to do than dwelling on old code with bugs that are hard to trace.

# def insertion_sort( ary ):
#     for n in range( 1, len( ary ) ):
#         i = n - 1
#         print "Debug: insertion_sort: (before) ary={} n={} i={}".format( ary, n, i )
#         while i >= 0:
#             if ary[n] < ary[i]:
#                 i -= 1
#             else:
#                 print "Debug: insertion_sort: (during) ary={} n={} i={}".format( ary, n, i )
#                 ary = ary[0:i-1] + ary[n:n+1] + ary[i:n-1]
#                 break
#             print "Debug: insertion_sort: (after) ary={} n={} i={}".format( ary, n, i )
#             return( ary )
#
#     return( ary )

def insertion_sort( ary ):
    for n in range( 1, len( ary ) ):
        n_ins = -1
        for i in range( n ):
            if ary[n] < ary[i]:
                n_ins = i
                break
        if n_ins != -1:
            ary = ary[0:n_ins] + ary[n:n+1] + ary[n_ins:n] + ary[n+1:]

    return( ary )

# Testing
ary0 = [1, 5, 3, 4, 2]
print "Ary:", ary0
aryR = insertion_sort( ary0 )
print "Sorted:", aryR

ary1 = [5, 4, 3, 2, 1]
print "Ary:", ary1
aryR = insertion_sort( ary1 )
print "Sorted:", aryR

ary2 = [1, 2, 3, 4, 5]
print "Ary:", ary2
aryR = insertion_sort( ary1 )
print "Sorted:", aryR
