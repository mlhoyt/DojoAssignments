// -*- javascript -*-

function checkAddUserForm() {
  var alert_msg = "";

  if( $('#first_name').val() == "" ) {
    alert_msg += "Invalid empty 'First Name' field!" + "\n";
  }
  if( $('#last_name').val() == "" ) {
    alert_msg += "Invalid empty 'Last Name' field!" + "\n";
  }
  if( $('#email_addr').val() == "" ) {
    alert_msg += "Invalid empty 'Email Address' field!" + "\n";
  }
  if( $('#phone_num').val() == "" ) {
    alert_msg += "Invalid empty 'Phone Number' field!" + "\n";
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
  $('#email_addr').val( "" );
  $('#phone_num').val( "" );
}

$(document).ready( function(){
  $('#add_user_event').click( function(){
    if( checkAddUserForm() ) {
      $('tbody').append(
        "<tr>" +
          "<td>" + $('#first_name').val() + "</td>" +
          "<td>" + $('#last_name').val() + "</td>" +
          "<td>" + $('#email_addr').val() + "</td>" +
          "<td>" + $('#phone_num').val() + "</td>" +
        "</tr>"
      );
      clearAddUserForm();
    }
  });
});
