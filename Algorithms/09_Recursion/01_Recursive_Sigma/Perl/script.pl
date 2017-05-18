# -*- perl -*-

use POSIX;

sub rSigma {
  my( $n ) = @_;

  # Case: if type( n ) is float
  $n = POSIX::trunc( $n );

  if( $n <= 0 ) {
    return( 0 );
  }
  elsif( $n == 1 ) {
    return( 1 );
  }
  else {
    return( $n + rSigma( $n - 1 ) );
  }
}

# Testing
print( "rSigma( 5 )",   " = ", rSigma( 5 ),   " ## Expect = ", 15, "\n" );
print( "rSigma( 2.5 )", " = ", rSigma( 2.5 ), " ## Expect = ", 3,  "\n" );
print( "rSigma( -1 )",  " = ", rSigma( -1 ),  " ## Expect = ", 0,  "\n" );
