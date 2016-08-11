// require needed API key
var bartKey = require('./config.json').key;

// functions and helpers //
function addEventHandler(el, evt, fn) {
	el.addEventListener(evt, fn);
}

function getElem(elem) {
	return document.querySelector(elem);
}

function handleExpClick(e) {
	e.preventDefault();
	// get monthly take home sum
	var monthlySum = parseInt( getElem( '#monthly-th' ).value ? getElem( '#monthly-th' ).value : 0 );

	// get various expenses
	var rent = parseInt( getElem( '#rent-exp' ).value ? getElem( '#rent-exp' ).value : 0 );
	var transport = parseInt( getElem( '#trans-exp' ).value ? getElem( '#trans-exp' ).value : 0 );
	var food = parseInt( getElem( '#food-exp' ).value ? getElem( '#food-exp' ).value : 0 );
	var misc = parseInt( getElem( '#misc-exp' ).value ? getElem( '#misc-exp' ).value : 0 );

	// get sum of expenses and append html to calc container
	var sum = rent + transport + food + misc;

	if ( getElem('#exp-total') ) {
		getElem( '.exp-sum' ).innerHTML = sum;
	} else {
		var expStr = `<p id="exp-total">Your total monthly expenses will be: <span class="exp-sum">${sum}</span></p>`;
		getElem( '#exp-calc' ).insertAdjacentHTML( 'beforeend', expStr );
	}

	// get remaining money for the month and append html to calc container
	monthlySum -= sum;
	
	if ( getElem('#rem-total') ) {
		getElem( '#rem-total span' ).innerHTML = monthlySum;
	} else {
		var remStr = `<p id="rem-total">You will have <span>${monthlySum}</span> left over each month</p>`;
		getElem( '#exp-calc' ).insertAdjacentHTML( 'beforeend', remStr );
	}
	
}

function handleFareClick(e) {
	e.preventDefault();

	let origin = getElem( '#bart-origin' ).value;
	let destination = getElem( '#bart-dest' ).value;
	let baseURI = `http://api.bart.gov/api/sched.aspx?cmd=fare&orig=${origin}&dest=${destination}&date=today&key=${bartKey}`;

	let request = new XMLHttpRequest();

	request.open('GET', baseURI, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
		// Success!
			let xml = request.responseXML;
			let fare = xml.getElementsByTagName("fare")[0].innerHTML;
			let roundTripTotal = (parseFloat(fare) * 2).toFixed(2);
			let monthlyTransCost = parseFloat(roundTripTotal) * 20;
			
			if ( getElem( '#fare-total' ) && getElem( '#round-trip' ) ) {

				getElem( '#fare-total span' ).innerHTML = `$${fare}`;
				getElem( '#round-trip span' ).innerHTML = `$${roundTripTotal}`;
				getElem( '#trans-monthly span' ).innerHTML = `$${monthlyTransCost}`;

			} else {

				let fareStr = `<p id="fare-total">Your total fare for this trip will be <span>$${fare}</span></p>`;
				let rtStr = `<p id="round-trip">For a round trip your fare will be: <span>$${roundTripTotal}</span></p>`;
				let tStr = `<p id="trans-monthly">In a month you will spend roughly: <span>$${monthlyTransCost}</span> to commute between these locations 5 days a week.</p>`;
				
				getElem( '#fare-calc' ).insertAdjacentHTML( 'beforeend', fareStr );
				getElem( '#fare-calc' ).insertAdjacentHTML( 'beforeend', rtStr );
				getElem( '#fare-calc' ).insertAdjacentHTML( 'beforeend', tStr );

			}
			
		} else {
		// We reached our target server, but it returned an error
			console.error( new Error( `Reached server, but it returned ${request.status}` ) );
		}
	};

	request.onerror = function() {
		// There was a connection error of some sort
		console.log('There was an error');
	};

	request.send();
}

// --- execution --- //

// handler for exp calc
var expBtn = getElem( '.btn-green' );
addEventHandler( expBtn, 'click', handleExpClick );

// handler for fare calculator
var fareBtn = getElem( '.btn-blue' );
addEventHandler( fareBtn, 'click', handleFareClick );