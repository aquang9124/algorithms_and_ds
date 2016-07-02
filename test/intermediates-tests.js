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