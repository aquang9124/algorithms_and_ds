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
	});
});