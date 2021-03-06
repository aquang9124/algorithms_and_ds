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
			findLast: function(value) {
				var lNode = this.head;
				var rNode = this.tail;

				while (lNode) {
					if (lNode.data === value) {
						if (rNode.data === value) {
							return rNode;
						}
						else {
							if (rNode.prev !== null) {
								rNode = rNode.prev;
							}
							else {
								return lNode;
							}
						}
					}
					else {
						rNode = this.tail;
						lNode = lNode.next;
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
			},
			displayReverse: function() {
				var cNode = this.tail;

				while (cNode) {
					console.log(cNode.data);
					cNode = cNode.prev;
				}

				return true;
			},
			remove: function(value) {
				var cNode = this.head;

				if (this.head.data === value) {
					this.head = this.head.next;
					this.head.prev = null;
				}
				else if (this.tail.data === value) {
					this.tail = this.tail.prev;
					this.tail.next = null;
				}
				else {
					while (cNode) {
						if (cNode.data === value) {
							cNode.prev.next = cNode.next;
							cNode.next.prev = cNode.prev;
							cNode.prev = cNode.next = null;
						}

						cNode = cNode.next;
					}
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