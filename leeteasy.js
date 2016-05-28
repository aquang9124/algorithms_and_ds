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

    // Second sweep to make sure all zeroes are accounted for
    // Not sure why it wouldn't just let me decrement i
    // when I found a zero.
    for (var idx = 0; idx < nums.length; idx++) {
    	if (nums[idx] === 0)
        {
            for (var k = idx; k < nums.length - 1; k++) {
                var temp2 = nums[k];
                nums[k] = nums[k + 1];
                nums[k + 1] = temp;
            }
        }
    }
    
    return nums;
};

console.log(moveZeroes([0, 0, 0, 1]));