'use strict';
// doubly linked list
var DListClass = (
	function() {

		function DoublyLinkedList() {
			this.tail = this.head = null;
			this.length = 0;
		}

		function ListNode(data) {
			this.data = data;
			this.prev = this.next = null;
		}

		DoublyLinkedList.prototype = {
			insert: function(value) {
				var node = new ListNode(value);

				if (this.head === null) {
					this.tail = this.head = node;
				}
				else {
					node.prev = this.tail;
					this.tail.next = node;
					this.tail = node;
				}

				this.length++;
				return this;
			},
			find: function(value) {
				var cNode = this.head;

				if (this.head.data === value) {
					return this.head;
				}
				else if (this.tail.data === value) {
					return this.tail;
				}
				else {
					while (cNode) {
						if (cNode.data === value) {
							return cNode;
						}

						cNode = cNode.next;
					}
				}

				return false;
			},
			display: function() {
				var cNode = this.head;

				while (cNode) {
					console.log(cNode.data);
					cNode = cNode.next;
				}

				return true;
			}
		};

		return {
			DoublyLinkedList: DoublyLinkedList
		};
	}()
);

module.exports = {
	DoublyLinkedList: DListClass.DoublyLinkedList
};