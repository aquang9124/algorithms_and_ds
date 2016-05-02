// Function to print 1-255
function printTo255() {
	for (var i = 1; i < 256; i++) {
		console.log(i);
	}
}

// Function to print all odds 1-1000
function printOdds() {
	for (var i = 1; i < 1001; i++) {
		if (i % 2 === 1) {
			console.log(i);
		}
	}
}
