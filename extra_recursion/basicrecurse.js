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
function nthFibo(n) {
	if (n === 1 || n === 0) {
		return n;
	}

	return nthFibo(n - 2) + nthFibo(n - 1);
}

// fizzbuzz with fibonacci
function isPerfectSq(num) {
	var i = 1;
	while (true) {
		if (num < 0) {
			return false;
		}
		if (num === 0) {
			return true;
		}
		num -= i;
		i += 2;
	}
}

function fizzBuzzFibo(n) {

	for (var i = 1; i <= n; i++) {
		if (isPerfectSq((5*Math.pow(i, 2)) + 4) || isPerfectSq((5*Math.pow(i, 2)) - 4)) {
			console.log('fizz');
		} else {
			console.log('buzz');
		}
	}

	return true;
}

// nthFibonacci
function nthFibonacci(n) {
	var fibonacci = [0, 1];

	function searchFib(count, limit) {
		if (count === limit - 1) {
			return;
		}
		var temp = fibonacci[1];
		fibonacci[1] = fibonacci[0] + fibonacci[1];
		fibonacci[0] = temp;
		searchFib(count+1, limit);
	}

	searchFib(0, n);
	return fibonacci[1];
}

// powerset
// take in a string and return an array of that string's permutations
function powerSet(str) {
	var result = [],
		permutations = {};

	function traverse(char, depth) {
		if (depth === str.length) {
			var key = char.split('').sort().join('');
			if (permutations.hasOwnProperty(key) === false) {
				permutations[key] = true;
				result.push(key);
			}

			return;
		}

		// left side
		traverse(char, depth+1);
		// right side
		traverse(char + str[depth], depth+1);
	}

	traverse('', 0);
	return result;
}

// factorial recursive
function specFactorial(n) {
	if (n > 1) {
		return specFactorial(n - 1) * n;
	} else {
		return 1;
	}
}

// Works just fine without the named function expression, however
var namedFact = function namedFE(n) {
	if (n > 1) {
		return namedFE(n - 1) * n;
	} else {
		return 1;
	}
};

// remove from front
function popFront(arr) {
	var traverse = (runner=0) => {
		if (runner === arr.length) {
			arr.pop();
			return;
		} else {
			arr[runner] = arr[runner+1];
			traverse(runner+1);
		}
	};

	traverse();
	return arr;
}

// recursive pushFront
function pushFront(arr, value) {
	var traverse = (idx=arr.length) => {
		if (idx > 0) {
			arr[idx] = arr[idx - 1];
			traverse(idx - 1);
		} else {
			arr[0] = value;
			return;
		}
	};

	traverse();
	return arr;
}

// recursive matrix iteration
function theMatrix(matrix) {
	var traverse = (element) => {
		if (!Array.isArray(element)) {
			console.log(element);
		}
		else {
			for (let i = 0; i < element.length; i++) {
				traverse(element[i]);
			}
		}
	};

	traverse(matrix);
	return true;
}

// is it time to graduate from basic recursion?
function rBubble(arr) {

	function traverse(swapped=true, limit=1) {
		if (swapped) {
			swapped = false;
			for (var i = 0; i < arr.length - limit; i++) {
				if (arr[i] > arr[i + 1]) {
					var temp = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = temp;
					swapped = true;
				}
			}
			traverse(swapped, limit+1);
		} else {
			return;
		}
	}

	traverse();
	return arr;
}

var latticePaths = function(n){
	var count = 0;

	function traverse(x, y) {
		if (x === n && y === n) {
			count += 1;
			return;
		}
		else if (x > n || y > n) {
			return;
		}

		traverse(x + 1, y);
		traverse(x, y + 1);
	}

	traverse(0, 0);
	return count;
}

function latticeSE(n, x, y) {
	x = x || 0;
	y = y || 0;

	if (x === n && y === n) {
		return 1;
	}
	else if (x > n || y > n) {
		return 0;
	}

	return latticeSE(n, x + 1, y) + latticeSE(n, x, y + 1);
}

function latticePure(x, y) {
	if (x === 0 && y === 0) {
		return 1;
	}
	else if (x < 0 || y < 0) {
		return 0;
	}

	return latticePure(x - 1, y) + latticePure(x, y - 1);
}