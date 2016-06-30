( function(angular) {
	angular
		.module('myApp')
		.controller('foodCtrl', foodCtrl);

	function foodCtrl($scope) {

		// ToC
		$scope.getAnimals = getAnimals;
		$scope.apples = 'Apple';

		// Function implementations
		function getAnimals() {
			return 'animal';
		}
	}

} )(angular);