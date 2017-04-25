// -*- javascript -*-

$(document).ready( function() {
  $('img').hover(
    function() {
      var data_orig_src = $(this).attr( "src" );
      var data_alt_src = $(this).data( "alt-src" );
      $(this)
        .fadeOut( "fast", function(){
          $(this).attr( "src", data_alt_src );
          $(this).data( "alt-src", data_orig_src );
        })
        .fadeIn();
    },
    function() {
      var data_orig_src = $(this).attr( "src" );
      var data_alt_src = $(this).data( "alt-src" );
      $(this)
        .fadeOut( "fast", function(){
          $(this).attr( "src", data_alt_src );
          $(this).data( "alt-src", data_orig_src );
        })
        .fadeIn();
    }
  );
});
