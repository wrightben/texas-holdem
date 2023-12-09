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

### Suggestion

Create an example by doing this:
1. Set players = 3 in play_hole_cards.js
2. Set i <= 1 in play_hole_cards.js (to play 1 game)
```
node play_hole_cards.js 78 > data_example_1.json
```


### Scenarios
Player 0 is dealt the specified hole cards N times in an N-person game. 

Define *bluff* in this context.

##### Example: 9-Player (Aces vs Jacks)

as ah vs js jh	16804	**0.33608**<br />
js jh vs as ah	6601	**0.13202**<br />

### Conclusion

#### 2023-12-09

There are adults that make you want to have children. And children that make you want to kill them.

This completes a 35-year-long adventure in the contemplation of how to help a smart child accomplish something meaningful.

I hope it helps you.

"The best ways to improve your odds at poker are to eliminate players and not play yourself." &mdash; perhaps you'll predict seeing it the way I do.