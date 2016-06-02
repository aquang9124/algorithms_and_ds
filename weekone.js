// Given an array of integers and a target integer, return the two numbers in the array that add up to the target
// Space and time complexity of O(n)
function findPair(arr, x) {
	var pairObj = {};

	for (var i = 0; i < arr.length; i++) {
		var difference = x - arr[i];
		if (pairObj[difference]) {
			return [arr[i], difference];
		}
		else {
			pairObj[arr[i]] = difference; 
		}
	}

	return false;
}

// iife test
( function() {
	var a = b = 5;
		
} )();
// This console logs 5 if you console.log(b) because
// b is not declared with the var keyword and is thus
// a global variable

String.prototype.repeatify = String.prototype.repeatify || function(x) {
	var str = "";
	while (x > 0) {
		str += this;
		x--;
	}

	return str;
};
// Call repeatify on a string to return that string repeated x number of times