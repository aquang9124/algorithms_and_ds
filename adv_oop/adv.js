'use strict';

function World() {
	this.callUnexposedMethod = function(f) {
		return f();
	};
}

function Entity(_world) {

	function wrapExposedMethod(f, entity) {
        return function () {
            var args = arguments;
            return _world.callUnexposedMethod(function () {
                return f.apply(entity, args);
            });
        };
    }

    this.knockedOut = wrapExposedMethod(function(person) {

    	var outputStr = "You got knocked out! The culprit was " + person;

    	return outputStr;

    }, this);

    this.encounterPerson = wrapExposedMethod(function(person) {

    	var randomInt = Math.floor(Math.random() * 100) + 1,
    		res;

    	if (randomInt <= 50) {
    		res = this.knockedOut(person);
    	} else {
    		res = "You managed to escape from the unfriendly stranger named " + person;
    	}

    	return res;

    }, this);
}

var earth = new World();
var player = new Entity(earth);
console.log(player.encounterPerson('vicious thug'));