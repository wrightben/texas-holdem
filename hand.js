// DOC:
// $ node hand.js

// VARS
var Hand = require('pokersolver').Hand,
	solvedHands = [],
	hands = require('./cards.json'); // Built with cards.pl

hands.forEach(function (a,e) {
	solvedHands.push( Hand.solve( a ) );
});

// winners: (array)
var winners = Hand.winners( solvedHands );

// SUMMARY OUTPUT
console.log('----------');
console.log('RESULT')
console.log('Winners: '+winners.length);
console.log('----------');

winners.forEach(function(a, e) {

	var p = 0;
	solvedHands.some(function(b,y) {
		if (a == b) {
			p = y;
			return true;
		}
	});
	
	// SUMMARY OUTPUT
	console.log('Seat ' + (p+1) +': ' + a.descr + " (Rank: " + a.rank + ")");
	console.log(hands[p]);
	console.log("\n");

});

// SUMMARY OUTPUT
console.log("Hands:\n");
console.log(hands);