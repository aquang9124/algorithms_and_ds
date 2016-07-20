# find out if string is a palindrome
def is_palindrome(string):
	left = 0
	right = len(string) - 1

	while left <= right:
		if (string[left] != string[right]):
			return False

		left += 1
		right -= 1

	return True

def is_ana_palindrome(anagram):
	letters = {}
	count = 0

	for i in range(len(anagram)):
		if anagram[i] not in letters:
			letters[anagram[i]] = 0

		letters[anagram[i]] += 1

	# if a word contains more than one letter that occurs an odd num of times
	# it is not a palindrome
	for key in letters:
		if letters[key] % 2 == 1:
			count += 1

	if count > 1:
		return False
	else:
		return True
