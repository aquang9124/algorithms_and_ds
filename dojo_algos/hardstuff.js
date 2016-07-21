'use strict';

// binary search tree
function BTNode(value) {
	this.value = value;
	this.l = this.r = null;
}

function BinarySearchTree() {
	this.root = null;
	this.size = 0;
}

BTNode.prototype = {
	minValue: function() {
		let cNode = this;

		while (cNode.l != null) {
			cNode = cNode.l;
		}

		return cNode;
	},
	maxValue: function() {
		let cNode = this;

		while (cNode.r != null) {
			cNode = cNode.r;
		}

		return cNode;
	}
};

BinarySearchTree.prototype = {
	insert: function(value) {
		let newNode = new BTNode(value);

		if (this.root === null) {
			this.root = newNode;
		}
		else {
			let cNode = this.root;

			while (true) {
				if (cNode.value >= value) {
					if (cNode.l === null) {
						cNode.l = newNode;
						break;
					}
					else {
						cNode = cNode.l;
					}
				}
				else {
					if (cNode.r === null) {
						cNode.r = newNode;
						break;
					}
					else {
						cNode = cNode.r;
					}
				}
			}
		}

		this.size++;
		return this;
	},
	contains: function(value) {
		let cNode = this.root;

		if (cNode === null) {
			console.log('This BST is empty!');
		}
		else {
			while (cNode) {
				if (cNode.value === value) {
					return cNode;
				}
				else if (cNode.value >= value) {
					cNode = cNode.l;
				}
				else {
					cNode = cNode.r;
				}
			}
		}

		return false;
	},
	isEmpty: function() {
		return this.root === null ? true : false;
	},
	getSize: function() {
		return this.size;
	},
	remove: function(value) {
		if (this.isEmpty()) {
			return false;
		}

		let t_node = this.contains(value);
		let p_node = t_node;
		let c_node = p_node;

		if (t_node === false) {
			return false;
		}

		if (t_node.l !== null) {
			while (c_node.l !== null) {
				p_node = c_node;
				c_node = c_node.l;
			}

			t_node.value = c_node.value;
			p_node.l = null;
		}
		else {
			while (c_node.r !== null) {
				p_node = c_node;
				c_node = c_node.r;
			}

			t_node.value = c_node.value;
			p_node.r = null;
		}

		this.size--;
		return this;
	}
};

let bst = new BinarySearchTree();
bst.insert(12).insert(5).insert(6).insert(7);
console.log(bst.getSize());
console.log(bst.remove(6));