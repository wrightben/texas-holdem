# Communication — Requirement — Shuffle (Dealing Cards)

One might ask for a function that *shuffles and deals [7] cards* from a non-programmer or from a programmer who thinks in object-oriented terms.

**The programming requirement:**
Get a list of 7 unique random numbers between 0-51. Compare this to a function that outputs combinations or [permutations](https://github.com/wrightben/codeeval/blob/master/String%20Permutations%20(JavaScript).md).
```
var deal = function( cards ) {
	
	var _ = new Array(52).fill(0); // i = value; [i] = order
	var _cards = new Array(cards);
	
	var i = Math.floor( Math.random() * 52 );
	
	while ( cards > 0 ) {
		while ( _[ i ] != 0 ) { 
			i = Math.floor( Math.random() * 52 );
		}
		_[i] = cards;
		cards -= 1;		
	}
	
	for (var i = 0; i < 52; i++) {
		var e = _[i];
		if (e != 0) {
			_cards[e - 1] = i;
		}
	}

	return _cards;

}

console.log( deal( 7 ) );
```

## Generalization
This is a generalized lottery function when *52* is a variable. Both the high and low of the range can be variables, which does not affect the creation of the _ (bit) array. Example: Range of 30-50, bit array length 0-51.
