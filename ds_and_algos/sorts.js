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

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return mergeArrays(mergeSort(left), mergeSort(right));
}

function mergeArrays(arr1, arr2) {
    let p1 = 0, p2 = 0;
    let results = [];

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] <= arr2[p2]) {
            results.push(arr1[p1]);
            p1++;
        }
        else if (arr2[p2] < arr1[p1]) {
            results.push(arr2[p2]);
            p2++;
        }
    }

    if (p1 === arr1.length) {
        results = results.concat(arr2.slice(p2));
    }
    else if (p2 === arr2.length) {
        results = results.concat(arr1[p1]);
    }

    return results;
}