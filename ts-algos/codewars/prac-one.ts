function isNumeric(item: any): boolean {
    return !isNaN(Number(item));
}


function moveZeroes(arr: Array<any>): Array<any> {
    let result: Array<any> = [];
    let numZeroes: number = 0;

    for (let i: number = 0; i < arr.length; i++) {
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

    for (let j: number = numZeroes; j > 0; j--) {
        result.push(0);
    }

    return result;
}

function findMax(arr: Array<number>): number {
    let max = arr[0];

    for(let i: number = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function bubbleSort(arr: number[]): number[] {
    let limit = 1;
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i: number = 0; i < arr.length - limit; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
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
