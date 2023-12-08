// ------------------------------
// NOTES
// ------------------------------
/* 
	THINK: Play every hand 500,000 times against n opponents
	DO: Comment out the last few lines in texas-holdem.js that play a single hand
*/

// console.log("Current directory:", __dirname);
const data = require('./data_0_2.json');

l = data.length;
winning = 0;

data.forEach(function(e) {
	best = e[0];
	win = 0;
	
	best.forEach(function(_) {
		if (_ == 0) { win += 1; }	
	});
	
	winning += win;

})

console.log(winning, winning/l);