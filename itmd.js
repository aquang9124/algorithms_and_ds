var rbsArr = [-90,-19,0,2,12,29,33,190,320];
// Helper function that finds the midpoint between min and max
function findMid(min, max) {
	return Math.floor((min + max)/2);
}

// A recursive binary search function
function rBS(arr, value, min, max) {
	if (!max) {
		max = arr.length - 1;
	}
	if (!min) {
		min = 0;
	}
	if (max < min) {
		return false;
	}
	else {
		var mid = findMid(min, max);

		if (arr[mid] < value) {
			return rBS(arr, value, mid + 1, max);
		}
		else if (arr[mid] > value) {
			return rBS(arr, value, min, mid - 1);
		}
		else {
			return mid;
		}
	}
}

// Iterative binary search function
function iBS(value, arr) {
	var min = 0,
		max = arr.length - 1,
		mid = findMid(min, max);

	while (min <= max) {
		mid = findMid(min, max);

		if (arr[mid] < value) {
			min = mid + 1;
		}

		else if (arr[mid] > value) {
			max = mid - 1;
		}

		else {
			return mid;
		}
	}

	return false;
}

/* Bit Manipulations

24 + 8

0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0010 0000

Answer is 32

24 - 8

0000 0000 0001 1000
0000 0000 0000 1000
-------------------
0000 0000 0001 0000

Answer is 16


*/

// Bubble sort implementation

// Helper Function
function swapEle(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;

	return true;
}

// Actual bubbleSort function
var testArr = [5, 4, 9, 1, 3, 2, 6];
function bubbleSort(arr) {
	var idx = 1,
		swap = true;

	while (swap) {
		swap = false;

		for (var i = 0; i < arr.length - idx; i++) {
			if (arr[i] > arr[i + 1]) {
				swapEle(arr, i, i+1);
				swap = true;
			}
		}

		idx++;
	}

	return arr;
}

// Selection Sort Implementation
function selectionSort(arr) {
	var idx = 0,
		min;

	for (var i = 0; i < arr.length - 1; i++) {
		min = i;

		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		if (min !== i) {
			swapEle(arr, min, i);
		}
	}
	
	return arr;
}

// Insertion Sort implementation
var arr2 = [55, 2, 8, 1, 5, 3, 9, 3];
function insertionSort(arr) {
	var current,
		j = 0;

	// i starts at 1 and goes to the length of the array
	for (var i = 1; i < arr.length; i++) {
		// we keep track of the first unsorted element on every iteration
		// j is equal to the index of the current element
		current = arr[i];
		j = i;

		// While current is less than the element at the index before it
		// and j is greater than 0, we keep looping.
		while(j > 0 && arr[j - 1] > current) {
			// We set arr[j] to be equal to arr[j - 1], effectively moving
			// everything over 1 until we reach an element that is not
			// greater than current or j has hit 0.
			arr[j] = arr[j - 1];
			j--;
		}
		// We then assign the index we land on to equal the current.
		arr[j] = current;
	}

	return arr;
}

// Merge Sort Implementation for 2 pre-sorted arrays
function mergeSort(arr1, arr2) {
	var arr3 = [];

	while (arr1.length && arr2.length) {
		if (arr1[0] <= arr2[0]) {
			arr3.push(arr1.shift());
		} else {
			arr3.push(arr2.shift());
		}
	}

	while (arr1.length) {
		arr3.push(arr1.shift());
	}
	
	while (arr2.length) {
		arr3.push(arr2.shift());
	}

	return arr3;
}

// Merge sort for an unsorted array
function mergeUnsorted(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var middle = Math.ceil(arr.length/2),
		left = arr.splice(0, middle), 
		right = arr;

	return mergeSort(mergeUnsorted(left), mergeUnsorted(right));

	
	
}

console.log(mergeUnsorted(testArr));