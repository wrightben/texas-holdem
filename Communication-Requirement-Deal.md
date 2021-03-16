# Communication — Requirement — Dealing Cards

One might ask for a function that *shuffles and deals [7] cards* from a non-programmer or from a programmer who thinks in object-oriented terms. The programming requirement: Get a list of 7 unique random numbers between 0-51.

```
var deal = function( cards ) {
	
	var i = Math.floor( Math.random() * 52 );
	_ = new Array(52).fill(0);
	
	while ( cards > 0 ) {
		while ( _[ i ] != 0 ) { 
			i = Math.floor( Math.random() * 52 );
		}
		_[i] = i + 1;
		cards -= 1;
	}

	return _.filter(function( e ) {
		return Boolean(e != 0);
	});
	
}

console.log( deal( 7 ) );
```