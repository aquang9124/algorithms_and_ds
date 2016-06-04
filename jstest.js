// function to produce a JSON object
function outputJson(obj) {
	return JSON.stringify(obj);
}

// number of 1 bits
var hammingWeight = function(n) {
	var binaryRep = n.toString(2),
		count = 0;

	for (var i = 0; i < binaryRep.length; i++) {
		if (binaryRep[i] == 1) {
			count++;
		}
	}

	return count;
};

// test to dynamically create 10 button elements
function createButtons() {
	for (var i = 1; i <= 10; i++) {
		var btn = document.createElement("BUTTON");
		var t = document.createTextNode(i);
		btn.setAttribute("id", i);
		btn.appendChild(t);
		document.body.appendChild(btn);
	}
	document.querySelector("body").addEventListener("click", function() {
		if (event.target.tagName.toLowerCase() === 'button') {
			alert(event.target.id);
		}
	});
}

// recursive powersets
var powerSet = function(str) {
  var sets = [];
  var lib = {};

  var getSets = function(power, depth) {
    if (depth === str.length)
    {
      var key = power.split('').sort().join('');
      if (lib[key] === undefined) {
        sets.push(key);
        lib[key] = true;
      }
      return;
    }

    getSets(power, depth + 1);

    getSets(power + str[depth], depth + 1);
  };

  getSets('', 0);
  return sets;
}

// given an array of integers in range of 1 to N + 1, return missing number
function findMissing(arr) {
	var actSum = 0,
		sum = 0;

	for (var i = 1; i <= arr.length + 1; i++) {
		sum += i;
	}

	for (var j = 0; j < arr.length; j++) {
		actSum += arr[j];
	}

	return sum - actSum;
}

// function to test switch cases
function switcheroo(n) {
	switch (n) {
		case 1:
			console.log('You put in 1!');
			break;
		case 2:
			console.log('You put in 2!');
			break;
		// It will always say both console logs if you put in 3.
		case 3:
			console.log('You put in 3!');
		case 4:
			console.log('I like green eggs and ham.');
			break;
		default:
			console.log('I did\'nt find a match here.');
			break;
	}

	// Implicit return of undefined
}

// creates a triangle in the console
function createTriangle() {
	var char = '';

	for (var i = 0; i < 7; i++) 
		console.log(char += '#');

	// Omitted braces because it is a one-liner.
}

// Practice with closures
function multiplier(number) {
	return function(factor) {
		return number * factor;
	}
}
var multiplyByN = multiplier(2);

function doubler(n) {
	var result;
	return function() {
		return result = n * n;
	}
}
var doubleIt = doubler(5);

function divide(n) {
	return function(x) {
		return n / x;
	}
}
var divideBy = divide(25);

function closingFib() {
	var x = 0,
		y = 1,
		nextFib = x + y;

	return function(n) {
		while (n > 1) {
			x = y;
			y = nextFib;
			nextFib = x + y;
			n--;
		}

		return y;
	}
}
var fibIt = closingFib();

// Simple recursive function
function power(base, exponent) {
	if (exponent === 0) {
		return 1;
	}

	return base * power(base, exponent - 1);
}

// find solution using recursion
function findSolution(target) {
	function find(status, history) {
		if (status === target)
			return history;
		else if (status > target)
			return false;
		else
			return find(status + 5, "(" + history + " + 5)") || find(status * 3, "(" + history + " * 3)");
	}

	return find(1, "1");
}

// lpad, good example of some prototypal OOP stuff
String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
}

// farm stuffs
function zeroPad(number, length) {
	number = number.toString();

	while (number.length < length) {
		number = "0" + number;
	}

	return number;
}

function printFarmAnimals(cows, pigs, chickens) {
	console.log(zeroPad(cows, 3) + ' cows');
	console.log(zeroPad(pigs, 3) + ' pigs');
	console.log(zeroPad(chickens, 3) + ' chickens');
}

// Fake Math.min
function min(a, b) {
	if (a > b)
		return b;
	else
		return a;
}

// isEven recursive
function isEven(n) {
	if (n < 0)
		return (n % 2 === 0);
	else if (n === 0)
		return true;
	else if (n === 1)
		return false;

	return isEven(n - 2);
}

// Count character recursive
function countChar(str, char) {
	var count = 0;

	function getCount(idx) {
		if (str.length === idx)
			return;
		else if (str[idx] === char)
			count++;
		getCount(idx + 1);
	}

	getCount(0);
	return count;
}

// Testing usage of arguments in JavaScript
function createEntry(pants) {
	var entry = {
		events: [],
		pants: pants
	};

	for (var i = 1; i < arguments.length; i++)
		entry.events.push(arguments[i]);

	return entry;
}

// Write a function to check whether a given number is an ugly number
// This means it's prime factors only include 2, 3, or 5

// This function checks whether a given number is a prime number
function isPrime(n) {
	var divisor = 2,
		limit = Math.floor(n / 2);

	for (var i = divisor; i < limit; i++) {
		if (n % i === 0)
			return false;
	}

	return true;
}

// This function looks for ugly numbers
var isUgly = function(num) {
	var primeFactors = [2, 3, 5],
		divisor = 7,
		idx = 0;

	if (num < 1)
		return false;
	else if (num === 1)
		return true;

	while (num !== 1) {
		if (num % divisor === 0) {
			return false;
		}
		else if (num % primeFactors[0] === 0 || num % primeFactors[1] === 0 || num % primeFactors[2] === 0) {
				if (num % primeFactors[0] === 0)
					num /= primeFactors[0];
				else if (num % primeFactors[1] === 0)
					num /= primeFactors[1];
				else
					num /= primeFactors[2];
		}
		else {
			divisor += 2;
		}
	}

	return true;
};

// This implementation is A LOT faster than the first one.
var isUglyPro = function(num) {
	if (num <= 0)
		return false;

	while (num % 2 === 0)
		num /= 2;
	while (num % 3 === 0)
		num /= 3;
	while (num % 5 === 0)
		num /= 5;

	return num === 1;
};

// creating sum and range functions
