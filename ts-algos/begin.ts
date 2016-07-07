function foo(n : number) {
	var timesCalled : number = 0;

	return (mult : number) => {
		timesCalled++;
		return (n * mult) + timesCalled;
	};
}

// memoized climb stairs
function memoStairs(n : number) {
	var memo = {};

	if (memo.hasOwnProperty(n.toString())) {
		return memo[n];
	}

	function doClimb(start : number) {
		if (start === 1) {
			return 1;
		}
		else if (start === 2) {
			return 2;
		}

		return doClimb(start - 1) + doClimb(start - 2);
	}

	memo[n] = doClimb(n);
	return memo[n];
}