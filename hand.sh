#!/bin/bash

use="$1"


if [ "$use" == "-t" ]; then

# Manually type in card values (cards.txt)
./cards.pl < cards.txt > cards.json

else

# Generate card values
node shuffle.js > cards.json

fi


node hand.js