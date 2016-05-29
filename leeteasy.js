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

// Intersection of two arrays II
function intersectArrays(nums1, nums2) {
	var nums3 = [];
	for (var i = 0; i < nums1.length; i++) {
		for (var j = 0; j < nums2.length; j++) {
			if (nums1[i] === nums2[j])
			{
				nums2.splice(j, 1);
				nums3.push(nums1[i]);
				break;
			}
		}
	}

	return nums3;
}

// move zeroes to the end
// this algorithm is definitely not perfect
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

// majority element
var majorityElement = function(nums) {
    nums.sort();
    
    return nums[nums.length / 2];
};

// contains duplicates
var containsDuplicate = function(nums) {
    nums.sort();
    
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    
    return false;
};

// single number
var singleNumber = function(nums) {
    nums.sort();

    for (var i = 0; i < nums.length; i += 2) {
    	if (nums[i] !== nums[i + 1]) {
    		return nums[i];
    	}
    }

    return false;
};

// check if n is a power of three
var isPowerOfThree = function(n) {
	var limit = Math.floor(n / 3);

	for (var i = 1; i < limit; i++) {
		if (i * i * i === n)
		{
			return true;
		}
	}

	return false;
}
// This is a very slow algorithm
// Here is a faster way of checking if
// the value is a power of three
function isPowerOfThreePro(n) {
	if (n < 1) {
		return false;
	}

	while (n % 3 === 0) {
		n /= 3;
	}

	return n === 1;
}
// This one is also quite slow, but at least it's much
// faster than the previous implementation

// Roman numeral into integer
// This implementation is quite slow, it's only faster
// than 13% of submissions for JavaScript. T-T
var romanToInt = function(s) {
    var romanNums = {
        keys: {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }
    };
    var values = [];
    var sum = 0;

    if (s.length < 2 && romanNums.keys[s])
    {
    	return romanNums.keys[s];
    }
    
    for (var i = 0; i < s.length; i++) {
        values.push(romanNums.keys[s[i]]);
    }
    
    for (var j = 0; j < values.length - 1; j++) {
        if (values[j] >= values[j + 1]) {
            sum += values[j];
        }
        else if (values[j] < values[j + 1]) {
            sum += (values[j + 1] - values[j]);
            j++;
        }
    }

    if (values[values.length - 2] >= values[values.length - 1]) {
		sum += values[values.length - 1];   	
    }
    
    return sum;
};

// reverseVowels
var reverseVowels = function(s) {
    s = s.split('');
    var left = 0,
        right = s.length - 1;

	// isVowel
	function isVowel(x) {
		var result;

	    result = x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U';

	    return result;
	}
    
    while (left <= right) {

       if (isVowel(s[left]) && isVowel(s[right]))
       {
           var temp = s[left];
           s[left] = s[right];
           s[right] = temp;
           right--;
           left++;
       }
       else if (isVowel(s[left]))
       {
           right--;
       }
       else if (isVowel(s[right]))
       {
           left++;
       }
       else
       {
           left++;
           right--;
       }
    }
    
    return s.join('');
};