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

// recursively take all even digits out of number
function unevenNum(num, current) {
	if (current === undefined) {
		num = num.toString().split('');
		current = num.length - 1;
	}

	if (current < 0) {
		return num.join('');
	}
	else if (num[current] % 2 === 0) {
		num.splice(current, 1);
	}
	
	return unevenNum(num, current - 1);
}

// recursive tribonacci
function rTrib(n) {
	if (n < 0) {
		return -1;
	}
	else if (n === 0 || n === 1) {
		return n;
	}

	return rTrib(n - 1) + rTrib(n - 2) + rTrib(n - 3);
}

// string subsets
function strPermute(str, char, result, depth) {
	result = result || [];
	char = char || "";
	depth = depth || 0;

	if (depth === str.length) {
		result.push(char);
		return;
	}

	strPermute(str, char, result, depth + 1);
	strPermute(str, char + str[depth], result, depth + 1);

	return result;
}

// rising odd squares, descending even squares
function risingSquares(n, height) {
	height = height || 0;

	if (height <= n) {
		if (height % 2 === 1) {
			console.log(Math.pow(height, 2));
		}
		risingSquares(n, height + 1);
	}
	else if (n > 0) {
		if (n % 2 === 0) {
			console.log(Math.pow(n, 2));
		}

		risingSquares(n - 1, height);
	}
}

// get max number of grapes, non-consecutive
function getMaxGrapes(grapes) {

	function countGrapes(start, sum) {
		sum = sum || 0;

		if (start >= grapes.length) {
			return sum;
		}

		sum += grapes[start];
		return countGrapes(start + 2, sum);
	}

	
	return Math.max(countGrapes(0), countGrapes(1));
}

// recursive factorial
function rFact(n) {
	if (n <= 1) {
		return 1;
	}

	return rFact(n - 1) * n;
}

// merge sort
function mergeSort(arr) {
	var mid = Math.floor(arr.length / 2),
		left = arr.slice(0, mid),
		right = arr.slice(mid);

	if (arr.length < 2) {
		return arr;
	}

	return mergeArrays(mergeSort(left), mergeSort(right));
}

function mergeArrays(arr1, arr2) {
	var p1 = 0,
		p2 = 0,
		result = [];

	while (p1 < arr1.length && p2 < arr2.length) {
		if (arr1[p1] <= arr2[p2]) {
			result.push(arr1[p1]);
			p1++;
		}
		else if (arr2[p2] < arr1[p1]) {
			result.push(arr2[p2]);
			p2++;
		}
	}

	if (p1 === arr1.length) {
		result = result.concat(arr2.slice(p2));
	}
	else if (p2 === arr2.length) {
		result = result.concat(arr1.slice(p1));
	}

	return result;
}

// get anagrams
function getAnagrams(str) {
	var memo = {};

	function createAnagrams(char, idx1, idx2) {
		if (!memo.hasOwnProperty(char)) {
			memo[char.join('')] = true;
		}

		if (idx1 === str.length || idx2 < 0) {
			return;
		}

		var temp = char[idx1];
		char[idx1] = char[idx2];
		char[idx2] = temp;

		createAnagrams(char, idx1 + 1, idx2);
		createAnagrams(char, idx1, idx2 - 1);
	}

	createAnagrams(str.split(''), 0, str.length - 1);
	return Object.keys(memo);
}

// climb stairs, return array of ways to climb
function stairMaster(n) {
	var results = [];

	function doClimb(start, result) {
		if (start === n) {
			results.push(result);
			return;
		}
		else if (start > n) {
			return;
		}
					
		doClimb(start + 1, result.concat(1));

		doClimb(start + 2, result.concat(2));
	}

	doClimb(0, []);
	return results;
}

console.log(stairMaster(3));