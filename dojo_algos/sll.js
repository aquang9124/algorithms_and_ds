'use strict';
// singly linked list implementation
function SinglyLinkedList() {
	this.head = null;
	this.tail = null;
}

function ListNode(data) {
	this.data = data;
	this.next = null;
}

SinglyLinkedList.prototype = {
	find: function(data) {
		if (this.head.data === data) {
			return this.head;
		}
		else if (this.tail.data === data) {
			return this.tail;
		}
		else {
			var current = this.head.next;
			while (current) {
				if (current.data === data) {
					return current;
				}

				current = current.next;
			}
		}

		return -1;
	},
	insert: function(data) {
		var node = new ListNode(data);

		if (this.head === null) {
			this.tail = this.head = node;
		}
		else {
			this.tail.next = node;
			this.tail = this.tail.next;
		}

		return this;
	},
	remove: function(data) {
		if (this.head.data === data) {
			this.head = this.head.next;
		}
		else {
			var current = this.head;
			var after = current.next;

			while (current.next !== null) {

				if (current.next.data === data) {
					if (current.next.data === this.tail.data && current.next.next === null) {
						current.next = null;
						this.tail = current;
						break;
					}
					else {
						current.next = current.next.next;
						break;
					}
				}

				current = current.next;
			}
		}

		return this;
	},
	display: function() {
		var current = this.head;

		while (current.next !== null) {
			console.log(current.data, '->', current.next.data);
			current = current.next;
		}

		console.log(current.data, '->', null);

		return true;
	},
	contains: function(data) {
		var current = this.head;

		if (this.head === null) {
			return false;
		}
		else if (this.head.data === data) {
			return true;
		}
		else {
			while (current) {
				if (current.data === data) {
					return true;
				}

				current = current.next;
			}
		}

		return false;
	}
};

module.exports = {
	SinglyLinkedList: SinglyLinkedList,
	ListNode: ListNode
};