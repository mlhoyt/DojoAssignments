// -*- javascript -*-

// document.write( "JS correctly linked by modifying document through DOM" )
// console.log( "What is going on here?" )

$(document).ready( function(){
  $(document).on( "click", "#click_me", function() {
    $.get(
      "/message",
      function(r){
        $('#server_messages').html( r );
      }
    )
  })
});
