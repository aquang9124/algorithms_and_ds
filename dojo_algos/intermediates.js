'use strict';

// is a prime number
function isPrime(num) {
	if (num % 2 === 0 && num !== 2) {
		return false;
	}

	var divisor = 2,
		limit = Math.floor(num / 2);

	while (divisor < limit) {
		if (num % divisor === 0) {
			return false;
		}

		divisor++;
	}

	return true;
}

// return subsequence of two strings
function commonChars(x, y) {
	var result = "";

	function findCommons(xEnd, yEnd) {
		if (xEnd === x.length) {
			return;
		}
		
		if (x[xEnd] === y[yEnd]) {
			result += x[xEnd];
			findCommons(xEnd + 1, yEnd + 1);
		}
		else {
			findCommons(xEnd + 1, yEnd);
		}
	}

	findCommons(0, 0);
	return result;
}

module.exports = {
	isPrime: isPrime,
	commonChars: commonChars
};