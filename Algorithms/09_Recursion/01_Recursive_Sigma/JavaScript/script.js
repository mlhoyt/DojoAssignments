// -*- javascript -*-

function rSigma( n ) {
  // Case: if type( n ) is float
  n = Math.trunc( n )

  if( n <= 0 ) {
    return( 0 )
  }
  else if( n == 1 ) {
    return( 1 )
  }
  else {
    return( n + rSigma( n - 1 ) )
  }
}

// Testing
print( "rSigma( 5 )",   " =", rSigma( 5 ),   "## Expect =", 15 )
print( "rSigma( 2.5 )", " =", rSigma( 2.5 ), "## Expect =", 3 )
print( "rSigma( -1 )",  " =", rSigma( -1 ),  "## Expect =", 0 )
