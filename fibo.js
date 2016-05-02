function fibonacci() {
	var arr = [0, 1],
		sum = 0,
		idx = 0,
		cNum = 0;
		
	while (cNum < 4000000) {
		cNum = arr[idx] + arr[idx + 1]
		if (cNum % 2 === 0)
		{
			sum += cNum;
		}

		arr.push(cNum);
		idx++;
	}

	return arr;
}

console.log(fibonacci());