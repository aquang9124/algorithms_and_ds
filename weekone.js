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

// 'this' changes what its referencing based upon the context in which it is being used
// When used inside of a closure, 'this' will be undefined. It can also be coerced to reference
// the global window object if not in strict mode
var myObject = {
	foo: 'bar',
	func: function() {
		var self = this;
		console.log('Outer func: this.foo ' + this.foo);
		console.log('Outer func: self.foo ' + self.foo);
		( function() {
			console.log('Inner func: this.foo ' + this.foo);
			console.log('Inner func: self.foo ' + self.foo);
				
		} )();

	}
};

function isIntegerBasic(x) {
	return (x^0) === x;
}

function isIntegerPro(x) {
	return !isNaN(x) && isFinite(x);
}

