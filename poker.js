var mask = [	
	"Ah",	"2h",	"3h",	"4h",	"5h",	"6h",	"7h",	"8h",	"9h",	"Th",	"Jh",	"Qh",	"Kh",	
	"Ad",	"2d",	"3d",	"4d",	"5d",	"6d",	"7d",	"8d",	"9d",	"Td",	"Jd",	"Qd",	"Kd",	
	"As",	"2s",	"3s",	"4s",	"5s",	"6s",	"7s",	"8s",	"9s",	"Ts",	"Js",	"Qs",	"Ks",	
	"Ac",	"2c",	"3c",	"4c",	"5c",	"6c",	"7c",	"8c",	"9c",	"Tc",	"Jc",	"Qc",	"Kc"
];

var cards = [
	0,	1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,
	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,		
	26,	27,	28,	29,	30,	31,	32,	33,	34,	35,	36,	37,	38,		
	39,	40,	41,	42,	43,	44,	45,	46,	47,	48,	49,	50,	51
];


// Generate random integers
var getDeck = function( players /* (int 0-23) */ ) {

	if ( typeof players == "undefined" ) { return [ "players = 0" ]; }

	var	_ = [],
		count = 5 + ( players * 2 ),
		j;

	for ( var i = 0; i < count; i++ ) {

		j = Math.floor( Math.random() * Math.floor( 52 ) );

		while ( cards[j] == -1  ) { j = Math.floor( Math.random() * Math.floor( 52 ) ); }

		_.push( cards[j] );
		cards[j] = -1;

	}

	return _;

}


// Evaluate hands
var	evaluateHand = function( _array ) {

	// COLLECTION
	var	_ = [
			[	// Values (0s, 1s, 2s, 3s ...)
				[], [], [], [], [], [], [], [], [], [], [], [], []
				
			],
			[	// Suits (0-12), (13-25), (26-38), (39-51)
				[], [], [], []
			] 
			/*
				• By iterating over _[0], we can see how many cards are missing from a straight in that segment.
				• Hand rank will be adequate to determine winners for most hands
			*/
		];


	// Group cards by value, suit
	var	i = 0, 
		_l = _array.length,
		c, s, h = {}; // card, suit, r (result object)

	for (i = 0; i < _l; i++ ) {
		c = _array[i];
		s = Math.floor(c / 13);	
		_[ 0 ][ c - (s*13) ].push(c);
		_[ 1 ][s].push(c);
	}
	
	// COLLECTION
	var _r = [ 
		// High Cards, Pairs, Trips, Quads
		[],[],[],[] 
	];
	
	
	// Group cards by HC, Pairs, Trips, Quads
	for (i = 0; i < 13; i++) {
		if (_[0][i].length > 0) {
			_r[_[0][i].length - 1].push(i);
		}
	}

	// RANK, VALUE: uses _r
	if ( _r[3].length > 0 ) { // Four
		h.rank = 8;
		h.value = _r[3];
	} else if ( _r[2].length > 1 || (( _r[2].length > 0) && (_r[1].length > 0)) ) { // Full House
		h.rank = 7;
		h.value = [ _r[2][0], _r[1][0] ];
	} else if ( _r[2].length > 0 ) { // Trips
		h.rank = 4;
		h.value = _r[2];
	} else if ( _r[1].length > 1 ) { // Pair x 2
		h.rank = 3;
		h.value = _r[1];
	} else if ( _r[1].length > 0 ) { // Pair x 1
		h.rank = 2;
		h.value = _r[1];
	} else { // High Card
		h.rank = 1;
		(_r[0][0] == 0) ? h.value = _[0][0] : h.value = _r[0]; // Only 1 x HC in collection; Either 0 || !0 (Ace, Not Ace)
	}

	
	h.cards = _array;
	h.hand = {
		"_" : _,
		"_r" : _r
	};
	
	return h;

}




var	players = 0,
	hands = [],
	deck = getDeck( players );
	
//console.log( JSON.stringify(deck) );	
console.log( JSON.stringify(evaluateHand([18, 44, 31, 5, 4])) );
//evaluateHand([26, 14, 20, 5, 4]);