function btNode(value) {
	this.val = value;
	this.left = null;
	this.right = null;
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
	}

	this.contains = function(value)
	{
		var current = this.root;
		if (this.root === null) {
			return false;
		}
		else if (this.root == value) {
			return true;
		}

		while (current) 
		{
			if (current.val == value) {
				return true;
			}
			else if (current.val < value) {
				current = current.right;
			}
			else if (current.val > value) {
				current = current.left;
			}
		}
		return false;
	}

	this.isEmpty = function() {
		if (this.root === null) {
			return true;
		}
		return false;
	}
}

var bst1 = new bst();
bst1.add(8).add(2).add(11).add(13).add(5);
console.log(bst1);
console.log(bst1.contains(23));
console.log(bst1.contains(11));
console.log(bst1.isEmpty());