// Probability Check
var probabilityCheck = function( p,t ) {

	if (typeof p == "undefined") { p = 6; }
	if (typeof t == "undefined") { t = p; }

	var	_p = new Array(p).fill(0),
		_r = _p.slice();

	for (i = 0; i < t; i++) {
		_p[Math.floor( Math.random() * Math.floor( _p.length ) )] += 1;
	}


	_p.forEach(function(e,i) {
		_r[i] = (Math.floor( (100*e/t)*100 )/100)+"%";
	});

	console.log( "P: "+p+" T: "+t+"\n"+_r.join(" "));
	
}

probabilityCheck( 3, 5 );
