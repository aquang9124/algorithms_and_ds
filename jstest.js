// function to produce a JSON object
function outputJson(obj) {
	return JSON.stringify(obj);
}

// number of 1 bits
var hammingWeight = function(n) {
	var binaryRep = n.toString(2),
		count = 0;

	for (var i = 0; i < binaryRep.length; i++) {
		if (binaryRep[i] == 1) {
			count++;
		}
	}

	return count;
};