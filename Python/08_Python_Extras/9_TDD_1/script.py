# -*- python -*-

# TDD I
#
# Having learned a bit about unittest and assertions lets try a simple assignment in which we'll test a function that we've written. Create a new file and define a function:
#
# To run our tests in the terminal:
#     python <file>.py -v
#
# With our tests failing, we can now write some code!
#
# Go ahead and write the code for the insert_value_at function. It should take 3 parameters, an index where we want to insert a value, a list, and the value we want to insert. If the index is not in the range of the list, return False. Once, finished run the tests and make sure they pass!

def insert_val_at( index, my_list, value ):
    if len( my_list ) < index:
        return( False )
    else:
        my_list.insert( index, value )
        return( my_list )

import unittest

# See: https://docs.python.org/2/library/unittest.html#unittest.TestCase
# For Code Coverage:
# - See: https://coverage.readthedocs.io/en/coverage-4.4/
#   - pip install coverage
#   - coverage {run|html} <file>.py [<args>]*
# Regarding unittest and Coverage.py together:
# - See: https://github.com/audreyr/how-to/blob/master/python/use_coverage_with_unittest.rst

class insert_value_at_test( unittest.TestCase ):
    def setUp( self ):
        self.test_list = [0,1,2,3,4]

    def test_insert_at_index_two( self ):
        result = insert_val_at( 2, self.test_list, 100 )
        return self.assertEqual( [0,1,100,2,3,4], result )

    def test_return_False_for_invalid_index( self ):
        result = insert_val_at( 6, self.test_list, 100 )
        return self.assertEqual( False, result )

if __name__ == "__main__":
    unittest.main()
