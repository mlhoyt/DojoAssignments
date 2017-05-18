// -*- javascript -*-

function validateBraces( str ) {
  var braces = [];
  var opens = [ "(", "{", "[" ];
  var closed = [ ")", "}", "]" ];
  for( var i = 0; i < str.length; i++ ) {
    if( Array.contains( str[i], opens ) ) {
      braces.push( opens.indexOf( str[i] ) );
    }
    else if( closed.contains( str[i] ) ) {
      if( braces[braces.length - 1] == closed.indexOf( str[i] ) ) {
        braces.pop();
      }
      else {
        print( "Debug: validateBraces: failed at index", i );
        return( false );
      }
    }
    print( "Debug: i =", i, "str[i] = ", str[i], "braces =", braces );
  }
  return( braces == [] );
}

print( validateBraces( "a+b+(x+({(m-n)})+y[0])" ) );

