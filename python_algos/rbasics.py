import turtle
import math
import random
# recursive
def r_list_sum(arr):
	if len(arr) == 1:
		return arr[0]
	else:
		return arr[0] + r_list_sum(arr[1:])

def list_sum(arr, total=0, i=0):
	if i == len(arr):
		return total
	else:
		total += arr[i]
		return list_sum(arr, total, i + 1)

def r_sigma(n):
	if n == 0 or n == 1:
		return n
	return n + r_sigma(n - 1)

def convert_to_str(n, base):
	str_rep = "0123456789ABCDEF"

	if n < base:
		return str_rep[n]
	else:
		return convert_to_str(n // base, base) + str_rep[n % base]

def r_rev_string(s):
	if len(s) == 1:
		return s[0]
	else:
		return r_rev_string(s[1:]) + s[0]

def clean_string(s):
	slist = list(s)
	i = 0

	while i < len(slist):
		test_char = slist[i].upper()
		if slist[i].lower() == test_char:
			slist.pop(i)
			i -= 1
		else:
			slist[i] = slist[i].lower()
		i += 1

	return ''.join(slist)

def r_palindrome(s):
	if isinstance(s, str):
		s = list(clean_string(s))

	if len(s) <= 1:
		return True
	else:
		left = s.pop(0)
		right = s.pop()
		if left != right:
			return False
		return r_palindrome(s)

# testing recursion with turtle
def tree(branch_len, t):
	if branch_len > 5:
		t.forward(branch_len)
		t.right(20)
		tree(branch_len - 15, t)
		t.left(40)
		tree(branch_len - 15, t)
		t.right(20)
		t.backward(branch_len)
	elif branch_len < 5:
		t.color('green')


def main():
	t = turtle.Turtle()
	my_win = turtle.Screen()
	t.left(90)
	t.up()
	t.backward(100)
	t.down()
	tree(75, t)
	my_win.exitonclick()

# tower of hanoi
def move_tower(height, from_pole, to_pole, with_pole):
	if height >= 1:
		move_tower(height - 1, from_pole, with_pole, to_pole)
		move_disk(from_pole, to_pole)
		move_tower(height - 1, with_pole, to_pole, from_pole)

def move_disk(fp, tp):
	print("Moving disk from", fp, "to", tp)

# fun with list comprehensions
def make_new_list(old_list, n):
	new_list = []
	for item in old_list:
		if item > n:
			new_list.append("Magical " + str(item))

	return new_list

# make_new_list using a list comprehension
def mnl_lc(old_list, n):
	new_list = ["Magical " + str(item) for item in old_list if item > n]
	return new_list

def doubled_odds(nums):
	return [n * 2 for n in nums if n % 2 == 1]

# print arr in reverse
def print_reverse(arr, idx=None):
	if idx == None:
		idx = len(arr) - 1

	if idx < 0:
		return True
	else:
		print(arr[idx])
		return print_reverse(arr, idx - 1)

# return x increased to the yth power
def x_to_y(x, y, total=0):
	if y == 0 and total == 0:
		return 1

	if total == 0:
		total = x

	if y == 0:
		return total

	y -= 1
	
	if y > 0:
		total *= x

	return x_to_y(x, y, total)

# linear search algorithm
def linear_search(arr, target):
	for i in range(len(arr)):
		if arr[i] == target:
			return True
	return False

# linear search that returns index of found item
def find_index(arr, item):
	for idx in range(len(arr)):
		if arr[idx] == item:
			return idx
	return False

# linear search that assumes an ordered list
def ordered_linear_search(arr, item):
	for i in range(len(arr)):
		if arr[i] == item:
			return i
		elif arr[i] > item:
			return False
	return False

# binary search
def binary_search(arr, item):
	first = 0
	last = len(arr) - 1

	while first <= last:
		mid = (first + 1) // 2
		if arr[mid] == item:
			return mid
		elif arr[mid] > item:
			last = mid - 1
		else:
			first = mid + 1

	return False

# recursive binary search using helper method
def rec_bin_search(arr, item):
	result = False

	def traverse(alist):
		if len(alist) == 0:
			return False
		else:
			mid = len(alist) // 2
			if alist[mid] == item:
				return True
			elif alist[mid] > item:
				return traverse(arr[:mid])
			else:
				return traverse(arr[mid + 1:])

	result = traverse(arr)
	return result

class HashTable:
	def __init__(self, size):
		self.collection = [None]*size

	def hashing(self, item):
		return item % len(self.collection)

	def add(self, item):
		slot = self.hashing(item)
		self.collection[slot] = item
		return self
	def search(self, item):
		slot = self.hashing(item)
		if self.collection[slot] == item:
			return self.collection[slot]

