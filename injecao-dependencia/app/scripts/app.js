'use strict';
// Injetando o módulo watchaTcha no módulo injecaoDependenciaApp
angular.module('injecaoDependenciaApp', ['watchaTcha','testeServico','animations'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  //Criando Móludo chamado --> watchaTcha
  angular.module('watchaTcha',[]).
    //Injetando em chaves o objeto $window 
    factory('chaves',function($window){
      return{
        //Criando método fala(parametro), da função chaves
        fala:function(palavra){
          //Alertando o parametro passado dentro do método fala.
          $window.alert(palavra);
        }
      };
    });

  // Criando Módulo testeServico
  angular.module('testeServico',[]).
    //Usando Array Notation, atribuindo $window em win e injetando a funcao em notificacao
    factory('notificacao',['$window',function(win){
      var msgs = [];
      //Criando um método, com um parametro msg(construtor).
      return function (msg){
        msgs.push(msg);

        if(msgs.length == 3){
          win.alert(msgs.join("\n"));
          msgs = [];
        }
      }
    }]);
