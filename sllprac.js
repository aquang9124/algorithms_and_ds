var Node = require('./sllnode');

var SLL = ( function() {
	function SLL() {
		this.head;
	}

	SLL.prototype.find = function(value) {
		
		if (this.head.data === value) {
			return this.head;
		}

		var current = this.head.next;

		while (current.next) {
			if (current.next.data === value) {
				return current;
			}

			current = current.next;
		}

		return current;
	};

	SLL.prototype.insert = function(value) {
		if (this.head === undefined) {
			this.head = new Node(value);
		}
		else {
			var current = this.head;
			
			while (current.next !== undefined) {
				current = current.next;
			} 

			current.next = new Node(value);
		}

		return true;
	};

	SLL.prototype.display = function() {
		if (this.head === undefined) {
			return false;
		}

		var current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}

		return true;
	}
	
	return SLL;	
} )();

module.exports = SLL;