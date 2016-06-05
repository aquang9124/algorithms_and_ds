// testing call method
function speak(line) {
	console.log("This type of rabbit (the " + this.type + " rabbit) likes to say: '" + line + "'");
};


var fatRabbit = { type: 'fat', speak: speak };
var oldRabbit = { type: 'old', speak: speak };

speak.call(oldRabbit, 'I sure could use a nap.');
speak.call(fatRabbit, 'I wonder what that tastes like...');

// testing constructors
function rabbit(type) {
	this.type = type;
}

rabbit.prototype.speak = function(line) {
	console.log("This type of rabbit (the " + this.type + " rabbit) likes to say: '" + line + "'");
};

// testing call on arrays using prototype
console.log(Array.prototype.toString.call([1, 2, 3]));