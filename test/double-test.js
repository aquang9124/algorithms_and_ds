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

	describe('find', function() {
		beforeEach(function() {
			dll.insert(1).insert(2).insert(3).insert(4).insert(5);
		});

		it('should handle a case where head.data === value', function() {
			var test = dll.find(1);

			test.should.not.be.false;
			test.data.should.equal(1);
			test.next.data.should.equal(2);
		});

		it('should handle a case where the value is near the middle of the list', function() {
			var test = dll.find(3);

			test.should.not.be.false;
			test.prev.data.should.equal(2);
			test.data.should.equal(3);
			test.next.data.should.equal(4);
		});

		it('should handle a case where tail.data === value', function() {
			var test = dll.find(5);

			test.should.not.be.false;
			test.data.should.equal(5);
			test.prev.data.should.equal(4);
		});
	});

	describe('remove', function() {
		beforeEach(function() {
			dll.insert(1).insert(2).insert(3).insert(4);
		});

		it('should remove the head', function() {
			var test = dll.remove(1);

			test.should.be.true;
			dll.head.data.should.equal(2);
		});

		it('should remove the tail', function() {
			var test = dll.remove(4);

			test.should.be.true;
			dll.tail.data.should.equal(3);
			dll.tail.prev.data.should.equal(2);
		});

		it('should handle a case where node to be removed is neither head nor tail', function() {
			var test = dll.remove(2);

			test.should.be.true;
			dll.head.next.data.should.equal(3);
		});
	});

	describe('display', function() {
		var sandbox;

		beforeEach(function() {
			sandbox = sinon.sandbox.create();
			sandbox.stub(console, 'log');
			dll.insert(1).insert(2).insert(3);
		});

		afterEach(function() {
			sandbox.restore();
		});

		it('should print 1 - 3', function() {
			dll.display();

			( console.log.calledThrice ).should.be.true;
			( console.log.calledWith(1) ).should.be.true;
			( console.log.calledWith(2) ).should.be.true;
			( console.log.calledWith(3) ).should.be.true;
		});

		describe('displayReverse', function() {

			it('should print 3 - 1', function() {
				dll.displayReverse();

				( console.log.calledThrice ).should.be.true;
				( console.log.calledWith(3) ).should.be.true;
				( console.log.calledWith(2) ).should.be.true;
				( console.log.calledWith(1) ).should.be.true;
			});
		});
	});
});