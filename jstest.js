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

// test to dynamically create 10 button elements
function createButtons() {
	for (var i = 1; i <= 10; i++) {
		var btn = document.createElement("BUTTON");
		var t = document.createTextNode(i);
		btn.setAttribute("id", i);
		btn.appendChild(t);
		document.body.appendChild(btn);
	}
	document.querySelector("body").addEventListener("click", function() {
		if (event.target.tagName.toLowerCase() === 'button') {
			alert(event.target.id);
		}
	}
}