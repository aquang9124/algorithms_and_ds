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
