// -*- javascript -*-

$.extend({
  redirectPost: function( url, args ) {
    var form = '';
    $.each( args, function( key, value ) {
      value = value.split('"').join('\"')
      form += '<input type="hidden" name="'+key+'" value="'+value+'">';
    });
    $('<form action="' + url + '" method="POST">' + form + '</form>').appendTo($(document.body)).submit();
  }
});

$(document).ready( function() {
  $(".delete_btn").click( function(){
    $.redirectPost( "/animals/delete/" + $(this).data( "id" ), {} );
  });
});
