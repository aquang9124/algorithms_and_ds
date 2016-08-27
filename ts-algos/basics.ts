// This function actually does not work properly. T-T
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

// calculate profits over time
function calcProfits(gain: number, loss: number, time: number): number {
	let sum: number = 0;
	let i: number;

	for (i = 0; i < time; i++) {
		sum += (gain - loss);
	}

	return sum;
}

// print 1 to a number N
function print1ToN(n: number): void {
	for (let i: number = 1; i < n; i++) {
		console.log(i);
	}
}

// recursively print 1 to N
function rPrinter(n: number, i: number = 0): void {
	if (i === n) {
		return;
	}

	console.log(i);
	rPrinter(n, i + 1);
}

// remove all negatives from array
function removeNegatives(arr: number[]): any {
	let numNegs: number = 0;
	let i: number;

	for (i = 0; i < arr.length; i++)
	{
		if (arr[i] >= 0) 
		{
			arr[i - numNegs] = arr[i];
		}
		else
		{
			numNegs++;
		} 
	}

	arr.length -= numNegs;
	return arr;
}

interface Person {
	name: string,
	age: number,
	hobbies: string[]
}

function printPerson(person: Person) {
	let result: string = "";

	person.hobbies.forEach((hobby: string, i: number) => {
		result += hobby;

		if (hobby !== person.hobbies[person.hobbies.length - 1]) {
			result += ", ";
		} else {
			result += ".";
		}
	});

	console.log(`${person.name} is ${person.age} years old and likes ${result}`);
}

let myPerson = {
	name: "Alex",
	age: 24,
	hobbies: ["programming", "eating", "playing games"]
};