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
	},
	partition: function(value) {
		var beforeVal = new SinglyLinkedList();
		var afterVal = new SinglyLinkedList();
		var p1 = this.head;

		while (p1) {
			if (p1.value < value) {
				beforeVal.insert(p1.value);
			}
			else if (p1.value >= value) {
				afterVal.insert(p1.value);
			} 

			p1 = p1.next;
		}

		// merge before and after linked lists
		var p2 = beforeVal.head;
		while (p2.next) {
			p2 = p2.next;
		}

		p2.next = afterVal.head;
		beforeVal.tail = afterVal.tail;
		return beforeVal;
	},
	splitOnValue: function(value) {
		var p1 = this.head;
		while (p1.next) {
			if (p1.next.value === value) {
				var temp = p1.next;
				p1.next = null;
				return temp;
			}

			p1 = p1.next;
		}

		return false;
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

// insertion sort
function insertionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			for (var j = i; j > 0; j--) {
				if (arr[j] < arr[j - 1]) {
					var temp = arr[j];
					arr[j] = arr[j - 1];
					arr[j - 1] = temp;
				}
			}
		}
	}

	return arr;
}

// selection sort
function selectionSort(arr) {
	var sorted = 0,
		minIdx = 0,
		min = arr[0];

	for (var i = 0; i < arr.length; i++) {
		for (var j = sorted; j < arr.length; j++) {
			if (arr[j] < min) {
				min = arr[j];
				minIdx = j;
			}
		}
		var temp = arr[sorted];
		arr[sorted] = arr[minIdx];
		arr[minIdx] = temp;

		sorted++;
		min = arr[sorted];
		minIdx = sorted;
	}

	return arr;
}

function swap(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;

	return arr;
}

// permutations with backtracking
function permute(alphabets, start, end) {
	start = start || 0;
	end = end || alphabets.length - 1;

	if (start === end) {
		console.log(alphabets.join(''));
	}
	else {
		for (var i = start; i <= end; i++) {
			swap(alphabets, start, i);
			permute(alphabets, start + 1, end);
			swap(alphabets, i, start); // backtrack

		}
	}
}

// get performance for a sort
function getPerformanceSorts(fn, arr) {
	var init = new Date().getTime();

	fn(arr);

	return (new Date().getTime() - init).toFixed(3);
}

// generate an array with 100000 values
function generateHugeArray() {
	var result = [];
	var randInt = 0;
	for (var i = 0; i < 10000; i++) {
		randInt = Math.floor(Math.random()*1000);
		result.push(randInt);
	}

	return result;
}

// counting sort implementation, not that great
// will refactor later
function countingSort(arr, min, max) {
	var counts = [],
		z = 0;

	for (var i = min; i <= max; i++) {
		counts[i] = 0;
	}

	for (i = 0; i < arr.length; i++) {
		counts[arr[i]]++;
	}

	for (i = min; i <= max; i++) {
		while (counts[i]-- > 0) {
			arr[z++] = i;
		}
	}

	return arr;
}

// parentheses valid
function parensValid(str) {
	var parensOpen = [],
		parensClose = [];

	for (var i = 0; i < str.length; i++) {
		if (str[i] === "(") {
			parensOpen.push(i);
		}
		else if (str[i] === ")") {
			parensClose.push(i);
		}
	}

	if (parensOpen.length === parensClose.length) {
		for (var j = 0; j < parensOpen.length; j++) {
			if (parensOpen[j] > parensClose[j]) {
				return false;
			}
		}
		return true;
	}
	
	return false;
}

// lattice paths pure recursion
function pureLattice(x, y) {
	if (x === 0 && y === 0) {
		return 1;
	}
	else if (x < 0 || y < 0) {
		return 0;
	}

	return pureLattice(x - 1, y) + pureLattice(x, y - 1);
}

// memoized lattice paths
function magicLattice(n) {
	var memo = {};

	function latticePaths(x, y) {
		var key = x + ", " + y;

		if (memo.hasOwnProperty(key)) {
			return memo[key];
		}
		else if (x === 0 && y === 0) {
			return 1;
		}
		else if (x < 0 || y < 0) {
			return 0;
		}
		else {
			return memo[key] = latticePaths(x - 1, y) + latticePaths(x, y - 1);
		}
		
	}

	return latticePaths(n, n);
}

// bucket sort
var insertSort = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		var temp = arr[i];
		var pointer = i;

		while (pointer > 0 && temp < arr[pointer - 1]) {
			arr[pointer] = arr[pointer - 1];
			pointer--;
		}

		arr[pointer] = temp;
	}

	return arr;
};

var bucketSort = function(arr) {

	var placeIntoBuckets = function(input, lowerRange, upperRange) {
		var buckets = [[], [], [], [], [], [], [], [], [], []],
			division = (upperRange - lowerRange) / 10;

		input.forEach(function(value) {
			buckets[Math.floor(value / division)].push(value);
		});

		for (var i = 0; i < buckets.length; i++) {
			if (buckets[i].length > 1) {
				buckets[i] = insertSort(buckets[i]);
			}
		}

		var result = [];

		buckets.forEach(function(bucket) {
			if (bucket.length > 0) {
				result = result.concat(bucket);
			}
		});

		return result;
	}

	return placeIntoBuckets(arr, 0, 1000);
};

