'use strict';

function GenericModel(data) {
	var _data = data || {};
	var memo = {};
	// I tried to think of a synonym for dependencies hahaha
	var relianceMapping = {};

	this.get = function(k) {
		if (typeof _data[k] === 'object' && _data[k].hasOwnProperty('dependencies') && _data[k].hasOwnProperty('compute')) {
			for (let i = 0; i < _data[k].dependencies.length; i++) {
				if (!relianceMapping.hasOwnProperty(_data[k].dependencies[i])) {
					relianceMapping[_data[k].dependencies[i]] = [k];
				}
				else if (relianceMapping[_data[k].dependencies[i]].indexOf(k) === -1) {
					relianceMapping[_data[k].dependencies[i]] = relianceMapping[_data[k].dependencies[i]].concat(k);
				}
			}

			if (!memo.hasOwnProperty(k)) {
				memo[k] = _data[k].compute.call(this);
			}
	
			return memo[k];
		}
		else {
			return _data[k];
		}
	}

	this.set = function(k, v) {
		_data[k] = v;

		relianceMapping[k].forEach(function(dependent) {
			memo[dependent] = _data[dependent].compute.call(this);
		}.bind(this));
	}
}

var person = new GenericModel({
	firstName: 'Alex',
	lastName: 'Quang',
	// computed properties
	fullName: {
		dependencies: ['firstName', 'lastName'],
		compute: function() {
			return `${this.get('firstName')} ${this.get('lastName')}`;
		}
	},
	firstNameLowerCase: {
		dependencies: ['firstName'],
		compute: function() {
			return this.get('firstName').toLowerCase();
		}
	},
	lastNameLowerCase: {
		dependencies: ['lastName'],
		compute: function() {
			return this.get('lastName').toLowerCase();
		}
	}
});

console.log(person.get('fullName'));
person.set('firstName', 'Johnny');
console.log(person.get('fullName'));
console.log(person.get('lastNameLowerCase'));