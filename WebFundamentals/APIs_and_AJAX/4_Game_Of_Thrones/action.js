// -*- javascript -*-

$(document).ready( function(){
  $('img').click( function(){
    var gotapi_url = "https://www.anapioficeandfire.com/api/";
    gotapi_url += $(this).data( "class" );
    gotapi_url += "/";
    gotapi_url += $(this).data( "id" );
    $.get(
      gotapi_url,
      function(r){
        var html_str = "";
        html_str += "<p>" + "<strong>Name:</strong> " + r.name + "</p>";
        html_str += "<p>" + "<strong>Words:</strong> " + r.words + "</p>";
        html_str += "<p>" + "<strong>Titles:</strong>";
        for( var i in r.titles ) {
          if( i !== 0 ) {
            html_str += ",";
          }
          html_str += " " + r.titles[i];
        }
        html_str += "</p>";
        $('#info').html( html_str );
      },
      "json"
    );
  });
});
