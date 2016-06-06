// make_out_word
function makeOutWord(str, word) {
	var resultStr = "",
		firstHalf = Math.floor(str.length / 2),
		totalLength = str.length + word.length;

	for (var i = 0; i < str.length; i++) {
		if (i < firstHalf) {
			resultStr += str[i];
		}
		else if (i === firstHalf && word.length > 0) {
			resultStr += word;
			word = "";
			i--;
		}
		else {
			resultStr += str[i];
		}
	}

	return resultStr;
}

console.log(makeOutWord('<<>>', 'hello'));