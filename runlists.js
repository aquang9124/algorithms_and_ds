var SLL = require('./sllprac');

var singlyLinkedList = new SLL();

singlyLinkedList.insert(5);
singlyLinkedList.insert(6);
singlyLinkedList.insert(7);
console.log(singlyLinkedList.find(5));
singlyLinkedList.display();
