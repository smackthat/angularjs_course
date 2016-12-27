(function() {
	'use strict';
	
	angular.module('LunchCheck', [])
	.controller('LunchController',LunchController);
	
	LunchController.$inject = ['$scope','$filter'];
	
	function LunchController($scope) {
		$scope.lunch = "";
		$scope.message = "Insert lunch items";
		
		$scope.check = function () {
			var items = $scope.lunch.split(/,\s+?|,/).filter(Boolean);
			console.log(items);
			if (items.length > 3) {
				$scope.messageStyle = {
					"color" : "red",
					"border" : "1px solid red"
				}
				$scope.message = "Too much!";
			}
			else if (items.length === 0) {
				$scope.message = "Please enter data first";
				$scope.messageStyle = {
					"color" : "black",
					"border" : "none"
				}
			}
			else {
				$scope.message = "Enjoy!";
				$scope.messageStyle = {
					"color" : "green",
					"border" : "1px solid green"
				}
			}
		}
	}
	
})();