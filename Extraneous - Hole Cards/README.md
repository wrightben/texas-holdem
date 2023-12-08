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


#### 9-Player

78 [ 13, 0 ] ad ah	17413	**0.34826**<br />
715 [ 38, 12 ] ks kh	14861	**0.29722**<br />
66 [ 12, 0 ] kh ah	11942	**0.23884**<br />
313 [ 25, 13 ] kd ad	11935	**0.2387**<br />
640 [ 36, 10 ] js jh	11068	**0.22136**<br />
300 [ 25, 0 ] kd ah	10270	**0.2054**<br />
665 [ 36, 35 ] js ts	9868	**0.19736**<br />
0 [ 1, 0 ] 2h ah	8239	**0.16478**<br />
631 [ 36, 1 ] js 2h	4272	**0.08544**<br />
211 [ 21, 1 ] 9d 2h	3645	**0.0729**<br />

#### 6-Player

78 [ 13, 0 ] ad ah	24883	**0.49766**<br />
715 [ 38, 12 ] ks kh	21862	**0.43724**<br />
640 [ 36, 10 ] js jh	17141	**0.34282**<br />
66 [ 12, 0 ] kh ah	16088	**0.32176**<br />
313 [ 25, 13 ] kd ad	16081	**0.32162**<br />
300 [ 25, 0 ] kd ah	14296	**0.28592**<br />
665 [ 36, 35 ] js ts	13111	**0.26222**<br />
0 [ 1, 0 ] 2h ah	11414	**0.22828**<br />
631 [ 36, 1 ] js 2h	6586	**0.13172**<br />
211 [ 21, 1 ] 9d 2h	5674	**0.11348**<br />

#### 3-Player

78 [ 13, 0 ] ad ah	36968	**0.73936**<br />
715 [ 38, 12 ] ks kh	34741	**0.69482**<br />
640 [ 36, 10 ] js jh	30624	**0.61248**<br />
66 [ 12, 0 ] kh ah	25981	**0.51962**<br />
313 [ 25, 13 ] kd ad	25935	**0.5187**<br />
300 [ 25, 0 ] kd ah	24629	**0.49258**<br />
665 [ 36, 35 ] js ts	21734	**0.43468**<br />
0 [ 1, 0 ] 2h ah	20303	**0.40606**<br />
631 [ 36, 1 ] js 2h	14434	**0.28868**<br />
211 [ 21, 1 ] 9d 2h	12575	**0.2515**<br />

#### 2-Player

78 [ 13, 0 ] ad ah	42814	**0.85628**<br />
715 [ 38, 12 ] ks kh	41405	**0.8281**<br />
640 [ 36, 10 ] js jh	38992	**0.77984**<br />
66 [ 12, 0 ] kh ah	33976	**0.67952**<br />
313 [ 25, 13 ] kd ad	33949	**0.67898**<br />
300 [ 25, 0 ] kd ah	33210	**0.6642**<br />
0 [ 1, 0 ] 2h ah	29661	**0.59322**<br />
665 [ 36, 35 ] js ts	29571	**0.59142**<br />
631 [ 36, 1 ] js 2h	23326	**0.46652**<br />
211 [ 21, 1 ] 9d 2h	20894	**0.41788**<br />

#### 9-Player (Aces vs Jacks)

as ah vs js jh	16804	**0.33608**<br />
js jh vs as ah	6601	**0.13202**<br />