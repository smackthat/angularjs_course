//*** The standard code for reference, the minified code is in use ***
/*
(function() {
	'use strict';
	
	angular.module('ShoppingListCheckOff', [])
	.controller("ToBuyController",ToBuyController)
	.controller("AlreadyBoughtController",AlreadyBoughtController)
	.service("ShoppingListCheckOffService",ShoppingListCheckOffService);
	
	
	//Controllers
	
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var tbctrl = this;
		
		tbctrl.itemName = "";
		tbctrl.itemQty = 2;
		
		tbctrl.items = ShoppingListCheckOffService.getBuyItems();
		
		tbctrl.isEmpty = function() {
			return ShoppingListCheckOffService.ToBuyEmpty();
		};
		
		
		tbctrl.moveItem = function(itemIndex) {
			ShoppingListCheckOffService.moveItem(itemIndex);
		};
		
		tbctrl.addItem = function() {
			ShoppingListCheckOffService.addItem(tbctrl.itemName, tbctrl.itemQty);
		};
		
		tbctrl.removeItem = function(indx) {
			ShoppingListCheckOffService.removeBuyItem(indx);
		};
		
	}
	
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var abctrl = this;
		
		abctrl.items = ShoppingListCheckOffService.getBoughtItems();
		
		abctrl.isEmpty = function() {
			return ShoppingListCheckOffService.BoughtEmpty();
		};
		
		abctrl.removeItem = function(indx) {
			ShoppingListCheckOffService.removeBoughtItem(indx);
		};
	}
	
	//Service
	
	function ShoppingListCheckOffService() {
		var slcoservice = this;
		
		//The array containing the items to buy
		var ToBuyItems = [
			{
				name: "Bananas",
				quantity: 2
			},
			{
				name: "Muttons",
				quantity: 4
			},
			{
				name: "Spam",
				quantity: 6
			},
			{
				name: "Sausages",
				quantity: 8
			},
			{
				name: "Pork Rolls",
				quantity: 12
			}
		];
		
		//The array containing already bought items
		var BoughtItems = [];
		
		//The function to move the item from buy items to bought items
		slcoservice.moveItem = function (indx) {
			var movedItem = ToBuyItems.splice(indx,1);
			BoughtItems.push(movedItem[0]);
		};
		
		slcoservice.addItem = function(itemName, qty) {
			var item = {
				name: itemName,
				quantity: qty
			};
			ToBuyItems.push(item);
		};
		
		slcoservice.ToBuyEmpty = function() {
			return ToBuyItems.length === 0;
		};
		
		slcoservice.BoughtEmpty = function() {
			return BoughtItems.length === 0;
		};
		
		slcoservice.getBuyItems = function() {
			return ToBuyItems;
		};
		
		slcoservice.getBoughtItems = function() {
			return BoughtItems;
		};
		
		slcoservice.removeBuyItem = function(indx) {
			ToBuyItems.splice(indx,1);
		};
		
		slcoservice.removeBoughtItem = function(indx) {
			BoughtItems.splice(indx,1);
		};
	}
	
})();
*/


//The minified code, this is in use!
!function(){"use strict";function t(t){var e=this;e.itemName="",e.itemQty=2,e.items=t.getBuyItems(),e.isEmpty=function(){return t.ToBuyEmpty()},e.moveItem=function(e){t.moveItem(e)},e.addItem=function(){t.addItem(e.itemName,e.itemQty)},e.removeItem=function(e){t.removeBuyItem(e)}}function e(t){var e=this;e.items=t.getBoughtItems(),e.isEmpty=function(){return t.BoughtEmpty()},e.removeItem=function(e){t.removeBoughtItem(e)}}function n(){var t=this,e=[{name:"Bananas",quantity:2},{name:"Muttons",quantity:4},{name:"Spam",quantity:6},{name:"Sausages",quantity:8},{name:"Pork Rolls",quantity:12}],n=[];t.moveItem=function(t){var i=e.splice(t,1);n.push(i[0])},t.addItem=function(t,n){var i={name:t,quantity:n};e.push(i)},t.ToBuyEmpty=function(){return 0===e.length},t.BoughtEmpty=function(){return 0===n.length},t.getBuyItems=function(){return e},t.getBoughtItems=function(){return n},t.removeBuyItem=function(t){e.splice(t,1)},t.removeBoughtItem=function(t){n.splice(t,1)}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",n),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();
