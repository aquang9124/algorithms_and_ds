var Node = require('./sllnode');

var SLL = ( function() {
	function SLL() {
		this.head = null;
	}

	SLL.prototype.find = function(value) {

		var current = this.head;

		while (current !== null && current.value !== value) {
			current = current.next;
		}

		return current;
	};

	SLL.prototype.findPrev = function(element) {
		if (this.head.data === element) {
			return false;
		}

		var current = this.head;
		while (current.next) {
			if (current.next.data === element) {
				return current;
			}

			current = current.next;
		}

		return false;
	};

	SLL.prototype.insert = function(value, element) {
		element = element || 0;
		if (this.head === null) {
			this.head = new Node(value);
		}
		else {
			var current = this.head;
			
			if (this.find(element)) {
				current = this.find(element);
				var newNode = new Node(value);
				newNode.next = current.next;
				current.next = newNode;

			} else {
				
				while (current.next) {
					current = current.next;
				} 

				current.next = new Node(value);
			}
			
		}

		return true;
	};

	SLL.prototype.remove = function(element) {
		if (this.head.data === element) {
			this.head = null;
		}

		var current = this.findPrev(element);

		if (current) {
			current.next = current.next.next;
		}

		return false;
	};

	SLL.prototype.display = function() {
		if (this.head === null) {
			return false;
		}

		var current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}

		return true;
	}

	SLL.prototype.nodeCount = function() {
		var current = this.head,
			count = 0;

		while (current) {
			current = current.next;
			count++;
		}

		return count;
	}
	
	return SLL;	
} )();

module.exports = SLL;