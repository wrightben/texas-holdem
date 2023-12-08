# Texas Hold'em
### Summary

```shell
# Create data (played hands)
# Data file format: data_[hole_cards[n]]_[nth file].json
node play_hole_cards.js > data_0_2.json
node read_data.js 
```
---- 

### Files

**data_0_exmaple.json** - This is hole_cards[0] (better known as [1,0] or [Ah,2h]) played just 1 hand to show the layout of the data format. The other data files are a single array of every played hand.


### Results (Scemarios)

hole_cards[313] - [ 25, 13 ] [ 'Kd', 'Ad' ]<br />
30652 0.32265263157894736

hole_cards[665] - [ 36, 35 ] [ 'Js', 'Ts' ]<br />
25055 0.26373684210526316

hole_cards[78] - [ 13, 0 ] [ 'Ad', 'Ah' ]<br />
23255 0.24478947368421053

hole_cards[0] - [ 1, 0 ] [ Ah, 2h ]<br />
12821 0.1349578947368421

hole_cards[631] - [ 36, 1 ] [ 'Js', '2h' ]<br />
12458 0.13113684210526316