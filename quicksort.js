// Quicksort implementation
var arr = [7, 1, 2, 3, 9, 0, 8, 5, 4];
function quickSort(arr) {

	if (arr.length < 2) {
		return arr;
	}

	var left = [],
		right = [],
		pivot = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > pivot) {
			right.push(arr[i]);
		} else {
			left.push(arr[i]);
		}
	}

	return quickSort(left).concat(pivot).concat(quickSort(right));
}

// bubbleSort implementation
function bubbleSort(arr) {
	var limit = 1,
		swap = true;

	while (swap) {
		swap = false;
		for (var j = 0; j < arr.length - limit; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swap = true;
			}
		}
		limit++;
	}

	return arr;
}

// selectionSort implementation
function selectionSort(arr) {
	var min = arr[0],
		minIdx = 0,
		sorted = 0,
		temp;

	for (var i = 0; i < arr.length; i++) {
		for (var j = sorted; j < arr.length; j++) {
			if (arr[j] < min) {
				min = arr[j];
				minIdx = j;
			}
		}

		// make the swap
		temp = arr[sorted];
		arr[sorted] = arr[minIdx];
		arr[minIdx] = temp;

		// increment the sorted pointer
		// set min to its proper place
		// set the minIdx to the index of min
		sorted++;
		min = arr[sorted];
		minIdx = sorted;
	}

	return arr;
}

// insertionSort implementation
function insertionSort(arr) {

	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			for (var j = i + 1; j > 0; j--) {
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

console.log(insertionSort(arr));