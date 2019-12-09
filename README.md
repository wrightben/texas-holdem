# poker

### Purpose

Relatively few domains are popular, include financial consequences, and produce considerable data for analysis. I'm interested in how people make decisions in poker, the stock market, etc. I'm using this tool to generating data for analysis and rule generation.

#### Theory

Poker betting is heavily influenced by colloquial, rather than mathematical, play.


### Use

```
var	players = 7,
	shared = 5,
	hands = [],
	cards = getCards( players, shared ),
	hands = evaluateHands(getCardsAsPlayers( players, cards )),
	rankSortedHands = compareHands(hands);
```