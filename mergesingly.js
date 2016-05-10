var Node = require('./sllnode');
var singlyLinkedList = require('./sllprac');

var sll = new singlyLinkedList();
sll.insert(6);
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);

function mergeSortLinkedList(sll) {
	if (sll.nodeCount < 2) {
		return sll;
	}

	var left = new singlyLinkedList(),
		right = new singlyLinkedList(),
		current = sll.head.next,
		pivot = sll.head,
		leftCurr = left.head,
		rightCurr = right.head;

	while (current !== null) {
		if (pivot.data > current.data) {
			if (left.head === null) {
				left.head = new Node(current.data);
				current.next = current.next.next;
				leftCurr = left.head;
			} else {
				leftCurr.next = new Node(current.data);
				leftCurr = leftCurr.next;
				if (current.next !== null) {
					current.next = current.next.next;
				}
				
			}
		}

		if (pivot.data < current.data) {
			if (right.head === null) {
				right.head = new Node(current.data);
				current.next = current.next.next;
				rightCurr = right.head;
			} else {
				rightCurr.next = new Node(current.data);
				rightCurr = rightCurr.next;
				if (current.next !== null) {
					current.next = current.next.next;
				}
			}
		}
		
		current = current.next;
	}

	return left;
}

function mergeLinkedLists(left, right) {
	return false;
}

var answer = mergeSortLinkedList(sll);
answer.display();
