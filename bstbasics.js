function btNode(value) {
	this.val = value;
	this.left = null;
	this.right = null;
}

btNode.prototype.getMin = function() {
	var current = this;
	while (current.left) {
		current = current.left;
	}
	return current.val;
};

btNode.prototype.getMax = function() {
	var current = this;
	while (current.right) {
		current = current.right;
	}
	return current.val;
};

btNode.prototype.length = function() {
	var left = 0, right = 0;
	if (this.left !== null) {
		left = this.left.length();
	}
	if (this.right !== null) {
		right = this.right.length();
	}

	return 1 + left + right;
};

btNode.prototype.valid = function() {
	var left = true, right = true;
	if (this.left !== null) {
		if (this.left.val > this.val) { return false; }
		left = left && this.left.valid();
	}
	if (this.right !== null) {
		if (this.right.val < this.val) { return false; }
		right = left && this.right.valid();
	}

	return left && right;
}

function bst() {
	this.root = null;

	this.add = function(value) 
	{
		var newNode = new btNode(value);
		var goNext = true;
		
		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		var current = this.root;
		while (goNext) 
		{
			if (current.val < value) {
				if (current.right !== null) {
					current = current.right;
				}
				else {
					current.right = newNode;
					goNext = false;
				}
			}

			if (current.val > value) {
				if (current.left !== null) {
					current = current.left;
				}
				else {
					current.left = newNode;
					goNext = false;
				}
			}
		}
		return this;
	};

	this.contains = function(value, current)
	{
		if (current === undefined) {
			current = this.root;
		}

		if (this.root === null) {
			return false;
		}
		else if (this.root == value) {
			return true;
		}
		if (current.left === null && current.right === null) {
			return false;
		}

		if (current.val == value) {
			return true;
		}
		else if (current.val < value) {
			current = current.right;
		}
		else if (current.val > value) {
			current = current.left;
		}
		
		return this.contains(value, current);
	};

	this.isEmpty = function() {
		if (this.root === null) {
			return true;
		}
		return false;
	};

	this.min = function() {
		var current = this.root;

		if (this.root === null) {
			return false;
		}

		while (current.left) {
			current = current.left;
		}
		return current.val;
	};

	this.max = function(current) {
		if (!current) { current = this.root; }
		if (this.root === null) { return false; }
		if (current.right === null) { return current.val; }

		current = current.right;
		return this.max(current);
	};

	this.size = function() {
		if (this.root === null) { return 0; }
		return this.root.length();
	};

	this.isValid = function() {
		if (this.root === null) { return true; }
		return this.root.valid();
	};
}

var bst1 = new bst();
bst1.add(8).add(2).add(11).add(13).add(5);
console.log(bst1.contains(23));
console.log(bst1.contains(11));
console.log(bst1.contains(2));
console.log(bst1.size());
console.log(bst1.isValid());
console.log(bst1.root.getMin());
console.log(bst1.root.getMax());