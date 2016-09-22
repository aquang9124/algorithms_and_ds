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
