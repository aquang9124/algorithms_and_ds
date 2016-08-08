// functions and helpers //
function addEventHandler(el, evt, fn) {
	el.addEventListener(evt, fn);
}

function getElem(elem) {
	return document.querySelector(elem);
}

function handleClick(e) {
	e.preventDefault();
	// get monthly take home sum
	var monthlySum = parseInt(getElem('#monthly-th').value ? getElem('#monthly-th').value : 0);

	// get various expenses
	var rent = parseInt(getElem('#rent-exp').value ? getElem('#rent-exp').value : 0);
	var transport = parseInt(getElem('#trans-exp').value ? getElem('#trans-exp').value : 0);
	var food = parseInt(getElem('#food-exp').value ? getElem('#food-exp').value : 0);
	var misc = parseInt(getElem('#misc-exp').value ? getElem('#misc-exp').value : 0);

	// get sum of expenses and append html to calc container
	var sum = rent + transport + food + misc;

	if (getElem('#exp-total')) {
		getElem('.exp-sum').innerHTML = sum;
	} else {
		var expStr = `<p id="exp-total">Your total monthly expenses will be: <span class="exp-sum">${sum}</span></p>`;
		getElem('.calc-container').insertAdjacentHTML('beforeend', expStr);
	}

	// get remaining money for the month and append html to calc container
	monthlySum -= sum;
	
	if (getElem('#rem-total')) {
		getElem('#rem-total span').innerHTML = monthlySum;
	} else {
		var remStr = `<p id="rem-total">You will have <span>${monthlySum}</span> left over each month</p>`;
		getElem('.calc-container').insertAdjacentHTML('beforeend', remStr);
	}
	
}

// execution //
var formBtn = getElem('.btn-green');
addEventHandler(formBtn, 'click', handleClick);