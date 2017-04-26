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
        "<div" +
          " height='88px'" +
          " class='card'" +
          " data-view='name'" +
          " data-first-name='" + $('#first_name').val() + "'" +
          " data-last-name='" + $('#last_name').val() + "'" +
          " data-desc='" + $('#desc').val() + "'" +
          ">" +
          "<h2>" + $('#first_name').val() + " " + $('#last_name').val() + "</h2>" +
          "<p>" + "Click for description!" + "</p>" +
        "</div>"
      );
      clearAddUserForm();
    }
  });

  $(document).on("click", ".card p", function(){
    var card = $(this).parent();
    if( card.data( "view" ) == "name" ) {
      var new_html =
        "<p>" + card.data( "desc" ) + "</p>";
      card.html( new_html );
      card.data( "view", "desc" );
    }
    else {
      var new_html =
        "<h2>" + card.data( "first-name" ) + " " + card.data( "last-name" ) + "</h2>" +
        "<p>" + "Click for description!" + "</p>";
      card.html( new_html );
      card.data( "view", "name" );
    }
  });
});
