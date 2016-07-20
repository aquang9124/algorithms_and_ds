import math
# python json fun
fruits = [ 
{ "name" : "apples", 
"baskets" : [10,20,30] 
}, 
{ "name" : "bananas", 
"baskets" : [5,20,10,10] 
} 
]

# Print all the fruits
def print_fruits(fruits):
	for x in range(0, len(fruits)):
		baskets_sum = 0
		print(fruits[x]['name'], end=" ")
		print(len(fruits[x]['baskets']), end=" ")

		for y in range(0, len(fruits[x]['baskets'])):
			baskets_sum += fruits[x]['baskets'][y]

		print(baskets_sum)

# return sum of all elements in list except for those between a 6 and a 7
def sum67(nums):
	result = 0
	not_in_deadzone = True

	for idx in range(0, len(nums)):
		if nums[idx] == 6:
			not_in_deadzone = False

		if not_in_deadzone == True:
			result += nums[idx]

		if nums[idx] == 7:
			not_in_deadzone = True

	return result

# check to see if there are two 2's next to each other
def has_adjacent_2(nums):

	for idx in range(0, len(nums)):
		if nums[idx] == 2 and nums[idx + 1] == 2:
			return True

	return False

# concat two lists
def concat_two_lists(arr, arr_two):
	result = arr + arr_two

	return result

arr_three = concat_two_lists([1, 2], [3, 4])

# print stars equal to string's length
def print_stars(string):
	length = len(string)

	print('*' * length)

# find all possible paths in x by y lattice
def lattice_paths(x, y):
	if x == 0 and y == 0:
		return 1
	elif x < 0 or y < 0:
		return 0

	return lattice_paths(x - 1, y) + lattice_paths(x, y - 1)

# get all possible substrings of a string
def power_sets(string, substr="", depth=0, result_list=[]):
	if depth == len(string):
		result_list.append(substr)
	else:
		power_sets(string, substr, depth + 1, result_list)
		power_sets(string, substr + string[depth], depth + 1, result_list)

	return result_list

# iterate over a list in reverse and print values
def print_reverse(array, idx=None):
	if idx == None:
		idx = len(array) - 1
	elif idx < 0:
		return True

	print(array[idx])
	return print_reverse(array, idx - 1)

# flatten a list recursively
def flatten_list(element, result=[]):
	if not isinstance(element, list):
		result.append(element)
	else:
		for i in range(0, len(element)):
			flatten_list(element[i], result)
	return result

# Practice with try/except
def get_square_root(n):
	try:
		print(math.sqrt(n))
	except:
		print('%d is not a positive number!' %(n))

def climb_stairs(n):
	if n == 0:
		return 1
	elif n < 0:
		return 0
	
	return climb_stairs(n - 1) + climb_stairs(n - 2)

def climb_stairs_two(n):
	count = 0

	def do_climb(step=0):
		if step == n:
			nonlocal count
			count += 1
			return
		elif step > n:
			return

		do_climb(step + 1)
		do_climb(step + 2)

	do_climb()

	return count

def bubble_sort(array):
	limit = 1

	for idx1 in range(len(array)):
		for idx2 in range(len(array) - limit):
			if array[idx2] > array[idx2 + 1]:
				array[idx2], array[idx2 + 1] = array[idx2 + 1], array[idx2]
		
		limit += 1

	return array

def selection_sort(arr):
	sorted_portion = 0
	min_value = arr[0]
	min_idx = 0

	for x in range(len(arr) - 1):

		for y in range(sorted_portion, len(arr)):
			if arr[y] < min_value:
				min_value = arr[y]
				min_idx = y

		arr[sorted_portion], arr[min_idx] = arr[min_idx], arr[sorted_portion]

		sorted_portion += 1
		min_idx = sorted_portion
		min_value = arr[min_idx]

	return arr

def merge_sort(arr):
	if len(arr) < 2:
		return arr

	mid = math.floor(len(arr) / 2)

	return merge_arrays(merge_sort(arr[0:mid]), merge_sort(arr[mid:]))

def merge_arrays(list1, list2):
	result = []
	p1 = 0
	p2 = 0

	while p1 != len(list1) and p2 != len(list2):
		if list1[p1] <= list2[p2]:
			result += [list1[p1]]
			p1 += 1
		else:
			result += [list2[p2]]
			p2 += 1

	if p1 == len(list1):
		result += list2[p2:]
	elif p2 == len(list2):
		result += list1[p1:]

	return result

def insertion_sort(arr):
	for i in range(1, len(arr)):
		temp = i

		while (temp > 0 and arr[temp] < arr[temp - 1]):
			arr[temp - 1], arr[temp] = arr[temp], arr[temp - 1]
			temp -= 1

	return arr

def gcd(m, n):
	while m % n != 0:
		old_m = m
		old_n = n

		m = old_n
		n = old_m % old_n

	return n

