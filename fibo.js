function fibonacci() {
	var arr = [0, 1],
		sum = 0;
			
	while (arr[0] + arr[1] < 4000000) {
		var cNum = arr[0] + arr[1];
		
		if (cNum % 2 === 0)
		{
			sum += cNum;
		}

		arr.push(cNum);
		arr.shift();
	}

	return sum;
}

console.log(fibonacci());