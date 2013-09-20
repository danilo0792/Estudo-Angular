angular.module('upPage',[])
	.directive('up',function(){
		return{
			restrict:'A',
			template:'<div id="subir" ng-click="goToUp()" style="border-radius:100%; background-color:#000; color:FFF;width:50px;height:50px;position:fixed;cursor:pointer;"> ^ </div>',
			replace: true,
			link:function(scope, elemento, atributo){
				scope.goToUp = function(){
					$(document.body).animate({
						'scrollTop': $('#content').offset().top
					},300);
				}
			}
		}
	})




