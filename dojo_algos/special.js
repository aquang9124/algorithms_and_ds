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

bst = new BinarySearchTree();
bst.insert(7).insert(8).insert(2);
console.log(bst);