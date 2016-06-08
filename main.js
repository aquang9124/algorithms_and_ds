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
  }
  else {
    var newNode = new listNode(value);

    this.tail.next = newNode;
    this.tail = this.tail.next;
  }
  this.length += 1;
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
    while (current.next !== null) {
      if (current.value === target) {
        var newNode = new listNode(value);
        newNode.next = current.next;
        current.next = newNode;
        this.length += 1;
        break;
      }
      current = current.next;
    }
    var newNode = new listNode(value);
    current.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }
  return this;
};

linkedList.prototype.delete = function(target) {
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

linkedList.prototype.contains = function(target) {
  var current = this.head;
  while (current) {
    if (current.value === target) {
      return true;
    }
    current = current.next;
  }
  return false;
}

var sLinkedList = new linkedList();
sLinkedList.append(3).append(4);
sLinkedList.insert(5, 4);
sLinkedList.delete(4);
sLinkedList.insert(6, 7);
console.log(sLinkedList.contains(6));
console.log(sLinkedList);