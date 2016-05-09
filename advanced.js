// Given two arrays make an object with the first array being the keys
function makeObj(arr1, arr2) {
	var obj = {};

	for (var i = 0; i < arr1.length; i++) {
		obj[arr1[i]] = arr2[i];
	}

	return obj;
}

// Here's a different implementation that creates 'rows' and 'columns'
var columns = ['Street', 'City', 'State'],
	rows = [['123 North Mac St', 'Aspire', 'CA'], ['456 South Acer St', 'Freeruns', 'WA'], ['342 Apple Drive', 'Soda', 'NY']];
function formObj(arr1, arr2) {
	var objArr = [],
		idx = 0;

	while (idx < arr2.length) {
		var obj = {};
		for (var i = 0; i < arr1.length; i++) {
			obj[arr1[i]] = arr2[idx][i];
		}
		objArr.push(obj);
		idx++;
	}

	return objArr;
}

// Function to check if number or NaN, this is the jQuery implementation of isNumeric
function isNumeric(obj) {
	return !Array.isArray(obj) && (obj - parseFloat(obj) + 1) >= 0;
}

// Given a string, find all the numbers in the string and return their sum
function stringToN(str) {
	var split = str.split(""),
		sum = 0;

	for (var i = 0; i < split.length; i++) {
		if (isNumeric(split[i])) {
			var num = parseInt(split[i]);
			sum += num;
		}
	}

	return sum;
}

// Function to calculate the sum of a number's digits until it becomes a one digit number
function sum2One(num) {
	var sum = 0;

	while (num > 0) {
		sum += num % 10;
		num = Math.floor(num/10);
	}

	return sum;
}

// An attempt at implementing Javascript's Split function
// This implementation takes two inputs, the separator and
// the string to be split.
function splitPro(separator, str) {
	var arr = [],
		container = "";

	if (separator === "") {
		for (var i = 0; i < str.length; i++) {
			arr.push(str[i]);
		}

		return arr;
	}

	for (var j = 0; j < str.length; j++) {
		if (str[j] === separator) {
			arr.push(container);
			container = "";
			continue;
		}

		container += str[j];
	}
	
	arr.push(container);
	return arr;

}