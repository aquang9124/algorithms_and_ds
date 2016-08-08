'use strict';

// --------------- Function Implementations ----------------- //

// attach event listener to input form button
function onClick(el, fn) {
	el.addEventListener('click', fn);
}

// handle click events
function handleClick(e) {
	var rentNum = parseInt(document.querySelector('#exp-rent').value);
	var transNum = parseInt(document.querySelector('#exp-transport').value);
	var foodNum = parseInt(document.querySelector('#exp-food').value);
	var miscNum = parseInt(document.querySelector('#exp-misc').value);

	var sum = rentNum + transNum + foodNum + miscNum;

	document.querySelector('.total-exp').value = sum;

	e.preventDefault();

}

// ------------ Execution -------------------- //
var btn = document.querySelector('#submit-btn');
onClick(btn, handleClick);