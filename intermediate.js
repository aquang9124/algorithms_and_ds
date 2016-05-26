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

// Check if value is an integer
function isNumber(val) {
	return !isNaN(parseFloat(val)) && isFinite(val);
}

// Get string digits
function getStrDigits(str) {
	str = str.split('');
	var strDigit = '';
	for (var i = 1; i < str.length; i++) {
		if (isNumber(str[i])) {
			strDigit += str[i];
		}
	}

	return strDigit;
}

// Acronyms
var acroStr = "there's no free lunch - gotta pay yer way.";
function acronym(str) {
	str = str.split(' ');
	var acro = '';

	for (var i = 0; i < str.length; i++) {
		acro += str[i][0].toUpperCase();
	}

	return acro;
}

// Remove short strings
function removeShortStrs(arr, len) {
	var shortNum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length >= len) {
			arr[i - shortNum] = arr[i];
		} else {
			shortNum++;
		}
	}

	arr.length = arr.length - shortNum;
	return arr;
}

// parens valid
var parensStr = 'Y(3(p)p(3)r)s';
function parensValid(str) {
	var parensObj = {
		'(': [],
		')': []
	},
	idx = 0;

	str = str.split('');
	for (var i = 0; i < str.length; i++) {
		if (str[i] == '(') {
			parensObj['('].push(i);
		}
		else if (str[i] == ')') {
			parensObj[')'].push(i);
		}
	}

	while (idx < parensObj['('].length && parensObj['('].length == parensObj[')'].length) {
		if (parensObj['('][idx] > parensObj[')'][idx]) {
			return false;
		}

		idx += 1;
	}

	if (parensObj['('].length != parensObj[')'].length) {
		return false;
	}

	return true;
}

// braces valid
var braceStr = 'W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!';
function bracesValid(str) {
	str = str.split('');

	var openArr = [],
		closeArr = [],
		idx = 0;

	for (var i = 0; i < str.length; i++) {
		if (str[i] == '{')
		{
			openArr.push(i);
		}
		else if (str[i] == '}') 
		{
			closeArr.push(i);
		}
	}

	while (idx < openArr.length && openArr.length == closeArr.length) {
		if (openArr[idx] > closeArr[idx]) {
			return false;
		}

		idx++;
	}

	if (openArr.length != closeArr.length) {
		return false;
	}

	return true;
}