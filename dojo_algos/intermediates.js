'use strict';

// is a prime number
function isPrime(num) {
	if (num % 2 === 0 && num !== 2) {
		return false;
	}

	var divisor = 2,
		limit = Math.floor(num / 2);

	while (divisor < limit) {
		if (num % divisor === 0) {
			return false;
		}

		divisor++;
	}

	return true;
}

// return subsequence of two strings
function commonChars(x, y) {
	var result = "";

	function findCommons(xEnd, yEnd) {
		if (xEnd === x.length) {
			return;
		}
		
		if (x[xEnd] === y[yEnd]) {
			result += x[xEnd];
			findCommons(xEnd + 1, yEnd + 1);
		}
		else {
			findCommons(xEnd + 1, yEnd);
		}
	}

	findCommons(0, 0);
	return result;
}

// iterative binary search
function binarySearch(arr, x) {
	var left = 0,
		right = arr.length - 1,
		mid = Math.floor((right + left) / 2);

	while (left <= right) {
		mid = Math.floor((right + left) / 2);
		if (arr[mid] === x) {
			return mid;
		}

		if (arr[mid] > x) {
			right = mid - 1;
		}

		if (arr[mid] < x) {
			left = mid + 1;
		}
	}

	return -1;
}

// recursive binary search
function rBinary(arr, x, min, max, mid) {
	if (min === undefined) {
		min = 0;
		max = arr.length - 1;
	}

	mid = Math.floor((max + min) / 2);

	if (min > max) {
		return -1;
	}

	if (arr[mid] > x) {
		max = mid - 1;
		return rBinary(arr, x, min, max, mid);
	}
	else if (arr[mid] < x) {
		min = mid + 1;
		return rBinary(arr, x, min, max, mid);
	}
	else {
		return mid;
	}
}

// wonky coins
function wonkyCoins(n) {
	if (n === 0) {
		return 1;
	}

	return wonkyCoins(Math.floor(n / 2)) + wonkyCoins(Math.floor(n / 3)) + wonkyCoins(Math.floor(n / 4));
}
// return third greatest number in the array, assume that array has at least 3 numbers
function thirdGreatest(arr) {
	var max = arr[0],
		second = -Infinity,
		third = -Infinity,
		idx = 1;

	while (idx < arr.length) {
		if (arr[idx] > max) {
			third = second;
			second = max;
			max = arr[idx];
		}
		else if (arr[idx] > second && arr[idx] < max) {
			third = second;
			second = arr[idx];
		}
		else if (arr[idx] > third && arr[idx] < second) {
			third = arr[idx];
		}

		idx++;
	}

	return third;
}

// return the number of letters that repeat. Keep in mind this is not the number of times each letter repeats.
function repeaters(str) {
	var letters = {};
	var count = 0;

	for (var i = 0; i < str.length; i++) {
		if (!letters.hasOwnProperty(str[i])) {
			letters[str[i]] = 0;
		}

		letters[str[i]] += 1;
	}

	for (var key in letters) {
		if (letters[key] > 1) {
			count++;
		}
	}

	return count;
}

// get greatest common factor using Euclidean formula
function getGCF(x, y) {
	if (x < y) {
		var temp = x;
		x = y;
		y = temp;
	}

	if (x % y === 0) {
		return y;
	}
	else if (x === (y * Math.floor(x/y)) + (x % y)) {
		var newY = x % y;
		return getGCF(y, newY);
	}
}

// sum nums
function sumNums(num) {
	var sum = 0;

	for (var i = num; i > 0; i--) {
		sum += i;
	}

	return sum;
}

// dasherize num
function dasherizeNum(num) {
	num = num.toString();
	var result = "",
		prev;

	for (var i = 0; i < num.length; i++) {
		if (i === 0 && num[i] % 2 === 1) {
			result = num[i] + "-";
			prev = '-';
		}
		else if (num[i] % 2 === 0) {
			result += num[i];
			prev = num[i];
		}
		else if (i === num.length - 1 && num[i] % 2 === 1) {
			result += ('-' + num[i]);
		}
		else if (num[i] % 2 === 1 && prev !== '-') {
			result += ('-' + num[i] + '-');
			prev = '-';
		}
		else if (num[i] % 2 === 1) {
			result += num[i];
			prev = num[i];
		}
	}

	return result;
}

