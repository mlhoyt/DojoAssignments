// -*- javascript -*-

// ----------------------------------------------------------------------
// Pokemon Globals
// ----------------------------------------------------------------------

var POKEMON_API_ROOT = "http://pokeapi.co";

function getPokemonCardNr() {
  return( 1 + Math.floor( Math.random() * 500 ) );
}

var CARDS_PER_PLAYER = 4;

// ----------------------------------------------------------------------
// Game/Player Globals
// ----------------------------------------------------------------------

var game = {
  players: [],
  addPlayer: function( player ) {
    this.players.push( player );
  },
};

function playerConstructor( name ){
  player = {
    name: name,
    hand: [],
    addCard: function( card ) {
      this.hand.push( card );
    },
  };

  return player;
};

function playerBuildDOMElements( p_idx ) {
  p_obj = game.players[ p_idx ];

  var el_outerDiv = document.createElement( "div" );
  el_outerDiv.setAttribute( "class", "player_hand" );
  document.body.appendChild( el_outerDiv );

  var el_label = document.createTextNode( "Player: " + p_obj.name );
  el_outerDiv.appendChild( el_label );
  var el_innerDiv = document.createElement( "div" );
  el_outerDiv.appendChild( el_innerDiv );

  for( var c_idx = 0; c_idx < CARDS_PER_PLAYER; ++c_idx ) {
    var el_cardDiv = document.createElement( "div" );
    el_cardDiv.setAttribute( "class", "card" );
    el_outerDiv.appendChild( el_cardDiv );

    var el_cardImg = document.createElement( "img" );
    el_cardImg.setAttribute( "class", "card_image" );
    el_cardImg.setAttribute( "id", "p" + p_idx + "c" + c_idx + "img" );
    el_cardDiv.appendChild( el_cardImg );

    var el_cardName = document.createElement( "p" );
    el_cardName.setAttribute( "class", "card_name" );
    el_cardName.setAttribute( "id", "p" + p_idx + "c" + c_idx + "name" );
    el_cardDiv.appendChild( el_cardName );

    var el_cardAttack = document.createElement( "p" );
    el_cardAttack.setAttribute( "class", "card_attr" );
    el_cardAttack.setAttribute( "id", "p" + p_idx + "c" + c_idx + "attack" );
    el_cardDiv.appendChild( el_cardAttack );

    var el_cardDefense = document.createElement( "p" );
    el_cardDefense.setAttribute( "class", "card_attr" );
    el_cardDefense.setAttribute( "id", "p" + p_idx + "c" + c_idx + "defense" );
    el_cardDiv.appendChild( el_cardDefense );
  }
}

function playerUpdateDOMElements( p_idx, c_idx, r ) {
  var el_cardImg = document.getElementById( "p" + p_idx + "c" + c_idx + "img" );
  $.get(
    (POKEMON_API_ROOT + r.sprites[0].resource_uri),
    function( data ) {
      el_cardImg.setAttribute( "src", POKEMON_API_ROOT + data.image );
    },
    "json"
  );

  var el_cardName = document.getElementById( "p" + p_idx + "c" + c_idx + "name" );
  el_cardName.innerHTML = r.name;

  var el_cardAttack = document.getElementById( "p" + p_idx + "c" + c_idx + "attack" );
  el_cardAttack.innerHTML = "Attack:" + r.attack;

  var el_cardDefense = document.getElementById( "p" + p_idx + "c" + c_idx + "defense" );
  el_cardDefense.innerHTML = "Defense:" + r.defense;
}

// ----------------------------------------------------------------------
// Specifics/Visuals
// ----------------------------------------------------------------------

game.addPlayer( playerConstructor( "Alpha" ) )
game.addPlayer( playerConstructor( "Bravo" ) )
game.addPlayer( playerConstructor( "Charlie" ) )

for( var p in game.players ) {
  for (var i = 0; i < CARDS_PER_PLAYER; ++i ) {
    game.players[ p ].addCard( getPokemonCardNr() );
  }
}

$(document).ready( function(){
  for( var p_idx in game.players ) {
    playerBuildDOMElements( p_idx );
    for ( var c_idx in game.players[ p_idx ].hand ) {
      $.get(
        (POKEMON_API_ROOT + "/api/v1/pokemon/" + game.players[ p_idx ].hand[ c_idx ] + "/"),
        playerUpdateDOMElements.bind( undefined, p_idx, c_idx ),
        "json"
      );
    }
  }
});
