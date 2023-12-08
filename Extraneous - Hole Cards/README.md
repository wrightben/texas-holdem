# Texas Hold'em
### Summary

```shell
# LOOKUP (index, ordinals, facevalues) - edit file directly or index specified as arg 1 
node lookup_hole_cards.js

# GENERATE N hands using hole_cards.json index specified as arg 1
node play_hole_cards.js 300 > data_300_1.json

# SUMMARIZE
node read_data.js data_300_1.json

# OR ... use do.sh
./do.sh
```
---- 

### Files

**data_0_example.json**<br />
Player 0 was dealt hole_cards[0] 1 time in a 6-person game. The other data files are a single array of ~95,000 played hands.


### Results of Scenarios
Player 0 is dealt the specified hole cards N times in an N-person game. Try to define *bluff* in this context.

313 [ 25, 13 ] kd ad<br />
30652 0.32265263157894736

665 [ 36, 35 ] js ts<br />
25055 0.26373684210526316

78 [ 13, 0 ] ad ah<br />
23255 0.24478947368421053

300 [ 25, 0 ] kd ah<br />
21811 0.22958947368421054

0 [ 1, 0 ] 2h ah<br />
12821 0.1349578947368421

631 [ 36, 1 ] js 2h<br />
12458 0.13113684210526316

211 [ 21, 1 ] 9d 2h<br />
10474 0.11025263157894737


9-players
640 [ 36, 10 ] js jh<br />
11200 0.224

78 [ 13, 0 ] ad ah<br />


