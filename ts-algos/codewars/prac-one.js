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
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function bubbleSort(arr) {
    var limit = 1;
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < arr.length - limit; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        limit--;
    }
    return arr;
}
console.log(bubbleSort([0, -1, -55, 23, 9, 5, 10]));
