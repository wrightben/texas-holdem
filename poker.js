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

	var	_l = _array.length,
		_ = [
			[	// Values
				[], [], [], [], [], [], [], [], [], [], [], [], []
				
			],
			[	// Suits
				[], [], [], []
			] 
			/*
				• By iterating over _[0], we can see how many cards are missing from a straight in that segment.
				• Hand rank will be adequate to determine winners for most hands
			*/
		];


	// Group cards by value, suit
	var	i = 0,
		c, s, r; // card, suit, rank

	for (i = 0; i < _l; i++ ) {
		c = _array[i];
		s = Math.floor(c / 13);
		
		_[ 0 ][ c - (s*13) ].push(c);
		_[ 1 ][s].push(c);
	}
	
	
	// High Cards, Pairs, Trips, Quads
	var _r = [ [],[],[],[] ];
	for (i = 0; i < 13; i++) {
		if (_[0][i].length > 0) {
			_r[_[0][i].length - 1].push(i);
		}
	}
	
	// If straight counter ends at 4, is there a 0(ace)?
	
	
	// Flush ? sort, isStraight, setRank
	for (i = 0; i < 4; i++) {
		if (_[1][i].length > 4) {
			_[1][i].sort();
			console.log( 'Flush: '+ _[1][i]);
		}
	}
	
	if ( _r[3].length > 0 ) { // Four
		console.log("Four of a Kind");
	} else if ( _r[2].length > 1 || (( _r[2].length > 0) && (_r[1].length > 0)) ) { // Full House
		console.log("Full House");	
	} else if ( _r[2].length > 0 ) { // Trips
		console.log("Trips");
	} else if ( _r[1].length > 1 ) { // Pair x 2
		console.log("2 Pair");		
	} else if ( _r[1].length > 0 ) { // Pair x 1
		console.log("1 Pair");
	} else { // High Card
		console.log("High Card");
		(_r[0][0] == 0) ? console.log(_[0][0]) : console.log(_r[0][0]); // Only 1 x HC in collection; Either 0 || !0 (Ace, Not Ace)
	}

	console.log(_r);

	_.push( _array );
	return _;

}




var	players = 0,
	hands = [],
	deck = getDeck( players );
	
//console.log( JSON.stringify(deck) );	
console.log( evaluateHand([4, 17, 12, 43, 30]) );