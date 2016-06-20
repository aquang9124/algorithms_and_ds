'use strict';
// function to generate array
function genRandArr(size=10) {
	var result = [],
		randInt = 1;

	while (result.length < size) {
		randInt = (Math.floor(Math.random()*100) + Math.ceil(Math.random()*15)) - Math.floor(Math.random()*8);
		result.push(randInt);
	}

	return result;
}

// function to swap two values in an array
function swapValues(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;

	return arr;
}

// merge two sorted arrays
function merge(arr1, arr2) {
	var p1 = 0,
		p2 = 0,
		result = [];

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
	}
	else if (p2 === arr2.length) {
		result = result.concat(arr1.slice(p1));
	}

	return result;
}

// alternative implementation of merge
function joinArrays(arr1, arr2) {
	var result = [];

	while (arr1.length && arr2.length) {
		if (arr1[0] <= arr2[0]) {
			result.push(arr1.shift());
		} else {
			result.push(arr2.shift());
		}
	}

	if (arr1.length > 0) {
		result = result.concat(arr1);
	}
	else if (arr2.length > 0) {
		result = result.concat(arr2);
	}

	return result;
}

// merge sort
function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var midIdx = Math.floor(arr.length / 2);

	return joinArrays(mergeSort(arr.slice(0, midIdx)), mergeSort(arr.slice(midIdx)));
}

console.log(mergeSort(genRandArr()));