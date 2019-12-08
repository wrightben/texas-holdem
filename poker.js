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

	var	i = 0, 
		_l = _array.length,
		c, s;
		
	var	_o = {
			"rank" : 1 /* 
			value, 
			cards, 
			groups {
				_values, 
				_suits 
				_collections
			}			
		*/};


	// COLLECTION
	var	_values = [
			// Values (0s, 1s, 2s, 3s ...)
			[], [], [], [], [], [], [], [], [], [], [], [], []
		];
			
	var _suits = [	
			// Suits (0-12), (13-25), (26-38), (39-51)
			[], [], [], []
		]; 

	// GROUP 1: by value, suit; Flush?
	_o.suit = -1; // Flush Suit
	var _fc = 0;
	for (i = 0; i < _l; i++ ) {
		c = _array[i];
		s = Math.floor(c / 13);	
		_values[ c - (s*13) ].push(c);
		_fc = _suits[s].push(c);
		if (_fc > 4) { _o.suit = s; }
	}
	

	// COLLECTION
	var _collections = [ 
		// High Cards, Pairs, Trips, Quads
		[], [], [], [] 
	];
	
	// GROUP 2: by HC, Pairs, Trips, Quads; Straight?
	var _sc = 0;
	_o.straight = -1;  // Straight High Card
	for (i = 0; i < 13; i++) {
		if (_values[i].length > 0) {
			_collections[_values[i].length - 1].push(i); // Group			
			_sc += 1;	
		} else {
			if ( (_sc == 4) && ( i == 12 ) && ( _values[0].length > 0 ) ) { _o.straight = 13; }
			_sc = 0;
		}
	}
	

	// RANK, VALUE
	if ( _collections[3].length > 0 ) { // (8) Four
		_o.rank = 8;
		_o.value = _collections[3];
	} else if ( _collections[2].length > 1 || (( _collections[2].length > 0) && (_collections[1].length > 0)) ) { // (7) Full House
		_o.rank = 7;
		_o.value = [ _collections[2][0], _collections[1][0] ];
	} else if ( _o.suit != -1 ) { // (6) Flush (See Group1)
		_o.rank = 6;
		_o.value = _suits[_o.value];
		
			// (9) Straight Flush?
			if (_o.straight != -1) {
				console.log( "Straight Flush" );
			}
				
	} else if ( _o.straight != -1 ) { // (5) Straight (See Group2)
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
		( _collections[0][0] == 0 ) ? // 0 || !0 (Ace, Not Ace)
			_o.value = _values[0] : 
			_o.value = _collections[0]; 
	}

	
	_o.cards = _array;
	_o.groups = {
		"values" : _values,
		"suits" : _suits,
		"collections" : _collections
	};
	
	return _o;

}




var	players = 0,
	hands = [],
	deck = getDeck( players );
	


// TEST: evaluateHand
console.log( JSON.stringify(evaluateHand([0,7,8,9,10,11,25])) ); // Flush, Straight, Straight Flush
console.log( JSON.stringify(evaluateHand([0,7,8,9,10,11,25])) ); // Flush, Straight, Straight Flush



//console.log( JSON.stringify(deck) );	
//console.log( JSON.stringify(evaluateHand(deck)) );