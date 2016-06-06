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

// elojs project 1
var plan = ["####################"
			"#        ##   o   ##"
			"#                  #"
			"#      #  #   o   ##"
			"#     #  o #    #  #"
			"#          #       #"
			"#                  #"
			"#   #     #     o  #"
			"####################"];

function Vector(x, y) {
	this.x = x,
	this.y = y
}

Vector.prototype.plus = function(other) {
	return new Vector(this.x + other.x, this.y + other.y);
};

var grid = ["top left", "top middle", "top right",
		    "bottom left", "bottom middle", "bottom right"];
// element at x, y is found at position x + (y * width) of array.
// for example, grid[2 + (1 * 3)]
function Grid(width, height) {
	this.space = new Array(width * height),
	this.width = width,
	this.height = height
}

Grid.prototype.isInside = function(vector) {
	return vector.x >= 0 && vector.x < this.width &&
		   vector.y >= 0 && vector.y < this.height;
};

Grid.prototype.get = function(vector) {
	return this.space[vector.x + this.width * vector.y];
};

Grid.prototype.set = function(vector) {
	this.space[vector.x + this.width * vector.y] = value;
};

var directions = {
	"n": new Vector(0, -1),
	"ne": new Vector(1, -1),
	"e": new Vector(1, 0),
	"se": new Vector(1, 1),
	"s": new Vector(0, 1),
	"sw": new Vector(-1, 1),
	"w": new Vector(-1, 0),
	"nw": new Vector(-1, -1)
};