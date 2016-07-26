// binary search tree implemented using es6 classes, plus some fun experiments.
// Not for practical reasons, just some fun things.
class BTNode {
	constructor(data) {
		this._data = {
			data: data,
			left: null,
			right: null
		};
	}

	get(prop) {
		return this._data[prop];
	}
	set(prop, newData) {
		this._data[prop] = newData;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		let node = new BTNode(data);
		if (this.root === null) {
			this.root = node;
		}
		else {
			let cNode = this.root;

			while (true) {
				if (cNode.get('data') >= data) {
					if (cNode.get('left') === null) {
						cNode.set('left', node);
						break;
					}
					else {
						cNode = cNode.get('left');
					}
				}
				else {
					if (cNode.get('right') === null) {
						cNode.set('right', node);
						break;
					}
					else {
						cNode = cNode.get('right');
					}
				}
			}
		}
		return this;
	}
}

// stack data structure 
class Stack {
	constructor() {
		this.items = [];
	}

	push(item, ...args) {
		return this.items.push(item, ...args);
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		let end = this.items.length - 1;
		return this.items[end];
	}
}

// queue data structure
class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(item) {
		this.items.unshift(item);
		return this;
	}

	dequeue() {
		return this.items.pop();
	}
}

// count 8 recursively, double the value if the next value is an 8
function countEight(n) {
	let count = 0;

	function countIt(num) {
		cNum = num % 10;
		rem = Math.floor(num / 10);
		leftOfCNum = rem % 10;

		if (num < 10) {
			if (num === 8) {
				count++;
			}
			return;
		}

		if (leftOfCNum === 8 && cNum === 8) {
			count += 2;
		}
		else if (cNum === 8) {
			count++;
		}

		countIt(Math.floor(num / 10));
	}

	countIt(n);
	return count;
}

// given length n return an array of strings from "0", "1", "2" and so on
function createStringArr(n) {
	let result = [];
	for (let i = 0; i < n; i++) {
		result.push(i.toString());
	}

	return result;
}

// given input of start and end, return a new array containing a sequence of ints up to
// but not including end
function fizzArr(start, end) {
	let result = [];
	for (let i = start; i < end; i++) {
		result.push(i);
	}

	return result;
}

// return true if at any point an array has three consecutive numbers
function tripleUp(arr) {
	let countAdj = 1;
	for (let i = 0; i < arr.length; i++) {
		let nextNum = arr[i + 1];
		if (countAdj === 3) {
			return true;
		}
		else if (arr[i] === nextNum - 1) {
			countAdj += 1;
		}
		else {
			countAdj = 1;
		}
	}

	return false;
}

// equilibrium index with O(n) time complexity
function equilibrium(A) {
	if (A.length === 0) {
		return -1;
	}
	else if (A.length < 2) {
		return 0;
	}

    var total = 0;
    var currentSum = 0;
    var prefixSum = 0;
    
    for (var i = 0; i < A.length; i++) {
        total += A[i];
    }

    for (var j = -1, k = 0; k < A.length; j++, k++) {
    	var current = total;
    	currentSum += A[k];

    	if (k === 0) {
    		current -= currentSum;

    		if (current === 0) {
    			return k;
    		}
    	}

    	if (j >= 0) {
    		current -= currentSum;
    		prefixSum += A[j];
    		if (prefixSum === current) {
    			return k;
    		}
    	}
    }

    return -1;
}

// given an array consisting of non-negative integers and an integer m
// return the most common value which does not exceed the value of m
function findCommon(M, A) {
	// save length of A as a variable N
    var N = A.length;
    // create a new array of length M + 1
    var count = new Array(M + 1);
    console.log(count);
    // declare variable i, initiated to 0, promotes reuse of i variable
    var i;
    // for loop will loop until i is greater than M, ex. M = 3, loop will do 4 iterations
    for (i = 0; i <= M; i++)
    	// for loop is creating buckets, essentially
        count[i] = 0;
    var maxOccurence = 1;
    var index = 0;
    // for loop will take i from 0 up to N, breaks once i > N
    for (i = 0; i <= N; i++) {
    	// condition checks to see if value at index A[i] in count array is greater than 0
        if (count[A[i]] > 0) {
        	// set var tmp to the value stored at A[i]
            var tmp = count[A[i]];
            // condition checks to see if tmp value is greater than maxOccurence
            if (tmp > maxOccurence) {
            	// if it is, set maxOccurence to tmp value;
                maxOccurence = tmp;
                // index = i;
                index = i;
            }
            // value at index of A[i] in count is set to be tmp + 1
            count[A[i]] = tmp + 1;
        } else {
        	// else, count[A[i]] = 1
            count[A[i]] = 1;
        }
    }
    // return value at index in array A
    return A[index];
}

