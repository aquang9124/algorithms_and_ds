// climb stairs slightly more efficiently
function climbStairs(n) {
	if (n === 1) {
		return 1;
	}
	else if (n === 2) {
		return 2;
	}

	return climbStairs(n - 1) + climbStairs(n - 2);
}

// reverse digits of an integer
var reverse = function(x) {
    x = x.toString().split('');
    var i = 0;
    
    if (x[0] === '-') {
        i = 1;
    }
    
    for (var j = x.length - 1; i <= j; i++, j--) {
        var temp = x[i];
        x[i] = x[j];
        x[j] = temp;
    }
    
    return parseInt(x.join(''));
};