'use strict';
// climb stairs slightly more efficiently
function climbStairs(n) {
	if (n === 1) {
		return 1;
	}
	else if (n === 2) {
		return 2;
	}

	return climbStairs(n - 1) + climbStairs(n - 2);
}

// reverse digits of an integer
var reverse = function(x) {
    x = x.toString().split('');
    var i = 0;
    
    if (x[0] === '-') {
        i = 1;
    }
    
    for (var j = x.length - 1; i <= j; i++, j--) {
        var temp = x[i];
        x[i] = x[j];
        x[j] = temp;
    }
    
    return parseInt(x.join(''));
};

// testing OO in JS
var bindedToThis = function() {
    var person = {
        name: 'Alex',
        talk() {
            console.log(this.name + " says hello world!");
        }
    };

    return person.talk.bind(person);
};

function origin(a, b) {
    console.log('I like ' + a + " and " + b);
}

function convertFunc(fn) {
    return function() {
        fn.apply(null, arguments);
    };
}

var animalSounds = function(sound) {
    var animal = {
        sound: sound,
        makeSound(_, target) {
            console.log('The animal says: ' + this.sound + " to scare away " + target);
        }
    };

    animal.makeSound.apply(animal, arguments);
};

// string to array
function splitUp(str, delimiter) {
    var result = [];
    var word = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === delimiter) {
            result.push(word);
            word = "";
            continue;
        }

        word += str[i];
    }

    if (word.length !== 0) {
        result.push(word);
    }

    return result;
}

// longest word in string
function longestWord(str) {
    str = str.split(' ');
    var longest = str[0];
    var letters = str[0].length;

    for (var i = 1; i < str.length; i++) {
        
        if (str[i].length > letters) {
            longest = str[i];
            letters = str[i].length;
        }
    }

    return longest;
}

console.log(longestWord('Snap crackle pop makes the world go round!'));

// binary tree
function TreeNode(value) {
    this.value = value;
    this.left = this.right = null;
}

function BinaryTree() {
    this.root = null;
}