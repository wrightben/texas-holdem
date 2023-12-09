// ------------------------------
// NOTES
// ------------------------------
/* 
	THINK: Play every hand 50,000+ times against N opponents
	DO: Comment out the last few lines in texas-holdem.js that play a single game
*/


// console.log("Current directory:", __dirname);
const hole_cards = require('./Hole Cards/hole_cards.json');
const texas_holdem = require('./../texas-holdem');

// ------------------------------
// REQUIRE executed correctly?
// ------------------------------
// console.log(texas_holdem);

var _hc = "78";
if (typeof process.argv[2] != "undefined") {
	_hc = hole_cards[process.argv[2]];
}

var results = [];
	
for (var i = 1; i <= 50000; i++) {

	var	players = 3,
		shared = 5,

	cardsAsPlayers = texas_holdem.getCardsAsPlayers(players, 
		texas_holdem.getCards([players, [
				_hc // GAME: from hole_cards[index]				
// 				texas_holdem.getCardsFromString("js jh"), texas_holdem.getCardsFromString("as ah") // GAME: From hole cards as string
			]
		], shared)
	);


	// GAME: from hole cards and shared cards as string	
// 	players = 6;
// 	cardsAsPlayers = texas_holdem.getCardsAsPlayers( players, texas_holdem.getCardsFromString("2d 7c tc 3c jd 7s th as kc kd 6c ad 8s 5d 2s td 2c") );
		

	hands = texas_holdem.evaluateHands( cardsAsPlayers );
	bestHands = texas_holdem.getBestHands(hands);
	results.push(bestHands);

};


// JSON
console.log( JSON.stringify(results) );