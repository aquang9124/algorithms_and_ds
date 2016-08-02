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