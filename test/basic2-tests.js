//////////////////////////////////////////////
/*
				UNIT TESTS
											*/
//////////////////////////////////////////////
var mingleStrings = require('../dojo_algos/basicII').mingleStrings;
var permuteString = require('../dojo_algos/basicII').permuteString;
var insertionSort = require('../dojo_algos/basicII').insertionSort;
var printReverse = require('../dojo_algos/basicII').printReverse;
var commonChars = require('../dojo_algos/basicII').commonChars;
var flatten = require('../dojo_algos/basicII').flatten;
var flatArr = require('../dojo_algos/basicII').flatArr;
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
	});
});

describe('insertionSort', function() {

	it('should return [1, 2, 3, 4, 5, 6, 7, 8, 9]', function() {
		var test = insertionSort([9, 3, 5, 2, 1, 7, 4, 8, 6]);
		var answer = [1, 2, 3, 4, 5, 6, 7, 8, 9];

		test.should.eql(answer);
	});

	it('should return []', function() {
		var test = insertionSort([]);

		test.should.eql([]);
	});
});

describe('printReverse', function() {

	it('should return [4, 3, 2, 1]', function() {
		var test = printReverse([1, 2, 3, 4]);
		var answer = [4, 3, 2, 1];

		test.should.eql(answer);
	});
});

describe('commonChars', function() {

	it('should return cd', function() {
		var test = commonChars('abcde', 'cdf');
		var answer = 'cd';

		test.should.equal(answer);
	});
});

describe('flatten', function() {

	it('should return a flattened array', function() {
		var test = flatten([[1], [[2, 3, 4]], [5]]);
		var answer = [1, 2, 3, 4, 5];

		test.should.eql(answer);
	});
});

describe('flatArr', function() {

	it('should return a flat array', function() {
		var test = flatArr([[1], [[2, 3, 4]], [5]]);
		var answer = [1, 2, 3, 4, 5];

		test.should.eql(answer);
	});
});