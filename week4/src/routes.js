(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	//Home page
	.state('home', {
		url: '/',
		templateUrl:'src/menuapp/templates/home.template.html'
	})
	//Categories view
	.state('categories', {
		url: '/categories',
		templateUrl: 'src/menuapp/templates/categories.template.html',
		controller: 'CategoriesController as catc',
		resolve: {
			items: ['MenuDataService', function (MenuDataService) {
				return MenuDataService.getAllCategories();
			}]
		}
	})
	//View for a certain category
	.state('categories.category', {
		url: '/items/{categoryId}',
		templateUrl: 'src/menuapp/templates/items.template.html',
		controller: 'ItemsController as itc',
		resolve: {
			items: ['$stateParams', 'MenuDataService',
			function ($stateParams, MenuDataService) {
				return MenuDataService.getItemsForCategory($stateParams.categoryId);	
			}]
		}
	})
}


})();
