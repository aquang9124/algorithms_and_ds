//////////////////////////////////////////////
/*
				UNIT TESTS
											*/
//////////////////////////////////////////////
var mingleStrings = require('../dojo_algos/basicII').mingleStrings;
var permuteString = require('../dojo_algos/basicII').permuteString;
var chai = require('chai');
var should = require('chai').should();

describe('mingleStrings', function() {

	it('should return hraacnkkeerr', function() {
		var test = mingleStrings('hacker', 'ranker');
		var answer = 'hraacnkkeerr';

		test.should.eql(answer);
	});

	it('should return false when lengths are unequal', function() {
		var test = mingleStrings('abc', 'defg');

		test.should.equal(false);
	});

	it('should return apbqcrdset', function() {
		var test = mingleStrings('abcde', 'pqrst');
		var answer = 'apbqcrdset';

		test.should.equal(answer);
	});
});

describe('permuteString', function() {

	it('should return badcqpsr', function() {
		var test = permuteString('abcdpqrs');
		var answer = 'badcqpsr';

		test.should.equal(answer);
	});

	it('should return false when string length is not equal', function() {
		var test = permuteString('aba');

		test.should.equal(false);
	})
});