// -*- javascript -*-

$(document).ready( function() {
  let toggleButtonBGColor = function() {
    if ( $(this).data( "state" ) === "-1" ) {
      $(this).css( "background-color", "red" );
      $(this).data( "state", "0" );
    }
    else {
      $(this).css( "background-color", "blue" );
      $(this).data( "state", "-1" );
    }
  }

  let hoverInButtonBGColor = function() {
    $(this).css( "background-color", "green" );
  }

  let hoverOutButtonBGColor = function() {
    if ( $(this).data( "state" ) === "0" ) {
      $(this).css( "background-color", "blue" );
    }
    else {
      $(this).css( "background-color", "red" );
    }
  }

  $('button').css( "background-color", "blue" );
  $('button').css( "color", "white" );
  $('button').data( "state", "0" );
  $('button').click( toggleButtonBGColor );
  $('button').hover( hoverInButtonBGColor, hoverOutButtonBGColor );

  $(document).keypress(
    function(e) {
      if( e.which == 13 ) {
        $new_button = $( "<button>Click Me</button>" );
        $new_button.css( "background-color", "blue" );
        $new_button.css( "color", "white" );
        $new_button.data( "state", "0" );
        $new_button.click( toggleButtonBGColor );
        $new_button.hover( hoverInButtonBGColor, hoverOutButtonBGColor );

        $('body').append( $new_button );
      }
    }
  );
});
