'use strict';
// Injetando dependencia no módulo --> ui.bootstrap (Diretiva)
angular.module('testeApp', ['ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/about',{
        templateUrl:'views/about.html'
        
      })

      .when('/contact',{
        templateUrl:'views/contact.html',
        controller:'contactController'
      })

      .when('/products',{
        templateUrl:'views/products.html',
        controller:'productsController'
      })

      .when('/products/:product',{
        templateUrl:'views/productDetail.html',
        controller:'productsDetailController'
      })      

      .when('/home',{
        templateUrl: 'views/home.html',
        controller:'homeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
