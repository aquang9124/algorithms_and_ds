// jaden casing
String.prototype.toJadenCase = function() {
	if (this.trim() === "") {
		return false;
	}

	let s = this.split(' ');

	for (let i = 0; i < s.length; i++) {
		let word = s[i].split('');
		word[0] = word[0].toUpperCase();
		s[i] = word.join('');
	}

	return s.join(' ');
};

// more functional implementation of jaden casing
String.prototype.toJaden = function() {
	let s = this.split(' ');

	s = s.map(function(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});

	return s.join(' ');
};

// first longest consecutive string
function consecStrings(arr, k) {
	let n = arr.length;

	if (n === 0 || k > n || k <= 0) {
		return "";
	}

	let longestStr = arr[0];

	for (let i = 0; i < n; i++) {
		let currentStr = arr[i];
		let count = 1;
		let j = i + 1;

		while (count < k && j < n) {
			currentStr += arr[j];
			j++;
			count++;
		}

		if (longestStr.length < currentStr.length) {
			longestStr = currentStr;
		}

	}

	return longestStr;
}

// fun with digits
function digPow(n, k) {
	if (n >= 10) {
		n = n.toString().split('');
		n = n.map( (digit) => parseInt(digit) );
	} else {
		n = [n];
	}

	let power = k;
	let sum = 0;

	for (let i = 0; i < n.length; i++) {
		sum += Math.pow(n[i], power);
		power++;
	}

	let difference = sum / parseInt( n.join('') );

	if ( difference === Math.floor(difference) ) {
		return difference;
	} else {
		return -1;
	}
}

// distance from average
function distancesFromAverage(arr) {
	var avg = arr[0];
	var results = [];

	for (var i = 1; i < arr.length; i++) {
		avg += arr[i];
	}

	avg /= arr.length;

	for (var j = 0; j < arr.length; j++) {
		var num = avg - arr[j];
		num = parseFloat(num.toFixed(2));
		results.push(num);
	}

	return results;

}

// es6 functional version
const distanceFromAvg = arr => {
	let avg = arr.reduce( (sum, val) => sum + val ) / arr.length;
	return arr.map( v => +(avg - v).toFixed(2) );
};

// non es6 functional version
var distFromAverage = function(arr) {
	var avg = arr.reduce( function(sum, val) {
		return sum + val;
	} ) / arr.length;

	return arr.map( function(val) {
		return +(avg - val).toFixed(2);
	} );
};

// count of divisible numbers
function divisibleCount(x, y, k) {
	let count = 0;

	for (let i = x; i <= y; i++) {
		if (i % k === 0) {
			count++;
		}
	}

	return count;
}

// missing number in sequence given array, range is 1 - 10000
function missingNum(arr, total) {
	let sum = arr.reduce( (s, v) => {
		return s + v;
	} );

	return total - sum;	
}

// function that tells you how many times its been called
function magicWrap() {
	let count = 0;

	return () => {
		count++;
		console.log(`Function has been called ${count} time(s)!`);
	}
}

// similar to above except actually acts as wrapper around callback function
function wrapAFunc(fn) {
	let count = 0;

	return (x) => {
		count++;
		return fn(x, count);
	}
}

let simpleFn = wrapAFunc( (x, y) => {
	return x + y;
} );