// function to check if char is integer
function checkInt(n) {
	return !isNaN(parseInt(n));
}

// format phone number
function formatS(s) {
	var numbers = [];
	var i;

	for (i = 0; i < s.length; i++) {
		var validNum = checkInt(s[i]);
		
		if (validNum === true) {
			numbers.push(s[i]);
		}
	}

	var dashAfterThree = 0;
	var currentCount = 0;
	var formattedStr = "";

	for (i = 0; i < numbers.length; i++) {
		var remainder = numbers.length - dashAfterThree;
		if (remainder <= 4 && remainder % 3 !== 0) {
			break;
		}
		dashAfterThree += 3;
	}

	for (i = 0; i < numbers.length; i++) {
		if (dashAfterThree < 0) {
			if (currentCount === 2) {
				formattedStr += '-';
				currentCount = 0;
			}
		}
		else {
			if (currentCount === 3) {
				formattedStr += '-';
				currentCount = 0;
			}
		}

		currentCount += 1;
		dashAfterThree -= 1;
		formattedStr += numbers[i];
	}

	return formattedStr;
}

// calculate phone call costs
function calcPhoneCosts(S) {
	var inputsArr = S.split('\n');
	var callLog = {};
	var numbers;
	var idx;

	inputsArr.forEach(function(call) {
		// split each call into an array of the duration and the number
		call = call.split(',');

		// if number does not already exist in callLog, create entry
		if (!callLog.hasOwnProperty(call[1])) {
			callLog[call[1]] = [0, 0, 0];
		}

		var callTime = call[0].split(':');
		var phoneNumber = call[1].split('-');
		var fiveOrLonger = false;

		// loop through callTime array and calculate needed values
		for (idx = 0; idx < callTime.length; idx++) {
			
			if (idx === 0) {
				var hours = parseInt(callTime[idx]);

				if (hours > 0) {
					fiveOrLonger = true;
					callLog[call[1]][2] += (60 * hours) * 150;
				}

				callLog[call[1]][0] += 3600 * hours;
			}
			else if (idx === 1) {
				var minutes = parseInt(callTime[idx]);

				if (minutes >= 5) {
					fiveOrLonger = true;
				}

				if (fiveOrLonger === true) {
					callLog[call[1]][2] += minutes * 150;
				}
				else {
					callLog[call[1]][2] += (60 * minutes) * 3;
				}

				callLog[call[1]][0] += 60 * minutes;
			}
			else {
				var seconds = parseInt(callTime[idx]);

				if (fiveOrLonger === true && seconds > 0) {
					callLog[call[1]][2] += 150;
				}
				else {
					callLog[call[1]][2] += seconds * 3;
				}

				callLog[call[1]][0] += seconds;
			}
			// add to phone number numerical value
			callLog[call[1]][1] += parseInt(phoneNumber[idx]);
		}

	});

	// get an array of all the numbers in the log
	numbers = Object.keys(callLog);

	var minNumValue = callLog[numbers[0]][1];
	var maxDuration = callLog[numbers[0]][0];
	var longestCalls = numbers[0];
	var smallestNumVal = numbers[0];

	// find the phone number with lowest numerical value
	for (idx = 1; idx < numbers.length; idx++) {
		var currentValue = callLog[numbers[idx]][1];

		if (minNumValue > currentValue) {
			minNumValue = currentValue;
			smallestNumVal = numbers[idx];
		}
	}

	// find phone number with longest duration, choosing 
	// number with lower num value in case of ties
	for (idx = 1; idx < numbers.length; idx++) {
		var currentDuration = callLog[numbers[idx]][0];

		if (maxDuration <= currentDuration) {
			maxDuration = currentDuration;

			if (maxDuration === currentDuration && numbers[idx] !== smallestNumVal) {
				longestCalls = smallestNumVal;
			}
			else {
				longestCalls = numbers[idx];
			}
		}
	}

	// apply the discount
	callLog[longestCalls][2] = 0;

	// calculate total amount due
	var totalAmtDue = 0;
	for (var call in callLog) {
		totalAmtDue += callLog[call][2];
	}
	return totalAmtDue;
}

console.log(calcPhoneCosts("00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090"));