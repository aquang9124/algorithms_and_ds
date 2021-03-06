# imports
from functools import reduce
import random

# powers of two
def powers_of_two(n):
	return [2**i for i in range(n + 1)]

def add_binary(a,b):
    #your code here
    sum = a + b
    return bin(sum)[2:]

def xo(s):
	s = s.lower()
	x = 0
	o = 0

	for i in range(len(s)):
		if s[i] == 'x':
			x += 1
		elif s[i] == 'o':
			o += 1

	return x == o

def generate_arr(n):
	return [random.randrange(1, 200) for i in range(n)]

def bub_sort(arr):
	swapped = True
	limit = 1

	while swapped:
		swapped = False

		for i in range(len(arr) - limit):
			if arr[i] > arr[i + 1]:
				arr[i], arr[i + 1] = arr[i + 1], arr[i]
				swapped = True

	return arr

def is_square(n):
	num = 1

	if n < 0:
		return False

	while True:
		n -= num

		if n == 0:
			return True
		elif n < 0:
			return False

		num += 2

def add(a,b):
	#your code here
	sum_one = 0
	sum_two = 0
	curr_num = 1

	for i in range(len(a) - 1, -1, -1):
		if a[i] == '1':
			sum_one += curr_num
		curr_num += curr_num

	curr_num = 1

	for j in range(len(b) - 1, -1, -1):
		if b[j] == '1':
			sum_two += curr_num
		curr_num += curr_num

	return bin(sum_one + sum_two)[2:]

def max_rot(n):
	# your code
	max_n = n
	rotations = len(str(n)) - 1
	init_idx = -1
	n = list(str(n))

	while rotations > 0:
		for i in range(init_idx + 1, len(n) - 1):
			n[i], n[i + 1] = n[i + 1], n[i]
		init_idx += 1
		rotations -= 1
		c_num = int(''.join(n))
		if c_num > max_n:
			max_n = c_num

	return max_n

def climb_stairs(n):
	if n == 0:
		return 1
	elif n < 0:
		return 0

	return climb_stairs(n - 1) + climb_stairs(n - 2)

def dist_from_avg(arr):
	fn = lambda s,v: s + v
	avg = reduce(fn, arr) / len(arr)
	results = [round(avg - i, 2) for i in arr]

	return results

# sum array without max and min values
def sum_array(arr):
	#your code here
	if arr == None or len(arr) < 3:
		return 0

	max_val = arr[0]
	min_val = arr[0]
	sum_arr = 0
	count_min = 0
	count_max = 0

	for i in range(len(arr)):
		if max_val < arr[i]:
			max_val = arr[i]

		if min_val > arr[i]:
			min_val = arr[i]

	for j in range(len(arr)):
		if arr[j] != max_val and arr[j] != min_val:
			sum_arr += arr[j]
		elif arr[j] == max_val and count_max > 0:
			sum_arr += arr[j]
		elif arr[j] == min_val and count_min > 0:
			sum_arr += arr[j]
		elif arr[j] == max_val:
			count_max += 1
		elif arr[j] == min_val:
			count_min += 1

	return sum_arr

# here's a more pythonic way
def sum_list(arr):
	if len(arr) < 3 or arr == None:
		return 0

	return sum(arr) - max(arr) - min(arr)

# nums with digit inside
def num_with_digit(x, d):
	results = [0, 0, 0]

	for i in range(1, x + 1):
		num = str(i)

		if str(d) in num:
			results[0] += 1
			results[1] += i

			if results[2] == 0:
				results[2] = 1

			results[2] *= i

	return results

def mango(quantity, price):
	total = 0
	count = 0

	for i in range(quantity):
		if count == 2:
			count = 0
			continue

		total += price
		count += 1

	return total

def word_search(query, seq):
	query = query.lower()
	results = []

	for i in range(len(seq)):
		word = seq[i].lower()

		if query in word:
			results.append(seq[i])

	return results if len(results) > 0 else None

def reverser(s):
	s = list(s)
	left = 0
	right = len(s) - 1

	while left <= right:
		s[left], s[right] = s[right], s[left]

		left += 1
		right -= 1

	return ''.join(s)