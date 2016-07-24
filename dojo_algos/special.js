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

