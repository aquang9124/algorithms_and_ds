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

function selectionSort(arr) {
    let sorted = 0;

    for (let i = 0; i < arr.length; i++) {
        let min = arr[sorted];
        let minIdx = sorted;

        for (let j = sorted; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIdx = j;
            }
        }

        let temp = arr[sorted];
        arr[sorted] = arr[minIdx];
        arr[minIdx] = temp;

        sorted++;
    }

    return arr;
}

console.log(selectionSort([2, 9, 1, 0, -4, 7, 3, 5]));