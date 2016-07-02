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

module.exports = {
	isPrime: isPrime
};