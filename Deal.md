# Dealing Cards

The requirement: Get a list of 7 unique random numbers between 0-51. The actual problem: To a non-programmer, or a programmer who thinks in OO terms, one might ask for a function that *deals 7 cards*. For 10 years, I've been fascinated by issues like this one—The thinking and communicating one more than the programming one.

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