# Texas Hold'em
### Summary

```shell
# index - hole_cards[index]

# LOOKUP — prints index, ordinals, facevalues for an index supplied in-file or as arg 1
node lookup_hole_cards.js

# GENERATE N games of N players where Player 0 plays with index specified as arg 1
node play_hole_cards.js 300 > data_300_1.json

# SUMMARIZE
node read_data.js data_300_1.json

# OR ... use do.sh
./do.sh
```
---- 

### Files

**data_0_example.json**<br />
Player 0 was dealt hole_cards[0] 1 time in a 6-person game.


### Results of Scenarios
Player 0 is dealt the specified hole cards N times in an N-person game. Try to define *bluff* in this context.

