// Attempt to implement replace string function
var str = "Visit Microsoft";

function rep_str(searchStr, replaceStr, str) {
	var splitStr = str.split(" "),
		word = "";

	for (var i = 0; i < splitStr.length; i++) {
		if (splitStr[i] === searchStr) {
			splitStr[i] = replaceStr;
		}
	}

	return splitStr.join(" ") + "!";
}

console.log(rep_str("Microsoft", "Coding Dojo", str));