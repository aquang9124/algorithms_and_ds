# python json parsing
import json

fruits = [ 
{ "name" : "apples", 
"baskets" : [10,20,30] 
}, 
{ "name" : "bananas", 
"baskets" : [5,20,10,10] 
} 
]

for x in range(0, len(fruits)):
	baskets_sum = 0
	print(fruits[x]['name'], end=" ")
	print(len(fruits[x]['baskets']), end=" ")

	for y in range(0, len(fruits[x]['baskets'])):
		baskets_sum += fruits[x]['baskets'][y]

	print(baskets_sum)