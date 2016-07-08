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

// binary search tree
function TreeNode(data) {
    this.data = data;
    this.l = this.r = null;
}

TreeNode.prototype = {
    show: function() {
        return this.data;
    }
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype = {
    insert: function(val) {
        var leaf = new TreeNode(val);

        if (this.root === null) {
            this.root = leaf;
        }
        else {
            var current = this.root;
            var parent;

            while (true) {
                parent = current;

                if (val < current.data) {
                    current = current.l;

                    if (current === null) {
                        parent.l = leaf;
                        break;
                    }
                }
                else {
                    current = current.r;

                    if (current === null) {
                        parent.r = leaf;
                        break;
                    }
                }
            }
        }

        return this;
    },
    getMin: function() {
        var current = this.root;
        while (current.l !== null) {
            current = current.l;
        }

        return current.data;
    },
    getMax: function() {
        var current = this.root;
        while(current.r !== null) {
            current = current.r;
        }

        return current.data;
    },
    find: function(val) {
        var current = this.root;

        while (current.data !== val) {
            if (current.data > val) {
                current = current.l;
            }
            else {
                current = current.r;
            }

            if (current === null) {
                return -1;
            }
        }

        return current;
    },
    
};

// binary tree
var BinaryTree = function() {
    this.root = null;
}

var BTNode = function(data) {
    this.data = data;
    this.l = this.r = null;
}

BTNode.prototype = {
    show: function() {
        return this.data;
    }
}

BinaryTree.prototype = {
    insert: function(data) {
        if (this.root === null) {
            this.root = new BTNode(data);
        }
        else {
            this._insert(data, this.root);
        }

        return this;
    },
    _insert: function(data, node) {
        if (node.l === null && node.r === null) {
            var randInt = Math.floor(Math.random() * 10);
            var n = new BTNode(data);

            if (randInt > 5) {
                node.r = n;
                return;
            }
            else {
                node.l = n;
                return;
            }
        }
        else if (node.l === null && node.r !== null) {
            node.l = new BTNode(data);
            return;
        }
        else if (node.r === null && node.l !== null) {
            node.r = new BTNode(data);
            return;
        }
        else if (node.r !== null && node.l !== null) {
            var randInt = Math.floor(Math.random() * 10);

            if (randInt > 5) {
                this._insert(data, node.r);
            }
            else {
                this._insert(data, node.l);
            }
        }
    }
};

function inOrder(node) {
    if (node !== null) {
        inOrder(node.l);
        console.log(node.show());
        inOrder(node.r);
    }
}

function preOrder(node) {
    if (node !== null) {
        console.log(node.show());
        preOrder(node.l);
        preOrder(node.r);
    }
}

function postOrder(node) {
    if (node !== null) {
        postOrder(node.l);
        postOrder(node.r);
        console.log(node.show());
    }
}

// can you win the nim game, 1-3 stones
function winNim(n) {
    return (n % 4) !== 0;
}

function lastToGoal(num) {
    var result = [];

    function getCount(total, path) {
        if (path === undefined) {
            path = "";
        }

        if (winNim(total)) {
            path += total;
        }

        if (total === (num - 3)) {
            result.push(path);
            return;
        }
        else if (total > num) {
            return;
        }

        getCount(total + 1, path);
        getCount(total + 2, path);
        getCount(total + 3, path);
    }

    getCount(1);
    return result;
}

// fisher yates shuffle
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}
