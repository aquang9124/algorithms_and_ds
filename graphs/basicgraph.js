// basic graph data structure
var Node = function(name) {
	this.edgeList = [];
	this.name = name;
};

Node.prototype = {
	addEdge: function(end) {
		this.edgeList.push(end);
	}
};

var Graph = function() {
	this.vertices = [];
	this.edges = [];
	this.numEdges = 0;
};