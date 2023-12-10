# Texas Hold'em
### Scenarios


### Save this code as: seats.sh
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
./seats.sh td 5s as 2s jc js qs 9c 9d 8c ah 7s | nl
```

1. Copy a Results*.tsv to desktop.
2. Save seats.sh
3. Deal your cards and run command
