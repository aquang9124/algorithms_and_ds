// Attempt at implementing the String.prototype.slice() function from JS
var str = "Hello world!";
// Function implementation
function slice2(str, start, end) {
	end = end || str.length - 1;
	var extract = "";

	for (var i = start; i <= end; i++) {
		extract += str[i];
	}

	return extract;
}

// Attempt at implementing the String.prototype.search() method from JS
function search2(str, target) {
	var tempArr = [];
	var word = "";

	for (var i = 0; i < str.length; i++) {
		if (str[i].toUpperCase() !== str[i].toLowerCase()) {
			word += str[i];
		} 
		else if (target === word) {
			tempArr.push(word);
		}
		else {
			word = "";
			continue;
		}
	}

	if (tempArr.length > 0) {
		return tempArr;
	}
	
	return false;
}

// Attempt at implementing the String.prototype.substr() method from JS
String.prototype.subStr2 = function (start, length) {
	var extract = "";

	if (length === 0) {
		return extract;
	}

	length = length || this.length - 1;

	for (var i = start; i <= length; i++) {
		extract += this[i];
	}

	return extract;
}

// BracesValid function. Checks to make sure every opening brace is properly closed, returns false if otherwise.
var braceStr = "({[{}]{abc})}";

function bracesValid(str) {
	var openIdx = [],
		closeIdx = [];

	for (var i = 0; i < str.length; i++) {
		if (str[i] == "{") {
			openIdx.push(i);
		}

		if (str[i] == "}") {
			closeIdx.push(i);
		}
	}

	if (closeIdx.length !== openIdx.length) 
	{
		return false;
	} 
	else 
	{
		for (var j = 0; j < openIdx.length; j++) {
			if (closeIdx[j] < openIdx[j]) {
				return false;
			}
		}
		return true;
	}
}

// Simple function to add two strings together in form of abba
function combineABBA(a, b) {
	return a + b + b + a;
}

// Given a string, return a string with only unique characters
var testStr = "Mississippi";
// Function implementation
function retUniques(str) {
	var uniques = {},
		newStr = "";

	for (var i = 0; i < str.length; i++) {
		uniques[str[i]] = 1;
	}

	for (x in uniques) {
		newStr += x;
	}

	return newStr;
}

// String explosion
function stringExplode(str) {
	var word = str[0],
		strArr = [],
		idx = 0;

	while (idx <= str.length) {
		if (idx > 0) {
			for (var i = 1; i < idx; i++) {
				word += str[i];
			}
			strArr.push(word);
			word = str[0];
		}

		idx++;
	}

	str = "";

	for (var j = 0; j < strArr.length; j++) {
		str += strArr[j];
	}

	return str;
}

// Given an array, if one of the first 4 elements in the array is a 9 return true
// The array may have a length less than 4
function frontNines(arr) {

	for (var i = 0; i < arr.length; i++) {
		if (i === 3 && arr[i] !== 9) {
			return false;
		}

		if (arr[i] === 9) {
			return true;
		}
	}

	return false;
}

// Given a string return the index of the first unique character.
// Ex. Given 'google', return 4.
function uniqueIdx(str) {
	var arr = str.split(''),
		obj = {};

	// This first for loop creates the obj that will keep a count of all the letters in the string
	for (var i = 0; i < arr.length; i++) {
		obj[arr[i]] = {
			letter: arr[i],
			count: 0
		};
	}

	// This second for loop goes through the string and sets the count of the obj to be the number of times
	// that character appeared in the string
	for (var j = 0; j < arr.length; j++) {
		if (obj[arr[j]].letter == arr[j]) {
			obj[arr[j]].count += 1;
		}
	}

	// This final for loop will find the first unique character and return its index
	for (var k = 0; k < arr.length; k++) {
		if (arr[k] == obj[arr[k]].letter && obj[arr[k]].count < 2) {
			return k;
		}
	}

	return false;
}

// Alternative implementation for uniqueIdx function
function getFirstUnique(string) {
	str = string.split("");
	var seen = [];

	while (str.length !== 0) {
		var element = str[0];
		str.shift();

		if (str.indexOf(element) == -1 && seen.indexOf(element) == -1) {
			return string.indexOf(element);
		}

		seen.push(element);
	}

	return false;
}

// Given a string, like so '1?00?101', return an array of all possible patterns.
var qStr = '1?00?101';
// Helper function
function randInt(n) {
	return Math.round(Math.random()*n);
}

// Function implementation
function binaryStr(string) {
		strArr = [],
		obj = {},
		pushable = true,
		idx = 0;
	
	while (idx < 10) {
		var str2 = "";
		var str = string.split('');
		for (var i = 0; i < str.length; i++) {
			if (str[i] == "?") {
				str[i] = randInt(1);
			}
		}

		str2 = str.join("");
		
		strArr.push(str2);
		
		idx++;
	}

	for (var j = 0; j < strArr.length; j++) {
		obj[strArr[j]] = 0;
	}

	strArr = Object.keys(obj);
	
	return strArr;
}

console.log(binaryStr(qStr));