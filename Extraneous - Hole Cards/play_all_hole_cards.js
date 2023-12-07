// Idea: Play every hand 500,000 times against n opponents

// console.log("Current directory:", __dirname);

const hole_cards = require('./hole_cards.json');
const texas_holdem = require('./../texas-holdem');

// console.log(hole_cards[1]);

hole_cards.forEach(function(e) {

	for (var i = 1; i < 500; i++) {

// 		var	players = 6,
// 			shared = 5,	// community cards
// 	
// 			cards = getCards( players, shared );	// shared optional; 5 default
// 	
// 			hands = evaluateHands( 
// 				getCardsAsPlayers(players, cards)
// 			);
// 	
// 			bestHands = getBestHands(hands); // see comment @return in getBestHands
// 	
// 		console.log( JSON.stringify(bestHands) );

		console.log(i);
	
	};

});