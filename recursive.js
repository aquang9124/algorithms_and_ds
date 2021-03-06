// All the basic algos done recursively

// Print 1 - 255
function rPrintTo255(n) {
	if (!n) { n = 1; }

	if (n == 255) {
		return n;
	}

	console.log(n);
	return rPrintTo255(n + 1);
}

// Print all odds from 1 - 1000
function rPrintOdds(n) {
	if (!n) { n = 1; }

	if (n == 1000) { return n; }

	if (n % 2 == 1) { 
		console.log(n);
	}

	return rPrintOdds(n + 1);
}

// Print sum of all odd numbers from 1 - 5000
function rPrintOddSum(n, sum) {
	if (!n || !sum) {
		n = 1;
		sum = 0;
	}

	if (n == 5000) { return sum; }

	if (n % 2 == 1) {
		sum += n;
	}

	return rPrintOddSum(n + 1, sum);
}

// Recursively print all members of an array
function rPrintArray(arr, idx) {
	if (!idx) { idx = 0; }

	if (idx == arr.length) {
		return 1;
	}

	console.log(arr[idx]);
	return rPrintArray(arr, idx + 1);
}

// Recursively find the maximum value in an array
function rFindMax(arr, max, idx) {
	if (!max || !idx) {
		max = arr[0];
		idx = 1;
	}

	if (idx == arr.length) {
		return max;
	}

	if (arr[idx] > max) {
		max = arr[idx];
	}

	return rFindMax(arr, max, idx + 1);
}

// Recursively find the average value in an array, floored
function rFindAvg(arr, avg, idx) {
	if (!avg || !idx) {
		avg = arr[0];
		idx = 1;
	}

	if (idx == arr.length) {
		return Math.floor(avg / arr.length);
	}

	avg += arr[idx];
	return rFindAvg(arr, avg, idx + 1);
}

// Recursively create an array that holds all odds between 1 - 255
function rOddsArray(arr, n) {
	if (!n || !arr) {
		n = 1;
		arr = [];
	}

	if (n > 255) {
		return arr;
	}

	if (n % 2 == 1) {
		arr.push(n);
	}

	return rOddsArray(arr, n + 1); 
}

// Greater than Y
function rGreaterThanY(arr, y, idx, count) {
	if (!idx) {
		idx = 0;
		count = 0;
	}

	if (idx == arr.length) {
		return count;
	}

	if (arr[idx] > y) {
		count += 1;
	}

	return rGreaterThanY(arr, y, idx + 1, count);
}

// Square every value in an array
function squareArray(arr, i) {
	if (!i) {
		i = 0;
	}

	if (i == arr.length) {
		return arr;
	}

	arr[i] = Math.pow(arr[i], 2);
	return squareArray(arr, i + 1);
}

// Turn negatives into zeroes
function rNoNegatives(arr, i) {
	if (!i) { i = 0; }

	if (i == arr.length) {
		return arr;
	}

	if (arr[i] < 0) {
		arr[i] = 0;
	}

	return rNoNegatives(arr, i + 1);
}

// Get maximum, minimum, and average values in an array
function rGetMaxMinAvg(arr, i, max, min, avg) {
	if (!i) {
		i = 1;
		max = arr[0];
		min = arr[0];
		avg = arr[0];
	}

	if (i == arr.length) {
		avg = Math.floor(avg/arr.length);
		return [max, min, avg];
	}

	if (arr[i] > max) {
		max = arr[i];
	}

	if (arr[i] < min) {
		min = arr[i];
	}

	avg += arr[i];
	return rGetMaxMinAvg(arr, i + 1, max, min, avg);
}

// Shift values towards the front and turn the last value into 0
function rShiftVals(arr, i) {
	if (typeof i == 'undefined') {
		i = arr.length;
	}

	if (i === 0) {
		arr[arr.length - 1] = 0;
		return arr;
	}

	arr[i] = arr[i - 1];
	return rShiftVals(arr, i - 1);
}

