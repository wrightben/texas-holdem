// ------------------------------
// NOTES
// ------------------------------
/* 
	THINK: Play every hand 500,000 times against n opponents
	DO: Comment out the last few lines in texas-holdem.js that play a single hand
*/


// console.log("Current directory:", __dirname);
const hole_cards = require('./Hole Cards/hole_cards.json');
const texas_holdem = require('./../texas-holdem');

// ------------------------------
// REQUIRE executed correctly?
// ------------------------------
// console.log(texas_holdem);

var _hc = "211";
if (typeof process.argv[2] != "undefined") {
	_hc = hole_cards[process.argv[2]];
}

var results = [];

for (var i = 1; i <= 95000; i++) {

	var	players = 6,
		shared = 5,

	cards = texas_holdem.getCards( players, shared );

	cardsAsPlayers = texas_holdem.getCardsAsPlayers(players, 
		texas_holdem.getCards([players, [
				_hc
			]
		], shared)
	);

	hands = texas_holdem.evaluateHands( cardsAsPlayers );

	bestHands = texas_holdem.getBestHands(hands);

	results.push(bestHands);

};


// JSON
console.log( JSON.stringify(results) );