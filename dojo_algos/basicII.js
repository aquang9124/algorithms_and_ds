// recursive version of reverse print
function reversePrintR(arr, i) {
	if (i === undefined) {
		i = arr.length - 1;
	}

	if (i < 0) {
		return;
	}
	
	console.log(arr[i]);
	return reversePrintR(arr, --i);
}