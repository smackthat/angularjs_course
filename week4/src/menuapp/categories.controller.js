(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'items'];
function CategoriesController(MenuDataService, items) {
	var catc = this;
	
	console.log("Catc fired!");
	
	catc.items = items;
	
	
}


})();
