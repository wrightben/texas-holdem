var x = [];
for (var i = 1; i <= 52; i++) {
	for (var j = 1; j <= 52; j++) {
		if (i != j) {
			x.push(
				[i, j].sort(function(a,b) {
					return b - a;
				})
			)
		}
	}
}

x = x.sort(function(a,b) {
	if (b[0] == a[0]) {
		return a[1] - b[1];
	} else {
		return a[0] - b[0];
	}
});

x.forEach(function(e) {
	console.log(e.toString());
});

// OR

// console.log( JSON.stringify(x) );