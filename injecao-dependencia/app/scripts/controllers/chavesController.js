// Criando controller chavesController e passando como parametro o $scope(variável que liga controller com view), chaves que é uma 
// factory que eu criei no meu módulo watchaTcha e notificacao que eu criei atraves de um array notation 
function chavesController($scope,chaves,notificacao){
	$scope.teste = "";
	$scope.mensagem ="";
	// console.log(chaves);
	console.log(notificacao);

	// Criando função digaAlgo que recebe como parametro uma palavra, que vai ser alertada através do window.alert da factory
	$scope.digaAlgo = function(palavra){
		//executando o método fala de chaves(método criado no módulo e passado como parametro)
		chaves.fala(palavra);
	};


	$scope.chamarNotificacao = function(msg){
		notificacao(msg);
	};
}