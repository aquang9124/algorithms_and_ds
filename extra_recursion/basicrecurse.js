'use strict';

function genSum(arr) {
	var result = 0;

	var getSum = function(idx) {
		if (idx === arr.length)
			return;
		result += arr[idx];
		getSum(idx + 1);
	}

	getSum(0);
	return result;
}

function sumArr(arr, idx, sum) {
	if (sum === undefined) {
		sum = 0;
		idx = 0;
	}
	if (idx === arr.length)
		return sum;

	sum += arr[idx];
	return sumArr(arr, idx + 1, sum);
}

// getOdds
function getOddsR(arr, sum, idx) {
	if (idx === undefined) {
		sum = 0;
		idx = 0;
	}

	if (idx === arr.length) {
		return sum;
	}
	else if (arr[idx] % 2 === 1) {
		sum += arr[idx];
	}

	return getOddsR(arr, sum, idx+1);
}

// factorial
function rFactorial(n) {
	if (n === 1 || n === 0) {
		return 1;
	}

	return rFactorial(n - 1) * n;
}

// sigma
function rSigma(n) {
	if (n === 1 || n === 0) {
		return n;
	}

	return rSigma(n - 1) + n;
}

// recursive flatten
function flatten(arr) {
	var result = [];

	function makeFlat(element) {

		if (!Array.isArray(element)) {
			result.push(element);
		}
		else {
			for (var i = 0; i < element.length; i++) {
				makeFlat(element[i]);
			}
		}

	}

	makeFlat(arr);
	return result;
}

// reverse print a string using recursion
function revPrintR(str) {

	var traverse = function(char, restStr) {
		if (restStr.length < 1) {
			return;
		}
		
		console.log(char + restStr.slice(restStr.length - 1));
		traverse(char, restStr.slice(0, restStr.length - 1));
	}

	traverse('', str, 1);
}
revPrintR('hello');