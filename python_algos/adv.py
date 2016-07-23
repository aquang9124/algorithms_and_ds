# deque data structure, double-ended queue
class Deque:
	def __init__(self):
		self.items = []

	def add_front(self, item):
		self.items.append(item)
		return self

	def add_rear(self, item):
		self.items.insert(0, item)
		return self

	def remove_front(self):
		return self.items.pop()

	def remove_rear(self):
		return self.items.pop(0)

	def size(self):
		return len(self.items)

	def is_empty(self):
		return self.items == []

def palindrome_check(s):
	p_deque = Deque()
	still_valid = True

	for i in range(len(s)):
		p_deque.add_front(s[i])

	while p_deque.size() > 1 and still_valid:
		rear = p_deque.remove_rear()
		front = p_deque.remove_front()

		if rear != front:
			still_valid = False

	return still_valid

# linked list data structure to represent unordered list
class ListNode:
	def __init__(self, data):
		self.data = data
		self.next_node = None

	def __str__(self):
		return "List Node has data of %s, next -> %s" % (str(self.get_data()), self.get_next())

	def get_data(self):
		return self.data

	def get_next(self):
		return self.next_node

	def set_data(self, new_data):
		self.data = new_data

	def set_next(self, new_next):
		self.next_node = new_next

class UnorderedList:
	def __init__(self):
		self.head = None

	def __str__(self):
		return str(self.head)

	def add(self, item):
		new_node = ListNode(item)

		if self.head == None:
			self.head = new_node
		else:
			c_node = self.head

			while c_node.next_node != None:
				c_node = c_node.next_node
			c_node.next_node = new_node

		return self

	def remove(self, item):
		c_node = self.head

		if self.head.data == item:
			self.head = self.head.next_node
		else:
			while c_node.next_node != None:
				if c_node.next_node.data == item:
					upcoming_node = c_node.next_node
					c_node.next_node = upcoming_node.next_node
				else:
					c_node = c_node.next_node

		return False

	def search(self, item):
		c_node = self.head
		located_node = False

		while c_node and not located_node:
			if c_node.data == item:
				located_node = True
			else:
				c_node = c_node.next_node

		return located_node

sll = UnorderedList()
sll.add(1).add(2).add(3).add(2)
print(sll.search(3))