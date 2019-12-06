# poker

### Purpose

Relatively few domains are popular (as in participation), include financial consequences, and produce considerable data for analysis. I'm interested in how people make decisions in poker, the stock market, etc. Generating this data provides excellent hooks for analysis and rule generation.

### Theory

Poker betting is heavily influenced by colloquial, rather than mathematical, play.

```
----------
RESULT
Winners: 1
----------
Seat 10: Flush, Qs High (Rank: 6)
[ '7d', '8s', '2s', '9s', 'Kd', 'Qs', '5s' ]


Hands:

[ [ 'Ad', 'Qd', '2s', '9s', 'Kd', 'Qs', '5s' ],
  [ '8c', 'Qh', '2s', '9s', 'Kd', 'Qs', '5s' ],
  [ '2h', '9c', '2s', '9s', 'Kd', 'Qs', '5s' ],
  [ '6s', 'Qc', '2s', '9s', 'Kd', 'Qs', '5s' ],
  [ '8d', 'Th', '2s', '9s', 'Kd', 'Qs', '5s' ],
  [ '7h', '3d', '2s', '9s', 'Kd', 'Qs', '5s' ],
  [ '6h', '3h', '2s', '9s', 'Kd', 'Qs', '5s' ],
  [ 'Kc', '2d', '2s', '9s', 'Kd', 'Qs', '5s' ],		<-- Seat 8 bets heavily (prematurely)
  [ '4c', '5h', '2s', '9s', 'Kd', 'Qs', '5s' ],
  [ '7d', '8s', '2s', '9s', 'Kd', 'Qs', '5s' ] ]	<-- Seat 10 wins (unless deterred by colloquial play)
$
```

### Use

```
$./hand.sh		# See hand.sh; Comment out appropriate line
```

shuffle.js includes a **players** variable to control the number of hands generated <br/>
hand.js includes an array to control which portions of the hand to evaluate ( hole, flop, turn, river )
