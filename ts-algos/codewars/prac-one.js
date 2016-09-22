function isNumeric(item) {
    return !isNaN(Number(item));
}
function moveZeroes(arr) {
    var result = [];
    var numZeroes = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isNumeric(arr[i]) === false) {
            result.push(arr[i]);
        }
        else if (arr[i] !== 0) {
            result.push(arr[i]);
        }
        else {
            numZeroes++;
        }
    }
    for (var j = numZeroes; j > 0; j--) {
        result.push(0);
    }
    return result;
}
