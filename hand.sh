#!/bin/bash

# Type in card values
# ./cards.pl < cards.txt > cards.json

# Computer generates card values
node shuffle.js > cards.json

node hand.js