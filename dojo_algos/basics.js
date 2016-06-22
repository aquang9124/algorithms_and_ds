'use strict';
// swap two elements of an array
function swapValues(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;

	return arr;
}
// Given a sorted array of indexes produce a book index string
// For example, input: [1, 3, 4, 5, 7, 8, 10] produces output: "1, 3-5, 7-8, 10"
function bookIndex(arr) {
	var result = "",
		start,
		end;

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] === (arr[i+1] - 1)) {
			start = i;

			for (var j = i; j < arr.length; j++) {
				if (arr[j] === (arr[j+1] - 1)) {
					end = j+1;
				}
				else {
					break;
				}
			}

			if (end !== arr.length - 1) {
				result += (arr[start] + "-" + arr[end] + ", ");
			}
			else {
				result += (arr[start] + "-" + arr[end]);
			}

			i = j;
		}
		else {
			if (i === arr.length - 1) {
				result += arr[i];
			}
			else {
				result += (arr[i] + ", ");
			}
		}
	}

	return result;
}

// find all subsets of a string
function getPermutations(str) {
	var result = [];

	function getSets(char, depth=0) {
		if (depth === str.length) {
			result.push(char);
			return;
		}

		// left side
		getSets(char, depth + 1);
		// right side
		getSets(char + str[depth], depth + 1);
	}

	getSets('');
	return result;
}

// return count of how many deletions are needed
// to get a string of alternating characters
function getAlternations(str) {
	str = str.split('');
	var count = 0;

	for (let i = 0; i < str.length - 1; i++) {
		if (str[i].toLowerCase() !== str[i + 1].toLowerCase()) {
			continue;
		}
		str.splice(i, 1);
		i--;
		count++;
	}

	return count;
}

// quick sort
function quickSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var pivIdx = Math.floor(arr.length / 2),
		pivot = arr[pivIdx],
		before = [],
		after = [];

	for (var i = 0; i < arr.length; i++) {
		if (i !== pivIdx) {
			if (arr[i] <= pivot) {
				before.push(arr[i]);
			}
			else {
				after.push(arr[i]);
			}
		}
	}

	return quickSort(before).concat(pivot).concat(quickSort(after));
}

// remove all negatives from array
function removeNegatives(arr) {
	var negativeCount = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			arr[i - negativeCount] = arr[i];
		}
		else {
			negativeCount++;
		}
	}

	arr.length -= negativeCount;
	return arr;
}

// is the anagram a palindrome
function anaPalindrome(str) {
	var letters = {},
		count = 0;

	for (var i = 0; i < str.length; i++) {
		if (!letters.hasOwnProperty(str[i])) {
			letters[str[i]] = 1;
		}
		else {
			letters[str[i]] += 1;
		}
	}

	for (var key in letters) {
		if (letters[key] % 2 === 1) {
			count++;
		}
	}

	if (count > 1) {
		return false;
	}

	return true;
}

// dynamic programming memoization
function memoize(func) {
	var memo = {};
	return (input) => {
		if (!memo.hasOwnProperty(input)) {
			memo[input] = func(input);
		}

		return memo[input];
	}
}

// fibonacci
function fibo(n) {
	if (n <= 1) {
		return n;
	}

	return fibo(n - 1) + fibo(n - 2);
}

// max consecutive sum
var maxConsecutiveSum = function(input) {
	// instantiate the localMax and ultimateMax variables
	var localMax = input[0],
		ultimateMax = input[0];

	// loop through the rest of the values
	for (var i = 1; i < input.length; i++) {
		// update the localMax
		// check which is larger:
		// - the current element plus the localMax
		// - the current element by itself
		localMax = Math.max((localMax + input[i]), input[i]);

		// update the ultimateMax
		// check which is larger:
		// - the localMax
		// - the ultimateMax
		ultimateMax = Math.max(localMax, ultimateMax);
	}
	// return the ultimate Maximum
	return ultimateMax;
};

// lattice paths with memoize
var latticePaths = function(n, x, y) {
	x = x || 0; 
	y = y || 0;

	if (x === n && y === n) {
		return 1;
	}
	else if (x > n || y > n) {
		return 0;
	}

	return latticePaths(n, x + 1, y) + latticePaths(n, x, y + 1);
}

var memoLPaths = memoize(latticePaths);

// print 1 to 255
function print1To255() {
	var num = 1;
	while (num < 256) {
		console.log(num);
		num++;
	}

	return true;
}

// print array max
function printArrayMax(arr) {
	if (arr.length < 1) {
		console.log('[], no max value in an empty array');
		return;
	}

	var max = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	console.log("The maximum value is: " + max);
	return max;
}

// return array of odds up to `n`
function getOddsArray(n) {
	var result = [];

	for (let i = 1; i <= n; i += 2) {
		result.push(i);
	}

	return result;
}

