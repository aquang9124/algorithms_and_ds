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

describe('thirdGreatest', function() {

	it('should return 3', function() {
		var test = algos.thirdGreatest([5, 3, 7]);

		test.should.equal(3);
	});

	it('should return 5', function() {
		var test = algos.thirdGreatest([-2, 0, 55, 7, 5]);

		test.should.equal(5);
	});
});

describe('repeaters', function() {

	it('should return 2', function() {
		var test = algos.repeaters('aabb');

		test.should.equal(2);
	});

	it('should return 0', function() {
		var test = algos.repeaters('abcde');

		test.should.equal(0);
	});

	it('should return 6', function() {
		var test = algos.repeaters('eiibbalvaseesva');

		test.should.equal(6);
	});
});