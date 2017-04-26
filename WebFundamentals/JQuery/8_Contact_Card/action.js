// -*- javascript -*-

function checkAddUserForm() {
  var alert_msg = "";

  if( $('#first_name').val() == "" ) {
    alert_msg += "Invalid empty 'First Name' field!" + "\n";
  }
  if( $('#last_name').val() == "" ) {
    alert_msg += "Invalid empty 'Last Name' field!" + "\n";
  }
  if( $('#desc').val() == "" ) {
    alert_msg += "Invalid empty 'Description' field!" + "\n";
  }

  if( alert_msg !== "" ) {
    alert( alert_msg );
    return( false );
  }
  else {
    return( true );
  }
}

function clearAddUserForm() {
  $('#first_name').val( "" );
  $('#last_name').val( "" );
  $('#desc').val( "" );
}

$(document).ready( function(){
  $(document).on("click", "#add_user_btn", function(){
    if( checkAddUserForm() ) {
      $('#sidebar').prepend(
        "<div class='card'" +
          " data-first-name='" + $('#first_name').val() + "'" +
          " data-last-name='" + $('#last_name').val() + "'" +
          " data-desc='" + $('#desc').val() + "'" +
          " data-state='" + "name" + "'" +
          ">" +
          "<h2>" + $('#first_name').val() + " " + $('#last_name').val() + "</h2>" +
          "<p>" + "Click for description!" + "</p>" +
        "</div>"
      );
      clearAddUserForm();
    }
  });

  $(document).on("click", ".card p", function(){
    if( $(this).parent().data( "state" ) == "name" ) {
      $(this).parent().html(
        "<p>" + $(this).parent().data( "desc" ) + "</p>"
      );
      $(this).parent().data( "state", "desc" );
    }
    else {
      $(this).parent().html(
          "<h2>" + $(this).parent().data( "first-name" ) + " " + $(this).parent().data( "last-name" ) + "</h2>" +
          "<p>" + "Click for description!" + "</p>"
      );
      $(this).parent().data( "state", "name" );
    }
  });
});
