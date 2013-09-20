'use strict';

angular.module('testeApp').
	controller('productsController', function($scope,$http, $dialog){
		$http.get('products/produtos.json').success(function(data){
			$scope.products = data;
		})

		$scope.openModal = function(id){
			var options = {
				backdropFade:true,
				dialogFade:true,
				backdropClick:false,
				templateUrl:'views/productDetail.html',
				controller: 'productsDetailController',
				resolve: {
					product: function(){
						return $http.get('products/'+ id +'.json').success(function(data){
							return data
						})
					}
				}
			};
			var d = $dialog.dialog(options);
			d.open();
		}
	});