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
	});

	it('should handle a case to the farthest right', function() {
		var test = algos.rBinary(testArr, 20);
		var answer = 19;
	});

	it('should return -1 when target is not found', function() {
		var test = algos.rBinary(testArr, 22);
		var answer = -1;
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

describe('getGCF', function() {

	it('should return 5', function() {
		var test = algos.getGCF(10, 45);

		test.should.equal(5);
	});
});

describe('sumNums', function() {

	it('should return 3', function() {
		var test = algos.sumNums(2);

		test.should.equal(3);
	});

	it('should return 15', function() {
		var test = algos.sumNums(5);

		test.should.equal(15);
	});
});

describe('dasherizeNum', function() {

	it('should return 20-3', function() {
		var test = algos.dasherizeNum(203);

		test.should.equal('20-3');
	});

	it('should return 3-3-3', function() {
		var test = algos.dasherizeNum(333);

		test.should.equal('3-3-3');
	});

	it('should equal 3-0-3', function() {
		var test = algos.dasherizeNum(303);

		test.should.equal('3-0-3');
	});

	it('should return 3-22-3', function() {
		var test = algos.dasherizeNum(3223);

		test.should.equal('3-22-3');
	});
});

describe('capWords', function() {

	it('should return Apple Trees', function() {
		var test = algos.capWords('apple trees');
		var answer = 'Apple Trees';

		test.should.equal(answer);
	});

	it('should return This Is A Sentence', function() {
		var test = algos.capWords('this is a sentence');
		var answer = 'This Is A Sentence';

		test.should.equal(answer);
	});
});

describe('nthPrime', function() {

	it('should return 11', function() {
		var test = algos.nthPrime(5);

		test.should.equal(11);
	});

	it('should return 2', function() {
		var test = algos.nthPrime(1);

		test.should.equal(2);
	});

	it('should return 541', function() {
		var test = algos.nthPrime(100);

		test.should.equal(541);
	});
});

describe('countVowels', function() {

	it('should return 5', function() {
		var test = algos.countVowels('eeeee');

		test.should.equal(5);
	});

	it('should return 2', function() {
		var test = algos.countVowels('aye');

		test.should.equal(2);
	});
});

describe('scrambleStr', function() {

	it('should return dbca', function() {
		var test = algos.scrambleStr('abcd', [3, 1, 2, 0]);
		var answer = 'dbca';

		test.should.equal(answer);
	});

	it('should return vkaorm', function() {
		var test = algos.scrambleStr("markov", [5, 3, 1, 4, 2, 0]);
		var answer = 'vkaorm';

		test.should.equal(answer);
	});
});

describe('mostCommonChar', function() {

	it('should return ["a", 2]', function() {
		var test = algos.mostCommonChar('abca');
		var answer = ["a", 2];

		test.should.eql(answer);
	});

	it('should return ["b", 3]', function() {
		var test = algos.mostCommonChar("abbab");
		var answer = ["b", 3];

		test.should.eql(answer);
	});
});

describe('bigPalindrome', function() {

	it('should return effe', function() {
		var test = algos.bigPalindrome("abcbdeffe");
		var answer = 'effe';

		test.should.equal(answer);
	});

	it('should return bcb', function() {
		var test = algos.bigPalindrome('abcbd');
		var answer = 'bcb';

		test.should.equal(answer);
	});

	it('should return abba', function() {
		var test = algos.bigPalindrome('abba');
		var answer = 'abba';

		test.should.equal(answer);
	});

	it('should return zzz', function() {
		var test = algos.bigPalindrome('azzzg');
		var answer = 'zzz';

		test.should.equal(answer);
	});
});

describe('wonkyCoins', function() {

	it('should handle a simple case of 1', function() {
		var test = algos.wonkyCoins(1);
	});

	it('should handle a larger case of 5', function() {
		var test = algos.wonkyCoins(5);
		var answer = 11;
	});
});
describe('nearestLarger', function() {

	it('should handle a simple case to the right', function() {
		var test = algos.nearestLarger([2, 3, 4, 8], 2);
		var answer = 3;

		test.should.equal(answer);
	});

	it('should handle a simple case to the left', function() {
		var test = algos.nearestLarger([2, 8, 4, 3], 2);
		var answer = 1;

		test.should.equal(answer);
	});

	it('should choose the left case in a tie', function() {
		var test = algos.nearestLarger([2, 6, 4, 8], 2);
		var answer = 1;

		test.should.equal(answer);
	});

	it('should handle a case with an answer > 1 to the right', function() {
		var test = algos.nearestLarger([2, 4, 3, 8], 1);
		var answer = 3;

		test.should.equal(answer);
	});

	it('should handle a case with an answer > 1 distance to the left', function() {
		var test = algos.nearestLarger([8,2,4,3], 2);
		var answer = 0;

		test.should.equal(answer);
	});

	it('should return false if no larger number is found', function() {
		var test = algos.nearestLarger([2, 6, 4, 8], 3);
		var answer = false;

		test.should.equal(answer);
	});
});

describe('validAnagram', function() {

	it('should return true when inputs are anagrams', function() {
		var test = algos.validAnagram('anagram', 'nagaram');
		var answer = true;

		test.should.equal(answer);
	});

	it('should return false when inputs are not anagrams', function() {
		var test = algos.validAnagram('rat', 'car');
		var answer = false;

		test.should.equal(answer);
	});

	it('should return false when one string is longer than the other', function() {
		var test = algos.validAnagram('sss', 'ssss');
		var answer = false;

		test.should.equal(answer);
	});
});