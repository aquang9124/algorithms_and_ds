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

// lattice paths, count number of possible paths
function latticePaths(n, x, y) {
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
		console.log(memo);
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

var maxConsecutiveSum = function(input) {
	
};

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
console.log(memoLPaths(3));
console.log(memoLPaths(3));
console.log(memoLPaths(4));