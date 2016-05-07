var SLL = ( function() {
	function SLL() {
		this.head;
	}

	SLL.prototype.find = function(value) {
		if (this.head === undefined) {
			return false;
		}
		else if (this.head === value) {
			return this.head;
		}

		var current = this.head.next;

		while (current) {
			if (current === value) {
				return current;
			}
		}

		return false;
	};

	SLL.prototype.insert = function() {
		
	};
	
	return SLL;	
} )();

module.exports = SLL;