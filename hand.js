// DOC:
// $ node hand.js

// VARS
var Hand = require('pokersolver').Hand,
	hands = require('./cards.json'); // Built with cards.pl


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


var getHands = function ( _i, _e, _hands ) {
	
	var _ = [];
	_hands.forEach(function(a,e) {
		_.push( a.slice(_i, _e) );
	});
	
	return _;
	
}


// Hole
console.log( "Result: [Seat #], [Rank] \n");
console.log( getSolvedHandSummary( getHands( 0, 2, hands ) ) );

console.log( getSolvedHandSummary( getHands( 0, 5, hands ) ) );

console.log( getSolvedHandSummary( getHands( 0, 6, hands ) ) );

console.log( getSolvedHandSummary( getHands( 0, 7, hands ) ) );


// SUMMARY OUTPUT
console.log("\nHands:\n");
console.log( hands );