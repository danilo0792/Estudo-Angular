'use strict';

angular.module('testeApp').
	controller('contactController',function($scope){
		$scope.nome='Danilo',
		$scope.email ='danilo_sp06@hotmail.com';

		$scope.enviar = function(){
			alert($scope.nome + '\n' + $scope.email);
		
		}
	});