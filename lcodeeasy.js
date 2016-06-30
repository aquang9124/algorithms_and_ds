// Find powers of two
function powersTwo(n) {
	if (n < 1) {
		return false;
	}

	while (n % 2 === 0) {
		n /= 2;
	}

	return n === 1;
}

// Move zeroes test
function moveZeros(nums) {
    if (nums.length < 2) {
        return;
    }

    var idx = 0;
    for (i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) 
        {
            if (i > idx)
            {
                nums[idx] = nums[i];
            }

            idx++;
        }
    }

    while (idx < nums.length) {
        nums[idx++] = 0;
    }

    return nums;
}