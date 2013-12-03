'use strict';

angular.module('avonApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/msg', {
        templateUrl: 'views/msg.html',
        controller: 'MsgCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
