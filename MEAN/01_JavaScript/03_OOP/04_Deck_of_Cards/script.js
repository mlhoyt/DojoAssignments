// -*- javascript -*-

// Assignment IV: Deck of Cards
//
// Create a Deck object constructor. A deck should have the following functionality:
// - The Deck should contain the 52 standard cards
// - The Deck should be able to shuffle
// - The Deck should be able to reset
// - The Deck should be able to deal a random card
//   - Deal should return the card that was dealt and remove it from the deck
//
// Now create a Player object constructor. A Player should have the following functionality:
// - The Player should have a name
// - The Player should have a hand
// - The Player should be able to take a card (use the deck.deal method)
// - The Player should be able to discard a card
//
// Optional:
// - Create a blackjack game with your deck of cards!
//   - A deck of card image set can be found here
//   - Or Unicode them Unicode for card images!

// ######################################################################
// MVC:MODEL/S
// ######################################################################

const DECK_SUITS = [ "CLUBS", "DIAMONDS", "HEARTS", "SPADES" ];
const DECK_RANKS = [ "ACE", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING" ];

class Deck {
  constructor() {
    // this._SUITS = [ "CLUBS", "DIAMONDS", "HEARTS", "SPADES" ];
    // this._RANKS = [ "ACE", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING" ];

    this.cards = [];
    this.reset();
  }
}

Deck.prototype.reset = function() {
  this.cards = [];

  for( var suit_idx in DECK_SUITS ) {
    for( var rank_idx in DECK_RANKS ) {
      this.cards.push({
        suit: DECK_SUITS[ suit_idx ],
        rank: DECK_RANKS[ rank_idx ]
      });
    }
  }

  return( this );
}

Deck.prototype.shuffle = function() {
  const N = this.cards.length;
  for( var i = 0; i < N; ++i ) {
    var j = Math.floor( Math.random() * N );
    // Swap cards at index 'i' and index 'j'
    var tmp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = tmp;
  }

  return( this );
}

Deck.prototype.deal = function() {
  var card = this.cards.pop();
  return( card );
}

Deck.prototype.show = function() {
  for( card_idx in this.cards ) {
    console.log( card_idx, this.cards[ card_idx ] );
  }
}

// ######################################################################
// Testing
// ######################################################################

// var deck1 = new Deck();
// console.log( deck1.cards.length );
// deck1.show();
// console.log( deck1.deal() );
// console.log( deck1.deal() );
// console.log( deck1.deal() );
// deck1.shuffle();
// deck1.show();
// console.log( deck1.deal() );
// console.log( deck1.deal() );
// console.log( deck1.cards.length );

class Player {
  constructor( name ) {
    this.name = name;
    this.hand = [];
  }
}

Player.prototype.draw_card = function( card ) {
  this.hand.push( card );

  return( this );
}

Player.prototype.discard_card = function( card_nr = -1 ) {
  if( card_nr >= 0 && card_nr < this.hand.length ) {
    return( this.hand.splice( card_nr, 1 ) );
  }
  else {
    return( this.hand.pop() );
  }
}

Player.prototype.show = function() {
  console.log( "Player:");
  console.log( "- Name:", this.name );
  console.log( "- Hand:" );
  for( var card_idx in this.hand ) {
    console.log( "  - Card:", this.hand[ card_idx ] );
  }
}

Player.prototype.blackjack_score = 0;

Player.prototype.update_blackjack_score = function() {
  var score = 0;
  var num_aces = 0;
  for( var card_idx in this.hand ) {
    var card_value = DECK_RANKS.indexOf( this.hand[ card_idx ].rank );
    // Handle ACE cards (for alternative score of 11)
    if( card_value == 0 ) {
      num_aces += 1;
      score += 1;
    }
    // Handle 10, JACK, QUEEN, and KING
    else if( card_value > 9 ) {
      score += 10;
    }
    // Handle face-value cards
    else {
      score += (card_value + 1);
    }
  }

  // Handle additional ACE value
  while( num_aces > 0 && score <= 11 ) {
    score += 10;
    num_aces -= 1;
  }

  this.blackjack_score = score;
}

// ######################################################################
// Testing
// ######################################################################

// var player1 = new Player( "Alpha" );
// console.log( player1 );
// player1.show();
//
// var deck1 = new Deck();
// deck1.shuffle();
//
// player1.draw_card( deck1.deal() );
// player1.show();
// player1.draw_card( deck1.deal() );
// player1.show();
// player1.draw_card( deck1.deal() );
// player1.show();
// player1.discard_card( 1 );
// player1.show();

// ######################################################################
// MVC:VIEW/S
// ######################################################################

function view_status_update( msg ) {
  $('#status').html( msg );
}

function view_player_reset() {
  // name
  $('#player_name').html( "Player: " + player.name );

  // hand
  $('#player_hand').empty();

  // actions
  $('#player_draw').hide();
  $('#player_stay').hide();
}

function view_player_update() {
  // name
  $('#player_name').html( "Player: " + player.name + " Score: " + player.blackjack_score );

  // hand
  $('#player_hand').empty();
  for( var card_idx in player.hand ) {
    var el_box = document.createElement( "div" );
    var el_card = document.createTextNode( player.hand[ card_idx ].rank + "-" + player.hand[ card_idx ].suit );
    el_box.append( el_card );
    $('#player_hand').append( el_box );
  }
}

function view_player_enable() {
  $('#player_draw').show();
  $('#player_stay').show();
}

function view_player_disable() {
  $('#player_draw').hide();
  $('#player_stay').hide();
}

function view_dealer_reset() {
  // name
  $('#dealer_name').html( dealer.name );

  // hand
  $('#dealer_hand').empty();
}

function view_dealer_update() {
  // name
  $('#dealer_name').html( "Dealer" + " Score: " + dealer.blackjack_score );

  // hand
  $('#dealer_hand').empty();
  for( var card_idx in dealer.hand ) {
    var el_box = document.createElement( "div" );
    var el_card = document.createTextNode( dealer.hand[ card_idx ].rank + "-" + dealer.hand[ card_idx ].suit );
    el_box.append( el_card );
    $('#dealer_hand').append( el_box );
  }
}

// ######################################################################
// MVC:CONTROLLER
// ######################################################################

deck = new Deck();
player = new Player( "Alpha" );
dealer = new Player( "Dealer" );

function updateGameState( game_state ) {
  if( game_state == "reset" ) {
    // Reset status
    view_status_update( "Status: No game in progress" );

    // Reset player
    view_player_reset();

    // Reset dealer
    view_dealer_reset();
  }
  else if( game_state == "new_game" ) {
    // Reset/Shuffle deck
    deck.reset();
    deck.shuffle();

    // Update status
    view_status_update( "Player's turn" );

    // Deal/Show player
    player.hand = [];
    view_player_reset();
    view_player_enable();

    player.draw_card( deck.deal() );
    player.draw_card( deck.deal() );
    player.update_blackjack_score();
    view_player_update();

    // Deal dealer
    dealer.hand = [];
    view_dealer_reset();

    dealer.draw_card( deck.deal() );
    dealer.draw_card( deck.deal() );
    dealer.update_blackjack_score();
  }
  else if( game_state == "player_draw" ) {
    player.draw_card( deck.deal() );
    player.update_blackjack_score();
    view_player_update();

    if( player.blackjack_score > 21 ) {
      view_status_update( "Player busts (" + player.blackjack_score + ")!  Dealer wins." );
      view_player_disable();
      view_dealer_update();
      game_state = "done";
    }
  }
  else if( game_state == "player_stay" ) {
    view_player_disable();

    while( dealer.blackjack_score < 16 ) {
      dealer.draw_card( deck.deal() );
      dealer.update_blackjack_score();
    }
    view_dealer_update();

    if( dealer.blackjack_score > 21 ) {
      view_status_update( "Dealer busts (" + dealer.blackjack_score + ")!  Player wins." );
      game_state = "done";
    }
    else if( player.blackjack_score > dealer.blackjack_score ) {
      view_status_update( "Player wins." );
      game_state = "done";
    }
    else {
      view_status_update( "Dealer wins." );
      game_state = "done";
    }
  }
}

$(document).ready( function() {
  updateGameState( "reset" );

  $('#new_game').click( function() { updateGameState( "new_game" ); } );

  $('#player_draw').click( function() { updateGameState( "player_draw" ); } );

  $('#player_stay').click( function() { updateGameState( "player_stay" ); } );
});
