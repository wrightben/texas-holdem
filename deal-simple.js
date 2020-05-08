var deal = function( cards ) {
	
	var i = Math.floor( Math.random() * 52 );
	_ = new Array(52).fill(0);
	
	while ( cards > 0 ) {
		while ( _[ i ] != 0 ) { 
			i = Math.floor( Math.random() * 52 );
		}
		_[i] = i + 1;
		cards --;
	}

	return _.filter(function( e ) {
		return Boolean(e != 0);
	});
	
}

console.log( deal( 7 ) );