// Function to check if a number is prime
function checkPrime(n) {
	var divisor = 2;
	// A prime number is only divisible by itself and 1
	// We don't need to check if it's divisible by 1 because we know it is.
	// Start at 2 and if we reach 'n' without being able to divide evenly
	// then we know the number is a prime number.
	while (divisor < n) {
		if (n % divisor === 0)
		{
			return false;
		}
		divisor++;
	}

	return true;
}

// Function to find all prime factors of a number
function primeFactors(n) {
	var factors = [],
		divisor = 2;

	while (n > 2) {
		if (n % divisor === 0)
		{
			factors.push(divisor);
			n /= divisor;
		}
		else
		{
			divisor++;
		}
	}

	return factors;
}

// Fibonacci
function iterFib(n) {
	var fibo = [0, 1];

	for (var i = 0; i < n; i++) {
		fibo.push(fibo[i] + fibo[i + 1]);
	}

	return fibo[n];
}

// Recursive fibonacci
function rFib(n) {
	if (n === 0 || n === 1) {
		return n;
	}

	return rFib(n - 1) + rFib(n - 2);
}

// find greatest common divisor
// Only works if a is lower than b
function greatestCommonDivisor(a, b) {
	if (b === 0) {
		return a;
	} else {
		return greatestCommonDivisor(a, a%b);
	}
}

// Remove duplicates from an array
function removeDupes(arr) {
	var exists = {},
		arr2 = [];

	for (var i = 0; i < arr.length; i++) {
		if (exists[arr[i]] !== true) {
			arr2.push(arr[i]);
		}
		exists[arr[i]] = true;
	}

	return arr2;
}

// Stat doubles function
function statDoubles() {
	var die = Math.floor(Math.random() * 6) + 1,
		die2 = Math.floor(Math.random() * 6) + 1,
		max = die + die2,
		min = die + die2,
		avg = die + die2,
		numRolls = 1;

	while (die != die2) {
		if (max < (die + die2)) {
			max = die + die2;
		}

		if (min > (die + die2)) {
			min = die + die2;
		}

		numRolls++;
		avg += die;
		avg += die2;
		die = Math.floor(Math.random() * 6) + 1;
		die2 = Math.floor(Math.random() * 6) + 1;
	}

	avg = Math.floor(avg / numRolls);
	return [numRolls, max, min, avg];
}

// popFront
function popFront(arr) {
	if (arr.length < 2) {
		return arr.pop();
	}

	for (var i = 0; i < arr.length - 1; i++) {
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}

	return arr.pop();
}

// insertAt
function insertAt(arr, idx, val) {
	for (var i = arr.length; i > idx; i--) {
		arr[i] = arr[i - 1];
	}
	arr[idx] = val;
	return arr;
}

// removeAt
var remArr = [1, 2, 3, 4, 5];
function removeAt(arr, idx) {
	for (var i = idx; i < arr.length - 1; i++) {
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}

	return arr.pop();
}

// Reverse array
function reverseArray(arr) {
	var left = 0;
	var right = arr.length - 1;

	while (left < right) {
		var temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
		left++;
		right--;
	}

	return arr;
}

// Remove negatives

// Helper function for removeNegatives
function moveToEndAndPop(arr, idx) {
	for (var i = idx; i < arr.length - 1; i++) {
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}

	return arr.pop();
}

// Actual function
function removeNegatives(arr) {
	var negativesLoc = {};
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			moveToEndAndPop(arr, i);
			i--;
		}
	}

	return arr;
}

// Alternate implementation of removeNegatives
function onlyPositives(arr) {
	var numNegatives = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			arr[i - numNegatives] = arr[i];
		} else {
			numNegatives++;
		}
	}

	while (numNegatives--) {
		arr.pop();
	}

	return arr;
}