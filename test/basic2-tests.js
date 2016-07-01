//////////////////////////////////////////////
/*
				UNIT TESTS
											*/
//////////////////////////////////////////////
var mingleStrings = require('../dojo_algos/basicII').mingleStrings;
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
		var answer = false;

		test.should.equal(answer);
	});

	it('should return apbqcrdset', function() {
		var test = mingleStrings('abcde', 'pqrst');
		var answer = 'apbqcrdset';

		test.should.equal(answer);
	});
});