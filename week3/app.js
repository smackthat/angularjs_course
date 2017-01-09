//The standard code for reference, the minified code is in use
//This was a fun & challenging task! :-)
/*
(function() {
	'use strict';
	
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.constant('ApiPath', "http://davids-restaurant.herokuapp.com/menu_items.json")
	.directive('foundItems',FoundItemsDirective);
	
	
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController (MenuSearchService) {
		var nidc = this;
		
		nidc.query = "";
		
		nidc.found = [];
		
		nidc.nothingFound = false;
		
		nidc.logItems = function (name) {
			var promise = MenuSearchService.getMatchedMenuItems(name);

			promise.then(function (response) {
				nidc.found = response;
				if (nidc.found.length === 0) {
					nidc.nothingFound = true;
				}
				else {
					nidc.nothingFound = false;
				}
				})
				.catch(function (error) {
					console.log(error);
					})
		};
		
		nidc.removeItem = function (index) {
			nidc.found.splice(index, 1);
		};
		

		
	}
	
	MenuSearchService.$inject = ['$http','ApiPath'];
	function MenuSearchService ($http,ApiPath) {
		var mss = this;
		
		mss.getMatchedMenuItems = function (word) {
			
			var foundItems = [];
			
			 var response = $http({
				 method: "GET",
				 url: (ApiPath)
			 });
				 return response.then(function (result) {
					 if (word.length === 0)
						 return foundItems;
					 var items = result.data.menu_items;
					 for (var i=0; i < items.length; i++) {
						if (items[i].name.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
							foundItems.push(items[i]);
						}
					 }
					 
					 return foundItems;
				 });
		};
		
	}
	
	function FoundItemsDirective () {
		var ddo = {
			templateUrl: "loader/itemsloaderindicator.template.html",
			scope: {
				onRemove: '&',
				items: '<',
				nothing: '<'
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'list',
			bindToController: true
		};
		
		return ddo;	
	}
	
	
	
	function FoundItemsDirectiveController () {
		var list = this;
		
		list.isEmpty = function () {
			if (list.nothing === true) {
				return true;
			}
			else {
				return false;
			}
		}
		
	}
	
})();

*/

!function(){"use strict";function n(n){var t=this;t.query="",t.found=[],t.nothingFound=!1,t.logItems=function(e){var o=n.getMatchedMenuItems(e);o.then(function(n){t.found=n,0===t.found.length?t.nothingFound=!0:t.nothingFound=!1})["catch"](function(n){console.log(n)})},t.removeItem=function(n){t.found.splice(n,1)}}function t(n,t){var e=this;e.getMatchedMenuItems=function(e){var o=[],r=n({method:"GET",url:t});return r.then(function(n){if(0===e.length)return o;for(var t=n.data.menu_items,r=0;r<t.length;r++)-1!==t[r].name.toLowerCase().indexOf(e.toLowerCase())&&o.push(t[r]);return o})}}function e(){var n={templateUrl:"loader/itemsloaderindicator.template.html",scope:{onRemove:"&",items:"<",nothing:"<"},controller:o,controllerAs:"list",bindToController:!0};return n}function o(){var n=this;n.isEmpty=function(){return n.nothing===!0?!0:!1}}angular.module("NarrowItDownApp",[]).controller("NarrowItDownController",n).service("MenuSearchService",t).constant("ApiPath","http://davids-restaurant.herokuapp.com/menu_items.json").directive("foundItems",e),n.$inject=["MenuSearchService"],t.$inject=["$http","ApiPath"]}();