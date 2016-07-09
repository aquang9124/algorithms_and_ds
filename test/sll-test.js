// set up chai
var chai = require('chai');
var should = chai.should();

// get the object for sll
var ListClass = require('./../dojo_algos/sll');

// tests
describe('SinglyLinkedList', function() {
	var sll;

	beforeEach(function() {
		sll = new ListClass.SinglyLinkedList();
	});

	describe('insert', function() {

		it('should be able to insert new nodes when head === null', function() {
			sll.insert(1);

			sll.head.data.should.equal(1);
			sll.tail.data.should.equal(1);
		});

		it('should update tail properly after inserting new nodes', function() {
			sll.insert(1).insert(2).insert(777);

			sll.head.data.should.equal(1);
			sll.head.next.data.should.equal(2);
			sll.tail.data.should.equal(777);
		});

		it('should keep the original order of insertion', function() {
			sll.insert(1).insert(2).insert(3).insert(4);
			var count = 0, current = sll.head;

			while (current) {
				current.data.should.equal(++count);
				current = current.next;
			}
		});
	});

	describe('find', function() {

		it('should return the head if data === head.data', function() {
			sll.insert(1);
			var test = sll.find(1);
			var answer = sll.head;

			test.should.equal(answer);
		});

		it('should return the tail if data === tail.data', function() {
			sll.insert(1).insert(9);
			var test = sll.find(9);
			var answer = sll.tail;

			test.should.equal(answer);
		});

		it('should find a node that is not the head or tail', function() {
			sll.insert(1).insert(2).insert(3);
			var test = sll.find(2);
			var answer = sll.head.next;

			test.should.equal(answer);
		});
	});

	describe('remove', function() {
		
		it('should remove the head node if head.data === data', function() {
			sll.insert(1).insert(2).insert(3);
			var test = sll.remove(1);
			var answer = 2;

			test.head.data.should.equal(answer);
		});

		it('should remove a node if node.data === data without losing nodes', function() {
			sll.insert(1).insert(2).insert(3).insert(4).insert(5);
			var test = sll.remove(4), 
				answer = 11, 
				sum = 0, 
				current = sll.head;

			while (current) {
				sum += current.data;
				current = current.next;
			}

			// check to see if 4 has been removed
			sum.should.equal(answer);
			// make sure tail is still 5
			test.tail.data.should.equal(5);
		});

		it('should remove the tail node if tail.data === data and update new tail', function() {
			sll.insert(1).insert(2).insert(3).insert(4);
			var test = sll.remove(4);
			var answer = 3;

			test.tail.data.should.equal(answer);
		});
	});
});