
angular.
  module('myapp').controller('lancamentoContaController', function ($scope,  $http, releases) {

    var promise = releases.getReleases();
    promise.then(function(payload) {
            $scope.data = payload;
        },
        function(errorPayload) {
            $log.error('failure loading movie', errorPayload);
        });
});