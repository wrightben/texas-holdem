var faceValues = [
	"Ah", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "Th", "Jh", "Qh", "Kh",
	"Ad", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "Td", "Jd", "Qd", "Kd",
	"As", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "Ts", "Js", "Qs", "Ks",
	"Ac", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "Tc", "Jc", "Qc", "Kc"
];

var numbers = [
//	A	2	3	4	5	6	7	8	9	10	J	Q	K	A
	0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,
	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,		
	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,		
	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51
];


// Function: Generate array of random integers; Default [].length = 7
var getCards = function( players /* (int 0-23) || [ (int 0-23), [ [],[],... ] ]  */, shared /* int (0,3,4,5) */ ) {

	var _c = numbers.slice();
	
	// Closure: var _c = numbers.slice();
	var getCard = function() {

		var n = Math.floor( Math.random() * Math.floor( 52 ) );
		var _ = 0;
		
		while ( _c[n] == -1  ) { j = Math.floor( Math.random() * Math.floor( 52 ) ); }

		_ = _c[n];
		_c[n] = -1;
		
		return _;
		
	}
	
	// Requires: getCard()
	var	_ = [],
		_players = [];
		
	if ( typeof players == "undefined" ) { players = 1; }
	if ( Array.isArray(players) ) {

		_players = players[1]; 	// Seed Cards
		players = players[0];	// # Players
		
		_players.forEach(function(a,e) { 
			if (a.length < 2) { a.push( getCard() ); }
			_.push( a[0],a[1] );
		});

	}
	
	if ( typeof shared == "undefined" ) { shared = 5; }	

	count = ( players * 2 ) + shared - ( _players.length * 2 );

	for ( var i = 0; i < count; i++ ) { _.push( getCard() ); }

	return _;

}


// Function: Create array of arrays: [[2,3],[3,4]]
var getCardsAsPlayers = function( players, cards ) {
	var _ = [],
		_p = 2 * players;
	for (var i = 2; i <= _p; i += 2) {
		_.push( [].concat( 
			cards.slice(i-2, i), 
			cards.slice( cards.length-shared, cards.length ) 
		) );
	}
	return _;
}


// Function: 3 -> "4h"
var getFaceValues = function( _array ) {
	var	_ = [];
	_array.forEach(function (a, e) { _.push(faceValues[a]); });
	return _;
}


// Function: 29 -> 3; Confusing: 0 -> 13
var numToFaceValue = function( n, hc ) {
	
	if (typeof hc == "undefined") { hc = false; }

	var s = Math.floor(n / 13);
	var f = n - (s*13);

	if ( ( hc == true ) && ( f == 0 ) ) { f = 13; }

	return [n,f,s]; // Num, Face, Suit
	
}


// Function: 
var isSequence = function (_sc, req) {

	if (typeof req == "undefined") { req = 5; }
	
	var _1 = _sc.slice(0,_sc.length).sort(function(a,b) { return a - b; });
	
	for (var i = 0; i < _1.length; i++) { _1[i] = numToFaceValue(_1[i])[1]; }

	if (_1[0] == 0) { _1.push(13); } // face + ace
	
	var	_c = 0,
		_hc = -1;
	
	for (var i = 1; i < _1.length; i++) {
		
		( _1[i-1] + 1 == _1[i] ) ? _c += 1 : _c = 0;
		
		if (_c >= req - 1) { _hc = _1[i]; }
	}
	
	return _hc;

}


