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
