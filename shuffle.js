var cards = [
// 	1, 1, 1, 1, 1, "6h", 1, 1, 1, 1, 1, 1, 1,
// 	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
// 	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
// 	1, 1, 1, 1, 1, 1, 1, 1, "9c", "Tc", "Jc", "Qc", "Kc"
	
	"Ah", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "Th", "Jh", "Qh", "Kh",
	"Ad", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "Td", "Jd", "Qd", "Kd",
	"As", "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "Ts", "Js", "Qs", "Ks",
	"Ac", "2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "Tc", "Jc", "Qc", "Kc"
];

var getDeck = function( players /* (int 0-23) */ ) {

	if ( typeof players == "undefined" ) { return [ "players = 0" ]; }

	var	_ = [],
		count = 5 + ( players * 2 ),
		j;

	for ( var i = 0; i < count; i++ ) {

		j = Math.floor( Math.random() * Math.floor( 52 ) );

		while ( cards[j] == 1  ) {
			// console.log('while: '+j, cards[j]);
			j = Math.floor( Math.random() * Math.floor( 52 ) );
		}

		// console.log('push: '+j, cards[j]);

		_.push( cards[j] );
		cards[j] = 1;

	}

	return _;

}

var players = 10;
var hands = [];
var deck = getDeck( players );

for (var i = 0; i < players; i++ ) {
	hands.push( [ deck[5+(2*i)], deck[6+(2*i)],   deck[0],deck[1],deck[2],deck[3],deck[4] ] );
}

console.log( JSON.stringify( hands ) );