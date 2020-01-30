(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function($scope) {
	$scope.checkIfTooMuch = function() {
		console.log('checkIfTooMuch', $scope.dishes);
		var dishes = $scope.dishes.split(',');
		console.log('dishes', dishes);
		if ($scope.dishes == '') {
			$scope.message = 'Please enter data first';
		} else if (dishes.length > 0 && dishes.length <= 3) {
			$scope.message = 'Enjoy!';
		} else if (dishes.length > 3) {
			$scope.message = 'Too much!';
		}
	};
});

})();