#!/bin/bash

# Type in values
# ./cards.pl < cards.txt > cards.json

# Let computer produce hands
node shuffle.js > cards.json

node hand.js