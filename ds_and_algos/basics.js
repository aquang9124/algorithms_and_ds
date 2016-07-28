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
	let results = [1];
	let idx = 0;
	let mostRecent = 0;

	while (idx < n) {
		let x = 2 * results[idx] + 1;
		let y = 3 * results[idx] + 1;
		
		if (idx > 0) {
			// before push set mostRecent to index of last element in array
			mostRecent = results.length - 1;
			results.push(x, y);

			for (let i = mostRecent + 1; i >= 0; i--) {
				
				if (results[i - 1] > results[i]) {
					let temp = results[i - 1];
					results[i - 1] = results[i]
					results[i] = temp;
				}
				else if (results[i - 1] === results[i]) {
					results.splice(i, 1);
					break;
				}
				else {
					break;
				}
			}
		}
		else {
			results.push(x, y);
		}

		idx++;

	}
	
	return results[n];
}

console.log([1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27]);
console.log(dblLinear(20));