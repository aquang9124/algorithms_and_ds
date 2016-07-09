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

		while (current) {
			console.log(current.data);
			current = current.next;
		}

		return true;
	}
};

module.exports = {
	SinglyLinkedList: SinglyLinkedList,
	ListNode: ListNode
};