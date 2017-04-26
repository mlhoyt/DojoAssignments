// -*- javascript -*-

$(document).ready( function(){
  $('#info').hide();
  $(document).on(
    "click",
    "img",
    function(){
      var id = $(this).attr( "id" );
      $.get(
        ("http://pokeapi.co/api/v1/pokemon/" + id + "/"),
        function(r){
          var html_str = "";
          html_str += "<h2 class='name'>" + r.name + "</h2>";
          html_str += "<img src='" + "http://pokeapi.co/media/img/" + id + ".png' alt='' />";
          html_str += "<h3>" + "Types" + "</h3>";
          html_str += "<ul>";
          for( var i in r.types ) {
            html_str += "<li>" + r.types[i].name + "</li>";
          }
          html_str += "</ul>";
          html_str += "<h3>" + "Height" + "</h3>";
          html_str += "<p>" + r.height + "</p>";
          html_str += "<h3>" + "Weight" + "</h3>";
          html_str += "<p>" + r.weight + "</p>";
          $('#info').html( html_str )
          $('#info').show();
        },
        "json"
      )
    }
  )
});
