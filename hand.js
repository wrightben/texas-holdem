// DOC:
// $ node hand.js

// VARS
var Hand = require('pokersolver').Hand,
	solvedHands = [],
	hands = require('./cards.json'); // Built with cards.pl

hands.forEach(function (a,e) {
	solvedHands.push( Hand.solve( a ) );
});

// Ties are a problem
var winner = Hand.winners( solvedHands );


// OUTPUT
console.log( 'Hands: '+winner.length );
winner.forEach(function(a, e) {

	console.log( a.descr );
	console.log( "\n" );
	console.log( a.cards );

});