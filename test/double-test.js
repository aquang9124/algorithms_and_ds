// set up test environment
var chai = require('chai');
var chaiSinon = require('sinon-chai');
var sinon = require('sinon');
var should = chai.should();

chai.use(chaiSinon);

// code that needs to be tested
var DListClass = require('./../dojo_algos/double');

// tests
describe('DoublyLinkedList', function() {
	var dll;

	beforeEach(function() {
		dll = new DListClass.DoublyLinkedList();
	});

	describe('insert', function() {

		it('should insert a value when head is null', function() {
			dll.insert(1);

			dll.head.data.should.equal(1);
			dll.tail.data.should.equal(1);
		});

		it('should handle multiple values', function() {
			dll.insert(2).insert(3).insert(4);

			dll.length.should.equal(3);
			dll.head.data.should.equal(2);
			dll.head.next.data.should.equal(3);
			dll.tail.data.should.equal(4);
		});
	});
});