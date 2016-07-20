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

		while too_long:
			length = len(str_list)

			if length == target_len:
				too_long = False
			else:
				str_list.pop()

	return ''.join(str_list)

# binary search tree
class BTNode:
	def __init__(self, value):
		self.value = value
		self.l = None
		self.r = None

	def __str__(self):
		return "Value: %s, Left child: %s, Right child: %s" % (str(self.value), self.l, self.r)

class BinarySearchTree:
	def __init__(self):
		self.root = None

	def __str__(self):
		return str(self.root)

	def insert(self, value):
		new_node = BTNode(value)

		if self.root == None:
			self.root = new_node
		else:
			c_node = self.root

			while True:
				if new_node.value <= c_node.value:
					if c_node.l == None:
						c_node.l = new_node
						break
					else:
						c_node = c_node.l
				else:
					if c_node.r == None:
						c_node.r = new_node
						break
					else:
						c_node = c_node.r
		return self

	def contains(self, value):
		if self.root.value == value:
			return True
		else:
			c_node = self.root

			while c_node != None:
				if c_node.value == value:
					return True
				elif value <= c_node.value:
					c_node = c_node.l
				else:
					c_node = c_node.r

		return False

	def min_value(self):
		min_node = self.root

		while min_node.l != None:
			min_node = min_node.l

		return min_node

	def max_value(self):
		max_node = self.root

		while max_node.r != None:
			max_node = max_node.r

		return max_node

bst = BinarySearchTree()
bst.insert(3).insert(5).insert(2).insert(4).insert(7)
print(bst.max_value())
