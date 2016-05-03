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