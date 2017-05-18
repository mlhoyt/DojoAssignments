// -*- scala -*-

def rSigma( n: Int ) : Int = {
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
println( "rSigma( 5 )"  + " = " + rSigma( 5 )  + " ## Expect = " + 15 )
println( "rSigma( 2 )"  + " = " + rSigma( 2 )  + " ## Expect = " + 3 )
println( "rSigma( -1 )" + " = " + rSigma( -1 ) + " ## Expect = " + 0 )
