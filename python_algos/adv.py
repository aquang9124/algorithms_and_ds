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
# An unordered list is similar to an unsorted array
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
		self.size = 0

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

		self.size += 1
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

		self.size -= 1
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

	def is_empty(self):
		return self.size == 0

	def get_size(self):
		count = 0
		c_node = self.head

		while c_node != None:
			count += 1
			c_node = c_node.next_node

		return count

	def get_index(self, item):
		c_node = self.head
		position = 0

		while c_node:
			if c_node.data == item:
				return position
			else:
				position += 1
				c_node = c_node.next_node

		return False

	def insert(self, pos, item):
		c_node = self.head
		c_pos = 0
		inserted = False
		new_node = ListNode(item)

		if pos == c_pos:
			new_node.next_node = c_node
			self.head = new_node
			insert = True

		while c_node and not inserted:
			if c_pos + 1 == pos:
				new_node.next_node = c_node.next_node
				c_node.next_node = new_node
				inserted = True
			else:
				c_pos += 1
				c_node = c_node.next_node

		return inserted

	def pop(self, pos=None):
		if pos == None:
			pos = self.size - 1

		c_node = self.head
		c_pos = 0

		if c_pos == pos:
			popped_head = self.head
			self.head = self.head.next_node
			popped_head.next_node = None
			return popped_head

		while c_node:
			if c_pos + 1 == pos:
				popped_node = c_node.next_node
				c_node.next_node = popped_node.next_node
				return popped_node
			else:
				c_pos += 1
				c_node = c_node.next_node

		return False

# ordered list implementation using linked lists
class OLNode:
	def __init__(self, data):
		self.data = data
		self.next_node = None

	def __str__(self):
		return "Value: %s, Next -> %s" % (str(self.data), self.next_node)

class OrderedList:
	def __init__(self):
		self.head = None

	def __str__(self):
		return str(self.head)

	def add(self, item):
		new_node = OLNode(item)

		if self.head == None:
			self.head = new_node
		elif self.head.data > item:
			new_node.next_node = self.head
			self.head = new_node
		else:
			previous = None
			c_node = self.head
			added = False

			while c_node != None and not added:
				if c_node.data >= item:
					new_node.next_node = c_node
					previous.next_node = new_node
					added = True
				elif c_node.data < item:
					previous = c_node
					c_node = c_node.next_node

			previous.next_node = new_node

		return self

	def search(self, item):
		found = False
		if self.head == None:
			print('The Ordered List is empty!')
		elif self.head.data == item:
			found = True
		else:
			c_node = self.head

			while c_node != None and not found:
				if c_node.data == item:
					found = True
				elif c_node.next_node != None:
					if c_node.next_node.data > item:
						break
					else:
						c_node = c_node.next_node
				else:
					c_node = c_node.next_node
		return found

oll = OrderedList()
oll.add(3).add(5).add(1).add(7)
print(oll.search(7))