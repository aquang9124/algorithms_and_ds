var chai = require('chai');
var should = chai.should();
var algos = require('../dojo_algos/intermediates');

describe('isPrime', function() {

	it('should return true if prime', function() {
		var test = algos.isPrime(11);

		test.should.equal(true);
	});

	it('should return false if not prime', function() {
		var test = algos.isPrime(25);

		test.should.equal(false);
	});

	it('should return false if number is even and is not 2', function() {
		var test = algos.isPrime(4);

		test.should.equal(false);
	});

	it('should return true for 2', function() {
		var test = algos.isPrime(2);

		test.should.equal(true);
	});
});

describe('commonChars', function() {

	it('should return cd', function() {
		var test = algos.commonChars('abcd', 'cdf');
		var answer = "cd";

		test.should.equal(answer);
	});

	it('should return axa', function() {
		var test = algos.commonChars('biraxa', 'axaff');
		var answer = 'axa';

		test.should.equal(answer);
	});

	it('should return happytrees', function() {
		var test = algos.commonChars('treesthatarehappytreeshere', 'happytrees');
		var answer = 'happytrees';

		test.should.equal(answer);
	});
});

describe('rBinary', function() {
	var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	it('should handle a case to the farthest left', function() {
		var test = algos.rBinary(testArr, 1);
		var answer = 0;

		test.should.equal(answer);
	});

	it('should handle a case to the farthest right', function() {
		var test = algos.rBinary(testArr, 20);
		var answer = 19;

		test.should.equal(answer);
	});

	it('should return -1 when target is not found', function() {
		var test = algos.rBinary(testArr, 22);
		var answer = -1;

		test.should.equal(answer);
	});
});

describe('wonkyCoins', function() {

	it('should handle a simple case of 1', function() {
		var test = algos.wonkyCoins(1);
		var answer = 3;

		test.should.equal(answer);
	});

	it('should handle a larger case of 5', function() {
		var test = algos.wonkyCoins(5);
		var answer = 11;

		test.should.equal(answer);
	});
});