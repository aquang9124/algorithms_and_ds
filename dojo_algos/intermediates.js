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

// return third greatest number in the array, assume that array has at least 3 numbers
function thirdGreatest(arr) {
	var max = arr[0],
		second = -Infinity,
		third = -Infinity,
		idx = 1;

	while (idx < arr.length) {
		if (arr[idx] > max) {
			third = second;
			second = max;
			max = arr[idx];
		}
		else if (arr[idx] > second && arr[idx] < max) {
			third = second;
			second = arr[idx];
		}
		else if (arr[idx] > third && arr[idx] < second) {
			third = arr[idx];
		}

		idx++;
	}

	return third;
}

// return the number of letters that repeat. Keep in mind this is not the number of times each letter repeats.
function repeaters(str) {
	var letters = {};
	var count = 0;

	for (var i = 0; i < str.length; i++) {
		if (!letters.hasOwnProperty(str[i])) {
			letters[str[i]] = 0;
		}

		letters[str[i]] += 1;
	}

	for (var key in letters) {
		if (letters[key] > 1) {
			count++;
		}
	}

	return count;
}

module.exports = {
	isPrime: isPrime,
	commonChars: commonChars,
	thirdGreatest: thirdGreatest,
	repeaters: repeaters
};