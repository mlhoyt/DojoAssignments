# -*- python -*-

# TDD II
#
# Imagine that you're creating your own module to help you with some repetitive tasks!
# Before releasing it into the wild, we want to make sure it's working properly right?
# To practice this, let's revisit the Underscore assignment we did in the OOP!

# The main objective of this assignment is to write the tests for the Underscore library
# You may have to take some time to refresh yourself and understand the code provided.
# In practice, we typically wouldn't have the module we want to test written first
# but this assignment is designed to help us practice writing tests.
# Once complete, take some time to consider the process in which you would:
# - think of your feature/module/app
# - write the tests
# - then write the code to make all the tests pass.

import unittest

from underscore import Underscore

class Underscore_test( unittest.TestCase ):
    def setUp( self ):
        # create an instance of the Underscore module we created
        self._ = Underscore()
        # initialize a list to run our tests on
        self.test_list = [1,2,3,4,5]

    def test_map( self ):
        result = self._.map(
            self.test_list,
            lambda x: x * 2
        )
        return( self.assertEqual(
            [2, 4, 6, 8, 10],
            result
        ))

    def test_reduce_zero_memo( self ):
        result = self._.reduce(
            self.test_list,
            lambda i, x: i + x,
            0
        )
        return( self.assertEqual(
            15,
            result
        ))

    def test_reduce_nonzero_memo( self ):
        result = self._.reduce(
            self.test_list,
            lambda i, x: i + x,
            13
        )
        return( self.assertEqual(
            28,
            result
        ))

    def test_find_mod2( self ):
        result = self._.find(
            self.test_list,
            lambda x: x % 2 == 0
        )
        return( self.assertEqual(
            2,
            result
        ))

    def test_find_mod5( self ):
        result = self._.find(
            self.test_list,
            lambda x: x % 5 == 0
        )
        return( self.assertEqual(
            5,
            result
        ))

    def test_filter( self ):
        result = self._.filter(
            self.test_list,
            lambda x: x % 2 == 0
        )
        return( self.assertEqual(
            [2, 4],
            result
        ))

    def test_reject( self ):
        result = self._.reject(
            self.test_list,
            lambda x: x % 2 == 0
        )
        return( self.assertEqual(
            [1, 3, 5],
            result
        ))

if __name__ == "__main__":
    unittest.main()
