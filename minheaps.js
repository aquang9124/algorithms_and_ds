// min heap
var minHeap = function() {
	this.storage = [null];
};

minHeap.prototype = {
	peak: function() {
		return this.storage[1];
	},
	size: function() {
		return this.storage.length - 1;
	},
	insert: function(value) {
		this.storage.push(value);
		this.bubbleUp(this.size());
	},
	bubbleUp: function(index) {

	},
	swap: function(indexA, indexB) {
		var temp = this.storage[indexA];
		this.storage[indexA] = this.storage[indexB];
		this.storage[indexB] = temp;
	},
	pop: function() {
		this.swap(1, this.size());
		var result = this.storage.pop();
		this.bubbleDown(1);
	},
	bubbleDown: function(index) {
		
	}
};