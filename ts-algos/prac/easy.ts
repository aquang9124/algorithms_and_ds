function countToX(x: number): Array<number> {
    let result: Array<number> = [];

    for (let i = 1; i <= x; i++) {
        result.push(i);
    }

    return result;
}

function rCountToX(x: number): number[] {
    let result: number[] = [];

    let doCount = (i: number = 1) => {
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