function verifyOdds(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			return false;
		}
	}

	return true;
}

// linked list implementation
function ListNode(value) {
	this.value = value;
	this.next = null;
}

function SinglyLinkedList() {
	this.head = null;
	this.tail = null;
}

SinglyLinkedList.prototype = {
	pushFront: function(value) {
		var newNode = new ListNode(value);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			newNode.next = this.head;
			this.head = newNode;
		}

		return this;
	},
	removeFront: function() {
		if (this.head === null) {
			return null;
		}
		else {
			this.head = this.head.next;
		}

		return this;
	}
};

// find maximum number of 1's in an array of
// 0's and 1's where you must make only one
// consecutive flip of 0's and 1's
// Input: [1, 0, 1, 0, 0, 1, 0, 1] returns Output: 6
// You flip in the range of [1 - 4]
function findMaxOnes(arr) {
	var currentSlice = arr[0],
		bestSlice = arr[0],
		range = [];

	for (var i = 1; i < arr.length; i++) {
		
	}

	return bestSlice;
} 
// need to finish this algo
// console.log(findMaxOnes([1, 0, 1, 0, 0, 1, 0, 1]));

function fizzBuzzFib(n) {
	var fibo = [1, 1];

	function getFibs(num) {
		for (let i = 2; i <= num; i++) {
			fibo[i] = fibo[i - 1] + fibo[i - 2];
		}
	}

	getFibs(n);

	for (var idx = 0; idx < n; idx++) {
		if (fibo.indexOf(idx) !== -1) {
			console.log('fizz');
		}
		else {
			console.log('buzz');
		}
	}

	return fibo;
}

function climbStairs(n) {
	if (n === 0) {
		return 1;
	}
	else if (n < 0) {
		return 0;
	}

	return climbStairs(n - 1) + climbStairs(n - 2);
}

// ksum with pairs
function kSum(arr, k) {
	var result = [];
	var numbers = {};

	for (var i = 0; i < arr.length; i++) {
		var diff = k - arr[i];
		if (numbers.hasOwnProperty(diff)) {
			result.push([arr[i], diff]);
		}
		if (!numbers.hasOwnProperty(arr[i])) {
			numbers[arr[i]] = true;
		}
	}

	return result;
}

function kSum3(arr, k) {
	var result = [];
	var numbers = {};

	for (var i = 0; i < arr.length; i++) {	
		for (var j = i + 1; j < arr.length - 1; j++) {
			var test = k - (arr[i] + arr[j]);
			if (numbers.hasOwnProperty(test)) {
				result.push([arr[i], arr[j], test]);
			}
			if (!numbers.hasOwnProperty(arr[i])) {
				numbers[arr[i]] = true;
			}
			if (!numbers.hasOwnProperty(arr[j])) {
				numbers[arr[j]] = true;
			}
		}
	}

	return result;
}

// is prime
function isPrime(num) {
	var limit = Math.floor(num / 2),
		divisor = 2;

	if (num !== 2 && num % 2 === 0) {
		return false;
	}
	else if (num <= 1) {
		return false;
	}

	while (divisor <= limit) {
		if (num % divisor === 0) {
			return false;
		}

		divisor++;
	}

	return true;
}

function print0To100() {
	for (var i = 0; i < 101; i++) {
		if (isPrime(i)) {
			console.log(i);
		}
	}

	return true;
}

function binarySearch(arr, x) {
	var mid = Math.floor(arr.length / 2),
		left = 0,
		right = arr.length - 1;

	while (left <= right) {
		if (arr[mid] === x) {
			return mid;
		}
		if (arr[mid] < x) {
			left = mid + 1;
			mid = Math.floor((right + left) / 2);
		}
		if (arr[mid] > x) {
			console.log('here');
			right = mid - 1;
			mid = Math.floor((right + left) / 2);
		}
	}

	return false;
}

// max continuous sum
function maxContinuousSum(arr) {
	var max = arr[0],
		finalMax = arr[0];

	for (var i = 0; i < arr.length; i++) {
		max = Math.max(arr[i], (max + arr[i]));
		finalMax = Math.max(max, finalMax);
	}

	return finalMax;
}

// find start
function findStart(arr) {
	var bestIdx = 0,
		runningStreak = arr[0];

	for (var i = 1; i < arr.length; i++) {
		runningStreak += arr[i];

		if (runningStreak < arr[i]) {
			bestIdx = i;
			runningStreak = arr[i];
		}
	}

	return bestIdx;
}

function maxSum(arr) {
	var start = findStart(arr),
		max = arr[start],
		runningSum = arr[start];

	for (var i = start + 1; i < arr.length; i++) {
		runningSum += arr[i];
		max = Math.max(max, runningSum);
	}

	return max;
}