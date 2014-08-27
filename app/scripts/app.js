'use strict';

/**
 * @ngdoc overview
 * @name angularLetusgoApp
 * @description
 * # angularLetusgoApp
 *
 * Main module of the application.
 */
angular
  .module('angularLetusgoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])

    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('ls');
    }])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
    })
    .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl'
    })
    .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
  });
