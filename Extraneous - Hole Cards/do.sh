#!/bin/bash

v=640

node lookup_hole_cards.js ${v}
node play_hole_cards.js ${v} > data_${v}_1.json
node read_data.js data_${v}_1.json


v=78

node lookup_hole_cards.js ${v}
node play_hole_cards.js ${v} > data_${v}_1.json
node read_data.js data_${v}_1.json

v=715

node lookup_hole_cards.js ${v}
node play_hole_cards.js ${v} > data_${v}_1.json
node read_data.js data_${v}_1.json

v=66

node lookup_hole_cards.js ${v}
node play_hole_cards.js ${v} > data_${v}_1.json
node read_data.js data_${v}_1.json