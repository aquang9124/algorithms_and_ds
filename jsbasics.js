// Function to check if a number is prime
function checkPrime(n) {
	var divisor = 2;
	// A prime number is only divisible by itself and 1
	// We don't need to check if it's divisible by 1 because we know it is.
	// Start at 2 and if we reach 'n' without being able to divide evenly
	// then we know the number is a prime number.
	while (divisor < n) {
		if (n % divisor === 0)
		{
			return false;
		}
		divisor++;
	}

	return true;
}

// Function to find all prime factors of a number
function primeFactors(n) {
	var factors = [],
		divisor = 2;

	while (n > 2) {
		if (n % divisor === 0)
		{
			factors.push(divisor);
			n /= divisor;
		}
		else
		{
			divisor++;
		}
	}

	return factors;
}

// Fibonacci
function iterFib(n) {
	var fibo = [0, 1];

	for (var i = 0; i < n; i++) {
		fibo.push(fibo[i] + fibo[i + 1]);
	}

	return fibo[n];
}

// Recursive fibonacci
function rFib(n) {
	if (n === 0 || n === 1) {
		return n;
	}

	return rFib(n - 1) + rFib(n - 2);
}