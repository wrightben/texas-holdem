#!/bin/bash

# Manually type in card values (cards.txt)
# ./cards.pl < cards.txt > cards.json


# Generate card values
node shuffle.js > cards.json

node hand.js # Card data read from cards.json