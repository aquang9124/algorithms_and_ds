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

// using bind
function plus(a, b) {
	return a + b;
}

// var plusTen = plus.bind(null, 10);
// console.log(plusTen(20));

// Bind allows for partial function application
// A new function is created that called plus
// with the parameter `a` always set to 10

// in es6 you can just use default parameters
function add(a, b=10) {
	return a + b;
}

// console.log(add(5));
// Still, bind could have its uses

// human defined using es6 classes
class Human {
	constructor(name, age, color) {
		this.name = name;
		this.age = age;
		this.color = color;
		this.hobbies = [];
	}

	isSexy() {
		let randomInt = Math.floor(Math.random() * 10);
		if (randomInt >= 7) {
			return true;
		}
		else {
			return false;
		}
	}

	makeGreetFn() {
		return (greeting, punct="!") => {
			if (greeting === undefined) {
				throw new Error("Wth man, give me an input for greeting!");
			}
			else {
				let timesHumanSpoke = 1;
				console.log(`${this.name} says ${greeting}${punct}`);
				
				return (more, ...args) => {
					
					if (more) {
						console.log(`${this.name} has more to say!`);
						args.forEach((words) => {
							timesHumanSpoke++;
							console.log(`${this.name} says ${words}${punct}`);
						});
					}
					else {
						console.log(`${this.name} is done speaking to you.`);
					}

					return timesHumanSpoke;
				}
			}
		};
	}

	addHobbies(...args) {
		this.hobbies = [...args];
	}

	showHobbies() {
		this.hobbies.forEach((hobby) => {
			console.log(`${this.name} likes ${hobby}!`);
		});
	}
}

// just having some fun with default args
function createPerson (
	{
		name = 'Xuan',
		age = 25,
		color = 'Blue'
	} = {})
{
	let person = new Human(name, age, color);
	return person;
}

function printToN(n) {
	for (var i = 0; i < n; i++) {
		// create closure 
		(function() {
			// each closure will capture a different value for i
			// which is held by the variable j
			var j = i;
			setTimeout(function() {
				// because of this each setTimeout function call will have its own i
				console.log(j);
			}, 300);
		}());
	}
}

// double linear
function dblLinear(n) {
	let set = [1];
	let idx = 0;
	let nums = {};

	while (idx < n) {
		let x = 2 * set[idx] + 1;
		let y = 3 * set[idx] + 1;

		if (idx > 0) {
			let canPushBoth = true;
			if (nums.hasOwnProperty(x)) {
				canPushBoth = false;
			}

			if (canPushBoth) {
				set.push(x, y);
				let xIdx = set.length - 2;

				while (set[xIdx - 1] > set[xIdx]) {
					let temp = set[xIdx];
					set[xIdx] = set[xIdx - 1];
					set[xIdx - 1] = temp;
					xIdx--;
				}
			}
			else {
				set.push(y);
			}
		}
		else {
			set.push(x, y);
		}

		idx++;
		nums[x] = nums[y] = true;
	}

	return set[n];
}

// bubble sort
function bubSort(arr) {
	let limit = 1;
	let swap = true;

	while (swap) {
		swap = false;

		for (let j = 0; j < arr.length - limit; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swap = true;
			}
		}

		limit += 1;
	}

	return arr;
}

function genRandArr(n) {
	let result = [];

	for (let i = 0; i < n; i++) {
		let randInt = Math.floor(Math.random() * 1000);
		result.push(randInt);
	}

	return result;
}

let randomList = genRandArr(30);

// insertion sort
function insertSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			for (let j = i; j > 0; j--) {
				if (arr[j - 1] > arr[j]) {
					let temp = arr[j - 1];
					arr[j - 1] = arr[j];
					arr[j] = temp;
				}
			}
		}
	}

	return arr;
}

// selection sort
function selectSort(arr) {
	let mIdx = 0;
	let min = arr[0];

	for (let i = 0; i < arr.length; i++) {
		min = arr[i];
		mIdx = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < min) {
				min = arr[j];
				mIdx = j;
			}
		}

		let temp = arr[i];
		arr[i] = arr[mIdx];
		arr[mIdx] = temp;
	}

	return arr;
}

// remove negatives from array
function removeNegatives(arr) {
	let nCount = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			arr[i - nCount] = arr[i]; 
		}
		else {
			nCount++;
		}
	}

	arr.length = arr.length - nCount;

	return arr;
}

// series sum
function seriesSum(n) {
	let result = 0;
	let accumulator = 0;
	let denom = 4;
	
	if (n < 1) {
		return accumulator.toFixed(2);
	}
	else if (n >= 1) {
		result += 1;
	}

	for (let i = 1; i < n; i++) {
		accumulator += 1 / denom;
		denom += 3;
	}

	result += accumulator;
	return result.toFixed(2);
}

// better series sum
function cleverSum(n) {
	for (var s = 0, i = 0; i < n; i++) {
		s += 1 / (1 + i * 3);
	}

	return s.toFixed(2);
}

// jaden casing
String.prototype.toJadenCase = function() {
	if (this.trim() === "") {
		return false;
	}

	let s = this.split(' ');

	for (let i = 0; i < s.length; i++) {
		let word = s[i].split('');
		word[0] = word[0].toUpperCase();
		s[i] = word.join('');
	}

	return s.join(' ');
};

// more functional implementation of jaden casing
String.prototype.toJaden = function() {
	let s = this.split(' ');

	s = s.map(function(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});

	return s.join(' ');
};