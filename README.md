# poker

### Purpose

I'm interested in how people make decisions in poker and the stock market. My theory is poker betting is primarily influenced by colloquial play instead of mathematical play.


### Use

```
var	players = 10,
	shared = 5,	// community cards
	cards = getCards( players, shared ),	// shared optional; 5 default
	hands = evaluateHands( getCardsAsPlayers( players, cards ) ),	// hands = [ [], [], ... ]
	rankSortedHands = compareHands(hands);
```

**Functions:** ***getCards*** and ***getCardsAsPlayers***

*getCards* accepts 2 optional parameters, *players* and *shared*, which default to 1 and 5, respectively. The *players* parameter may be either an *int* or an *array* in this format: [ int, [ [int, int], [int, int] ]]. 

*getCardsAsPlayers* accepts 2 parameters, *players* and *cards*. The players parameter is an *int*.


#### Examples	
```
// Aces vs Kings vs at least 1 Jack vs 4 other players; 5 shared cards
getCardsAsPlayers( 7, getCards( [7,[[0,13], [12,25], [10] ]], 5 ));

getFaceValues( getCards(0) );	// [ '6h', 'Kc', '2d', 'Ts', 'Qh' ]

evaluateHand( [44, 39, 43, 24, 51, 2, 49] );	// (See Output)

```


**Output:** ***evaluateHand(*** *[44, 39, 43, 24, 51, 2, 49]* ***)***
```
{
	"rank": 6,
	"label": "Flush",
	"value": [39, 43, 44, 49, 51], // Cards that make up hand; Low to High
	"cards": [44, 39, 43, 24, 51, 2, 49], // Cards; Order dealt
	"faceValues": ["6c", "Ac", "5c", "Qd", "Kc", "3h", "Jc"], // Cards; Order dealt
	"straight": -1, // High card of straight
	"suit": 3, // Index of suits[] with 5+ cards; Possible flush
	"flush": -1, // Cards in flush
	"groups": {
		"values": [
			[39], // Ace
			[],
			[2],  // 3
			[],
			[43], // 5
			[44], // 6 ... Etc
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