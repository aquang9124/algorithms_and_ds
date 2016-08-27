function generatePasswords(pass: string) {
	let results: Array<string> = [];
	let permutations: any = {};

	// convert passwords into lists
	let arrPass: Array<string> = pass.split('');

	// traverse the list and add all permutations that are not already in
	// our object into results
	for (let i: number = 0; i < arrPass.length; i++) {
		let tmp: Array<string> = arrPass.slice();

		tmp[i] = tmp[i].toUpperCase() === tmp[i] ? tmp[i].toLowerCase() : tmp[i].toUpperCase();

		let testPass: string = tmp.join('');

		if (!permutations.hasOwnProperty(testPass)) {
			results.push(testPass);
		}

		permutations[testPass] = true;
	}

	return results;
}