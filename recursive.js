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
