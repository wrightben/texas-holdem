# Texas Hold'em
### Summary
```js
var	players = 9,
	shared = 5,	// community cards
	cards = getCards( players, shared ),	// shared optional; 5 default
	
	hands = evaluateHands( getCardsAsPlayers( players, cards ) ),
//	sortedHands = sortHands(hands);	// Implicit
	bestHands = getBestHands(hands); // [ [hand.position,...], sortedHands[] ]
```
---- 

### Functions
<br/>

**getCards()** and **getCardsFromString()**

getCards and getCardsFromString both return an array of ints (ordinals)

*getCards* accepts 2 optional parameters, *players* and *shared*, which default to 1 and 5, respectively. The *players* parameter may be either an *int* or an *array* in this format: [ int, [ [int, int], [int, int] ]].

*getCardsFromString()* accepts a string of lowercase faceValues separated by spaces. This is useful if you're using real cards.

```js
// players = 2, shared = 5
getCardsFromString("ts 4d js kc 7d 7c 7s 8h 8c");
```

<br /><br />

**getCardsAsPlayers()**

*getCardsAsPlayers* accepts 2 parameters, *players* and *cards*. The players parameter is an *int*.


```js
// Random Hand
getCardsAsPlayers(players, getCards(players, shared))


// Scenario based on partially predefined hole cards
// Aces vs Kings vs at least 1 Jack vs 4 other players; 5 shared cards
players = 7;
shared = 5;
getCardsAsPlayers(players, getCards([players, [[0,13], [12,25], [10]]], shared))


// Scenario based on predefined hole cards
players = 6;
shared = 5;
getCardsAsPlayers(players, getCards([players, [
	getCardsFromString( "9s 3s" ),
	getCardsFromString( "3d 3h" ),
	getCardsFromString( "kc 2h" ),
	getCardsFromString( "js 7h" ),
	getCardsFromString( "qc kh" ),
	getCardsFromString( "8s as" )
]], shared))


// Predefined hole cards and shared cards
players = 2;
shared = 5;
getCardsFromString("ts 4d js kc 7d 7c 7s 8h 8c")
```

<br /><br />

**evaluateHand()**

```js
JSON.stringify(
	evaluateHand( [44, 39, 43, 24, 51, 2, 49] )	// See below
);

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

<br /><br />

**getFaceValues()**
```js
getFaceValues( getCards(0) );	// [ '6h', 'Kc', '2d', 'Ts', 'Qh' ]
```


