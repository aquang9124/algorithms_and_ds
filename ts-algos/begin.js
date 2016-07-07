function foo(n) {
    var timesCalled = 0;
    return function (mult) {
        timesCalled++;
        return (n * mult) + timesCalled;
    };
}
// memoized climb stairs
function memoStairs(n) {
    var memo = {};
    if (memo.hasOwnProperty(n.toString())) {
        return memo[n];
    }
    function doClimb(start) {
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
console.log(memoStairs(5));
