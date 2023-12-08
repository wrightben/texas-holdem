// ------------------------------
// NOTES
// ------------------------------
/* 
	
*/


// console.log("Current directory:", __dirname);
const hole_cards = require('./Hole Cards/hole_cards.json');
const texas_holdem = require('./../texas-holdem');


// ------------------------------
// REQUIRE executed correctly?
// ------------------------------
// console.log(texas_holdem);
var getIndex = function(_arr) {
	var _s = JSON.stringify(_arr);
	var _i = -1;
	
	hole_cards.forEach(function(e,i) {
		if (JSON.stringify(e) == _s) {
			_i = i;
		}
	});
	
	return _i;
};

var verifyCards = function(_arr) {
	var cards = texas_holdem.getCards([1, [
				_arr
			]
	], 5);
	
	console.log(cards);
};


if (typeof process.argv[2] != "undefined") {

	// INDEX of hole_cards.json
	var _hc = process.argv[2];
	console.log(_hc, hole_cards[_hc], texas_holdem.getFaceValues(hole_cards[_hc]).join(" ").toLowerCase() );

} else {

	// NOTE: The following lines all print the same 3 pieces of information requiring just 1 of the 3 pieces of information.

	// ORDINALS
	var _hc = [35,0];
	console.log(getIndex(_hc), _hc,  texas_holdem.getFaceValues(_hc).join(" ").toLowerCase() );




	// INDEX of hole_cards.json
	var _hc = 78;
	console.log(_hc, hole_cards[_hc], texas_holdem.getFaceValues(hole_cards[_hc]).join(" ").toLowerCase() );




	// FACEVALUES
	var _hc = "ad ah"
	_hcfs = texas_holdem.getCardsFromString(_hc).sort(function(a,b) {
		return b - a;
	});
	console.log(getIndex(_hcfs) ,_hcfs, texas_holdem.getFaceValues(_hcfs).join(" ").toLowerCase() );
// 	verifyCards(_hcfs);

}