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

// standard print using recursion
function printR(arr) {
	var traverse = function(start) {
		if (start === arr.length) {
			return;
		}
		console.log(arr[start]);
		traverse(start + 1);
	}
	traverse(0);
}

// print each item in array reverse
function reversePrint(arr) {
	var traverse = function(start) {
		if (start < 0) {
			return;
		}
		console.log(arr[start]);
		traverse(start - 1);
	}
	traverse(arr.length - 1);
}

Array.prototype.makeSwap = function(idx, idx2) {
	var temp = this[idx];
	this[idx] = this[idx2];
	this[idx2] = temp;

	return true;
};
// reverse a string using recursion
function reverseStr(str) {
	str = str.split("");

	function traverse(left, right) {
		if (left >= right) {
			return;
		}

		str.makeSwap(left, right);
		traverse(++left, --right);
	}

	traverse(0, str.length - 1);
	return str.join('');
}

function makeTuples(arr) {
	var result = [];

	function tupleCreator(i) {
		if (i > arr.length) {
			return;
		}
		result.push([arr[i], arr[i+1]]);
		tupleCreator(i+2);
	}

	tupleCreator(0);
	return result;
}

// get power using recursion
function toPower(base, exponent) {
	var result = 1;

	function multiply(count) {
		if (count === exponent) {
			return;
		}
		result *= base;
		multiply(++count);
	}

	multiply(0);
	return result;
}

function mergeSort(arr) {
	var left = arr.slice(0, Math.floor(arr.length / 2));
	var right = arr.slice(Math.floor(arr.length / 2));

	if (arr.length < 2) {
		return arr;
	}

	return merge(mergeSort(left), mergeSort(right));
}
// recursively merge two arrays
function merge(arr1, arr2) {
	var result = [];

	function traverse(pointer1, pointer2) {
		if (pointer1 === arr1.length) {
			result = result.concat(arr2.slice(pointer2));
			return;
		}
		else if (pointer2 === arr2.length) {
			result = result.concat(arr1.slice(pointer1));
			return;
		}

		if (arr1[pointer1] <= arr2[pointer2]) {
			result.push(arr1[pointer1]);
			traverse(pointer1+1, pointer2);
		} else {
			result.push(arr2[pointer2]);
			traverse(pointer1, pointer2+1);
		}
	}

	traverse(0, 0);
	return result;
}

// move to end of arr
Array.prototype.moveToEnd = function(idx) {
	for (var i = idx; i < this.length - 1; i++) {
		var temp = this[i];
		this[i] = this[i + 1];
		this[i + 1] = temp;
	}

	return this;
}

// remove even length strings from an array using recursion
function removeEvens(arr, idx) {
	if (idx === undefined) {
		idx = 0;
	}
	if (idx === arr.length) {
		return arr;
	}
	else if (arr[idx].length % 2 === 0) {
		arr.moveToEnd(idx);
		arr.pop();
		idx--;
	}
	return removeEvens(arr, idx+1);
}

// non recursive, this is a test of function currying in javascript
function greetCurried(greeting) {
	return function(name) {
		console.log(greeting + ", " + name);
	}
}

// greetCurried('Hello')('Alex'); 
// You can invoke the returned function directly if you wanted to
function curryCeption(greeting) {
	return (separator) => {
		return (name) => {
			return (emphasis) => {
				console.log(greeting + separator + name + emphasis);
			};
		};
	};
}

// curryCeption('Hello')(', ')('Alex')('!');
// Using fat arrow functions for the curryception

String.prototype.addEmphasis = function(emphasis) {
	var emphasize = () => {
		return this + emphasis;
	};
	return emphasize();
};
// Just a test of how `this` works inside of a fat arrow function.
// Lexical `this` is so much better than how it worked before,
// especially with strict mode

