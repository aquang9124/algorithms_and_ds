'use strict';

// time conversion from 12 to 24 hour format
var timeConvert = function(time) {
	var result = "";
	var statusPM = time.indexOf('PM');
	var statusAM = time.indexOf('AM');

	if (statusPM !== -1) {
        time = time.replace('PM', '');
        time = time.split(':');
        var hour = parseInt(time[0]);

        if (hour !== 12) {
          hour += 12; 
        }

        time[0] = "" + hour;
        console.log(time.join(':'));
	}
    else if (statusAM !== -1) {
    	time = time.replace('AM', '');
    	time = time.split(':');
    	var hour = parseInt(time[0]);

    	if (hour === 12) {
    		hour -= 12;
    	}
    	
    	if (hour < 10) {
    		time[0] = "0" + hour;
    	}
    	else {
    		time[0] = "" + hour;
    	}
    	
    	console.log(time.join(':'));

    }

}

// pangrams
var testStr = "qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun";
function checkPangram(string) {
	var letters = {};

	for (var i = 0; i < string.length; i++) {
		if (string[i].toUpperCase() !== string[i].toLowerCase()) {
			if (letters[string[i].toLowerCase()] === undefined) {
				letters[string[i].toLowerCase()] = true;
			}
		}
	}
	
	if (Object.keys(letters).length === 26) {
		return true;
	}

	return false;
}

// N x M matrix and target number
function findX(matrix, x) {
	var i = 0,
		j = matrix[0].length - 1;

	while (i < matrix.length && j >= 0) {
		if (matrix[i][j] === x) {
			return true;
		}

		if (matrix[i][j] > x) {
			j--;
		} else {
			i++;
		}
	}

	return false;
}

// Maximum number of 1s
function findMaxOnes(arr) {
	var max = 0,
		maxIdx = 0,
		i = 0,
		cIdx = Math.floor(arr[0].length / 2),
		start = 0,
		end = arr[0].length - 2,
		lengths = arr[0].length;

	function setMax(difference) {
		var count = lengths - difference;
		if (count > max) {
			max = count;
			maxIdx = i;
		}
		i++;
		cIdx = Math.floor(arr[0].length / 2);
		start = 0;
		end = lengths - 2;
	}

	while (i < arr.length) {
		if (arr[i][cIdx] === 1) {
			if (cIdx === 1 && arr[i][cIdx - 1] !== 0) {
				setMax(0);
			}
			else if (arr[i][cIdx - 1] === 0) {
				setMax(cIdx);
			}
			else {
				cIdx--;
			}
		}
		else if (arr[i][cIdx] === 0) {
			if (cIdx === end && arr[i][cIdx + 1] !== 1) {
				i++;
				cIdx = Math.floor(arr[0].length / 2);
			}
			else if (arr[i][cIdx + 1] === 1) {
				setMax(cIdx + 1);
			}
			else {
				cIdx++;
			}
		}
	}

	return maxIdx;
}

function generateFuncs() {
	var result = [];
	// Because `let` creates a block scoped variable
	// the closures will return the values we want for `i`
	for (let i = 0; i < 5; i++) {
		result.push(function() { return i; });
	}

	return result;
}