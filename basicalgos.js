// Function to print 1-255
function printTo255() {
	for (var i = 1; i < 256; i++) {
		console.log(i);
	}
}

// Function to print all odds 1-1000
function printOdds() {
	for (var i = 1; i < 1001; i++) {
		if (i % 2 === 1) {
			console.log(i);
		}
	}
}

// Function to print the sum of all odds from 1 to 5000
function printOddSum() {
	var sum = 0;

	for (var i = 1; i < 5001; i++) {
		if (i % 2 === 1) {
			sum += i;
		}
	}

	console.log(sum);
}

// Function iterate over and print all members of an array
var x = [1,3,5,7,9,13];
function iterArr(arr) {
	for (i in arr) {
		console.log(arr[i]);
	}
}

// Function to find the max in an array
var y = [-3, 3, 5, 7, 11];
function findMax(arr) {
	var max = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
}

// Function to find the average in an array
var z = [1,3,5,7,20];
function findAvg(arr) {
	var average = 0;

	for (var i = 0; i < arr.length; i++) {
		average += arr[i];
	}

	return average / arr.length;
}

// Function to create an array of odd numbers
function createOddArr() {
	var arr = [];

	for (var i = 1; i < 256; i++) {
		if (i % 2 === 1) {
			arr.push(i);
		}
	}

	return arr;
}

// Function that takes an array and returns the number of values greater than y
var xX = [1, 3, 4, 5, 8];
var theY = 4;
function greaterThanY(arr, y) {
	var num = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > y) {
			num += 1;
		}
	}

	return num;
}

// Function to square each value in an array
function squareArr(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * arr[i];
	}

	return true;
}

// Function to eliminate negative numbers from an array and replace them with 0s
function byeNegs(arr) {
	for (x in arr) {
		if (arr[x] < 0) {
			arr[x] = 0;
		}
	}

	return true;
}

// Function to find the min, max, and average of an array
function findMinMaxAvg(arr) {
	var max = arr[0],
		min = arr[0],
		avg = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}

		if (min > arr[i]) {
			min = arr[i];
		}

		avg += arr[i];
	}
	avg = avg / arr.length;
	return [max, min, avg];
}

// Function to shift the values in an array over by one
var sArr = [1, 5, 10, 7, -2];
function shiftArr(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		arr[i] = arr[i + 1];
	}

	arr[arr.length - 1] = 0;

	return arr;
}

// Takes an array of numbers and replaces any negatives with the string 'Dojo'
var negArr = [-1, 3, -2, 5, 7];
function num2Str(arr) {
	var dojo = 'Dojo';

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = dojo;
		}
	}

	return arr;
}

// Creates a random array filled with 10 random values
function randomArr() {
	var arr = [],
		i = 0;

	while (i < 10) {
		var randInt = Math.floor(Math.random()*10);
		arr.push(randInt);
		i++;
	}

	return arr;
}

// A function that swaps the first and last value in the array
function swapFNL(arr) {
	var temp = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.length-1] = temp;

	return arr;
}

// Reverse the values in an array
// This first function is a helper function to swap stuff
function swapStuff(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;

	return true;
}

// This function actually reverses the array, using the helper function
function reverseArr(arr) {
	var lastIdx = arr.length - 1;
	for (var i = 0; i < arr.length; i++) {
		if (i === lastIdx) {
			break;
		}
		swapStuff(arr, i, lastIdx--);
	}

	return arr;
}

// This function takes an array and inserts a new number x in index y
var xyarr = [1, 3, 5, 7, 10];
function insertXInY(arr, x, y) {
	var newArr = [];
	if (arr[y] === undefined) {
		arr[y] = x;
	}
	else {
		for (var i = 0; i < y; i++) {
			newArr.push(arr[i]);
		}

		newArr[y] = x;

		for (var i = y; i < arr.length; i++) {
			newArr.push(arr[i]);
		}

		arr = newArr;
	}

	return arr;
}

// Here's a much improved version of that same algorithm
function insertXToY(arr, x, y) {
	for (var i = arr.length; i > y; i--) {
		arr[i] = arr[i - 1];
	}

	arr[y] = x;

	return arr;
}