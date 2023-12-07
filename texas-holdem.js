var faceValues = [
	"Ah",	"2h",	"3h",	"4h",	"5h",	"6h",	"7h",	"8h",	"9h",	"Th",	"Jh",	"Qh",	"Kh",	
	"Ad",	"2d",	"3d",	"4d",	"5d",	"6d",	"7d",	"8d",	"9d",	"Td",	"Jd",	"Qd",	"Kd",	
	"As",	"2s",	"3s",	"4s",	"5s",	"6s",	"7s",	"8s",	"9s",	"Ts",	"Js",	"Qs",	"Ks",	
	"Ac",	"2c",	"3c",	"4c",	"5c",	"6c",	"7c",	"8c",	"9c",	"Tc",	"Jc",	"Qc",	"Kc"
];

var ordinals = [
	0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12, 	// ] nominals
	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,		
	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,		
	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51	
]; //	A	2	3	4	5	6	7	8	9	10	J	Q	K	A

var faceValuesToOrdinals = {
	"ah": 0, "2h": 1, "3h": 2, "4h": 3, "5h": 4, "6h": 5, "7h": 6, "8h": 7, "9h": 8, "th": 9, "jh":10, "qh":11, "kh":12,
	"ad":13, "2d":14, "3d":15, "4d":16, "5d":17, "6d":18, "7d":19, "8d":20, "9d":21, "td":22, "jd":23, "qd":24, "kd":25,
	"as":26, "2s":27, "3s":28, "4s":29, "5s":30, "6s":31, "7s":32, "8s":33, "9s":34, "ts":35, "js":36, "qs":37, "ks":38,
	"ac":39, "2c":40, "3c":41, "4c":42, "5c":43, "6c":44, "7c":45, "8c":46, "9c":47, "tc":48, "jc":49, "qc":50, "kc":51
}; // Required by getCardsFromString

// Function: Generate array of random integers; Default [].length = 7 (1 player + 5 hole cards)
var getCards = function( players /* (int 0-23) || [ (int 0-23), [ [],[],... ] ]  */, shared /* int (0,3,4,5) */ ) {

	if ( typeof players == "undefined" ) { players = 1; }
	if ( typeof shared == "undefined" ) { shared = 5; }	

	var _c = ordinals.slice();
	
	// Requires: var _c = ordinals.slice();
	var getCard = function() {

		var n = Math.floor( Math.random() * 52 );
		var _ = 0;
		
		while ( _c[n] == -1  ) { n = Math.floor( Math.random() * 52 ); }

		_ = _c[n];
		_c[n] = -1;
		
		return _;
		
	}

	// Requires: getCard()
	var	_ = []; // Return object: List of cards
	var	_set = []; // [ [], [], ...]: Predetermined hole cards (1 or 2) for n <= players
				
	if ( Array.isArray(players) ) {

		_set = players[1]; 	// Seed Cards
		players = players[0];	// # Players
		
		if (players < _set.length) { 
			return "players is less than _set.length";  
		}
		
		_set.forEach(function(a,e) { // Predetermined cards, fill in
		
			_c[a[0]] = -1;
			_.push( a[0], a[1] || getCard() );
			_c[ _[_.length - 1] ] = -1;
			
		});

	}
	
	var count = ( players * 2 ) + shared - ( _set.length * 2 );
	
	for ( var i = 0; i < count; i++ ) { _.push( getCard() ); }

	return _;

}

var getCardsFromString = function( ascii ) {
	
	cards = ascii.split(" ");
	cards.forEach(function(e,i) {
		cards[i] = faceValuesToOrdinals[e];
	});

	//console.log( ascii, "\n", cards.join(" ") );
	return cards;
}


