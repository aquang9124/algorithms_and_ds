'use strict';

function GenericModel(data) {
	var _data = data || {};
	var memo = {};
	var dependencies = {};

	this.get = function(k) {
		if (typeof _data[k] === 'object' && _data[k].hasOwnProperty('dependencies') && _data[k].hasOwnProperty('compute')) {
			for (let i = 0; i < _data[k].dependencies.length; i++) {
				if (!dependencies.hasOwnProperty(_data[k].dependencies[i])) {
					dependencies[_data[k].dependencies[i]] = [k];
				}
				else {
					dependencies[_data[k].dependencies[i]] = dependencies[_data[k].dependencies[i]].concat(k);
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
	}
});

console.log(person.get('fullName'));