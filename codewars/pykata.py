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

print(add('1001', '10'))