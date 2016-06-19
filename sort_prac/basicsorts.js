'use strict';

// function to generate random array
function generateRandArr(size) {
	var result = [];
	var randInt = 1;
	while (result.length < size) {
		randInt = Math.floor(Math.random()*100) + Math.ceil(Math.random()*10);
		result.push(randInt);
	}

	return result;
}

// function to swap two elements in an array
function swapper(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;

	return arr;
}

// bubble sort
function bubbleSort(arr) {
	var swapped = true,
		limit = 1;

	while (swapped) {
		swapped = false;
		for (let i = 0; i < arr.length - limit; i++) {
			if (arr[i] > arr[i + 1]) {
				swapper(arr, i, i+1);
				swapped = true;
			}
		}
		limit++;
	}

	return arr;
}

// selection sort
function selectionSort(arr) {
	var min = arr[0],
		minIdx = 0,
		sorted = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = sorted; j < arr.length; j++) {
			if (arr[j] < min) {
				min = arr[j];
				minIdx = j;
			}
		}
		// Call swapper to make swap
		swapper(arr, sorted, minIdx);
		// Now variables get set to appropriate values before starting next iteration
		sorted++;
		min = arr[sorted];
		minIdx = sorted;
	}

	return arr;
}

// insertion sort
function insertionSort(arr) {

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			for (let j = i; j > 0; j--) {
				if (arr[j - 1] > arr[j]) {
					swapper(arr, j, j-1);
				}
			}
		}
	}

	return arr;
}

// Merge arrays for merge sort
function merge(arr1, arr2) {
	var p1 = 0,
		p2 = 0,
		result = [];

	if (arr1 === undefined) {
		return arr2;
	} else if (arr2 === undefined) {
		return arr1;
	}

	while (arr1[p1] !== undefined && arr2[p2] !== undefined) {
		if (arr1[p1] <= arr2[p2]) {
			result.push(arr1[p1]);
			p1++;
		} else {
			result.push(arr2[p2]);
			p2++;
		}
	}

	if (p1 === arr1.length) {
		result = result.concat(arr2.slice(p2));
	} else if (p2 === arr2.length) {
		result = result.concat(arr1.slice(p1));
	}
	
	return result;
}

// merge sort
function mergeSort(arr) {
	if (arr.length < 2) {

		return arr;
	}

	var midIdx = Math.floor(arr.length / 2),
		left = arr.slice(0, midIdx),
		right = arr.slice(midIdx);


	return merge(mergeSort(left), mergeSort(right));
}

// quick sort
function quickSort(arr) {

	var placePivot = (start, end) => {
		if (start >= end) {
			return;
		}

		var mid = start;
		for (var i = start; i < end; i++) {
			if (arr[i] < arr[end]) {
				swapper(arr, mid, i);
				mid++;
			}
		}

		swapper(arr, end, mid);
		placePivot(start, mid - 1);
		placePivot(start + 1, mid);
	};

	placePivot(0, arr.length - 1);
	return arr;
}

var quicklySort = (input) => {
	if (input.length < 2) {
		return input;
	}

	var pivotIdx = Math.floor(input.length / 2),
		pivot = input[pivotIdx],
		before = [],
		after = [];

	for (let i = 0; i < input.length; i++) {
		if (i !== pivotIdx) {
			if (input[i] <= pivot) {
				before.push(input[i]);
			} else {
				after.push(input[i]);
			}
		}
	}

	// input: [3, 4, 5, 2, 7, 1, 6, 9];
	// before: [3, 4, 2, 1];
	// pivot: [5];
	// after: [7, 6, 9];
	return quicklySort(before).concat(pivot).concat(quicklySort(after));
}

console.log(quicklySort(generateRandArr(10)));