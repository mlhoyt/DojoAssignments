// -*- javascript -*-

window.onload = function() {
  let el = document.getElementById( "myh1" );
  el.setAttribute( "data-alt-color", "blue" );
  el.addEventListener( "click", function() {
    let el = document.getElementById( "myh1" );
    curr_color = el.style.color;
    next_color = el.getAttribute( "data-alt-color" );
    el.style.color = next_color;
    el.setAttribute( "data-alt-color", curr_color );
  });
};
