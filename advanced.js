// Given two arrays make an object with the first array being the keys
function makeObj(arr1, arr2) {
	var obj = {};

	for (var i = 0; i < arr1.length; i++) {
		obj[arr1[i]] = arr2[i];
	}

	return obj;
}

console.log(makeObj([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]));

// Here's a different implementation that creates 'rows' and 'columns'
var columns = ['Street', 'City', 'State'],
	rows = [['123 North Mac St', 'Aspire', 'CA'], ['456 South Acer St', 'Freeruns', 'WA'], ['342 Apple Drive', 'Soda', 'NY']];
function formObj(arr1, arr2) {
	var objArr = [],
		idx = 0;

	while (idx < arr2.length) {
		var obj = {};
		for (var i = 0; i < arr1.length; i++) {
			obj[arr1[i]] = arr2[idx][i];
		}
		objArr.push(obj);
		idx++;
	}

	return objArr;
}

console.log(formObj(columns, rows));