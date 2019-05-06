'use strict';

angular.
  module('myapp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl : "chart/chart.html"
        }).
        when('/graficos', {
          templateUrl : "account-launch/lancamento-conta-legado.html"
        }).
        otherwise('/');
    }
  ]);
