'use strict';

// set up some needed variables
let sum = 0;
let currentSelections = "";
let prevSum = document.getElementById('prev-output').value;
let currentSum = document.getElementById('current-output').value;

// select necessary elements
let form = document.getElementById('calc-form');
let numButtons = document.querySelectorAll('.calc-number');

// add event listeners
form.addEventListener("submit", handleFormSubmit);

numButtons.forEach(function(numBtn) {
	numBtn.addEventListener('click', handleCalcBtnClick);
});

// event handlers
function handleFormSubmit(e) {
	// grab the current selections span element
	let span = document.getElementById('current-selections');

	// console log the sum
	console.log(sum);

	// reset the sum
	sum = 0;

	// reset our current selections
	currentSelections = "";

	// reset innerHTML for span element
	span.innerHTML = 0;

	// prevent default action
	e.preventDefault();
}

function handleCalcBtnClick(e) {
	// grab value of button
	let valueToAdd = e.target.value;

	// grab the current selections span element
	let span = document.getElementById('current-selections');

	// add value to current selections
	if (currentSelections === "") {
		currentSelections = `${valueToAdd}`
	}
	else {
		currentSelections = `${currentSelections} + ${valueToAdd}`;
	}

	// set innerHTML of current selections span
	span.innerHTML = currentSelections;

	// add value to sum
	sum += parseInt(valueToAdd);

	// prevent default action
	e.preventDefault();
}