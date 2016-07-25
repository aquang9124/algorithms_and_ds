// binary search tree implemented using es6 classes, plus some fun experiments.
// Not for practical reasons, just some fun things.
class BTNode {
	constructor(data) {
		this._data = {
			data: data,
			left: null,
			right: null
		};
	}

	get(prop) {
		return this._data[prop];
	}
	set(prop, newData) {
		this._data[prop] = newData;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		let node = new BTNode(data);
		if (this.root === null) {
			this.root = node;
		}
		else {
			let cNode = this.root;

			while (true) {
				if (cNode.get('data') >= data) {
					if (cNode.get('left') === null) {
						cNode.set('left', node);
						break;
					}
					else {
						cNode = cNode.get('left');
					}
				}
				else {
					if (cNode.get('right') === null) {
						cNode.set('right', node);
						break;
					}
					else {
						cNode = cNode.get('right');
					}
				}
			}
		}
		return this;
	}
}

// stack data structure 
class Stack {
	constructor() {
		this.items = [];
	}

	push(item, ...args) {
		return this.items.push(item, ...args);
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		let end = this.items.length - 1;
		return this.items[end];
	}
}

// queue data structure
class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(item) {
		this.items.unshift(item);
		return this;
	}

	dequeue() {
		return this.items.pop();
	}
}

// count 8 recursively, double the value if the next value is an 8
function countEight(n) {
	let count = 0;

	function countIt(num) {
		cNum = num % 10;
		rem = Math.floor(num / 10);
		leftOfCNum = rem % 10;

		if (num < 10) {
			if (num === 8) {
				count++;
			}
			return;
		}

		if (leftOfCNum === 8 && cNum === 8) {
			count += 2;
		}
		else if (cNum === 8) {
			count++;
		}

		countIt(Math.floor(num / 10));
	}

	countIt(n);
	return count;
}

// given length n return an array of strings from "0", "1", "2" and so on
function createStringArr(n) {
	let result = [];
	for (let i = 0; i < n; i++) {
		result.push(i.toString());
	}

	return result;
}

// given input of start and end, return a new array containing a sequence of ints up to
// but not including end
function fizzArr(start, end) {
	let result = [];
	for (let i = start; i < end; i++) {
		result.push(i);
	}

	return result;
}

// return true if at any point an array has three consecutive numbers
function tripleUp(arr) {
	let countAdj = 1;
	for (let i = 0; i < arr.length; i++) {
		let nextNum = arr[i + 1];
		if (countAdj === 3) {
			return true;
		}
		else if (arr[i] === nextNum - 1) {
			countAdj += 1;
		}
		else {
			countAdj = 1;
		}
	}

	return false;
}