// find kth smallest element in range
// 1000 - 9000 is the range for this implementation
function kthSmallest(arr, k) {
	if (k > arr.length) {
		console.log('K out of range');
		return;
	}

	var result;
	k--;

	function delve(input, start, end) {
		var pivIdx = Math.floor(input.length / 2);
		var pivot = input[pivIdx];
		var before = [];
		var after = [];

		input.forEach(function(element, index) {
			if (index !== pivIdx) {
				if (element < pivot) {
					before.push(element);
				}
				else if (element >= pivot) {
					after.push(element);
				}
			}
		});

		if (start + before.length === k) {
			result = pivot;
		}
		else if (start + before.length > k) {
			delve(before, start, start + before.length - 1);
		}
		else if (start + before.length < k) {
			delve(after, start + before.length + 1, end);
		}
	}

	delve(arr, 0, arr.length - 1);
	return result;
}

// array average
function getAverage(arr) {
	var result = 0;

	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
	}

	return result /= arr.length;
}

// balance point
function balancePoint(arr) {
	var leftSum = 0,
		rightSum = 0;

	for (var i = 0; i < arr.length; i++) {
		leftSum += arr[i];

		for (var j = i + 1; j < arr.length; j++) {
			rightSum += arr[j];
		}

		if (leftSum === rightSum) {
			return true;
		}
		else {
			rightSum = 0;
		}
	}

	return false;
}

// balance index
function balanceIndex(arr) {
	var p1 = 0,
		p2 = 0;

	for (var i = 1; i < arr.length - 1; i++) {
		p1 = i - 1;
		p2 = i + 1;

		var leftSum = 0;
		var rightSum = 0;

		while (p1 >= 0) {
			leftSum += arr[p1];
			p1--;
		}

		while (p2 < arr.length) {
			rightSum += arr[p2];
			p2++;
		}

		if (leftSum === rightSum) {
			return i;
		}
	}

	return -1;
}

// flatten an array and keep it stable
function getFlat(arr) {
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

function magicFlatten(arr) {
	return arr.reduce(function(prev, current) {
		return prev.concat(Array.isArray(current) ? magicFlatten(current) : current);
	}, []);
}

// get array average using reduce
function getAvgWithReduce(arr) {
	var average = arr.reduce(function(total, current) { 
		return total + current;
	}, 0);

	return average /= arr.length;
}

// de-dupe an array in place
function removeDuplicates(arr) {
	var arrayValues = {};

	for (var i = 0; i < arr.length; i++) {
		if (arrayValues.hasOwnProperty(arr[i])) {
			arrayValues[arr[i]] += 1;

			if (arrayValues[arr[i]] > 1) {
				arr.splice(i, 1);
			}
		}
		else {
			arrayValues[arr[i]] = 1;
		}
	}

	return arr;
}

// return mode of array
function getMode(arr) {
	var occurences = {},
		maxValue,
		mode;

	for (var i = 0; i < arr.length; i++) {
		if (!occurences.hasOwnProperty(arr[i])) {
			occurences[arr[i]] = 0;
		}
		occurences[arr[i]] += 1;
	}
	
	for (var key in occurences) {
		if (mode === undefined) {
			mode = key;
			maxValue = occurences[key];
		}
		else if (occurences[key] > maxValue) {
			mode = key;
			maxValue = occurences[key];
		}
	}

	return mode;
}

// median of two sorted arrays
function getMedian(arr1, arr2) {
	var values = {},
		p1 = 0,
		p2 = 0;

	while (p1 < arr1.length) {
		if (!values.hasOwnProperty(arr1[p1])) {
			values[arr1[p1]] = true;
		}

		p1++;
	}

	while (p2 < arr2.length) {
		if (!values.hasOwnProperty(arr2[p2])) {
			values[arr2[p2]] = true;
		}

		p2++;
	}

	values = quicklySort(Object.keys(values));
	return values[Math.floor(values.length / 2)];
}

// get last digit of a raised to power of b
function getLastDigit(a, b) {
	var num = Math.pow(a, b);

	return num % 10;
}

// binary search for existence of target, not index
function binarySearch(arr, element) {
	var mid,
		left = 0,
		right = arr.length - 1;

	while (left <= right) {
		mid = Math.floor((right + left) / 2);
		if (arr[mid] === element) {
			return true;
		}
		else if (arr[mid] < element) {
			left = mid + 1;
		}
		else if (arr[mid] > element) {
			right = mid - 1;
		}
	}

	return false;
}

// matrix search, efficiency is far from good
function matrixSearch(mat1, mat2) {

	mat1.forEach(function(element) {
		quicklySort(element);
	});

	for (var i = 0; i < mat2.length; i++) {
		for (var j = 0; j < mat2[i].length; j++) {
			if (binarySearch(mat1[i], mat2[i][j]) !== true) {
				return false;
			}
		}
	}

	return true;
}