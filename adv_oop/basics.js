/**
 * Created by altgexx on 11/3/2016.
 */
class SLLNode {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    add(data) {
        let newNode = new SLLNode(data);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
        }

        return this;
    }
}

let sll = new SinglyLinkedList();
sll.add(5);
console.log(sll);