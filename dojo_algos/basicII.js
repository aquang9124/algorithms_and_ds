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

// get gcd
function getGCD(x, y) {
	// if the two numbers are equal, just return x
	if (x === y) {
		return x;
	}
	// if x < y, we swap their values to maintain consistency in our code
	if (x < y) {
		var oldX = x;
		x = y;
		y = oldX;
	}
	// this is our base case, if x % y === 0, return the previous remainder which is `y`
	if (x % y === 0) {
		return y;
	}
	// the euclidian algorithm: x === (y * Math.floor(x / y)) + (x % y)
	var temp = y;
	y = (x % y);
	x = temp;

	return getGCD(x, y);
}

// print the first k rows of pascal's triangle
function printPascal(k) {

	var getRows = (n) => {
		if (n === k) {
			return;
		}

		var rowOutput = "";
		for (var i = n; i >= 0; i--) {
			var current = rFact(n)/(rFact(i)*rFact(n - i));
			rowOutput = rowOutput + " " + current;
		}

		console.log(rowOutput);
		getRows(n + 1);
	};

	getRows(0);
}

// string mingling, given two strings of equal length, print string of length 2 times `n`
function mingleStrings(x, y) {
	if (x.length !== y.length) {
		return false;
	}

	var result = "";

	function mingler(idx) {
		if (idx === x.length) {
			return;
		}

		result += (x[idx] + y[idx]);
		mingler(idx + 1);
	}

	mingler(0);
	return result;
}

// given a string of even length, swap the even indexed characters with the following character
function permuteString(str, idx) {
	idx = idx || 0;

	if (str.length % 2 !== 0) {
		return false;
	}

	str = !Array.isArray(str) ? str.split('') : str;

	if (idx >= str.length) {
		return str.join('');
	}
	else if (idx % 2 === 0) {
		var temp = str[idx];
		str[idx] = str[idx + 1];
		str[idx + 1] = temp;
	}

	return permuteString(str, idx + 2);
}

// insertion sort
function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			for (let j = i; j > 0; j--) {
				if (arr[j] < arr[j - 1]) {
					var temp = arr[j];
					arr[j] = arr[j - 1];
					arr[j - 1] = temp;
				}
			}
		}
	}

	return arr;
}

// srmcards, given an int[] return max num of turns to empty the array
function maxTurns(arr) {
	var results = 0,
		altResult = 0;

	for (var i = 0; i < arr.length; i++) {
		var tempArr = arr.slice(0);
		var turns = 0;
		var idx = i;

		while (tempArr.length > 0) {
			var temp = [].concat(tempArr.splice(idx, 1));
			var card = temp.pop();
			var cardPlus = tempArr.indexOf(card + 1);
			var cardMinus = tempArr.indexOf(card - 1);

			if (cardPlus !== -1) {
				tempArr.splice(cardPlus, 1);
			}
			
			if (cardMinus !== -1) {
				tempArr.splice(cardMinus, 1);
			}

			if (idx > 0) {
				idx = 0;
			}

			turns++;
		}

		altResult = turns;
		results = Math.max(results, altResult);
	}
	return results;
}

// print array reverse
function printReverse(arr) {
	var result = [];

	for (var i = arr.length - 1; i >= 0; i--) {
		result.push(arr[i]);
	}

	return result;
}

// takes two strings and returns a string that contains only the elements found in both
function commonChars(str1, str2) {
	var result = "";

	for (var i = 0; i < str1.length; i++) {
		if (str2.indexOf(str1[i]) !== -1) {
			result += str1[i];
		}
	}

	return result;
}

// flatten nested list using recursion
function flatten(arr) {
	return arr.reduce(function(flat, notFlat) {
		return flat.concat(!Array.isArray(notFlat) ? notFlat : flatten(notFlat));
	}, []);
}

// flatten nested list, different implementation
function flatArr(arr) {
	var result = [];

	function makeFlat(element) {
		if(!Array.isArray(element)) {
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

// foobars
function bar(n) {
	var timesCalled = 0;

	return (mult) => {
		timesCalled++;
		var result = (n * mult) + timesCalled;
		console.log(result);
		return result;
	}
}

// throttle the function
function loading(a, b) {
	console.log('Loading... ' + a + " " + b);
}

function throttler(fn, time) {
	var runnable = true;

	return function() {
		if (runnable) {
			runnable = false;

			setTimeout(function() {
				runnable = true;
			}, time);

			fn.apply(null, arguments);
		}
	}
}

module.exports = {
	mingleStrings: mingleStrings,
	permuteString: permuteString,
	insertionSort: insertionSort,
	printReverse: printReverse,
	commonChars: commonChars,
	flatten: flatten,
	flatArr: flatArr
};