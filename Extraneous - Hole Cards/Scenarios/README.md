# Texas Hold'em
### Scenarios


### Save this code as: seat.sh
```shell
#!/bin/bash

cat Results* | grep -e "$1" | grep -e "$2"
cat Results* | grep -e "$3" | grep -e "$4"
cat Results* | grep -e "$5" | grep -e "$6"
cat Results* | grep -e "$7" | grep -e "$8"
cat Results* | grep -e "$9" | grep -e "${10}"
cat Results* | grep -e "${11}" | grep -e "${12}"
```

#### Run
```shell
./seat.sh td 5s as 2s jc js qs 9c 9d 8c ah 7s | nl
```

1. Copy a Results*.tsv to desktop.
2. Save seat.sh
3. Deal your cards and run command

### Theory
Generating 50,000 games of N players for each of the hole cards yields the data necessary to simulate future games using only statistics (weighted outcomes).

If you have 6 defined positions and play that game 50,000 times, how do those game statistics relate to the individual statistics? Is this question worth answering?

When does it make sense to bet on a 30% (or less) expected value? I've dreamt of winning the lottery too.

No one ever gave me the impression that I would appreciate an unshuffled deck as much as I do now.