// Function: 
var	evaluateHand = function( _array ) {

	var	i = 0, 
		_l = _array.length,
		_sc = [], // sequence counter (straight)
		_fc = 0, // suit-length counter (flush)
		_n;
		
	var	_o = {
		"rank"			:1,		// Full House: 6
		"label"			:"", 	// Label: "Full House", "High Card"
		"value"			:[], 	// Full House of 333,22 = [2,3], Straight 1,2,3,4,5 = [5], Two Pair 33,22 = [2,3]
		"cards"			:[],
		"faceValues"	:[],
		"straight"		:-1,
		"suit"			:-1, 	// Index of groups._suits with length > 5
		"flush"			:-1
		/*groups {
			_values,
			_suits, 
			_collections,
		}*/
	};


	// COLLECTION
	var	_values = [
			// Values (0s, 1s, 2s, 3s ...); !FaceValue ([0,26]=0,26)
			[], [], [], [], [], [], [], [], [], [], [], [], []
		];
			
	var _suits = [	
			// Suits (0-12), (13-25), (26-38), (39-51); !FaceValue ([0,26]=0,26)
			[], [], [], []
		]; 

	// GROUP 1: by value, suit; Flush?
	for (i = 0; i < _l; i++ ) {
		
		_n = numToFaceValue( _array[i], false ); // [Num, Face, Suit]
		_values[ _n[1] ].push( _n[0] );
		_fc = _suits[ _n[2] ].push( _n[0] );
		if ( _fc > 4 ) { _o.suit = _n[2]; }

	}


	// COLLECTION
	var	_collections = [ 
			// High Cards, Pairs, Trips, Quads; FaceValue ([0,26]=13)
			[], [], [], [] 
		],
		_c0 = _collections[0],
		_c1 = _collections[1],
		_c2 = _collections[2],
		_c3 = _collections[3];
	
	// GROUP 2: by HC, Pairs, Trips, Quads
	for (i = 0; i < 13; i++) {
		if (_values[i].length > 0) {
			_collections[_values[i].length - 1].push( numToFaceValue(i, true)[1] ); // Group		
			_sc.push(i);
		}
	}
	
	// isSequence: STRAIGHT
	_o.straight = isSequence(_sc); // Consider [0,1,2,3,4,18]: Straight Flush: [0,1,2,3,4], Straight: [1,2,3,4,18]
	
	


	// Rank, Value
	if ( _c3.length > 0 ) { // (8) Four
		_o.rank = 8;
		_o.value = [].concat( _c3, _c0.slice(-1) );
		
	} else if ( _c2.length > 1 || (( _c2.length > 0 ) && ( _c1.length > 0 )) ) { // (7) Full House
		_o.rank = 7;
		( _c2.length > 1 ) ? // o.value = [pair, trips]
			_o.value = _c2.slice(-2):
			_o.value = [].concat( _c1.slice(-1), _c2[0] );
			
	} else if ( _o.suit != -1 ) { // Flush (See Group 1)

		// (9,10) Straight Flush
		if ( _o.straight != -1 ) {
			// isSequence: FLUSH
			_o.flush = isSequence(_suits[_o.suit]);
			if (_o.flush != -1) { _o.rank = 9; _o.value = [_o.flush]; }
			if (_o.flush == 13) { _o.rank = 10; _o.value = [_o.flush]; }			
		}
		
		// (6) Flush 
		if ( _o.rank < 9 ) {				
			_o.rank = 6;
			_o.value = _suits[_o.suit].slice(-5).sort(function(a,b) { return a - b; });			
		}

	} else if ( _o.straight != -1 ) { // (5) Straight (See Group 2)
		_o.rank = 5;
		_o.value = [ _o.straight ];
		
	} else if ( _c2.length > 0 ) { // (4) Trips
		_o.rank = 4;
		_o.value = [].concat( _c0.slice(-2), _c2.slice(-1) );
		
	} else if ( _c1.length > 1 ) { // (3) Pair x 2
		_o.rank = 3;
		(_c1.length > 2) ? 
			_o.value = _c1.slice(-3):
			_o.value = [].concat( _c0.slice(-1), _c1.slice(-2) );
			
	} else if ( _c1.length > 0 ) { // (2) Pair x 1
		_o.rank = 2;
		_o.value = _c0.slice(-3).concat(_c1.slice(-1));
		
	} else { // (1) High Card
		_o.rank = 1;
		_o.value = _c0.slice(-5);
	}
	
	// Object: 
	_o.cards = _array;
	_o.faceValues = getFaceValues( _array );
	_o.groups = {
		"values" : _values,
		"suits" : _suits,
		"collections" : _collections
	};
	_o.label = [
		"High Card", "One Pair", "Two Pair", "Three of a Kind", 
		"Straight", "Flush", "Full House", "Four of a Kind", 
		"Straight Flush", "Royal Flush"
	][_o.rank - 1];
	
	return _o;

}


var evaluateHands = function ( _array ) {
	var _ = [];
	_array.forEach(function(a,e) { _.push( evaluateHand(a) ); });
	return _;
}


var compareHands = function( _array ) {try {

	var _ = {}, i;
	
	_array.sort(function(a,b) {
		
		// Ranks NOT equal, sort by rank
		if (b.rank != a.rank) { return b.rank - a.rank; } // Sort by rank
	
		// Ranks ARE equal, sort by value
		for (i = b.value.length - 1; i >= 0; i--) {
			if ( b.value[i] != a.value[i] ) { return b.value[i] - a.value[i]; }
		}
											
	});
	
	return _array;

} catch (E) {
	console.log('compareHands: '+E);
}}



// Node:
// var Poker = require('./poker.js'); 
// var getCards = require('./poker.js').getCards;
var setExports = function() {
	if (typeof exports !== "undefined") {
		exports.getCards = getCards;
		exports.getCardsAsPlayers = getCardsAsPlayers;
		exports.getFaceValues = getFaceValues;
		exports.evaluateHand = evaluateHand;
		exports.evaluateHands = evaluateHands;
	}
}
setExports();



// var	players = 10,
// 	shared = 5,
// 	hands = [],
// 	cards = getCards( players, shared ),
// 	hands = evaluateHands(getCardsAsPlayers( players, cards )),
// 	rankSortedHands = compareHands(hands);

console.log(getCards([3,[ [10],[3] ]]))

