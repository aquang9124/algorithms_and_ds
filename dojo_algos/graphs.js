'use strict';
// graph data structure
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
	this.nodeList = [];
};

Graph.prototype = {
	addEdge: function(start, end) {
		let first = this.nodeList.indexOf(start);
		let second = this.nodeList.indexOf(end);

		if (first !== -1) {
			let i = this.nodeList.length;

			while (i--) {
				if (this.nodeList[i].name === start) {
					this.nodeList[i].addEdge(end);
					break;
				}
			}
		}

		if (second !== -1) {
			let i = this.nodeList.length;

			while (i--) {
				if (this.nodeList[i].name === end) {
					this.nodeList[i].addEdge(start);
					break;
				}
			}
		}

		if (first === -1 || second === -1) {
			if (first === -1) {
				let node = new Node(start);
				node.addEdge(end);
				this.nodeList.push(node);
			}

			if (second === -1) {
				let node = new Node(end);
				node.addEdge(start);
				this.nodeList.push(node);
			}
		}
	},
	printNodes: function() {
		for (let i = 0; i < this.nodeList.length; i++) {
			console.log(`${this.nodeList[i].name}: ${this.nodeList[i].edgeList}`);
		}
	}
};

let graph = new Graph();
graph.addEdge('start', 'end');
graph.addEdge("start","finish");  
graph.addEdge("here","there");  
graph.addEdge("up","down");  
graph.printNodes();