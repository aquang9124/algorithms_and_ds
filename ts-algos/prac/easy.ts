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

function flattenArr(arr: number[][]): number[] {
    let result: number[] = [];

    function makeFlat(item) {
        if (!Array.isArray(item)) {
            result.push(item);
        } else {
            for (var i = 0; i < item.length; i++) {
                makeFlat(item[i]);
            }
        }
    }

    makeFlat(arr);

    return result;
}

function climbStairs(steps: number) {
    if (steps === 0) {
        return 1;
    } else if (steps < 0) {
        return 0;
    }

    return climbStairs(steps - 1) + climbStairs(steps - 2);
}

class SllNode {
    data: number;
    next: SllNode;

    constructor(data: number) {
        this.data = data;
    }
}

class SinglyLinkedList {
    head: SllNode;
    tail: SllNode;
    count: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    add(data: number) {
        let newNode = new SllNode(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode; 
        } else {
            this.tail.next = newNode;
        }

        this.count += 1;
        return this;
    }
}