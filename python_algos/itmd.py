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

# string encode
def string_encode(string):
	result_string = ""
	i = 0

	while i < len(string):
		idx = i
		char = string[i]
		count = 0
		still_ok = True

		while idx < len(string) and still_ok:
			if string[idx] == char:
				count += 1
				idx += 1
			else:
				still_ok = False

		result_string += "%s%s" % (char, str(count))
		i = idx

	return result_string

# shorten string length
def shorten_str(string, target_len):
	length = len(string)
	str_list = list(string)

	while length != target_len:
		i = 0
		too_long = True

		while i < len(str_list) and too_long:
			length = len(str_list)

			if length == target_len:
				too_long = False
			elif str_list[i] == " ":
				front = str_list[0:i]
				mid = i + 1
				rest = str_list[mid:]
				str_list = front + rest
				
			i += 1

	return ''.join(str_list)

print(shorten_str("It's a wo nd erful life! ", 20))