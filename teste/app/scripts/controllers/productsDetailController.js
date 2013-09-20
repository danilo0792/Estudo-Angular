'use strict';

angular.module('testeApp').
controller('productsDetailController', function($scope, product){
	console.log(product.data)
	$scope.product = product.data
});