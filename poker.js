var faceValues = [
	"Ah", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "Th", "Jh", "Qh", "Kh",
	"Ad", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "Td", "Jd", "Qd", "Kd",
	"As", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "Ts", "Js", "Qs", "Ks",
	"Ac", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "Tc", "Jc", "Qc", "Kc"
];

var cards = [
	0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,
	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,		
	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,		
	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51
];


// Generate random integers
var getDeck = function( players /* (int 0-23) */, shared /* int (0,3,4,5) */ ) {

	var _c = cards.slice();

	if ( typeof players == "undefined" ) { return [ "players = 0" ]; }
	if ( typeof shared == "undefined" ) { shared = 5; }	

	var	_ = [],
		count = shared + ( players * 2 ),
		j;

	for ( var i = 0; i < count; i++ ) {

		j = Math.floor( Math.random() * Math.floor( 52 ) );

		while ( _c[j] == -1  ) { j = Math.floor( Math.random() * Math.floor( 52 ) ); }

		_.push( _c[j] );
		_c[j] = -1;

	}

	return _;

}


var getFaceValues = function( _array ) {
	var	_ = [];
	_array.forEach(function (a, e) {
		_.push(faceValues[a]);
	});
	return _;
}


var faceValueToNum = function( a, hc ) {
	
	if (typeof hc == "undefined") { hc = false; }

	var s = Math.floor(a / 13);
	var f = a - (s*13);

	if ( ( hc == true ) && ( f == 0 ) ) { f = 13; }

	return f; 
	
}


// Evaluate hands
var	evaluateHand = function( _array ) {

	var	i = 0, 
		_l = _array.length,
		c, s;
		
	var	_o = {
		"rank"		:1,
		"readable"	:"",
		"suit"		:-1, // Flush Suit
		"straight"	:-1
/*		value, // (array)
		cards, 
		faceValues,
		groups {
			_values,
			_suits, 
			_collections,
		}*/
	};


	// COLLECTION
	var	_values = [
			// Values (0s, 1s, 2s, 3s ...); FaceValue
			[], [], [], [], [], [], [], [], [], [], [], [], []
		];
			
	var _suits = [	
			// Suits (0-12), (13-25), (26-38), (39-51); FaceValue
			[], [], [], []
		]; 

	// GROUP 1: by value, suit; Flush?
	var _fc = 0;
	for (i = 0; i < _l; i++ ) {
		c = _array[i];
		s = Math.floor(c / 13);	
		_values[ c - (s*13) ].push(c);
		_fc = _suits[s].push(c);
		if ( _fc > 4 ) { _o.suit = s; }
	}


	// COLLECTION
	var _collections = [ 
		// High Cards, Pairs, Trips, Quads; !FaceValue
		[], [], [], [] 
	];
	
	// GROUP 2: by HC, Pairs, Trips, Quads
	for (i = 0; i < 13; i++) {
		if (_values[i].length > 0) {
			_collections[_values[i].length - 1].push( faceValueToNum(i, true) ); // Group			
		}
	}
	

	// RANK, VALUE
	if ( _collections[3].length > 0 ) { // (8) Four
		_o.rank = 8;
		_o.value = _collections[3];
	} else if ( _collections[2].length > 1 || (( _collections[2].length > 0) && (_collections[1].length > 0)) ) { // (7) Full House
		_o.rank = 7;
		( _collections[2].length > 1 ) ? // o.value = [pair, trips]
			_o.value = [ _collections[2][_collections[2].length - 2], _collections[2][_collections[2].length - 1] ]:
			_o.value = [ _collections[1][_collections[1].length - 1],  _collections[2][0] ];
	} else if ( _o.suit != -1 ) { // (6) Flush (See Group 1)


		// (9) Straight Flush?
		if ( _o.straight != -1 ) {

		}

		if ( _o.rank < 9 ) {				
			_o.rank = 6;
			_o.value = _suits[_o.suit];			
		}

	} else if ( _o.straight != -1 ) { // (5) Straight (See Group 2)
		_o.rank = 5;
		_o.value = [ _o.straight ];
	} else if ( _collections[2].length > 0 ) { // (4) Trips
		_o.rank = 4;
		_o.value = _collections[2];
	} else if ( _collections[1].length > 1 ) { // (3) Pair x 2
		_o.rank = 3;
		_o.value = _collections[1];
	} else if ( _collections[1].length > 0 ) { // (2) Pair x 1
		_o.rank = 2;
		_o.value = _collections[1];
	} else { // (1) High Card
		_o.rank = 1;
		_o.value = _collections[0]; 
	}
	
	_o.cards = _array;
	_o.faceValues = getFaceValues( _array );
	_o.groups = {
		"values" : _values,
		"suits" : _suits,
		"collections" : _collections
	};
	
	_o.readable = ["High Card", "One Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush", "Royal Flush"][_o.rank - 1] + ": " + _o.value;
	
	return _o;

}


var	compareHands = function( _array ) {

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

};



// Node
var setExports = function() {
	if (typeof exports !== "undefined") {
		exports.getDeck = getDeck;
		exports.getFaceValues = getFaceValues;
		exports.evaluateHand = evaluateHand;
	}
}
setExports();






var	players = 10,
	shared = 5,
	hands = [],
	deck = getDeck( players, shared );

// Slice Deck: Create hands
// for (var i = 2; i <= 2*players; i += 2) {
// 	hands.push( evaluateHand( [].concat( 
// 		deck.slice(i-2, i), 
// 		deck.slice( deck.length-shared, deck.length ) 
// 	) ) );
// }
// 
// 
// console.log( compareHands(hands) );
console.log( JSON.stringify(evaluateHand( [24,25,23,4,13,39,22] )) );
// console.log( getFaceValues([11,12,10,4,0,26,9]));

// ["Qh","Kh","Jh","5h","Ah","As","Th"]