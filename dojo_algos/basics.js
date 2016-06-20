'use strict';
// Given a sorted array of indexes produce a book index string
// For example, input: [1, 3, 4, 5, 7, 8, 10] produces output: "1, 3-5, 7-8, 10"
function bookIndex(arr) {
	var result = "",
		start,
		end;

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] === (arr[i+1] - 1)) {
			start = i;
			for (var j = i; j < arr.length; j++) {
				if (arr[j] === (arr[j+1] - 1)) {
					end = j+1;
				}
				else {
					break;
				}
			}
			result += (arr[start] + "-" + arr[end] + ", ");
			i = j;
		}
		else {
			if (i === arr.length - 1) {
				result += arr[i];
			}
			else {
				result += (arr[i] + ", ");
			}
		}
	}

	return result;
}

console.log(bookIndex([1, 3, 4, 5, 7, 8, 9, 10, 12]));