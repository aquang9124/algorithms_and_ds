// linked list
function ListNode(val) {
	this.val = val;
	this.next = null;
}

function SinglyLinkedList() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

SinglyLinkedList.prototype = {
	insert: function(val) {
		var newNode = new ListNode(val);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	},
	dedupe: function() {
		if (this.head === null) {
			console.log('The list is empty!');
		}
		else {
			var current = this.head;
			while (current !== null) {
				if (current.next !== null && current.val === current.next.val) {
					current.next = current.next.next;
					this.length--;
				}
				else {
					current = current.next;
				}
			}
		}

		return this;
	}
}

// climbing stairs, a less expensive version
var climbStairs = function(n) {
    if (n === 0) {
    	return 1;
    }
    else if (n < 0) {
    	return 0;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);
};

function memoize(fn) {
	var memo = {};

	return function(n) {
		if (!memo.hasOwnProperty(n)) {
			memo[n] = fn(n);
		}
		
		return memo[n];
	}
}

// remove duplicates from sorted array in linear time using constant memory
var removeDuplicates = function(nums) {
    var numDupes = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[i - numDupes] = nums[i];
        }
        else {
            numDupes++;
        }
    }
    
    nums.length -= numDupes;
    return nums.length;
};

console.log(removeDuplicates([1, 1, 2, 2]));