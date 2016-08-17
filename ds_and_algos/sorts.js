function bubbleSort(arr) {
    let limit = 1;
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - limit; i++) {
            if (arr[i] > arr[i + 1]) {
                swapVals(arr, arr[i], arr[i + 1]);
                swapped = true;
            }
        }
    }

    return arr;
}

function swapVals(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
}

console.log(bubbleSort([4, 6, 22, 1, 0, 99, 27]));