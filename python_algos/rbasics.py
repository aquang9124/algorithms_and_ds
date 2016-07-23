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

print(convert_to_str(8, 2))