function listNode(data) {
	this.data = data;
	this.next = null;
}

function singlyLinkedList() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

singlyLinkedList.prototype = {
	append: function(value) {
		var node = new listNode(value);

		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.length += 1;
		return this;
	},
	insert: function(value, target) {
		var node = new listNode(value);
		var current = this.head;
		var added = false;

		if (this.head.data === target) {
			node.next = this.head;
			this.head = node;
			added = true;
		}
		else if (this.tail.data === target) {
			while (current.next !== this.tail) {
				current = current.next;
			}
			node.next = current.next;
			current.next = node;
			added = true;
		} 
		else {
			while (current.next !== null) {
				if (current.next.data === target) {
					node.next = current.next;
					current.next = node;
					added = true;
					break;
				}
				current = current.next;
			}
		}

		if (added === true) {
			this.length += 1;
		}

		return this;
	},
	delete: function(target) {
		var current = this.head;
		var removed = false;
		if (this.head.data === target) {
			this.head = this.head.next;
			removed = true;
		} else {
			while (current.next !== null) {
				if (current.next.data === target) {
					current.next = current.next.next;
					removed = true;
					break;
				}
				current = current.next;
			}
		}

		if (removed === true) {
			this.length -= 1;
		}

		return this;
	},
	contains: function(target) {
		var current = this.head;

		while (current) {
			if (current.value === target) {
				return true;
			}
		}

		return false;
	},
	size: function() {
		return this.length;
	}
};

var sLinkedList = new singlyLinkedList();
sLinkedList.append(5).append(6).append(7);
sLinkedList.insert(8, 6).insert(9, 7).delete(9);
console.log(sLinkedList.size());
console.log(sLinkedList);