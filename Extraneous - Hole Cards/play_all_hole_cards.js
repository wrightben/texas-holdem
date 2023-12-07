// ------------------------------
// NOTES
// ------------------------------
// Idea: Play every hand 500,000 times against n opponents




// console.log("Current directory:", __dirname);
const hole_cards = require('./hole_cards.json');
const texas_holdem = require('./../texas-holdem');

// ------------------------------
// REQUIRE executed correctly?
// ------------------------------
// console.log(texas_holdem);
// console.log(hole_cards[1]);


// ------------------------------
// Play All Hole Cards
// ------------------------------
hole_cards.forEach(function(e) {

// 	e = [44,19];
// 	console.log(e, typeof e);

	try {
		for (var i = 1; i <= 7; i++) {

			var	players = 6,
				shared = 5,

			cards = texas_holdem.getCards( players, shared );

			hands = texas_holdem.evaluateHands( 
				texas_holdem.getCardsAsPlayers(players, texas_holdem.getCards([players, [e]], shared))
			);

			bestHands = texas_holdem.getBestHands(hands);

			console.log( JSON.stringify(bestHands) );

		};

	} catch (error) {
		console.error(error);
	}

});