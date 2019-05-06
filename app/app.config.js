'use strict';

angular.
  module('myapp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl : "account-launch/account-launch.html"
        }).
        when('/graficos', {
          templateUrl : "chart/chart.html"
        }).
        otherwise('/');
    }
  ]);
