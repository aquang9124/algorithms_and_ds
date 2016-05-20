// Messy Math Mashup
function messyMath(num) {
	var sum = 0;
	for (var i = 0; i <= num; i++) {
		if (i === num / 3) {
			return -1;
		}
		else if (i % 3 === 0) {
			continue;
		}
		else if (i % 7 === 0) {
			sum += (i*2);
		}
		else {
			sum += i;
		}
	}

	return sum;
}

// extract-o-matic
function extractDigit(num, digit) {
	num = num.toString().split("");

	if (digit >= num.length) {
		return 0;
	}

	if (digit == 0) {
		return num[num.length - 1];
	}
	else if (digit > 0) {
		digit += 1;
		return num[num.length - digit];
	}
	else {
		digit -= 1;
		digit = Math.abs(digit);
		return num[num.length - digit];
	}
}

// CountTo 10
function countTo(start) {
	if (start === undefined) {
		start = 1;
	}

	if (start > 10) {
		return start;
	}

	console.log(start);
	return countTo(start + 1);
}

countTo();