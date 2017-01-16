(function () {
'use strict';

angular.module('Loader')
.component('loader', {
	templateUrl: 'src/loader/loader.template.html',
	controller: LoaderController
});

LoaderController.$inject = ['$rootScope'];
function LoaderController($rootScope) {
	var $ctrl = this;
	
	$ctrl.showLoader = true;
	
	var cancelListener = $rootScope.$on('menu:processing', function(event,data) {
		
		if (data.on) {
			$ctrl.showLoader = true;
		}
		else {
			$ctrl.showLoader = false;
		}
	});
	
	$ctrl.onDestroy = function () {
		cancelListener();
	};
}


})();
