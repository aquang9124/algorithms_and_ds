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

# fun with ordered linked list (singly)
class OLNode:
	def __init__(self, data):
		self.data = data
		self.nxt = None

	def __str__(self):
		return "Value: %s, Next -> %s" % ( str(self.data), self.nxt )

class OrderedList:
	def __init__(self):
		self.head = None

	def __str__(self):
		return str(self.head)

	def insert(self, data):
		new_node = OLNode(data)

		if self.head == None:
			self.head = new_node
		elif data <= self.head.data:
			new_node.nxt = self.head
			self.head = new_node
		else:
			c_node = self.head
			inserted = False

			while c_node.nxt != None and not inserted:
				if data <= c_node.nxt.data:
					new_node.nxt = c_node.nxt
					c_node.nxt = new_node
					inserted = True

				c_node = c_node.nxt

			if not inserted:
				c_node.nxt = new_node

		return self

oll = OrderedList()
oll.insert(2).insert(4).insert(3)
print(oll)