// Function: Create array of arrays: [[2,3],[3,4]]
var getCardsAsPlayers = function( players, cards ) {
	if (! Array.isArray(cards)) { return "cards is not array"; }

	var _ = [],
		_p = 2 * players,
		_length = cards.length,
		_shared = _length - ( _length - (players * 2) );
		
	for (var i = 2; i <= _p; i += 2) {
		_.push( [].concat( 
			cards.slice(i-2, i), 
			cards.slice( _shared, _length ) 
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


// Function: o(rdinal) (int), hc (boolean)
var ordinalToNominal = function( o, hc ) {

	if ( typeof o == "undefined" ) { return [-1,-1,-1]; }

	var	s = Math.floor(o / 13),
		n = o - (s*13);

	if ( Boolean(hc) && ( n == 0 ) ) { n = 13; }

	return [o,n,s]; // Ord (42), Nom (3), Suit (3); Face (4c)
	
}


// Function: _array (int), req (int): num cards required
var isSequence = function ( _array, req ) {

	if (typeof req == "undefined") { req = 5; } // Unused

	var	_s = _array.slice(); // _array contains no dupes

	_s.forEach(function(e,i) {
		_s[i] = ordinalToNominal(e,true)[1]; // [1-13]
	});

	_s.sort(function(a,b){ return a-b; }); // [L..H]

	if (_s[_s.length - 1] == 13) { _s.unshift(0); } // [a..13] = [0,a..13]

	for (var i = (_s.length - 1); (i - 4) >= 0; i--) { // [ (L-4)..L ]
		
		// Straight: [b] - [a] = 4
		// Return [b] as high card if straight
		if ( _s[i] - _s[i-4] == 4 ) { return _s[i]; }
		 
	}
	
	// No straight
	return -1;

}


var	evaluateHand = function( _array ) {

	var	i = 0, 
		_l = _array.length,
		_sc = [], // sequence counter (straight)
		_fc = 0, // suit-length counter (flush)
		_n;
		
	var	_o = {
			"rank"		:1,	// Full House: 6
			"label"		:"",	// Label: "Full House", "High Card"
			"value"		:[],	// Full House of 333,22 = [2,3], Straight 1,2,3,4,5 = [5], Two Pair 33,22 = [2,3]
			"cards"		:[],
			"faceValues"	:[],
			"straight"	:-1,
			"suit"		:-1,	// Index of groups._suits with length > 5
			"flush"		:-1
			/*groups {		// Added below
				_nominals,
				_suits, 
				_collections,
			}*/
	};


	// COLLECTION (Group 1)
	var	_nominals = [
			// nominals (0s, 1s, 2s, 3s ... 12s)
			[], [], [], [], [], [], [], [], [], [], [], [], []
		];
			
	var _suits = [	
			// Suits (0-12), (13-25), (26-38), (39-51)
			[], [], [], []
		]; 

	// GROUP 1: by nominal, suit; Flush?
	for (i = 0; i < _l; i++ ) {
		
		_n = ordinalToNominal( _array[i], false );
		_nominals[ _n[1] ].push( _n[0] );
		_fc = _suits[ _n[2] ].push( _n[0] );
		if ( _fc > 4 ) { _o.suit = _n[2]; }

	}


	// COLLECTION (Group 2)
	var	_collections = [ 
			[], [], [], []  // High Cards, Pairs, Trips, Quads; by nominal ([0,13,26,39] = 13)
		],
		_c0 = _collections[0],
		_c1 = _collections[1],
		_c2 = _collections[2],
		_c3 = _collections[3];
	
	// GROUP 2: by HC, Pairs, Trips, Quads
	for (i = 0; i < 13; i++) {
		if (_nominals[i].length > 0) {
			_collections[_nominals[i].length - 1].push( ordinalToNominal(i, true)[1] ); // Group		
			_sc.push(i);
		}
	}
	// Sort Ace
	_c0.sort(function(a,b) {return a-b});
	_c1.sort(function(a,b) {return a-b});
	_c2.sort(function(a,b) {return a-b});	
	_c3.sort(function(a,b) {return a-b});
	
	// isSequence: STRAIGHT
	_o.straight = isSequence(_sc); // Consider [0,1,2,3,4,18]: Straight Flush: [0,1,2,3,4], Straight: [1,2,3,4,18]
	
	


	// Object: 
	// Set _o.rank, _o.value
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
			if (_o.flush == 13) { _o.rank = 10; }			
		}
		
		// (6) Flush 
		if ( _o.rank < 9 ) {				
			_o.rank = 6;
			_o.value = _suits[_o.suit].slice(-5).sort(function(a,b) { 
				return ordinalToNominal(a,true)[1] - ordinalToNominal(b,true)[1];
			});			
		}

	} else if ( _o.straight != -1 ) { // (5) Straight (See Group 2)
		_o.rank = 5;
		_o.value = [ _o.straight ];
		
	} else if ( _c2.length > 0 ) { // (4) Trips
		_o.rank = 4;
		_o.value = [].concat( _c0.slice(-2), _c2.slice(-1) );
		
	} else if ( _c1.length > 1 ) { // (3) Pair x 2
		_o.rank = 3;
		_o.value = [].concat(
			Math.max(	
				ordinalToNominal(_c0[_c0.length -1],true)[1],
				ordinalToNominal(_c1[_c1.length - 3],true)[1]
			),		// Math.max(HC, 3rd Pair); ordinalToNominal converts "undefined" to -1
			_c1.slice(-2)	// 2nd Pair, 1st Pair
		);
	
	} else if ( _c1.length > 0 ) { // (2) Pair x 1
		_o.rank = 2;
		_o.value = _c0.slice(-3).concat(_c1.slice(-1));
		
	} else { // (1) High Card
		_o.rank = 1;
		_o.value = _c0.slice(-5);
	}
	
	
	
	
	// Object: 
	// Set other props
	_o.cards = _array;
	_o.faceValues = getFaceValues( _array );
	_o.groups = {
		"nominals" : _nominals,
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
	_array.forEach(function(a,e) { 
		var hand = evaluateHand(a);
		hand.position = e;
		_.push( hand ); 
	});
	return _;
}


var _sort = function( a, b ) {
	
	// Ranks NOT equal, sort by rank
	if (b.rank != a.rank) { return b.rank - a.rank; } // Sort by rank

	// Ranks ARE equal, sort by value
	i = b.value.length - 1;
	while ( (i > 0) && (ordinalToNominal(a.value[i],true)[1] == ordinalToNominal(b.value[i],true)[1]) ) {
		i --;
	}
	
	return ordinalToNominal(b.value[i],true)[1] - ordinalToNominal(a.value[i],true)[1];
	
}


var equals = function( a, b ) {
	
	return Boolean(0 == _sort(a,b));

}


var sortHands = function( _array ) {
	
	return _array.slice().sort(_sort);
	
}


var getBestHands = function( _hands ) {
	
	var	i = 1,
		sortedHands = sortHands(_hands),
		_ri = [ sortedHands[0].position ];
	
	while( (i < sortedHands.length) && (equals(sortedHands[0], sortedHands[i]))  ) {
		_ri.push( sortedHands[i].position );
		i += 1;
	}
	
	//@return [ [hand.position] of best in hands[], sortedHands ]
	// _ri[i] = hand.position ( _ri is an ordered list of best hands ) 
	return [ _ri, sortedHands ]; 
	
}


// Node: setExports()
// var Holdem = require('./texas-holdem.js'); 
// var getCards = require('./texas-holdem.js').getCards;
var setExports = function() {
	if (typeof exports !== "undefined") {
		exports.getCards = getCards;
		exports.getCardsAsPlayers = getCardsAsPlayers;
// 		exports.getFaceValues = getFaceValues;
// 		exports.evaluateHand = evaluateHand;
		exports.evaluateHands = evaluateHands;
		exports.sortHands = sortHands;	
		exports.getBestHands = getBestHands;	
	}
}
setExports();


var	players = 6,
	shared = 5,	// community cards
	
	cards = getCards( players, shared );	// shared optional; 5 default
	
	hands = evaluateHands( 
		getCardsAsPlayers(players, cards)
	);
	
	bestHands = getBestHands(hands); // see comment @return in getBestHands
	
console.log( JSON.stringify(bestHands) );