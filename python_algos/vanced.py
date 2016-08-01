import random
# bubble sort in python
def bub_sort(arr):
	limit = 1
	swapped = True

	while swapped:
		swapped = False

		for i in range(0, len(arr) - limit):
			if arr[i] > arr[i + 1]:
				arr[i], arr[i + 1] = arr[i + 1], arr[i]
				swapped = True

		limit += 1

	return arr

# generates an array of random integers up to n length
def make_list(n):
	result_list = [random.randrange(1, 1001) for i in range(n)]
	return result_list

# selection sort
def selection_sort(arr):
	if len(arr) < 1:
		return arr

	idx = 0

	for i in range(len(arr)):
		min_val = arr[idx]
		min_idx = idx

		for j in range(idx, len(arr)):
			if arr[j] < min_val:
				min_val = arr[j]
				min_idx = j

		arr[idx], arr[min_idx] = arr[min_idx], arr[idx]
		idx += 1

	return arr

# insertion sort
def insertion_sort(arr):
	for i in range(len(arr)):
		if i != 0 and arr[i - 1] > arr[i]:
			for j in range(i, 0, -1):
				if arr[j - 1] > arr[j]:
					arr[j - 1], arr[j] = arr[j], arr[j - 1]

	return arr

def lattice_paths(x, y):
	if x == 0 and y == 0:
		return 1
	elif x < 0 or y < 0:
		return 0

	return lattice_paths(x - 1, y) + lattice_paths(x, y - 1)

class OrderedList:
	def __init__(self):
		self.head = None