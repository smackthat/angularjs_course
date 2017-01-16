(function () {
'use strict';


angular.module('Data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(MenuDataService, items) {
	var itc = this;
	
	console.log("DERP!", items);
	
	itc.items = items;
	
	
}



})();
