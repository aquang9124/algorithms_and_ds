function sums2(arr) {
	if (arr.length < 2)
		return arr[0];
	else
		return arr[0] + arr[1];
}

console.log(sums2([1, 2, 3]));