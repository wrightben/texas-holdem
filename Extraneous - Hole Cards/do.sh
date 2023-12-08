#!/bin/bash

summary () {
	node lookup_hole_cards.js ${1}
	node play_hole_cards.js ${1} > data_${1}_1.json
	node read_data.js data_${1}_1.json
}


summary 640
summary 78
summary 715
summary 66
summary 313
summary 665
summary 300
summary 0
summary 631
summary 211