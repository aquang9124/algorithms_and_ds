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

// reverse string
var reverseString = function(s) {
    var left = 0,
        right = s.length - 1;
    str = s.split('');
    
    while (left <= right) {
        var temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        
        left++;
        right--;
    }
    
    return str.join('');
};

// remove negatives
function removeNegativity(arr) {
	var numNegatives = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			arr[i - numNegatives] = arr[i];
		} else {
			numNegatives++;
		}
	}

	arr.length -= numNegatives;

	return arr;
}

// merge sort
var mergeSort = function(arr) {
	var left = arr.slice(0, Math.floor(arr.length / 2));
	var right = arr.slice(Math.floor(arr.length / 2));

	if (arr.length < 2) {
		return arr;
	}

	return mergeArrays(mergeSort(left), mergeSort(right));
}

var mergeArrays = function(arr1, arr2) {
	var result = [];

	while (arr1.length && arr2.length) {
		if (arr2[0] >= arr1[0]) {
			result.push(arr1.shift());
		}
		else if (arr1[0] > arr2[0]) {
			result.push(arr2.shift());
		}
	}

	while (arr1.length)
		result.push(arr1.shift());

	while (arr2.length)
		result.push(arr2.shift());

	return result;
};

// quick sort
Array.prototype.quickSwap = function(idx1, idx2) {
	var temp = this[idx1];
	this[idx1] = this[idx2];
	this[idx2] = temp;

	return this;
};

var quickSort = function(arr) {

	var placePivot = function(start, end) {
		if (start >= end) {
			return;
		}

		var mid = start;
		for (var i = start; i < end; i++) {
			if (arr[i] < arr[end]) {
				arr.quickSwap(mid, i);
				mid++;
			}
		}

		arr.quickSwap(mid, end);
		placePivot(start, mid - 1);
		placePivot(mid + 1, end);
	}

	placePivot(0, arr.length - 1);
	return arr;
}
