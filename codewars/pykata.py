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