// All the basic algos done recursively

// Print 1 - 255
function rPrintTo255(n) {
	if (!n) { n = 1; }

	if (n == 255) {
		return n;
	}

	console.log(n);
	return rPrintTo255(n + 1);
}

// Print all odds from 1 - 1000
function rPrintOdds(n) {
	if (!n) { n = 1; }

	if (n == 1000) { return n; }

	if (n % 2 == 1) { 
		console.log(n);
	}

	return rPrintOdds(n + 1);
}

// Print sum of all odd numbers from 1 - 5000
function rPrintOddSum(n, sum) {
	if (!n || !sum) {
		n = 1;
		sum = 0;
	}

	if (n == 5000) { return sum; }

	if (n % 2 == 1) {
		sum += n;
	}

	return rPrintOddSum(n + 1, sum);
}

// Recursively print all members of an array