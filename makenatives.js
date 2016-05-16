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