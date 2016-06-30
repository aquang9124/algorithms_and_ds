// Implementation of a stack in array form
var Stack = ( function() {
	function Stack() {
		this.dataStore = [];
		this.top = 0;
	}

	Stack.prototype.push = function(item) {
		this.dataStore[this.top] = item;
		this.top++;
	};

	Stack.prototype.pop = function() {
		this.dataStore.splice(this.top, 1);
		this.top--;
	};

	Stack.prototype.display = function() {
		console.log(this.dataStore);
	};

	return Stack;
		
} )();

module.exports = Stack;