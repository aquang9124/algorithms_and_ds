// basic graph data structure
var Vertex = function(id){
  this.value = id;
  this.edges = {};
}

var Graph = function(){
  this.vertices = {};
  this.totalVertices = 0;
  this.totalEdges = 0;
}

Graph.prototype = {
  addVertex: function(id) {
    if (!this.vertices.hasOwnProperty(id)) {
      var addVert = new Vertex(id);
      this.vertices[id] = addVert;
      this.totalVertices += 1;
    }

    return this;
  },
  getVertex: function(id) {
    if (!this.vertices.hasOwnProperty(id)) {
      throw new Error('Vertex not found in graph.');
    }
    return this.vertices[id];
  },
  removeVertex: function(id) {
  	if (this.vertices.hasOwnProperty(id)) {
  		var cVert = this.vertices[id];
  		for (var edge in cVert.edges) {
  			this.removeEdge(id, edge);
  		}
  		delete this.vertices[id];
  		this.totalVertices -= 1;
  	}
  	else {
  		throw new Error('ID does not exist in graph');
  	}
  },
  addEdge: function(id, id2) {
    if (this.vertices.hasOwnProperty(id) && this.vertices.hasOwnProperty(id2)) {
      if (!this.vertices[id].edges.hasOwnProperty(id2) && !this.vertices[id2].edges.hasOwnProperty(id)) {
        this.vertices[id].edges[id2] = id2;
        this.vertices[id2].edges[id] = id;
        this.totalEdges += 1;
      }
      else {
        throw new Error('Edge already exists between these vertices');
      }
    }
    else {
      throw new Error('One of these two vertices does not exist in the graph');
    }

    return this;
  },
  removeEdge: function(id, id2) {
    if (this.vertices.hasOwnProperty(id) && this.vertices.hasOwnProperty(id2)) {
      if (this.vertices[id].edges.hasOwnProperty(id2) && this.vertices[id2].edges.hasOwnProperty(id)) {
        delete this.vertices[id].edges[id2];
        delete this.vertices[id2].edges[id];
        this.totalEdges -= 1;
      }
      else {
        throw new Error('Edge does not exist');
      }
    }
    else {
      throw new Error('One of these two vertices does not exist in the graph');
    }

    return this;    
  },
  findNeighbors: function(id) {
    var neighbors = [];
    if (this.vertices.hasOwnProperty(id)) {
      var cVert = this.vertices[id];
      for (var edge in cVert.edges) {
        neighbors.push(this.vertices[edge]);
      }

      return neighbors;
    }
    else {
      throw new Error('ID does not exist in graph');
    }
  },
  forEachVertex: function(func) {
    for (var vertex in this.vertices) {
      func(this.vertices[vertex]);
    }
  },
  forEachEdge: function(func) {
    for (var vertex in this.vertices) {
      var cVert = this.vertices[vertex];
      for (var edge in cVert.edges) {
        func(edge);
      }
    }
  }
};

var graphA = new Graph();
graphA.addVertex(5).addVertex(6).addVertex(7).addVertex(8);
console.log(graphA.getVertex(5));
graphA.addEdge(5, 6);
console.log(graphA.getVertex(6));
graphA.removeVertex(8);
console.log(graphA);