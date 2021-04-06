# Shuffle and Deal Cards

Get a list of [7] unique random numbers between 0-51. Compare this to a function that outputs [permutations](https://github.com/wrightben/codeeval/blob/master/String%20Permutations%20(JavaScript).md).
```js
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
