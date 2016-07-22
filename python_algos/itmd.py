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
		self.size = 0

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
		self.size += 1
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
		if self.is_empty():
			print("There are no nodes in this BST")
			return False

		min_node = self.root

		while min_node.l != None:
			min_node = min_node.l

		return min_node

	def max_value(self):
		if self.is_empty():
			print("There are no nodes in this BST")
			return False

		max_node = self.root

		while max_node.r != None:
			max_node = max_node.r

		return max_node

	def is_empty(self):
		return True if self.root == None else False

	def get_size(self):
		return self.size

	def remove_node(self, value):
		if self.is_empty():
			print("This BST is already empty!")
			return False

		p_node = self.root
		c_node = self.root
		branch = None

		while c_node != None:
			p_node = c_node

			if value <= c_node.value:
				c_node = c_node.l
				branch = 'left'
			else:
				c_node = c_node.r
				branch = 'right'
			
			if c_node.value == value:
				if branch == 'left':
					p_node.l = p_node.l.l
				else:
					p_node.r = p_node.r.r
				break

		return self

# convert kg to lbs
def kg_to_lbs(kg):
	return kg * 2.2

# is she overweight, height in inches, weight in lbs
def is_she_overweight(height, weight):
	default_weight = kg_to_lbs(53.1)
	incrementor = kg_to_lbs(1.36)
	offset = None
	ideal_weight = default_weight

	if height > 60:
		offset = height - 60
		ideal_weight = (offset * incrementor) + default_weight

	print("The ideal weight for this girl should be: %s, her actual weight is: %s" % (str(ideal_weight // 1), str(weight)))
	return ideal_weight < weight