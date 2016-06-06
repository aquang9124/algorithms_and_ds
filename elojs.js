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

// testing objects without prototypes
( function() {
	var noProto = Object.create(null);
	noProto.apples = 'tasty';
	console.log(noProto);
		
} )();

// testing getters and setters
var pile = {
	elements: ['apples', 'oranges', 'bananas'],
	get height() {
		return this.elements.length;
	},
	set height(value) {
		console.log("Ignoring attempt to set height to " + value);
	}
};

// console.log(pile.height);
// pile.height = 100;

// testing of object inheritance
function tableCell(text) {
	this.text = text.split("\n");
}

tableCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) {
		return Math.max(width, line.length);
	}, 0);
};