'use strict';
// swap two elements of an array
function swapValues(arr, idx1, idx2) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;

	return arr;
}
// Given a sorted array of indexes produce a book index string
// For example, input: [1, 3, 4, 5, 7, 8, 10] produces output: "1, 3-5, 7-8, 10"
function bookIndex(arr) {
	var result = "",
		start,
		end;

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] === (arr[i+1] - 1)) {
			start = i;

			for (var j = i; j < arr.length; j++) {
				if (arr[j] === (arr[j+1] - 1)) {
					end = j+1;
				}
				else {
					break;
				}
			}

			if (end !== arr.length - 1) {
				result += (arr[start] + "-" + arr[end] + ", ");
			}
			else {
				result += (arr[start] + "-" + arr[end]);
			}

			i = j;
		}
		else {
			if (i === arr.length - 1) {
				result += arr[i];
			}
			else {
				result += (arr[i] + ", ");
			}
		}
	}

	return result;
}

// find all subsets of a string
function getPermutations(str) {
	var result = [];

	function getSets(char, depth=0) {
		if (depth === str.length) {
			result.push(char);
			return;
		}

		// left side
		getSets(char, depth + 1);
		// right side
		getSets(char + str[depth], depth + 1);
	}

	getSets('');
	return result;
}

// return count of how many deletions are needed
// to get a string of alternating characters
function getAlternations(str) {
	str = str.split('');
	var count = 0;

	for (let i = 0; i < str.length - 1; i++) {
		if (str[i].toLowerCase() !== str[i + 1].toLowerCase()) {
			continue;
		}
		str.splice(i, 1);
		i--;
		count++;
	}

	return count;
}

// quick sort
function quickSort(arr) {
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

	return quickSort(before).concat(pivot).concat(quickSort(after));
}