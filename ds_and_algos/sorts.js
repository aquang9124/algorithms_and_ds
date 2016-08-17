function bubbleSort(arr) {
    let limit = 1;
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - limit; i++) {
            if (arr[i] > arr[i + 1]) {
                swapVals(arr, i, i+1);
                swapped = true;
            }
        }
        limit++;
    }

    return arr;
}

function swapVals(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr;
}

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            for (let j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    swapVals(arr, j, j - 1);
                }
            }
        }
    }

    return arr;
}