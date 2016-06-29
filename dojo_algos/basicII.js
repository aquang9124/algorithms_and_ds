'use strict';

// recursive version of reverse print
function reversePrintR(arr, i) {
	if (i === undefined) {
		i = arr.length - 1;
	}

	if (i < 0) {
		return;
	}
	
	console.log(arr[i]);
	return reversePrintR(arr, --i);
}

// testing `then` chaining
function promiseChains() {
	var promise = new Promise(function(resolve, reject) {
		resolve(1);
	});

	promise.then(function(val) {
		console.log(val);

		return val + 2;
	}).then(function(val) {
		console.log(val);
	});
}

// max consecutive sum
function maxConsecutiveSum(arr) {
	var max = arr[0],
		ultMax = arr[0];

	for (var i = 0; i < arr.length; i++) {
		max = Math.max(arr[i], (arr[i] + max));
		ultMax = Math.max(max, ultMax);
	}

	return ultMax;
}

// recursive sigma
function rSigma(n) {
	if (n <= 1) {
		return n;
	}

	return rSigma(n - 1) + n;
}

// recursive binary search
function rBinarySearch(arr, x, min, max) {
	max = max || arr.length - 1;
	min = min || 0;
	var mid = Math.floor((max + min) / 2);

	if (x === arr[mid]) {
		return mid;
	}
	else if (x < arr[mid]) {
		max = mid - 1;
	}
	else if (x > arr[mid]) {
		min = mid + 1;
	}

	return rBinarySearch(arr, x, min, max);
}

// recursive fibonacci
function rFib(n) {
	if (n === 0 || n === 1) {
		return n;
	}

	return rFib(n - 1) + rFib(n - 2);
}

// binary string expansion
function bStringExp(str) {
	var result = [];

	function getExp(char, depth) {
		if (depth === str.length) {
			result.push(char);
			return;
		}
		else if (char[depth] === "?") {
			var temp = char.slice(0, depth);
			var rest = char.slice(depth + 1);

			// 0
			getExp(char = temp + 0 + rest, depth + 1);

			// 1
			getExp(char = temp + 1 + rest, depth + 1);
		}
		else {
			getExp(char, depth + 1);
		}
	}

	getExp(str, 0);
	return result;
}

console.log(bStringExp("1?0?"));