# fun with oo python
class Fraction:

	def __init__(self, top, bottom):
		self.num = top
		self.denom = bottom

	def __str__(self):
		return str(self.num) + '/' + str(self.denom)

	def __add__(self, other_fraction):
		new_num = (self.num * other_fraction.denom) + (self.denom * other_fraction.num)
		new_denom = self.denom * other_fraction.denom
		common = gcd(new_num, new_denom)

		return Fraction(new_num // common, new_denom // common)

	def __sub__(self, other_fraction):
		new_num = (self.num * other_fraction.denom) - (self.denom * other_fraction.num)
		new_denom = self.denom * other_fraction.denom
		common = gcd(new_num, new_denom)

		return Fraction(new_num // common, new_denom // common)

	def __mul__(self, other_fraction):
		new_num = self.num * other_fraction.num
		new_denom = self.denom * other_fraction.denom
		common = gcd(new_num, new_denom)

		return Fraction(new_num // common, new_denom // common)

	def __truediv__(self, other_fraction):
		temp = other_fraction.num
		other_fraction.num = other_fraction.denom
		other_fraction.denom = temp

		new_num = self.num * other_fraction.num
		new_denom = self.denom * other_fraction.denom
		common = gcd(new_num, new_denom)

		return Fraction(new_num // common, new_denom // common)

	def __eq__(self, other):
		first_num = self.num * other.denom
		second_num = self.denom * other.num

		return first_num == second_num

# fun with class composition
class Bully:
	def __init__(self, name):
		self.name = name
		self.other = Child('Billy')

	def insult(self):
		print("Bully %s says they don't like %s!" % (self.name, self.other.name))

class Child:
	def __init__(self, name):
		self.name = name

	def __str__(self):
		return '%s is an instance of the Child class' % self.name


# logic gate class
class LogicGate:
	def __init__(self, n):
		self.label = n
		self.output = None

	def get_label(self):
		return self.label

	def get_output(self):
		self.output = self.perform_gate_logic()
		return self.output

class BinaryGate(LogicGate):
	def __init__(self, n):
		LogicGate.__init__(self, n)

		self.pin_a = None
		self.pin_b = None

	def get_pin_a(self):
		return int(input("Enter Pin A input for gate %s --> " % self.get_label()))

	def get_pin_b(self):
		return int(input("Enter Pin B input for gate %s --> " % self.get_label()))

	def set_next_pin(self, source):
		if self.pin_a == None:
			self.pin_a = source
		else:
			if self.pin_b == None:
				self.pin_b = source
			else:
				raise RunTimeError("Error: NO EMPTY PINS")

class UnaryGate(LogicGate):
	def __init__(self, n):
		super().__init__(n)

		self.pin = None

	def get_pin(self):
		return int(input("Enter Pin input for gate %s --> " % self.get_label()))

class AndGate(BinaryGate):
	def __init__(self, n):
		super().__init__(n)

	def __str__(self):
		return 'Gate %s' % self.get_label()

	def perform_gate_logic(self):
		a = self.get_pin_a()
		b = self.get_pin_b()

		if a == 1 and b == 1:
			return 1
		else:
			return 0

class OrGate(BinaryGate):
	def __init__(self, n):
		super().__init__(n)

	def __str__(self):
		return self.get_label()

	def perform_gate_logic(self):
		a = self.get_pin_a()
		b = self.get_pin_b()

		if a == 1 or b == 1:
			return 1
		else:
			return 0

class NotGate(UnaryGate):
	def __init__(self, n):
		super().__init__(n)

	def __str__(self):
		return self.get_label()

	def perform_gate_logic(self):
		pin = self.get_pin()

		if pin == 1:
			return 1
		else:
			return 0

class Connector:
	def __init__(self, fgate, tgate):
		self.from_gate = fgate
		self.to_gate = tgate

		tgate.set_next_pin(self)

	def get_from(self):
		return self.from_gate

	def get_to(self):
		return self.to_gate

def print_1_to_255():
	for i in range(1, 256):
		print(i)

	return True

def print_odds_n(n=256):
	if n < 1:
		print('N was less than 1!')
		return False

	for i in range(1, n):
		if i % 2 == 1:
			print(i)

	return True

def print_sum(n=256):
	the_sum = 0

	for i in range(1, n):
		the_sum += i
		print("The current sum is: %s" % str(the_sum))

	print(the_sum)
	return the_sum

def find_max(array):
	max_num = array[0]

	for i in range(len(array)):
		if max_num < array[i]:
			max_num = array[i]

	return max_num

def find_average(array):
	average = array[0]

	for i in range(1, len(array)):
		average += array[i]

	return average // len(array)

def create_odd_list():
	result = []

	for i in range(1, 256):
		if i % 2 == 1:
			result.append(i)

	return result

def greater_than_y(x, y):
	count = 0

	for i in range(len(x)):
		if x[i] > y:
			count += 1

	return count

def negatives_to_zeroes(nums):
	for x in range(len(nums)):
		if nums[x] < 0:
			nums[x] = 0

	return nums

def shift_list_values(arr):
	
	for i in range(len(arr) - 1):
		arr[i] = arr[i + 1]

	arr[len(arr) - 1] = 0

	return arr

def is_anagram_v1(s1, s2):
	s2_list = list(s2)

	pos1 = 0
	still_ok = True

	while pos1 < len(s1) and still_ok:
		pos2 = 0
		found = False

		while pos2 < len(s2) and not found:
			if s1[pos1] == s2_list[pos2]:
				found = True
			else:
				pos2 += 1

		if found:
			s2_list[pos2] = None
		else:
			still_ok = False
		pos1 += 1

	return still_ok

def is_anagram_v2(s1, s2):
	list_a = list(s1)
	list_b = list(s2)

	list_a.sort()
	list_b.sort()

	return list_a == list_b

def is_anagram_v3(s1, s2):
	letters = {}

	for i in range(len(s1)):
		if s1[i] not in letters:
			letters[s1[i]] = 0
		
		letters[s1[i]] += 1

	for j in range(len(s2)):
		if s2[j] in letters:
			letters[s2[j]] -= 1
			if letters[s2[j]] == 0:
				del letters[s2[j]]
		else:
			return False

	if letters == {}:
		return True
	else:
		return False