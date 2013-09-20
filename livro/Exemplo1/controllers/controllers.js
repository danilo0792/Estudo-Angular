function simpleController($scope){
	$scope.user = {name:"Daniel"}
}

function countController($scope){
	$scope.counter = 0;

	$scope.addOne = function(){
		$scope.counter++;
	}
}

function loopController($scope){
	$scope.fruits = ['banana', 'apple','orange'];
}