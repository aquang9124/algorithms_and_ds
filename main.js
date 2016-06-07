// listNode
var listNode = function(value){
  // Capture the context of 'this' to avoid shenanigans
  var node = this;
  node.value = value;
  node.next = null;
}

// linkedList
var linkedList = function(){
  var list = this;

  list.head = null;
  list.tail = null;
  list.length = 0;
}

linkedList.prototype.append = function(value) {
  if (this.head === null) {
    var newNode = new listNode(value);

    this.head = newNode;
    this.tail = newNode;
    this.length += 1;
  }
  else {
    var newNode = new listNode(value);

    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length += 1;
  }

  return this;
};

linkedList.prototype.insert = function(value, target) {
  if (this.head === null) {
    this.append(value);
  }
  else if (this.head.value === target) {
    var newNode = new listNode(value);
    newNode.next = this.head.next;
    this.head.next = newNode;
    this.length += 1;
  }
  else {
    var current = this.head;
    while (current !== null) {
      if (current.value === target) {
        var newNode = new listNode(value);
        newNode.next = current.next;
        if (current.next === null) {
          current.next = newNode;
          this.tail = newNode;
        }
        else {
          current.next = newNode;
        }
        this.length += 1;
        break;
      }
      current = current.next;
    }
  }
  return this;
};

linkedList.prototype.remove = function(target) {
  if (target === undefined) {
    var current = this.head;
    while (current.next !== null) {
      current.value = current.next.value;
      current = current.next;
    }
    current.next = null;
    this.tail = current;
    this.length -= 1;
  }
  else {
    var current = this.head;
    while (current.next !== null) {
      if (current.next.value === target) {
        current.next = current.next.next;
        this.length -= 1;
        break;
      }
      current = current.next;
    }
  }

  return this;
}

var sLinkedList = new linkedList();
sLinkedList.append(3).append(4);
sLinkedList.insert(5, 4);
sLinkedList.remove(4);
console.log(sLinkedList);