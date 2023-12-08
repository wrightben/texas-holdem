# Texas Hold'em
### Summary

```shell
# GENERATE (played hands)
node play_hole_cards.js > data_300_1.json

# SUMMARIZE
node read_data.js 
```
---- 

### Files

**data_0_example.json** - This is hole_cards[0] played just 1 hand to show the layout of the data format. The other data files are a single array of ~95,000 played hands.


### Results of Scenarios
Player 0 is dealt the specified hole cards 95000 times in a 6-person game. Try to define *bluff* in this context.

hole_cards[313] - [ 25, 13 ] [ 'Kd', 'Ad' ]<br />
30652 0.32265263157894736

hole_cards[665] - [ 36, 35 ] [ 'Js', 'Ts' ]<br />
25055 0.26373684210526316

hole_cards[78] - [ 13, 0 ] [ 'Ad', 'Ah' ]<br />
23255 0.24478947368421053

hole_cards[300] - [ 25, 0 ] [ 'Kd', 'Ah' ]<br />
21811 0.22958947368421054

hole_cards[0] - [ 1, 0 ] [ Ah, 2h ]<br />
12821 0.1349578947368421

hole_cards[631] - [ 36, 1 ] [ 'Js', '2h' ]<br />
12458 0.13113684210526316

hole_cards[211] - [ 21, 1 ] [ '9d', '2h' ]<br />
10474 0.11025263157894737