from timeit import Timer
import random
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
		return "Value: %s -> Left child: %s -> Right child: %s" % (str(self.value), self.l, self.r)

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

		# current node, will be used to traverse the tree after target is found
		c_node = self.root
		# parent node, will keep track of current node's parent node
		p_node = self.root
		# target node, if value exists in our tree this will represent the target node
		t_node = self.root
		# tells us if the target node has been found
		not_located = True

		while t_node != None and not_located:
			if t_node.value == value:
				c_node = t_node
				p_node = c_node
				not_located = False
			elif t_node.value >= value:
				t_node = t_node.l
			else:
				t_node = t_node.r

		if t_node == None:
			return False

		if t_node.l != None:
			while c_node.l != None:
				p_node = c_node
				c_node = c_node.l

			t_node.value = c_node.value
			p_node.l = None
		else:
			while c_node.r != None:
				p_node = c_node
				c_node = c_node.r

			t_node.value = c_node.value
			p_node.r = None

		return self

def reverse_string(string):
	alist = list(string)
	left = 0
	right = len(alist) - 1

	while left <= right:
		alist[left], alist[right] = alist[right], alist[left]

		left += 1
		right -= 1

	return ''.join(alist)

def can_win_nim(stones):
	return stones % 4 != 0

def add_digits(num):

	while num >= 10:
		num = (num // 10) + (num % 10)

	return num

def is_valid_parens(s):
	char_map = {
		'open_parens': [],
		'closed_parens': [],
	}

	for i in range(len(s)):
		if s[i] == '(':
			char_map["open_parens"].append(i)
		elif s[i] == ')':
			char_map["closed_parens"].append(i)

	if len(char_map['open_parens']) != len(char_map['closed_parens']):
		return False
	else:
		for x in range(len(char_map['open_parens'])):
			if char_map['open_parens'][x] > char_map['closed_parens'][x]:
				return False

	return True

# alt is_valid_parens
def alt_valid_parens(s):
	num_open = 0
	num_closed = 0

	for i in range(len(s)):
		if num_closed > num_open:
			return False

		if s[i] == '(':
			num_open += 1

		if s[i] == ')':
			num_closed += 1

	if num_open == num_closed:
		return True
	else:
		return False

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

def concat_test():
	arr = []
	for i in range(1000):
		arr += [i]
	return arr

def append_test():
	arr = []
	for i in range(1000):
		arr.append(i)
	return arr

def comp_test():
	arr = [i for i in range(1000)]
	return arr

def range_test():
	arr = list(range(1000))
	return arr

# stack data structure
class Stack:
	def __init__(self):
		self.store = []

	def push(self, data):
		self.store.append(data)
		return self

	def peek(self):
		if len(self.store) < 1:
			print("There's nothing on the stack!")
		else:
			return self.store[len(self.store) - 1]

	def pop(self):
		if self.size() > 0:
			return self.store.pop()
		else:
			return -1

	def is_empty(self):
		return True if self.size() < 1 else False

	def size(self):
		return len(self.store)

def stack_rev_string(s):
	stack = Stack()
	stack.store = list(s)
	left = 0
	right = stack.size() - 1

	while left <= right:
		stack.store[left], stack.store[right] = stack.store[right], stack.store[left]
		left += 1
		right -= 1

	return ''.join(stack.store)

def balance_parens(s):
	stack = Stack()

	for i in range(len(s)):
		if s[i] == '(':
			stack.push(i)

		if s[i] == ')':
			result = stack.pop()
			if result == -1:
				return False

	if stack.size() == 0:
		return True
	else:
		return False

def par_checker(s):
	stack = Stack()
	balanced = True
	idx = 0

	while idx < len(s) and balanced:
		symbol = s[idx]
		if symbol == '(':
			stack.push(idx)
		else:
			if stack.is_empty():
				balanced = False
			else:
				stack.pop()
		idx += 1

	if balanced and stack.is_empty():
		return True
	else:
		return False

def valid_symbols(s):
	stack = Stack()
	balanced = True
	i = 0

	while i < len(s) and balanced:
		symbol = s[i]
		if symbol in "({[":
			stack.push(symbol)
		else:
			if stack.is_empty():
				balanced = False
			else:
				top = stack.pop()
				if not matches(top, symbol):
					balanced = False
		i += 1

	if stack.is_empty() and balanced:
		return True
	else:
		return False

def matches(opener, closer):
	openers = "({["
	closers = ")}]"

	return openers.index(opener) == closers.index(closer)

def divide_by_two(num):
	stack = Stack()

	while num >= 1:
		rem = num % 2
		num = num // 2
		stack.push(rem)

	binary_string = ""

	while not stack.is_empty():
		binary_string += str(stack.pop())

	return binary_string

# queue data structure, FIFO
class Queue:
	def __init__(self):
		self.items = []

	def enqueue(self, value):
		self.items.insert(0, value)
		return self

	def dequeue(self):
		return self.items.pop()

	def is_empty(self):
		return True if self.size() > 0 else False

	def size(self):
		return len(self.items)

def hot_potato(names, num):
	q = Queue()
	count = 0

	for i in range(len(names)):
		q.enqueue(names[i])

	while q.size() > 1:
		if count == num:
			q.dequeue()
			count = 0
		else:
			person = q.dequeue()
			q.enqueue(person)
			count += 1

	return q.items

class Printer:
	def __init__(self, ppm):
		self.speed = ppm
		self.current_task = None
		self.time_remaining = 0

	def tick(self):
		if self.current_task != None:
			self.time_remaining -= 1
			if self.time_remaining <= 0:
				self.current_task = None

	def busy(self):
		if self.current_task != None:
			return True
		else:
			return False

	def start_next(self, new_task):
		self.current_task = new_task
		self.time_remaining = new_task.get_pages() * 60/self.speed

class Task:
	def __init__(self, time):
		self.time_stamp = time
		self.pages = random.randrange(1, 21)

	def get_stamp(self):
		return self.time_stamp

	def get_pages(self):
		return self.pages

	def wait_time(self):
		return current_time - self.time_stamp