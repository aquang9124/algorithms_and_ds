import turtle
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
