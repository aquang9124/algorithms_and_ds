// double trouble, two of each array value while retaining original order
function doubleTrouble(arr) {
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		newArr.push(arr[i]);
		newArr.push(arr[i]);
	}
	arr = newArr;
	return arr;
}

// Arrays to map
function arrToMap(arr, arr2) {
	var map = {};

	for (var i = 0; i < arr.length; i++) {
		map[arr[i]] = arr2[i];
	}

	return map;
}

// invert hash
function invertHash(obj) {
	var newObj = {};
	for (var key in obj) {
		newObj[obj[key]] = key;
	}
	obj = newObj;
	return obj;
}

// Reverse string
function reverseStr(str) {
	str = str.split('');

	var left = 0,
		right = str.length - 1;

	while (left < right) {
		var temp = str[left];

		str[left] = str[right];
		str[right] = temp;

		left++;
		right--;
	}

	return str.join('');
}

// remove blanks
function removeBlanks(str) {
	return str.split(' ').join('');
}
