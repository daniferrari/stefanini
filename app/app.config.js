'use strict';

angular.
  module('myapp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl : "account-launch/lancamento-conta-legado.html"
        }).
        when('/graficos', {
          templateUrl : "chart/chart.html"
        }).
        otherwise('/');
    }
  ]);
