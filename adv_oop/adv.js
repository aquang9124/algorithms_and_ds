'use strict';

function World() {
	this.callUnexposedMethod = function(f) {
		return f();
	};
}

function Entity(_world) {

	function wrapExposedMethod(f, entity) {
        return function () {
            let args = arguments;
            return _world.callUnexposedMethod(function () {
                return f.apply(entity, args);
            });
        };
    }

    this.knockedOut = wrapExposedMethod(function(person) {

    	let outputStr = "You got knocked out! The culprit was " + person;

    	return outputStr;

    }, this);

    this.encounterPerson = wrapExposedMethod(function(person) {

    	let randomInt = Math.floor(Math.random() * 100) + 1,
    		res;

    	if (randomInt <= 50) {
    		res = this.knockedOut(person);
    	} else {
    		res = "You managed to escape from the unfriendly stranger named " + person;
    	}

    	return res;

    }, this);
}

// partial classed version
class Universe {
    callUnexposedMethod(fn) {
        return fn();
    }
}

function Person(_universe, name) {

    function wrapExposedMethod(fn) {
        return (...args) => {
            return _universe.callUnexposedMethod( () => {
                return fn.apply(this, args);
            } );
        }
    }

    this.name = name;

    this.shout = wrapExposedMethod( (phrase = "I like eggs") => {
        let result = `${this.name} shouts out: ${phrase}!`;
        console.log(result);
        return result;
    } );
}

// fun with binary trees
class BTNode {
    constructor(data) {
        this.data = data;
        this.l = null;
        this.r = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        let newNode = new BTNode(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let cNode = this.root;

            while (true) {
                if (cNode.data >= data) {
                    if (cNode.l === null) {
                        cNode.l = newNode;
                        break;
                    } else {
                        cNode = cNode.l;
                    }
                } else {
                    if (cNode.r === null) {
                        cNode.r = newNode;
                        break;
                    } else {
                        cNode = cNode.r;
                    }
                }
            }
        }

        return this;
    }

    contains(data) {
        if (this.root === null) {
            return -1;
        }
        else if (this.root.data === data) {
            return true;
        }
        else {
            let cNode = this.root;

            while (cNode) {
                if (cNode.l !== null && data <= cNode.data) {
                    cNode = cNode.l;

                    if (cNode.data === data) {
                        return true;
                    }
                } else if (cNode.r !== null) {
                    cNode = cNode.r;

                    if (cNode.data === data) {
                        return true;
                    }
                } else {
                    break;
                }
            }
        }

        return -1;
    }
}

let bst = new BinarySearchTree();
bst.add(2).add(6).add(4);
console.log(bst.contains(6));

let logApples = (n) => console.log(`${n} apples!`);
logApples(3);