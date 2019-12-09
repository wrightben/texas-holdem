# poker

### Purpose

I'm interested in how people make decisions in poker, the stock market, etc. Relatively few domains include financial consequences, are popular, and produce data for analysis, which is what I'm using this code for.

#### Theory

Poker betting is heavily influenced by colloquial, rather than mathematical, play.


### Use

```
var	players = 10,
	shared = 5,
	hands = [],
	cards = getCards( players, shared ),
	hands = evaluateHands(getCardsAsPlayers( players, cards )),
	rankSortedHands = compareHands(hands);
```