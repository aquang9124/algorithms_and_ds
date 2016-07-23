# deque data structure, double-ended queue
class Deque:
	def __init__(self):
		self.items = []

	def add_front(self, item):
		self.items.insert(0, item)
		return self

	def add_rear(self, item):
		self.items.append(item)
		return self