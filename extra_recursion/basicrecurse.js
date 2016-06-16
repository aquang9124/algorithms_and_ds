function genSum(arr) {
	var result = 0;

	var getSum = function(idx) {
		if (idx === arr.length)
			return;
		result += arr[idx];
		getSum(idx + 1);
	}

	getSum(0);
	return result;
}

function sumArr(arr, idx, sum) {
	if (sum === undefined) {
		sum = 0;
		idx = 0;
	}
	if (idx === arr.length)
		return sum;

	sum += arr[idx];
	return sumArr(arr, idx + 1, sum);
}

// getOdds
function getOddsR(arr, sum, idx) {
	if (idx === undefined) {
		sum = 0;
		idx = 0;
	}

	if (idx === arr.length) {
		return sum;
	}
	else if (arr[idx] % 2 === 1) {
		sum += arr[idx];
	}

	return getOddsR(arr, sum, idx+1);
}

console.log(getOddsR([1, 2, 3, 4, 5, 6]));