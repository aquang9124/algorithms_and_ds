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
	insert: function()
};

module.exports = {
	SinglyLinkedList: SinglyLinkedList,
	ListNode: ListNode
};