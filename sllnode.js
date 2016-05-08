var Node = ( function() {
	function Node(value) {
		this.data = value;
		this.next = null;
	}
	
	return Node;
} )();

module.exports = Node;