// random array
function randomArray(arr, n) {
	if (arr === undefined) {
		arr = [];
		n = 0;
	}

	if (n == 10) {
		return arr;
	}

	arr.push(Math.floor(Math.random()*101));
	return randomArray(arr, n + 1);
}

// Recursively reverse an array
function reverseArrayR(arr, left, right) {
	if (typeof left === 'undefined') {
		left = 0;
		right = arr.length - 1;
	}

	if (left >= right) {
		return arr;
	}

	var temp = arr[left];
	arr[left] = arr[right];
	arr[right] = temp;

	return reverseArrayR(arr, left + 1, right - 1);
}

// IsPrime recursive
function isPrime(n, i) {
	if (i === undefined) {
		i = 2;
	}

	if (n == 2) {
		return true;
	}
	else if (n % 2 === 0) {
		return false;
	}

	if (i > Math.floor(n/2)) {
		return true;
	}

	if (n % i === 0) {
		return false;
	}

	return isPrime(n, i + 1);
}

// Insert X in Y
function insertXInY(arr, val, y, idx) {
	if (idx === undefined) {
		idx = arr.length;
	}

	if (idx == y) {
		arr[idx] = val;
		return arr;
	}

	arr[idx] = arr[idx - 1];
	return insertXInY(arr, val, y, idx - 1);
}

// Remove negatives
function removeNegativesR(arr, count, idx) {
	if (typeof count === 'undefined') {
		count = 0;
		idx = 0;
	}

	if (idx == arr.length) {
		arr.length = arr.length - count;
		return arr;
	}

	if (arr[idx] >= 0) {
		arr[idx - count] = arr[idx];
	} else {
		count++;
	}

	return removeNegativesR(arr, count, idx + 1);
}

// Linear search recursive
function linearSearchR(arr, val, idx) {
	if (idx === undefined) {
		idx = 0;
	}

	if (idx == arr.length) {
		return false;
	}

	if (arr[idx] == val) {
		return idx;
	}

	return linearSearchR(arr, val, idx + 1);
}

// Binary search recursive
function binarySearchR(arr, val, min, max, mid) {
	if (typeof min === 'undefined')
	{
		min = 0;
		max = arr.length - 1;
		mid = Math.floor(arr.length / 2);
	}

	if (min > max) {
		return false;
	}
	else if (arr[mid] > val) {
		max = mid - 1;
		mid = Math.floor(min + (max - min) / 2);
		return binarySearchR(arr, val, min, max, mid);
	}
	else if (arr[mid] < val) {
		min = mid + 1;
		mid = Math.floor(min + (max - min) / 2);
		return binarySearchR(arr, val, min, max, mid);
	}
	else {
		return mid;
	}
}

// Sigma
function rSigma(n) {
	if (n <= 1) {
		return 1;
	}

	return rSigma(n - 1) + n;
}

// factorial
function rFactorial(n) {
	if (n <= 1) {
		return 1;
	}

	return rFactorial(n - 1) * n;
}

// Print each item in an array in order
function print(arr) {
	var len = arr.length;
	var traverse = function(i) {
		if (i >= len) {
			return;
		}
		console.log(arr[i]);
		traverse(i + 1);
	}

	traverse(0);
}

// Print each item in array backwards
function printR(arr) {
	var len = arr.length - 1;

	var traverse = function(start) {
		if (start < 0) {
			return;
		}

		console.log(arr[start]);
		traverse(start - 1);
	}

	traverse(len);
}

// Reverse a string
function reverser(str) {
	var result,
		len = str.length - 1;
	var getReverse = function(char, rest) {
		if (rest.length === 0) {
			return char;
		}

		return getReverse(char + rest.slice(rest.length - 1), rest.slice(0, rest.length - 1));
	
	}

	return getReverse('', str);

}

// create tuples from an array
function createTuples(arr) {
	var result = [];

	function getTuples(rem) {
		if (rem.length === 0) {
			return;
		}

		result.push([rem[0], rem[1]]);
		getTuples(rem.slice(2));
	}

	getTuples(arr);
	return result;
}