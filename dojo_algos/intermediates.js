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

// iterative binary search
function binarySearch(arr, x) {
	var left = 0,
		right = arr.length - 1,
		mid = Math.floor((right + left) / 2);

	while (left <= right) {
		mid = Math.floor((right + left) / 2);
		if (arr[mid] === x) {
			return mid;
		}

		if (arr[mid] > x) {
			right = mid - 1;
		}

		if (arr[mid] < x) {
			left = mid + 1;
		}
	}

	return -1;
}

// recursive binary search
function rBinary(arr, x, min, max, mid) {
	if (min === undefined) {
		min = 0;
		max = arr.length - 1;
	}

	mid = Math.floor((max + min) / 2);

	if (min > max) {
		return -1;
	}

	if (arr[mid] > x) {
		max = mid - 1;
		return rBinary(arr, x, min, max, mid);
	}
	else if (arr[mid] < x) {
		min = mid + 1;
		return rBinary(arr, x, min, max, mid);
	}
	else {
		return mid;
	}
}

// wonky coins
function wonkyCoins(n) {
	if (n === 0) {
		return 1;
	}

	return wonkyCoins(Math.floor(n / 2)) + wonkyCoins(Math.floor(n / 3)) + wonkyCoins(Math.floor(n / 4));
}

module.exports = {
	isPrime: isPrime,
	commonChars: commonChars,
	rBinary: rBinary,
	wonkyCoins: wonkyCoins
};