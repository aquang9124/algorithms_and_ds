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