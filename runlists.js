var SLL = require('./sllprac');

var singlyLinkedList = new SLL();

singlyLinkedList.insert(5);
singlyLinkedList.insert(6);
singlyLinkedList.insert(7);
singlyLinkedList.insert(8, 6);
singlyLinkedList.insert(5, 5);
singlyLinkedList.remove(6);
singlyLinkedList.display();
