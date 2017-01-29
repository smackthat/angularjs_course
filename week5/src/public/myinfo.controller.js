(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService'];
function MyInfoController(UserService) {
	var mic = this;
	
	mic.user = UserService.user;
	
	mic.userRegistered = function () {
		if (mic.user.firstname === undefined) {
			return false;
		}
		
		return true;	
	};
	
	mic.fabExists = function () {
		if (mic.user.fab === undefined) {
			return false;
		}
		return true;
	};
	
	
}

})();