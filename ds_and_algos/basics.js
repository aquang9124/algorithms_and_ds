'use strict';

// test of flatten using concat and reduce
function flattenArr(arr) {
	return arr.reduce((init, element) => {
		return init.concat(Array.isArray(element) ? flattenArr(element) : element);
	}, []);
}

// usage of apply
function magicApp(...args) {
	if (Array.isArray(args[0])) {
		magicApp.apply(null, args[0]);
	} else {
		for (var i = 0; i < args.length; i++) {
			console.log(args[i]);
		}
	}
}

// destructuring assignment syntax
function deStruct() {
	return [1, 2, 3, 4];
}

// var a, b, rest;
// [a, b, ...rest] = deStruct();
// console.log(a, b, rest);
// You can grab out values and store them in separate variables
// Or you can even group numerous values in a new array

// making a stack, this uses `this` and prototype methods
// An alternative implementation would be to use var for items
// and implement the methods as non-prototype methods using `this`
function Stack() {
	this.items = [];
}

Stack.prototype = {
	peek: function() {
		return this.items[items.length - 1];
	},
	pop: function() {
		return this.items.pop();
	},
	push: function(element) {
		this.items.push(element);
		return this;
	},
	isEmpty: function() {
		return this.items.length === 0;
	},
	clear: function() {
		this.items = [];
		return true;
	},
	size: function() {
		return this.items.length;
	}
}

var stackA = new Stack();

console.log(stackA.isEmpty());