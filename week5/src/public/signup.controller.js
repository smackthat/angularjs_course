(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService'];
function SignUpController(UserService) {
  var suc = this;
  
  suc.form = {};
  
  suc.message = "";
  
  suc.user = [];
  
  suc.itemExists = true;
  
  suc.submit = function() {
	  suc.user.firstname = suc.form.regForm.firstname.$modelValue;
	  suc.user.lastname = suc.form.regForm.lastname.$modelValue;
	  suc.user.email = suc.form.regForm.email.$modelValue;
	  suc.user.phone = suc.form.regForm.phone.$modelValue;
	  suc.user.fab = UserService.user.fab;
	  UserService.user = suc.user;
	   
	  suc.message = "Registered succesfully!";
	  
  };
  
  suc.findItems = function() {
	  var promise = UserService.searchMenu(suc.user.fab);
	  promise.then(function(result) {
		console.log("SUC: ", result);
		if (result === undefined) {
			suc.itemExists = false;
		}
		else {
			UserService.user.fab = result;
			suc.user.fab = result.short_name;
			suc.itemExists = true;
		}
	  });
  }
}

})();