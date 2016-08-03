// jaden casing
String.prototype.toJadenCase = function() {
	if (this.trim() === "") {
		return false;
	}

	let s = this.split(' ');

	for (let i = 0; i < s.length; i++) {
		let word = s[i].split('');
		word[0] = word[0].toUpperCase();
		s[i] = word.join('');
	}

	return s.join(' ');
};

// more functional implementation of jaden casing
String.prototype.toJaden = function() {
	let s = this.split(' ');

	s = s.map(function(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});

	return s.join(' ');
};

// first longest consecutive string
function consecStrings(arr, k) {
	let n = arr.length;

	if (n === 0 || k > n || k <= 0) {
		return "";
	}

	let longestStr = arr[0];

	for (let i = 0; i < n; i++) {
		let currentStr = arr[i];
		let count = 1;
		let j = i + 1;

		while (count < k && j < n) {
			currentStr += arr[j];
			j++;
			count++;
		}

		if (longestStr.length < currentStr.length) {
			longestStr = currentStr;
		}

	}

	return longestStr;
}