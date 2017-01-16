(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$rootScope','$http'];
function MenuDataService($rootScope, $http) {
	var service = this;
	
	service.getAllCategories = function () {
		$rootScope.$broadcast('menu:processing', {on: true});
		var response = $http({
			method: "GET",
			url: 'https://davids-restaurant.herokuapp.com/categories.json'
		});
		return response.then(function(result) {
			return result.data;
		})
		.catch (function (error) {
			console.log(error);
		})
		.finally (function() {
			$rootScope.$broadcast('menu:processing', {on: false});
		});
	};
	
	service.getItemsForCategory = function (shortName) {
		$rootScope.$broadcast('menu:processing', {on: true});
		var response = $http({
			method: "GET",
			url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+shortName
		});
		return response.then(function(result) {
			console.log("Data:", result.data.menu_items);
			return result.data.menu_items;
		})
		.catch (function (error) {
			console.log(error);
		})
		.finally (function() {
			$rootScope.$broadcast('menu:processing', {on: false});
		});
		
	};
	
}

})();
