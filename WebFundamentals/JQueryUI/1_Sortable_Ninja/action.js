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
    // Create img element
    var el_img = document.createElement( "img" );
    el_img.setAttribute( "src", "assets/sort" + n + ".png" );
    el_img.setAttribute( "alt", "Sortable Image #" + n );
    // Create li element
    var el_li = document.createElement( "li" );
    // Add img element to li element
    el_li.appendChild( el_img );
    // Add li element to div element
    $('#container ul').append( el_li );
  }
}
