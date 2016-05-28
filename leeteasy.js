// Intersection of two arrays
function intersection(nums1, nums2) {
	var nums3 = {},
		nums4 = [];

	for (var i = 0; i < nums1.length; i++) {
		for (var j = 0; j < nums2.length; j++) {
			if (nums1[i] === nums2[j]) {
				nums3[nums1[i]] = true;
			}
		}
	}

	for (var key in nums3) {
		nums4.push(parseInt(key));
	}

	return nums4;
}

// move zeroes to the end
var moveZeroes = function(nums) {
	for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0)
        {
            for (var j = i; j < nums.length - 1; j++) {
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    return nums;
};

// Delete a node in a linked list, given access only to that node. 
var deleteNode = function(node) {
    var current = node;
    node.val = node.next.val;
    
    while (current.next.next !== null) {
        current.next.val = current.next.next.val;
        current = current.next;
    }
    current.next = current.next.next;
};
/* Since I only have access to the node that is going to be deleted,
 I create a variable to be able to traverse the list and then I set
 the node's value to be the value of its next and as long as the current's
 next is not the tail, the current's next's value is set to the value of its
 next's next. When we reach the node before the tail, the current's next is set
 to the tail's next which is null, thereby deleting the extra node. */

// Check if s is an anagram of t or vice versa
var isAnagram = function(s, t) {
    if (s.length !== t.length)
    {
        return false;
    }
    
    var testObj = {},
    	idx = 0,
    	count = 0;
    
    for (var i = 0; i < s.length; i++) {
        if (testObj[s[i]]) {
            testObj[s[i]].number += 1;
        }
        else {
            testObj[s[i]] = {};
            testObj[s[i]].letter = s[i];
            testObj[s[i]].number = 1;
        }
    }

    while (idx < t.length) {
    	var current = testObj[t[idx]];

    	if (current === undefined) {
    		return false;
    	}

    	for (var j = 0; j < t.length; j++) {
    		if (t[j] === current.letter) {
    			count++;
    		}
    	}

    	if (count === current.number || idx === 0) {
    		count = 0;
    		idx++;
    	}
    	else {
    		return false;
    	}
    }

    return true;
};

// IsAnagram sort version
function isAnagramPro(s, t) {
	if (s.length !== t.length)
    {
        return false;
    }

    s = s.split('');
    t = t.split('');

    s.sort();
    t.sort();

    return s.join('') === t.join('');
}
