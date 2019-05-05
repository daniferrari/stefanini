'use strict';

angular.
  module('lancamentoConta').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: '/app/lancamento-conta-legado.html',
        })
        .otherwise('/', {
          templateUrl: '/app/lancamento-conta-legado.html',
        });
    }
  ]);