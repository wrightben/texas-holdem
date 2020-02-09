# texas-holdem

### Summary

Texas Hold'em in JavaScript for play and data analysis


### Use

```
var	players = 10,
	shared = 5,	// community cards
	cards = getCards( players, shared ),	// shared optional; 5 default
	
	hands = evaluateHands( getCardsAsPlayers( players, cards ) ),
//	sortedHands = sortHands(hands);	// Implicit
	bestHands = getBestHands(hands);
```

**Functions:** ***getCards*** and ***getCardsAsPlayers***

*getCards* accepts 2 optional parameters, *players* and *shared*, which default to 1 and 5, respectively. The *players* parameter may be either an *int* or an *array* in this format: [ int, [ [int, int], [int, int] ]]. 

*getCardsAsPlayers* accepts 2 parameters, *players* and *cards*. The players parameter is an *int*.


#### Examples	
```
// Aces vs Kings vs at least 1 Jack vs 4 other players; 5 shared cards
getCardsAsPlayers(7, getCards([7, [[0,13], [12,25], [10]]], 5));

getFaceValues( getCards(0) );	// [ '6h', 'Kc', '2d', 'Ts', 'Qh' ]

evaluateHand( [44, 39, 43, 24, 51, 2, 49] );	// (See Output)
```


**Output:**  
evaluateHand( [44, 39, 43, 24, 51, 2, 49] )
```
{
	"rank": 6,
	"label": "Flush",
	"value": [43, 44, 49, 51, 39], // Nominal Order (13-high)
	"cards": [44, 39, 43, 24, 51, 2, 49], // Dealt Order
	"faceValues": ["6c", "Ac", "5c", "Qd", "Kc", "3h", "Jc"],
	"straight": -1,
	"suit": 3,
	"flush": -1,
	"groups": {
		"nominals": [
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
			[44, 39, 43, 51, 49] // Dealt Order
		],
		"collections": [ // Nominal Order (13-high)
			[2, 4, 5, 10, 11, 12, 13],
			[],
			[],
			[]
		]
	}
}
```