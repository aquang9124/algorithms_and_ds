// Quicksort implementation
var arr = [3, 7, 2, 1, 9, 0];
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