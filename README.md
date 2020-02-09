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

### Functions

[Function](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAACrUlEQVQ4T52TS0hUURjH/9+5M6USBGkvY+4913u1h1SUCQXRpqhFD6ggcB/RLiIigtJyERktolXRLmoh9KKkoqDnogfOKoWSueM5o9giHUKCmHHu+eIMBNZopmd5vv/34/t/D8IMT0q5zGHuJGA5G3LIQWJhbe3udDo9MVUq/Yu30vP8CdBbMhj/GRc31SST3QzaUwLXa62/zgoYhuF8FAofWDjriWlfJjf4KHTdZkPkZbV+PF0h01bY4MpTRLgIYCTSygUQz9QeG68A+r6/1Imxk4mvAagxwFPB5kyUy6WDIFiCUqkZEM0x8S2l1HcLkVLKBNAG4GUFsMGV7Ux8UoAWWLExZpyEeIFYtIuEOciMjnIljIuZnDoduu6amMQbAdTC4P2UlgPPOwHQZZvoTMxbPDAyMPrbbpCSdyFwwABjTAgdg9sgegWYRgBPpgH6PQDvBuFTpNS6yb0LXX8vEz+0f8zmWZLo6BetB39rKoAtLS3J/OhovmyZcDVS6thkoJSyymGM2f4CfCPS+sjkeAUwlHIzM96VRYT9kVIP/p5u6HmP7D4C3BdpvXYm4GlmXLCOCnGpbnh4OD85oam+qW5CFJ8JBxvsf0xYrZT6PK3lwPOeA7QD4N5I61YrDKXcZWKRT8SJQZMsXooFdQnD/XZmxLiSyanjDVK2ZZXq/sOyvQ4ulL5DoIoInRmlOkLP28igdHmFwN/IcbZms9mBQMpuMA7ZIg2bHiK6mdX63h/ARt/fZgy/LpdvnLXRUNS3asWK2oJI3nEE/zCOc8LCbNjzvOUO0XViWkSMLnuaFZcSeF4nQGftgkZDasv/nNrfGlqZStVzXF20yxtI+RGMVoC3R1q/mBPQT7lFItFPMIdBopcZ57I5dX4usLLlBikfEnO1IRoRwP2p9m428F+5eB+Zs1JJIgAAAABJRU5ErkJggg==) ***getCards*** and ***getCardsAsPlayers***

*getCards* accepts 2 optional parameters, *players* and *shared*, which default to 1 and 5, respectively. The *players* parameter may be either an *int* or an *array* in this format: [ int, [ [int, int], [int, int] ]]. 

*getCardsAsPlayers* accepts 2 parameters, *players* and *cards*. The players parameter is an *int*.


```
// Aces vs Kings vs at least 1 Jack vs 4 other players; 5 shared cards
getCardsAsPlayers(7, getCards([7, [[0,13], [12,25], [10]]], 5));
```


**Functions:** ***evaluateHand***

```
// Aces vs Kings vs at least 1 Jack vs 4 other players; 5 shared cards
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

**Functions:** ***getFaceValues***
```
getFaceValues( getCards(0) );	// [ '6h', 'Kc', '2d', 'Ts', 'Qh' ]
```