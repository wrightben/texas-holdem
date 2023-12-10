# Texas Hold'em
### Scenarios

```shell
# Save this code as: predicted_seat.sh

#!/bin/bash

cat Results* | grep -e "$1" | grep -e "$2"
cat Results* | grep -e "$3" | grep -e "$4"
cat Results* | grep -e "$5" | grep -e "$6"
cat Results* | grep -e "$7" | grep -e "$8"
cat Results* | grep -e "$9" | grep -e "${10}"
cat Results* | grep -e "${11}" | grep -e "${12}"
```


```shell
./predicted_seat.sh td 5s as 2s jc js qs 9c 9d 8c ah 7s | nl
```