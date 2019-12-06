# poker

### Purpose

Relatively few domains are popular (as in participation), include financial consequences, and produce considerable data for analysis. I'm interested in how people make decisions in poker, the stock market, etc. Generating this data provides excellent hooks for analysis and rule generation.

#### Theory

Poker betting is heavily influenced by colloquial, rather than mathematical, play.


### Use

```
$./hand.sh		# See hand.sh; Comment out appropriate line
```

shuffle.js includes a **players** variable to control the number of hands generated <br/>
hand.js includes an array to control which portions of the hand to evaluate ( hole, flop, turn, river )

#### Output
```
{
	"results": [
		[
			[8],
			[
				[1, "9 High"],
				[1, "J High"],
				[1, "A High"],
				[1, "9 High"],
				[1, "9 High"],
				[1, "8 High"],
				[1, "5 High"],
				[2, "Pair, 2's"],
				[1, "8 High"],
				[1, "10 High"]
			]
		],
		[
			[10],
			[
				[2, "Pair, K's"],
				[2, "Pair, K's"],
				[2, "Pair, K's"],
				[2, "Pair, K's"],
				[2, "Pair, K's"],
				[2, "Pair, K's"],
				[2, "Pair, K's"],
				[3, "Two Pair, K's & 2's"],
				[2, "Pair, K's"],
				[3, "Two Pair, K's & 10's"]
			]
		],
		[
			[10],
			[
				[3, "Two Pair, K's & 9's"],
				[2, "Pair, K's"],
				[2, "Pair, K's"],
				[3, "Two Pair, K's & 9's"],
				[3, "Two Pair, K's & 9's"],
				[2, "Pair, K's"],
				[2, "Pair, K's"],
				[3, "Two Pair, K's & 2's"],
				[2, "Pair, K's"],
				[3, "Two Pair, K's & 10's"]
			]
		],
		[
			[8],
			[
				[3, "Two Pair, K's & 9's"],
				[2, "Pair, K's"],
				[2, "Pair, K's"],
				[3, "Two Pair, K's & 9's"],
				[3, "Two Pair, K's & 9's"],
				[2, "Pair, K's"],
				[2, "Pair, K's"],
				[7, "Full House, 2's over K's"],
				[2, "Pair, K's"],
				[3, "Two Pair, K's & 10's"]
			]
		]
	],
	"hands": [
		["3d", "9s", "Kh", "Kc", "Th", "9c", "2s"],
		["Jd", "5h", "Kh", "Kc", "Th", "9c", "2s"],
		["4d", "Ah", "Kh", "Kc", "Th", "9c", "2s"],
		["8d", "9d", "Kh", "Kc", "Th", "9c", "2s"],
		["5d", "9h", "Kh", "Kc", "Th", "9c", "2s"],
		["8s", "4h", "Kh", "Kc", "Th", "9c", "2s"],
		["4c", "5s", "Kh", "Kc", "Th", "9c", "2s"],
		["2c", "2d", "Kh", "Kc", "Th", "9c", "2s"],
		["6s", "8c", "Kh", "Kc", "Th", "9c", "2s"],
		["Tc", "3h", "Kh", "Kc", "Th", "9c", "2s"]
	]
}
```