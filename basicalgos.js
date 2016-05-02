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
