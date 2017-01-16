(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
	var service = this;
	
	service.getAllCategories = function () {
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
	};
	
	service.getItemsForCategory = function (shortName) {
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
		
	};
	
}

})();
