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