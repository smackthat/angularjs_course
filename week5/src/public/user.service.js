(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);


UserService.$inject = ['$http'];
function UserService($http) {
  var service = this;
  
  service.user = [];
  
  service.isRegistered = function () {
	if (service.user > 0 ) {
		return true;
	}
	return false;
  };
  
  service.searchMenu = function (name) {
	  var response = $http({
		 method: "GET",
		 url: "https://smackthat-angular.herokuapp.com/menu_items/"+name+".json"
	  })
	  .catch (function (error) {
		 return "";
	  });
	  return response.then(function(result) {
		return result.data;  
	  })

  };
  
}


})();
