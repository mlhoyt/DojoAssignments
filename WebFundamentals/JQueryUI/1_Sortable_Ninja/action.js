// -*- javascript -*-

$(document).ready( function(){
  addRandomImages();
});

function shuffleArray( aref ) {
  for( var i = 0; i < aref.length; ++i ) {
    var n = Math.floor( Math.random() * aref.length );
    var temp = aref[i];
    aref[i] = aref[n];
    aref[n] = temp;
  }
}

function addRandomImages() {
  // Create in-order imageOrder array
  var imageOrder = [];
  for( var i = 1; i <= 5; ++i ) {
    imageOrder.push( i );
  }

  // Shuffle imageOrder array
  shuffleArray( imageOrder );

  // Add [shuffled] images to document
  for( var i in imageOrder ) {
    var n = imageOrder[i];
    var el = document.createElement( "img" );
    el.setAttribute( "src", "assets/sort" + n + ".png" );
    el.setAttribute( "alt", "Sortable Image #" + n );
    // $('#container').append( el );
    document.getElementById( 'container' ).appendChild( el );
  }
}
