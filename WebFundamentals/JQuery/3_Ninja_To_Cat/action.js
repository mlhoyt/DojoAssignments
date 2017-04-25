// -*- javascript -*-

$(document).ready( function() {
  $('img').click( function() {
    var data_orig_src = $(this).attr( "src" );
    var data_alt_src = $(this).data( "alt-src" );
    $(this)
      .fadeOut( "slow", function() {
        $(this).attr( "src", data_alt_src );
      })
      .fadeIn( "slow" );
    $(this).data( "alt-src", data_orig_src );
  });
});
