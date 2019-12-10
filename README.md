# poker

### Purpose

I'm interested in how people make decisions in poker, the stock market, etc. Relatively few domains include financial consequences, are popular, and produce data for analysis, which is what I'm using this code for.

#### Theory

Poker betting is heavily influenced by colloquial play, not mathematical play.


### Use

```
var	players = 10,
	shared = 5,
	cards = getCards( players, shared ),	// shared optional
	hands = evaluateHands(getCardsAsPlayers( players, cards )), // 	hands = [ [], [], ... ]
	rankSortedHands = compareHands(hands);

// Other examples	
console.log( getFaceValues( getCards(0) ) );	// [ '6h', 'Kc', '2d', 'Ts', 'Qh' ]

evaluateHand( [44, 39, 43, 24, 51, 2, 49] );	// Flush (Output)

// Aces vs Kings vs at least 1 Jack vs 4 other players with 5 shared cards
getCardsAsPlayers( 7, getCards( [7,[ [0,13], [12,25], [10] ]], 5 ));

```


##### Output
evaluateHand( [44, 39, 43, 24, 51, 2, 49] );
```
{
	"rank": 6,
	"label": "Flush",
	"value": [39, 43, 44, 49, 51],
	"cards": [44, 39, 43, 24, 51, 2, 49],
	"faceValues": ["6c", "Ac", "5c", "Qd", "Kc", "3h", "Jc"],
	"straight": -1,
	"suit": 3,
	"flush": -1,
	"groups": {
		"values": [
			[39],
			[],
			[2],
			[],
			[43],
			[44],
			[],
			[],
			[],
			[],
			[49],
			[24],
			[51]
		],
		"suits": [
			[2],
			[24],
			[],
			[44, 39, 43, 51, 49]
		],
		"collections": [
			[13, 2, 4, 5, 10, 11, 12],
			[],
			[],
			[]
		]
	}
}
```