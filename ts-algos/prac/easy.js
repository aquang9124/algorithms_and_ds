function countToX(x) {
    var result = [];
    for (var i = 1; i <= x; i++) {
        result.push(i);
    }
    return result;
}
function rCountToX(x) {
    var result = [];
    var doCount = function (i) {
        if (i === void 0) { i = 1; }
        if (i === x) {
            return;
        }
        result.push(i);
        doCount(++i);
    };
    doCount();
    return result;
}
function flattenArr(arr) {
    var result = [];
    function makeFlat(item) {
        if (!Array.isArray(item)) {
            result.push(item);
        }
        else {
            for (var i = 0; i < item.length; i++) {
                makeFlat(item[i]);
            }
        }
    }
    makeFlat(arr);
    return result;
}
function climbStairs(steps) {
    if (steps === 0) {
        return 1;
    }
    else if (steps < 0) {
        return 0;
    }
    return climbStairs(steps - 1) + climbStairs(steps - 2);
}
var SllNode = (function () {
    function SllNode(data) {
        this.data = data;
    }
    return SllNode;
}());
var SinglyLinkedList = (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    SinglyLinkedList.prototype.add = function (data) {
        var newNode = new SllNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
        }
        this.count += 1;
        return this;
    };
    return SinglyLinkedList;
}());
var sll = new SinglyLinkedList();
sll.add(10);
console.log(sll);
