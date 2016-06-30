var Queue = ( function() {
	function Queue() {
		this.data = [];
		this.back = 0;
	}

	Queue.prototype.enqueue = function(item) {
		this.data[this.back] = item;
		this.back++;
	};

	Queue.prototype.dequeue = function() {
		var output = this.data[0];
		for (var i = 1; i < this.back; i++) {
			this.data[i- 1] = this.data[i];
		}
		this.back--;
		return output;
	};

	Queue.prototype.display = function() {
		for (var i = 0; i < this.back; i++) {
			console.log(this.data[i]);
		}
	};

	return Queue;
		
} )();

module.exports = Queue;