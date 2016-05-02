function sumArrays(arr1, arr2) {
	var result = [],
		idx = 0;

	// Early terminations in case either array has length of 0.
	// Doesn't check for case where both are at length 0 because 
	// it would be silly for someone to put in two empty arrays as inputs.
	if (arr1.length === 0) {
		return arr2;
	}

	if (arr2.length === 0) {
		return arr1;
	}

	while (idx < arr1.length || idx < arr2.length) {
		if (idx < arr1.length && idx < arr2.length) {
			result.push(arr1[idx] + arr2[idx]);
		}
		else if (idx >= arr1.length) {
			result.push(arr2[idx]);
		}
		else {
			result.push(arr1[idx]);
		}
		idx++;
	}

	return result;
}

console.log(sumArrays([1, 2, 3, 4, 5], [3, 9, 4]));