// is prime number
function nthPrime(n) {
	var countPrimes = 0,
		currentPrime = 2,
		num = 2;

	while (countPrimes < n) {
		if (isPrime(num)) {
			countPrimes++;
			currentPrime = num;
		}

		num++;
	}

	return currentPrime;
}

// capitalize words
function capWords(str) {
	str = str.split(' ');

	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].split('');
		str[i][0] = str[i][0].toUpperCase();
		str[i] = str[i].join('');
	}

	return str.join(' ');
}

// count vowels in a string, treat y as a consonant
function countVowels(str) {
	var vowelCount = 0;

	for (var i = 0; i < str.length; i++) {
		var char = str[i].toLowerCase();

		if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
			vowelCount++;
		}
	}

	return vowelCount;
}

// take in a string and an int[], return a new string with the input string's characters in the order specified
function scrambleStr(str, order) {
	var result = "";

	for (var i = 0; i < order.length; i++) {
		result += str[order[i]];
	}

	return result;
}

// returns an array containing most common character and the number of times it appeared
function mostCommonChar(str) {
	var	count = 0,
		char = str[0],
		letters = {};

	for (var i = 0; i < str.length; i++) {
		if (!letters.hasOwnProperty(str[i])) {
			letters[str[i]] = 0;
		}

		letters[str[i]] += 1;
	}

	for (var key in letters) {
		if (letters[key] > count) {
			char = key;
			count = letters[key];
		}
	}

	return [char, count];
}

// longest palindrome substring
function bigPalindrome(str) {
	let longest = "";

	for (let i = 0; i < str.length; i++) {
		let word = "";
		let lWord = "";
		let rWord = "";
		let centerOrig = str[i];
		let center = str[i];
		let left = i - 1;
		let right = i + 1;

		while (centerOrig === str[right]) {
			center += str[right];
			right += 1;
		}

		while (left >= 0 && right < str.length && str[left] === str[right]) {
			lWord += str[left];
			rWord += str[right];

			left--;
			right++;
		}

		word = (lWord + center + rWord);

		if (word.length > longest.length) {
			longest = word;
		}
	}

	return longest;
}

// return index of nearest larger number, left number wins ties
function nearestLarger(arr, idx) {
	var left = idx - 1,
		right = idx + 1,
		num = arr[idx];

	while (left >= 0 || right < arr.length) {
		if (arr[left] > num) {
			return left;
		}
		else if (arr[right] > num) {
			return right;
		}

		left--;
		right++;
	}

	return false;
}

// valid anagram
function validAnagram(s, t) {
	if (s.length !== t.length) {
		return false;
	}

	var idx = 0;

	while (idx < s.length) {
		if (t.indexOf(s[idx]) === -1) {
			return false;
		}

		idx++;
	}

	return true;
}

// alternative valid anagram implementation with faster runtime
function fastValid(s, t) {
	if (s.length !== t.length) {
		return false;
	}

	s = s.split('').sort();
	t = t.split('').sort();

	return s.join('') === t.join('');
}

module.exports = {
	isPrime: isPrime,
	commonChars: commonChars,
	rBinary: rBinary,
	wonkyCoins: wonkyCoins,
	thirdGreatest: thirdGreatest,
	repeaters: repeaters,
	getGCF: getGCF,
	sumNums: sumNums,
	dasherizeNum: dasherizeNum,
	capWords: capWords,
	nthPrime: nthPrime,
	countVowels: countVowels,
	scrambleStr: scrambleStr,
	mostCommonChar: mostCommonChar,
	bigPalindrome: bigPalindrome,
	nearestLarger: nearestLarger,
	validAnagram: validAnagram
};