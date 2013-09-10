function recuperaNomesController($scope, $http)
{

	// $scope.getNome = function(){ Pegar Nome através de uma função
		$http.get("exemplo/listaNomes.json").success(function(data){
			$scope.nomes = data;
			console.log($scope.nomes);
		}).error(function(data){
			alert("Error..");
			console.log(data);
		})
	// }	

	$scope.mostrarDescricao = function(id){
		$http.get("exemplo/" + id + ".json").success(function(data){
			$scope.profile = data;
			console.log($scope.profile);
		})
	}
}

