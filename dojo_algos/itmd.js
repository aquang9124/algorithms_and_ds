function TreeNode(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinaryTree() {
	this.root = null;
}

var maxDepth = function(root) {
    var leftCount = 0,
        rightCount = 0;
    if (root === null)
    {
        return 0;
    }
    while (root.left) {
        leftCount++;
    }
    while (root.right) {
        rightCount++;
    }
    
    return Math.max(leftCount, rightCount) + 1;
};

bt = new BinaryTree();

// quick sort
function quickSort(arr) {

	var placePivot = function(start, end) {
		if (start >= end) {
			return;
		}

		var right = start;
		var temp;

		for (var i = start; i < end; i++) {
			if (arr[i] < arr[end]) {
				temp = arr[i];
				arr[i] = arr[right];
				arr[right] = temp;
				right++;
			}
		}

		temp = arr[right];
		arr[right] = arr[end];
		arr[end] = temp;

		placePivot(start, right - 1);
		placePivot(right + 1, end);
	}

	placePivot(0, arr.length - 1);
	return arr;
}

function quicklySort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var pivIdx = Math.floor(arr.length / 2),
		pivot = arr[pivIdx],
		before = [],
		after = [];

	for (var i = 0; i < arr.length; i++) {
		if (i !== pivIdx) {
			if (arr[i] <= pivot) {
				before.push(arr[i]);
			}
			else {
				after.push(arr[i]);
			}
		}
	}

	return quicklySort(before).concat(pivot).concat(quicklySort(after));
}

// take input of an array and a num and return new array containining sub-arrays
// of size num using the values of the input array. Only create as many 
// sub-arrays as the input array allows for.
function createSubArrays(arr, num) {
	if (num <= 0) {
		return [];
	}

	var result = [],
		tempArr = [];

	for (var i = 0; i < arr.length; i++) {
		if (tempArr.length === num) {
			result.push(tempArr);
			tempArr = [];
		}
		tempArr.push(arr[i]);
	}

	if (tempArr.length > 0) {
		result.push(tempArr);
	}

	return result;
}

// recursive binary search
function rBSearch(arr, target, mid, min, max) {
	mid = mid || Math.floor(arr.length / 2);
	min = min || 0;
	max = max || arr.length - 1;

	if (arr[mid] === target) {
		return mid;
	}
	else if (arr[mid] < target) {
		min = mid + 1;
	}
	else if (arr[mid] > target) {
		max = mid - 1;
	}

	mid = Math.floor((max + min) / 2);
	return rBSearch(arr, target, mid, min, max);
}

// recursively flatten an array of sub arrays
function flatten(arr) {
	var result = [];

	function makeFlat(element) {
		if (!Array.isArray(element)) {
			result.push(element);
		}
		else {
			for (var i = 0; i < element.length; i++) {
				makeFlat(element[i]);
			}
		}
	}

	makeFlat(arr);
	return result;
}

// [1, 2, 3, 4], 3 = [[1, 2, 3], [4]]
function randomFunc(arr, num) {
	if (num <= 0) {
		return [];
	}

	var result = [];
	var tempArr = [];

	for (var i = 0; i < arr.length; i++) {
		if (tempArr.length === num) {
			result.push(tempArr);
			tempArr = [];
		}
		tempArr.push(arr[i]);
	}

	if (tempArr.length > 0) {
		result.push(tempArr);
	}

	return result;
}

// loop through arguments and print each one
function argumentLoop(...args) {
	if (Array.isArray(args[0])) {
		argumentLoop.apply(null, args[0]);
		return;
	}
	for (var i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
}

// get all variations of string
function getSets(str) {
	var results = [];

	function makeSets(char, depth) {
		if (depth === str.length) {
			results.push(char);
			return;
		}
		// left side
		makeSets(char, depth + 1);
		// right side
		makeSets(char + str[depth], depth + 1);
	}

	makeSets('', 0);

	return results;
}

// happy number
function isHappy(num) {
	
	while (Math.pow(num, 2) >= 10) {
		var rem = Math.floor(num / 10);
		if (rem < 10) {
			num = Math.pow(rem, 2) + Math.pow(num % 10, 2);
		}
		else {
			num = rem + Math.pow(num % 10, 2);
		}
	}

	if (num === 1) {
		return true;
	}

	return false;
}

// multiply by 3, 5, or add 1 to reach target number
function getToNum(num) {
	var count = 0;

	function makeCalculations(start) {
		if (start === num) {
			count++;
			return;
		}
		else if (start > num) {
			return;
		}
		// add one
		makeCalculations(start + 1);
		// multiply by 3
		makeCalculations(start * 3);
		// multiply by 5
		makeCalculations(start * 5);
	}

	makeCalculations(1);
	return count;
}

// Different implementation using pure recursion
function getToTarget(num, rootNum) {
	rootNum = rootNum || 1;

	if (rootNum === num) {
		return 1;
	}
	else if (rootNum > num) {
		return 0;
	}

	return getToTarget(num, rootNum + 1) + getToTarget(num, rootNum * 3) + getToTarget(num, rootNum * 5);
}

// linked list stuff
function ListNode(value) {
	this.value = value;
	this.next = null;
}

function SinglyLinkedList() {
	this.head = this.tail = null;
}

SinglyLinkedList.prototype = {
	insert: function(value) {
		var newNode = new ListNode(value);

		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		return this;
	},
	average: function() {
		if (this.head === null) {
			return 0;
		}
		else {
			var count = 0,
				avg = this.head.value,
				current = this.head;

			while (current) {
				count++;
				avg += current.value;
				current = current.next;
			}
			avg /= count;
			return avg;
		}
	}
};

// bubble sort
function bubbleSort(arr) {
	var swapped = true,
		limit = 1;

	while (swapped) {
		swapped = false;
		for (var i = 0; i < arr.length - limit; i++) {
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	}

	return arr;
}