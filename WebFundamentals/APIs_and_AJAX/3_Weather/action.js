// -*- javascript -*-

function temp_k2f( temp_k ) {
  var temp_c = temp_k - 275;
  var temp_f = ( ( temp_c * 9 / 5 ) + 32 );
  return( Math.trunc( temp_f ) );
}

$(document).ready( function(){
  $('#search_btn').click( function() {
    $('form').submit();
  });

  $('form').submit( function() {
    // your code here (build up your url)
    var owapi_url = "http://api.openweathermap.org/data/2.5/weather?";
    owapi_url += $('form').serialize();
    owapi_url += "&APPID=9e6717fb14947b2948cd7f033dacd57f";
    $.get(
      owapi_url,
      function(r) {
        $('#weather').html(
          "<h1>" + r.name + "</h1>" +
          "<h3>" + "Temperature: " + temp_k2f( r.main.temp ) + "&deg;F" + "</h3>"
        );
      },
      'json'
    );
    return false; // Return false to prevent page refresh
  });
});
