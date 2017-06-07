// -*- javascript -*-

function displayName( data ) {
  let $p_name = $( "<p>" + "<strong>" + "name:" + "</strong>" + data.name + "</p>" );
  $('#query_results').append( $p_name );
  // console.log(data);
}

$(document).ready( function(){
  $('#query_submit').click(
    function() {
      // Method #1 -- $.get with callback
      // $.get( "https://api.github.com/users/mlhoyt", displayName, "json" );
      // Method #2 -- $.get with JQuery "promise"
      // var api_call = $.get( "https://api.github.com/users/mlhoyt" );
      // api_call.done( displayName ); // .then works too
      // Method #3 -- $.get with JS Promise
      var api_call = Promise.resolve( $.get( "https://api.github.com/users/mlhoyt" ) );
      api_call.then( displayName ); // .done does NOT work here
    }
  );
});
