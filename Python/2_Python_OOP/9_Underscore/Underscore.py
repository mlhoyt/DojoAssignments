# -*- python -*-

# References:
# - http://underscorejs.org/
# - https://github.com/serkanyersen/underscore.py

class Underscore(object):
    def map(self, seq, func):
        rv = []
        for i in seq:
            rv.append( func( i ) )
        return( rv )

    def reduce(self, seq, func, memo=None):
        rv = memo
        si = 0
        if memo == None:
            rv = seq[0]
            si = 1
        for i in range( si, len( seq ) ):
            rv = func( rv, seq[i] )
        return( rv )

    def find(self, seq, func):
        rv = None
        for i in range( 0, len( seq ) ):
            if func( seq[i] ):
                rv = seq[i]
                break
        return( rv )

    def filter(self, seq, func):
        rv = []
        for i in seq:
            if func( i ):
                rv.append( i )
        return( rv )

    def reject(self, seq, func):
        rv = []
        for i in seq:
            if not func( i ):
                rv.append( i )
        return( rv )
