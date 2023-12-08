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


#### 8-Player

78 [ 13, 0 ] ad ah	17413	0.34826
715 [ 38, 12 ] ks kh	14861	0.29722
66 [ 12, 0 ] kh ah	11942	0.23884
313 [ 25, 13 ] kd ad	11935	0.2387
640 [ 36, 10 ] js jh	11068	0.22136
300 [ 25, 0 ] kd ah	10270	0.2054
665 [ 36, 35 ] js ts	9868	0.19736
0 [ 1, 0 ] 2h ah	8239	0.16478
631 [ 36, 1 ] js 2h	4272	0.08544
211 [ 21, 1 ] 9d 2h	3645	0.0729


#### 6-Player

78 [ 13, 0 ] ad ah	24883	0.49766
715 [ 38, 12 ] ks kh	21862	0.43724
640 [ 36, 10 ] js jh	17141	0.34282
66 [ 12, 0 ] kh ah	16088	0.32176
313 [ 25, 13 ] kd ad	16081	0.32162
300 [ 25, 0 ] kd ah	14296	0.28592
665 [ 36, 35 ] js ts	13111	0.26222
0 [ 1, 0 ] 2h ah	11414	0.22828
631 [ 36, 1 ] js 2h	6586	0.13172
211 [ 21, 1 ] 9d 2h	5674	0.11348