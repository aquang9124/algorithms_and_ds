// Given an array of integers and a target integer, return the two numbers in the array that add up to the target
// Space and time complexity of O(n)
function findPair(arr, x) {
	var pairObj = {};

	for (var i = 0; i < arr.length; i++) {
		var difference = x - arr[i];
		if (pairObj[difference]) {
			return [arr[i], difference];
		}
		else {
			pairObj[arr[i]] = difference; 
		}
	}

	return false;
}

console.log(findPair([1, 2, 3, 4], 5));