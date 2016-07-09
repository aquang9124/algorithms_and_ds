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