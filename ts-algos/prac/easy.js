function countToX(x) {
    var result = [];
    for (var i = 1; i <= x; i++) {
        result.push(i);
    }
    return result;
}
function rCountToX(x) {
    var result = [];
    var doCount = function (i) {
        if (i === void 0) { i = 1; }
        if (i === x) {
            return;
        }
        result.push(i);
        doCount(++i);
    };
    doCount();
    return result;
}
console.log(rCountToX(20));
