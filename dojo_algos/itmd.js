function TreeNode(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinaryTree() {
	this.root = null;
}

var maxDepth = function(root) {
    var leftCount = 0,
        rightCount = 0;
    if (root === null)
    {
        return 0;
    }
    while (root.left) {
        leftCount++;
    }
    while (root.right) {
        rightCount++;
    }
    
    return Math.max(leftCount, rightCount) + 1;
};

bt = new BinaryTree();
console.log(maxDepth(bt.root));

// quick sort
function quickSort(arr) {

	var placePivot = function(start, end) {
		if (start >= end) {
			return;
		}

		var right = start;
		var temp;

		for (var i = start; i < end; i++) {
			if (arr[i] < arr[end]) {
				temp = arr[i];
				arr[i] = arr[right];
				arr[right] = temp;
				right++;
			}
		}

		temp = arr[right];
		arr[right] = arr[end];
		arr[end] = temp;

		placePivot(start, right - 1);
		placePivot(right + 1, end);
	}

	placePivot(0, arr.length - 1);
	return arr;
}

function quicklySort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var pivIdx = Math.floor(arr.length / 2),
		pivot = arr[pivIdx],
		before = [],
		after = [];

	for (var i = 0; i < arr.length; i++) {
		if (i !== pivIdx) {
			if (arr[i] <= pivot) {
				before.push(arr[i]);
			}
			else {
				after.push(arr[i]);
			}
		}
	}

	return quicklySort(before).concat(pivot).concat(quicklySort(after));
}

// take input of an array and a num and return new array containining sub-arrays
// of size num using the values of the input array. Only create as many 
// sub-arrays as the input array allows for.
function createSubArrays(arr, num) {
	if (num <= 0) {
		return [];
	}

	var result = [],
		tempArr = [];

	for (var i = 0; i < arr.length; i++) {
		if (tempArr.length === num) {
			result.push(tempArr);
			tempArr = [];
		}
		tempArr.push(arr[i]);
	}

	if (tempArr.length > 0) {
		result.push(tempArr);
	}

	return result;
}