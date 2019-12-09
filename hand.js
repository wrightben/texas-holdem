// DOC:
// $ node hand.js

// VARS
var Hand = require('pokersolver').Hand;
var Poker = require('./poker.js');
	

var getSolvedHandSummary = function( hands ) {
	
	var solvedHands = [],
		_output = [];

	// Individual solved hands
	var _seatRank = [];
	hands.forEach(function (a,e) {
		_solvedHand = Hand.solve( a );
		_seatRank.push( [  _solvedHand.rank, _solvedHand.descr ] );
		solvedHands.push( _solvedHand );
	});

	// Winners
	var winners = Hand.winners( solvedHands ); // winners = [ ];

	// Find positions of winners
	var _positions = [];
	winners.forEach(function(a, e) {

		var p = 0;
		solvedHands.some(function(b,y) {
			if (a == b) {
				p = y; // Seat of winner
				return true;
			}
		});
	
		_positions.push( p+1 ); // Seat of winner

	});

	// Return
	_output.push( _positions );
	_output.push ( _seatRank );
	return _output;
	
}



for (var i = 0; i < 1000000; i++) {

	var cards = Poker.getCards(3); // Three players
	var fv = Poker.getFaceValues(cards);
	var u =  Poker.evaluateHand( cards );
	var t = Hand.solve( fv );

	console.log(i, fv);
	if ( u.rank != t.rank ) {
		console.log( "::: REVIEW :::" );
		console.log( JSON.stringify( u ) );
		console.log( JSON.stringify( t ) );
		console.log(u.rank, t.rank);
	}
}

