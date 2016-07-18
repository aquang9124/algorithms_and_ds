# python json fun
fruits = [ 
{ "name" : "apples", 
"baskets" : [10,20,30] 
}, 
{ "name" : "bananas", 
"baskets" : [5,20,10,10] 
} 
]

def print_fruits(fruits):
	for x in range(0, len(fruits)):
		baskets_sum = 0
		print(fruits[x]['name'], end=" ")
		print(len(fruits[x]['baskets']), end=" ")

		for y in range(0, len(fruits[x]['baskets'])):
			baskets_sum += fruits[x]['baskets'][y]

		print(baskets_sum)

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

def has_adjacent_2(nums):

	for idx in range(0, len(nums)):
		if nums[idx] == 2 and nums[idx + 1] == 2:
			return True

	return False

def concat_two_lists(arr, arr_two):
	result = arr + arr_two

	return result

arr_three = concat_two_lists([1, 2], [3, 4])

def print_stars(string):
	length = len(string)

	print('*' * length)

def lattice_paths(x, y):
	if x == 0 and y == 0:
		return 1
	elif x < 0 or y < 0:
		return 0

	return lattice_paths(x - 1, y) + lattice_paths(x, y - 1)